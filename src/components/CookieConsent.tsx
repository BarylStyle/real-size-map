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

      onConsent: ({ cookie }) => {
        if (cookie.categories.includes('analytics')) {
          loadGoogleAnalytics();
        }
        if (cookie.categories.includes('advertising')) {
          enableAdSense();
        }
      },

      onChange: ({ changedCategories, cookie }) => {
        if (changedCategories.includes('analytics')) {
          if (cookie.categories.includes('analytics')) {
            loadGoogleAnalytics();
          } else {
            if (window.gtag) {
              window.gtag('consent', 'update', {
                analytics_storage: 'denied',
              });
            }
          }
        }
        if (changedCategories.includes('advertising')) {
          if (window.gtag) {
            window.gtag('consent', 'update', {
              ad_storage: cookie.categories.includes('advertising') ? 'granted' : 'denied',
              ad_user_data: cookie.categories.includes('advertising') ? 'granted' : 'denied',
              ad_personalization: cookie.categories.includes('advertising') ? 'granted' : 'denied',
            });
          }
        }
      },
    });
  }, []);

  return null;
}

function loadGoogleAnalytics() {
  if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QDF2K62D0D';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  // gtag.js rozpoznaje polecenia tylko po wpisach typu Arguments — wypchnięcie
  // zwykłej tablicy (np. z parametrów rest) jest po cichu ignorowane i config
  // nigdy się nie wykonuje.
  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', 'G-QDF2K62D0D', {
    anonymize_ip: true,
  });
}

function enableAdSense() {
  if (window.gtag) {
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
  }
}
