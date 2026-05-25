import React, { useState, useEffect, useRef } from 'react'
import { X, Send, CheckCircle2 } from 'lucide-react'

interface BookModalProps {
  onClose: () => void
}

export default function BookModal({ onClose }: BookModalProps) {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    specialty: 'medicina-general',
    date: '',
    comments: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus close button on mount
  useEffect(() => {
    closeButtonRef.current?.focus()
    // Lock body scroll when modal is open
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [])

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const updateField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.patientName && formData.email && formData.phone && formData.date) {
      setIsSubmitted(true)
    }
  }

  // Get today's date in YYYY-MM-DD format for date picker min attribute
  const getTodayDateString = () => {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    return `${yyyy}-${mm}-${dd}`
  }

  return (
    <dialog
      open
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 border-0 w-full h-full max-w-none max-h-none"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-6 sm:p-8 shadow-xl animate-scale-in max-h-[90vh] overflow-y-auto"
      >

        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-stone-850 dark:text-stone-500 transition-colors focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          aria-label="Cerrar ventana emergente"
        >
          <X className="size-5.5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="inline-flex size-14 items-center justify-center rounded-full bg-teal-50 text-[#0F766E] dark:bg-teal-950/30 dark:text-teal-400 mb-2 border border-teal-100 dark:border-teal-900">
              <CheckCircle2 className="size-9" />
            </div>
            <h2 id="modal-title" className="text-2xl font-semibold text-slate-900 dark:text-white font-outfit">
              ¡Cita Reservada con Éxito!
            </h2>
            <p className="text-xs sm:text-sm text-slate-650 dark:text-stone-400 leading-relaxed max-w-md mx-auto">
              Hemos registrado la solicitud de consulta para <strong>{formData.patientName}</strong>. En breve nos pondremos en contacto contigo en el correo <strong>{formData.email}</strong> o por teléfono para confirmar la hora exacta y el profesional asignado.
            </p>
            <button
              onClick={onClose}
              type="button"
              className="mt-6 inline-flex justify-center rounded-lg bg-[#2563EB] hover:bg-[#1d4ed8] px-6 py-3 text-sm font-semibold text-white shadow-sm focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-colors"
            >
              Cerrar ventana
            </button>
          </div>
        ) : (
          <form onSubmit={submitForm} className="space-y-5">
            <div className="space-y-1 pr-6">
              <h2 id="modal-title" className="text-2xl font-semibold text-slate-900 dark:text-white font-outfit">
                Solicitar Cita Médica
              </h2>
              <p className="text-xs text-slate-500 dark:text-stone-400">
                Por favor, completa los siguientes datos para reservar tu cita médica en nuestra clínica.
              </p>
            </div>

            <div className="space-y-3.5">

              {/* Patient Name */}
              <div className="space-y-1">
                <label htmlFor="patientName" className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400">
                  Nombre Completo del Paciente
                </label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  required
                  value={formData.patientName}
                  onChange={updateField}
                  placeholder="Ej. Carmen García López"
                  aria-label="Nombre del Paciente"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                />
              </div>

              {/* Contact Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                <div className="space-y-1">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={updateField}
                    placeholder="carmen@correo.com"
                    aria-label="Correo electrónico"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={updateField}
                    placeholder="+34 600 123 456"
                    aria-label="Teléfono"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  />
                </div>

              </div>

              {/* Select Specialty and Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                <div className="space-y-1">
                  <label htmlFor="specialty" className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400">
                    Especialidad
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={updateField}
                    aria-label="Especialidad Médica"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <option value="medicina-general">Medicina General</option>
                    <option value="fisioterapia">Fisioterapia y Rehab</option>
                    <option value="nutricion">Nutrición y Dietética</option>
                    <option value="pediatria">Pediatría Infantil</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="date" className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400">
                    Fecha Preferente
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={getTodayDateString()}
                    value={formData.date}
                    onChange={updateField}
                    aria-label="Fecha Preferente"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  />
                </div>

              </div>

              {/* Message / Comments */}
              <div className="space-y-1">
                <label htmlFor="comments" className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400">
                  Motivo de Consulta (Opcional)
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={3}
                  value={formData.comments}
                  onChange={updateField}
                  placeholder="Por favor, describe brevemente tus síntomas o el motivo de la cita..."
                  aria-label="Motivo de la consulta"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-[#2563EB] resize-none"
                />
              </div>

            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] py-3 text-sm font-semibold text-white shadow-md hover:bg-[#1d4ed8] focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-colors"
            >
              Confirmar Solicitud de Cita
              <Send className="size-4" />
            </button>
          </form>
        )}
      </div>
    </dialog>
  )
}
