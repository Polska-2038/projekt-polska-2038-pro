import json
import os
import time
import smtplib
import traceback
import logging
import urllib.error
import urllib.request
from email.message import EmailMessage
from typing import Dict, List, Optional, Tuple

import anyio
from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db
from models import ContactMessage
from schemas import ContactMessageIn, ContactMessageOut

router = APIRouter()
logger = logging.getLogger("polska2038.contact")

def _stakeholder_recipients() -> List[str]:
    """Comma-separated in CONTACT_NOTIFY_TO."""
    raw = os.getenv("CONTACT_NOTIFY_TO", "polska2038@proton.me")
    return [e.strip() for e in raw.split(",") if e.strip()]

# Simple in-memory rate limit per IP (good enough for single-instance / public demo).
_ip_hits: Dict[str, List[float]] = {}
WINDOW_S = 60 * 60           # 1 hour
MAX_PER_HOUR = 5
MIN_GAP_S = 20               # at least 20s between messages per IP


def _clean_header_value(v: str) -> str:
    # Prevent header injection / invalid From/Subject values.
    return (v or "").replace("\r", " ").replace("\n", " ").strip()


def _client_ip(request: Request) -> str:
    # Prefer proxy headers if present (Render / Nginx etc.)
    xff = request.headers.get("x-forwarded-for")
    if xff:
        return xff.split(",")[0].strip()
    return request.client.host if request.client else "unknown"


def _rate_limit_or_429(ip: str) -> None:
    now = time.time()
    hits = _ip_hits.get(ip, [])
    hits = [t for t in hits if now - t <= WINDOW_S]
    if hits and (now - hits[-1]) < MIN_GAP_S:
        raise HTTPException(status_code=429, detail="Zbyt szybkie wysyłanie. Spróbuj ponownie za chwilę.")
    if len(hits) >= MAX_PER_HOUR:
        raise HTTPException(status_code=429, detail="Limit wiadomości na godzinę został przekroczony.")
    hits.append(now)
    _ip_hits[ip] = hits


def _resend_api_key() -> Optional[str]:
    """Resend API key from RESEND_API_KEY or SMTP_PASS when it looks like re_…"""
    for name in ("RESEND_API_KEY", "SMTP_PASS"):
        val = (os.getenv(name) or "").strip()
        if val.startswith("re_"):
            return val
    return None


def _smtp_credentials() -> Tuple[str, int, str, str, bool]:
    """Return (host, port, user, password, use_tls). Auto-fills Resend SMTP when only API key is set."""
    api_key = _resend_api_key()
    host = (os.getenv("SMTP_HOST") or "").strip()
    user = (os.getenv("SMTP_USER") or "").strip()
    password = (os.getenv("SMTP_PASS") or "").strip()
    use_tls = os.getenv("SMTP_TLS", "true").lower() in ("1", "true", "yes")
    port_default = "587" if use_tls else "465"
    port = int(os.getenv("SMTP_PORT", port_default))

    if api_key and not host:
        return ("smtp.resend.com", 587, "resend", api_key, True)

    if not host or not user or not password:
        raise RuntimeError(
            "Email is not configured. Set RESEND_API_KEY (or SMTP_HOST/SMTP_USER/SMTP_PASS)."
        )

    return (host, port, user, password, use_tls)


def _default_from() -> str:
    custom = (os.getenv("SMTP_FROM") or "").strip()
    if custom:
        return _clean_header_value(custom)
    if _resend_api_key():
        return "Polska2038 <powiadomienia@polska2038.pl>"
    return "Polska2038 Powiadomienia <powiadomienia@polska2038.pl>"


