import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, SlidersHorizontal, Eye, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

interface YogaClass {
  title: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado' | 'Todos';
  duration: string;
  description: string;
  benefits: string[];
}

export default function Classes() {
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Principiante' | 'Intermedio' | 'Avanzado'>('Todos')

  const classesData: YogaClass[] = [
    {
      title: 'Vinyasa Flow',
      level: 'Intermedio',
      duration: '60 min',
      description: 'Una práctica dinámica y fluida donde el movimiento se sincroniza rigurosamente con la respiración.',
      benefits: ['Fuerza muscular', 'Capacidad cardiovascular', 'Liberación mental'],
    },
    {
      title: 'Hatha Restore',
      level: 'Principiante',
      duration: '75 min',
      description: 'Yoga tradicional a ritmo pausado. Se enfoca en posturas mantenidas y alineación anatómica.',
      benefits: ['Flexibilidad general', 'Reducción del estrés', 'Higiene postural'],
    },
    {
      title: 'Yin Yoga & Meditación',
      level: 'Todos',
      duration: '90 min',
      description: 'Práctica pasiva con posturas que se sostienen de 3 a 5 minutos para estimular el tejido conectivo profundo.',
      benefits: ['Apertura articular', 'Calma mental profunda', 'Equilibrio del sistema nervioso'],
    },
    {
      title: 'Ashtanga Yoga',
      level: 'Avanzado',
      duration: '90 min',
      description: 'Una secuencia fija de posturas dinámicas y exigentes. Requiere esfuerzo físico, disciplina y concentración.',
      benefits: ['Fuerza física intensa', 'Desintoxicación corporal', 'Foco mental agudo'],
    },
    {
      title: 'Yoga Prenatal',
      level: 'Principiante',
      duration: '60 min',
      description: 'Movimientos seguros y técnicas de respiración adaptadas para cuidar tu bienestar y conectar con tu bebé.',
      benefits: ['Alivio de dolores de espalda', 'Preparación al parto', 'Comunidad de madres'],
    },
    {
      title: 'Mindfulness & Zen',
      level: 'Todos',
      duration: '45 min',
      description: 'Técnicas de atención plena y meditación sentada enfocadas en aquietar el parloteo mental constante.',
      benefits: ['Regulación emocional', 'Foco cognitivo', 'Reducción de ansiedad'],
    },
  ]

  const filters: ('Todos' | 'Principiante' | 'Intermedio' | 'Avanzado')[] = ['Todos', 'Principiante', 'Intermedio', 'Avanzado']

  const filteredClasses = classesData.filter((c) => {
    if (activeFilter === 'Todos') return true
    return c.level === activeFilter || c.level === 'Todos'
  })

  return (
    <div className="space-y-0">
      
      {/* Cinematic Video Hero Header */}
      <section className="relative z-10 h-[calc(100vh-5rem)] w-full overflow-hidden flex items-center justify-center">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/fondo_clases.mp4" type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
        
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-zinc-950/40 dark:bg-zinc-950/60 z-10 animate-fade-in"></div>

        {/* Bottom smooth fade-out gradient to match page body color */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-sand-50 to-transparent dark:from-zinc-950 to-transparent z-15"></div>

        {/* Floating Glassmorphism Text Card */}
        <div className="relative z-20 text-center max-w-3xl mx-6 p-8 sm:p-12 bg-white/10 dark:bg-zinc-900/10 backdrop-blur-md rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl space-y-4 text-white animate-fade-in">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-500/20 border border-brand-300/30 text-xs font-bold uppercase tracking-wider text-brand-200">
            <Sparkles className="size-3.5 animate-pulse" />
            <span>Nuestros Estilos</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading leading-tight tracking-tight text-sand-50 drop-shadow-sm">
            Prácticas adaptadas a tu nivel y ritmo
          </h1>
          <p className="text-sm sm:text-base text-zinc-200 font-light max-w-xl mx-auto leading-relaxed drop-shadow-sm">
            Encuentra el equilibrio: desde flujos dinámicos vigorosos hasta técnicas de atención plena y relajación muscular profunda.
          </p>
        </div>

        {/* Floating scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float text-white/80 hover:text-white transition-colors duration-200">
          <a href="#clases" aria-label="Desplazarse hacia abajo a las clases" className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Explorar</span>
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section 
        id="clases" 
        className="py-16 lg:py-20 bg-sand-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Filter Controls */}
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mr-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filtrar nivel:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-brand-100/30 dark:bg-zinc-900/60 rounded-2xl w-full sm:w-auto">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                      activeFilter === filter
                        ? 'bg-brand-500 text-white shadow-sm'
                        : 'text-zinc-600 dark:text-zinc-300 hover:text-brand-500 dark:hover:text-brand-400'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Classes Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredClasses.map((item, idx) => (
              <Reveal key={`${item.title}-${activeFilter}`} delay={(idx % 3) * 150} direction="up">
                <div 
                  className="group flex flex-col justify-between bg-white dark:bg-zinc-900/50 border border-brand-100/10 dark:border-zinc-800/40 hover:border-brand-300 dark:hover:border-zinc-700/60 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 text-left h-full"
                >
                  <div>
                    {/* Meta details (level & duration) */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        item.level === 'Principiante' 
                          ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400'
                          : item.level === 'Intermedio'
                          ? 'bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400'
                          : item.level === 'Avanzado'
                          ? 'bg-rose-50 dark:bg-rose-950/20 text-rose-650 dark:text-rose-450'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
                      }`}>
                        {item.level}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-medium text-zinc-400 dark:text-zinc-500">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-brand-950 dark:text-sand-50 mb-2 font-heading transition-colors group-hover:text-brand-500">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Benefits checklist */}
                    <ul className="space-y-2 mb-8">
                      {item.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                          <div className="h-1.5 w-1.5 bg-terracotta-500 rounded-full shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Link
                    to="/contacto"
                    className="w-full flex items-center justify-center gap-2 border border-brand-100 dark:border-zinc-800 hover:border-brand-500 hover:bg-brand-500 dark:hover:bg-brand-500 hover:text-white text-brand-700 dark:text-zinc-300 font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-300 shadow-sm"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Reservar Clase</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
      
    </div>
  )
}
