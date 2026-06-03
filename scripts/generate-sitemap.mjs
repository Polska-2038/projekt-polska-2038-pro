import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRERENDER_ROUTES, SEO_BY_PATH, SITE_URL, buildCanonicalUrl } from '../src/seo/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(path.resolve(__dirname, '..'), 'public');
const outPath = path.join(publicDir, 'sitemap.xml');

const lastmod = new Date().toISOString().slice(0, 10);

function hreflangLinks(route) {
  const seo = SEO_BY_PATH[route];
  if (!seo) return '';
  const lines = [];
  if (seo.alternatePl) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="pl" href="${buildCanonicalUrl(seo.alternatePl)}" />`,
    );
  }
  if (seo.alternateEn) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="en" href="${buildCanonicalUrl(seo.alternateEn)}" />`,
    );
  }
  if (seo.alternatePl || seo.alternateEn) {
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`);
  }
  if (route === '/' && !seo.alternatePl) {
    lines.push(`    <xhtml:link rel="alternate" hreflang="pl" href="${SITE_URL}/" />`);
  }
  return lines.join('\n');
}

const urls = PRERENDER_ROUTES.map((route) => {
  const seo = SEO_BY_PATH[route] || {};
  const loc = buildCanonicalUrl(route);
  const priority = seo.priority ?? 0.5;
  const changefreq = seo.changefreq ?? 'monthly';
  const alt = hreflangLinks(route);
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority.toFixed(2)}</priority>`,
    alt,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n');
});

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...urls,
  '</urlset>',
  '',
].join('\n');

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`[sitemap] wrote ${PRERENDER_ROUTES.length} routes to ${outPath}`);