def _send_via_resend_api(msg: EmailMessage, api_key: str) -> None:
    """HTTPS delivery — preferred on Vercel serverless (no SMTP port issues)."""
    payload: dict = {
        "from": msg["From"],
        "to": [a.strip() for a in msg["To"].split(",") if a.strip()],
        "subject": msg["Subject"],
        "text": msg.get_content(),
    }
    reply_to = msg.get("Reply-To")
    if reply_to:
        payload["reply_to"] = reply_to

    req = urllib.request.Request(
        "https://api.resend.com/emails",
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=25) as resp:
            if resp.status >= 300:
                raise RuntimeError(f"Resend API HTTP {resp.status}")
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")[:300]
        raise RuntimeError(f"Resend API HTTP {e.code}: {body}") from e


def _smtp_send(msg: EmailMessage) -> None:
    host, port, user, password, use_tls = _smtp_credentials()

    if use_tls:
        with smtplib.SMTP(host, port, timeout=20) as s:
            s.starttls()
            s.login(user, password)
            s.send_message(msg)
    else:
        with smtplib.SMTP_SSL(host, port, timeout=20) as s:
            s.login(user, password)
            s.send_message(msg)


def _deliver_email(msg: EmailMessage) -> None:
    api_key = _resend_api_key()
    if api_key:
        try:
            _send_via_resend_api(msg, api_key)
            return
        except Exception:
            logger.warning("Resend HTTP API failed, falling back to SMTP", exc_info=True)
    _smtp_send(msg)


@router.post("/contact", response_model=ContactMessageOut)
async def submit_contact(data: ContactMessageIn, request: Request, db: AsyncSession = Depends(get_db)):
    """
    Public "manifesto delivery system":
    - saves the message to DB
    - forwards it by email to multiple stakeholders
    """
    ip = _client_ip(request)
    _rate_limit_or_429(ip)

    ua = request.headers.get("user-agent")

    # Persist
    try:
        row = ContactMessage(
            name=data.name.strip(),
            org=(data.org or "").strip() or None,
            email=str(data.email).strip(),
            role=(data.role or "").strip() or None,
            subject=data.subject.strip(),
            message=data.message.strip(),
            lang=(data.lang or "").strip() or None,
            page=(data.page or "").strip() or None,
            ip=ip,
            user_agent=(ua[:400] if ua else None),
        )
        db.add(row)
        await db.commit()
        await db.refresh(row)
    except Exception as e:
        print("Contact DB persist failed:", repr(e))
        print("Traceback:\n", traceback.format_exc())
        raise HTTPException(status_code=503, detail="Database error. Please try again later.")

    # Build email
    # From must be in a domain verified in Resend (avoid proton.me here).
    from_addr = _default_from()
    subject = _clean_header_value(f"Projekt #Polska2038 - Głos Obywatelski: {data.subject.strip()}")

    body = "\n".join([
        "Nowa wiadomość z formularza publicznego (manifesto delivery).",
        "",
        f"Imię i nazwisko: {data.name}",
        f"Organizacja: {data.org or '-'}",
        f"E-mail nadawcy: {data.email}",
        f"Rola / instytucja: {data.role or '-'}",
        f"Język: {data.lang or '-'}",
        f"Strona: {data.page or '-'}",
        f"IP: {ip}",
        "",
        "Treść:",
        data.message,
        "",
        f"(ID zgłoszenia: {row.id})",
    ])

    msg = EmailMessage()
    msg["From"] = from_addr
    msg["To"] = ", ".join(_stakeholder_recipients())
    msg["Subject"] = subject
    msg["Reply-To"] = _clean_header_value(str(data.email))
    msg.set_content(body)

    try:
        await anyio.to_thread.run_sync(_deliver_email, msg)
    except Exception as e:
        logger.exception("Email delivery failed")
        # Do not lose stored message; report that delivery failed.
        debug = os.getenv("SMTP_DEBUG", "").lower() in ("1", "true", "yes")
        if debug:
            # Return a safe, non-secret hint to diagnose relay setup.
            detail = f"SMTP send failed ({type(e).__name__}): {str(e)[:240]}"
        else:
            detail = "Nie udało się wysłać wiadomości e-mail. Spróbuj później."
        raise HTTPException(status_code=502, detail=detail)

    return row

