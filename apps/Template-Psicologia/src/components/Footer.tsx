import { Brain, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary-light" />
              <span className="font-semibold text-xl text-white tracking-tight">
                Mente<span className="text-primary-light">Clara</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Acompañamiento psicológico profesional para ayudarte a encontrar el equilibrio y bienestar emocional que mereces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-primary-light transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary-light transition-colors">Sobre Mí</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary-light transition-colors">Servicios</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary-light transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Especialidades</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400">Terapia Individual</li>
              <li className="text-sm text-gray-400">Terapia de Pareja</li>
              <li className="text-sm text-gray-400">Ansiedad y Estrés</li>
              <li className="text-sm text-gray-400">Desarrollo Personal</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-light shrink-0" />
                <span className="text-sm">Calle de la Salud, 123, 3ºA<br/>28000 Madrid</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-light shrink-0" />
                <span className="text-sm">+34 600 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-light shrink-0" />
                <span className="text-sm">hola@menteclara.es</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MenteClara Psicología. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300">Aviso Legal</a>
            <a href="#" className="hover:text-gray-300">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
