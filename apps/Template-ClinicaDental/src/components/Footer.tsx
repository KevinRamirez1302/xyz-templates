import { Phone, Mail, MapPin, Globe, AtSign, Video, MessageCircle } from 'lucide-react'

const NAV_SERVICES = [
  'Implantes Dentales',
  'Ortodoncia',
  'Blanqueamiento',
  'Estética & Carillas',
  'Endodoncia',
  'Revisión & Limpieza',
]

const NAV_CLINIC = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Nuestro Equipo', href: '#equipo' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

const SOCIAL = [
  { icon: <Globe size={16} />, label: 'Facebook', href: '#' },
  { icon: <AtSign size={16} />, label: 'Instagram', href: '#' },
  { icon: <Video size={16} />, label: 'YouTube', href: '#' },
  { icon: <MessageCircle size={16} />, label: 'Twitter / X', href: '#' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" aria-label="Pie de página DentalPro Clínica">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo" aria-label="DentalPro Clínica">
              <div className="footer-logo-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2c-2.8 0-5 2.2-5 5 0 1.8.5 3.5 1.3 5l1.7 4c.4 1 1.4 1.7 2.4 1.7h.6c1 0 2-.7 2.4-1.7l1.7-4C17.5 10.5 17 8.8 17 7c0-2.8-2.2-5-5-5z" />
                </svg>
              </div>
              <span className="footer-logo-text">
                Dental<span>Pro</span>
              </span>
            </div>
            <p className="footer-desc">
              Clínica dental de excelencia en Madrid. Transformamos sonrisas
              desde 2010 con tecnología de última generación y un equipo de
              especialistas comprometidos con tu bienestar.
            </p>

            <nav className="footer-social" aria-label="Redes sociales">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-social-link"
                  aria-label={s.label}
                  onClick={(e) => e.preventDefault()}
                >
                  {s.icon}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-col-title">Servicios</h3>
            <ul className="footer-links" aria-label="Servicios de la clínica">
              {NAV_SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="footer-link"
                    onClick={(e) => { e.preventDefault(); scrollTo('#servicios') }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="footer-col-title">Clínica</h3>
            <ul className="footer-links" aria-label="Páginas de la clínica">
              {NAV_CLINIC.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-col-title">Contacto</h3>
            <ul className="footer-links" aria-label="Información de contacto">
              <li>
                <a
                  href="https://maps.google.com"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver dirección en Google Maps"
                >
                  <MapPin size={14} aria-hidden="true" />
                  Gran Vía 45, Madrid
                </a>
              </li>
              <li>
                <a
                  href="tel:+34912345678"
                  className="footer-link"
                  aria-label="Llamar al +34 91 234 56 78"
                >
                  <Phone size={14} aria-hidden="true" />
                  +34 91 234 56 78
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dentalpro.es"
                  className="footer-link"
                  aria-label="Enviar email a info@dentalpro.es"
                >
                  <Mail size={14} aria-hidden="true" />
                  info@dentalpro.es
                </a>
              </li>
            </ul>

            {/* Emergency badge */}
            <div
              className="footer-emergency-badge"
              aria-label="Urgencias 24 horas disponibles"
            >
              <div className="footer-emergency-title">
                Urgencias 24h
              </div>
              <a
                href="tel:+34912345678"
                className="footer-emergency-phone"
                aria-label="Línea de urgencias"
              >
                +34 91 234 56 78
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} DentalPro Clínica. Todos los derechos reservados.
          </p>
          <nav className="footer-legal" aria-label="Páginas legales">
            <a href="#" onClick={(e) => e.preventDefault()}>Política de Privacidad</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Cookies</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Aviso Legal</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
