import { Link } from 'react-router-dom'
import { HeartPulse } from 'lucide-react'

export default function Footer() {
  return (
    <footer 
      className="w-full bg-slate-50 dark:bg-stone-900/60 transition-colors duration-300 fine-border-t py-12 px-6 sm:px-8 text-sm"
    >
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Column: Logo + Tagline */}
        <div className="flex-1 space-y-3 text-center md:text-left max-w-sm">
          <Link to="/" className="inline-flex items-center gap-2 group p-1 focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg">
            <div 
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/40 text-[#0F766E] dark:text-teal-400 border border-teal-100 dark:border-teal-900/50"
            >
              <HeartPulse className="h-5.5 w-5.5" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white font-outfit">
              Vitalis<span className="text-[#0F766E] font-medium">Salud</span>
            </span>
          </Link>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-stone-400">
            Cuidando de ti y de tu familia a través de una atención médica integral de excelencia, tecnología clínica avanzada y un trato cercano y personalizado.
          </p>
        </div>

        {/* Center Column: Navigation Links */}
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/" className="text-slate-600 hover:text-[#0F766E] dark:text-stone-300 dark:hover:text-teal-400 transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1" style={{ textDecoration: 'none' }}>
            Inicio
          </Link>
          <Link to="/about" className="text-slate-600 hover:text-[#0F766E] dark:text-stone-300 dark:hover:text-teal-400 transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1" style={{ textDecoration: 'none' }}>
            Sobre Nosotros
          </Link>
          <Link to="/services" className="text-slate-600 hover:text-[#0F766E] dark:text-stone-300 dark:hover:text-teal-400 transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1" style={{ textDecoration: 'none' }}>
            Especialidades
          </Link>
          <Link to="#pedir-cita" className="text-slate-600 hover:text-[#0F766E] dark:text-stone-300 dark:hover:text-teal-400 transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1" style={{ textDecoration: 'none' }}>
            Pedir Cita
          </Link>
        </div>

        {/* Right Column: Copyright */}
        <div className="flex-1 text-center md:text-right text-slate-500 dark:text-stone-450">
          <p>&copy; 2026 Vitalis Salud. Todos los derechos reservados.</p>
          <p className="text-xs text-slate-400 mt-1">Colaborador de XYZ Digital</p>
        </div>

      </div>
    </footer>
  )
}
