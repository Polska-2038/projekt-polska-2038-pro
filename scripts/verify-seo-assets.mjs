import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');

for (const file of ['sitemap.xml', 'robots.txt']) {
  const p = path.join(dist, file);
  if (!fs.existsSync(p)) {
    console.error(`[verify-seo] missing dist/${file}`);
    process.exit(1);
  }
}

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8').trimStart();
if (!sitemap.startsWith('<?xml') || !sitemap.includes('<urlset')) {
  console.error('[verify-seo] dist/sitemap.xml is not valid XML (got HTML or empty?)');
  process.exit(1);
}

console.log('[verify-seo] sitemap.xml and robots.txt OK in dist/');
