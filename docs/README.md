# Dokumentacja #Polska2038

| Dokument | Opis |
|----------|------|
| [../INSPIRATION.md](../INSPIRATION.md) | Wizja vs kod vs wdrożenie — **start tutaj** |
| [SEO.md](SEO.md) | Indeksowanie w Google (Search Console, sitemap) |
| [../CONTRIBUTING.md](../CONTRIBUTING.md) | Fork, dev setup, pull requesty |
| [../DISCLAIMER.md](../DISCLAIMER.md) | Zastrzeżenia prawne repozytorium |
| [../LICENSE](../LICENSE) | MIT — kod |
| [../LICENSE-MATERIALS.md](../LICENSE-MATERIALS.md) | CC BY 4.0 — materiały koncepcyjne |

## Strona na żywo (dokumenty prawne)

- https://polska2038.pl/polityka-prywatnosci
- https://polska2038.pl/polityka-cookies
- https://polska2038.pl/regulamin

## API (demo)

| Metoda | Ścieżka | Opis |
|--------|---------|------|
| GET | `/api/health` | Status |
| POST | `/api/contact` | Formularz kontaktowy |
| POST | `/api/auth/login` | Logowanie demo |
| GET | `/api/talents` | Lista talentów (demo) |
| GET | `/api/voivodeships` | Mapa województw (demo) |

Backend: `backend/main.py` · entrypoint Vercel: `api/index.py`
