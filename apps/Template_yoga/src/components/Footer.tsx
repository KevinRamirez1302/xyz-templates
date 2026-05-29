import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Flower2, ArrowRight, Heart } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-t border-brand-100/20 dark:border-zinc-900 transition-colors duration-300">
      
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <Link to="/" className="flex items-center gap-2 font-heading">
              <div className="flex size-9 items-center justify-center rounded-full bg-brand-500 text-white shadow-sm">
                <Flower2 className="size-4.5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-brand-950 dark:text-sand-50">
                Prana<span className="text-terracotta-500 font-light">Studio</span>
              </span>
            </Link>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
              Un santuario urbano de bienestar e integración física, mental y espiritual. Únete a nuestra comunidad para cultivar la calma en tu vida diaria.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="size-8 rounded-full bg-sand-100 dark:bg-zinc-900 flex items-center justify-center hover:bg-brand-500 dark:hover:bg-brand-500 hover:text-white transition-colors"
                aria-label="Sigue a Prana Studio en Instagram"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="size-8 rounded-full bg-sand-100 dark:bg-zinc-900 flex items-center justify-center hover:bg-brand-500 dark:hover:bg-brand-500 hover:text-white transition-colors"
                aria-label="Sigue a Prana Studio en Facebook"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="size-8 rounded-full bg-sand-100 dark:bg-zinc-900 flex items-center justify-center hover:bg-brand-500 dark:hover:bg-brand-500 hover:text-white transition-colors"
                aria-label="Suscríbete a Prana Studio en YouTube"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4 text-left">
            {/* Navigation links */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-zinc-900 dark:text-sand-100 uppercase tracking-widest">Estudio</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><Link to="/" className="hover:text-brand-500 transition-colors">Inicio</Link></li>
                <li><Link to="/nosotros" className="hover:text-brand-500 transition-colors">Nosotros</Link></li>
                <li><Link to="/clases" className="hover:text-brand-500 transition-colors">Clases</Link></li>
                <li><Link to="/horarios" className="hover:text-brand-500 transition-colors">Horarios</Link></li>
                <li><Link to="/precios" className="hover:text-brand-500 transition-colors">Tarifas</Link></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-zinc-900 dark:text-sand-100 uppercase tracking-widest">Legal</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="#legal" className="hover:text-brand-500 transition-colors">Aviso Legal</a></li>
                <li><a href="#privacidad" className="hover:text-brand-500 transition-colors">Política de Privacidad</a></li>
                <li><a href="#cookies" className="hover:text-brand-500 transition-colors">Política de Cookies</a></li>
                <li><a href="#condiciones" className="hover:text-brand-500 transition-colors">Condiciones Generales</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4 text-left w-full">
            <h4 className="text-xs font-bold text-zinc-900 dark:text-sand-100 uppercase tracking-widest">Inspiración en tu email</h4>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Recibe reflexiones semanales sobre meditación, rutinas saludables e información sobre talleres especiales.
            </p>
            
            {subscribed ? (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs font-semibold animate-fade-in">
                ¡Gracias por suscribirte! Te hemos enviado un correo de bienvenida.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="flex-grow min-w-0 px-4 py-2.5 text-xs border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-sand-100"
                  aria-label="Tu correo electrónico para la newsletter"
                />
                <button
                  type="submit"
                  className="bg-brand-500 hover:bg-brand-600 text-white p-2.5 rounded-xl transition-colors cursor-pointer flex items-center justify-center shrink-0 focus-visible:ring-2 focus-visible:ring-brand-500"
                  aria-label="Suscribirse a la newsletter"
                >
                  <ArrowRight className="size-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-brand-100/10 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-zinc-400">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Prana Yoga Studio. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado con <Heart className="size-3 fill-terracotta-500 text-terracotta-500 animate-pulse" /> para XYZ Digital.
          </p>
        </div>

      </div>
    </footer>
  )
}
