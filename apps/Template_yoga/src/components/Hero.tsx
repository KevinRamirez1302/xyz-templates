import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative z-10 overflow-hidden py-20 lg:py-32 transition-colors duration-300"
    >
      {/* Background Image Cover */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: 'url(/hero_yoga_fondo.jpg)' }}
      ></div>
      {/* Subtle overlay to blend background image */}
      <div 
        className="absolute inset-0 bg-white/20 dark:bg-zinc-950/40 z-10 transition-colors duration-300"
      ></div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content inside Glassmorphism Card */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-y-6 animate-fade-in bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/50 dark:border-zinc-800/40 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100/60 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="size-3.5" />
              <span>Clases presenciales y online</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-950 dark:text-sand-50 leading-tight">
              Encuentra tu equilibrio,<br />
              <span className="text-brand-500 dark:text-brand-400 font-medium">reconecta con tu paz</span>
            </h1>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl font-light leading-relaxed">
              Un espacio sagrado en el corazón de la ciudad para armonizar tu cuerpo, mente y alma. Disfruta de clases adaptadas a todos los niveles, desde Vinyasa activo hasta meditación profunda.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md pt-2">
              <div className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-200">
                <ShieldCheck className="size-5 text-brand-500" />
                <span className="text-sm">Instructores certificados</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-200">
                <ShieldCheck className="size-5 text-brand-500" />
                <span className="text-sm">Grupos reducidos y personalizados</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-200">
                <ShieldCheck className="size-5 text-brand-500" />
                <span className="text-sm">Ambiente cálido y purificado</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-200">
                <ShieldCheck className="size-5 text-brand-500" />
                <span className="text-sm">Acceso a clases grabadas</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-semibold rounded-full px-8 py-4 shadow-lg hover:shadow-brand-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <span>Probar Clase Gratis</span>
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link
                to="/clases"
                className="inline-flex items-center justify-center border border-zinc-300 dark:border-zinc-700 hover:border-brand-500 hover:text-brand-500 dark:hover:text-brand-400 text-zinc-700 dark:text-zinc-200 font-semibold rounded-full px-8 py-4 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                Explorar Clases
              </Link>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="lg:col-span-5 relative flex justify-center items-center lg:mt-0 mt-8">
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-300 to-terracotta-200 rounded-2xl blur opacity-30 dark:opacity-20"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-zinc-800 transition-transform duration-500 hover:scale-[1.01] max-w-full">
              <img 
                src="/yoga_hero.png" 
                alt="Interior del estudio de yoga Prana, cálido, minimalista y lleno de luz natural"
                className="object-cover w-full h-[350px] sm:h-[450px] lg:h-[500px]"
                loading="eager"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-5 py-3.5 rounded-xl border border-white/20 shadow-lg text-left">
                <p className="text-xs font-semibold text-terracotta-500 uppercase tracking-wider">Próximo retiro de fin de semana</p>
                <h4 className="text-sm font-bold text-zinc-800 dark:text-sand-100">Mindfulness & Yoga en la Naturaleza</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">15-17 de Julio • Plazas limitadas</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
