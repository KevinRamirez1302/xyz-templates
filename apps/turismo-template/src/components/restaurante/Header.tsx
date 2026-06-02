import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTransparent, setIsTransparent] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY < 700
      setIsTransparent(isAtTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-white shadow-md'
      }`}
    >
      <nav className="container-custom py-4 flex items-center justify-between">
        <div
          className={`text-2xl font-serif font-bold transition-colors duration-300 ${
            isTransparent ? 'text-white' : 'text-primary-600'
          }`}
        >
          Trattoria Italia
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${
            isTransparent
              ? 'text-white hover:text-gray-200'
              : 'text-gray-700 hover:text-primary-600'
          }`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`hidden md:flex gap-8 transition-colors duration-300 ${
            isTransparent ? 'text-white' : 'text-gray-700'
          }`}
        >
          <li>
            <a href="#home" className={`hover:opacity-70 font-medium transition-opacity duration-300`}>Inicio</a>
          </li>
          <li>
            <a href="#about" className={`hover:opacity-70 font-medium transition-opacity duration-300`}>Sobre Nosotros</a>
          </li>
          <li>
            <a href="#menu" className={`hover:opacity-70 font-medium transition-opacity duration-300`}>Menú</a>
          </li>
          <li>
            <a href="#services" className={`hover:opacity-70 font-medium transition-opacity duration-300`}>Servicios</a>
          </li>
          <li>
            <a href="#contact" className={`hover:opacity-70 font-medium transition-opacity duration-300`}>Contacto</a>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div
          className={`md:hidden transition-colors duration-300 ${
            isTransparent
              ? 'bg-black bg-opacity-80 border-t border-gray-600'
              : 'bg-primary-50 border-t border-gray-200'
          }`}
        >
          <ul className={`container-custom py-4 space-y-3 transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-gray-700'}`}>
            <li><a href="#home" onClick={() => setIsOpen(false)} className="block hover:opacity-70 font-medium transition-opacity duration-300">Inicio</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="block hover:opacity-70 font-medium transition-opacity duration-300">Sobre Nosotros</a></li>
            <li><a href="#menu" onClick={() => setIsOpen(false)} className="block hover:opacity-70 font-medium transition-opacity duration-300">Menú</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)} className="block hover:opacity-70 font-medium transition-opacity duration-300">Servicios</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block hover:opacity-70 font-medium transition-opacity duration-300">Contacto</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}
