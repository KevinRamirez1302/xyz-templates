import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Barra de navegación superior */}
      <nav className="bg-linear-to-r from-[#FF7D29] to-[#FFBF78] sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="shrink-0">
              <Link to="/" className="text-2xl font-bold text-white drop-shadow-md">
                InmoRes
              </Link>
            </div>

            {/* Accesos directos en la barra de navegación - Desktop */}
            <ul className="hidden md:flex space-x-8 items-center">
              <li>
                <Link
                  to="/"
                  className="text-white font-semibold hover:text-[#FEFFD2] transition duration-300 relative group"
                >
                  Inicio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FEFFD2] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/SobreNosotros"
                  className="text-white font-semibold hover:text-[#FEFFD2] transition duration-300 relative group"
                >
                  Sobre nosotros
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FEFFD2] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Contacto"
                  className="text-white font-semibold hover:text-[#FEFFD2] transition duration-300 relative group"
                >
                  Contacto
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FEFFD2] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>

            {/* Botón para móvil (menú hamburguesa) */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#FFBF78] focus:outline-none transition duration-300"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

          </div>
        </div>

        {/* Menú móvil (desplegable) */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FFBF78] border-t-2 border-[#FF7D29] animate-in slide-in-from-top">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-white font-semibold hover:text-[#FEFFD2] transition duration-300 block py-2 px-4 rounded-lg hover:bg-[#FF7D29]"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/SobreNosotros"
                  onClick={closeMenu}
                  className="text-white font-semibold hover:text-[#FEFFD2] transition duration-300 block py-2 px-4 rounded-lg hover:bg-[#FF7D29]"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/Contacto"
                  onClick={closeMenu}
                  className="text-white font-semibold hover:text-[#FEFFD2] transition duration-300 block py-2 px-4 rounded-lg hover:bg-[#FF7D29]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};
