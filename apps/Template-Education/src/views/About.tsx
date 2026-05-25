import { Star, Compass, Target, Sun, Award } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Compass className="h-6 w-6 text-brand-terracotta" />,
      title: 'Autonomía Dirigida',
      description: 'El niño aprende a elegir libremente su trabajo y a mantener la concentración sin la intervención invasiva del adulto.'
    },
    {
      icon: <Target className="h-6 w-6 text-brand-sage" />,
      title: 'Respeto al Ritmo Individual',
      description: 'Entendemos que cada mente infantil tiene sus tiempos de maduración. No hay exámenes estandarizados, hay progreso continuo.'
    },
    {
      icon: <Sun className="h-6 w-6 text-brand-gold" />,
      title: 'Educación Cósmica',
      description: 'Ayudamos al niño a comprender el universo, la ecología y cómo su rol individual impacta positivamente en la sociedad.'
    }
  ]

  const team = [
    {
      name: 'María Elena Gómez',
      role: 'Directora Pedagógica y Guía Comunidad Infantil',
      credentials: 'Guía AMI (Asociación Montessori Internacional) 0-3 y 3-6 años. Licenciada en Pedagogía.',
      bio: 'Con más de 12 años de trayectoria en escuelas internacionales Montessori en España y Canadá. Apasionada por el desarrollo temprano y el apego seguro.',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&h=300&q=80'
    },
    {
      name: 'Sophia Clarke',
      role: 'Guía Principal Casa de Niños (English Classroom)',
      credentials: 'Master en Educación Bilingüe. Certificación Montessori AMI 3-6 años por el Montessori Institute of San Diego.',
      bio: 'Nativa de Boston, Sophia aporta 8 años de experiencia en inmersión lingüística activa. Disfruta incorporando música y arte natural en el aula.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80'
    },
    {
      name: 'Laura Sanz',
      role: 'Guía Taller I (Primaria)',
      credentials: 'Guía AMI Taller I (6-9 años) y Taller II (9-12 años). Graduada en Magisterio de Educación Primaria.',
      bio: 'Especialista en proyectos de ciencias aplicadas y matemáticas manipulativas. Su objetivo es que los alumnos adquieran el pensamiento abstracto de forma intuitiva.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300&q=80'
    },
    {
      name: 'Alejandro Ruiz',
      role: 'Asistente de Taller y Coordinador de Huerto y Naturaleza',
      credentials: 'Técnico Superior en Educación Infantil. Especialista en Permacultura y Ecología Infantil.',
      bio: 'Alejandro lidera las actividades de huerto, granja y contacto exterior, enseñando a los niños la procedencia de los alimentos y el respeto por los animales.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80'
    }
  ]

  const areas = [
    { title: 'Vida Práctica', desc: 'Actividades que enseñan al niño a cuidar de sí mismo (vestirse, aseo) y del entorno (limpiar, regar). Fomenta coordinación, motricidad fina y concentración.' },
    { title: 'Desarrollo Sensorial', desc: 'Materiales diseñados para aislar cualidades (forma, tamaño, textura, sonido). Ayuda a clasificar y ordenar la información del entorno físico.' },
    { title: 'Matemáticas', desc: 'Uso de perlas y bloques táctiles para comprender conceptos aritméticos concretos antes de pasar a la abstracción numérica.' },
    { title: 'Lenguaje y Expresión', desc: 'Letras de lija táctiles, fonética lúdica e historias narradas. El bilingüismo se integra en cada rincón conversacional.' },
    { title: 'Área Cultural y Ciencias', desc: 'Introducción interactiva a la geografía, botánica, zoología e historia. Ayuda a conectar la naturaleza con el ser humano.' }
  ]

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
          <span className="text-xs uppercase tracking-widest font-bold text-brand-sage dark:text-brand-gold">Quiénes Somos</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-charcoal dark:text-white leading-tight !margin-y-0">
            Nuestra Filosofía y Equipo
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            Nuestra misión es cultivar el potencial humano único de cada niño en un ambiente de respeto, seguridad y multilingüismo.
          </p>
        </div>
      </section>

      {/* Mission & Vision Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val) => (
              <div 
                key={val.title} 
                className="p-8 rounded-3xl bg-white dark:bg-brand-card-dark border border-brand-border-light dark:border-brand-border-dark shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 dark:bg-stone-850">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal dark:text-white">
                  {val.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pedagogy Deep Dive */}
      <section className="py-16 sm:py-20 bg-white dark:bg-brand-dark-bg border-y border-brand-border-light dark:border-brand-border-dark transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold text-brand-gold-light dark:text-brand-gold bg-amber-500/10">
                <Award className="h-4.5 w-4.5 text-brand-gold" />
                AMI Certified Environment
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal dark:text-white">
                Cinco Áreas de Aprendizaje
              </h2>
              <p className="text-stone-605 dark:text-stone-305 text-sm sm:text-base leading-relaxed">
                El currículo Montessori se divide en áreas especializadas. Los niños se mueven libremente por el aula y eligen materiales de los estantes de acuerdo a su interés innato.
              </p>
              
              <div className="rounded-2xl border border-brand-border-light dark:border-brand-border-dark p-6 bg-brand-cream/40 dark:bg-stone-900/30 flex gap-4">
                <Star className="h-6 w-6 text-brand-terracotta shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 italic">
                  "El niño que tiene libertad y oportunidad para actuar en su ambiente iniciará un camino hacia el desarrollo de su personalidad." — Dr. Montessori
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {areas.map((area, idx) => (
                <div 
                  key={area.title} 
                  className="p-5 rounded-2xl bg-brand-cream dark:bg-brand-card-dark border border-brand-border-light dark:border-brand-border-dark hover:border-brand-sage transition-all duration-200"
                >
                  <h3 className="text-base font-bold text-brand-charcoal dark:text-white mb-1 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-sage text-white text-xs font-bold">{idx + 1}</span>
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed pl-8">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal dark:text-white">
              Conoce a Nuestro Equipo
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base">
              Nuestras guías y asistentes no solo cuentan con certificaciones internacionales oficiales de la AMI, sino con una profunda vocación humana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div 
                key={member.name}
                className="group flex flex-col rounded-3xl bg-white dark:bg-brand-card-dark border border-brand-border-light dark:border-brand-border-dark overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Photo frame with subtle zoom on hover */}
                <div className="overflow-hidden relative h-64 bg-stone-100 dark:bg-stone-900 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-3 left-3 bg-brand-charcoal/70 backdrop-blur-xs text-white text-xs font-semibold py-1 px-2.5 rounded-lg flex items-center gap-1.5 border border-white/15">
                    <Award className="h-3.5 w-3.5 text-brand-gold" />
                    Guía AMI
                  </div>
                </div>

                {/* Profile Text */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-brand-charcoal dark:text-white leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-brand-terracotta dark:text-brand-gold uppercase tracking-wide">
                      {member.role}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-450 font-medium">
                      {member.credentials}
                    </p>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed border-t border-stone-100 dark:border-stone-850 pt-3">
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
