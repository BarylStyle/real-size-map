import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { AboutMe } from './components/AboutMe';
import { TermsOfService } from './components/TermsOfService';
import { ArticleList } from './components/articles/ArticleList';
import { ArticleMercator } from './components/articles/ArticleMercator';
import { ArticleAfricaGreenland } from './components/articles/ArticleAfricaGreenland';
import { ArticleBiggestCountries } from './components/articles/ArticleBiggestCountries';
import { ArticleMapProjections } from './components/articles/ArticleMapProjections';
import { ArticlePoland } from './components/articles/ArticlePoland';
import { ArticleAustralia } from './components/articles/ArticleAustralia';
import { ArticleRussia } from './components/articles/ArticleRussia';
import { ArticleSouthAmerica } from './components/articles/ArticleSouthAmerica';
import { ArticleGeographyMyths } from './components/articles/ArticleGeographyMyths';
import { ArticleGoogleMaps } from './components/articles/ArticleGoogleMaps';
import { ArticleOceans } from './components/articles/ArticleOceans';
import { ArticleSmallestCountries } from './components/articles/ArticleSmallestCountries';
import { ArticleIndiaEurope } from './components/articles/ArticleIndiaEurope';
import { ArticleAfrica } from './components/articles/ArticleAfrica';
import { ArticleCartographyHistory } from './components/articles/ArticleCartographyHistory';

// Lazy-load mapy — Leaflet używa window/document, co uniemożliwia SSR.
// Dzięki dynamicznemu importowi Leaflet nie trafia do bundla serwera.
// TrueSizeMap jest named export — opakowujemy w { default: ... } dla React.lazy
const TrueSizeMap = lazy(() =>
  import('./components/TrueSizeMap').then(m => ({ default: m.TrueSizeMap }))
);

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div style={{ height: '100vh', background: '#1a1a1a' }} />}>
            <TrueSizeMap />
          </Suspense>
        }
      />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/artykuly" element={<ArticleList />} />
      <Route path="/artykuly/projekcja-merkatora" element={<ArticleMercator />} />
      <Route path="/artykuly/afryka-vs-grenlandia" element={<ArticleAfricaGreenland />} />
      <Route path="/artykuly/najwieksze-kraje-swiata" element={<ArticleBiggestCountries />} />
      <Route path="/artykuly/rodzaje-projekcji" element={<ArticleMapProjections />} />
      <Route path="/artykuly/polska-na-mapie" element={<ArticlePoland />} />
      <Route path="/artykuly/australia-porownanie" element={<ArticleAustralia />} />
      <Route path="/artykuly/rosja-na-mapach" element={<ArticleRussia />} />
      <Route path="/artykuly/ameryka-poludniowa" element={<ArticleSouthAmerica />} />
      <Route path="/artykuly/mity-geograficzne" element={<ArticleGeographyMyths />} />
      <Route path="/artykuly/google-maps-mercator" element={<ArticleGoogleMaps />} />
      <Route path="/artykuly/rozmiary-oceanow" element={<ArticleOceans />} />
      <Route path="/artykuly/najmniejsze-kraje" element={<ArticleSmallestCountries />} />
      <Route path="/artykuly/indie-vs-europa" element={<ArticleIndiaEurope />} />
      <Route path="/artykuly/afryka-kontynent" element={<ArticleAfrica />} />
      <Route path="/artykuly/historia-kartografii" element={<ArticleCartographyHistory />} />
    </Routes>
  );
}

export default App;
