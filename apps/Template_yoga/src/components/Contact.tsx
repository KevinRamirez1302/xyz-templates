import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send } from 'lucide-react'
import Reveal from './Reveal'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedClass, setSelectedClass] = useState('Vinyasa Flow')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (name.trim() && email.trim() && phone.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section 
      id="contacto" 
      className="py-20 lg:py-24 bg-sand-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <h2 className="text-base font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
              Contacto
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-sand-50 font-heading">
              Reserva tu primera clase gratis
            </p>
            <div className="h-1 w-12 bg-terracotta-500 rounded-full mx-auto my-2"></div>
            <p className="text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
              Rellena el formulario con tus datos y el estilo de yoga que deseas probar. Nos pondremos en contacto contigo para confirmar tu plaza en menos de 24 horas.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Contact Details & Map Mock */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
            <Reveal direction="left" delay={150} className="h-full flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-sand-50 font-heading">
                  Detalles del Estudio
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-50 dark:bg-brand-950/20 text-brand-600 dark:text-brand-400 rounded-xl shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-800 dark:text-sand-100">Ubicación</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light">Calle de la Calma 108, Barrio de Salamanca, Madrid</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-50 dark:bg-brand-950/20 text-brand-600 dark:text-brand-400 rounded-xl shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-800 dark:text-sand-100">Teléfono</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light">+34 912 345 678 • +34 600 112 233</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-50 dark:bg-brand-950/20 text-brand-600 dark:text-brand-400 rounded-xl shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-800 dark:text-sand-100">Email</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light">hola@pranayogastudio.es</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-50 dark:bg-brand-950/20 text-brand-600 dark:text-brand-400 rounded-xl shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-800 dark:text-sand-100">Horario de Atención</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light">Lunes a Viernes: 08:00 - 22:00 • Sábados: 09:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stylized CSS Map Mock */}
              <div className="relative h-60 w-full bg-brand-100/40 dark:bg-zinc-900 border border-brand-100/20 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-inner flex flex-col justify-center items-center mt-8">
                {/* Map background grids and circles */}
                <div className="absolute inset-0 bg-[radial-gradient(#aa3bff05_1px,transparent_1px)] dark:bg-[radial-gradient(#c084fc05_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
                
                {/* Visual elements simulating roads/paths */}
                <div className="absolute top-1/3 left-0 right-0 h-4 bg-brand-200/10 dark:bg-zinc-800/20 transform -rotate-6"></div>
                <div className="absolute left-1/4 top-0 bottom-0 w-4 bg-brand-200/10 dark:bg-zinc-800/20 transform rotate-12"></div>
                
                {/* Wave effect around Pin */}
                <div className="absolute h-16 w-16 bg-brand-500/10 dark:bg-brand-400/10 rounded-full animate-ping"></div>
                <div className="absolute h-8 w-8 bg-brand-500/20 dark:bg-brand-400/20 rounded-full animate-pulse"></div>

                {/* Pin */}
                <div className="relative flex flex-col items-center">
                  <div className="h-10 w-10 bg-brand-500 text-white rounded-full flex items-center justify-center shadow-lg border border-white/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="bg-white dark:bg-zinc-950 px-3 py-1.5 rounded-lg shadow-md border border-brand-100/30 dark:border-zinc-800 mt-2 text-center">
                    <p className="text-[11px] font-bold text-zinc-900 dark:text-sand-100">Prana Studio</p>
                    <p className="text-[9px] text-zinc-400 dark:text-zinc-500">C. de la Calma, 108</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Booking Form Card */}
          <div className="lg:col-span-7 h-full">
            <Reveal direction="right" delay={200} className="h-full">
              <div className="bg-white dark:bg-zinc-900 border border-brand-100/10 dark:border-zinc-800/40 p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden h-full flex flex-col justify-center">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center space-y-6 py-12 animate-fade-in">
                    <div className="h-16 w-16 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 rounded-full flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-sand-50 font-heading">
                        ¡Solicitud Recibida!
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                        Gracias por tu interés, <strong>{name}</strong>. Hemos reservado temporalmente tu clase de <strong>{selectedClass}</strong>. 
                      </p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-sm mx-auto pt-2">
                        Te enviaremos los detalles de confirmación y acceso a <strong>{email}</strong> en los próximos minutos. ¡Nos vemos pronto en la esterilla!
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 bg-brand-50 dark:bg-zinc-800 rounded-xl transition-all"
                    >
                      Enviar otra solicitud
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                          Nombre Completo
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ej. Sofía Alarcón"
                          className="w-full px-4 py-3 text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-sand-100"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                          Teléfono
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Ej. 600123456"
                          className="w-full px-4 py-3 text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-sand-100"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                        Correo Electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ej. sofia@ejemplo.com"
                        className="w-full px-4 py-3 text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-sand-100"
                      />
                    </div>

                    {/* Class dropdown */}
                    <div className="space-y-1.5">
                      <label htmlFor="class-select" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                        Estilo de Yoga a Probar
                      </label>
                      <select
                        id="class-select"
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-sand-100"
                      >
                        <option value="Vinyasa Flow">Vinyasa Flow (Intermedio)</option>
                        <option value="Hatha Restore">Hatha Restore (Principiante)</option>
                        <option value="Yin Yoga & Meditación">Yin Yoga & Meditación (Todos)</option>
                        <option value="Ashtanga Yoga">Ashtanga Yoga (Avanzado)</option>
                        <option value="Yoga Prenatal">Yoga Prenatal (Principiante)</option>
                        <option value="Mindfulness & Zen">Mindfulness & Zen (Todos)</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                        ¿Tienes alguna lesión, embarazo o aclaración?
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Cuéntanos brevemente tu nivel o cualquier detalle que debamos saber..."
                        className="w-full px-4 py-3 text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-sand-100"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-brand-500/20 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-500"
                    >
                      <Send className="h-4 w-4" />
                      <span>Enviar Reserva de Clase Gratis</span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  )
}
