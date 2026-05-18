import React from 'react';
import { Package, Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a152c] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#ff4c00] p-2.5 rounded-xl shadow-md flex items-center justify-center">
                <Package className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-wider text-white flex items-center gap-1">
                  TRANSPORTE <span className="text-[#ff4c00]">EXPRESS</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                  Logística Internacional
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              Líderes en transporte de paquetería y carga internacional. Conectamos tus compras en Estados Unidos, Europa y Asia con toda Latinoamérica de forma rápida, segura y confiable.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="#fb" className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#ff4c00] text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#ig" className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#ff4c00] text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#tw" className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#ff4c00] text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#li" className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#ff4c00] text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Servicios */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide border-l-4 border-[#ff4c00] pl-3">Servicios</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><a href="#servicios" className="hover:text-[#ff4c00] transition-colors">Casillero Internacional</a></li>
              <li><a href="#servicios" className="hover:text-[#ff4c00] transition-colors">Carga Comercial Aérea</a></li>
              <li><a href="#servicios" className="hover:text-[#ff4c00] transition-colors">Envíos Marítimos</a></li>
              <li><a href="#servicios" className="hover:text-[#ff4c00] transition-colors">Servicio Puerta a Puerta</a></li>
              <li><a href="#servicios" className="hover:text-[#ff4c00] transition-colors">Aduana y Logística</a></li>
            </ul>
          </div>

          {/* Links Column 2: Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide border-l-4 border-[#ff4c00] pl-3">Enlaces Rápidos</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><a href="#rastreo" className="hover:text-[#ff4c00] transition-colors">Rastrear Paquete</a></li>
              <li><a href="#cotizador" className="hover:text-[#ff4c00] transition-colors">Cotizador de Tarifas</a></li>
              <li><a href="#registro" className="hover:text-[#ff4c00] transition-colors">Abre tu Casillero</a></li>
              <li><a href="#sucursales" className="hover:text-[#ff4c00] transition-colors">Red de Sucursales</a></li>
              <li><a href="#ayuda" className="hover:text-[#ff4c00] transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide border-l-4 border-[#ff4c00] pl-3">Atención al Cliente</h4>
            <div className="space-y-3 text-sm text-slate-400 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff4c00] shrink-0 mt-0.5" />
                <span>11250 NW 25th St, Suite 114, Miami, FL 33172, USA.</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#ff4c00] shrink-0" />
                <span>+1 (305) 500-9281</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#ff4c00] shrink-0" />
                <span>soporte@transporteexpress.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Transporte Express. Todos los derechos reservados. Clon desarrollado con fines demostrativos.</p>
          <div className="flex space-x-6">
            <a href="#privacidad" className="hover:text-slate-400 transition-colors">Políticas de Privacidad</a>
            <a href="#terminos" className="hover:text-slate-400 transition-colors">Términos y Condiciones</a>
            <a href="#legal" className="hover:text-slate-400 transition-colors">Aviso Legal</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
