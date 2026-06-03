/** SEO config — używane przez prerender, sitemap i SeoManager (SPA). */

export const SITE_URL = 'https://polska2038.pl';
export const OG_IMAGE = `${SITE_URL}/og-image-v2.png`;
export const SITE_NAME = '#Polska2038';

const DEFAULT_PL = {
  title: '#Polska2038 — reforma piłki nożnej, skauting talentów i mapa zawodników',
  description:
    'Inicjatywa pro bono: plan reformy polskiej piłki nożnej do 2038, TalentRadar, technologia LiDAR+AI (koncepcja), dokumenty dla federacji i samorządów. Open source MIT.',
  keywords:
    'Polska 2038, reforma piłki nożnej, skauting talentów, mapa talentów, szkolenie młodzieży, PZPN reforma, data science sport, program obywatelski',
  ogTitle: '#Polska2038 — reforma piłki nożnej i system talentów',
  robots: 'index, follow',
  priority: 0.5,
  changefreq: 'monthly',
};

const DEFAULT_EN = {
  title: '#Polska2038 — football reform, talent scouting & national program (pro bono)',
  description:
    'Civic pro bono initiative: football reform roadmap to 2038, talent map concept, open-source demo. Documents for federations and clubs.',
  keywords:
    'Polska2038, football reform Poland, talent scouting, youth development, open source sport',
  ogTitle: '#Polska2038 — football reform & talent system',
  robots: 'index, follow',
  priority: 0.5,
  changefreq: 'monthly',
};

