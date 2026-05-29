import { Link } from 'react-router-dom'
import { Rss, Mail, ArrowRight, Share } from 'lucide-react'
import { CATEGORIES } from '../data/posts'

const SOCIAL = [
  { icon: Share, href: 'https://twitter.com',   label: 'Twitter/X' },
  { icon: Share, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Share, href: 'https://linkedin.com',  label: 'LinkedIn' },
  { icon: Rss,   href: '/rss.xml',              label: 'RSS' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#fafaf7] text-neutral-900 mt-24 border-t-4 border-[--color-brand-accent] font-sans">
      {/* Newsletter strip — crimson background */}
      <div className="bg-[--color-brand-accent] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-white mb-1">
              Crónica semanal en tu bandeja
            </h2>
            <p className="text-white/80 text-sm">
              Los mejores artículos de la semana, sin spam. Cancela cuando quieras.
            </p>
          </div>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex w-full md:w-auto gap-2"
            aria-label="Formulario de newsletter"
          >
            <label htmlFor="footer-email" className="sr-only">Correo electrónico</label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="tu@correo.com"
              className="flex-1 md:w-64 px-4 py-2 bg-white/10 border border-white/40 text-white placeholder:text-white/50 focus:outline-none focus:border-white text-sm"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[--color-brand-accent] text-xs font-black uppercase tracking-wider hover:bg-neutral-100 transition-colors"
            >
              Suscribirse <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-neutral-300">
        {/* Brand */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex items-center gap-2 mb-3">
            <span className="font-serif text-2xl font-black uppercase text-[--color-brand-accent]">Crónica Digital</span>
          </Link>
          <p className="text-neutral-600 text-sm leading-relaxed mb-5">
            Historias que importan sobre tecnología, cultura, viajes y diseño. Escritas por personas para personas.
          </p>
          <div className="flex gap-3">
            {SOCIAL.map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="p-2 border border-neutral-400 text-neutral-600 hover:border-[--color-brand-accent] hover:text-[--color-brand-accent] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-[--color-brand-accent] text-xs font-black uppercase tracking-wider mb-4 pb-1 border-b border-[--color-brand-accent]">Categorías</h3>
          <ul className="space-y-2">
            {CATEGORIES.map(cat => (
              <li key={cat.id}>
                <Link
                  to={`/categoria/${cat.slug}`}
                  className="text-neutral-600 hover:text-[--color-brand-accent] text-sm font-medium transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[--color-brand-accent] text-xs font-black uppercase tracking-wider mb-4 pb-1 border-b border-[--color-brand-accent]">Publicación</h3>
          <ul className="space-y-2">
            {[
              { label: 'Nosotros',         to: '/nosotros' },
              { label: 'El equipo',        to: '/nosotros#equipo' },
              { label: 'Colabora con nosotros', to: '/colabora' },
              { label: 'Publicidad',       to: '/publicidad' },
              { label: 'Newsletter',       to: '/newsletter' },
            ].map(item => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-neutral-600 hover:text-[--color-brand-accent] text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal + contact */}
        <div>
          <h3 className="text-[--color-brand-accent] text-xs font-black uppercase tracking-wider mb-4 pb-1 border-b border-[--color-brand-accent]">Legal</h3>
          <ul className="space-y-2 mb-6">
            {[
              { label: 'Política de privacidad', to: '/privacidad' },
              { label: 'Aviso legal',             to: '/aviso-legal' },
              { label: 'Cookies',                 to: '/cookies' },
            ].map(item => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-neutral-600 hover:text-[--color-brand-accent] text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="mailto:hola@cronicadigital.es"
            className="inline-flex items-center gap-1.5 text-[--color-brand-accent] hover:underline text-sm font-bold"
          >
            <Mail size={14} /> hola@cronicadigital.es
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-neutral-500 text-xs font-medium">
          <p>© {year} Crónica Digital. Todos los derechos reservados.</p>
          <p>Hecho con cuidado · Plantilla XYZ Digital</p>
        </div>
      </div>
    </footer>
  )
}
