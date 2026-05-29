import { useState, useEffect } from 'react'
import { Menu, X, Phone, Sun, Moon } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return prefersDark ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const body = document.body
    if (theme === 'dark') {
      body.classList.remove('light-theme')
      body.classList.add('dark-theme')
    } else {
      body.classList.remove('dark-theme')
      body.classList.add('light-theme')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Navegación principal">
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <a
            href="#inicio"
            className="navbar-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio') }}
            aria-label="DentalPro Clínica — Inicio"
          >
            <div className="navbar-logo-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2c-2.8 0-5 2.2-5 5 0 1.8.5 3.5 1.3 5l1.7 4c.4 1 1.4 1.7 2.4 1.7h.6c1 0 2-.7 2.4-1.7l1.7-4C17.5 10.5 17 8.8 17 7c0-2.8-2.2-5-5-5z" />
              </svg>
            </div>
            <span className="navbar-logo-name">
              Dental<span>Pro</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="navbar-nav" role="list">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar-link"
                role="listitem"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+34912345678"
              className="btn btn-primary navbar-cta"
              aria-label="Llamar para pedir cita"
            >
              <Phone size={15} aria-hidden="true" />
              Pedir Cita
            </a>
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="navbar-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          id="mobile-menu"
          className={`navbar-mobile${menuOpen ? ' open' : ''}`}
          role="list"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              role="listitem"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar-mobile-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px' }}>
            <a href="tel:+34912345678" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              <Phone size={15} aria-hidden="true" />
              Pedir Cita
            </a>
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              style={{ margin: 0 }}
              aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
