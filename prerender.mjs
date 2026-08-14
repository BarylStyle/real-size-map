/**
 * Prerenderer dla artykułów — uruchamiany po vite build.
 * Generuje statyczne pliki HTML (z pełną treścią i właściwymi <title>/<meta>)
 * w katalogu dist/, tak żeby Googlebot widział gotowy HTML bez uruchamiania JS.
 *
 * Użycie (automatyczne w ramach npm run build):
 *   vite build && vite build --config vite.config.server.ts && node prerender.mjs
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_CLIENT = path.join(__dirname, 'dist');
const DIST_SERVER = path.join(__dirname, 'dist-ssr');

/** Trasy do prerenderowania — mapa i jej podrasy pomijane (Leaflet = browser-only). */
const ROUTES = [
  '/artykuly',
  '/artykuly/projekcja-merkatora',
  '/artykuly/afryka-vs-grenlandia',
  '/artykuly/najwieksze-kraje-swiata',
  '/artykuly/rodzaje-projekcji',
  '/artykuly/polska-na-mapie',
  '/artykuly/australia-porownanie',
  '/artykuly/rosja-na-mapach',
  '/artykuly/ameryka-poludniowa',
  '/artykuly/mity-geograficzne',
  '/artykuly/google-maps-mercator',
  '/artykuly/rozmiary-oceanow',
  '/artykuly/najmniejsze-kraje',
  '/artykuly/indie-vs-europa',
  '/artykuly/afryka-kontynent',
  '/artykuly/historia-kartografii',
  '/about',
  '/privacy-policy',
];

async function main() {
  const serverEntry = path.join(DIST_SERVER, 'entry-server.js');
  const { render } = await import(serverEntry);

  const template = await fs.readFile(path.join(DIST_CLIENT, 'index.html'), 'utf-8');

  let ok = 0;
  let fail = 0;

  for (const route of ROUTES) {
    try {
      const { html, helmet } = render(route);

      // Wstrzyknij wyrenderowany HTML do kontenera React
      let page = template.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Nadpisz tagi <title>, <meta name="description"> i <link rel="canonical">
      // które są ustawiane przez react-helmet-async w komponencie artykułu.
      if (helmet) {
        // Usuń stary <title> z index.html (może zawierać newline wewnątrz)
        page = page.replace(/<title>[\s\S]*?<\/title>/, '');

        // Usuń statyczny <meta name="description"> z index.html (wieloliniowy)
        page = page.replace(/<meta\s+name="description"[\s\S]*?\/>/i, '');

        // Usuń statyczny <link rel="canonical"> z index.html
        page = page.replace(/<link\s+rel="canonical"[^>]*>/i, '');

        // Wstrzyknij komplet tagów z helmet (title + meta + link + script) przed </head>
        const titleStr  = helmet.title.toString();
        const metaStr   = helmet.meta.toString();
        const linkStr   = helmet.link.toString();
        const scriptStr = helmet.script.toString();
        page = page.replace('</head>', `${titleStr}${metaStr}${linkStr}${scriptStr}</head>`);
      }

      // Ustal ścieżkę wyjściową
      const outPath = path.join(DIST_CLIENT, route.slice(1), 'index.html');
      await fs.mkdir(path.dirname(outPath), { recursive: true });
      await fs.writeFile(outPath, page, 'utf-8');

      console.log(`✓ ${route}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${route}: ${err.message}`);
      fail++;
    }
  }

  console.log(`\nPrerender: ${ok} ok, ${fail} błędów.`);
  if (fail > 0) process.exit(1);
}

main().catch(err => {
  console.error('Prerender nieudany:', err);
  process.exit(1);
});
