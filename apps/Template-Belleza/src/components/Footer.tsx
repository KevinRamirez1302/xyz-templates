import { Link } from 'react-router-dom'
import { Sparkles, Camera, Share2, Phone, MapPin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" style={{ background: 'var(--color-charcoal)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-sans)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '72px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px', marginBottom: '56px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Sparkles size={18} style={{ color: 'var(--color-gold)' }} aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fff', letterSpacing: '0.04em' }}>Lumière</span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '240px' }}>
              Tu espacio de belleza y bienestar. Realzamos tu mejor versión con técnicas exclusivas y productos premium.
            </p>
            <div style={{ display: 'flex', gap: '14px', marginTop: '24px' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Lumière" style={{ color: 'var(--color-gold)', transition: 'opacity 0.2s' }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}>
                <Camera size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Lumière" style={{ color: 'var(--color-gold)', transition: 'opacity 0.2s' }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}>
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Navegación del pie de página">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 400 }}>Navegación</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { to: '/', label: 'Inicio' },
                { to: '/nosotras', label: 'Nosotras' },
                { to: '/servicios', label: 'Servicios' },
                { to: '/contacto', label: 'Contacto' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 400 }}>Servicios</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Corte & Peinado', 'Coloración', 'Tratamientos Capilares', 'Manicura & Pedicura', 'Facial & Estética', 'Spa & Masajes'].map(s => (
                <li key={s} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address style={{ fontStyle: 'normal' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#fff', marginBottom: '20px', fontWeight: 400 }}>Contacto</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href="tel:+34912345678" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-gold)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'}
              >
                <Phone size={15} aria-hidden="true" /> +34 912 345 678
              </a>
              <a href="mailto:hola@lumiere-beauty.es" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-gold)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'}
              >
                <Mail size={15} aria-hidden="true" /> hola@lumiere-beauty.es
              </a>
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem' }}>
                <MapPin size={15} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                Calle Serrano 42, 28001 Madrid
              </p>
            </div>
          </address>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
          <p>© {year} Lumière Beauty Studio. Todos los derechos reservados.</p>
          <p>Plantilla creada por <span style={{ color: 'var(--color-gold)' }}>XYZ Digital</span></p>
        </div>
      </div>
    </footer>
  )
}
