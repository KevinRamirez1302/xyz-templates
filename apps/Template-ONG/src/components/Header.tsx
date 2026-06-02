import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Leaf, Menu, X, Heart } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Sobre Nosotros' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/contact', label: 'Contacto' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            id="header-logo-link"
            to="/"
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded"
            onClick={() => setIsOpen(false)}
          >
            <Leaf className="h-8 w-8 text-brand-500 fill-brand-100 transition-colors" />
            <span className="text-2xl font-bold font-display tracking-tight text-slate-100 transition-colors">
              Eco<span className="text-brand-500">Vida</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                id={`nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded px-2 py-1 ${
                    isActive
                      ? 'text-brand-500 border-b-2 border-brand-500'
                      : 'text-slate-300 hover:text-brand-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Donate Button */}
            <Link
              id="header-donate-btn"
              to="/donate"
              className="inline-flex items-center space-x-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-brand-500/20 transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              <Heart className="h-4 w-4 fill-white animate-pulse" />
              <span>Donar</span>
            </Link>
          </nav>

          {/* Mobile Actions Toggle & Hamburger */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 border-t border-slate-200 dark:border-slate-800' : 'max-h-0 opacity-0 pointer-events-none'
        } glass-effect`}
      >
        <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              id={`mobile-nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-500/10 text-brand-500 dark:bg-brand-500/20'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          
          <div className="pt-4 px-4">
            <Link
              id="mobile-donate-btn"
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="w-full justify-center inline-flex items-center space-x-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-brand-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <Heart className="h-5 w-5 fill-white animate-pulse" />
              <span>Donar Ahora</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
