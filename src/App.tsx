import { Routes, Route } from 'react-router-dom';
import { TrueSizeMap } from './components/TrueSizeMap';
import { CookieConsentBanner } from './components/CookieConsent';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { AboutMe } from './components/AboutMe';
import { TermsOfService } from './components/TermsOfService';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TrueSizeMap />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      <CookieConsentBanner />
    </>
  );
}

export default App;
