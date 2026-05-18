import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain, Menu, X, ExternalLink } from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Senderos', href: '#senderos' },
  { label: 'Alojamiento', href: '#alojamiento' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Mapa', href: '#mapa' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`navbar-glass ${scrolled ? 'navbar-glass--scrolled' : ''}`}
      style={{
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled
          ? 'rgba(13, 27, 42, 0.92)'
          : 'linear-gradient(to bottom, rgba(13,27,42,0.7), transparent)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
        >
          <div style={{
            width: 40, height: 40,
            background: 'linear-gradient(135deg, var(--green-700), var(--blue-700))',
            borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(64,145,108,0.4)',
          }}>
            <Mountain size={20} color="white" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--white)', lineHeight: 1.2 }}>
              Visit <span style={{ color: 'var(--green-500)' }}>La Palma</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Isla Bonita · Canarias
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        {!isDashboard && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--gray-400)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'var(--transition)',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {isDashboard && (
            <Link to="/" className="btn btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <ExternalLink size={15} /> Ver Portal
            </Link>
          )}

          {/* Hamburger */}
          {!isDashboard && (
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              style={{
                display: 'none', alignItems: 'center', justifyContent: 'center',
                width: 40, height: 40, borderRadius: 'var(--radius-sm)',
                background: 'rgba(255,255,255,0.08)', color: 'var(--white)',
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && !isDashboard && (
        <div 
          className="mobile-menu"
          style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(13,27,42,0.98)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border)',
            padding: '16px 24px 24px',
            animation: 'fadeIn 0.2s ease',
          }}>
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                color: 'var(--gray-400)',
                fontSize: '1rem',
                fontWeight: 500,
                borderBottom: '1px solid var(--border)',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        .nav-link:hover {
          color: var(--white) !important;
          background: rgba(255,255,255,0.06);
        }
      `}</style>
    </header>
  );
};

export default Navbar;
