import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, Clock, ChevronDown, Check } from 'lucide-react'

interface Specialty {
  title: string
  focus: string[]
  ratio: string
  hours: string
  description: string
  image: string
}

export default function Services() {
  const [openStep, setOpenStep] = useState<number | null>(0)

  const specialties: Specialty[] = [
    {
      title: 'Medicina General y Preventiva',
      focus: ['Chequeos analíticos completos y ecografías', 'Control de tensión y riesgo cardiovascular', 'Gestión de recetas e historial digitalizado'],
      ratio: 'Consulta extendida de 35 a 45 minutos por paciente',
      hours: 'Lunes a Viernes: 8:00 - 20:00 | Sábados: 9:00 - 13:00',
      description: 'El núcleo de tu cuidado. Evaluamos tu estado de salud global mediante estudios de prevención activa y diagnósticos precisos.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Fisioterapia y Rehabilitación',
      focus: ['Tratamiento de contracturas y lesiones musculares', 'Rehabilitación postquirúrgica funcional', 'Higiene postural y ergonomía laboral'],
      ratio: 'Sesiones 100% manuales e individuales con fisioterapeuta colegiado',
      hours: 'Lunes a Viernes: 8:00 - 21:00',
      description: 'Devolvemos la movilidad y eliminamos el dolor crónico. Tratamientos manuales adaptados con planes de ejercicio guiado.',
      image: 'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Nutrición Clínica y Dietética',
      focus: ['Estudio de bioimpedancia y composición corporal', 'Planes dietéticos personalizados para patologías digestivas', 'Educación alimentaria familiar y microbiota'],
      ratio: 'Evaluación y seguimiento personalizado con dietista-nutricionista',
      hours: 'Lunes, Miércoles y Viernes: 9:00 - 19:30',
      description: 'Mejora tu alimentación para potenciar tu vitalidad. Diseñamos planes nutricionales específicos y sostenibles a largo plazo.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Pediatría y Salud Infantil',
      focus: ['Seguimiento del desarrollo psicomotriz del lactante', 'Control respetuoso de vacunas y alimentación infantil', 'Atención inmediata de patologías comunes'],
      ratio: 'Consulta en ambiente lúdico adaptado con pediatra especializado',
      hours: 'Lunes a Viernes: 9:00 - 18:30',
      description: 'Cuidamos de los más pequeños en un ambiente de calma y juego, garantizando el óptimo desarrollo de su salud.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80'
    }
  ]

  const checkupRoutine = [
    { time: '08:00 - 09:30', title: 'Extracción y Laboratorio', desc: 'Pruebas analíticas en ayunas.' },
    { time: '09:30 - 10:00', title: 'Desayuno Saludable', desc: 'Colación en cafetería concertada.' },
    { time: '10:00 - 12:00', title: 'Consultas y Pruebas', desc: 'Revisión exhaustiva con especialista.' },
    { time: '12:00 - 13:00', title: 'Fisioterapia y Nutrición', desc: 'Valoraciones funcional y dietética.' },
    { time: '13:00', title: 'Informe Consolidado', desc: 'Entrega de pautas de salud inmediatas.' }
  ]

  const admissionSteps = [
    {
      title: 'Solicitud de Cita y Registro Previo Online',
      desc: 'Rellena el formulario web de reserva o llámanos. Si lo deseas, podrás adelantar tu sintomatología o historial de manera segura.'
    },
    {
      title: 'Estudio y Asignación de Especialista',
      desc: 'Nuestro equipo de triaje médico analiza tu solicitud y te asigna al especialista que mejor se adapte a tu motivo de consulta.'
    },
    {
      title: 'Consulta Médica de Diagnóstico Extendido',
      desc: 'En tu primera visita, realizamos una entrevista clínica pausada de hasta 45 minutos y programamos las analíticas o ecografías necesarias.'
    },
    {
      title: 'Plan de Tratamiento e Historial en tu Móvil',
      desc: 'Una vez emitido el diagnóstico, te entregamos un plan terapéutico digitalizado (recetas, citas de control y pautas) accesible desde el portal del paciente.'
    }
  ]

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index)
  }

  return (
    <main className="flex-1 animate-fade-in bg-white dark:bg-stone-950 transition-colors duration-300">
      
      {/* Page Header Hero Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-slate-200 dark:border-stone-850">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0F766E] dark:text-teal-400">Nuestros Servicios</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight !margin-y-0 font-outfit">
            Especialidades Médicas y Clínicas
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-500 dark:text-stone-300 leading-relaxed">
            Unidades especializadas independientes coordinadas para brindarte un tratamiento clínico integral.
          </p>
        </div>
      </section>

      {/* Specialties Row Layout (Alternating Columns) */}
      <section className="py-20 px-6 sm:px-8 bg-brand-alt dark:bg-[#0D1D1E] border-b border-slate-200 dark:border-stone-850">
        <div className="mx-auto max-w-7xl space-y-24">
          {specialties.map((specialty, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div 
                key={specialty.title}
                className={`flex flex-col lg:flex-row items-center gap-12 sm:gap-16 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Photo frame */}
                <div className="flex-1 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-stone-800 shadow-xs max-h-[340px]">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6 text-left">
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-outfit">
                      {specialty.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-650 dark:text-stone-300 leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>

                  {/* Metadata */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-slate-250 dark:border-stone-800 py-4 text-xs">
                    <div className="flex items-center gap-2 text-slate-550 dark:text-stone-400">
                      <Users className="h-4 w-4 text-[#0F766E] dark:text-teal-400 shrink-0" />
                      <span><strong>Atención:</strong> {specialty.ratio}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-550 dark:text-stone-400">
                      <Clock className="h-4 w-4 text-[#0F766E] dark:text-teal-400 shrink-0" />
                      <span><strong>Horario:</strong> {specialty.hours}</span>
                    </div>
                  </div>

                  {/* Bullet checklist */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-750 dark:text-stone-350">
                    {specialty.focus.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-2 items-start font-medium">
                        <Check className="h-4 w-4 text-[#0F766E] dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Routine / Checkup Agenda Grid */}
      <section className="py-20 px-6 sm:px-8 border-b border-slate-200 dark:border-stone-850 bg-white dark:bg-stone-950">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Circuito de Chequeo Preventivo
            </h2>
            <p className="text-slate-500 dark:text-stone-400 text-sm sm:text-base">
              Coordinación integral de tus pruebas analíticas y clínicas en una sola mañana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {checkupRoutine.map((step, idx) => (
              <div 
                key={step.title}
                className="p-6 rounded-xl bg-brand-alt dark:bg-stone-900/50 border border-border-teal dark:border-stone-800 space-y-4 text-left flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-bold text-[#0F766E] dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 px-2 py-0.5 rounded border border-teal-100 dark:border-teal-900/50">
                    {step.time}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-outfit">
                    {idx + 1}. {step.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-550 dark:text-stone-400 leading-relaxed pt-2 border-t border-slate-200 dark:border-stone-800">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Onboarding Accordion */}
      <section className="py-20 px-6 sm:px-8 border-b border-slate-200 dark:border-stone-850 bg-brand-alt dark:bg-[#0D1D1E]">
        <div className="mx-auto max-w-4xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-outfit">
              Proceso de tu Primera Consulta
            </h2>
            <p className="text-slate-500 dark:text-stone-400 text-sm sm:text-base">
              Nos aseguramos de que tu incorporación a la clínica sea fluida y transparente.
            </p>
          </div>

          <div className="space-y-4">
            {admissionSteps.map((step, idx) => {
              const isSelected = openStep === idx
              return (
                <div 
                  key={step.title}
                  className="rounded-xl border border-slate-200 bg-white dark:border-stone-800 dark:bg-stone-900 overflow-hidden"
                >
                  <button
                    onClick={() => toggleStep(idx)}
                    type="button"
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 dark:hover:bg-stone-850/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                    aria-expanded={isSelected}
                    aria-controls={`step-content-${idx}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F766E] text-white text-xs font-bold shadow-sm">
                        {idx + 1}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    {isSelected ? <ChevronDown className="h-5 w-5 text-slate-550" /> : <ChevronDown className="h-5 w-5 text-slate-400 rotate-270" />}
                  </button>

                  <div
                    id={`step-content-${idx}`}
                    role="region"
                    className={`transition-all duration-300 ease-in-out border-slate-100 dark:border-stone-850 ${
                      isSelected ? 'max-h-60 border-t p-5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400 leading-relaxed pl-12">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="#pedir-cita"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] hover:bg-[#1d4ed8] px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-250"
              style={{ textDecoration: 'none' }}
            >
              Pedir Cita Online
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}
