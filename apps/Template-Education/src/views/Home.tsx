import { Link } from 'react-router-dom'
import { ArrowRight, Star, Heart, CheckCircle2, ShieldCheck, Leaf } from 'lucide-react'

export default function Home() {
  const stats = [
    { value: '15+', label: 'Años Guiando Niños' },
    { value: '1:8', label: 'Ratio Guía / Alumno' },
    { value: '100%', label: 'Guías Certificados AMI' },
    { value: '4', label: 'Programas Académicos' },
  ]

  const highlights = [
    {
      icon: <Heart style={{ color: 'var(--brand)', width: '32px', height: '32px' }} />,
      title: 'Pedagogía Montessori',
      description: 'Materiales manipulativos científicos diseñados para el desarrollo autónomo de la motricidad, matemáticas y lenguaje.'
    },
    {
      icon: <ShieldCheck style={{ color: 'var(--brand)', width: '32px', height: '32px' }} />,
      title: 'Inmersión Bilingüe Integral',
      description: 'Un entorno 100% bilingüe (Español/Inglés) con guías nativos que fomentan la adquisición orgánica de la lengua.'
    },
    {
      icon: <Leaf style={{ color: 'var(--brand)', width: '32px', height: '32px' }} />,
      title: 'Entorno Natural y Huerto',
      description: 'Zonas al aire libre, granja educativa, huerto orgánico y talleres diarios de concienciación medioambiental.'
    }
  ]

  const testimonials = [
    {
      quote: "La transición de nuestro hijo a Aura Academy ha sido la mejor decisión. Su independencia, confianza y amor por la lectura se han multiplicado en pocos meses.",
      author: "Laura Benítez",
      role: "Madre de Mateo (Casa de Niños, 4 años)",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "El respeto absoluto al ritmo de aprendizaje del niño es real. Las guías son excepcionales y el ambiente bilingüe les ayuda a asimilar el inglés sin esfuerzo.",
      author: "Carlos Mendoza",
      role: "Padre de Sofía (Comunidad Infantil, 2 años)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "Las instalaciones son fantásticas, con mucha luz natural y materiales de madera preciosos. Un colegio que entiende la infancia como una etapa sagrada.",
      author: "Elena Rostova",
      role: "Madre de Lucas (Taller I, 7 años)",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ]

  return (
    <main className="flex-1 animate-fade-in">
      
      {/* Hero Section */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '60px 2rem 100px', marginTop: '0' }}>
        {/* Background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
          style={{ backgroundImage: "url('/fondo-education.jpg')" }}
        />
        {/* Color overlay to ensure content readability */}
        <div 
          className="absolute inset-0 -z-10 transition-colors duration-300"
          style={{ backgroundColor: 'rgba(247, 243, 238, 0.9)' }}
        />
        <div style={{ display: 'flex', gap: '48px', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }} className="flex-col lg:flex-row">

          {/* COLUMNA IZQUIERDA — texto */}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.15, fontFamily: 'Playfair Display, serif', color: 'var(--dark)' }}>
              Despertando la <span style={{ color: 'var(--brand)' }}>curiosidad natural</span> del niño
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '17px', marginTop: '16px', lineHeight: 1.6 }}>
              Aura Academy ofrece un espacio educativo bilingüe basado en el método Montessori. Fomentamos la autonomía, el pensamiento crítico y el respeto mutuo desde los 1 hasta los 12 años.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }} className="flex-col sm:flex-row">
              <Link
                to="/programs"
                style={{ background: 'var(--accent)', color: 'var(--dark)',
                  border: 'none', borderRadius: '8px',
                  padding: '14px 28px', fontWeight: 500, cursor: 'pointer',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Explorar Programas
              </Link>
              <Link
                to="/contact"
                style={{ background: 'transparent', color: 'var(--brand)',
                  border: '1.5px solid var(--brand)', borderRadius: '8px',
                  padding: '14px 28px', fontWeight: 500, cursor: 'pointer',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Solicitar visita
              </Link>
            </div>
          </div>

          {/* COLUMNA DERECHA — foto */}
          <div style={{ flex: 1, position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" 
              alt="Niña sonriendo y aprendiendo de forma práctica con materiales interactivos en el aula"
              style={{ width: '100%', borderRadius: '24px', boxShadow: '0 8px 40px rgba(42,123,92,0.15)' }} 
            />
            {/* Badge flotante */}
            <div style={{ position: 'absolute', bottom: '20px', left: '-16px',
              background: 'var(--accent)', color: 'var(--dark)',
              padding: '10px 18px', borderRadius: '12px', fontWeight: 500,
              fontSize: '13px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              ✦ Matriculación Abierta 2025/26
            </div>
          </div>

        </div>
      </section>

      {/* Stats Counter Section */}
      <section style={{ backgroundColor: 'var(--bg-card)', padding: '48px 2rem' }} className="transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p style={{ fontSize: '36px', fontWeight: 700, color: 'var(--brand)', fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section style={{ padding: '60px 2rem' }} className="bg-brand-cream dark:bg-brand-dark-bg transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal dark:text-white">
              ¿Por qué elegir Aura Academy?
            </h2>
            <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg">
              Ofrecemos un modelo pedagógico centrado en las necesidades individuales del desarrollo del niño, promoviendo el respeto, la ciencia y la naturaleza.
            </p>
          </div>

          <div style={{ gap: '20px' }} className="grid grid-cols-1 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  border: '1px solid transparent',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(42,123,92,0.12)'
                  e.currentTarget.style.borderColor = 'var(--brand)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
                className="flex flex-col"
              >
                <div style={{ color: 'var(--brand)', fontSize: '32px', marginBottom: '12px' }}>
                  {item.icon}
                </div>
                
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: 'var(--dark)' }} className="font-bold mb-3">
                  {item.title}
                </h3>
                
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pedagogy Philosophy Highlight (Split Section) */}
      <section className="py-16 sm:py-24 bg-white dark:bg-brand-dark-bg transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div style={{ alignItems: 'center' }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                alt="Niños cooperando y dibujando juntos en un aula Montessori"
                style={{ borderRadius: '20px' }}
                className="w-full h-[350px] object-cover shadow-lg border border-brand-border-light dark:border-brand-border-dark"
              />
              <div className="absolute -bottom-5 -left-5 bg-brand-gold text-brand-charcoal font-bold p-5 rounded-2xl shadow-md border border-white/20 hidden sm:block">
                <p className="text-2xl font-black">"Sigue al niño"</p>
                <p className="text-xs uppercase tracking-widest font-semibold mt-1">María Montessori</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal dark:text-white">
                El aula como un "organismo vivo"
              </h2>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-base">
                Nuestras aulas Montessori están organizadas meticulosamente por áreas de trabajo y adaptadas al tamaño físico de los niños. Esto elimina la necesidad de asistencia constante de los adultos y les otorga la libertad de elegir actividades auto-correctivas que perfeccionan su aprendizaje cognitivo y sensoriomotor.
              </p>
              
              <ul className="space-y-3.5">
                {[
                  'Materiales de madera natural y base científica.',
                  'Aulas integradas con edades múltiples que fomentan la tutoría entre pares.',
                  'Educación emocional enfocada en la resolución pacífica de conflictos.',
                  'Conexión directa con la naturaleza y espacios exteriores.'
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-stone-750 dark:text-stone-350 text-sm sm:text-base">
                    <CheckCircle2 className="h-5 w-5 text-brand-sage shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-brand-terracotta dark:text-brand-gold font-bold hover:underline"
                >
                  Conoce nuestra metodología
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-cream dark:bg-brand-dark-bg transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal dark:text-white">
              Lo que opinan las familias
            </h2>
            <p className="text-stone-650 dark:text-stone-350">
              La satisfacción de nuestros padres y el bienestar de los niños es nuestra mayor recompensa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: '16px',
                  padding: '28px',
                  boxShadow: '0 2px 20px rgba(42,123,92,0.08)'
                }}
                className="flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-0.5" style={{ color: 'var(--accent)', fontSize: '16px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={`star-${i}`} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-stone-100 dark:border-stone-850">
                  <img
                    src={t.image}
                    alt={t.author}
                    style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid var(--bg-card)', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 className="text-sm font-bold text-brand-charcoal dark:text-white">{t.author}</h4>
                    <p className="text-xs text-stone-500 dark:text-stone-450">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Admissions Banner */}
      <section 
        style={{ backgroundColor: 'var(--brand)', padding: '80px 2rem', textAlign: 'center' }} 
        className="text-white relative overflow-hidden transition-colors duration-300"
      >
        {/* Visual elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-12 -translate-y-12" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-20 translate-y-20" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <h2 style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: '42px' }} className="font-extrabold tracking-tight leading-tight !margin-y-0">
            ¿Quieres formar parte de Aura Academy?
          </h2>
          <p style={{ opacity: 0.8 }} className="max-w-2xl mx-auto text-base sm:text-lg text-white leading-relaxed">
            Las plazas son limitadas debido a nuestros ratios reducidos. Agenda una entrevista y visita nuestras instalaciones para conocer en profundidad nuestro método de enseñanza.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="#inscribir"
              style={{ 
                backgroundColor: 'var(--accent)', 
                color: 'var(--dark)', 
                fontSize: '16px', 
                fontWeight: 500, 
                border: 'none', 
                borderRadius: '10px', 
                padding: '16px 36px', 
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="w-full sm:w-auto shadow-md hover:scale-[1.02] transition-transform duration-200"
            >
              Inscribir al Alumno
            </Link>
            <Link
              to="/programs"
              style={{ 
                background: 'transparent', 
                color: '#fff', 
                border: '1.5px solid rgba(255, 255, 255, 0.4)', 
                borderRadius: '10px', 
                padding: '16px 36px', 
                fontWeight: 500, 
                cursor: 'pointer',
                fontSize: '16px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="w-full sm:w-auto hover:border-white transition-colors"
            >
              Ver Programas Educativos
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
