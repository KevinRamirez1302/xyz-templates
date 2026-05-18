import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Comienza tu Aventura
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-6 leading-tight">
              ¿Listo para hacer las maletas?
            </h2>
            {/* Texto principal más oscuro para mayor legibilidad */}
            <p className="text-slate-900 mb-10 font-light leading-relaxed">
              Cuéntanos tu destino soñado, tus fechas ideales y con quién viajas. Nuestros expertos diseñarán un itinerario personalizado sin compromiso.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-sky-100 p-3 rounded-full text-secondary">
                  <Phone size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-primary">Llámanos</h3>
                  <p className="text-slate-900 mt-1">+34 900 123 456</p>
                  <p className="text-sm text-slate-500 mt-1">Lunes a Viernes, 9:00 - 19:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-sky-100 p-3 rounded-full text-secondary">
                  <Mail size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-primary">Escríbenos</h3>
                  <p className="text-slate-900 mt-1">contacto@travel-template.com</p>
                  <p className="text-sm text-slate-500 mt-1">Respondemos en menos de 24h</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-sky-100 p-3 rounded-full text-secondary">
                  <MapPin size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-primary">Visítanos</h3>
                  <p className="text-slate-900 mt-1">Calle Gran Vía 45, Planta 3<br/>28013 Madrid, España</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/40 shadow-lg">
            <h3 className="text-2xl font-serif text-primary mb-6">Solicita tu presupuesto</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                    placeholder="Ej. Ana García"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                    placeholder="ana@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-slate-900 mb-1">Destino de interés</label>
                <select 
                  id="destination" 
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-slate-800"
                >
                  <option>Europa</option>
                  <option>Asia y Pacífico</option>
                  <option>América</option>
                  <option>África y Safaris</option>
                  <option>Aún no lo he decidido</option>
                </select>
              </div>

              {/* Selector de fechas */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3 flex items-center gap-2">
                  <span>🗓️</span> Fechas del viaje
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="dateStart" className="block text-xs text-slate-500 mb-1 uppercase tracking-wider font-medium">Salida</label>
                    <div className="relative">
                      {/* Campo de fecha con texto oscuro dentro del input */}
                      <input
                        type="date"
                        id="dateStart"
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-slate-900 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="dateEnd" className="block text-xs text-slate-500 mb-1 uppercase tracking-wider font-medium">Regreso</label>
                    <div className="relative">
                      {/* Campo de fecha con texto oscuro dentro del input */}
                      <input
                        type="date"
                        id="dateEnd"
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors text-slate-900 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2">Si aún no tienes fechas, déjalo en blanco y nuestro equipo te ayudará.</p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1">Cuéntanos sobre tu viaje ideal</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none"
                  placeholder="¿Cuántas personas viajan? ¿Tipo de viaje (relax, aventura, cultura)?"
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="w-full bg-secondary text-white font-medium py-4 rounded-lg hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2"
              >
                Enviar Solicitud
                <Send size={18} />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
