import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Mí', path: '/about' },
    { name: 'Servicios', path: '/services' },
    { name: 'Contacto', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  
  // Is transparent ONLY if we are on the Home page and haven't scrolled down
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled && !isOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isTransparent 
        ? 'bg-transparent py-4' 
        : 'bg-white/90 backdrop-blur-md shadow-sm py-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
              <div className={`p-2 rounded-lg transition-colors ${
                isTransparent 
                  ? 'bg-white/20 group-hover:bg-white/30 backdrop-blur-sm' 
                  : 'bg-primary/10 group-hover:bg-primary/20'
              }`}>
                <Brain className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-primary'}`} />
              </div>
              <span className={`font-semibold text-xl tracking-tight transition-colors ${
                isTransparent ? 'text-white' : 'text-gray-800'
              }`}>
                Mente<span className={isTransparent ? 'text-purple-300' : 'text-primary'}>Clara</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) 
                    ? (isTransparent ? 'text-white font-bold' : 'text-primary font-bold') 
                    : (isTransparent ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-primary')
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:-translate-y-0.5 ${
                isTransparent
                  ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
                  : 'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg'
              }`}
            >
              Pedir Cita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 transition-colors ${
                isTransparent && !isOpen ? 'text-white' : 'text-gray-600 hover:text-primary'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl font-medium transition-colors shadow-md"
              >
                Pedir Cita
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
