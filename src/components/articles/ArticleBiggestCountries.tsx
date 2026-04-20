import { Helmet } from 'react-helmet-async';
import { ArticleLayout } from './ArticleLayout';

export function ArticleBiggestCountries() {
  return (
    <>
      <Helmet>
        <title>Największe kraje świata — prawdziwy ranking z liczbami | Rzeczywisty Rozmiar</title>
        <meta name="description" content="Ranking 10 największych państw na Ziemi. Sprawdź, jak bardzo projekcja Merkatora zawyża powierzchnię Rosji, Kanady i Alaski w stosunku do rzeczywistości." />
        <link rel="canonical" href="https://rzeczywistyrozmiar.pl/artykuly/najwieksze-kraje-swiata" />
      </Helmet>
      <ArticleLayout
        title="Największe kraje świata — prawdziwy ranking z liczbami"
        description="Ranking 10 największych państw na Ziemi. Sprawdź, jak bardzo projekcja Merkatora zawyża powierzchnię Rosji, Kanady i Alaski."
        datePublished="2026-02-17"
        readingTime="6 min czytania"
      >
        <p>
          Który kraj jest największy na świecie? To pytanie, które każde dziecko słyszało na lekcji
          geografii, ma prostą odpowiedź: Rosja. Ale kiedy patrzymy na standardową mapę świata
          i próbujemy ocenić, jak wielkie są poszczególne kraje w porównaniu do siebie, mapa systematycznie
          nas okłamuje. Projekcja Merkatora zawyża rozmiary krajów w wysokich szerokościach geograficznych,
          zmieniając nasze intuicje o skali świata.
        </p>

        <h2>Top 10 największych krajów — prawdziwe liczby</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 pr-4">#</th>
                <th className="text-left py-2 pr-4">Kraj</th>
                <th className="text-right py-2 pr-4">Powierzchnia (km²)</th>
                <th className="text-right py-2">Zniekształcenie Mercatora</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {[
                ['1', 'Rosja', '17 098 242', '+94%'],
                ['2', 'Kanada', '9 984 670', '+52%'],
                ['3', 'USA', '9 833 517', '+27%'],
                ['4', 'Chiny', '9 596 960', '+20%'],
                ['5', 'Brazylia', '8 515 767', '+5%'],
                ['6', 'Australia', '7 692 024', '+21%'],
                ['7', 'Indie', '3 287 263', '+12%'],
                ['8', 'Argentyna', '2 780 400', '+10%'],
                ['9', 'Kazachstan', '2 724 900', '+45%'],
                ['10', 'Algieria', '2 381 741', '+8%'],
              ].map(([rank, name, area, distortion]) => (
                <tr key={name}>
                  <td className="py-2 pr-4 text-gray-500">{rank}</td>
                  <td className="py-2 pr-4">{name}</td>
                  <td className="text-right py-2 pr-4">{area}</td>
                  <td className="text-right py-2 text-yellow-400">{distortion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-2">
          *Zniekształcenie Merkatora to przybliżony procent, o który kraj wygląda na mapie większy niż jest w rzeczywistości.
        </p>

        <h2>1. Rosja — olbrzym, który wygląda jeszcze większy</h2>
        <p>
          Rosja jest bezsprzecznie największym krajem świata: jej 17,1 mln km² to niemal dwukrotność
          Kanady, drugiego co do wielkości państwa. Jednak na mapie Merkatora Rosja wygląda jeszcze
          bardziej imponująco — zajmuje prawie całą górną część mapy i sprawia wrażenie większej
          niż Afryka (30,4 mln km²).
        </p>
        <p>
          Rosja rozciąga się między 41° a 81° szerokości geograficznej północnej. Przy 60°N
          (taka szerokość mniej więcej odpowiada środkowi Rosji) projekcja Merkatora powiększa
          powierzchnię około 4-krotnie. Szacuje się, że Rosja na typowej mapie szkolnej jest
          zawyżona o około 94% — wygląda niemal dwukrotnie większa niż jest naprawdę.
        </p>

        <h2>2. Kanada — kraj zawyżony o połowę</h2>
        <p>
          Kanada (9,98 mln km²) to drugi co do wielkości kraj świata. Leży między 42° a 83°N,
          co oznacza, że jest poważnie zawyżona przez projekcję Merkatora — szacunkowo o ok. 52%.
          Na mapie Merkatora Kanada wydaje się porównywalna z Rosją; w rzeczywistości Rosja jest
          prawie dwukrotnie większa.
        </p>
        <p>
          Ciekawy przykład: Kanada wygląda na mapach na znacznie większą od Australii (7,69 mln km²),
          co jest prawdą — ale różnica wygląda na ogromną, podczas gdy naprawdę Kanada jest „tylko"
          o 30% większa.
        </p>

        <h2>3. USA — częściowo ofiara projekcji</h2>
        <p>
          Stany Zjednoczone mają 9,83 mln km² i leżą między 25° a 49°N (bez Alaski). To szerokości
          geograficzne, przy których zniekształcenia są umiarkowane — ok. 27%. Alaska (1,72 mln km²)
          jest mocno zawyżona, bo leży między 55° a 71°N.
        </p>
        <p>
          Na niektórych mapach Alaska wydaje się prawie tak duża jak kontynentalna część USA.
          W rzeczywistości wszystkie 48 stanów kontynentalnych razem zajmują 8,08 mln km²,
          czyli są prawie 5 razy większe od Alaski.
        </p>

        <h2>4. Chiny i Brazylia — kraje oceniane sprawiedliwiej</h2>
        <p>
          Chiny (9,6 mln km²) leżą między 18° a 53°N. Południowe Chiny są blisko równika i nie
          są mocno zniekształcone, ale północna część kraju jest zawyżona. Ogólne zniekształcenie
          to ok. 20%.
        </p>
        <p>
          Brazylia (8,52 mln km²) to jeden z niewielu dużych krajów, który jest reprezentowany
          dość wiernie na mapie Merkatora — leży prawie w całości blisko równika, między 5°N
          a 33°S. Zniekształcenie wynosi zaledwie ok. 5%. Dlatego właśnie Brazylia na mapie
          wygląda nieproporcjonalnie „mała" w stosunku do Kanady czy Rosji — choć jest od nich
          porównywalnie duża.
        </p>

        <h2>Polska — gdzie jesteśmy w rankingu?</h2>
        <p>
          Polska (312 679 km²) jest 69. największym krajem na świecie. To duże państwo jak na
          Europę — większe od Niemiec (357 114 km²? nie — Niemcy są nieco większe), ale mniejsze
          od Francji (551 695 km²) i znacznie mniejsze od Ukrainy (603 550 km²).
        </p>
        <p>
          Polska leży między 49° a 55°N, co oznacza zniekształcenie o ok. 36–60%. Nasza mapa
          w szkole pokazywała Polskę większą niż jest naprawdę w stosunku do krajów tropikalnych.
        </p>

        <h2>Jaki kraj jest w rzeczywistości podobny do Polski rozmiarem?</h2>
        <p>Kilka porównań dla 312 679 km²:</p>
        <ul>
          <li><strong>Oman</strong>: 309 500 km² — praktycznie identyczny</li>
          <li><strong>Filipiny</strong>: 300 000 km² — nieco mniejsze</li>
          <li><strong>Ekwador</strong>: 256 369 km² — nieco mniejszy</li>
          <li><strong>Republika Konga</strong>: 342 000 km² — nieco większa</li>
          <li><strong>Japonia</strong>: 377 915 km² — zbliżona, nieco większa</li>
        </ul>

        <h2>Podsumowanie</h2>
        <p>
          Ranking największych krajów świata nie kłamie — Rosja jest naprawdę ogromna, Brazylia
          naprawdę wielka. Problem tkwi w tym, jak te relacje wielkości są reprezentowane
          na mapie. Projekcja Merkatora sprawia, że kraje daleko od równika wydają się
          nieproporcjonalnie duże. Kiedy zdasz sobie sprawę z tej skali zniekształceń, spojrzysz
          na mapę świata zupełnie innymi oczami.
        </p>
        <p>
          Wypróbuj naszą interaktywną mapę i przesuń Rosję na równik — zobaczysz, jak bardzo
          zmniejsza się jej widzialny rozmiar, gdy usuniesz zniekształcenie Merkatora.
        </p>
      </ArticleLayout>
    </>
  );
}
