import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Polityka Prywatności</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Informacje ogólne</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
              przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej
              Rzeczywisty Rozmiar dostępnej pod adresem https://rzeczywistyrozmiar.pl.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Administrator danych</h2>
            <p className="mb-3">
              Administratorem danych osobowych zbieranych za pośrednictwem Strony jest BarylStyle.
            </p>
            <p>
              Kontakt w sprawach dotyczących danych osobowych:{' '}
              <a
                href="mailto:kontakt@rzeczywistyrozmiar.pl"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                kontakt@rzeczywistyrozmiar.pl
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2a. Podstawa prawna i okres przechowywania
            </h2>
            <p className="mb-3">
              Dane zbierane przez pliki cookies analityczne i reklamowe przetwarzane są wyłącznie
              na podstawie dobrowolnej zgody Użytkownika (art. 6 ust. 1 lit. a RODO). Zgoda może
              zostać wycofana w każdej chwili, bez wpływu na zgodność z prawem przetwarzania
              dokonanego przed jej wycofaniem.
            </p>
            <p>
              Pliki cookies niezbędne do działania Strony przetwarzane są na podstawie prawnie
              uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO). Dane analityczne
              przechowywane są przez okres do 14 miesięcy, zgodnie z domyślnymi ustawieniami
              Google Analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Pliki cookies</h2>
            <p className="mb-3">
              Strona wykorzystuje pliki cookies (ciasteczka) – małe pliki tekstowe, które są zapisywane 
              na urządzeniu końcowym Użytkownika w celu:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Zapamiętania preferencji dotyczących zgody na pliki cookie</li>
              <li>Zbierania anonimowych statystyk odwiedzin (Google Analytics)</li>
              <li>Wyświetlania reklam (Google AdSense)</li>
            </ul>
            <p className="mt-3">
              Strona stosuje mechanizm Google Consent Mode v2. Oznacza to, że do momentu wyrażenia
              zgody przez Użytkownika narzędzia Google nie zapisują plików cookies ani nie
              przekazują danych umożliwiających identyfikację. Zgoda zbierana jest za pomocą
              certyfikowanej przez Google platformy zarządzania zgodą (CMP), zgodnej ze
              standardem IAB TCF v2.2.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Google Analytics</h2>
            <p className="mb-3">
              Strona wykorzystuje Google Analytics – usługę analizy ruchu dostarczaną przez Google LLC.
              Google Analytics używa plików cookies do analizy sposobu korzystania ze Strony przez Użytkowników.
            </p>
            <p className="mb-3">
              Informacje generowane przez cookies dotyczące korzystania ze Strony (włączając adres IP)
              są przekazywane do Google i przechowywane na serwerach w Stanach Zjednoczonych.
            </p>
            <p className="mb-3">Dane zbierane przez Google Analytics:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Zanonimizowane adresy IP</li>
              <li>Przybliżona lokalizacja geograficzna</li>
              <li>Typ przeglądarki i urządzenia</li>
              <li>Czas spędzony na stronie</li>
              <li>Odwiedzone podstrony</li>
            </ul>
            <p className="mt-3">
              Google Analytics działa tylko po wyrażeniu zgody przez Użytkownika w bannerze cookie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Google AdSense — reklamy</h2>
            <p className="mb-3">
              Strona korzysta z usługi Google AdSense dostarczanej przez Google LLC (1600 Amphitheatre Parkway,
              Mountain View, CA 94043, USA) w celu wyświetlania reklam. Google AdSense używa plików cookies
              oraz podobnych technologii śledzących, aby wyświetlać reklamy dopasowane do zainteresowań
              Użytkownika.
            </p>
            <p className="mb-3">Google AdSense może:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Używać plików cookie do zapamiętania poprzednich wizyt na tej i innych stronach</li>
              <li>Wyświetlać reklamy na podstawie wcześniejszych odwiedzin witryn w sieci Google</li>
              <li>Ograniczać liczbę wyświetleń tej samej reklamy</li>
              <li>Mierzyć skuteczność kampanii reklamowych</li>
            </ul>
            <p className="mt-3 mb-3">
              Użytkownik może zrezygnować z personalizowanych reklam Google, odwiedzając stronę:{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                google.com/settings/ads
              </a>
              . Więcej informacji o polityce prywatności Google:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
            <p>
              Reklamy personalizowane wyświetlane są tylko po wyrażeniu zgody na pliki cookie reklamowe
              w bannerze cookie. Bez zgody wyświetlane są wyłącznie reklamy kontekstowe, nieoparte
              na historii przeglądania.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Prawa użytkownika</h2>
            <p className="mb-3">Użytkownik ma prawo do:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Wycofania zgody na przetwarzanie danych osobowych w dowolnym momencie</li>
              <li>Dostępu do swoich danych</li>
              <li>Usunięcia danych (prawo do bycia zapomnianym)</li>
              <li>Ograniczenia przetwarzania danych</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania danych</li>
            </ul>
            <p className="mt-3">
              Użytkownikowi przysługuje również prawo wniesienia skargi do organu nadzorczego —
              Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa), jeżeli uzna,
              że przetwarzanie jego danych osobowych narusza przepisy RODO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Zarządzanie cookies</h2>
            <p className="mb-3">
              Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Za pomocą ustawień przeglądarki (usunięcie/blokowanie cookies)</li>
              <li>
                Za pomocą bannera zgody wyświetlanego na Stronie — ponowne otwarcie ustawień
                jest możliwe przez link „Zarządzaj opcjami prywatności" w bannerze
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-400">
              Informacje o zarządzaniu cookies w popularnych przeglądarkach:
            </p>
            <ul className="text-sm text-gray-400 ml-4 mt-2 space-y-1">
              <li>Chrome: chrome://settings/cookies</li>
              <li>Firefox: Opcje → Prywatność i bezpieczeństwo</li>
              <li>Safari: Preferencje → Prywatność</li>
              <li>Edge: edge://settings/privacy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Bezpieczeństwo danych</h2>
            <p>
              Strona korzysta z protokołu HTTPS, co zapewnia szyfrowanie danych przesyłanych między 
              przeglądarką Użytkownika a serwerem. Administrator stosuje odpowiednie środki techniczne 
              i organizacyjne zapewniające ochronę przetwarzanych danych.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Zmiany w polityce prywatności</h2>
            <p>
              Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. 
              O wszelkich zmianach Użytkownicy zostaną poinformowani poprzez komunikat na Stronie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">10. Kontakt</h2>
            <p>
              W razie pytań dotyczących Polityki Prywatności prosimy o kontakt:{' '}
              <a
                href="mailto:kontakt@rzeczywistyrozmiar.pl"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                kontakt@rzeczywistyrozmiar.pl
              </a>{' '}
              lub przez GitHub:{' '}
              <a href="https://github.com/BarylStyle" className="text-blue-400 hover:text-blue-300">
                @BarylStyle
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-8 pt-4 border-t border-gray-700">
            Data ostatniej aktualizacji: 14 sierpnia 2026
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
