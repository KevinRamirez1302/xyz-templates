import React, { useState } from 'react';
import { Package, Menu, X, User, UserPlus } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Rastreo', href: '#rastreo' },
    { name: 'Cotizador', href: '#cotizador' },
    { name: 'Registro de Casillero', href: '#registro' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0f2042] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-[#ff4c00] p-2.5 rounded-xl shadow-md flex items-center justify-center transform transition hover:rotate-6">
              <Package className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-wider text-white flex items-center gap-1">
                TRANSPORTE <span className="text-[#ff4c00]">EXPRESS</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-300 uppercase font-semibold">
                Logística & Casilleros
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-slate-200 hover:text-[#ff4c00] font-medium text-sm lg:text-base transition-colors py-2 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff4c00] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => {
                const el = document.getElementById('registro');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:text-white border border-slate-600 hover:border-[#ff4c00] rounded-xl transition-all hover:bg-[#0f2042]/80"
            >
              <User className="w-4 h-4 text-[#ff4c00]" />
              Iniciar Sesión
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('registro');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#ff4c00] hover:bg-[#e04300] rounded-xl shadow-md hover:shadow-lg hover:shadow-[#ff4c00]/20 transform hover:-translate-y-0.5 transition-all"
            >
              <UserPlus className="w-4 h-4" />
              Registrarse
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0f2042] border-t border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3 border-t border-slate-800">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                const el = document.getElementById('registro');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 text-base font-semibold text-slate-200 border border-slate-600 rounded-xl hover:bg-slate-800 transition-colors"
            >
              <User className="w-5 h-5 text-[#ff4c00]" />
              Iniciar Sesión
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                const el = document.getElementById('registro');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 text-base font-semibold text-white bg-[#ff4c00] hover:bg-[#e04300] rounded-xl shadow-md transition-colors"
            >
              <UserPlus className="w-5 h-5" />
              Registrarse
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