/** @type {Record<string, typeof DEFAULT_PL & { lang?: 'pl'|'en', alternatePl?: string, alternateEn?: string, noindex?: boolean }>} */
export const SEO_BY_PATH = {
  '/': {
    ...DEFAULT_PL,
    title: '#Polska2038 — reforma piłki nożnej | 3 filary, budżet, roadmapa do MŚ 2038',
    description:
      'Plan reformy polskiej piłki nożnej: wykrywanie talentów w całym kraju, bezpieczny stadion, audyt trenerów. Materiały do pobrania, kalkulator ROI. Projekt obywatelski pro bono.',
    keywords:
      'reforma piłki nożnej, Polska 2038, mistrzostwa świata 2038, talent piłkarski, reforma PZPN, ministerstwo sportu, szkolenie młodzieży',
    ogTitle: '#Polska2038 — Plan reformy piłki nożnej do 2038',
    priority: 1.0,
    changefreq: 'weekly',
    alternateEn: '/en',
  },
  '/en': {
    ...DEFAULT_EN,
    lang: 'en',
    alternatePl: '/',
    priority: 0.9,
    changefreq: 'weekly',
  },
  '/technologia': {
    ...DEFAULT_PL,
    title: 'Technologia — LiDAR, AI i architektura TalentRadar | #Polska2038',
    description:
      'Koncepcja techniczna: LiDAR na Orlikach, silnik biomechaniki AI, PostGIS, RODO zero-video. Demo platformy i ścieżka wdrożenia open source.',
    keywords: 'LiDAR sport, AI skauting, PostGIS talent map, biomechanika piłka, technologia sportu Polska',
    ogTitle: 'Technologia #Polska2038 — LiDAR + AI + mapa talentów',
    priority: 0.85,
    changefreq: 'monthly',
    alternateEn: '/en/technologia',
  },
  '/en/technologia': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'Technology — LiDAR, AI & TalentRadar architecture | #Polska2038',
    description: 'Technical concept: edge LiDAR, AI scouting engine, privacy-first data architecture. Open-source demo platform.',
    alternatePl: '/technologia',
    priority: 0.8,
  },
  '/mapa-talentow': {
    ...DEFAULT_PL,
    title: 'Mapa talentów Polski — województwa i scouting | #Polska2038',
    description:
      'Interaktywna mapa talentów (demo): podgląd potencjału per województwo. Koncepcja TalentRadar dla klubów i federacji.',
    keywords: 'mapa talentów piłka nożna, scouting Polska, województwa piłkarze, TalentRadar',
    priority: 0.85,
    alternateEn: '/en/mapa-talentow',
  },
  '/en/mapa-talentow': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'Talent map of Poland — regions & scouting demo | #Polska2038',
    description: 'Interactive talent map demo by voivodeship. TalentRadar concept for equal scouting nationwide.',
    alternatePl: '/mapa-talentow',
    priority: 0.8,
  },
  '/dla-kogo': {
    ...DEFAULT_PL,
    title: 'Dla kogo jest #Polska2038? — kluby, gminy, federacja, rodzice',
    description:
      'Program dla samorządów, akademii, PZPN, trenerów i rodziców. Jak wdrożyć pilotaż lokalny i skorzystać z kodu MIT.',
    keywords: 'program dla klubów piłkarskich, gmina sport, federacja piłka, reforma dla trenerów',
    alternateEn: '/en/dla-kogo',
  },
  '/en/dla-kogo': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'Who is #Polska2038 for? — clubs, cities, federation, parents',
    alternatePl: '/dla-kogo',
  },
  '/wyniki': {
    ...DEFAULT_PL,
    title: 'Wyniki i roadmapa 2026–2038 | #Polska2038',
    description: 'Kamienie milowe programu: pilotaże Orlików, Euro 2028, MŚ 2038. Metryki i scenariusz ROI (materiały koncepcyjne).',
    keywords: 'roadmapa piłka nożna Polska, MŚ 2038, Euro 2028, wyniki reformy sportu',
    alternateEn: '/en/wyniki',
  },
  '/en/wyniki': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'Results & roadmap 2026–2038 | #Polska2038',
    alternatePl: '/wyniki',
  },
  '/partnerzy': {
    ...DEFAULT_PL,
    title: 'Partnerzy i ekosystem programu | #Polska2038',
    description:
      'Wizja partnerstw publicznych i prywatnych (materiał ilustracyjny). Jak dołączyć jako sponsor technologii lub samorząd.',
    alternateEn: '/en/partnerzy',
  },
  '/en/partnerzy': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'Partners & program ecosystem | #Polska2038',
    alternatePl: '/partnerzy',
  },
  '/kontakt': {
    ...DEFAULT_PL,
    title: 'Kontakt — #Polska2038 | zapytania o reformę i wdrożenie',
    description:
      'Skontaktuj się z zespołem inicjatywy pro bono: media, pilotaż, open source, współpraca z klubem lub gminą.',
    keywords: 'kontakt Polska 2038, reforma piłki kontakt, współpraca sport technologia',
    priority: 0.75,
    alternateEn: '/en/kontakt',
  },
  '/en/kontakt': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'Contact #Polska2038 — reform, pilots & open source',
    alternatePl: '/kontakt',
    priority: 0.7,
  },
  '/o-programie': {
    ...DEFAULT_PL,
    title: 'O programie #Polska2038 — misja i Narodowy System Sportu',
    description:
      'Czym jest inicjatywa obywatelska #Polska2038: wykrywanie talentów, transparentność, pro bono i fork na GitHub.',
    alternateEn: '/en/o-programie',
  },
  '/en/o-programie': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'About #Polska2038 — mission & national sports OS concept',
    alternatePl: '/o-programie',
  },
  '/reforma/dokumenty': {
    ...DEFAULT_PL,
    title: 'Dokumenty reformy — PDF i materiały do pobrania | #Polska2038',
    description:
      'Executive summary, budżet, roadmapa, struktura organizacyjna — materiały programu reformy piłki nożnej do 2038.',
    keywords: 'dokumenty reforma piłki nożnej, budżet sport Polska, plan reformy PZPN pdf',
    priority: 0.9,
    alternateEn: '/en/reforma/dokumenty',
  },
  '/en/reforma/dokumenty': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'Reform documents — downloads | #Polska2038',
    alternatePl: '/reforma/dokumenty',
    priority: 0.85,
  },
  '/system': {
    ...DEFAULT_PL,
    title: 'System #Polska2038 — prezentacja Narodowego OS Sportu',
    description:
      'Pełna prezentacja koncepcji: moduły AI, mapa, business case, stack technologiczny i social proof (demo).',
    keywords: 'narodowy system sportu, Polska2038 system, prezentacja reforma',
    alternateEn: '/en/system',
  },
  '/en/system': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'System overview — National Sports OS demo | #Polska2038',
    alternatePl: '/system',
  },
  '/reforma/filar/1': {
    ...DEFAULT_PL,
    title: 'Filar 1: Polska 2038 — system wykrywania talentów | #Polska2038',
    description: 'TalentRadar: każdy zawodnik z Orlika ma szansę trafić do bazy talentów. Filary reformy piłki nożnej.',
    alternateEn: '/en/reforma/filar/1',
  },
  '/reforma/filar/2': {
    ...DEFAULT_PL,
    title: 'Filar 2: Bezpieczny stadion — kultura kibica | #Polska2038',
    description: 'Odpowiedzialny kibic, organizacja meczów i standardy bezpieczeństwa na stadionach.',
    alternateEn: '/en/reforma/filar/2',
  },
  '/reforma/filar/3': {
    ...DEFAULT_PL,
    title: 'Filar 3: Ocena trenerów — audyt zewnętrzny AWF | #Polska2038',
    description: 'Niezależna ocena kadry trenerskiej przez uczelnie sportowe — filar reformy szkolenia.',
    alternateEn: '/en/reforma/filar/3',
  },
  '/en/reforma/filar/1': { ...DEFAULT_EN, lang: 'en', title: 'Pillar 1: Talent detection system | #Polska2038', alternatePl: '/reforma/filar/1' },
  '/en/reforma/filar/2': { ...DEFAULT_EN, lang: 'en', title: 'Pillar 2: Safe stadium | #Polska2038', alternatePl: '/reforma/filar/2' },
  '/en/reforma/filar/3': { ...DEFAULT_EN, lang: 'en', title: 'Pillar 3: Coach evaluation | #Polska2038', alternatePl: '/reforma/filar/3' },
  '/reforma/materialy/executive-summary': {
    ...DEFAULT_PL,
    title: 'Executive Summary reformy piłki nożnej | #Polska2038',
    description: 'Skrót programu reformy dla decydentów: cele, budżet, filary i harmonogram do 2038.',
    priority: 0.8,
  },
  '/reforma/materialy/briefing-media': {
    ...DEFAULT_PL,
    title: 'Briefing dla mediów — #Polska2038',
    description: 'Materiał prasowy o inicjatywie reformy piłki nożnej Polska 2038.',
  },
  '/reforma/materialy/roadmap-2026-2038': {
    ...DEFAULT_PL,
    title: 'Roadmapa 2026–2038 — dokument programu',
    description: 'Harmonogram wdrożenia reformy: pilotaże, Euro 2028, MŚ 2038.',
  },
  '/polityka-prywatnosci': {
    ...DEFAULT_PL,
    title: 'Polityka prywatności | #Polska2038',
    description: 'Zasady przetwarzania danych osobowych (RODO) w serwisie polska2038.pl.',
    robots: 'index, follow',
    priority: 0.4,
    alternateEn: '/en/polityka-prywatnosci',
  },
  '/en/polityka-prywatnosci': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'Privacy Policy | #Polska2038',
    alternatePl: '/polityka-prywatnosci',
    priority: 0.35,
  },
  '/polityka-cookies': {
    ...DEFAULT_PL,
    title: 'Polityka cookies | #Polska2038',
    description: 'Informacja o plikach cookies i localStorage w serwisie polska2038.pl.',
    alternateEn: '/en/polityka-cookies',
  },
  '/en/polityka-cookies': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'Cookie Policy | #Polska2038',
    alternatePl: '/polityka-cookies',
  },
  '/regulamin': {
    ...DEFAULT_PL,
    title: 'Regulamin serwisu | #Polska2038',
    description: 'Zasady korzystania z polska2038.pl — projekt pro bono, treści demo, licencje MIT i CC BY.',
    alternateEn: '/en/regulamin',
  },
  '/en/regulamin': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'Terms of Use | #Polska2038',
    alternatePl: '/regulamin',
  },
  '/login': {
    ...DEFAULT_PL,
    title: 'Logowanie panelu demo | #Polska2038',
    robots: 'noindex, follow',
    priority: 0.1,
  },
  '/en/login': {
    ...DEFAULT_EN,
    lang: 'en',
    title: 'Demo panel login | #Polska2038',
    robots: 'noindex, follow',
    priority: 0.1,
  },
};

