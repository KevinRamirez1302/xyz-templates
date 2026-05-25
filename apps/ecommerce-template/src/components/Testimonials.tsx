
export default function Testimonials() {
  const reviews = [
    {
      name: 'Alejandro Rivera',
      role: 'Lead VFX Artist, Octane Studios',
      quote: 'El E-Commerce redujo nuestros tiempos de renderizado de escenas de Blender a la mitad. El soporte técnico in situ nos dio total tranquilidad para cumplir con las fechas de entrega más exigentes.',
      rating: 5,
      avatar: 'AR'
    },
    {
      name: 'Marta Belmonte',
      role: 'Campeona Nacional de Valorant, Rogue Esport',
      quote: 'En el entorno competitivo, un solo tirón de FPS define la ronda. Mi Nexus Gaming mantiene los 360 FPS clavados en resolución 1440p sin inmutarse térmicamente. Es una bestia silenciosa.',
      rating: 5,
      avatar: 'MB'
    },
    {
      name: 'Daniel Castillo',
      role: 'Software Architect, CloudScale Solutions',
      quote: 'Compramos una flota de portátiles Apex y estaciones de trabajo Xeon. La experiencia de desarrollo compilando múltiples contenedores locales es increíble. Recomiendo el configurador.',
      rating: 5,
      avatar: 'DC'
    }
  ]

  return (
    <section id="testimonials" className="relative py-24 bg-dark-bg border-t border-white/5">

      {/* Radial glow background */}
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-electric-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-electric-blue uppercase mb-3">
            Casos de Éxito
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Respaldado por Profesionales
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-3">
            Desde renderizado cinematográfico hasta esports profesionales, nuestros sistemas potencian el trabajo de creadores en todo el mundo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-effect p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-white/10 hover:shadow-2xl transition-all duration-300 relative group"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(rev.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm italic leading-relaxed mb-8 flex-grow">
                "{rev.quote}"
              </p>

              {/* User profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-electric-blue to-electric-purple p-[1px] shrink-0">
                  <div className="w-full h-full bg-dark-bg rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white font-mono">{rev.avatar}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white block">{rev.name}</h4>
                  <span className="text-[10px] text-gray-500 font-mono block mt-0.5">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
