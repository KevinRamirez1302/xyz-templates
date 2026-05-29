import { useEffect, useRef } from 'react'
import { CheckCircle2, Award, Clock, Heart, Users } from 'lucide-react'

const FEATURES = [
  {
    icon: <Award size={18} />,
    title: 'Tecnología de última generación',
    desc: 'Escáner 3D, microscopios dentales y radiografía digital para diagnósticos precisos.',
  },
  {
    icon: <Heart size={18} />,
    title: 'Atención personalizada y sin dolor',
    desc: 'Protocolos de sedación consciente para tratamientos completamente cómodos.',
  },
  {
    icon: <Users size={18} />,
    title: 'Equipo multidisciplinar',
    desc: 'Más de 20 especialistas certificados por las principales universidades europeas.',
  },
  {
    icon: <Clock size={18} />,
    title: 'Horario amplio y urgencias 24h',
    desc: 'Atendemos de lunes a sábado y ofrecemos servicio de urgencias durante todo el año.',
  },
  {
    icon: <CheckCircle2 size={18} />,
    title: 'Financiación sin intereses',
    desc: 'Fracciona tu tratamiento en cómodas cuotas mensuales sin coste adicional.',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="section" ref={sectionRef} aria-label="Sobre DentalPro Clínica">
      <div className="container">
        <div className="about-inner">
          {/* Image Column */}
          <div className="about-image-wrap reveal">
            <div className="about-image-main">
              <img
                src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=800&q=80"
                alt="Interior moderno de DentalPro clínica dental"
                width={480}
                height={600}
                loading="lazy"
              />
            </div>

            {/* Accent small image */}
            <div className="about-accent-img" aria-hidden="true">
              <img
                src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=220&q=80"
                alt=""
                width={110}
                height={110}
                loading="lazy"
              />
            </div>

            {/* Years badge */}
            <div className="about-years-badge" aria-label="15 años de experiencia">
              <span className="about-years-num">15</span>
              <span className="about-years-text">Años de<br />experiencia</span>
            </div>
          </div>

          {/* Text Column */}
          <div className="about-text reveal reveal-delay-2">
            <div className="section-badge" aria-hidden="true">
              <Award size={12} />
              ¿Por qué elegirnos?
            </div>
            <h2 className="section-title">
              Más de una década cuidando{' '}
              <span className="gradient-text">tu salud bucal</span>
            </h2>
            <p className="section-desc">
              En DentalPro combinamos la calidez humana con la innovación tecnológica
              para ofrecerte los mejores resultados. Nuestro compromiso es tu sonrisa
              y tu bienestar a largo plazo.
            </p>

            <ul className="about-features" aria-label="Ventajas de DentalPro">
              {FEATURES.map((feature, i) => (
                <li key={i} className="about-feature">
                  <div className="about-feature-icon" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="about-feature-title">{feature.title}</div>
                    <div className="about-feature-desc">{feature.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              id="about-cta"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
              }}
              aria-label="Pedir primera consulta gratuita"
            >
              Primera consulta gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
