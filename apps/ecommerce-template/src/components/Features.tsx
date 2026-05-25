
export default function Features() {
  const list = [
    {
      title: '3 Años de Garantía In Situ',
      description: 'Soporte prioritario. Si experimentas un fallo de hardware, un técnico resolverá la incidencia en tu domicilio sin costes adicionales.',
      icon: (
        <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Componentes Certificados',
      description: 'Sin compromisos. Integramos exclusivamente componentes premium de marcas líderes mundiales con compatibilidad e integridad verificada.',
      icon: (
        <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: 'Aislamiento e Ingeniería Acústica',
      description: 'Sistemas silenciosos. Calibramos curvas de ventilación y aplicamos materiales aislantes para garantizar un funcionamiento imperceptible.',
      icon: (
        <svg className="w-6 h-6 text-electric-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14a3 3 0 000-6M20 16a6 6 0 000-8" />
        </svg>
      )
    },
    {
      title: 'Envío Asegurado Blindado',
      description: 'Embalaje a prueba de golpes. Enviamos cada ordenador en una caja reforzada de alta densidad con un transportista exclusivo certificado.',
      icon: (
        <svg className="w-6 h-6 text-electric-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="relative py-24 bg-dark-bg border-t border-white/5">
      
      {/* Light glow overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-semibold tracking-widest text-electric-blue uppercase mb-3">
            Garantía de Calidad
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            El Estándar E-Commerce
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-3">
            Cada ordenador es sometido a 24 horas de pruebas de estrés sintético y térmico continuo antes de ser embalado.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {list.map((item, idx) => (
            <div
              key={idx}
              className="glass-effect p-6 rounded-xl border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-base text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Micro decoration line */}
              <div className="w-8 h-[2px] bg-electric-blue/30 rounded mt-6 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
