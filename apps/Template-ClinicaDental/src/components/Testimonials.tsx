import { Star, MessageSquareQuote } from 'lucide-react'

interface Testimonial {
  name: string
  detail: string
  quote: string
  service: string
  avatar: string
  slug: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'María López',
    detail: 'Paciente desde 2019',
    quote:
      'Me pusieron implantes en dos piezas y la experiencia fue increíble. Sin dolor, muy profesionales y el resultado es totalmente natural. No podría estar más contenta.',
    service: 'Implantes',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&fit=crop',
    slug: 'maria-lopez',
  },
  {
    name: 'Juan Pérez',
    detail: 'Paciente desde 2021',
    quote:
      'Llevaba años aplazando ir al dentista por miedo. En DentalPro me hicieron sentir cómodo desde el primer momento. La ortodoncia invisible cambió mi sonrisa y mi confianza.',
    service: 'Ortodoncia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&fit=crop',
    slug: 'juan-perez',
  },
  {
    name: 'Elena Ruiz',
    detail: 'Paciente desde 2022',
    quote:
      'El blanqueamiento fue espectacular, 8 tonos en una sola sesión. El equipo explica cada paso con detalle y el resultado supera todas mis expectativas. ¡Recomendadísimo!',
    service: 'Blanqueamiento',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80&fit=crop',
    slug: 'elena-ruiz',
  },
]

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="testimonial-stars" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" className="star" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="testimonials-section"
      aria-label="Testimonios de nuestros pacientes"
    >
      <div className="container">
        <header className="section-header">
          <div
            className="section-badge"
            aria-hidden="true"
          >
            <MessageSquareQuote size={12} />
            Testimonios
          </div>
          <h2 className="section-title">
            Lo que dicen{' '}
            <span className="gradient-text">nuestros pacientes</span>
          </h2>
          <p className="section-desc">
            Más de 8.500 pacientes han confiado en nosotros. Estas son algunas
            de sus historias reales.
          </p>
        </header>

        <div className="testimonials-grid" role="list">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.slug}
              id={`testimonial-${t.slug}`}
              className="testimonial-card"
              role="listitem"
            >
              <StarRating />
              <blockquote className="testimonial-quote">
                {t.quote}
              </blockquote>
              <footer className="testimonial-author">
                <div className="testimonial-avatar">
                  <img
                    src={t.avatar}
                    alt={`Foto de ${t.name}`}
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-detail">{t.detail}</div>
                </div>
                <span className="testimonial-service" aria-label={`Servicio: ${t.service}`}>
                  {t.service}
                </span>
              </footer>
            </article>
          ))}
        </div>

        {/* Google rating strip */}
        <div
          style={{
            marginTop: '48px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
          aria-label="Valoración en Google"
        >
          <div style={{ display: 'flex', gap: '3px' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                fill="#fbbf24"
                stroke="none"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="google-rating-text">
            <strong>4.9 / 5</strong> · Basado en{' '}
            <strong>340+ reseñas</strong> en Google
          </span>
        </div>
      </div>
    </section>
  )
}
