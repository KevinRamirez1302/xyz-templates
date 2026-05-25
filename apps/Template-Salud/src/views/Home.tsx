import { Link } from 'react-router-dom'
import { ArrowRight, Star, HeartPulse, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react'

export default function Home() {

  const stats = [
    { value: '15+', label: 'Años de Experiencia' },
    { value: '20+', label: 'Especialistas Médicos' },
    { value: '100%', label: 'Rigor y Calidad Clínica' },
    { value: '4', label: 'Unidades Médicas' },
  ]

  const highlights = [
    {
      icon: <HeartPulse className="h-6 w-6 text-[#0F766E] dark:text-teal-400" />,
      title: 'Atención Médica Humanizada',
      description: 'Dedicamos el tiempo que requieres. Consultas pausadas y minuciosas para comprender tu salud de forma integral y sin prisas.'
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-[#0F766E] dark:text-teal-400" />,
      title: 'Diagnóstico de Precisión',
      description: 'Equipamiento clínico avanzado y laboratorios de referencia para proporcionarte resultados fiables y rápidos.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-[#0F766E] dark:text-teal-400" />,
      title: 'Prevención Activa',
      description: 'Diseñamos planes personalizados de salud, nutrición y fisioterapia para evitar dolencias y fortalecer tu vitalidad.'
    }
  ]

  const testimonials = [
    {
      quote: "El trato en Vitalis es excelente. El pediatra de mi hija resolvió todas nuestras dudas con un nivel de profesionalidad y cercanía humana que no había encontrado antes.",
      author: "Laura Benítez",
      role: "Madre de Sofía (Paciente de Pediatría)",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "Gracias a su equipo de fisioterapia he recuperado la movilidad de mi rodilla tras meses de dolor. Las sesiones son individuales y 100% enfocadas en ti.",
      author: "Carlos Mendoza",
      role: "Paciente de Fisioterapia y Rehabilitación",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "Una clínica impecable con un equipo multidisciplinar coordinado. Su servicio de nutrición ha cambiado mis hábitos y mi analítica general por completo.",
      author: "Elena Rostova",
      role: "Paciente de Nutrición y Medicina Preventiva",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ]



  return (
    <main className="flex-1 animate-fade-in bg-white dark:bg-stone-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative px-6 sm:px-8 py-16 sm:py-24 border-b border-slate-200 dark:border-stone-850">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Text & Specialty Widget */}
          <div className="flex-1 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-stone-900 border border-slate-200 dark:border-stone-800 text-xs font-semibold text-slate-650 dark:text-stone-300">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              Clínica de Especialidades Médicas
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Rigurosidad médica. <br />
              <span className="text-[#0F766E] dark:text-teal-400">Cercanía humana.</span>
            </h1>
            
            <p className="text-slate-600 dark:text-stone-350 text-base sm:text-lg leading-relaxed max-w-xl">
              Vitalis combina la excelencia de un equipo médico altamente cualificado con un enfoque preventivo personalizado, proporcionando un espacio clínico de máxima confianza y seguridad.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <Link
                to="#pedir-cita"
                className="inline-flex justify-center items-center shadow-md bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-sm rounded-lg px-8 py-4 transition-all duration-200 hover:scale-[1.02]"
                style={{ textDecoration: 'none' }}
              >
                Pedir Cita Online
              </Link>
              <Link
                to="/services"
                className="inline-flex justify-center items-center border border-[#0F766E] text-[#0F766E] hover:bg-teal-50/50 dark:hover:bg-teal-950/20 font-bold text-sm rounded-lg px-8 py-4 transition-colors"
                style={{ textDecoration: 'none' }}
              >
                Ver Especialidades
              </Link>
            </div>
          </div>

          {/* Right Column: Asymmetric Photo Collage */}
          <div className="flex-1 w-full relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
            {/* Background geometric grid block */}
            <div className="absolute inset-4 rounded-3xl border border-slate-100 dark:border-stone-900 -z-10 pointer-events-none" />
            
            {/* Primary Image */}
            <div className="w-[70%] absolute left-4 top-4 aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 dark:border-stone-800 shadow-sm z-10">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=650&q=80" 
                alt="Instalaciones de consulta médica de Vitalis, modernas e higiénicas"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Secondary Overlapping Image */}
            <div className="w-[50%] absolute right-4 bottom-4 aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-stone-850 shadow-md z-20">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=450&q=80" 
                alt="Profesional médica en consulta explicando detalladamente al paciente"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Linear Stats Section */}
      <section className="py-12 px-6 sm:px-8 bg-brand-alt dark:bg-[#0D1D1E] border-y border-border-teal dark:border-teal-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 text-center">
            {stats.map((stat, idx) => (
              <div 
                key={stat.label} 
                className={`md:px-6 ${
                  idx < stats.length - 1 ? 'md:border-r border-slate-200 dark:border-stone-850' : ''
                }`}
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0F766E] dark:text-teal-400 font-outfit">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-550 dark:text-stone-400 mt-2 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 border-b border-slate-200 dark:border-stone-850 px-6 sm:px-8 bg-white dark:bg-stone-950">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Valores del Cuidado Vitalis
            </h2>
            <p className="text-slate-500 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
              Guiamos tu bienestar mediante un modelo médico integral estructurado, centrado en la rigurosidad analítica y la empatía en consulta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-xl bg-brand-alt dark:bg-stone-900/40 border border-border-teal dark:border-stone-800 hover:border-[#0F766E] dark:hover:border-teal-400 transition-colors flex flex-col space-y-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/40 text-[#0F766E] dark:text-teal-400 border border-teal-100 dark:border-teal-900/50 shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-outfit">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Split Section: Clinical Rigor */}
      <section className="py-20 border-b border-slate-200 dark:border-stone-850 px-6 sm:px-8 bg-brand-alt dark:bg-[#0D1D1E]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative w-full max-h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80"
                alt="Consulta médica moderna e impecable de la clínica Vitalis"
                className="w-full h-[350px] object-cover"
                style={{ borderRadius: '20px', boxShadow: '0 10px 25px -5px rgba(15,118,110,0.15)' }}
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Espacios adaptados al cuidado integral y la calma
              </h2>
              <p className="text-slate-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                Nuestra clínica está estructurada bajo estándares sanitarios de máxima exigencia. Las salas de consulta ofrecen confort y aislamiento acústico para propiciar una conversación tranquila y confidencial con tu especialista, facilitando un diagnóstico sin estrés.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'Consultas sin prisas de 30-40 minutos.',
                  'Historial clínico unificado.',
                  'Comisión médica colegiada.',
                  'Seguimiento digital continuo.'
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 items-center text-slate-700 dark:text-stone-350 text-xs sm:text-sm font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-[#0F766E] dark:text-teal-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 dark:border-stone-850">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-[#0F766E] dark:text-teal-400 font-bold hover:underline text-sm"
                >
                  Conoce nuestra filosofía médica
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Minimalist Testimonials */}
      <section className="py-20 border-b border-slate-200 dark:border-stone-850 px-6 sm:px-8 bg-white dark:bg-stone-950">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Experiencias de Pacientes
            </h2>
            <p className="text-slate-500 dark:text-stone-400 text-sm leading-relaxed">
              La satisfacción y recuperación de quienes nos confían su salud avala nuestro compromiso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="p-8 rounded-xl bg-brand-alt dark:bg-stone-900/40 border border-border-teal dark:border-stone-800 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={`star-${i}`} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-650 dark:text-stone-305 text-xs sm:text-sm leading-relaxed italic font-sans">
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-200 dark:border-stone-800">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="size-10 rounded-full object-cover border border-slate-100 dark:border-stone-800"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{t.author}</h4>
                    <p className="text-[10px] sm:text-xs text-slate-450 dark:text-stone-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Admissions Banner */}
      <section 
        className="relative bg-teal-900/90 dark:bg-teal-950/70 border-y border-teal-950 py-20 px-6 sm:px-8 text-center text-white"
      >
        <div className="relative mx-auto max-w-5xl text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight font-outfit !margin-y-0">
            ¿Deseas consultar con uno de nuestros médicos?
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-teal-100/80 leading-relaxed">
            Puedes tramitar tu solicitud de cita previa digitalmente en menos de dos minutos. Elige tu especialidad y fecha preferente para que podamos reservar tu franja horaria.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="#pedir-cita"
              className="w-full sm:w-auto shadow-md hover:scale-[1.02] transition-transform duration-200 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold rounded-lg px-8 py-3.5 text-sm"
              style={{ textDecoration: 'none' }}
            >
              Pedir Cita Online
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto hover:bg-white/10 text-white border border-white/30 hover:border-white font-semibold rounded-lg px-8 py-3.5 text-sm transition-colors"
              style={{ textDecoration: 'none' }}
            >
              Ver Especialidades Médicas
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
