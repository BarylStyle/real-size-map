import { MapPin, Globe, Move } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="bg-[#1e1e1e] text-white p-8 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Nagłówek */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Odkryj Prawdziwy Rozmiar Świata
          </h1>
          <p className="text-xl text-gray-300">
            Zobacz, jak bardzo tradycyjne mapy kłamią o wielkości krajów
          </p>
        </div>

        {/* Sekcja: Czym jest projekcja Merkatora */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-semibold">Czym jest Projekcja Merkatora?</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            Projekcja Merkatora to matematyczna metoda przekształcenia kulistej Ziemi na płaską mapę, 
            stworzona przez flamandzkiego kartografa Gerardusa Mercatora w 1569 roku. Choć jest niezwykle 
            użyteczna dla nawigacji morskiej (zachowuje kąty i kierunki), ma jedną poważną wadę: 
            dramatycznie zniekształca rozmiary obszarów im dalej od równika.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            W projekcji Merkatora obszary bliskie biegunów są ogromnie powiększone, podczas gdy regiony 
            równikowe są przedstawiane proporcjonalnie mniejsze. To oznacza, że kraje takie jak Grenlandia 
            czy Rosja wyglądają na mapie znacznie większe niż są w rzeczywistości.
          </p>
        </section>

        {/* Sekcja: Dlaczego mapy kłamią */}
        <section className="space-y-4 bg-[#2a2a2a] p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-red-400" />
            <h2 className="text-3xl font-semibold">Dlaczego Mapy Kłamią?</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                Niemożliwość idealnego odwzorowania
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Matematycznie niemożliwe jest przekształcenie powierzchni kuli na płaszczyznę bez 
                zniekształceń. Każda projekcja musi wybrać co zachować: kąty, odległości czy powierzchnie. 
                Projekcja Merkatora wybiera kąty, poświęcając dokładność powierzchni.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                Szokujące przykłady zniekształceń
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  <strong>Grenlandia vs Afryka:</strong> Na mapie Grenlandia wygląda podobnie do Afryki, 
                  ale w rzeczywistości Afryka jest 14 razy większa!
                </li>
                <li>
                  <strong>Alaska vs Brazylia:</strong> Alaska wydaje się większa, ale Brazylia jest 
                  ponad 5 razy większa.
                </li>
                <li>
                  <strong>Skandynawia vs Indie:</strong> Skandynawia wygląda na większą, ale Indie 
                  mają prawie 3-krotnie większą powierzchnię.
                </li>
                <li>
                  <strong>Rosja vs Afryka:</strong> Rosja wydaje się ogromna, ale Afryka jest 
                  faktycznie większa!
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                Konsekwencje kulturowe
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Te zniekształcenia wpływają na nasze postrzeganie świata. Kraje globalnego północy 
                (Europa, Ameryka Północna) są wizualnie powiększone, podczas gdy kraje równikowe 
                (Afryka, Ameryka Południowa, Azja Południowo-Wschodnia) są pomniejszane. To może 
                nieświadomie wpływać na nasze rozumienie geopolityki i znaczenia różnych regionów świata.
              </p>
            </div>
          </div>
        </section>

        {/* Sekcja: Jak używać aplikacji */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Move className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-semibold">Jak Używać Tej Aplikacji?</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-[#2a2a2a] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                1. Wybierz kraj
              </h3>
              <p className="text-gray-300">
                Użyj wyszukiwarki lub kliknij na kraj z listy po prawej stronie. Kraj pojawi się 
                na mapie w swojej prawdziwej wielkości.
              </p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                2. Przeciągnij kraj po mapie
              </h3>
              <p className="text-gray-300">
                Kliknij i przytrzymaj kraj, następnie przeciągnij go w dowolne miejsce na mapie. 
                Podczas przesuwania kraj automatycznie skaluje się według projekcji Merkatora, 
                pokazując jak bardzo byłby zniekształcony w danej lokalizacji.
              </p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">
                3. Porównuj kraje
              </h3>
              <p className="text-gray-300">
                Dodaj więcej krajów i przeciągaj je obok siebie, aby bezpośrednio porównać ich 
                rzeczywiste rozmiary. Możesz też użyć suwaka "Mnożnik skali", aby powiększyć 
                lub pomniejszyć wszystkie wybrane kraje jednocześnie.
              </p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                4. Usuń kraj
              </h3>
              <p className="text-gray-300">
                Aby usunąć kraj z mapy, kliknij przycisk "✕" obok nazwy kraju w panelu po prawej stronie.
              </p>
            </div>
          </div>
        </section>

        {/* Sekcja: Ciekawostki */}
        <section className="space-y-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/20">
          <h2 className="text-3xl font-semibold mb-4">💡 Ciekawostki Geograficzne</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                <strong>Afryka jest ogromna:</strong> W Afryce zmieściłyby się Chiny, USA, Indie, 
                Japonia, Wielka Brytania i większość Europy razem wziętych!
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span>
                <strong>Rosja nie jest tak wielka:</strong> Choć jest największym krajem świata, 
                w projekcji Merkatora jest pokazana jako około 2x większa niż w rzeczywistości.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>
                <strong>Antarktyda:</strong> W projekcji Merkatora nie można jej w ogóle pokazać, 
                gdyż matematycznie ciągnie się do nieskończoności.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">•</span>
              <span>
                <strong>Europa vs Ameryka Południowa:</strong> Ameryka Południowa ma prawie 
                dwukrotnie większą powierzchnię niż Europa, choć na większości map wyglądają podobnie.
              </span>
            </li>
          </ul>
        </section>

        {/* Sekcja: FAQ */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold mb-6">❓ Często Zadawane Pytania (FAQ)</h2>
          <div className="space-y-4">
            <div className="bg-[#2a2a2a] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                1. Czy Grenlandia naprawdę jest mniejsza od Afryki?
              </h3>
              <p className="text-gray-300">
                Tak! Afryka ma około 30,4 miliona km², a Grenlandia tylko 2,17 miliona km².
                W projekcji Merkatora wyglądają na porównywalne, ale w rzeczywistości Grenlandia
                jest 14 razy mniejsza! To jeden z najbardziej szokujących przykładów zniekształceń.
              </p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                2. Jakie projekcje map są dokładniejsze niż Mercator?
              </h3>
              <p className="text-gray-300">
                Istnieje kilka alternatyw: projekcja Mollweide (zachowuje proporcje), Sinusoidalna
                (równopowierzchniowa), czy Gall-Peters (celowo powiększa Afrykę i Amerykę Południową).
                Żadna projekcja nie jest idealna - każda coś zniekształca.
              </p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">
                3. Dlaczego więc używamy projekcji Merkatora?
              </h3>
              <p className="text-gray-300">
                Ponieważ zachowuje kąty prostych tras (kompasy wskazują prawidłowe kierunki).
                Dla nawigacji morskiej czy lotniczej to bezcenne. Google Maps też jej używa,
                mimo zniekształceń, bo jest wygodna i intuicyjna dla użytkowników.
              </p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                4. Jak ta aplikacja oblicza rzeczywiste rozmiary?
              </h3>
              <p className="text-gray-300">
                Aplikacja używa współrzędnych geograficznych (szerokość i długość) z bazy danych GeoJSON.
                Wyświetla kraje w ich rzeczywistych proporcjach oraz pokazuje, jak byłyby zniekształcone
                na mapie Mercatora w różnych szerokościach geograficznych.
              </p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-red-400 mb-2">
                5. Czy te dane są dokładne?
              </h3>
              <p className="text-gray-300">
                Tak! Granice pochodzą z otwartej bazy geo-countries, opartej na danych Natural Earth,
                która zawiera dokładne granice polityczne i współrzędne geograficzne. Wszystkie
                obliczenia opierają się na matematyce projekcji kartograficznych.
              </p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">
                6. Czy mogę użyć tego do edukacji?
              </h3>
              <p className="text-gray-300">
                Oczywiście! Ta aplikacja jest znakomita do nauczania geografii, kartografii i matematyki.
                Pokazuje uczniom rzeczywiste rozmiary krajów i pomaga zrozumieć, jak mapy mogą zniekształcać rzeczywistość.
              </p>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-700">
          <p>
            Ta aplikacja wykorzystuje dane geograficzne GeoJSON i bibliotekę Leaflet do 
            interaktywnej wizualizacji. Wszystkie obliczenia powierzchni są oparte na 
            rzeczywistych danych geograficznych.
          </p>
        </div>
      </div>
    </div>
  );
}
