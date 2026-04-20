import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const { pathname } = useLocation();

  const navLink = (to: string, label: string) => (
    <Link
      to={to}
      className={`text-sm transition-colors px-1 pb-0.5 border-b-2 ${
        pathname === to || (to !== '/' && pathname.startsWith(to))
          ? 'text-blue-300 border-blue-400 font-semibold'
          : 'text-gray-400 hover:text-blue-300 border-transparent'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-[#1e1e1e] border-b border-gray-700 flex-shrink-0">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl md:text-2xl font-bold text-blue-300">🗺️ Rzeczywisty Rozmiar</span>
        </Link>
        <nav className="flex items-center gap-5">
          {navLink('/', 'Mapa')}
          {navLink('/artykuly', 'Artykuły')}
          {navLink('/about', 'O mnie')}
        </nav>
      </div>
    </header>
  );
}
