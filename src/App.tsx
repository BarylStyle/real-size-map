import { Routes, Route } from 'react-router-dom';
import { TrueSizeMap } from './components/TrueSizeMap';
import { CookieConsentBanner } from './components/CookieConsent';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { AboutMe } from './components/AboutMe';
import { TermsOfService } from './components/TermsOfService';
import { ArticleList } from './components/articles/ArticleList';
import { ArticleMercator } from './components/articles/ArticleMercator';
import { ArticleAfricaGreenland } from './components/articles/ArticleAfricaGreenland';
import { ArticleBiggestCountries } from './components/articles/ArticleBiggestCountries';
import { ArticleMapProjections } from './components/articles/ArticleMapProjections';
import { ArticlePoland } from './components/articles/ArticlePoland';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TrueSizeMap />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/artykuly" element={<ArticleList />} />
        <Route path="/artykuly/projekcja-merkatora" element={<ArticleMercator />} />
        <Route path="/artykuly/afryka-vs-grenlandia" element={<ArticleAfricaGreenland />} />
        <Route path="/artykuly/najwieksze-kraje-swiata" element={<ArticleBiggestCountries />} />
        <Route path="/artykuly/rodzaje-projekcji" element={<ArticleMapProjections />} />
        <Route path="/artykuly/polska-na-mapie" element={<ArticlePoland />} />
      </Routes>
      <CookieConsentBanner />
    </>
  );
}

export default App;
