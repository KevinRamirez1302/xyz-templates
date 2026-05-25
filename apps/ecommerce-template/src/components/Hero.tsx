
interface HeroProps {
  onExploreCatalog: () => void;
  onOpenConfigurator: () => void;
}

export default function Hero({ onExploreCatalog, onOpenConfigurator }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark-bg"
    >
      {/* Glow overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-electric-purple/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric-blue/30 bg-electric-blue/5 text-[11px] font-semibold uppercase tracking-wider text-electric-blue mb-8 animate-pulse-slow">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
            Ingeniería de Hardware Extremo
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] text-white mb-6">
            Rendimiento Imposible.
            <span className="block mt-2 bg-gradient-to-r from-electric-blue via-electric-blue to-electric-purple bg-clip-text text-transparent">
              Ingeniería sin límites.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
            Diseñamos y ensamblamos ordenadores de alto rendimiento para entusiastas del gaming, creadores profesionales y estaciones de trabajo críticas. Componentes premium calibrados individualmente.
          </p>

          {/* Symmetrical CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onExploreCatalog}
              className="btn-premium w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-purple text-dark-bg font-bold text-sm uppercase tracking-wider rounded-full shadow-lg shadow-electric-blue/20 hover:shadow-electric-blue/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Explorar Catálogo
            </button>
            <button
              onClick={onOpenConfigurator}
              className="btn-premium w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-electric-blue bg-white/5 hover:bg-electric-blue/5 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Configurar en Vivo
            </button>
          </div>
        </div>

        {/* Right Graphical Content */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0">
          {/* Main Visual Frame */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 flex flex-col justify-between group overflow-hidden">
            {/* Corner glowing decorations */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-electric-blue/10 rounded-full blur-2xl pointer-events-none group-hover:bg-electric-blue/20 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-electric-purple/10 rounded-full blur-2xl pointer-events-none group-hover:bg-electric-purple/20 transition-all duration-500" />

            {/* Glowing borders */}
            <div className="absolute inset-0 border border-transparent group-hover:border-electric-blue/25 transition-all duration-500 rounded-2xl pointer-events-none" />

            {/* Top Badge/Header of the Visual Frame */}
            <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono tracking-widest uppercase">
              <span>System Chassis: NXS-01</span>
              <span className="text-electric-blue">Active State</span>
            </div>

            {/* Core PC Visual: CSS Stylings or embedded image */}
            <div className="my-auto flex flex-col justify-center items-center py-6 relative">
              {/* Spinning Fan / Liquid Block CSS representation */}
              <div className="w-56 h-56 rounded-full border border-white/5 bg-dark-bg/80 flex items-center justify-center relative shadow-2xl shadow-electric-blue/5 group-hover:shadow-electric-blue/10 transition-all duration-500">
                {/* Neon Ring */}
                <div className="absolute inset-2 rounded-full border border-dashed border-electric-blue/30 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-6 rounded-full border border-double border-electric-purple/20 animate-spin" style={{ animationDuration: '10s' }} />
                
                {/* Center Core */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-electric-blue to-electric-purple p-[1px] shadow-lg shadow-electric-purple/30">
                  <div className="w-full h-full bg-dark-bg rounded-full flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] text-gray-400 font-mono">TEMP</span>
                    <span className="text-sm font-bold text-white font-mono">34°C</span>
                  </div>
                </div>
              </div>

              {/* Graphic Spec Indicators */}
              <div className="absolute bottom-[-10px] left-4 right-4 glass-effect p-3 rounded-lg border border-white/5 flex justify-between items-center text-[10px] font-mono">
                <div className="flex flex-col">
                  <span className="text-gray-500">LIQUID COOLED</span>
                  <span className="text-white font-semibold">CUSTOM DUAL-RAD</span>
                </div>
                <div className="text-right flex flex-col">
                  <span className="text-gray-500">PUMP RATIO</span>
                  <span className="text-electric-blue font-semibold">92.4%</span>
                </div>
              </div>
            </div>

            {/* Bottom metadata */}
            <div className="flex justify-between items-end border-t border-white/5 pt-4">
              <div className="flex flex-col">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-mono">Chassis Core</span>
                <span className="text-xs font-semibold text-white">Full E-ATX Tempered Glass</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-electric-purple animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-2 h-2 rounded-full bg-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
