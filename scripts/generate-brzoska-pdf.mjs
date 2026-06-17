/**
 * Generuje PDF z docs/outreach/brzoska-narodowy-os-pilka.html
 * Wymaga Chrome lub Edge (headless --print-to-pdf).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'docs', 'outreach', 'brzoska-narodowy-os-pilka.html');
const outDir = path.join(root, 'docs', 'outreach');
const pdfPath = path.join(outDir, 'polska2038-brief-brzoska.pdf');

if (!fs.existsSync(htmlPath)) {
  console.error('[pdf] missing', htmlPath);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;

const candidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

let browser = candidates.find((p) => fs.existsSync(p));

if (!browser) {
  console.error('[pdf] Nie znaleziono Chrome/Edge. Ustaw CHROME_PATH lub otwórz HTML i drukuj jako PDF:');
  console.error('  ', htmlPath);
  process.exit(1);
}

const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--print-to-pdf=${pdfPath}`,
  '--no-pdf-header-footer',
  fileUrl,
];

const result = spawnSync(browser, args, { encoding: 'utf8', timeout: 60000 });

if (result.status !== 0 || !fs.existsSync(pdfPath)) {
  console.error('[pdf] Błąd generowania:', result.stderr || result.stdout);
  process.exit(1);
}

const sizeKb = Math.round(fs.statSync(pdfPath).size / 1024);
console.log(`[pdf] OK: ${pdfPath} (${sizeKb} KB)`);
