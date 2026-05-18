import { Link } from 'react-router-dom';
import { Globe, Mail, MessageCircle, Share2, Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="text-2xl font-serif text-white tracking-tighter flex items-center gap-2 mb-4">
              <Plane className="text-secondary" size={24} />
              TRAVEL<span className="text-secondary">TEMPLATE</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Plantilla de landing page lista para cocinar con tu propia marca y contenido.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Mail size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Share2 size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Descubre</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#destinations" className="hover:text-secondary transition-colors">Europa</a></li>
              <li><a href="#destinations" className="hover:text-secondary transition-colors">Asia y Pacífico</a></li>
              <li><a href="#destinations" className="hover:text-secondary transition-colors">América</a></li>
              <li><a href="#destinations" className="hover:text-secondary transition-colors">África y Safaris</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-secondary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Guías Locales</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Sostenibilidad</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Trabaja con Nosotros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Asistencia</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Seguros de Viaje</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Términos de Reserva</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Política de Cancelación</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Travel Template. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
