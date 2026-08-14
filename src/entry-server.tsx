/**
 * Punkt wejścia dla SSR / prerenderowania.
 * Używany przez prerender.mjs do generowania statycznego HTML artykułów.
 *
 * TrueSizeMap jest lazy-loaded w App.tsx, więc Leaflet (browser-only)
 * nie jest importowany przy ładowaniu tego modułu.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function render(url: string): { html: string; helmet: any } {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const helmetContext: Record<string, any> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext['helmet'] };
}
