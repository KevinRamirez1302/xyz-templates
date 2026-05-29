import { Users, Smile, Star, Award } from 'lucide-react'

const STATS = [
  {
    icon: <Award size={22} />,
    number: '15',
    suffix: '+',
    label: 'Años de experiencia',
  },
  {
    icon: <Users size={22} />,
    number: '8.500',
    suffix: '+',
    label: 'Pacientes atendidos',
  },
  {
    icon: <Star size={22} />,
    number: '98',
    suffix: '%',
    label: 'Pacientes satisfechos',
  },
  {
    icon: <Smile size={22} />,
    number: '20',
    suffix: '+',
    label: 'Especialistas certificados',
  },
]

export default function Stats() {
  return (
    <section
      className="stats-section"
      aria-label="Estadísticas de DentalPro Clínica"
    >
      <div className="container">
        <div className="stats-grid" role="list">
          {STATS.map((stat, i) => (
            <div
              key={i}
              id={`stat-${i + 1}`}
              className="stat-item"
              role="listitem"
            >
              <div className="stat-icon" aria-hidden="true">
                {stat.icon}
              </div>
              <div className="stat-number" aria-label={`${stat.number}${stat.suffix} ${stat.label}`}>
                {stat.number}
                <span className="stat-number-accent">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
