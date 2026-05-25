import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: 'casa-de-ninos',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: '¿Cuál es el ratio de alumnos por aula?',
      a: 'Nuestros ratios son sumamente reducidos para garantizar la atención individualizada: en Comunidad Infantil es de 1:5 (máximo 10 niños con guía y asistente), en Casa de Niños es de 1:10 (máximo 20 niños), y en Primaria (Taller I y II) es de 1:12 (máximo 24 niños).'
    },
    {
      q: '¿Cómo funciona el periodo de adaptación?',
      a: 'Es progresivo, flexible y sumamente respetuoso. Diseñamos un ingreso paulatino (habitualmente de 1 a 2 semanas) donde el niño asiste inicialmente periodos cortos, adaptando el ritmo según su nivel de confort y el establecimiento de vínculos seguros con sus guías.'
    },
    {
      q: '¿El colegio es laico?',
      a: 'Sí, Aura Academy es un centro laico. Educamos en valores universales de paz, multiculturalidad, tolerancia y ecología, respetando las creencias individuales y la diversidad espiritual de todas las familias.'
    },
    {
      q: '¿Ofrecen servicio de comedor?',
      a: 'Sí, disponemos de cocina propia. Elaboramos menús equilibrados y ecológicos diarios con ingredientes frescos de proximidad y opciones adaptadas a alergias, intolerancias alimentarias y dietas especiales (vegetariana, vegana, etc.).'
    },
    {
      q: '¿Se admiten matriculaciones a mitad de curso?',
      a: 'Siempre que dispongamos de vacantes libres en el ambiente adecuado, admitimos ingresos a mitad de curso académico previa entrevista pedagógica y periodo de observación del alumno en el aula.'
    }
  ]

  const updateContactField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const submitContactForm = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated API call validation
    if (formData.parentName && formData.email && formData.phone) {
      setIsSubmitted(true)
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <main className="flex-1 animate-fade-in bg-brand-cream dark:bg-brand-dark-bg transition-colors duration-300">
      
      {/* Page Header Hero Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-brand-border-light dark:border-brand-border-dark">
        {/* Background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
          style={{ backgroundImage: "url('/fondo-education.jpg')" }}
        />
        {/* Color overlay to ensure content readability */}
        <div className="absolute inset-0 bg-brand-cream/85 dark:bg-brand-dark-bg/90 -z-10 transition-colors duration-300" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-terracotta dark:text-brand-gold">Hablemos</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-charcoal dark:text-white leading-tight !margin-y-0">
            Contacto e Inscripciones
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            Estamos a tu entera disposición para resolver cualquier duda pedagógica o coordinar una visita a nuestro colegio.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Contact details cards */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              
              <div className="rounded-3xl bg-white dark:bg-brand-card-dark border border-brand-border-light dark:border-brand-border-dark p-8 shadow-sm space-y-6">
                <h2 className="text-2xl font-bold text-brand-charcoal dark:text-white">
                  Información de Interés
                </h2>
                
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-terracotta/10 text-brand-terracotta dark:bg-brand-terracotta/20 dark:text-brand-gold">
                      <MapPin className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-charcoal dark:text-white">Ubicación</h3>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-0.5">Paseo de la Castellana 250, 28046 Madrid, España</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-sage/10 text-brand-sage dark:bg-brand-sage/20 dark:text-brand-sage">
                      <Phone className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-charcoal dark:text-white">Teléfono</h3>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-0.5">
                        <a href="tel:+34910123456" className="hover:underline">+34 910 123 456</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold dark:bg-brand-gold/20 dark:text-brand-gold">
                      <Mail className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-charcoal dark:text-white">Correo Electrónico</h3>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-0.5">
                        <a href="mailto:info@auraacademy.com" className="hover:underline">info@auraacademy.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-750 dark:bg-stone-850 dark:text-stone-300">
                      <Clock className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-charcoal dark:text-white">Secretaría y Atención</h3>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-0.5">Lunes a Viernes: 8:30 - 17:30</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-3xl border border-brand-border-light bg-stone-100 overflow-hidden shadow-sm dark:border-brand-border-dark dark:bg-stone-900 h-64 relative group">
                {/* Simulated Map rendering */}
                <div className="absolute inset-0 bg-stone-200 dark:bg-stone-850 flex flex-col items-center justify-center text-center p-4">
                  <MapPin className="h-10 w-10 text-brand-terracotta animate-pulse mb-2" />
                  <p className="text-sm font-bold text-brand-charcoal dark:text-white">Aura Academy Madrid</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Simulación interactiva del mapa local</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 text-xs font-bold text-white bg-brand-terracotta px-4 py-2 rounded-lg hover:bg-brand-terracotta-dark transition-colors shadow-xs"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>

            </div>

            {/* Form card */}
            <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-brand-card-dark border border-brand-border-light dark:border-brand-border-dark p-8 sm:p-10 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-950/30 dark:text-green-400 mb-2">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-charcoal dark:text-white">
                    ¡Solicitud Recibida Correctamente!
                  </h2>
                  <p className="max-w-md mx-auto text-sm text-stone-605 dark:text-stone-400 leading-relaxed">
                    Muchas gracias por tu interés en Aura Academy, <strong>{formData.parentName}</strong>. Nuestro equipo de admisiones se pondrá en contacto contigo en un plazo máximo de 24 horas laborables.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ parentName: '', email: '', phone: '', childAge: 'casa-de-ninos', message: '' })
                    }}
                    className="mt-6 inline-flex justify-center rounded-xl bg-brand-terracotta px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-terracotta-dark focus-visible:ring-2 focus-visible:ring-brand-terracotta transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={submitContactForm} className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-brand-charcoal dark:text-white">
                      Formulario de Inscripción y Contacto
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                      Completa el formulario y nos comunicaremos contigo de inmediato. Todos los campos son obligatorios.
                    </p>
                  </div>

                  <div className="space-y-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="parentName" className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                        Nombre completo del tutor
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={updateContactField}
                        placeholder="Ej. Juan Pérez García"
                        className="w-full rounded-xl border border-stone-250 bg-stone-50/50 px-4 py-3 text-sm text-brand-charcoal dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                          Correo electrónico
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={updateContactField}
                          placeholder="Ej. juan@correo.com"
                          className="w-full rounded-xl border border-stone-250 bg-stone-50/50 px-4 py-3 text-sm text-brand-charcoal dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
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
                          className="w-full rounded-xl border border-stone-250 bg-stone-50/50 px-4 py-3 text-sm text-brand-charcoal dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                        />
                      </div>

                    </div>

                    {/* Child Age Category Select */}
                    <div className="space-y-1.5">
                      <label htmlFor="childAge" className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                        Programa de interés / Edad del niño
                      </label>
                      <select
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={updateContactField}
                        className="w-full rounded-xl border border-stone-250 bg-stone-50/50 px-4 py-3 text-sm text-brand-charcoal dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                      >
                        <option value="comunidad-infantil">Comunidad Infantil (1 - 3 años)</option>
                        <option value="casa-de-ninos">Casa de Niños (3 - 6 años)</option>
                        <option value="taller-1">Taller I - Primaria Baja (6 - 9 años)</option>
                        <option value="taller-2">Taller II - Primaria Alta (9 - 12 años)</option>
                        <option value="otros">Otros (Consultas generales)</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                        Comentarios o mensaje adicional
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={updateContactField}
                        placeholder="Por favor, indícanos detalles sobre la adaptación del alumno o posibles dudas particulares..."
                        className="w-full rounded-xl border border-stone-250 bg-stone-50/50 px-4 py-3 text-sm text-brand-charcoal dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-brand-terracotta resize-y"
                      />
                    </div>

                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-terracotta py-3.5 text-base font-bold text-white shadow-md hover:bg-brand-terracotta-dark focus-visible:ring-2 focus-visible:ring-brand-terracotta transition-colors duration-200"
                  >
                    Enviar Solicitud
                    <Send className="h-4.5 w-4.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white dark:bg-brand-dark-bg border-t border-brand-border-light dark:border-brand-border-dark transition-colors duration-300">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal dark:text-white">
              Preguntas Frecuentes (FAQ)
            </h2>
            <p className="text-stone-605 dark:text-stone-400 text-sm sm:text-base">
              Resolvemos de forma clara las consultas recurrentes de las nuevas familias antes del ingreso al centro.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isSelected = openFaq === idx
              return (
                <div 
                  key={faq.q}
                  className="rounded-2xl border border-brand-border-light bg-brand-cream dark:border-brand-border-dark dark:bg-brand-card-dark overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                    aria-expanded={isSelected}
                    aria-controls={`faq-content-${idx}`}
                  >
                    <h3 className="text-sm sm:text-base font-bold text-brand-charcoal dark:text-white pr-4">
                      {faq.q}
                    </h3>
                    {isSelected ? <ChevronUp className="h-5 w-5 text-stone-500" /> : <ChevronDown className="h-5 w-5 text-stone-500" />}
                  </button>

                  <div
                    id={`faq-content-${idx}`}
                    role="region"
                    className={`transition-all duration-300 ease-in-out border-stone-100 dark:border-stone-850 ${
                      isSelected ? 'max-h-60 border-t p-5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
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
