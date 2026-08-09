import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

declare global {
  interface Window {
    dataLayer: any[];
    // Definiowane w index.html, przed jakimkolwiek tagiem Google.
    gtag: (...args: any[]) => void;
  }
}

const GA_ID = 'G-QDF2K62D0D';

export function CookieConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
        },
        advertising: {
          enabled: false,
        },
      },

      language: {
        default: 'pl',
        translations: {
          pl: {
            consentModal: {
              title: 'Używamy plików cookie',
              description:
                'Ta strona wykorzystuje pliki cookie, aby zapewnić najlepszą jakość korzystania z naszej witryny. Używamy też ciasteczek analitycznych i reklamowych (Google AdSense). <a href="/privacy-policy" class="cc-link">Zobacz Politykę Prywatności</a>',
              acceptAllBtn: 'Akceptuj wszystkie',
              acceptNecessaryBtn: 'Tylko niezbędne',
              showPreferencesBtn: 'Zarządzaj preferencjami',
            },
            preferencesModal: {
              title: 'Ustawienia plików cookie',
              acceptAllBtn: 'Akceptuj wszystkie',
              acceptNecessaryBtn: 'Tylko niezbędne',
              savePreferencesBtn: 'Zapisz ustawienia',
              closeIconLabel: 'Zamknij',
              sections: [
                {
                  title: 'Wykorzystanie plików cookie',
                  description:
                    'Używamy plików cookie, aby zapewnić podstawowe funkcje witryny i poprawić Twoje doświadczenia online. Więcej informacji w <a href="/privacy-policy" class="cc-link">Polityce Prywatności</a>.',
                },
                {
                  title: 'Niezbędne pliki cookie',
                  description:
                    'Te pliki cookie są niezbędne do prawidłowego funkcjonowania strony i nie mogą być wyłączone.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Pliki cookie analityczne',
                  description:
                    'Te pliki cookie pomagają nam zrozumieć, jak użytkownicy korzystają z naszej witryny, zbierając anonimowe dane. Wykorzystujemy Google Analytics.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'Pliki cookie reklamowe',
                  description:
                    'Te pliki cookie są używane przez Google AdSense do wyświetlania reklam dopasowanych do Twoich zainteresowań. Pozwalają też ograniczyć liczbę wyświetleń tej samej reklamy i mierzyć skuteczność kampanii reklamowych.',
                  linkedCategory: 'advertising',
                },
              ],
            },
          },
        },
      },

      guiOptions: {
        consentModal: {
          layout: 'box inline',
          position: 'bottom right',
          equalWeightButtons: false,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: false,
          flipButtons: false,
        },
      },

      onConsent: ({ cookie }) => syncConsent(cookie.categories),
      onChange: ({ cookie }) => syncConsent(cookie.categories),
    });
  }, []);

  return null;
}

/**
 * Zgłasza aktualny stan zgody do Consent Mode v2. Stan domyślny (wszystko
 * odrzucone) ustawia index.html przed startem tagów Google — tutaj wysyłamy
 * wyłącznie aktualizację, zawsze dla kompletu czterech sygnałów, żeby
 * cofnięcie zgody działało tak samo jak jej udzielenie.
 */
function syncConsent(categories: string[]) {
  const analytics = categories.includes('analytics') ? 'granted' : 'denied';
  const advertising = categories.includes('advertising') ? 'granted' : 'denied';

  window.gtag('consent', 'update', {
    analytics_storage: analytics,
    ad_storage: advertising,
    ad_user_data: advertising,
    ad_personalization: advertising,
  });

  if (analytics === 'granted') {
    loadGoogleAnalytics();
  }
}

function loadGoogleAnalytics() {
  if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true });
}
