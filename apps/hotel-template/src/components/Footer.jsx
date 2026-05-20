import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Twitter, Check } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#111827] text-white pt-20 pb-10 border-t-4 border-[#c5a880]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#1f2937] via-[#111827] to-[#1f2937] border border-gray-800 p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden rounded-none">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#c5a880]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#c5a880] block mb-2">
                Privilegios Exclusivos
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                Suscríbase a nuestra Newsletter
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Reciba acceso prioritario a promociones privadas, paquetes de estancias de lujo e invitaciones a eventos gastronómicos en nuestro hotel.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Su dirección de correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-gray-900 border border-gray-700 py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c5a880] transition-colors rounded-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#c5a880] hover:bg-[#b0926a] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl rounded-none"
              >
                <span>Suscribirse</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Success Message */}
          {subscribed && (
            <div className="mt-6 bg-green-900/40 border border-green-500/50 p-4 flex items-center space-x-3 text-green-200">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm font-medium">¡Gracias por suscribirse! Hemos enviado un código de descuento exclusivo a su correo.</span>
            </div>
          )}
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-800">
          
          {/* Col 1: About & Info */}
          <div className="space-y-6">
            <a href="#" className="flex flex-col items-start group inline-block">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-widest uppercase text-white transition-colors group-hover:text-[#c5a880]">
                Hotel
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-light text-gray-400">
                Santa Cruz de Tenerife
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Un emblema de la hospitalidad urbana en Canarias. Elegancia contemporánea, vistas inigualables y un servicio enfocado en superar las expectativas de cada huésped.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#c5a880] text-gray-300 hover:text-white flex items-center justify-center transition-all shadow-md" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#c5a880] text-gray-300 hover:text-white flex items-center justify-center transition-all shadow-md" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#c5a880] text-gray-300 hover:text-white flex items-center justify-center transition-all shadow-md" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#c5a880] text-gray-300 hover:text-white flex items-center justify-center transition-all shadow-md" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Contact Details */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800 inline-block border-b-2 border-b-[#c5a880]">
              Contacto & Ubicación
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#c5a880] flex-shrink-0 mt-0.5" />
                <span>Calle Dr. José Naveiras, 24A, 38004 Santa Cruz de Tenerife, España</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <a href="tel:+34922276000" className="hover:text-[#c5a880] transition-colors">+34 922 276 000</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <a href="mailto:reservas@hotel.com" className="hover:text-[#c5a880] transition-colors">reservas@hotel.com</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800 inline-block border-b-2 border-b-[#c5a880]">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              {['El Hotel', 'Habitaciones & Suites', 'Restaurante Cayena', 'Piscina & Ático', 'Salones & Eventos', 'Ofertas Especiales'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="hover:text-[#c5a880] transition-colors flex items-center space-x-2">
                    <span className="text-[#c5a880]">▪</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal & Privacy */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800 inline-block border-b-2 border-b-[#c5a880]">
              Información Legal
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              {['Aviso Legal', 'Política de Privacidad', 'Política de Cookies', 'Condiciones de Reserva', 'Sostenibilidad', 'Preguntas Frecuentes'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-[#c5a880] transition-colors flex items-center space-x-2">
                    <span className="text-[#c5a880]">▪</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light">
          <p>© 2026 Hotel. Todos los derechos reservados.</p>
          <p className="mt-4 sm:mt-0 flex items-center space-x-1">
            <span>Diseñado con pasión para el sector hotelero y de lujo.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
