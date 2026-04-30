import { Helmet } from 'react-helmet-async';
import { ArticleLayout } from './ArticleLayout';

export function ArticleOceans() {
  return (
    <>
      <Helmet>
        <title>Rozmiary oceanów świata — Pacyfik, Atlantyk, Indyjski w liczbach | Rzeczywisty Rozmiar</title>
        <meta name="description" content="Pacyfik jest większy niż wszystkie lądy razem wzięte. Sprawdź prawdziwe rozmiary oceanów świata i dowiedz się, jak mapy zniekształcają nasze postrzeganie mórz." />
        <link rel="canonical" href="https://rzeczywistyrozmiar.pl/artykuly/rozmiary-oceanow" />
      </Helmet>
      <ArticleLayout
        title="Rozmiary oceanów świata — Pacyfik, Atlantyk, Indyjski w liczbach"
        description="Pacyfik jest większy niż wszystkie lądy razem wzięte. Sprawdź prawdziwe rozmiary oceanów świata i dowiedz się, jak mapy zniekształcają nasze postrzeganie mórz."
        datePublished="2026-04-10"
        readingTime="7 min czytania"
      >
        <p>
          Kiedy mówimy o zniekształceniach map, zazwyczaj skupiamy się na lądach — Grenlandii,
          Rosji, Afryce. Ale mapy równie mocno zniekształcają nasze postrzeganie oceanów.
          A to naprawdę ważne: Ziemia jest planetą wodną — oceany pokrywają 71% jej powierzchni.
          Zrozumienie ich prawdziwych rozmiarów to fundament rozumienia naszej planety.
        </p>

        <h2>Pacyfik — ocean większy niż wszystkie lądy</h2>
        <p>
          Ocean Spokojny (Pacyfik) jest największym oceanem na Ziemi i jednocześnie
          największym pojedynczym obszarem geograficznym na naszej planecie. Jego
          powierzchnia wynosi ok. <strong>165 250 000 km²</strong> — to więcej niż łączna
          powierzchnia wszystkich lądów Ziemi (ok. 149 mln km²).
        </p>
        <p>
          Żeby zrozumieć skalę Pacyfiku, wyobraź sobie, że usuwasz z mapy świata
          Azję, Europę, Afrykę, obie Ameryki i Australię — i nadal masz obszar
          większy niż to wszystko razem wzięte.
        </p>
        <p>
          Kilka konkretnych porównań:
        </p>
        <ul>
          <li>Pacyfik jest ok. 5,4 razy większy od Atlantyku</li>
          <li>Odległość z zachodniego wybrzeża USA do Japonii to ok. 8 500 km</li>
          <li>Odległość z Alaski do Nowej Zelandii to ok. 10 000 km</li>
          <li>Pacyfik zawiera ponad połowę wszystkich wód morskich na Ziemi</li>
          <li>Najgłębszy punkt Ziemi — Rów Mariański — leży na Pacyfiku i sięga
          10 994 m głębokości (więcej niż wynosi wysokość Mount Everestu)</li>
        </ul>

        <h2>Atlantyk — ocean, który wydaje się znany</h2>
        <p>
          Ocean Atlantycki zajmuje ok. <strong>106 460 000 km²</strong> (z morzami
          przyległymi) — jest drugiem co do wielkości oceanem. Mimo że jest dwukrotnie
          mniejszy od Pacyfiku, to właśnie Atlantyk zdominował europejskie wyobrażenie
          o morzu i oceanach ze względów historycznych.
        </p>
        <p>
          Atlantyk rozciąga się od Arktyki po Antarktykę, łącząc Europę i Afrykę
          z obiema Amerykami. Najwęższe miejsce — między Brazylią a Afryką Zachodnią —
          ma ok. 2 848 km szerokości, co sugeruje, że oba lądy kiedyś były ze sobą
          połączone (i rzeczywiście tak było, zanim rozdzieliła je tektonika płyt).
        </p>
        <p>
          Ciekawostka: Atlantyk powiększa się o ok. 2,5 cm rocznie — tyle, co rośnie
          ludzki paznokieć. Za 200 milionów lat będzie niemal dwukrotnie szerszy niż dziś.
        </p>

        <h2>Ocean Indyjski — najmniej znany z wielkich oceanów</h2>
        <p>
          Ocean Indyjski zajmuje ok. <strong>70 560 000 km²</strong> — jest trzecim co do
          wielkości oceanem na Ziemi. Jest prawie w całości ograniczony przez lądy:
          od północy przez Azję, od zachodu przez Afrykę, od wschodu przez Australię
          i Azję Południowo-Wschodnią, od południa przez Antarktydę.
        </p>
        <p>
          Ta zamknięta geometria sprawia, że Ocean Indyjski ma inne właściwości niż
          Pacyfik czy Atlantyk — jest cieplejszy (brak zimnych wód polarnych z północy),
          ma specyficzne monsunowe wiatry i prądy morskie, które przez tysiące lat
          umożliwiały handel między Afryką, Arabią, Indiami i Azją Południowo-Wschodnią.
        </p>

        <h2>Tabela: zestawienie oceanów</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 pr-4">Ocean</th>
                <th className="text-right py-2 pr-4">Powierzchnia (km²)</th>
                <th className="text-right py-2 pr-4">Max głębokość (m)</th>
                <th className="text-right py-2">% powierzchni Ziemi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {[
                ['Pacyfik', '165 250 000', '10 994', '32,5%'],
                ['Atlantyk', '106 460 000', '8 376', '20,9%'],
                ['Indyjski', '70 560 000', '7 258', '13,8%'],
                ['Arktyczny', '14 090 000', '5 625', '2,8%'],
                ['Antarktyczny', '20 327 000', '7 235', '4,0%'],
              ].map(([name, area, depth, pct]) => (
                <tr key={name}>
                  <td className="py-2 pr-4">{name}</td>
                  <td className="text-right py-2 pr-4">{area}</td>
                  <td className="text-right py-2 pr-4">{depth}</td>
                  <td className="text-right py-2 text-gray-400">{pct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Jak mapy zniekształcają oceany?</h2>
        <p>
          Projekcja Merkatora wpływa na oceany tak samo jak na lądy — ale efekty są
          mniej oczywiste, bo zwykle nie porównujemy oceanów ze sobą tak jak porównujemy kraje.
        </p>
        <p>
          Ocean Arktyczny (14 mln km²) na mapie Merkatora jest mocno zawyżony — leży
          blisko bieguna, więc w projekcji jest rozciągnięty w poziomie. Na mapie
          wygląda na niemal tak duży jak Atlantyk, tymczasem Atlantyk jest 7,5 razy większy.
        </p>
        <p>
          Pacyfik na standardowej mapie Merkatora jest "przecięty" — lewą krawędzią mapy
          jest zazwyczaj południk 180°, co sprawia, że Pacyfik jest podzielony na dwie
          części (Pacyfik Zachodni i Wschodni). Przez to jego prawdziwa rozległość
          jest trudna do ocenienia.
        </p>

        <h2>Dlaczego Ziemia jest "niebieską planetą"?</h2>
        <p>
          Kiedy patrzymy na Ziemię z kosmosu, dominuje błękit. To dlatego, że oceany pokrywają
          <strong>361 mln km²</strong> — 71% powierzchni planety. Lądy zajmują 149 mln km² —
          zaledwie 29%. Jeśli spojrzeć na Ziemię od strony Pacyfiku, można zobaczyć
          półkulę, na której ląd zajmuje zaledwie ok. 10–15% powierzchni.
        </p>
        <p>
          Średnia głębokość oceanów wynosi 3 688 m, co sprawia, że objętość wód morskich
          wynosi ok. 1,335 mld km³. Gdybyśmy mogli rozłożyć tę wodę równomiernie po
          całej powierzchni Ziemi (lądach i morzach), pokryłaby ją warstwą grubości ok. 2,7 km.
        </p>

        <h2>Ocean Arktyczny — morze, które znika</h2>
        <p>
          Ocean Arktyczny (14 mln km²) jest najmniejszym z pięciu oceanów i jednocześnie
          tym, który w największym stopniu zmienia się na naszych oczach. Letni lód
          arktyczny zmniejszył się o ok. 40% od 1980 roku. Według prognoz klimatycznych,
          do roku 2050 Ocean Arktyczny może być latem całkowicie wolny od lodu —
          pierwszy raz od ok. 3 milionów lat.
        </p>

        <h2>Znaczenie oceanów dla życia na Ziemi</h2>
        <p>
          Oceany regulują klimat planety, absorbując ciepło i CO₂. Pochłaniają ok.
          25% rocznych emisji CO₂ generowanych przez człowieka. Produkują ponad połowę
          tlenu, którym oddychamy — głównie dzięki fitoplanktonowi. Są domem dla
          ok. 230 000 znanych gatunków i szacunkowo 2 milionów nieznanych.
        </p>

        <h2>Podsumowanie</h2>
        <p>
          Oceany są największą geograficzną rzeczywistością na Ziemi — a jednocześnie
          tą, którą najłatwiej pominąć skupiając się na lądach. Pacyfik sam w sobie
          jest większy niż cały ląd Ziemi. Atlantyk i Indyjski razem są dwukrotnie
          większe od wszystkich kontynentów razem wziętych. Mapa Merkatora nie kłamie
          o oceanach mniej niż o lądach — po prostu kłamstwa są mniej oczywiste,
          bo ocean zawsze traktujemy jako "tło".
        </p>
        <p>
          Następnym razem, gdy otworzysz Google Maps, pamiętaj: niebieski obszar
          jest prawdziwym bohaterem tej mapy.
        </p>
      </ArticleLayout>
    </>
  );
}
