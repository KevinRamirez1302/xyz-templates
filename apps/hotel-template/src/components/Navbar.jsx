import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('ES');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'El Hotel', href: '#hotel' },
    { name: 'Habitaciones', href: '#rooms' },
    { name: 'Gastronomía', href: '#gastronomy' },
    { name: 'Servicios', href: '#services' },
    { name: 'Experiencias', href: '#experiences' },
    { name: 'Contacto', href: '#contact' },
  ];

  const languages = ['ES', 'EN', 'DE'];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 text-gray-900 border-b border-gray-100'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a href="#" className="flex flex-col items-start group">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-widest uppercase transition-colors group-hover:text-[#c5a880]">
              Hotel
            </span>
            <span className={`text-[10px] sm:text-xs tracking-[0.3em] uppercase font-light ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>
              Santa Cruz de Tenerife
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm lg:text-base font-medium tracking-wide transition-colors hover:text-[#c5a880] relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c5a880] after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Section */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {/* Direct Phone Contact */}
            <a
              href="tel:+34922276000"
              className="flex items-center space-x-1.5 text-sm font-medium hover:text-[#c5a880] transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
              <span className="hidden lg:inline whitespace-nowrap">+34 922 276 000</span>
            </a>

            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1 text-sm font-medium hover:text-[#c5a880] transition-colors focus:outline-none whitespace-nowrap"
              >
                <Globe className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <span>{activeLang}</span>
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-xl py-1 z-50 border border-gray-100">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setActiveLang(lang);
                        setLangDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm whitespace-nowrap ${
                        activeLang === lang ? 'bg-[#c5a880]/10 text-[#c5a880] font-semibold' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book Now Button */}
            <a
              href="#booking"
              className="flex items-center space-x-2 bg-[#c5a880] hover:bg-[#b0926a] text-white px-5 py-2.5 rounded-none font-medium text-sm tracking-wider uppercase shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 duration-300 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>Reservar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <a
              href="#booking"
              className="bg-[#c5a880] text-white p-2 text-xs uppercase tracking-wider font-semibold shadow-md"
            >
              Reservar
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-[#c5a880]' : 'text-white hover:text-[#c5a880]'
              }`}
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out overflow-hidden border-b border-gray-100 ${
          mobileMenuOpen ? 'max-h-[500px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="px-6 space-y-4 text-gray-900">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-medium py-2 border-b border-gray-100 hover:text-[#c5a880] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex items-center justify-between border-t border-gray-200">
            <a href="tel:+34922276000" className="flex items-center space-x-2 text-base font-medium text-gray-700">
              <Phone className="w-5 h-5 text-[#c5a880]" />
              <span>+34 922 276 000</span>
            </a>
            <div className="flex space-x-4">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setActiveLang(lang);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm font-semibold px-2 py-1 border ${
                    activeLang === lang ? 'border-[#c5a880] bg-[#c5a880]/10 text-[#c5a880]' : 'border-gray-200 text-gray-600'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
