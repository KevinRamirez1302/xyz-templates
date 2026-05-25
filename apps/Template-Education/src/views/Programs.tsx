import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, Clock, ChevronDown, ChevronUp, Check } from 'lucide-react'

interface Program {
  title: string
  ages: string
  ratio: string
  hours: string
  color: string
  focus: string[]
  description: string
  image: string
}

export default function Programs() {
  const [openStep, setOpenStep] = useState<number | null>(0)

  const programs: Program[] = [
    {
      title: 'Comunidad Infantil (Toddlers)',
      ages: '1 a 3 años',
      ratio: '1 Guía y 1 Asistente por 10 niños (1:5)',
      hours: '9:00 - 13:30 (Media jornada) o 9:00 - 16:30',
      color: 'border-brand-terracotta text-brand-terracotta bg-brand-terracotta/5',
      focus: ['Desarrollo psicomotriz y control de esfínteres', 'Adquisición del lenguaje y vocabulario', 'Autonomía en actividades cotidianas (comer solo, calzarse)'],
      description: 'Un ambiente acogedor y seguro diseñado para la exploración libre. Los niños trabajan en su independencia física y coordinación motora fina y gruesa.',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
      title: 'Casa de Niños (Children\'s House)',
      ages: '3 a 6 años',
      ratio: '1 Guía y 1 Asistente por 20 niños (1:10)',
      hours: '9:00 - 16:30',
      color: 'border-brand-sage text-brand-sage bg-brand-sage/5',
      focus: ['Matemáticas y lectoescritura bilingüe en base sensorial', 'Educación cósmica (geografía, botánica y zoología)', 'Habilidades sociales y gracia y cortesía'],
      description: 'El corazón del método Montessori. El niño interactúa con materiales científicos autocorrectivos estructurados que asientan las bases lógicas e intelectuales.',
      image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
      title: 'Taller I (Lower Elementary)',
      ages: '6 a 9 años',
      ratio: '1 Guía y 1 Asistente por 24 niños (1:12)',
      hours: '9:00 - 16:30',
      color: 'border-brand-gold text-brand-gold bg-brand-gold/5',
      focus: ['Pensamiento abstracto e hipótesis científicas', 'Proyectos de investigación cooperativos', 'Educación cívica, debate y mediación de conflictos'],
      description: 'En esta etapa el niño desarrolla la mente razonadora y la imaginación. Los alumnos investigan el origen del universo y la interconexión ecológica.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
      title: 'Taller II (Upper Elementary)',
      ages: '9 a 12 años',
      ratio: '1 Guía y 1 Asistente por 24 niños (1:12)',
      hours: '9:00 - 16:30',
      color: 'border-stone-400 text-stone-700 bg-stone-100/50 dark:border-stone-700 dark:text-stone-300 dark:bg-stone-900/30',
      focus: ['Álgebra, geometría y gramática avanzadas', 'Proyectos de impacto social y salidas a la comunidad', 'Inmersión bilingüe avanzada con literatura analítica'],
      description: 'Se potencia el sentido ético y la justicia social. Los niños organizan sus propios planes de estudio y realizan exposiciones complejas de investigación.',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&h=250&q=80'
    }
  ]

  const scheduleSteps = [
    { time: '07:30 - 09:00', title: 'Servicio de Acogida (Opcional)', desc: 'Recepción relajada con música suave y actividades tranquilas.' },
    { time: '09:00 - 12:00', title: 'Ciclo de Trabajo Montessori', desc: 'Tres horas ininterrumpidas de concentración individual. Las guías presentan materiales nuevos.' },
    { time: '12:00 - 12:30', title: 'Reunión de Círculo y Comunidad', desc: 'Puesta en común, canciones, lectura y resolución de conflictos de aula.' },
    { time: '12:30 - 13:30', title: 'Comida Orgánica Bilingüe', desc: 'Los propios alumnos preparan las mesas y sirven la comida en un ambiente familiar.' },
    { time: '13:30 - 14:30', title: 'Juego Libre en la Naturaleza', desc: 'Huerto, patio exterior y granja educativa. Movimiento y aire libre.' },
    { time: '14:30 - 16:30', title: 'Talleres Creativos y Psicomotricidad', desc: 'Música, robótica, yoga o plástica. Segunda sesión de lectura bilingüe.' },
    { time: '16:30', title: 'Salida / Fin de la Jornada', desc: 'Despedida individual de los alumnos con sus guías.' }
  ]

  const admissionSteps = [
    {
      title: 'Ficha de Solicitud de Información',
      desc: 'El primer paso es rellenar nuestro formulario de contacto o llamarnos para registrar tus datos de interés.'
    },
    {
      title: 'Entrevista Pedagógica y Visita de Familias',
      desc: 'Realizamos una visita grupal o individual en horario no lectivo para mostraros los ambientes y explicar nuestra filosofía educativa.'
    },
    {
      title: 'Observación Pedagógica del Alumno',
      desc: 'El niño asiste a una sesión de 30-60 minutos en el aula Montessori con una guía para observar su interacción natural con los materiales.'
    },
    {
      title: 'Formalización de Matrícula',
      desc: 'Una vez confirmada la idoneidad mutua, se realiza la entrega de documentación médica, escolar y el pago de reserva de plaza.'
    }
  ]

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index)
  }

  return (
    <main className="flex-1 animate-fade-in bg-brand-cream dark:bg-brand-dark-bg transition-colors duration-300">
      
      {/* Page Header Hero Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-brand-border-light dark:border-brand-border-dark">
        {/* Background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
          style={{ backgroundImage: "url('/fondo-education.jpg')" }}
        />
        {/* Color overlay to ensure content readability */}
        <div className="absolute inset-0 bg-brand-cream/85 dark:bg-brand-dark-bg/90 -z-10 transition-colors duration-300" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-terracotta dark:text-brand-gold">Nuestras Aulas</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-charcoal dark:text-white leading-tight !margin-y-0">
            Programas y Niveles Educativos
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            Ofrecemos ambientes adaptados a las cuatro etapas fundamentales del desarrollo infantil, respetando las necesidades evolutivas de cada edad.
          </p>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program) => (
              <div 
                key={program.title}
                className="flex flex-col md:flex-row rounded-3xl bg-white dark:bg-brand-card-dark border border-brand-border-light dark:border-brand-border-dark overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div className="md:w-2/5 shrink-0 relative h-56 md:h-auto bg-stone-100 dark:bg-stone-900">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-charcoal/75 backdrop-blur-xs text-white text-xs font-bold py-1 px-3 rounded-full border border-white/10">
                    {program.ages}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-brand-charcoal dark:text-white leading-snug">
                      {program.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-650 dark:text-stone-400 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-2 text-xs border-y border-stone-100 dark:border-stone-850 py-3.5">
                    <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                      <Users className="h-4 w-4 text-brand-sage shrink-0" />
                      <span><strong>Ratio:</strong> {program.ratio}</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                      <Clock className="h-4 w-4 text-brand-terracotta shrink-0" />
                      <span><strong>Horario:</strong> {program.hours}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2">
                    {program.focus.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-2.5 items-start text-[11px] sm:text-xs text-stone-700 dark:text-stone-300">
                        <Check className="h-4 w-4 text-brand-sage shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine / Timeline */}
      <section className="py-20 bg-white dark:bg-brand-dark-bg border-y border-brand-border-light dark:border-brand-border-dark transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal dark:text-white">
              Una Jornada Diaria Típica
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base">
              El ritmo del aula Montessori combina periodos prolongados de trabajo enfocado con rutinas estructuradas de juego exterior y convivencia.
            </p>
          </div>

          <div className="relative border-l border-stone-200 dark:border-stone-800 ml-4 md:ml-32 space-y-12">
            {scheduleSteps.map((step) => (
              <div key={step.title} className="relative pl-8 md:pl-12 group">
                {/* Timeline node */}
                <div className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-cream border-2 border-brand-sage text-brand-sage group-hover:bg-brand-sage group-hover:text-white transition-colors duration-250 dark:bg-brand-dark-bg">
                  <div className="h-2 w-2 rounded-full bg-current" />
                </div>
                
                {/* Left floating time label on desktop */}
                <div className="hidden md:block absolute right-full top-1 mr-8 text-right font-bold text-sm text-brand-terracotta dark:text-brand-gold font-outfit w-28">
                  {step.time}
                </div>

                <div className="space-y-1.5 max-w-2xl">
                  {/* Time label visible on mobile only */}
                  <span className="inline-block md:hidden text-xs font-bold text-brand-terracotta dark:text-brand-gold bg-brand-terracotta/5 px-2 py-0.5 rounded border border-brand-terracotta/15 mb-1.5">
                    {step.time}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-brand-charcoal dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Admissions Process Accordion */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal dark:text-white">
              Proceso de Inscripción
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base">
              Descubre paso a paso cómo iniciar la incorporación de tu hijo a nuestra comunidad educativa.
            </p>
          </div>

          <div className="space-y-4">
            {admissionSteps.map((step, idx) => {
              const isSelected = openStep === idx
              return (
                <div 
                  key={step.title}
                  className="rounded-2xl border border-brand-border-light bg-white dark:border-brand-border-dark dark:bg-brand-card-dark overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => toggleStep(idx)}
                    type="button"
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-stone-50 dark:hover:bg-brand-border-dark transition-colors focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                    aria-expanded={isSelected}
                    aria-controls={`step-content-${idx}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-terracotta text-white text-xs sm:text-sm font-bold shadow-sm">
                        {idx + 1}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-brand-charcoal dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    {isSelected ? <ChevronUp className="h-5 w-5 text-stone-500" /> : <ChevronDown className="h-5 w-5 text-stone-500" />}
                  </button>

                  <div
                    id={`step-content-${idx}`}
                    role="region"
                    className={`transition-all duration-300 ease-in-out border-stone-100 dark:border-stone-850 ${
                      isSelected ? 'max-h-60 border-t p-5 sm:p-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-450 leading-relaxed pl-12">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="#inscribir"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-sage px-6 py-3.5 text-base font-bold text-white shadow-md hover:bg-brand-sage-dark focus-visible:ring-2 focus-visible:ring-brand-sage transition-all duration-200"
            >
              Iniciar Pre-Inscripción
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}
