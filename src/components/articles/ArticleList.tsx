import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../Navbar';

const articles = [
  {
    slug: 'projekcja-merkatora',
    title: 'Projekcja Merkatora — dlaczego mapa świata kłamie od 450 lat',
    description: 'Historia i mechanizm projekcji Merkatora. Dowiedz się, dlaczego Grenlandia wygląda jak kontynent, a Afryka jest mniejsza niż powinna.',
    date: '2026-02-03',
    readingTime: '7 min czytania',
  },
  {
    slug: 'afryka-vs-grenlandia',
    title: 'Afryka vs Grenlandia — jak bardzo mapy zniekształcają rozmiary?',
    description: 'Afryka jest 14 razy większa niż Grenlandia, ale na mapie wyglądają podobnie. Pełne porównanie rozmiarów kontynentów z liczbami.',
    date: '2026-02-10',
    readingTime: '6 min czytania',
  },
  {
    slug: 'najwieksze-kraje-swiata',
    title: 'Największe kraje świata — prawdziwy ranking z liczbami',
    description: 'Ranking 10 największych państw na Ziemi. Sprawdź, jak bardzo projekcja Merkatora zawyża powierzchnię Rosji, Kanady i Alaski.',
    date: '2026-02-17',
    readingTime: '6 min czytania',
  },
  {
    slug: 'rodzaje-projekcji',
    title: 'Rodzaje projekcji kartograficznych — przewodnik dla każdego',
    description: 'Mercator, Peters, Robinson, Winkel Tripel — czym różnią się projekcje map? Który układ współrzędnych wybrał National Geographic i dlaczego?',
    date: '2026-02-24',
    readingTime: '8 min czytania',
  },
  {
    slug: 'polska-na-mapie',
    title: 'Polska na mapie świata — ile naprawdę zajmujemy miejsca?',
    description: 'Polska ma 312 679 km² — sprawdź, jak wypada na tle innych krajów świata i jak bardzo projekcja Merkatora zmienia nasze postrzeganie kraju.',
    date: '2026-03-03',
    readingTime: '5 min czytania',
  },
];

export function ArticleList() {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col">
      <Helmet>
        <title>Artykuły o kartografii i geografii | Rzeczywisty Rozmiar</title>
        <meta name="description" content="Edukacyjne artykuły o projekcjach kartograficznych, rzeczywistych rozmiarach krajów i kontynentów. Dowiedz się, dlaczego mapy kłamią." />
        <link rel="canonical" href="https://rzeczywistyrozmiar.pl/artykuly" />
      </Helmet>

      <Navbar />

      <div className="max-w-4xl mx-auto w-full px-4 py-10 flex-1">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4 text-blue-300">
            Artykuły o kartografii i geografii
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Edukacyjne artykuły wyjaśniające, dlaczego mapy zniekształcają obraz świata, jak działają projekcje kartograficzne i jakie są prawdziwe rozmiary krajów.
          </p>
        </header>

        <div className="grid gap-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/artykuly/${article.slug}`}
              className="block bg-[#1e1e1e] border border-gray-700 rounded-xl p-6 hover:border-blue-500 hover:bg-[#252525] transition-all group"
            >
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <span>·</span>
                <span>{article.readingTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors mb-2">
                {article.title}
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">{article.description}</p>
              <span className="inline-block mt-3 text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                Czytaj artykuł →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            🗺️ Sprawdź interaktywną mapę
          </Link>
        </div>
      </div>
    </div>
  );
}
