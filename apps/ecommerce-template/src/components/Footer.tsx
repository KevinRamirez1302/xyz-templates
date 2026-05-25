import React, { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-dark-bg border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-blue/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Upper footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, 'hero')}
              className="flex items-center gap-2 mb-6 group"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-electric-blue to-electric-purple p-[1px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-dark-bg rounded-[6px] flex items-center justify-center">
                  <span className="text-[10px] font-black tracking-widest text-electric-blue">N</span>
                </div>
              </div>
              <span className="font-display font-bold text-base tracking-wider text-white group-hover:text-electric-blue transition-colors duration-300">
                E-Commerce
              </span>
            </a>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm mb-6">
              Diseño, optimización y montaje de sistemas de alto rendimiento a medida. Cada microsegundo cuenta en la consecución de tus objetivos.
            </p>
          </div>

          {/* Sitemap links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold font-mono">Navegación</h4>
              <a
                href="#catalog"
                onClick={(e) => handleLinkClick(e, 'catalog')}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Catálogo Base
              </a>
              <a
                href="#features"
                onClick={(e) => handleLinkClick(e, 'features')}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Garantías
              </a>
              <a
                href="#configurator"
                onClick={(e) => handleLinkClick(e, 'configurator')}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Configurador Live
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold font-mono">Soporte</h4>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Asistencia Técnica
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Garantía In Situ
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Guías de Optimización
              </a>
            </div>
          </div>

          {/* Newsletter Input */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold font-mono mb-4">Core Newsletter</h4>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Mantente al día con los últimos lanzamientos de hardware y firmware tweaks.
              </p>
            </div>
            {subscribed ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 text-center">
                <span className="text-xs font-bold text-white block">Suscripción completada</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu dirección de correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 glass-effect pl-4 py-3 rounded-lg text-xs text-white focus:outline-none focus:border-electric-blue/50"
                />
                <button
                  type="submit"
                  className="btn-premium px-4 py-3 bg-white text-dark-bg font-bold text-xs uppercase tracking-wider rounded-lg shadow hover:bg-gray-200 transition-all cursor-pointer"
                >
                  Unirme
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10">
          
          {/* Legal Notice */}
          <div className="text-[10px] text-gray-600 font-mono text-center sm:text-left">
            © 2026 E-COMMERCE SYSTEMS SL. TODOS LOS DERECHOS RESERVADOS. DISEÑADO BAJO ESTÁNDARE DE HARDWARE EXTREMO.
          </div>

          {/* Social Links */}
          <div className="flex gap-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Discord">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="X">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}
