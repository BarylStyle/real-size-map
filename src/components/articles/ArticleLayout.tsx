import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

interface ArticleLayoutProps {
  title: string;
  description: string;
  datePublished: string;
  readingTime: string;
  children: React.ReactNode;
}

export function ArticleLayout({ title, description, datePublished, readingTime, children }: ArticleLayoutProps) {
  const { pathname } = useLocation();
  const canonical = `https://rzeczywistyrozmiar.pl${pathname}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Person',
      name: 'Mateusz Baryła',
      url: 'https://rzeczywistyrozmiar.pl/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rzeczywisty Rozmiar',
      url: 'https://rzeczywistyrozmiar.pl',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rzeczywistyrozmiar.pl/favicon.svg',
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    inLanguage: 'pl',
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="min-h-screen bg-[#121212] text-white flex flex-col">
      <Navbar />

      <article className="max-w-4xl mx-auto w-full px-4 py-10 flex-1">
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <time dateTime={datePublished}>
              {new Date(datePublished).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span>·</span>
            <span>{readingTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-300 leading-tight">
            {title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-blue-600 pl-4 bg-[#1e1e1e] py-3 pr-4 rounded-r-lg">
            {description}
          </p>
        </header>

        <div className="space-y-4 text-gray-300 leading-relaxed
          [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-blue-300 [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:border-b [&>h2]:border-gray-700 [&>h2]:pb-2
          [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-blue-200 [&>h3]:mt-8 [&>h3]:mb-3
          [&>p]:my-4 [&>p]:leading-relaxed
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:my-4 [&>ul]:space-y-2
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:my-4 [&>ol]:space-y-2
          [&_strong]:text-white [&_em]:text-gray-200
          [&_a]:text-blue-400 [&_a:hover]:text-blue-300
        ">
          {children}
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <Link to="/artykuly" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
              ← Wszystkie artykuły
            </Link>
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors text-sm"
            >
              Wypróbuj interaktywną mapę →
            </Link>
          </div>
        </footer>
      </article>
      <Footer />
    </div>
    </>
  );
}
