import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Youtube, Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Por favor, ingresa un correo electrónico.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-400 border-t border-slate-800 transition-colors">
      {/* Upper Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Info and Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-brand-500 fill-brand-900" />
              <span className="text-2xl font-bold font-display text-white">
                Eco<span className="text-brand-500">Vida</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Somos una organización sin fines de lucro dedicada a proteger la biodiversidad, restaurar ecosistemas y educar para construir un futuro sustentable en armonía con la naturaleza.
            </p>
            <div className="flex space-x-4">
              <a
                id="social-link-facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors p-2 bg-slate-800 rounded-full hover:bg-slate-700"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                id="social-link-twitter"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors p-2 bg-slate-800 rounded-full hover:bg-slate-700"
                aria-label="Twitter/X"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                id="social-link-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors p-2 bg-slate-800 rounded-full hover:bg-slate-700"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                id="social-link-youtube"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition-colors p-2 bg-slate-800 rounded-full hover:bg-slate-700"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-white font-semibold font-display text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link id="footer-link-home" to="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link id="footer-link-about" to="/about" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link id="footer-link-projects" to="/projects" className="hover:text-white transition-colors">
                  Proyectos Activos
                </Link>
              </li>
              <li>
                <Link id="footer-link-donate" to="/donate" className="hover:text-white transition-colors font-semibold text-brand-500">
                  Donaciones
                </Link>
              </li>
              <li>
                <Link id="footer-link-contact" to="/contact" className="hover:text-white transition-colors">
                  Contacto y Voluntariado
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold font-display text-lg mb-6">Contacto</h3>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
              <span>Av. de la Biodiversidad 123, Ciudad de la Tierra, C.P. 28001</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="h-5 w-5 text-brand-500 shrink-0" />
              <span>+34 912 345 678</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="h-5 w-5 text-brand-500 shrink-0" />
              <span>contacto@ecovida-ong.org</span>
            </div>
          </div>

          {/* Column 4: Newsletter Subscriber */}
          <div>
            <h3 className="text-white font-semibold font-display text-lg mb-6">Boletín Informativo</h3>
            <p className="text-sm leading-relaxed mb-4">
              Suscríbete para recibir noticias sobre campañas de reforestación, eventos de limpieza y reportes de impacto.
            </p>
            {submitted ? (
              <div id="newsletter-success-msg" className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-sm">
                ¡Gracias por suscribirte! Revisa tu correo electrónico para confirmar.
              </div>
            ) : (
              <form id="newsletter-form" onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    id="newsletter-email-input"
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    aria-label="Correo electrónico para boletín"
                  />
                  <button
                    id="newsletter-submit-btn"
                    type="submit"
                    className="absolute right-1 top-1 bg-brand-500 hover:bg-brand-600 text-white rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                    aria-label="Suscribirse"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                {error && (
                  <p id="newsletter-error-msg" className="text-red-400 text-xs pl-2">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="border-t border-slate-800 py-8 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} EcoVida. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Transparencia Financiera</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
