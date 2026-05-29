import { useEffect, useRef } from 'react'
import { Link2, AtSign, Mail, Users } from 'lucide-react'

interface TeamMember {
  name: string
  specialty: string
  bio: string
  img: string
  slug: string
}

const TEAM: TeamMember[] = [
  {
    name: 'Dr. Carlos Martínez',
    specialty: 'Director & Implantología',
    bio: 'Más de 20 años colocando implantes. Máster por la Universidad Complutense de Madrid.',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=533&q=80&fit=crop',
    slug: 'carlos-martinez',
  },
  {
    name: 'Dra. Ana García',
    specialty: 'Ortodoncia & Invisalign',
    bio: 'Especialista certificada en ortodoncia invisible. Más de 1.200 casos tratados con éxito.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=533&q=80&fit=crop',
    slug: 'ana-garcia',
  },
  {
    name: 'Dr. Pedro Sánchez',
    specialty: 'Estética & Carillas',
    bio: 'Experto en diseño de sonrisa y estética dental. Formado en la Universidad de Nueva York.',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=533&q=80&fit=crop',
    slug: 'pedro-sanchez',
  },
  {
    name: 'Dra. Laura Jiménez',
    specialty: 'Endodoncia & Periodoncia',
    bio: 'Especialista en tratamientos de conductos y enfermedades periodontales con microscopio.',
    img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=533&q=80&fit=crop',
    slug: 'laura-jimenez',
  },
]

export default function Team() {
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
    <section
      id="equipo"
      className="section section-alt"
      ref={sectionRef}
      aria-label="Nuestro equipo de especialistas"
    >
      <div className="container">
        <header className="section-header reveal">
          <div className="section-badge" aria-hidden="true">
            <Users size={12} />
            Nuestro Equipo
          </div>
          <h2 className="section-title">
            Especialistas que cuidan{' '}
            <span className="gradient-text">de tu sonrisa</span>
          </h2>
          <p className="section-desc">
            Nuestro equipo está formado por los mejores profesionales, con
            formación continua en las técnicas más avanzadas de odontología.
          </p>
        </header>

        <div className="team-grid" role="list">
          {TEAM.map((member, i) => (
            <article
              key={member.slug}
              id={`team-${member.slug}`}
              className={`team-card reveal reveal-delay-${(i % 4) + 1}`}
              role="listitem"
            >
              <div className="team-card-img">
                <img
                  src={member.img}
                  alt={`Foto de ${member.name}, ${member.specialty}`}
                  width={300}
                  height={400}
                  loading="lazy"
                />
                <div className="team-card-overlay" aria-hidden="true">
                  <nav className="team-social" aria-label={`Redes sociales de ${member.name}`}>
                    <a
                      href="#"
                      aria-label={`LinkedIn de ${member.name}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Link2 size={15} />
                    </a>
                    <a
                      href="#"
                      aria-label={`Instagram de ${member.name}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      <AtSign size={15} />
                    </a>
                    <a
                      href="#"
                      aria-label={`Email de ${member.name}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Mail size={15} />
                    </a>
                  </nav>
                </div>
              </div>
              <div className="team-card-body">
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-specialty">{member.specialty}</p>
                <p className="team-card-bio">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
