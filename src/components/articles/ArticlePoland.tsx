import { Helmet } from 'react-helmet-async';
import { ArticleLayout } from './ArticleLayout';

export function ArticlePoland() {
  return (
    <>
      <Helmet>
        <title>Polska na mapie świata — ile naprawdę zajmujemy miejsca? | Rzeczywisty Rozmiar</title>
        <meta name="description" content="Polska ma 312 679 km² i jest 69. największym krajem świata. Sprawdź, jak wypada na tle innych krajów i jak projekcja Merkatora zmienia nasze postrzeganie." />
        <link rel="canonical" href="https://rzeczywistyrozmiar.pl/artykuly/polska-na-mapie" />
      </Helmet>
      <ArticleLayout
        title="Polska na mapie świata — ile naprawdę zajmujemy miejsca?"
        description="Polska ma 312 679 km² — sprawdź, jak wypada na tle innych krajów świata i jak bardzo projekcja Merkatora zmienia nasze postrzeganie kraju."
        datePublished="2026-03-03"
        readingTime="5 min czytania"
      >
        <p>
          Polska to jeden z większych krajów Europy Środkowej, ale w skali globalnej — kraj
          średni. Nasze 312 679 km² plasuje nas na 69. miejscu w świecie pod względem powierzchni.
          Ale jak ten rozmiar wygląda naprawdę, kiedy popatrzymy na niego bez zniekształceń
          projekcji Merkatora?
        </p>

        <h2>Polska w liczbach</h2>
        <ul>
          <li><strong>Powierzchnia:</strong> 312 679 km²</li>
          <li><strong>Miejsce w rankingu:</strong> 69. na świecie (na ok. 195 krajów)</li>
          <li><strong>Szerokość geograficzna:</strong> 49°N – 55°N</li>
          <li><strong>Zniekształcenie Merkatora:</strong> ok. 36–60% (południe–północ)</li>
          <li><strong>Długość z zachodu na wschód:</strong> ok. 689 km</li>
          <li><strong>Długość z południa na północ:</strong> ok. 649 km</li>
        </ul>

        <h2>Jak Mercator zawyża Polskę?</h2>
        <p>
          Polska leży między 49° a 55° szerokości geograficznej północnej. Przy 49°N (południe
          Polski, okolice Zakopanego) projekcja Merkatora powiększa powierzchnię o ok. 36%.
          Przy 55°N (okolice Gdańska i Gdyni) — o ok. 60%.
        </p>
        <p>
          To oznacza, że na standardowej mapie Merkatora Polska wygląda na ok. 40–50% większą
          niż jest w rzeczywistości. Kiedy porównujemy Polskę na mapie z krajem leżącym przy
          równiku o tej samej prawdziwej powierzchni — Polska wydaje się wyraźnie większa.
        </p>

        <h2>Co ma podobną powierzchnię do Polski?</h2>
        <p>
          Porównania pomagają uchwycić skalę. Oto kraje o powierzchni zbliżonej do Polski:
        </p>
        <ul>
          <li><strong>Oman</strong> (309 500 km²) — prawie identyczny, ale na mapie wygląda na mniejszy (leży przy 20–25°N)</li>
          <li><strong>Filipiny</strong> (300 000 km²) — archipelag przy równiku, na mapie sprawia wrażenie dużo mniejszego</li>
          <li><strong>Wietnam</strong> (331 212 km²) — podobna powierzchnia, leży przy 10–22°N</li>
          <li><strong>Malezja</strong> (329 847 km²) — kraj równikowy, wygląda na mapie na mniejszy niż Polska</li>
          <li><strong>Japonia</strong> (377 915 km²) — o 21% większa, leży przy 26–45°N</li>
          <li><strong>Ekwador</strong> (256 369 km²) — o 18% mniejszy, leży przy równiku</li>
          <li><strong>Republika Konga</strong> (342 000 km²) — nieco większa, kraj równikowy</li>
        </ul>
        <p>
          Interesujące jest zestawienie Polski z Omanem: na mapie Merkatora Polska wygląda na
          wyraźnie większą, bo jest na wyższej szerokości geograficznej. W rzeczywistości są
          prawie identyczne.
        </p>

        <h2>Polska na tle sąsiadów — prawdziwe rozmiary</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 pr-4">Kraj</th>
                <th className="text-right py-2 pr-4">Powierzchnia (km²)</th>
                <th className="text-right py-2">Stosunek do Polski</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {[
                ['Rosja (część europejska)', '3 960 000', '12,7× większa'],
                ['Ukraina', '603 550', '1,93× większa'],
                ['Francja', '551 695', '1,76× większa'],
                ['Niemcy', '357 114', '1,14× większa'],
                ['Finlandia', '338 145', '1,08× większa'],
                ['Polska', '312 679', '—'],
                ['Norwegia', '304 282', '2,7% mniejsza'],
                ['Białoruś', '207 600', '33,7% mniejsza'],
                ['Czechy', '78 868', '74,8% mniejsza'],
                ['Słowacja', '49 035', '84,3% mniejsza'],
                ['Litwa', '65 300', '79,1% mniejsza'],
              ].map(([name, area, ratio]) => (
                <tr key={name} className={name === 'Polska' ? 'text-blue-300 font-semibold' : ''}>
                  <td className="py-2 pr-4">{name}</td>
                  <td className="text-right py-2 pr-4">{area}</td>
                  <td className="text-right py-2">{ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Polska vs Niemcy — kto jest naprawdę większy?</h2>
        <p>
          Na mapie Merkatora Polska wydaje się wyraźnie większa od Niemiec. W rzeczywistości
          Niemcy (357 114 km²) są o ok. 14% większe od Polski (312 679 km²). Polska leży trochę
          bardziej na północ niż Niemcy, co wzmacnia efekt Merkatora.
        </p>

        <h2>Polska vs Japonia — zaskakujące podobieństwo</h2>
        <p>
          Japonia (377 915 km²) jest o 21% większa od Polski, ale na mapie Merkatora wygląda
          na mniejszą — Japonia leży blisko 36°N (centralnie), Polska blisko 52°N. Nawet jeśli
          Japonia jest trochę większa w rzeczywistości, na mapie przez zniekształcenie wygląda
          jakby była mniejsza.
        </p>

        <h2>Polska a kraje Globalnego Południa</h2>
        <p>
          Polska porównana z krajami leżącymi blisko równika wygląda na mapie Merkatora na dużo
          większą. Kilka przykładów krajów zbliżonych lub mniejszych od Polski, które na mapach
          wyglądają na mniejsze niż są naprawdę:
        </p>
        <ul>
          <li><strong>Ghana</strong> (238 533 km²) — na mapie wydaje się mała, w rzeczywistości to
          2/3 Polski</li>
          <li><strong>Republika Środkowoafrykańska</strong> (622 984 km²) — dwa razy większa od Polski,
          ale na mapie nie robi wrażenia</li>
          <li><strong>Kamerun</strong> (475 440 km²) — 52% większy od Polski, blisko równika</li>
          <li><strong>Kolumbia</strong> (1 141 748 km²) — 3,65× większa od Polski, przy równiku wygląda
          porównywalnie z Polską</li>
        </ul>

        <h2>Jak sprawdzić rozmiar Polski interaktywnie?</h2>
        <p>
          Najlepszy sposób, żeby zobaczyć zniekształcenia Merkatora w praktyce, to skorzystać
          z naszej interaktywnej mapy. Wybierz Polskę i przesuń ją na różne szerokości geograficzne —
          zobaczysz, jak jej kształt i rozmiar (w wizualnym sensie) zmienia się w zależności od
          pozycji na mapie Merkatora.
        </p>
        <p>
          Możesz też wybrać kraj równikowy podobny do Polski rozmiarem (np. Malezję lub Wietnam)
          i porównać je bezpośrednio — różnica w tym, jak wyglądają na mapie, będzie zaskakująca.
        </p>

        <h2>Podsumowanie</h2>
        <p>
          Polska to kraj solidny rozmiarowo — większy niż mogłoby się wydawać, gdy patrzymy na
          niego na tle globalnego południa. Nasza szerokość geograficzna sprawia, że na mapach
          szkolnych byliśmy zawsze nieco zawyżeni względem krajów tropikalnych. To nie jest powód
          do dumy ani wstydu — to po prostu fakt matematyczny, który warto rozumieć, patrząc
          na mapy świata.
        </p>
      </ArticleLayout>
    </>
  );
}
