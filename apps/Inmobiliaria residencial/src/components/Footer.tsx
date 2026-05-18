

import { Link } from 'react-router-dom';
import '../index.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-linear-to-r from-[#FF7D29] to-[#FFBF78] text-white py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto">
        
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo y descripción */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-2">InmoRes</h2>
            <p className="text-sm text-[#FEFFD2]">
              Tu portal inmobiliario de confianza. Encontramos tu hogar perfecto.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <nav className="flex flex-col items-center gap-3">
            <h3 className="font-bold text-lg mb-2">Enlaces Rápidos</h3>
            <Link to="/" className="hover:text-[#FEFFD2] transition-colors duration-300 text-sm">Inicio</Link>
            <Link to="/SobreNosotros" className="hover:text-[#FEFFD2] transition-colors duration-300 text-sm">Sobre nosotros</Link>
            <Link to="/Contacto" className="hover:text-[#FEFFD2] transition-colors duration-300 text-sm">Contacto</Link>
          </nav>

          {/* Políticas */}
          <nav className="flex flex-col items-center gap-3">
            <h3 className="font-bold text-lg mb-2">Legal</h3>
            <Link to="/politica-de-privacidad" className="hover:text-[#FEFFD2] transition-colors duration-300 text-sm">Política de Privacidad</Link>
            <Link to="/terminos-y-condiciones" className="hover:text-[#FEFFD2] transition-colors duration-300 text-sm">Términos y Condiciones</Link>
            <Link to="/cookies" className="hover:text-[#FEFFD2] transition-colors duration-300 text-sm">Cookies</Link>
          </nav>

        </div>

        {/* Separador */}
        <div className="border-t border-white border-opacity-30 my-6"></div>

        {/* Parte inferior - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#FEFFD2]">
          <div>
            &copy; {currentYear} InmoRes. Todos los derechos reservados.
          </div>
          
          {/* Redes sociales */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5-7 7"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};