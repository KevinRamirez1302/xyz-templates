import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Search, Rss } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Inicio',      to: '/' },
  { label: 'Tecnología',  to: '/categoria/tecnologia' },
  { label: 'Viajes',      to: '/categoria/viajes' },
  { label: 'Cultura',     to: '/categoria/cultura' },
  { label: 'Diseño',      to: '/categoria/diseno' },
  { label: 'Bienestar',   to: '/categoria/bienestar' },
  { label: 'Opinión',     to: '/categoria/opinion' },
  { label: 'Nosotros',    to: '/nosotros' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => { setOpen(false) }, [location.pathname])

  const formattedDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).replace(/^\w/, (c) => c.toUpperCase());

  return (
    <header className="w-full bg-white z-50 transition-all duration-300">
      {/* Newspaper Main Masthead (Only visible when not scrolled) */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 transition-all duration-300 ${scrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'opacity-100'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end border-b-2 border-black pb-4">
          {/* Logo / Masthead Title (Left Aligned, 2 cols width on md) */}
          <div className="md:col-span-2 text-left">
            <Link
              to="/"
              className="group select-none inline-block"
              aria-label="Inicio — Crónica Digital"
            >
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-black uppercase leading-none transition-colors duration-300">
                Crónica<span className="text-[--color-brand-accent]">.</span>
              </h1>
              <p className="font-sans text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-neutral-500 mt-2">
                Diario de Información & Análisis Independiente
              </p>
            </Link>
          </div>

          {/* Newspaper Info Strip (Right Aligned, 1 col width on md) */}
          <div className="flex flex-col items-start md:items-end justify-end text-xs font-bold tracking-wider uppercase text-neutral-700 gap-1.5 md:text-right border-l-0 md:border-l border-neutral-200 md:pl-6">
            <div className="text-[10px] text-[--color-brand-accent] font-black tracking-widest">{formattedDate}</div>
            <div className="text-[10px] text-neutral-500">Edición Digital de Acceso Libre</div>
            <div className="text-[10px] text-neutral-400 font-semibold lowercase">colabora@cronicadigital.es</div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation / Slim Header */}
      <div
        className={[
          'sticky top-0 z-50 w-full transition-all duration-300 bg-white border-b border-black',
          scrolled ? 'shadow-md py-2' : 'py-1',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-center h-10 lg:h-12 relative w-full">
            
            {/* Scrolled Logo (Slim) */}
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 ${scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
              <Link
                to="/"
                className="flex items-center gap-2 group"
                aria-label="Inicio — Crónica Digital"
              >
                <span className="font-serif text-2xl font-black tracking-tighter text-black uppercase">
                  Crónica<span className="text-[--color-brand-accent]">.</span>
                </span>
              </Link>
            </div>

            {/* Centered Desktop Nav */}
            <nav
              aria-label="Navegación principal"
              className="hidden lg:flex items-center justify-center gap-1"
            >
              {NAV_LINKS.map((link, idx) => (
                <div key={link.to} className="flex items-center">
                  {idx > 0 && <span className="text-neutral-400 mx-1 text-xs select-none">|</span>}
                  <Link
                    to={link.to}
                    className={[
                      'px-3 py-1 font-serif text-sm font-semibold tracking-wide uppercase transition-colors',
                      location.pathname === link.to
                        ? 'text-[--color-brand-accent] underline decoration-[--color-brand-accent] decoration-2 underline-offset-4'
                        : 'text-neutral-500 hover:text-[--color-brand-accent]',
                    ].join(' ')}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Actions (Always right aligned) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              <Link
                to="/buscar"
                aria-label="Buscar artículos"
                className="p-1.5 text-black hover:bg-neutral-100 transition-colors"
              >
                <Search size={18} />
              </Link>
              <a
                href="/rss.xml"
                aria-label="Feed RSS"
                className="hidden sm:flex p-1.5 text-black hover:bg-neutral-100 transition-colors"
              >
                <Rss size={18} />
              </a>
              <Link
                to="/nosotros"
                className="hidden sm:inline-flex items-center px-4 py-1 border border-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors"
              >
                Suscribirse
              </Link>
              {/* Mobile hamburger */}
              <button
                id="mobile-menu-toggle"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                onClick={() => setOpen(v => !v)}
                className="lg:hidden p-1.5 text-black hover:bg-neutral-100 transition-colors"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          'lg:hidden overflow-hidden transition-all duration-300 bg-white border-b border-black',
          open ? 'max-h-96' : 'max-h-0',
        ].join(' ')}
      >
        <nav
          aria-label="Navegación móvil"
          className="px-4 py-3 space-y-1"
        >
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={[
                'block px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors',
                location.pathname === link.to
                  ? 'text-black bg-neutral-100 font-extrabold'
                  : 'text-neutral-700 hover:text-black hover:bg-neutral-50',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link
              to="/nosotros"
              className="block text-center px-4 py-2 border border-black bg-black text-white text-xs font-bold uppercase"
            >
              Suscribirse a la Edición Impresa
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
