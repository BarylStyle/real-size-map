import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <header className="bg-[#1e1e1e] border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do mapy
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Polityka Prywatności</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Informacje ogólne</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
              przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej 
              Rzeczywisty Rozmiar dostępnej pod adresem https://barylstyle.github.io/real-size-map/.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Administrator danych</h2>
            <p>
              Administratorem danych osobowych zbieranych za pośrednictwem Strony jest BarylStyle.
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
            </ul>
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
            <h2 className="text-2xl font-semibold text-white mb-3">5. Prawa użytkownika</h2>
            <p className="mb-3">Użytkownik ma prawo do:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Wycofania zgody na przetwarzanie danych osobowych w dowolnym momencie</li>
              <li>Dostępu do swoich danych</li>
              <li>Usunięcia danych (prawo do bycia zapomnianym)</li>
              <li>Ograniczenia przetwarzania danych</li>
              <li>Przenoszenia danych</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Zarządzanie cookies</h2>
            <p className="mb-3">
              Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Za pomocą ustawień przeglądarki (usunięcie/blokowanie cookies)</li>
              <li>Za pomocą panelu ustawień cookies dostępnego na stronie</li>
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
            <h2 className="text-2xl font-semibold text-white mb-3">7. Bezpieczeństwo danych</h2>
            <p>
              Strona korzysta z protokołu HTTPS, co zapewnia szyfrowanie danych przesyłanych między 
              przeglądarką Użytkownika a serwerem. Administrator stosuje odpowiednie środki techniczne 
              i organizacyjne zapewniające ochronę przetwarzanych danych.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Zmiany w polityce prywatności</h2>
            <p>
              Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. 
              O wszelkich zmianach Użytkownicy zostaną poinformowani poprzez komunikat na Stronie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Kontakt</h2>
            <p>
              W razie pytań dotyczących Polityki Prywatności prosimy o kontakt przez GitHub: 
              <a href="https://github.com/BarylStyle" className="text-blue-400 hover:text-blue-300 ml-1">
                @BarylStyle
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-8 pt-4 border-t border-gray-700">
            Data ostatniej aktualizacji: 12 stycznia 2026
          </p>
        </div>
      </main>
    </div>
  );
}
