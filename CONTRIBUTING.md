# Współpraca i fork — #Polska2038

Dziękujemy za chęć rozwijania lub adaptacji projektu. Inicjatywa jest **pro bono** — celem jest inspirowanie realnych wdrożeń, nie monopol na pomysł.

Przeczytaj najpierw: [INSPIRATION.md](INSPIRATION.md) · [DISCLAIMER.md](DISCLAIMER.md)

---

## Szybki start (developer)

```bash
git clone https://github.com/Polska-2038/projekt-polska-2038-pro.git
cd projekt-polska-2038-pro
npm install
cp .env.example .env.local   # opcjonalnie VITE_API_URL
npm run dev
```

Backend (osobny terminal):

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate          # Windows
pip install -r requirements.txt
cp .env.example .env            # SECRET_KEY, opcjonalnie DATABASE_URL
uvicorn main:app --reload --port 8000
```

Demo logowania skauta: `skaut@polska2038.pl` / `haslo123` (tylko środowisko demo).

---

## Fork pod gminę / klub / federację

1. **Fork** repozytorium na swoim koncie GitHub.
2. Zmień branding (nazwa, kolory w `tailwind.config.js`, teksty w `src/i18n/`).
3. Usuń lub oznacz sekcje Media Buzz / partnerów, jeśli nie macie zgód na znaki.
4. Ustaw własne `CONTACT_NOTIFY_TO`, `RESEND_API_KEY` (lub SMTP) w Vercel.
5. Podłącz **Postgres** (`DATABASE_URL`) zamiast SQLite — dane demo nie są produkcyjne.
6. Opublikuj własną politykę prywatności (możecie wzorować się na naszej na polska2038.pl).

**Komunikacja publiczna:** nie nazywajcie produktu „oficjalnym programem PZPN/MSiT” bez umowy.

---

## Pull requesty do upstream

 mile widziane:

- poprawki błędów, dostępność (a11y), tłumaczenia EN,
- dokumentacja wdrożenia,
- usprawnienia API bez breaking changes,
- testy (jeśli dodacie — opiszcie w PR).

Prosimy o:

- krótki opis PR po polsku lub angielsku,
- brak commitów z sekretami (`.env`, klucze API),
- zachowanie zgodności z [MIT](LICENSE) (Copyright notice).

Nie gwarantujemy merge — projekt jest utrzymywany społecznie pro bono.

---

## Zgłoszenia błędów i bezpieczeństwa

- Błędy: [GitHub Issues](https://github.com/Polska-2038/projekt-polska-2038-pro/issues)
- Bezpieczeństwo: polska2038@proton.me (proszę nie publikować exploitów w publicznym issue)

---

## Licencja Twojego wkładu

Wysyłając PR, zgadzasz się na udostępnienie wkładu na licencji **MIT**, zgodnej z [LICENSE](LICENSE).

Treści copy/marketing w PR mogą podlegać [LICENSE-MATERIALS.md](LICENSE-MATERIALS.md) (CC BY 4.0) — zaznacz w PR, jeśli to wyłącznie tekst.
