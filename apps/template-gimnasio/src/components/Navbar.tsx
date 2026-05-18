import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Planes', href: '#plans' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-dark bg-opacity-95 backdrop-blur-sm z-50 border-b border-orange-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">FitZone</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
                aria-label={`Ir a ${link.name}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:block bg-primary text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-semibold"
            aria-label="Únete ahora"
          >
            Únete Ahora
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-primary transition-colors"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-orange-900">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-gray-300 hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 mt-2 bg-primary text-white rounded-lg text-center hover:bg-orange-600 transition-colors duration-300 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Únete Ahora
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
