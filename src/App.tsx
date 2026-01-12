import { Routes, Route } from 'react-router-dom';
import { TrueSizeMap } from './components/TrueSizeMap';
import { CookieConsentBanner } from './components/CookieConsent';
import { PrivacyPolicy } from './components/PrivacyPolicy';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TrueSizeMap />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <CookieConsentBanner />
    </>
  );
}

export default App;
