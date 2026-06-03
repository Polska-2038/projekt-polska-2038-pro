import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { PRERENDER_ROUTES, injectSeoIntoHtml } from '../src/seo/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const templatePath = path.join(distDir, 'index.html');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function routeToOutPath(route) {
  if (route === '/') return path.join(distDir, 'index.html');
  const clean = route.replace(/^\//, '').replace(/\/$/, '');
  return path.join(distDir, clean, 'index.html');
}

function injectAppHtml(html, appHtml) {
  return html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

async function main() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Missing template: ${templatePath}`);
  }

  const template = fs.readFileSync(templatePath, 'utf8');

  const ssrEntry = path.join(distDir, 'server', 'entry-server.js');
  if (!fs.existsSync(ssrEntry)) {
    throw new Error(`Missing SSR bundle: ${ssrEntry}`);
  }

  const mod = await import(pathToFileURL(ssrEntry).toString());
  if (typeof mod.render !== 'function') {
    throw new Error('SSR entry does not export render(url)');
  }

  for (const r of PRERENDER_ROUTES) {
    const { appHtml } = await mod.render(r);
    const outPath = routeToOutPath(r);
    ensureDir(path.dirname(outPath));
    const html = injectSeoIntoHtml(injectAppHtml(template, appHtml), r);
    fs.writeFileSync(outPath, html, 'utf8');
  }

  fs.writeFileSync(path.join(distDir, '404.html'), fs.readFileSync(path.join(distDir, 'index.html'), 'utf8'), 'utf8');
  console.log(`[prerender] rendered ${PRERENDER_ROUTES.length} routes`);
}

main().catch((e) => {
  console.error('[prerender] failed', e);
  process.exit(1);
});
