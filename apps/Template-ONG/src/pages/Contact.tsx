import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, User, Compass, HelpCircle as HelpIcon } from 'lucide-react';
import SEO from '../components/SEO';

type SubjectType = 'general' | 'volunteer' | 'corporate';

export default function Contact() {
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState<SubjectType>('general');
  const [message, setMessage] = useState('');
  
  // Volunteer dynamic fields
  const [interestArea, setInterestArea] = useState('reforestation');
  const [availability, setAvailability] = useState('weekends');
  
  // Validation and Status
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Map Mockup State
  const [activeOffice, setActiveOffice] = useState<'central' | 'vivero'>('central');

  const officeDetails = {
    central: {
      title: 'Oficina Central EcoVida',
      address: 'Av. de la Biodiversidad 123, Ciudad de la Tierra',
      phone: '+34 912 345 678',
      hours: 'Lunes a Viernes: 9:00 - 18:00',
      coordinates: '40.4167° N, 3.7037° W',
    },
    vivero: {
      title: 'Vivero Forestal y Centro de Conservación',
      address: 'Camino Forestal Km 4.2, Sierra Verde',
      phone: '+34 912 345 679',
      hours: 'Sábados y Domingos: 8:00 - 14:00 (Jornadas de Voluntariado)',
      coordinates: '40.5892° N, 3.8211° W',
    },
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) {
      tempErrors.name = 'El nombre es obligatorio.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      tempErrors.email = 'Introduce un correo electrónico válido.';
    }
    if (!message.trim()) {
      tempErrors.message = 'Por favor, escribe un mensaje.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setSubject('general');
    setMessage('');
    setInterestArea('reforestation');
    setAvailability('weekends');
    setErrors({});
  };

  return (
    <>
      <SEO 
        title="Contacto y Voluntariado" 
        description="Ponte en contacto con EcoVida o únete como voluntario ecológico en nuestras brigadas de reforestación y conservación ambiental." 
      />

      <section id="contact-section" className="relative pt-32 pb-20 bg-slate-900/50 dark:bg-slate-900/50 min-h-screen transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-500 border border-brand-500/20">
              📞 Estamos aquí para escucharte
            </span>
            <h1 id="contact-heading" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-white mt-3 font-display">
              Contáctanos o Hazte Voluntario
            </h1>
            <p className="mt-3 text-slate-400 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              ¿Tienes alguna duda, deseas proponer una alianza corporativa o unirte a nuestras brigadas? Escríbenos y responderemos lo antes posible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Columns: Contact Details & Map (5/12 width) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct channels cards */}
              <div className="grid grid-cols-1 gap-4">
                
                <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start space-x-4">
                  <div className="p-3 bg-brand-100 dark:bg-brand-950 text-brand-500 rounded-xl shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100 dark:text-white font-display">Escríbenos</h3>
                    <p className="text-xs text-slate-400 dark:text-slate-400 mt-1">Responderemos en menos de 24h laborables.</p>
                    <a href="mailto:contacto@ecovida-ong.org" className="text-brand-500 hover:underline text-sm font-semibold mt-1.5 block">
                      contacto@ecovida-ong.org
                    </a>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-slate-700 dark:border-slate-800 flex items-start space-x-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100 dark:text-white font-display">Llámanos</h3>
                    <p className="text-xs text-slate-400 dark:text-slate-400 mt-1">Lunes a viernes de 9:00 a 18:00.</p>
                    <a href="tel:+34912345678" className="text-emerald-600 dark:text-emerald-400 hover:underline text-sm font-semibold mt-1.5 block">
                      +34 912 345 678
                    </a>
                  </div>
                </div>

              </div>

              {/* Interactive Map Simulator */}
              <div className="glass-card p-6 rounded-3xl border border-slate-700 dark:border-slate-800 space-y-4">
                <h3 className="text-lg font-bold text-slate-100 dark:text-white font-display flex items-center gap-1.5">
                  <Compass className="h-5 w-5 text-brand-500" />
                  Ubicación de Centros
                </h3>

                {/* Switch Office Tab */}
                <div className="flex bg-slate-700 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
                  <button
                    id="office-central-btn"
                    type="button"
                    onClick={() => setActiveOffice('central')}
                    className={`flex-1 text-center py-2 rounded-lg transition-all ${
                      activeOffice === 'central'
                        ? 'bg-slate-600 dark:bg-slate-700 text-white dark:text-white shadow-sm'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
                    }`}
                  >
                    Oficina Central
                  </button>
                  <button
                    id="office-vivero-btn"
                    type="button"
                    onClick={() => setActiveOffice('vivero')}
                    className={`flex-1 text-center py-2 rounded-lg transition-all ${
                      activeOffice === 'vivero'
                        ? 'bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-sm'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
                    }`}
                  >
                    Vivero Sierra Verde
                  </button>
                </div>

                {/* Simulated Map Visual representation */}
                <div className="relative bg-slate-200 dark:bg-slate-800 h-44 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 flex items-center justify-center">
                  {/* Grid pattern mock map */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  
                  {/* Simulated paths/rivers */}
                  <div className="absolute w-2/3 h-2 bg-blue-400/30 rounded-full blur-sm transform -rotate-12"></div>
                  <div className="absolute w-1/2 h-4 bg-emerald-400/10 rounded-full blur-md bottom-8 right-4"></div>

                  {/* Marker Pin */}
                  <div className="relative z-10 flex flex-col items-center animate-bounce">
                    <MapPin className="h-8 w-8 text-brand-500 fill-brand-100" />
                    <div className="w-2.5 h-1 bg-slate-900/30 dark:bg-slate-950/50 rounded-full blur-xs mt-0.5"></div>
                  </div>

                  <span className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    GPS: {officeDetails[activeOffice].coordinates}
                  </span>
                </div>

                {/* Active Office Details */}
                <div id="office-details-panel" className="text-xs space-y-2 text-slate-600 dark:text-slate-400">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {officeDetails[activeOffice].title}
                  </h4>
                  <p className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-brand-500 shrink-0" />
                    <span>{officeDetails[activeOffice].address}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-brand-500 shrink-0" />
                    <span>{officeDetails[activeOffice].phone}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <HelpIcon className="h-3.5 w-3.5 text-brand-500 shrink-0" />
                    <span>{officeDetails[activeOffice].hours}</span>
                  </p>
                </div>

              </div>

            </div>

            {/* Right Columns: Forms (7/12 width) */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                /* Success Feedback Block */
                <div
                  id="contact-success-card"
                  className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-5"
                >
                  <div className="inline-flex p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                    {subject === 'volunteer' ? '¡Registro de Voluntariado Recibido!' : '¡Mensaje Enviado con Éxito!'}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
                    {subject === 'volunteer' 
                      ? 'Gracias por unirte a EcoVida. Un coordinador de brigadas revisará tus preferencias de disponibilidad y se pondrá en contacto contigo en las próximas 48 horas.'
                      : 'Hemos recibido tu consulta técnica o sugerencia. Te responderemos con la información solicitada al correo electrónico proporcionado en un plazo de 24 a 48 horas.'}
                  </p>
                  <div className="pt-4">
                    <button
                      id="contact-reset-btn"
                      type="button"
                      onClick={handleReset}
                      className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-2.5 px-6 rounded-full shadow transition-colors text-sm"
                    >
                      Enviar otro Mensaje
                    </button>
                  </div>
                </div>
              ) : (
                /* Form structure */
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-5"
                  noValidate
                >
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display border-b border-slate-100 dark:border-slate-800 pb-3">
                    Formulario de Contacto
                  </h2>

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Nombre Completo
                      </label>
                      <div className="relative rounded-xl border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-brand-500 transition-all bg-white dark:bg-slate-800">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Tu nombre"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          className="block w-full py-2.5 pl-10 pr-3 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-xs sm:text-sm"
                          required
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Correo Electrónico
                      </label>
                      <div className="relative rounded-xl border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-brand-500 transition-all bg-white dark:bg-slate-800">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="ejemplo@correo.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          className="block w-full py-2.5 pl-10 pr-3 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-xs sm:text-sm"
                          required
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Motivo del Mensaje
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value as SubjectType)}
                      className="block w-full py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-slate-800 text-xs sm:text-sm"
                    >
                      <option value="general">Consulta General / Sugerencia</option>
                      <option value="volunteer">Quiero ser Voluntario (Brigadas)</option>
                      <option value="corporate">Alianza Corporativa / RSE</option>
                    </select>
                  </div>

                  {/* Dynamic Fields for Volunteer */}
                  {subject === 'volunteer' && (
                    <div id="volunteer-extra-fields" className="bg-brand-500/5 border border-brand-500/10 p-4 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                      <div className="space-y-1.5">
                        <label htmlFor="volunteer-interest" className="block text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-wider">
                          Área de Interés
                        </label>
                        <select
                          id="volunteer-interest"
                          value={interestArea}
                          onChange={(e) => setInterestArea(e.target.value)}
                          className="block w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white bg-white dark:bg-slate-800 text-xs"
                        >
                          <option value="reforestation">Reforestación Bosques</option>
                          <option value="oceans">Limpieza Costera</option>
                          <option value="education">Talleres Escolares</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="volunteer-availability" className="block text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-wider">
                          Disponibilidad
                        </label>
                        <select
                          id="volunteer-availability"
                          value={availability}
                          onChange={(e) => setAvailability(e.target.value)}
                          className="block w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white bg-white dark:bg-slate-800 text-xs"
                        >
                          <option value="weekends">Fines de semana (Brigadas)</option>
                          <option value="weekdays">Días laborables (Eventos)</option>
                          <option value="flexible">Flexible / Puntual</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Message Area */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Mensaje / Comentario
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder={
                        subject === 'volunteer'
                          ? 'Cuéntanos un poco sobre ti, por qué quieres unirte o si tienes experiencia previa...'
                          : 'Escribe tu duda o propuesta detalladamente...'
                      }
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className="block w-full py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-slate-800 text-xs sm:text-sm"
                      required
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-brand-500 hover:bg-brand-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-brand-500/10 transform hover:-translate-y-0.5 transition-all text-xs sm:text-sm"
                  >
                    <Send className="h-4 w-4" />
                    <span>Enviar Formulario</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
