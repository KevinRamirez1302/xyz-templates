import { useEffect, useRef } from 'react'
import {
  Smile,
  Zap,
  Sparkles,
  Shield,
  Activity,
  Stethoscope,
  ArrowRight,
} from 'lucide-react'

interface Service {
  icon: React.ReactNode
  title: string
  desc: string
  tag: string
}

const SERVICES: Service[] = [
  {
    icon: <Zap size={26} />,
    title: 'Implantes Dentales',
    desc: 'Restauración permanente y natural de dientes perdidos con titanio de máxima calidad. Garantía de por vida.',
    tag: 'implantes',
  },
  {
    icon: <Smile size={26} />,
    title: 'Ortodoncia',
    desc: 'Brackets tradicionales y alineadores invisibles Invisalign para una sonrisa perfecta a cualquier edad.',
    tag: 'ortodoncia',
  },
  {
    icon: <Sparkles size={26} />,
    title: 'Blanqueamiento',
    desc: 'Blanqueamiento profesional en consulta o domicilio. Hasta 8 tonos más blanco en una sola sesión.',
    tag: 'blanqueamiento',
  },
  {
    icon: <Shield size={26} />,
    title: 'Estética Dental',
    desc: 'Carillas de porcelana y composite, diseño de sonrisa Hollywood y microabrasión para resultados espectaculares.',
    tag: 'estetica',
  },
  {
    icon: <Activity size={26} />,
    title: 'Endodoncia',
    desc: 'Tratamiento de conductos sin dolor con técnica rotacional y microscopio. Salva tus dientes naturales.',
    tag: 'endodoncia',
  },
  {
    icon: <Stethoscope size={26} />,
    title: 'Revisión & Limpieza',
    desc: 'Higiene dental profesional, revisión completa y diagnóstico con ortopantomografía digital de última generación.',
    tag: 'revision',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" className="section section-alt" ref={sectionRef} aria-label="Nuestros servicios dentales">
      <div className="container">
        <header className="section-header reveal">
          <div className="section-badge" aria-hidden="true">
            <Sparkles size={12} />
            Nuestros Servicios
          </div>
          <h2 className="section-title">
            Todo lo que tu sonrisa{' '}
            <span className="gradient-text">necesita</span>
          </h2>
          <p className="section-desc">
            Ofrecemos una gama completa de tratamientos dentales con las técnicas
            más avanzadas y los mejores materiales para garantizar tu salud bucal.
          </p>
        </header>

        <div className="services-grid" role="list">
          {SERVICES.map((service, i) => (
            <article
              key={service.tag}
              id={`service-${service.tag}`}
              className={`service-card reveal reveal-delay-${(i % 3) + 1}`}
              role="listitem"
            >
              <div className="service-icon-wrap" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <a
                href="#contacto"
                className="service-link"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
                }}
                aria-label={`Solicitar información sobre ${service.title}`}
              >
                Solicitar información
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
