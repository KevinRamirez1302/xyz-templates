import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Heart, Sun, Clock, Calendar, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'

export default function Home() {
  const valuesSummary = [
    {
      icon: <Leaf className="h-6 w-6 text-brand-600 dark:text-brand-400" />,
      title: 'Paz',
      description: 'Espacios de calma profunda.'
    },
    {
      icon: <Heart className="h-6 w-6 text-brand-600 dark:text-brand-400" />,
      title: 'Equilibrio',
      description: 'Alineación de mente y cuerpo.'
    },
    {
      icon: <Sun className="h-6 w-6 text-brand-600 dark:text-brand-400" />,
      title: 'Vitalidad',
      description: 'Energía renovadora diaria.'
    }
  ]

  const classesTeaser = [
    {
      title: 'Vinyasa Flow',
      level: 'Intermedio',
      duration: '60 min',
      description: 'Clases dinámicas sincronizadas con la respiración.'
    },
    {
      title: 'Hatha Restore',
      level: 'Principiante',
      duration: '75 min',
      description: 'Alineación precisa y relajación pausada.'
    },
    {
      title: 'Yin & Meditación',
      level: 'Todos',
      duration: '90 min',
      description: 'Posturas profundas pasivas para calmar la mente.'
    }
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero />

      {/* About Us Teaser Section */}
      <section className="py-20 bg-sand-100/30 dark:bg-zinc-900/30 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="text-left space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  Bienvenidos a Prana
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-sand-50 font-heading">
                  Tu refugio urbano de bienestar y meditación
                </h2>
                <div className="h-1 w-12 bg-terracotta-500 rounded-full"></div>
                <p className="text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                  Prana Studio es un espacio diseñado para ayudarte a desconectar de las prisas cotidianas y reconectar con lo esencial. Guiados por instructores certificados con años de trayectoria, combinamos tradición y modernidad en un ambiente de apoyo mutuo.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {valuesSummary.map((val, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="inline-block p-2 bg-brand-50 dark:bg-brand-950/20 text-brand-600 dark:text-brand-400 rounded-xl mb-1">
                        {val.icon}
                      </div>
                      <h4 className="text-xs font-bold text-zinc-900 dark:text-sand-100">{val.title}</h4>
                      <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-light">{val.description}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link
                    to="/nosotros"
                    className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full px-6 py-3 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Conoce nuestra historia</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Quick Stats Grid */}
            <Reveal direction="right" delay={150}>
              <div className="grid grid-cols-2 gap-6 bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-brand-100/10 dark:border-zinc-800/40 shadow-lg text-left">
                <div className="space-y-1">
                  <span className="text-4xl font-extrabold text-brand-500">10+</span>
                  <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Instructores</p>
                  <p className="text-[11px] text-zinc-400 font-light">Altamente cualificados.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-4xl font-extrabold text-brand-500">30+</span>
                  <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Clases semanales</p>
                  <p className="text-[11px] text-zinc-400 font-light">Mañana, tarde y sábados.</p>
                </div>
                <div className="space-y-1 border-t border-zinc-100 dark:border-zinc-800 pt-6">
                  <span className="text-4xl font-extrabold text-brand-500">1.2K+</span>
                  <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Alumnos</p>
                  <p className="text-[11px] text-zinc-400 font-light">Encuentran su calma aquí.</p>
                </div>
                <div className="space-y-1 border-t border-zinc-100 dark:border-zinc-800 pt-6">
                  <span className="text-4xl font-extrabold text-brand-500">5 Años</span>
                  <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Comunidad</p>
                  <p className="text-[11px] text-zinc-400 font-light">Creciendo juntos.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Classes Teaser Section */}
      <section className="py-20 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                Prácticas
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-sand-50 font-heading">
                Nuestras Disciplinas Estrella
              </h2>
              <div className="h-1 w-12 bg-terracotta-500 rounded-full mx-auto"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {classesTeaser.map((item, idx) => (
              <Reveal key={idx} delay={idx * 150} direction="up">
                <div className="bg-sand-50 dark:bg-zinc-900/40 p-6 rounded-2xl border border-brand-100/10 dark:border-zinc-800/40 shadow-sm text-left hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                        {item.level}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                        <Clock className="h-3 w-3" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-sand-50 mb-2 font-heading">{item.title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">{item.description}</p>
                  </div>
                  <div className="pt-4 border-t border-brand-100/10 mt-4 flex justify-end">
                    <Link to="/clases" className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 flex items-center gap-1 group">
                      <span>Ver detalles</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="pt-12 text-center">
            <Link
              to="/clases"
              className="inline-flex items-center justify-center border border-zinc-300 dark:border-zinc-700 hover:border-brand-500 text-zinc-700 dark:text-zinc-200 hover:text-brand-500 font-bold rounded-full px-8 py-3.5 transition-all"
            >
              Ver todos los estilos disponibles
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Schedule Quick Banner */}
      <section className="py-16 bg-brand-500 text-white transition-colors duration-300">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <Reveal direction="left" className="space-y-2">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider">
              <Calendar className="size-3" />
              <span>Horarios Flexibles</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">¿Quieres planificar tu semana?</h3>
            <p className="text-sm text-brand-50/90 font-light max-w-xl">
              Ofrecemos clases matutinas desde las 08:30 y sesiones nocturnas hasta las 21:30. Consulta los horarios de cada día y reserva con un solo clic.
            </p>
          </Reveal>
          <Reveal direction="right" delay={150} className="shrink-0">
            <Link
              to="/horarios"
              className="inline-flex items-center justify-center bg-white hover:bg-brand-50 text-brand-700 font-bold rounded-full px-8 py-4 shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              Ver Horario Completo
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Membership & Review Banner */}
      <section className="py-20 bg-sand-100/30 dark:bg-zinc-900/30 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Reviews */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  Opiniones
                </span>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-sand-50 font-heading">
                  Lo que dicen nuestros alumnos
                </h3>
                <div className="h-1 w-12 bg-terracotta-500 rounded-full"></div>
              </Reveal>
              <Reveal delay={150}>
                <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-brand-100/10 dark:border-zinc-800/30 shadow-sm relative italic">
                  <p className="text-sm text-zinc-650 dark:text-zinc-300 font-light leading-relaxed">
                    "Prana ha cambiado por completo mi relación con el estrés. Llevo 6 meses practicando aquí y la calidad de las clases, sumada a la calidez del espacio, es insuperable."
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-3">
                    <span className="text-xs font-bold text-zinc-800 dark:text-sand-100">Laura Ortiz</span>
                    <span className="text-[10px] font-semibold text-terracotta-500 uppercase">Bono Mensual</span>
                  </div>
                </div>
              </Reveal>
              <div className="pt-2">
                <Link to="/precios" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1.5 group">
                  <MessageCircle className="h-4 w-4" />
                  <span>Leer más testimonios y tarifas</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Pricing teaser */}
            <div className="lg:col-span-6 text-left">
              <Reveal delay={200}>
                <div className="bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-brand-500 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[300px]">
                  <span className="absolute top-4 right-4 bg-brand-500 text-white text-[9px] font-bold tracking-wider uppercase py-0.5 px-2 rounded-full">
                    Más Vendido
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Plan Recomendado</h4>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-sand-50 font-heading mt-1">Bono Mensual</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mt-2">Perfecto para mantener una constancia y progresar en tu práctica.</p>
                    
                    <div className="flex items-baseline gap-1 mt-6">
                      <span className="text-3xl font-extrabold text-brand-950 dark:text-sand-50">49€</span>
                      <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">/ al mes</span>
                    </div>

                    <ul className="space-y-2 mt-6 text-xs text-zinc-650 dark:text-zinc-300 font-light">
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-brand-500" />
                        <span>Hasta 8 clases al mes presenciales</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-brand-500" />
                        <span>Acceso a todos los estilos de yoga</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-8">
                    <Link
                      to="/precios"
                      className="block w-full py-3 px-4 rounded-xl text-xs font-bold text-center bg-brand-500 hover:bg-brand-600 text-white transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-brand-500"
                    >
                      Ver todos los planes
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Final Booking Call-out */}
      <section className="py-20 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100/60 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Tu primera sesión es gratuita</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-sand-50 font-heading">
                Comienza tu camino de calma interior hoy
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-xl mx-auto">
                No necesitas experiencia previa ni flexibilidad para empezar. Ven con ropa cómoda, nosotros te proporcionamos todo el material que necesitas.
              </p>
              <div className="pt-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-bold rounded-full px-8 py-4 shadow-lg hover:shadow-brand-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Reservar Clase de Prueba Gratis</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      
    </div>
  )
}
