import { useState } from 'react';
import { MapPin, Globe, Move } from 'lucide-react';
import { Map } from './Map';
import { CountrySearch } from './CountrySearch';
import { CountryList } from './CountryList';
import { useCountryGeoJSON } from '../hooks/useCountryGeoJSON';
import { countries, Country } from '../data/countries';
import L from 'leaflet';


export interface SelectedCountry {
  code: string;
  name: string;
  color: string;
  area: number;
  originalLat: number;
  originalLng: number;
  position: { lat: number; lng: number };
}

const COLORS = [
  '#3b82f6', '#ef4444', '#10b981', '#f59e0b',
  '#8b5cf6', '#ec4899', '#14b8a6', '#f97316',
];

export function TrueSizeMap() {
  const [selectedCountries, setSelectedCountries] = useState<SelectedCountry[]>([]);
  const [scaleMultiplier, setScaleMultiplier] = useState<number>(1);
  const { geoData } = useCountryGeoJSON();

  const handleSelectCountry = (country: Country) => {
    if (selectedCountries.some(c => c.code === country.code)) return;

    const colorIndex = selectedCountries.length % COLORS.length;

    // Oblicz rzeczywisty środek z GeoJSON
    let realLat = country.coordinates[0];
    let realLng = country.coordinates[1];
    
    if (geoData) {
      const feature = geoData.features.find((f: any) => f.properties['ISO3166-1-Alpha-2'] === country.code);
      if (feature) {
        const tempLayer = L.geoJSON(feature as GeoJSON.Feature);
        const trueCenter = tempLayer.getBounds().getCenter();
        tempLayer.remove();
        realLat = trueCenter.lat;
        realLng = trueCenter.lng;
      }
    }

    const newCountry: SelectedCountry = {
      code: country.code,
      name: country.name,
      color: COLORS[colorIndex],
      area: country.area,
      originalLat: realLat,
      originalLng: realLng,
      position: {
        lat: realLat,
        lng: realLng,
      },
    };
    setSelectedCountries([...selectedCountries, newCountry]);
  };

  const handleCountryClick = (countryCode: string) => {
    const country = countries.find(c => c.code === countryCode);
    if (country) handleSelectCountry(country);
  };

  // LOGIKA ZNACZNIE UPROSZCZONA - aktualizujemy tylko pozycję
  const handleCountryMove = (code: string, newPosition: { lat: number; lng: number }) => {
    setSelectedCountries(prev =>
      prev.map(country =>
        country.code === code ? { ...country, position: newPosition } : country
      )
    );
  };

  const handleRemoveCountry = (code: string) => {
    setSelectedCountries(selectedCountries.filter(c => c.code !== code));
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <header className="bg-[#1e1e1e] shadow-sm border-b border-gray-700 flex-shrink-0">
        <div className="px-4 py-3">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-300">Rzeczywisty Rozmiar</h1>
          <p className="text-sm md:text-base text-blue-200 mt-1">Porównaj rzeczywiste rozmiary krajów, przeciągając je po mapie</p>
        </div>
      </header>
      
      {/* About Section */}
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
                  Tak! Afryka ma około 11,7 miliona km², a Grenlandia tylko 2,1 miliona km². 
                  W projekcji Merkatora Grenlandia wygląda na porównywalną wielkością, ale w rzeczywistości 
                  jest 5,5 razy mniejsza! To jeden z najbardziej szokujących przykładów zniekształceń.
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
                  Tak! Dane pochodzą z bazy danych Natural Earth, która zawiera dokładne granice polityczne 
                  i współrzędne geograficzne. Wszystkie obliczenia opierają się na matematyce projekcji kartograficznych.
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

      <div className="flex-1 flex flex-col md:flex-row min-h-0 gap-4 md:gap-0 p-4 md:p-0">
        <div className="flex-1 relative h-[60vh] md:h-auto md:min-h-0">
          {geoData && (
            <Map
              selectedCountries={selectedCountries}
              onCountryClick={handleCountryClick}
              onCountryMove={handleCountryMove}
              geoData={geoData}
              scaleMultiplier={scaleMultiplier} 
            />
          )}
        </div>
        <div className="w-full md:w-80 bg-[#1e1e1e] border border-gray-700 md:border-l md:border-t-0 rounded-lg md:rounded-none p-4 overflow-y-auto max-h-[65vh] md:max-h-none">
          <div className="space-y-4">
            <CountrySearch
              onSelectCountry={handleSelectCountry}
              selectedCountries={selectedCountries.map(c => c.code)}
            />
            <div className="bg-[#2a2a2a] border border-blue-900 rounded-lg p-4">
              <h3 className="font-semibold text-blue-300 mb-2">Jak korzystać</h3>
              <ul className="text-sm text-blue-200 space-y-1">
                <li>• Wyszukaj kraje powyżej</li>
                <li>• Kliknij kraje na mapie</li>
                <li>• Przeciągnij kraje, aby porównać rozmiary</li>
              </ul>
              <div className="mt-4">
                <label className="block text-sm font-medium text-blue-300 mb-1">Mnożnik skali</label>
                <input
                  type="range" min={0.5} max={2} step={0.05}
                  value={scaleMultiplier}
                  onChange={(e) => setScaleMultiplier(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-blue-300 mt-1">Obecna: x{scaleMultiplier.toFixed(2)}</div>
              </div>
            </div>
            <CountryList countries={selectedCountries} onRemove={handleRemoveCountry} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-gray-700 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-400 text-sm space-y-4">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">
              Polityka Prywatności
            </a>
            <a href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">
              Regulamin
            </a>
            <a href="https://github.com/BarylStyle/real-size-map" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              GitHub
            </a>
            <a href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
              O mnie
            </a>
          </div>
          <div className="pt-4 border-t border-gray-700">
            <p>&copy; 2026 Rzeczywisty Rozmiar. Wszystkie prawa zastrzeżone.</p>
            <p className="mt-2">Projekt edukacyjny o kartografii i projekcjach map świata</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
