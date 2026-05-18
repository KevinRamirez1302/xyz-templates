import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
  { to: '/',          label: 'Inicio' },
  { to: '/nosotras',  label: 'Nosotras' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/contacto',  label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location              = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, box-shadow 0.4s ease',
        background: scrolled
          ? 'rgba(250,247,244,0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(44,36,32,0.08)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" aria-label="Lumière Beauty Studio — Ir a inicio" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={20} style={{ color: 'var(--color-gold)' }} aria-hidden="true" />
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.4rem',
            fontWeight: 400,
            color: 'var(--color-charcoal)',
            letterSpacing: '0.04em',
          }}>
            Lumière
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" style={{ display: 'flex', gap: '36px' }} className="desktop-nav">
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                aria-current={active ? 'page' : undefined}
                style={{
                  textDecoration: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: active ? 'var(--color-rose-dark)' : 'var(--color-charcoal)',
                  borderBottom: active ? '1px solid var(--color-rose-dark)' : '1px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.25s, border-color 0.25s',
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-rose-dark)' }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-charcoal)' }}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* CTA button */}
        <Link
          to="/contacto"
          id="nav-cta-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'var(--color-charcoal)',
            color: '#fff',
            padding: '10px 22px',
            borderRadius: '50px',
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'background 0.3s',
          }}
          className="desktop-nav"
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-rose-dark)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-charcoal)' }}
          aria-label="Reservar cita ahora"
        >
          Reservar cita
        </Link>

        {/* Hamburger */}
        <button
          id="mobile-menu-btn"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(v => !v)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-charcoal)',
            padding: '4px',
          }}
          className="mobile-menu-btn"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Menú móvil"
        style={{
          display: open ? 'flex' : 'none',
          flexDirection: 'column',
          background: 'rgba(250,247,244,0.98)',
          padding: '24px',
          gap: '20px',
          borderTop: '1px solid var(--color-blush)',
        }}
      >
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            aria-current={location.pathname === to ? 'page' : undefined}
            style={{
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: location.pathname === to ? 'var(--color-rose-dark)' : 'var(--color-charcoal)',
            }}
          >
            {label}
          </Link>
        ))}
        <Link
          to="/contacto"
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            background: 'var(--color-charcoal)',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            marginTop: '8px',
          }}
        >
          Reservar cita
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