/** Trasy do prerenderu i sitemap (bez redirectów). */
export const PRERENDER_ROUTES = Object.keys(SEO_BY_PATH).filter(
  (p) => !['/reforma', '/dla-federacji', '/reforma/en'].includes(p),
);

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

export function getSeoForPath(pathname) {
  const path = pathname?.split('?')[0]?.replace(/\/$/, '') || '/';
  const normalized = path === '' ? '/' : path;
  if (SEO_BY_PATH[normalized]) return { ...SEO_BY_PATH[normalized], path: normalized };

  const isEn = normalized.startsWith('/en');
  const base = isEn ? { ...DEFAULT_EN, lang: 'en' } : { ...DEFAULT_PL, lang: 'pl' };

  if (normalized.match(/^\/en?\/reforma\/filar\/\d+$/)) {
    return { ...base, ...SEO_BY_PATH[normalized], path: normalized };
  }
  if (normalized.startsWith('/reforma/materialy/') || normalized.startsWith('/en/reforma/materialy/')) {
    return {
      ...base,
      title: `${SITE_NAME} — materiał programu reformy`,
      description: base.description,
      path: normalized,
    };
  }

  return { ...base, path: normalized };
}

export function buildCanonicalUrl(path) {
  if (path === '/') return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function buildJsonLd(seo) {
  const url = buildCanonicalUrl(seo.path);
  const lang = seo.lang === 'en' ? 'en' : 'pl';
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      description: seo.description,
      inLanguage: lang,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      email: 'polska2038@proton.me',
      logo: `${SITE_URL}/favicon.svg`,
      sameAs: [
        'https://x.com/polska2038',
        'https://github.com/Polska-2038/projekt-polska-2038-pro',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seo.title,
      description: seo.description,
      url,
      inLanguage: lang,
      isPartOf: { '@type': 'WebSite', url: SITE_URL, name: SITE_NAME },
    },
  ];
}

