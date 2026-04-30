import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/artykuly', label: 'Artykuły' },
  { to: '/about', label: 'O mnie' },
  { to: '/privacy-policy', label: 'Polityka Prywatności' },
  { to: '/terms', label: 'Regulamin' },
];

export function Footer() {
  return (
    <footer className="bg-[#1e1e1e] border-t border-gray-700 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-0.5">
            <Link
              to="/"
              className="text-blue-300 font-semibold text-sm tracking-wide hover:text-blue-200 transition-colors"
            >
              🗺️ Rzeczywisty Rozmiar
            </Link>
            <span className="text-gray-600 text-xs">
              Narzędzie edukacyjne o kartografii
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-500 text-xs hover:text-blue-300 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-gray-600 text-xs whitespace-nowrap">
            © 2026 Rzeczywisty Rozmiar
          </p>

        </div>
      </div>
    </footer>
  );
}
