import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Flower2, Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return savedTheme === 'dark' || (!savedTheme && prefersDark)
    }
    return false
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Clases', path: '/clases' },
    { name: 'Horarios', path: '/horarios' },
    { name: 'Precios', path: '/precios' },
    { name: 'Contacto', path: '/contacto' },
  ]

  const checkActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 shadow-sm glass-nav border-b border-brand-100/20 dark:border-zinc-800/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
          aria-label="Prana Studio - Volver al inicio"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white shadow-md transition-transform duration-300 group-hover:scale-105">
            <Flower2 className="h-5 w-5 animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-950 dark:text-sand-50 font-heading">
            Prana<span className="text-terracotta-500 font-light">Studio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = checkActive(link.path);
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm transition-all duration-200 relative py-1.5 px-2 rounded-md focus-visible:ring-2 focus-visible:ring-brand-500 ${
                      isActive 
                        ? 'text-brand-900 dark:text-brand-200 font-extrabold' 
                        : 'text-zinc-800 dark:text-zinc-200 hover:text-brand-600 dark:hover:text-brand-400 font-semibold'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-brand-600 dark:bg-brand-400" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Utilities & CTAs */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full p-2 text-zinc-800 dark:text-zinc-200 hover:bg-brand-50/80 dark:hover:bg-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {isDark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Bookings CTA */}
          <Link
            to="/contacto"
            className="hidden sm:inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full px-5 py-2 text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Clase de Prueba
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex md:hidden rounded-full p-2 text-zinc-900 dark:text-zinc-100 hover:bg-brand-50 dark:hover:bg-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-20 bg-sand-50/98 dark:bg-zinc-900/98 border-b border-brand-100/20 dark:border-zinc-800/80 shadow-xl backdrop-blur-md transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 max-h-[calc(100vh-5rem)]' : 'opacity-0 scale-y-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="px-6 pt-3 pb-8 space-y-4">
          <nav aria-label="Navegación móvil">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const isActive = checkActive(link.path);
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`block px-4 py-3 rounded-xl text-base transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 ${
                        isActive
                          ? 'bg-brand-100 dark:bg-zinc-800 text-brand-900 dark:text-brand-200 font-extrabold shadow-sm'
                          : 'hover:bg-brand-50/50 dark:hover:bg-zinc-800/30 text-zinc-900 dark:text-zinc-100 font-semibold'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          <div className="border-t border-brand-100/30 dark:border-zinc-800/80 pt-4">
            <Link
              to="/contacto"
              onClick={closeMenu}
              className="flex w-full items-center justify-center bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full py-3 shadow-md hover:shadow-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              Clase de Prueba Gratis
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
