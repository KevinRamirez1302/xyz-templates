import { Star, Compass, Target, Shield, Award } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Compass className="h-6 w-6 text-[#0F766E] dark:text-teal-400" />,
      title: 'Trato Humano y Empático',
      description: 'Entendemos al paciente más allá de sus síntomas. Brindamos un acompañamiento cercano, dedicando el tiempo necesario para escucharle.'
    },
    {
      icon: <Target className="h-6 w-6 text-[#0F766E] dark:text-teal-400" />,
      title: 'Excelencia y Rigor Científico',
      description: 'Nuestros especialistas se mantienen a la vanguardia médica, aplicando tratamientos basados en la evidencia y en protocolos rigurosos.'
    },
    {
      icon: <Shield className="h-6 w-6 text-[#0F766E] dark:text-teal-400" />,
      title: 'Medicina Preventiva',
      description: 'Promovemos hábitos de vida saludables y chequeos regulares para detectar y frenar patologías antes de que aparezcan.'
    }
  ]

  const team = [
    {
      name: 'Dra. María Elena Gómez',
      role: 'Directora Médica y Medicina Familiar',
      credentials: 'Colegiada n.º 2828654. Doctora en Medicina por la UCM. 15 años de experiencia en medicina preventiva.',
      bio: 'Especialista en el seguimiento de pacientes crónicos y chequeos integrales de salud. Cree firmemente que la prevención es la base del bienestar.',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&h=300&q=80'
    },
    {
      name: 'Dra. Sophia Clarke',
      role: 'Jefa de la Unidad de Pediatría',
      credentials: 'Especialista en Pediatría y Neonatología por el Boston Children\'s Hospital. Master en Salud Infantil.',
      bio: 'Sophia enfoca las consultas infantiles desde el juego y el respeto, logrando que la visita al pediatra sea una experiencia alegre y libre de miedos.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80'
    },
    {
      name: 'Dra. Laura Sanz',
      role: 'Directora de Fisioterapia y Rehabilitación',
      credentials: 'Graduada en Fisioterapia por la UAM. Especialista en terapia manual y readaptación de lesiones deportivas.',
      bio: 'Apasionada por devolver la movilidad funcional y aliviar el dolor crónico mediante ejercicios personalizados y técnicas manuales avanzadas.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300&q=80'
    },
    {
      name: 'Dr. Alejandro Ruiz',
      role: 'Coordinador de Nutrición Clínica y Dietética',
      credentials: 'Graduado en Nutrición Humana. Especialista en inmunología digestiva, microbioma y alergias alimentarias.',
      bio: 'Alejandro diseña menús adaptados a patologías concretas y realiza talleres interactivos de educación alimentaria para toda la familia.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80'
    }
  ]

  const areas = [
    { title: 'Medicina Familiar', desc: 'Evaluaciones completas del estado general de salud, control de factores de riesgo vascular (tensión, colesterol) y prescripciones preventivas.' },
    { title: 'Pediatría Respetuosa', desc: 'Acompañamiento en el crecimiento y desarrollo del lactante y el niño, calendario de vacunas y asesoramiento en lactancia e introducción de alimentos.' },
    { title: 'Fisioterapia Funcional', desc: 'Tratamientos de lesiones musculares y articulares, higiene postural para el trabajo y programas de ejercicios de readaptación física.' },
    { title: 'Nutrición Personalizada', desc: 'Estudios de composición corporal, nutrición digestiva, planificación de dietas para intolerancias y reeducación de hábitos nutricionales.' },
    { title: 'Chequeos Preventivos', desc: 'Análisis clínicos específicos y pruebas diagnósticas anuales diseñadas según rango de edad para la detección precoz de patologías.' }
  ]

  return (
    <main className="flex-1 animate-fade-in bg-white dark:bg-stone-950 transition-colors duration-300">
      
      {/* Page Header Hero Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-slate-200 dark:border-stone-850">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0F766E] dark:text-teal-450">Sobre Nosotros</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight !margin-y-0 font-outfit">
            Nuestra Filosofía y Cuadro Médico
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-500 dark:text-stone-300 leading-relaxed">
            Un equipo médico coordinado y enfocado en la excelencia diagnóstica y el bienestar preventivo de cada paciente.
          </p>
        </div>
      </section>

      {/* Mission & Vision Values */}
      <section className="py-20 border-b border-slate-200 dark:border-stone-850 bg-brand-alt dark:bg-[#0D1D1E] px-6 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val) => (
              <div 
                key={val.title} 
                className="p-8 rounded-xl bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-850 hover:border-[#0F766E] dark:hover:border-teal-400 transition-colors space-y-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/40 text-[#0F766E] dark:text-teal-400 border border-teal-105 dark:border-teal-900/50 shrink-0">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-outfit">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pedagogy Deep Dive */}
      <section className="py-20 border-b border-slate-200 dark:border-stone-850 px-6 sm:px-8 bg-white dark:bg-stone-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 px-3 py-1 text-xs font-semibold text-[#0F766E] dark:text-teal-400 border border-teal-100 dark:border-teal-900/50">
                <Award className="h-4.5 w-4.5 text-[#0F766E]" />
                Certificación Oficial de Salud
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-outfit">
                Atención Médica Interconectada
              </h2>
              <p className="text-slate-500 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                Nuestras especialidades clínicas se coordinan de forma sinérgica. Un paciente de fisioterapia puede requerir un ajuste dietético antiinflamatorio o una consulta médica de control analítico, todo centralizado en un único expediente clínico.
              </p>
              
              <div className="rounded-xl border border-border-teal dark:border-stone-800 p-6 bg-brand-alt/50 dark:bg-stone-900/40 flex gap-4">
                <Star className="h-6 w-6 text-[#0F766E] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400 italic leading-relaxed">
                  "El mayor logro de la ciencia médica no es erradicar la enfermedad, sino acompañar a la persona en el mantenimiento y disfrute de su salud vital." — Consejo Médico Vitalis
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {areas.map((area, idx) => (
                <div 
                  key={area.title} 
                  className="p-5 rounded-xl bg-brand-alt dark:bg-stone-900/40 border border-border-teal dark:border-stone-800 hover:border-[#0F766E] dark:hover:border-teal-400 transition-colors"
                >
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2 font-outfit">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-950/40 text-[#0F766E] border border-teal-100 dark:border-teal-900 text-xs font-bold">{idx + 1}</span>
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400 leading-relaxed pl-8">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 px-6 sm:px-8 bg-brand-alt dark:bg-[#0D1D1E] border-b border-slate-200 dark:border-stone-850">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-outfit">
              Conoce a Nuestro Cuadro Médico
            </h2>
            <p className="text-slate-500 dark:text-stone-400 text-sm sm:text-base">
              Especialistas con alta vocación asistencial y amplia trayectoria en centros hospitalarios nacionales e internacionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div 
                key={member.name}
                className="group flex flex-col rounded-xl bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-850 overflow-hidden shadow-xs hover:border-[#0F766E] dark:hover:border-teal-400 transition-colors"
              >
                <div className="overflow-hidden relative h-64 bg-slate-100 shrink-0 border-b border-slate-200 dark:border-stone-850">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-350"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-stone-900/95 text-slate-900 dark:text-white text-xs font-semibold py-1 px-2.5 rounded border border-slate-200 dark:border-stone-800 flex items-center gap-1.5 shadow-xs">
                    <Award className="h-3.5 w-3.5 text-[#0F766E] dark:text-teal-400" />
                    Médico Colegiado
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug font-outfit">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#0F766E] dark:text-teal-400 uppercase tracking-wide">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-slate-450 dark:text-stone-400 font-medium">
                      {member.credentials}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-stone-400 leading-relaxed border-t border-slate-100 dark:border-stone-850 pt-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}
