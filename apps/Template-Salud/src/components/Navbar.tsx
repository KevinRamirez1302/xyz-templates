import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HeartPulse, Menu, X, Sun, Moon, Globe } from 'lucide-react'

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
    { name: lang === 'es' ? 'Especialidades' : 'Specialties', path: '/services' },
    { name: lang === 'es' ? 'Contacto' : 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header 
      className="sticky top-0 z-50 w-full bg-white/90 dark:bg-stone-950/90 backdrop-blur-md transition-colors duration-300 fine-border-b px-6 sm:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between h-20">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg p-1"
          aria-label="Vitalis - Home"
        >
          <div 
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/40 text-[#0F766E] dark:text-teal-400 border border-teal-100 dark:border-teal-900/50 transition-transform duration-300 group-hover:scale-105"
          >
            <HeartPulse className="h-5.5 w-5.5" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white font-outfit">
            Vitalis<span className="text-[#0F766E] font-medium">Salud</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-semibold transition-all duration-200 py-1.5 focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-md px-2 ${
                    isActive(link.path)
                      ? 'text-[#0F766E] dark:text-teal-400'
                      : 'text-slate-650 hover:text-[#0F766E] dark:text-stone-300 dark:hover:text-teal-400'
                  }`}
                >
                  {link.name}
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
            className="flex items-center gap-1.5 rounded-lg p-2 text-slate-600 dark:text-stone-300 hover:bg-slate-100 dark:hover:bg-stone-900 hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB]"
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
            className="rounded-lg p-2 text-slate-600 dark:text-stone-300 hover:bg-slate-100 dark:hover:bg-stone-900 hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {isDark ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Desktop Appointment CTA */}
          <Link
            to="#pedir-cita"
            className="hidden lg:inline-flex shadow-sm hover:scale-[1.02] transition-transform duration-200 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-sm rounded-lg px-5 py-2.5"
            style={{ textDecoration: 'none' }}
          >
            {lang === 'es' ? 'Pedir Cita' : 'Book Appointment'}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex md:hidden rounded-lg p-2 text-slate-600 dark:text-stone-300 hover:bg-slate-100 dark:hover:bg-stone-900 transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB]"
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
        className={`md:hidden fixed inset-x-0 top-20 bg-white dark:bg-stone-950 border-b border-slate-200 dark:border-stone-850 shadow-xl transition-all duration-300 ease-in-out origin-top ${
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
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                      isActive(link.path)
                        ? 'bg-teal-50/50 text-[#0F766E] dark:bg-teal-950/20 dark:text-teal-400'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-stone-300 dark:hover:bg-stone-900/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="border-t border-slate-100 dark:border-stone-850 pt-4 px-4">
            <Link
              to="#pedir-cita"
              onClick={closeMenu}
              className="flex w-full items-center justify-center shadow-sm hover:scale-[1.02] transition-transform duration-200 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg py-3 text-center"
              style={{ textDecoration: 'none' }}
            >
              {lang === 'es' ? 'Pedir Cita Online' : 'Book Appointment Online'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
