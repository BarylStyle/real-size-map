import { Navbar } from './Navbar';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col">
      <Navbar />
      <div className="max-w-4xl mx-auto w-full px-4 py-10 flex-1">
        <div className="bg-[#1e1e1e] rounded-lg border border-gray-700 p-8">
          <h1 className="text-4xl font-bold mb-8 text-blue-300">
            Regulamin Serwisu
          </h1>

          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Postanowienia ogólne</h2>
              <p className="mb-2">
                Niniejszy regulamin określa zasady korzystania z serwisu internetowego "Rzeczywisty Rozmiar" 
                dostępnego pod adresem rzeczywistyrozmiar.pl.
              </p>
              <p>
                Serwis ma charakter edukacyjny i służy do prezentacji rzeczywistych rozmiarów krajów 
                na podstawie ich zniekształcenia w projekcji Merkatora.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">2. Definicje</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Serwis</strong> – interaktywna aplikacja webowa "Rzeczywisty Rozmiar"</li>
                <li><strong>Użytkownik</strong> – osoba korzystająca z Serwisu</li>
                <li><strong>Administrator</strong> – właściciel i operator Serwisu</li>
                <li><strong>Treść</strong> – dane geograficzne, mapy i informacje edukacyjne dostępne w Serwisie</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">3. Warunki korzystania</h2>
              <p className="mb-2">
                Korzystanie z Serwisu jest dobrowolne i bezpłatne. Użytkownik akceptuje warunki 
                niniejszego Regulaminu z chwilą rozpoczęcia korzystania z Serwisu.
              </p>
              <p>
                Serwis przeznaczony jest wyłącznie do celów edukacyjnych i informacyjnych. 
                Nie wymaga rejestracji ani podawania danych osobowych.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Dane geograficzne</h2>
              <p className="mb-2">
                Wszystkie dane geograficzne, w tym granice krajów i ich powierzchnie, pochodzą 
                z publicznie dostępnych źródeł i są prezentowane w celach edukacyjnych.
              </p>
              <p>
                Administrator nie ponosi odpowiedzialności za ewentualne nieścisłości w danych 
                geograficznych wynikające ze zmian granic państwowych lub błędów w źródłowych 
                bazach danych.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">5. Właściwość intelektualna</h2>
              <p className="mb-2">
                Wszelkie prawa do Serwisu, w tym do kodu źródłowego, interfejsu użytkownika 
                i treści edukacyjnych, należą do Administratora.
              </p>
              <p>
                Kod źródłowy Serwisu jest dostępny publicznie na platformie GitHub na licencji 
                open source, zgodnie z warunkami określonymi w repozytorium.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">6. Zakaz nadużyć</h2>
              <p>Użytkownik zobowiązuje się do:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Korzystania z Serwisu zgodnie z jego przeznaczeniem</li>
                <li>Niewykonywania działań mogących zakłócić funkcjonowanie Serwisu</li>
                <li>Nieingerowania w kod źródłowy lub infrastrukturę Serwisu bez zgody Administratora</li>
                <li>Niepodejmowania prób nieautoryzowanego dostępu do systemów Serwisu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">7. Wyłączenie odpowiedzialności</h2>
              <p className="mb-2">
                Serwis dostarczany jest w stanie "jak jest" (as is). Administrator nie udziela 
                żadnych gwarancji dotyczących dostępności, ciągłości działania lub wolności od błędów.
              </p>
              <p className="mb-2">
                Administrator nie ponosi odpowiedzialności za:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Decyzje podejmowane na podstawie informacji z Serwisu</li>
                <li>Przerwy w dostępie do Serwisu</li>
                <li>Utratę danych lub inne szkody powstałe w związku z korzystaniem z Serwisu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">8. Cookies i prywatność</h2>
              <p>
                Zasady przetwarzania danych osobowych i wykorzystania plików cookies zostały 
                szczegółowo opisane w{' '}
                <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                  Polityce Prywatności
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">9. Zmiany w Regulaminie</h2>
              <p>
                Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszym Regulaminie. 
                O istotnych zmianach Użytkownicy zostaną poinformowani poprzez komunikat w Serwisie. 
                Dalsze korzystanie z Serwisu po wprowadzeniu zmian oznacza ich akceptację.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">10. Kontakt</h2>
              <p>
                W przypadku pytań dotyczących Regulaminu prosimy o kontakt:{' '}
                <a 
                  href="mailto:kontakt@rzeczywistyrozmiar.pl" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  kontakt@rzeczywistyrozmiar.pl
                </a>
              </p>
            </section>

            <p className="text-sm text-gray-400 mt-8 pt-4 border-t border-gray-700">
              Data ostatniej aktualizacji: 3 lutego 2026
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