function replaceMeta(html, attr, key, value) {
  const re = new RegExp(
    `<meta ${attr}="${key}" content="[^"]*"\\s*/?>`,
    'i',
  );
  const tag = `<meta ${attr}="${key}" content="${escapeAttr(value)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace('</head>', `    ${tag}\n  </head>`);
}

/**
 * Wstrzykuje meta tagi do HTML (prerender) lub zwraca fragmenty dla dokumentu (SPA).
 */
export function injectSeoIntoHtml(html, pathname) {
  const seo = getSeoForPath(pathname);
  const lang = seo.lang === 'en' ? 'en' : 'pl';
  const locale = lang === 'en' ? 'en_US' : 'pl_PL';
  const url = buildCanonicalUrl(seo.path);
  const ogTitle = seo.ogTitle || seo.title;
  const robots = seo.robots || 'index, follow';

  let out = html;
  out = out.replace(/<html lang="[^"]*">/i, `<html lang="${lang}">`);
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttr(seo.title)}</title>`);
  out = replaceMeta(out, 'name', 'description', seo.description);
  out = replaceMeta(out, 'name', 'keywords', seo.keywords || DEFAULT_PL.keywords);
  out = replaceMeta(out, 'name', 'robots', robots);
  out = replaceMeta(out, 'property', 'og:type', 'website');
  out = replaceMeta(out, 'property', 'og:url', url);
  out = replaceMeta(out, 'property', 'og:title', ogTitle);
  out = replaceMeta(out, 'property', 'og:description', seo.description);
  out = replaceMeta(out, 'property', 'og:image', OG_IMAGE);
  out = replaceMeta(out, 'property', 'og:image:secure_url', OG_IMAGE);
  out = replaceMeta(out, 'property', 'og:locale', locale);
  out = replaceMeta(out, 'property', 'og:site_name', SITE_NAME);
  out = replaceMeta(out, 'name', 'twitter:card', 'summary_large_image');
  out = replaceMeta(out, 'name', 'twitter:site', '@Polska2038');
  out = replaceMeta(out, 'name', 'twitter:title', ogTitle);
  out = replaceMeta(out, 'name', 'twitter:description', seo.description);
  out = replaceMeta(out, 'name', 'twitter:image', OG_IMAGE);

  const canonicalTag = `<link rel="canonical" href="${escapeAttr(url)}" />`;
  if (/<link rel="canonical"/i.test(out)) {
    out = out.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, canonicalTag);
  } else {
    out = out.replace('</head>', `    ${canonicalTag}\n  </head>`);
  }

  // hreflang
  const hreflangTags = [];
  if (seo.alternatePl) {
    hreflangTags.push(
      `<link rel="alternate" hreflang="pl" href="${escapeAttr(buildCanonicalUrl(seo.alternatePl))}" />`,
    );
  }
  if (seo.alternateEn) {
    hreflangTags.push(
      `<link rel="alternate" hreflang="en" href="${escapeAttr(buildCanonicalUrl(seo.alternateEn))}" />`,
    );
  }
  if (seo.alternatePl || seo.alternateEn) {
    hreflangTags.push(`<link rel="alternate" hreflang="x-default" href="${escapeAttr(SITE_URL)}" />`);
  }
  out = out.replace(/<link rel="alternate" hreflang="[^"]*"[^>]*>\s*/gi, '');
  if (hreflangTags.length) {
    out = out.replace('</head>', `    ${hreflangTags.join('\n    ')}\n  </head>`);
  }

  const jsonLd = `<script type="application/ld+json">${JSON.stringify(buildJsonLd(seo))}</script>`;
  out = out.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/i, '');
  out = out.replace('</head>', `    ${jsonLd}\n  </head>`);

  return out;
}

/** Aktualizacja meta w przeglądarce (nawigacja SPA). */
export function applySeoToDocument(pathname) {
  if (typeof document === 'undefined') return;
  const seo = getSeoForPath(pathname);
  const url = buildCanonicalUrl(seo.path);
  const ogTitle = seo.ogTitle || seo.title;

  document.title = seo.title;
  document.documentElement.lang = seo.lang === 'en' ? 'en' : 'pl';

  const setMeta = (attr, key, content) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('name', 'description', seo.description);
  setMeta('name', 'robots', seo.robots || 'index, follow');
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:title', ogTitle);
  setMeta('property', 'og:description', seo.description);
  setMeta('name', 'twitter:title', ogTitle);
  setMeta('name', 'twitter:description', seo.description);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  let ld = document.getElementById('seo-jsonld');
  if (!ld) {
    ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = 'seo-jsonld';
    document.head.appendChild(ld);
  }
  ld.textContent = JSON.stringify(buildJsonLd(seo));
}
