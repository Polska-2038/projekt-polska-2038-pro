# #Polska2038 — inspiracja i wdrożenie w życie

Ten dokument jest dla **gmin, klubów, federacji, studentów, startupów i obywateli**, którzy chcą zrealizować pomysły z programu #Polska2038 — oraz dla **autorów inicjatywy**, żeby było jasne, co jest wizją, a co gotowym kodem.

> **To nie jest gotowy „Narodowy OS” na 10 000 Orlików.** To **koncepcja programu** + **działający prototyp strony i API demo**, które można skopiować i rozwinąć.

---

## 1. Trzy filary programu (wizja do wdrożenia)

| Filar | Idea | Co możesz zrobić lokalnie |
|-------|------|---------------------------|
| **Polska 2038** | Systematyczne wykrywanie talentów (dane, nie „znajomości”) | Pilotaż w 1–5 boiskach: rejestr zawodników, proste metryki, raport dla trenera |
| **Bezpieczny stadion** | Kultura kibica, strefy rodzinne, odpowiedzialność organizatora | Regulamin obiektu + szkolenie stewardów — bez technologii LiDAR |
| **Ocena trenerów** | Zewnętrzny audyt (np. AWF), nie samoocena federacji | Umowa z uczelnią / instytutem sportu na cykl audytów |

Materiały merytoryczne (PDF/HTML w sekcji Reforma → Dokumenty) opisują budżet, ROI i roadmapę — traktuj je jako **punkt wyjścia do dyskusji**, nie decyzję administracyjną.

---

## 2. Co jest już w repozytorium (możesz to użyć dziś)

### Frontend (React + Vite + Tailwind)
- Strona prezentacyjna programu (PL/EN), reforma, dokumenty, kalkulator ROI (demo).
- Mapa województw, panel skauta (demo), formularz kontaktowy.
- Baner cookies, strony prawne (RODO), disclaimery „pro bono / scenariusz”.

### Backend (FastAPI)
- `POST /api/contact` — zapis zgłoszenia + e-mail (Resend).
- `POST /api/auth/login` — demo logowania skauta.
- `GET /api/talents`, `/api/voivodeships` — dane **demonstracyjne** (seed).
- Deploy na Vercel (`api/index.py` + `vercel.json`).

### Infrastruktura
- Build + prerender (`scripts/prerender.mjs`), sitemap, Open Graph.
- Przykładowe env: `.env.example`, `backend/.env.example`.

**Fork → zmień branding → podłącz własną bazę (Postgres) → wdroż u siebie.** Instrukcja: [CONTRIBUTING.md](CONTRIBUTING.md) i sekcja „Uruchomienie” w [README.md](README.md).

---

## 3. Czego NIE ma w tym repo (trzeba zbudować przy pełnym wdrożeniu)

| Element wizji | Status w repo |
|---------------|----------------|
| Sieć LiDAR na Orlikach | ❌ brak |
| Model AI EnsembleScorer / biomechanika 3D | ❌ brak (tylko opis w UI) |
| PostGIS na skalę kraju, 5M profili | ❌ brak (SQLite/demo lub Postgres lokalnie) |
| Federated learning, digital twin | ❌ brak |
| Integracja FIFA Connect / PZPN API | ❌ brak |
| Certyfikaty ISO / UODO produkcyjne | ❌ brak (architektura privacy-by-design w opisie) |

Traktuj liczby na stronie (94,3% AI, 10 000 Orlików itd.) jako **parametry koncepcyjne programu**, nie wyniki pomiaru z tego repozytorium.

---

## 4. Ścieżki wdrożenia (dla różnych odbiorców)

### A. Samorząd / klub / szkoła
1. Fork repozytorium, własna domena.
2. Zastąp dane demo prawdziwym rejestrem (za zgodą rodziców — RODO).
3. Użyj formularza kontaktowego i mapy jako „TalentRadar lite”.
4. Nie używaj logo PZPN/UEFA bez pisemnej zgody.

### B. Federacja / NGO
1. Przeczytaj materiały w `/reforma/dokumenty`.
2. Zlecenie audytu prawnego pod wasz statut.
3. Pilotaż 50–500 zawodników z własnym regulaminem przetwarzania danych.
4. Kod MIT — możliwa white-label platforma.

### C. Developer / student
1. `npm install && npm run dev`, backend: `uvicorn backend.main:app`.
2. Rozbuduj API, podłącz prawdziwy model ML (osobny serwis).
3. Pull requesty — zob. [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 5. Prawo i bezpieczeństwo (dla Ciebie i dla wdrażających)

### Autor inicjatywy (polska2038.pl)
- Serwis: [Polityka prywatności](https://polska2038.pl/polityka-prywatnosci), [Cookies](https://polska2038.pl/polityka-cookies), [Regulamin](https://polska2038.pl/regulamin).
- Treści scenariuszowe oznaczone na stronie (Media Buzz, partnerzy).
- Kontakt RODO: `polska2038@proton.me`.

### Ty jako wdrażający (checklist)
- [ ] **Nie sugeruj oficjalnego poparcia** PZPN, MSiT, FIFA, UEFA bez umowy.
- [ ] **Nie wprowadzaj w błąd** — komunikuj „pilot / program lokalny”, nie „narodowy system już działa”.
- [ ] **RODO** — przy danych dzieci: zgoda opiekuna, polityka prywatności, umowa powierzenia jeśli hosting u dostawcy.
- [ ] **Znaki towarowe** — nie używaj cudzych logo w produkcie bez licencji.
- [ ] **Kod** — zachowaj informację o licencji MIT (plik [LICENSE](LICENSE)).
- [ ] **Teksty koncepcyjne** — przy publikacji cytuj #Polska2038; szczegóły: [LICENSE-MATERIALS.md](LICENSE-MATERIALS.md).

To nie zastępuje porady prawnika przy dużym pilotażu z danymi biometrycznymi.

---

## 6. Licencje w skrócie

| Co | Licencja | Plik |
|----|----------|------|
| Kod źródłowy | MIT | [LICENSE](LICENSE) |
| Teksty programu, materiały koncepcyjne w repo | CC BY 4.0 | [LICENSE-MATERIALS.md](LICENSE-MATERIALS.md) |
| Mapa GeoJSON województw | MIT (autor: ppatrzyk) | [public/geo/LICENSE-polska-geojson.txt](public/geo/LICENSE-polska-geojson.txt) |

---

## 7. Kontakt

- Strona: https://polska2038.pl  
- E-mail: polska2038@proton.me  
- GitHub: https://github.com/Polska-2038/projekt-polska-2038-pro  

Chętnie zobaczymy fork z opisem „wdrożenie u nas” — to jest cel pro bono tej inicjatywy.
