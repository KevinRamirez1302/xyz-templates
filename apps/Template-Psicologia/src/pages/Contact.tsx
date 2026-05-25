import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  return (
    <div className="min-h-screen pt-28 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Contacto</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Hablemos</h1>
          <p className="text-lg text-gray-600">
            ¿Tienes alguna duda o quieres saber más sobre cómo puedo ayudarte? Rellena el formulario o contáctame directamente y te responderé lo antes posible.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Contact Info */}
          <ScrollReveal className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ubicación</h4>
                    <p className="text-gray-600 mt-1">Calle de la Salud, 123, 3ºA<br/>28000 Madrid</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600 mt-1">+34 600 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600 mt-1">hola@menteclara.es</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horario</h4>
                    <p className="text-gray-600 mt-1">Lunes a Viernes<br/>10:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Mensaje enviado (Mockup)"); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Ej. María García"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Ej. 600 000 000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Asunto</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white"
                  >
                    <option value="">Selecciona un motivo</option>
                    <option value="duda">Duda sobre la terapia</option>
                    <option value="presupuesto">Información de tarifas</option>
                    <option value="colaboracion">Propuesta de colaboración</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="¿En qué te puedo ayudar?"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Enviar Mensaje <Send className="h-5 w-5" />
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Tus datos serán tratados con absoluta confidencialidad.
                </p>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
};

export default Contact;
