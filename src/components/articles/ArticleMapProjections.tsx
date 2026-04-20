import { Helmet } from 'react-helmet-async';
import { ArticleLayout } from './ArticleLayout';

export function ArticleMapProjections() {
  return (
    <>
      <Helmet>
        <title>Rodzaje projekcji kartograficznych — przewodnik | Rzeczywisty Rozmiar</title>
        <meta name="description" content="Mercator, Peters, Robinson, Winkel Tripel — czym różnią się projekcje map? Który układ wybrał National Geographic i dlaczego? Kompletny przewodnik po projekcjach." />
        <link rel="canonical" href="https://rzeczywistyrozmiar.pl/artykuly/rodzaje-projekcji" />
      </Helmet>
      <ArticleLayout
        title="Rodzaje projekcji kartograficznych — przewodnik dla każdego"
        description="Mercator, Peters, Robinson, Winkel Tripel — czym różnią się projekcje map? Który układ współrzędnych wybrał National Geographic i dlaczego?"
        datePublished="2026-02-24"
        readingTime="8 min czytania"
      >
        <p>
          Kula ziemska jest trójwymiarowa — mapa jest płaska. Przełożenie jednego na drugie bez
          żadnych zniekształceń jest matematycznie niemożliwe. To nie opinia ani problem techniczny,
          który można kiedyś rozwiązać — to udowodniony fakt geometryczny. Każda mapa świata
          zniekształca przynajmniej jedną z czterech właściwości: kształty, powierzchnie, odległości
          lub kierunki.
        </p>
        <p>
          Kartografowie przez wieki opracowali dziesiątki różnych projekcji, każda z innym kompromisem.
          Oto przewodnik po najważniejszych z nich.
        </p>

        <h2>Cztery właściwości, których nie można zachować jednocześnie</h2>
        <p>Każda mapa może chronić tylko niektóre z tych właściwości:</p>
        <ul>
          <li><strong>Konforemność (kształt)</strong> — kształty małych obszarów są zachowane, kąty poprawne</li>
          <li><strong>Równopowierzchniowość</strong> — powierzchnie obszarów są proporcjonalne do rzeczywistości</li>
          <li><strong>Równoodległościowość</strong> — odległości od wybranego punktu są proporcjonalne</li>
          <li><strong>Ekwidirektywność</strong> — kierunki z wybranego punktu są poprawne</li>
        </ul>
        <p>
          Twierdzenie Gaussa (1827) dowodzi, że nie można stworzyć mapy, która zachowuje jednocześnie
          kształty i powierzchnie. Kartografowie muszą wybierać.
        </p>

        <h2>Projekcja Merkatora (1569) — konformalna, nawigacyjna</h2>
        <p>
          Mercator zachowuje kształty (jest konformalna) i kierunki. Kurs wyznaczony na kompasie
          odpowiada prostej linii na mapie — to rewolucja dla nawigacji morskiej. Kosztem jest
          drastyczne zawyżanie powierzchni przy biegunach: Grenlandia wygląda jak kontynent,
          Antarktyda zajmuje cały dolny pas mapy.
        </p>
        <p>
          <strong>Najlepsze zastosowanie:</strong> nawigacja morska i lotnicza, mapy portów,
          morskie wykresy kursów.<br />
          <strong>Najgorsze zastosowanie:</strong> edukacja, porównywanie rozmiarów krajów.
        </p>

        <h2>Projekcja Gall-Peters (1855/1974) — równopowierzchniowa, kontrowersyjna</h2>
        <p>
          James Gall opracował tę projekcję w 1855 roku, ale popularność zyskała dopiero w 1974,
          gdy Arno Peters ogłosił ją jako „sprawiedliwą mapę świata". Projekcja zachowuje
          powierzchnie — Afryka jest tak duża, jak naprawdę jest. Kosztem są silnie zniekształcone
          kształty: kraje wyglądają jak ściśnięte lub rozciągnięte.
        </p>
        <p>
          Peters promował swoją mapę jako odpowiedź na europocentryzm Merkatora, co wywołało
          długą debatę wśród kartografów. Krytycy wskazywali, że kształty na projekcji Petersa
          są tak zniekształcone, że kraje stają się trudne do rozpoznania.
        </p>
        <p>
          <strong>Najlepsze zastosowanie:</strong> porównywanie powierzchni krajów, materiały
          edukacyjne skupione na proporcjach obszarów.<br />
          <strong>Ograniczenie:</strong> kształty krajów są mocno zdeformowane.
        </p>

        <h2>Projekcja Robinsona (1963) — „kompromisowa"</h2>
        <p>
          Arthur Robinson stworzył tę projekcję dla Rand McNally z jasnym celem: nie miała być
          najlepsza w żadnej jednej właściwości, ale wyglądać „miło" i dawać ogólnie wierny obraz
          świata. Ani konformalna, ani równopowierzchniowa — po prostu dobry kompromis.
        </p>
        <p>
          Projekcja Robinsona była standardem National Geographic przez ponad 20 lat (1988–1998).
          Jej problem: bieguny są zbyt szerokie, a Grenlandia wciąż zawyżona, choć mniej niż
          na Merkatora.
        </p>
        <p>
          <strong>Najlepsze zastosowanie:</strong> mapy ogólne, atlasy szkolne, mapy dekoracyjne.<br />
          <strong>Ograniczenie:</strong> nie zachowuje precyzyjnie ani powierzchni, ani kształtów.
        </p>

        <h2>Projekcja Winkel Tripel (1921) — ulubieniec National Geographic</h2>
        <p>
          Oswald Winkel stworzył tę projekcję starając się zminimalizować trzy rodzaje zniekształceń
          jednocześnie — stąd nazwa „Tripel" (trzy). National Geographic przyjął Winkel Tripel
          jako standard w 1998 roku i używa go do dziś.
        </p>
        <p>
          Winkel Tripel daje zrównoważony obraz świata: kształty są w miarę zachowane, powierzchnie
          są bliższe rzeczywistości niż na Merkatora, a bieguny nie są nieskończenie rozciągnięte.
          Grenlandia jest wciąż zawyżona, ale znacznie mniej niż na Merkatora.
        </p>
        <p>
          <strong>Najlepsze zastosowanie:</strong> mapy ogólne wysokiej jakości, atlasy, edukacja
          geograficzna — ogólnie uważana za najlepszy kompromis dla mapy świata.<br />
          <strong>Ograniczenie:</strong> skomplikowana matematycznie, trudniejsza do implementacji.
        </p>

        <h2>Projekcja Goode'a (Homolosine, 1923) — „skórka pomarańczowa"</h2>
        <p>
          John Paul Goode stworzył mapę, która wygląda jak obrana pomarańcza: kontynenty są
          „rozłożone" na płaskiej powierzchni z wyraźnymi nacięciami przez oceany. Ta projekcja
          zachowuje zarówno kształty, jak i powierzchnie lokalnie — kosztem ciągłości mapy.
        </p>
        <p>
          Zniekształcenia są minimalne, ale mapa jest rozerwana — nie można na niej narysować
          prostej drogi przez ocean. Świetna do porównywania rozmiarów kontynentów, bezużyteczna
          dla nawigacji.
        </p>

        <h2>Projekcja Dymaxion / Fuller (1943) — mapa bez „góry" i „dołu"</h2>
        <p>
          Buckminster Fuller zaprojektował mapę rzutowaną na sieć dwudziestościoboków, które
          można złożyć w bryłę. Jej główna zaleta: można ją obracać i układać tak, że żaden
          obszar nie jest nienaturalnie wyciągnięty. Kontynentalny układ jest zaskakujący —
          wszystkie wielkie lądy tworzą jeden „superkontynent" na mapie.
        </p>
        <p>
          <strong>Najlepsze zastosowanie:</strong> prezentacje artystyczne, myślenie holistyczne
          o globie, kontestowanie tradycyjnych map.<br />
          <strong>Ograniczenie:</strong> trudna w codziennym użyciu.
        </p>

        <h2>Projekcja Web Mercator (EPSG:3857) — standard internetu</h2>
        <p>
          Google Maps, OpenStreetMap, Bing Maps — wszystkie używają Web Mercator. Jest to wariant
          Merkatora, który traktuje Ziemię jako idealną kulę (a nie elipsoidę). To uproszczenie
          ułatwia obliczenia kafelków mapy i przyspiesza renderowanie.
        </p>
        <p>
          Web Mercator dziedziczy wszystkie wady klasycznego Merkatora: zawyżone regiony polarne,
          mylące proporcje. Ale dla map internetowych z kafelkami i dowolnym przybliżaniem — jest
          praktycznie niezastąpiony ze względów technicznych.
        </p>

        <h2>Którą projekcję wybrać?</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 pr-4">Cel</th>
                <th className="text-left py-2">Polecana projekcja</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {[
                ['Nawigacja morska/lotnicza', 'Mercator'],
                ['Porównywanie rozmiarów', 'Gall-Peters, Goode Homolosine'],
                ['Ogólna mapa świata (szkoła)', 'Winkel Tripel, Robinson'],
                ['Mapy krajów / regionów', 'Stożkowe lub walcowe lokalnie'],
                ['Aplikacje internetowe', 'Web Mercator (standard)'],
                ['Prezentacje artystyczne', 'Dymaxion / Fuller'],
              ].map(([goal, projection]) => (
                <tr key={goal}>
                  <td className="py-2 pr-4">{goal}</td>
                  <td className="py-2 text-blue-300">{projection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Podsumowanie</h2>
        <p>
          Nie istnieje „idealna" projekcja kartograficzna — każda jest kompromisem. Ważne jest,
          żeby wiedzieć, co dany kompromis oznacza. Mapa Merkatora nie jest „zła" — jest
          znakomitym narzędziem nawigacyjnym. Problem pojawia się, gdy używamy jej do celów,
          do których nie była stworzona: oceny rozmiarów krajów i edukacji geograficznej.
        </p>
        <p>
          Nasza interaktywna mapa pozwala zobaczyć, jak zmieniają się proporcje krajów w zależności
          od miejsca na mapie Merkatora — co jest doskonałym sposobem na zrozumienie skali zniekształceń.
        </p>
      </ArticleLayout>
    </>
  );
}
