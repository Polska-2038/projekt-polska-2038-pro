# 🇵🇱 #Polska2038 — koncepcja Narodowego Systemu Operacyjnego Sportu

> **„W 2038 Polska może wygrać Mistrzostwa Świata — nie przez szczęście, lecz przez system.”**

[![License: MIT](https://img.shields.io/badge/code-MIT-00E5FF?style=flat-square)](LICENSE)
[![Materials: CC BY 4.0](https://img.shields.io/badge/materials-CC%20BY%204.0-FFD700?style=flat-square)](LICENSE-MATERIALS.md)
[![Demo Live](https://img.shields.io/badge/demo-polska2038.pl-00FF88?style=flat-square)](https://polska2038.pl)

**Inicjatywa obywatelska pro bono** — strona prezentacyjna + **open source (MIT)** do forkowania i pilotaży lokalnych.  
Pełny opis dla wdrażających: **[INSPIRATION.md](INSPIRATION.md)** · Zastrzeżenia: **[DISCLAIMER.md](DISCLAIMER.md)** · Współpraca: **[CONTRIBUTING.md](CONTRIBUTING.md)**

---

## Czym jest ten projekt?

**#Polska2038** to **wizja** systematycznego wykrywania talentów sportowych w skali kraju (dane, mapy, AI — z poszanowaniem prywatności) oraz **działający prototyp**:

- strona programu (PL/EN), reforma, dokumenty koncepcyjne, kalkulator ROI (demo),
- panel skauta i mapa województw z **danymi demonstracyjnymi**,
- API FastAPI (kontakt, auth demo, talenty, województwa),
- deploy na [polska2038.pl](https://polska2038.pl).

**Czego tu nie ma:** sieci LiDAR na 10 000 Orlików, produkcyjnego modelu AI, integracji PZPN/FIFA. To opisane w [INSPIRATION.md](INSPIRATION.md) jako ścieżka wdrożenia.

Treści o partnerach, mediach i talentach na stronie mają charakter **scenariuszowy / ilustracyjny** — nie są oficjalnymi komunikatami federacji ani ministerstw. Szczegóły: [regulamin](https://polska2038.pl/regulamin).

---

## Trzy filary (do realizacji w terenie)

| Filar | Skrót |
|-------|--------|
| **Polska 2038** | TalentRadar — każdy zawodnik ma szansę być zauważony |
| **Bezpieczny stadion** | Odpowiedzialny kibic i organizacja |
| **Ocena trenerów** | Audyt zewnętrzny (np. AWF) |

---

## Stack (stan repozytorium)

| Warstwa | Technologia |
|---------|-------------|
| Frontend | React 18, Vite, Tailwind, Framer Motion, i18n |
| Backend | FastAPI, SQLAlchemy, SQLite (dev) / Postgres (prod) |
| Deploy | Vercel (frontend + serverless API) |
| E-mail | Resend lub SMTP (`backend/routers/contact.py`) |
| Mapa | GeoJSON województw — [polska-geojson](https://github.com/ppatrzyk/polska-geojson) (MIT) |

**Docelowa architektura programu** (LiDAR, PostGIS, federated learning, zero-video) — opis koncepcyjny w UI i materiałach; implementacja pozostaje zadaniem wdrożenia.

---

## Struktura repozytorium

```
projekt-polska-2038-pro/
├── src/                 # React — strona, panel demo, legal, cookies
├── backend/             # FastAPI, modele, seed demo
├── api/                 # Vercel entrypoint
├── public/geo/          # Województwa GeoJSON + licencja
├── scripts/             # Prerender, sitemap, OG
├── docs/                # Indeks dokumentacji
├── INSPIRATION.md       # Jak wcielić wizję w życie
├── CONTRIBUTING.md      # Fork i PR
├── DISCLAIMER.md        # Zastrzeżenia prawne
├── LICENSE              # MIT (kod)
└── LICENSE-MATERIALS.md # CC BY 4.0 (treści koncepcyjne)
```

---

## Uruchomienie lokalne

```bash
git clone https://github.com/Polska-2038/projekt-polska-2038-pro.git
cd projekt-polska-2038-pro
npm install
npm run dev
```

Backend (opcjonalnie):

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Zmienne środowiskowe: `.env.example`, `backend/.env.example`. Więcej: [CONTRIBUTING.md](CONTRIBUTING.md).

**Wymagania:** Node.js 20+, Python 3.11+ (backend).

---

## Prawo i prywatność

| Dokument | Gdzie |
|----------|--------|
| Polityka prywatności | https://polska2038.pl/polityka-prywatnosci |
| Polityka cookies | https://polska2038.pl/polityka-cookies |
| Regulamin | https://polska2038.pl/regulamin |
| Repozytorium | [DISCLAIMER.md](DISCLAIMER.md) |

Kontakt RODO / prawny: **polska2038@proton.me**

---

## Licencje

| Zakres | Licencja |
|--------|----------|
| Kod źródłowy | [MIT](LICENSE) |
| Teksty programu, materiały koncepcyjne w repo | [CC BY 4.0](LICENSE-MATERIALS.md) |
| Mapa województw | MIT — [public/geo/LICENSE-polska-geojson.txt](public/geo/LICENSE-polska-geojson.txt) |

Przy forkach: zachowaj informację o MIT; przy publikacji adaptacji tekstów — podaj autorstwo #Polska2038 (CC BY). Nie sugeruj oficjalnego poparcia federacji bez umowy.

---

## Kontakt

- 🌐 **Demo:** https://polska2038.pl  
- 📧 **E-mail:** polska2038@proton.me  
- 🐦 **X:** [@Polska2038](https://x.com/polska2038)  
- 💻 **GitHub:** [Polska-2038/projekt-polska-2038-pro](https://github.com/Polska-2038/projekt-polska-2038-pro)

---

*Zbudowane pro bono dla polskiego sportu. 🇵🇱*
