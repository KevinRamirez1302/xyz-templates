import { Phone, CalendarDays, Star } from 'lucide-react'
import heroDental from '../assets/hero-dental.jpg'

const TRUST_AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
]

const STATS = [
  { num: '15', suffix: '+', label: 'Años de experiencia' },
  { num: '8.500', suffix: '+', label: 'Pacientes atendidos' },
  { num: '98', suffix: '%', label: 'Satisfacción garantizada' },
  { num: '20', suffix: '+', label: 'Especialistas' },
]

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="hero" aria-label="Bienvenidos a DentalPro Clínica">
      {/* Background */}
      <div className="hero-bg" role="presentation" aria-hidden="true" />
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      {/* Main Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-inner">
            {/* Text Column */}
            <div className="hero-text">
              <div className="hero-badge" aria-label="Clínica de confianza">
                <span className="hero-badge-dot" aria-hidden="true" />
                Clínica Certificada · Madrid
              </div>

              <h1 className="hero-title">
                Tu Sonrisa Perfecta
                <span className="hero-title-accent">Empieza Aquí</span>
              </h1>

              <p className="hero-subtitle">
                Más de 15 años transformando sonrisas con tecnología de vanguardia
                y un equipo de especialistas comprometidos con tu bienestar.
                Primera consulta gratuita.
              </p>

              <div className="hero-actions">
                <button
                  id="hero-cta-primary"
                  className="btn btn-primary btn-lg"
                  onClick={() => scrollTo('#contacto')}
                  aria-label="Pedir cita gratuita"
                >
                  <CalendarDays size={18} aria-hidden="true" />
                  Pedir Cita Gratis
                </button>
                <button
                  id="hero-cta-secondary"
                  className="btn btn-outline btn-lg"
                  onClick={() => scrollTo('#servicios')}
                  aria-label="Ver nuestros servicios"
                >
                  Ver Servicios
                </button>
              </div>

              {/* Social Proof */}
              <div className="hero-trust">
                <div className="hero-trust-avatars" aria-hidden="true">
                  {TRUST_AVATARS.map((src, i) => (
                    <div key={i} className="hero-trust-avatar">
                      <img src={src} alt="" width={38} height={38} />
                    </div>
                  ))}
                </div>
                <div className="hero-trust-text">
                  <strong>+8.500 pacientes felices</strong>
                  <span>
                    <Star
                      size={12}
                      fill="currentColor"
                      style={{ color: '#fbbf24', display: 'inline', verticalAlign: 'middle', marginRight: 3 }}
                      aria-hidden="true"
                    />
                    4.9 / 5 valoración media
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-image-card">
                <img
                  src={heroDental}
                  alt="Dentista profesional en consulta"
                  width={420}
                  height={560}
                />
                <div className="hero-image-overlay" />
              </div>

              {/* Floating Card 1 */}
              <div className="hero-float-card hero-float-1">
                <div className="hero-float-label">Próxima cita</div>
                <div className="hero-float-value">Hoy, 16:30</div>
                <div className="hero-float-sub">Dr. Carlos Martínez</div>
                <div className="hero-float-pill">
                  <span>✓</span> Confirmada
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="hero-float-card hero-float-2">
                <div className="hero-float-label">Satisfacción</div>
                <div className="hero-float-value">98%</div>
                <div className="hero-float-sub">Pacientes satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="hero-stats-bar" aria-label="Estadísticas de la clínica">
        <div className="container">
          <div className="hero-stats-grid">
            {STATS.map((stat, i) => (
              <div key={i} className="hero-stat">
                <div className="hero-stat-num">
                  {stat.num}<span>{stat.suffix}</span>
                </div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency contact strip */}
      <div className="hero-emergency-strip">
        <a
          href="tel:+34912345678"
          className="hero-emergency-link"
          aria-label="Llamar para urgencias dentales"
        >
          <Phone size={13} aria-hidden="true" />
          Urgencias 24h: <strong className="hero-emergency-phone">+34 91 234 56 78</strong>
        </a>
      </div>
    </section>
  )
}
