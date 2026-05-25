import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    specialty: 'medicina-general',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: '¿Trabajan con seguros médicos o aseguradoras privadas?',
      a: 'Trabajamos con el sistema de libre elección y reembolso para la mayoría de aseguradoras internacionales. Adicionalmente, tenemos acuerdos directos concertados con las principales mutualidades privadas españolas (Sanitas, Adeslas, Mapfre, etc.). Por favor, consulta tu cobertura con administración antes de tu cita.'
    },
    {
      q: '¿Cómo funciona la primera consulta de valoración?',
      a: 'Es una sesión de diagnóstico extendido. El especialista analiza tu historial, realiza pruebas exploratorias físicas preliminares y diseña un plan terapéutico específico. La duración habitual es de 35 a 45 minutos para garantizar un análisis riguroso.'
    },
    {
      q: '¿Tienen parking concertado para pacientes?',
      a: 'Sí, disponemos de convenios con el parking subterráneo ubicado a 50 metros de la clínica. Ofrecemos 1 hora de estacionamiento gratuito para consultas generales y 2 horas para sesiones de fisioterapia y rehabilitación.'
    },
    {
      q: '¿Con cuánta antelación debo cancelar o posponer mi cita?',
      a: 'Solicitamos que cualquier modificación o cancelación se realice con un mínimo de 24 horas de antelación. Esto nos permite reasignar la franja horaria a pacientes en lista de espera médica.'
    },
    {
      q: '¿Cómo puedo solicitar una renovación de recetas médicas?',
      a: 'Si eres paciente habitual y tu tratamiento está pautado de forma crónica, puedes solicitar la renovación de recetas de manera digital enviándonos un mensaje a través del portal de paciente o llamando a secretaría.'
    }
  ]

  const updateContactField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const submitContactForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.parentName && formData.email && formData.phone) {
      setIsSubmitted(true)
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <main className="flex-1 animate-fade-in bg-white dark:bg-stone-950 transition-colors duration-300">
      
      {/* Page Header Hero Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-slate-200 dark:border-stone-850">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0F766E] dark:text-teal-400">Contacto</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight !margin-y-0 font-outfit">
            Contacto e Información Clínicas
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-500 dark:text-stone-300 leading-relaxed">
            Estamos a tu disposición para coordinar citas complejas, resolver dudas de cobertura o atender tus consultas administrativas.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info cards */}
      <section className="py-20 px-6 sm:px-8 bg-brand-alt dark:bg-[#0D1D1E] border-y border-border-teal dark:border-teal-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Contact details cards */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              
              <div className="rounded-xl bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-850 p-8 shadow-xs space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-outfit">
                  Datos del Centro
                </h2>
                
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/40 text-[#0F766E] dark:text-teal-400 border border-teal-100 dark:border-teal-900/50">
                      <MapPin className="h-5.5 w-5.5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">Dirección de la Clínica</h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400 mt-0.5">Paseo de la Castellana 250, 28046 Madrid, España</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/40 text-[#0F766E] dark:text-teal-400 border border-teal-100 dark:border-teal-900/50">
                      <Phone className="h-5.5 w-5.5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">Teléfono de Secretaría</h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400 mt-0.5">
                        <a href="tel:+34910123456" className="hover:underline text-slate-550 dark:text-stone-400 hover:text-[#0F766E] dark:hover:text-teal-400 transition-colors">+34 910 123 456</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/40 text-[#0F766E] dark:text-teal-400 border border-teal-100 dark:border-teal-900/50">
                      <Mail className="h-5.5 w-5.5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">Correo Electrónico</h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400 mt-0.5">
                        <a href="mailto:info@vitalissalud.com" className="hover:underline text-slate-550 dark:text-stone-400 hover:text-[#0F766E] dark:hover:text-teal-400 transition-colors">info@vitalissalud.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-650 dark:bg-stone-850 dark:text-stone-300 border border-slate-200 dark:border-stone-800">
                      <Clock className="h-5.5 w-5.5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">Horario de Atención</h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400 mt-0.5">Lunes a Viernes: 8:00 - 21:00 | Sábados: 9:00 - 13:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl border border-slate-200 dark:border-stone-800 bg-slate-50 dark:bg-stone-900 overflow-hidden shadow-xs h-64 relative group">
                <div className="absolute inset-0 bg-slate-100 dark:bg-stone-900 flex flex-col items-center justify-center text-center p-4">
                  <MapPin className="h-10 w-10 text-[#0F766E] dark:text-teal-400 animate-pulse mb-2" />
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Clínica Vitalis Madrid</p>
                  <p className="text-xs text-slate-500 dark:text-stone-400 mt-1">Simulación interactiva del mapa local</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1d4ed8] px-4 py-2 rounded-lg transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>

            </div>

            {/* Form card */}
            <div className="lg:col-span-7 rounded-xl bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-850 p-8 sm:p-10 shadow-xs">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-[#0F766E] dark:bg-teal-950/30 dark:text-teal-400 mb-2 border border-teal-100 dark:border-teal-900">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-outfit">
                    ¡Mensaje Recibido Correctamente!
                  </h2>
                  <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-500 dark:text-stone-450 leading-relaxed">
                    Muchas gracias por contactar con nosotros, <strong>{formData.parentName}</strong>. Nuestro equipo de administración responderá a tu consulta en un plazo máximo de 24 horas laborables.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ parentName: '', email: '', phone: '', specialty: 'medicina-general', message: '' })
                    }}
                    className="mt-6 inline-flex justify-center rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1d4ed8] focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={submitContactForm} className="space-y-6 text-left">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-outfit">
                      Formulario de Consulta General
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400 leading-relaxed">
                      Completa el formulario y nos comunicaremos contigo de inmediato. Todos los campos son obligatorios.
                    </p>
                  </div>

                  <div className="space-y-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="parentName" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400 text-left block">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={updateContactField}
                        placeholder="Ej. Carmen García López"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400 text-left block">
                          Correo electrónico
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={updateContactField}
                          placeholder="Ej. carmen@correo.com"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400 text-left block">
                          Teléfono de contacto
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={updateContactField}
                          placeholder="Ej. +34 600 123 456"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                        />
                      </div>

                    </div>

                    {/* Specialty Select */}
                    <div className="space-y-1.5">
                      <label htmlFor="specialty" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400 text-left block">
                        Especialidad de interés
                      </label>
                      <select
                        id="specialty"
                        name="specialty"
                        value={formData.specialty}
                        onChange={updateContactField}
                        className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                      >
                        <option value="medicina-general">Medicina General</option>
                        <option value="fisioterapia">Fisioterapia y Rehabilitación</option>
                        <option value="nutricion">Nutrición y Dietética</option>
                        <option value="pediatria">Pediatría Infantil</option>
                        <option value="otros">Otros (Consultas generales)</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400 text-left block">
                        Comentarios o mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={updateContactField}
                        placeholder="Escribe aquí los detalles de tu consulta médica o administrativa..."
                        className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-[#2563EB] resize-y font-sans"
                      />
                    </div>

                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] py-3.5 text-base font-semibold text-white shadow-sm hover:bg-[#1d4ed8] focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-colors duration-200"
                  >
                    Enviar Consulta
                    <Send className="h-4.5 w-4.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 border-t border-slate-200 dark:border-stone-850 px-6 sm:px-8 bg-white dark:bg-stone-950">
        <div className="mx-auto max-w-4xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-outfit">
              Preguntas Frecuentes (FAQ)
            </h2>
            <p className="text-slate-500 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
              Resolvemos de forma clara las consultas recurrentes de los nuevos pacientes antes del ingreso al centro.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isSelected = openFaq === idx
              return (
                <div 
                  key={faq.q}
                  className="rounded-xl border border-border-teal bg-brand-alt dark:border-stone-800 dark:bg-stone-900/50 overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white dark:hover:bg-stone-850/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                    aria-expanded={isSelected}
                    aria-controls={`faq-content-${idx}`}
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white pr-4">
                      {faq.q}
                    </h3>
                    {isSelected ? <ChevronDown className="h-5 w-5 text-slate-500" /> : <ChevronDown className="h-5 w-5 text-slate-400 rotate-270" />}
                  </button>

                  <div
                    id={`faq-content-${idx}`}
                    role="region"
                    className={`transition-all duration-300 ease-in-out border-slate-100 dark:border-stone-850 ${
                      isSelected ? 'max-h-60 border-t p-5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400 leading-relaxed text-left">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

    </main>
  )
}
