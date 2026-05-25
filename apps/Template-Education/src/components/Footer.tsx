import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer 
      style={{ 
        backgroundColor: 'var(--dark)', 
        color: 'rgba(255,255,255,0.7)', 
        padding: '48px 2rem', 
        fontSize: '14px' 
      }}
      className="w-full transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Column: Logo + Tagline */}
        <div className="flex-1 space-y-3 text-center md:text-left max-w-sm">
          <Link to="/" className="inline-flex items-center gap-2 group p-1 focus-visible:ring-2 focus-visible:ring-white rounded-lg">
            <div 
              style={{ backgroundColor: 'var(--brand)' }}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-sm"
            >
              <GraduationCap className="h-5.5 w-5.5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-outfit">
              Aura<span style={{ color: 'var(--accent)' }}>Academy</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Guiando el crecimiento natural y el amor por el aprendizaje a través del método Montessori y una inmersión lingüística bilingüe integral.
          </p>
        </div>

        {/* Center Column: Navigation Links */}
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/" className="hover:text-[var(--accent)] transition-colors focus-visible:ring-2 focus-visible:ring-white rounded px-1" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            Inicio
          </Link>
          <Link to="/about" className="hover:text-[var(--accent)] transition-colors focus-visible:ring-2 focus-visible:ring-white rounded px-1" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            Sobre Nosotros
          </Link>
          <Link to="/programs" className="hover:text-[var(--accent)] transition-colors focus-visible:ring-2 focus-visible:ring-white rounded px-1" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            Programas
          </Link>
          <Link to="#inscribir" className="hover:text-[var(--accent)] transition-colors focus-visible:ring-2 focus-visible:ring-white rounded px-1" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            Inscribir y Contacto
          </Link>
        </div>

        {/* Right Column: Copyright */}
        <div className="flex-1 text-center md:text-right" style={{ color: 'rgba(255,255,255,0.7)' }}>
          <p>&copy; 2025 Aura Academy. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  )
}
