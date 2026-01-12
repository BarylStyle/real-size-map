import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

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
      },

      language: {
        default: 'pl',
        translations: {
          pl: {
            consentModal: {
              title: 'Używamy plików cookie',
              description:
                'Ta strona wykorzystuje pliki cookie, aby zapewnić najlepszą jakość korzystania z naszej witryny. Pliki cookie analityczne pomagają nam zrozumieć, jak odwiedzający korzystają ze strony. <a href="#/privacy-policy" class="cc-link">Zobacz Politykę Prywatności</a>',
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
                    'Używamy plików cookie, aby zapewnić podstawowe funkcje witryny i poprawić Twoje doświadczenia online. Więcej informacji w <a href="#/privacy-policy" class="cc-link">Polityce Prywatności</a>.',
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

      onConsent: ({ cookie }) => {
        if (cookie.categories.includes('analytics')) {
          loadGoogleAnalytics();
        }
      },

      onChange: ({ changedCategories, cookie }) => {
        if (changedCategories.includes('analytics')) {
          if (cookie.categories.includes('analytics')) {
            loadGoogleAnalytics();
          } else {
            // Disable GA if user revokes consent
            if (window.gtag) {
              window.gtag('consent', 'update', {
                analytics_storage: 'denied',
              });
            }
          }
        }
      },
    });
  }, []);

  return null;
}

function loadGoogleAnalytics() {
  // Check if already loaded
  if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    return;
  }

  // Load gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QDF2K62D0D';
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: any[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', 'G-QDF2K62D0D', {
    anonymize_ip: true,
  });
}
