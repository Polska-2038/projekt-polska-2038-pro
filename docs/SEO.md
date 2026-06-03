# SEO — polska2038.pl w Google

Techniczne podstawy są w repozytorium (meta per strona, sitemap, JSON-LD, hreflang). **Pozycja w Google wymaga też działań poza kodem** — indeksacja trwa tygodnie, a konkurencja na frazy typu „reforma piłki nożnej” jest duża.

## Co jest już w projekcie

| Element | Lokalizacja |
|---------|-------------|
| Title + description per URL | `src/seo/routes.js` + prerender |
| Sitemap (~35+ URL) | `public/sitemap.xml` (build) |
| robots.txt | `public/robots.txt` |
| JSON-LD (WebSite, Organization, WebPage) | wstrzykiwane przy buildzie |
| hreflang PL/EN | sitemap + `<link rel="alternate">` |
| Canonical | każda prerenderowana strona |
| SPA: meta przy nawigacji | `src/components/SeoManager.jsx` |
| Przekierowanie www → bez www | `vercel.json` |

## Błąd „robots.txt — błędy krytyczne” w Search Console

1. **Otwórz raport:** Ustawienia → Indeksowanie → robots.txt → **OTWÓRZ RAPORT** — zobacz dokładny komunikat (linia / host).
2. **Sprawdź na żywo:** https://polska2038.pl/robots.txt i https://polska2038.pl/sitemap.xml (oba muszą być **200**, nie HTML strony głównej).
3. Po deployu: w raporcie robots.txt kliknij **Sprawdź ponownie** / poczekaj 24–48 h.
4. **„2 pliki”** = zwykle `polska2038.pl` + `www.polska2038.pl` — www przekierowuje na wersję bez www; to OK po poprawce.
5. **Nie używaj** zakładki Usunięcia do blokowania całej domeny.

## 1. Google Search Console (obowiązkowe)

1. Wejdź na [Google Search Console](https://search.google.com/search-console).
2. **Dodaj właściwość** → URL: `https://polska2038.pl`
3. Weryfikacja — **tag HTML**:
   - Skopiuj token z Google.
   - Vercel → Project → Settings → Environment Variables:
     - `VITE_GOOGLE_SITE_VERIFICATION` = `twój_token`
   - Redeploy produkcji.
4. **Mapy witryn** → usuń stary wpis z błędem → dodaj **tylko**: `https://polska2038.pl/sitemap.xml`  
   (nie `/` ani `/sitemap` — Google wtedy widzi HTML i „0 stron”).
5. W przeglądarce sprawdź sitemap: pierwsza linia musi być `<?xml`, nie `<!doctype html>`.
6. **Sprawdź indeksowanie** → wklej kilka URL (/, /technologia, /reforma/dokumenty) → „Poproś o zindeksowanie”.

## 2. Bing Webmaster Tools (opcjonalnie)

[https://www.bing.com/webmasters](https://www.bing.com/webmasters) — import z Search Console lub osobna weryfikacja.

## 3. Treść i linki (najważniejsze dla rankingu)

- **Regularne aktualizacje** — wpisy na X [@Polska2038](https://x.com/polska2038) z linkiem do konkretnej podstrony (nie tylko homepage).
- **Linki zewnętrzne** — GitHub README, LinkedIn, komentarze branżowe, współpraca z portalami lokalnymi/sportowymi.
- **Frazy docelowe** (naturalnie w tekstach stron): *reforma piłki nożnej*, *skauting talentów*, *Polska 2038*, *mapa talentów piłkarskich*.
- **Unikalne opisy** — unikaj kopiowania tego samego akapitu na każdej podstronie (meta są już różne).

## 4. Wydajność i mobile

- Vercel + prerender = szybkie LCP dla crawlera.
- Sprawdź [PageSpeed Insights](https://pagespeed.web.dev/) dla `https://polska2038.pl`.
- Strona jest responsywna — Google używa indeksu **mobile-first**.

## 5. Social = sygnały dla Google

- Udostępnienia z poprawnym OG (`og-image-v2.png`, 1200×630).
- Spójny URL: **https://polska2038.pl** (bez www).

## 6. Czego nie obiecuje kod

- **Pierwsza pozycja** na „reforma PZPN” od razu — SEO to proces 3–12+ miesięcy.
- **Gwarancja ruchu** — zależy od promocji i linków.
- Treści **demo** — regulamin mówi o charakterze ilustracyjnym; to dobrze dla zaufania, ale nie zastępuje realnych case studies.

## Edycja meta pod nową podstronę

1. Dodaj wpis w `src/seo/routes.js` (`SEO_BY_PATH`).
2. Dodaj ścieżkę do `PRERENDER_ROUTES` (automatycznie z kluczy obiektu).
3. `npm run build` — przebuduje sitemap i HTML.

## Kontakt

polska2038@proton.me
