export function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-gray-700">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            O mnie
          </h1>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Cześć! Mam 29 lat i jestem hobbystą programistą samoukiem z Polski. 
              Fascynuje mnie tworzenie interaktywnych aplikacji webowych, które łączą 
              technologię z edukacją i eksplorują ciekawe aspekty naszego świata.
            </p>

            <p>
              "Rzeczywisty Rozmiar" to projekt, który narodził się z mojej pasji do 
              geografii i kartografii. Chciałem stworzyć narzędzie, które w prosty 
              i intuicyjny sposób pokazuje, jak bardzo projekcja Merkatora zniekształca 
              nasze postrzeganie świata.
            </p>

            <p>
              Jako samouk, nieustannie uczę się nowych technologii i technik programowania. 
              Każdy projekt to dla mnie okazja do rozwoju i eksperymentowania z nowymi 
              rozwiązaniami.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Kontakt</h2>
              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <span className="text-purple-400">📧</span>
                  <a 
                    href="mailto:kontakt@rzeczywistyrozmiar.pl" 
                    className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  >
                    kontakt@rzeczywistyrozmiar.pl
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-purple-400">💻</span>
                  <a 
                    href="https://github.com/BarylStyle" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  >
                    github.com/BarylStyle
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="/" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              ← Powrót do mapy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
