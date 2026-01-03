import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display text-gold tracking-wider">
            Velvet Horizon
          </Link>

          <div className="flex gap-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/packages', label: 'Packages' },
              { path: '/services', label: 'Services' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-wide transition-all duration-300 relative font-sans ${
                  isActive(item.path)
                    ? 'text-gold'
                    : 'text-parchment hover:text-gold'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
