import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GraduationCap, Menu, X, Sun, Moon, Globe } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return savedTheme === 'dark' || (!savedTheme && prefersDark)
  })
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const location = useLocation()

  // Apply theme class on change
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

  const toggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navLinks = [
    { name: lang === 'es' ? 'Inicio' : 'Home', path: '/' },
    { name: lang === 'es' ? 'Sobre Nosotros' : 'About Us', path: '/about' },
    { name: lang === 'es' ? 'Programas' : 'Programs', path: '/programs' },
    { name: lang === 'es' ? 'Contacto' : 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header 
      style={{ backgroundColor: 'var(--brand)', padding: '0 2rem' }}
      className="sticky top-0 z-50 w-full transition-colors duration-300 shadow-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between h-20">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
          aria-label="Aura Academy - Home"
        >
          <div 
            style={{ color: 'var(--brand)' }}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-md transition-transform duration-300 group-hover:scale-105"
          >
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white font-outfit">
            Aura<span style={{ color: 'var(--accent)' }}>Academy</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{ 
                    color: '#fff', 
                    opacity: isActive(link.path) ? 1 : 0.85, 
                    fontFamily: 'DM Sans',
                    fontWeight: isActive(link.path) ? 700 : 500
                  }}
                  className="text-sm transition-all duration-200 relative py-1.5 focus-visible:ring-2 focus-visible:ring-white rounded-md px-2"
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-white" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side utilities (Theme, Lang, CTA, Hamburger) */}
        <div className="flex items-center gap-3">
          
          {/* Language Selector */}
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-lg p-2 text-white/90 hover:bg-white/10 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white"
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-bold uppercase">{lang === 'es' ? 'ES' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-white/90 hover:bg-white/10 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white"
            aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {isDark ? <Sun className="h-5 w-5 text-[var(--accent)]" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Desktop Admissions CTA */}
          <Link
            to="#inscribir"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--dark)',
              fontWeight: 500,
              border: 'none',
              borderRadius: '8px',
              padding: '8px 20px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="hidden lg:inline-flex shadow-sm hover:scale-[1.02] transition-transform duration-200"
          >
            {lang === 'es' ? 'Inscribir' : 'Enroll'}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex md:hidden rounded-lg p-2 text-white/90 hover:bg-white/10 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white"
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
        style={{ backgroundColor: 'var(--brand)' }}
        className={`md:hidden fixed inset-x-0 top-20 border-b border-white/10 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 max-h-[calc(100vh-5rem)]' : 'opacity-0 scale-y-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-3">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    style={{
                      color: '#fff',
                      opacity: isActive(link.path) ? 1 : 0.85,
                      fontFamily: 'DM Sans',
                      fontWeight: isActive(link.path) ? 700 : 500
                    }}
                    className={`block px-4 py-3 rounded-xl text-base transition-colors focus-visible:ring-2 focus-visible:ring-white ${
                      isActive(link.path)
                        ? 'bg-white/10'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="border-t border-white/15 pt-4 px-4">
            <Link
              to="#inscribir"
              onClick={closeMenu}
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--dark)',
                fontWeight: 500,
                border: 'none',
                borderRadius: '8px',
                padding: '12px 20px',
                cursor: 'pointer',
                textAlign: 'center',
                display: 'block'
              }}
              className="flex w-full items-center justify-center shadow-sm hover:scale-[1.02] transition-transform duration-200"
            >
              {lang === 'es' ? 'Inscribir al Alumno' : 'Enroll Student'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
