/**
 * Genera les imatges per compartir (public/og/<idioma>.png, 1200×630)
 * i la icona per a iPhone (public/apple-touch-icon.png).
 *
 * Només cal tornar-lo a executar si canvien els textos de les imatges.
 * Necessita Playwright amb Chromium instal·lat globalment (no és dependència del projecte):
 *   npm install -g playwright && npx playwright install chromium
 *   NODE_PATH="$(npm root -g)" node scripts/genera-imatges.mjs
 */
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { DOMINI } from '../src/config/lloc.ts';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const arrel = fileURLToPath(new URL('..', import.meta.url));

const font = (cami) =>
  `data:font/woff2;base64,${readFileSync(`${arrel}node_modules/${cami}`).toString('base64')}`;
const fraunces = font('@fontsource-variable/fraunces/files/fraunces-latin-opsz-normal.woff2');
const frauncesItalica = font('@fontsource-variable/fraunces/files/fraunces-latin-opsz-italic.woff2');
const figtree = font('@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2');

const textos = {
  ca: { eyebrow: 'Desenvolupador web · Calafell', abans: 'Webs i eines que treballen per tu, ', em: 'no al revés', despres: '.' },
  es: { eyebrow: 'Desarrollador web · Calafell', abans: 'Webs y herramientas que trabajan para ti, ', em: 'no al revés', despres: '.' },
  en: { eyebrow: 'Web developer · Calafell', abans: 'Websites and tools that work for you, ', em: 'not vice versa', despres: '.' },
};

const onades = `<svg width="900" height="340" viewBox="0 0 190 90" preserveAspectRatio="none" style="position:absolute;left:-60px;bottom:-60px;opacity:.16">
  <path d="M0 40 C 25 28, 45 28, 70 40 S 115 52, 140 40 S 175 28, 190 34" fill="none" stroke="#d9b38c" stroke-width=".5"/>
  <path d="M0 58 C 25 46, 45 46, 70 58 S 115 70, 140 58 S 175 46, 190 52" fill="none" stroke="#d9b38c" stroke-width=".5"/>
  <path d="M0 76 C 25 64, 45 64, 70 76 S 115 88, 140 76 S 175 64, 190 70" fill="none" stroke="#d9b38c" stroke-width=".5"/></svg>`;

const estils = `
  @font-face { font-family: F; src: url(${fraunces}); font-weight: 100 900; }
  @font-face { font-family: F; src: url(${frauncesItalica}); font-style: italic; font-weight: 100 900; }
  @font-face { font-family: G; src: url(${figtree}); font-weight: 100 900; }
  body { margin: 0; }`;

const og = (t) => `<!doctype html><html><head><style>${estils}
  .og { position: relative; overflow: hidden; width: 1200px; height: 630px; box-sizing: border-box; padding: 72px 88px;
        background: #1b2a33; color: #f3eee6; font-family: G; display: flex; flex-direction: column; justify-content: space-between; }
  .llum { position: absolute; right: -40px; top: -80px; width: 560px; height: 560px; border-radius: 50%;
          background: radial-gradient(circle, rgba(217,179,140,.22) 0%, rgba(217,179,140,0) 70%); }
  .nom { position: relative; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; font-size: 24px; }
  .cos { position: relative; display: flex; flex-direction: column; gap: 28px; }
  .eyebrow { display: flex; align-items: center; gap: 14px; font-size: 26px; color: #d8d2c7; }
  .punt { width: 12px; height: 12px; border-radius: 50%; background: #d9b38c; }
  h1 { margin: 0; font-family: F; font-weight: 400; font-size: 76px; line-height: 1.05; max-width: 960px; }
  em { color: #d9b38c; }
  .domini { position: relative; font-size: 24px; color: #d9b38c; font-weight: 600; }
</style></head><body><div class="og"><div class="llum"></div>${onades}
  <div class="nom">Arnau Nin</div>
  <div class="cos"><div class="eyebrow"><span class="punt"></span>${t.eyebrow}</div>
  <h1>${t.abans}<em>${t.em}</em>${t.despres}</h1></div>
  <div class="domini">${new URL(DOMINI).host}</div></div></body></html>`;

const icona = `<!doctype html><html><head><style>${estils}
  .i { width: 180px; height: 180px; background: #1b2a33; display: flex; align-items: center; justify-content: center;
       font-family: F; font-size: 80px; color: #d9b38c; letter-spacing: -2px; }
</style></head><body><div class="i">AN</div></body></html>`;

const navegador = await chromium.launch();
const pagina = await navegador.newPage({ viewport: { width: 1200, height: 630 } });
for (const [idioma, t] of Object.entries(textos)) {
  await pagina.setContent(og(t), { waitUntil: 'load' });
  await pagina.evaluate(() => document.fonts.ready);
  await pagina.locator('.og').screenshot({ path: `${arrel}public/og/${idioma}.png` });
}
await pagina.setContent(icona, { waitUntil: 'load' });
await pagina.evaluate(() => document.fonts.ready);
await pagina.locator('.i').screenshot({ path: `${arrel}public/apple-touch-icon.png` });
await navegador.close();
console.log('Imatges generades a public/og/ i public/apple-touch-icon.png');
