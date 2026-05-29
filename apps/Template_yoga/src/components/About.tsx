import { Leaf, Heart, Sun, Award, Users, Calendar, Smile } from 'lucide-react'
import Reveal from './Reveal'

export default function About() {
  const values = [
    {
      icon: <Leaf className="h-6 w-6 text-brand-600 dark:text-brand-400" />,
      title: 'Paz Interior',
      description: 'Fomentamos un entorno de silencio mental y relajación para contrarrestar el estrés de la vida diaria.',
    },
    {
      icon: <Heart className="h-6 w-6 text-brand-600 dark:text-brand-400" />,
      title: 'Conexión Consciente',
      description: 'Alineamos cuerpo, respiración y mente para ayudarte a habitar plenamente el momento presente.',
    },
    {
      icon: <Sun className="h-6 w-6 text-brand-600 dark:text-brand-400" />,
      title: 'Energía Vital',
      description: 'Potenciamos tu vitalidad física y mental a través de secuencias de asanas fluidas y dinámicas.',
    },
  ]

  const stats = [
    { icon: <Award className="h-8 w-8 text-terracotta-500" />, value: '10+', label: 'Instructores Certificados' },
    { icon: <Users className="h-8 w-8 text-terracotta-500" />, value: '1,200+', label: 'Alumnos Felices' },
    { icon: <Calendar className="h-8 w-8 text-terracotta-500" />, value: '30+', label: 'Clases Semanales' },
    { icon: <Smile className="h-8 w-8 text-terracotta-500" />, value: '5 Años', label: 'Creando Comunidad' },
  ]

  const team = [
    {
      name: 'Sofía Méndez',
      role: 'Fundadora y Profesora de Vinyasa Flow',
      bio: 'Con más de 8 años de experiencia en India y España, Sofía fundó Prana Studio para crear un refugio urbano de bienestar y espiritualidad práctica.',
      avatar: '/avatar_sofia.png',
    },
    {
      name: 'Carlos Vega',
      role: 'Instructor de Hatha Restore & Meditación',
      bio: 'Especializado en técnicas de respiración (Pranayama) y meditación Zen, Carlos guía prácticas restaurativas diseñadas para liberar tensiones profundas.',
      avatar: '/avatar_carlos.png',
    },
  ]

  return (
    <section 
      id="nosotros" 
      className="py-20 lg:py-24 bg-sand-100/50 dark:bg-zinc-900/40 border-t border-brand-100/10 dark:border-zinc-800/40 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-base font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
              Nuestra Filosofía
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-sand-50 font-heading">
              El camino hacia tu bienestar integral
            </p>
            <div className="h-1 w-12 bg-terracotta-500 rounded-full mx-auto my-2"></div>
            <p className="text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
              Prana nació de la visión de crear un espacio donde la tradición del yoga se une con un enfoque contemporáneo, accesible y libre de juicios. No importa si es tu primer día o llevas años practicando, aquí hay un lugar para ti.
            </p>
          </div>
        </Reveal>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {values.map((val, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up">
              <div 
                className="bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-brand-100/20 dark:border-zinc-800/40 shadow-sm hover:shadow-md transition-shadow duration-300 text-left h-full"
              >
                <div className="inline-flex items-center justify-center p-3 bg-brand-50 dark:bg-brand-950/30 rounded-xl mb-5">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-sand-50 mb-3">{val.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">{val.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats Section */}
        <Reveal delay={200}>
          <div className="bg-white dark:bg-zinc-950/80 border border-brand-100/10 dark:border-zinc-800/30 rounded-3xl p-8 md:p-12 mt-20 shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-2">
                  <div className="p-2 bg-terracotta-50 dark:bg-terracotta-950/20 rounded-full mb-1">
                    {stat.icon}
                  </div>
                  <span className="text-3xl md:text-4xl font-extrabold text-brand-950 dark:text-sand-50">{stat.value}</span>
                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Instructors Team */}
        <div className="mt-24">
          <Reveal>
            <div className="text-center mb-16 space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-sand-50 font-heading">
                Tus Guías en el Camino
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
                Profesores titulados y con amplia experiencia dedicados a acompañarte de forma segura.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <Reveal key={idx} delay={idx * 200} direction={idx === 0 ? 'left' : 'right'}>
                <div 
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-brand-100/10 dark:border-zinc-800/30 shadow-sm h-full"
                >
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-brand-300 to-terracotta-200 rounded-full blur opacity-30"></div>
                    <img 
                      src={member.avatar} 
                      alt={`Retrato de ${member.name}, profesora de yoga`}
                      className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-white dark:border-zinc-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-sand-100">{member.name}</h4>
                    <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">{member.role}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
