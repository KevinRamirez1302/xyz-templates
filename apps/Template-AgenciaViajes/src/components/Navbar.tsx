import { Menu, X, Plane } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['destinations', 'about', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (section: string) => {
    const isActive = activeSection === section;
    // Enlaces del menú: oscuro por defecto y color secundario cuando está activo
    return `relative py-1 text-lg font-medium transition-colors duration-300 ${
      isActive ? 'text-secondary' : 'text-slate-800 hover:text-secondary'
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`;
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo (Left) */}
          <div className="flex-shrink-0 flex items-center lg:flex-1">
            <Link to="/" className="text-3xl font-serif text-primary tracking-tighter flex items-center gap-2">
              <Plane className="text-secondary" size={32} />
              TRAVEL<span className="text-secondary">TEMPLATE</span>
            </Link>
          </div>
          
          {/* Links (Center) */}
          <div className="hidden md:flex items-center justify-center space-x-12 flex-1">
            <a href="#destinations" className={getLinkClass('destinations')}>Destinos</a>
            <a href="#about" className={getLinkClass('about')}>Nosotros</a>
            <a href="#contact" className={getLinkClass('contact')}>Contacto</a>
          </div>

          {/* Button (Right) */}
          <div className="hidden md:flex items-center justify-end lg:flex-1">
            <a href="#contact" className="px-6 py-2.5 text-lg bg-secondary text-white rounded-full hover:bg-secondary/90 transition-colors shadow-sm font-medium">
              Reservar Viaje
            </a>
          </div>

          <div className="md:hidden flex items-center">
            {/* Botón de menú móvil con texto más oscuro para mejor contraste */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full">
          <div className="px-4 py-4 space-y-3">
            <a href="#destinations" className="block text-slate-800 hover:text-secondary font-medium">Destinos</a>
            <a href="#about" className="block text-slate-800 hover:text-secondary font-medium">Nosotros</a>
            <a href="#contact" className="block text-slate-800 hover:text-secondary font-medium">Contacto</a>
            <div className="pt-4 border-t border-slate-100">
              <a href="#contact" className="block w-full text-center px-5 py-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-colors shadow-sm font-medium">
                Reservar Viaje
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
