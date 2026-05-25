import React, { useState, useEffect, useRef } from 'react'
import { X, Send, CheckCircle2 } from 'lucide-react'

interface EnrollModalProps {
  onClose: () => void
}

export default function EnrollModal({ onClose }: EnrollModalProps) {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    email: '',
    phone: '',
    program: 'casa-de-ninos'
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

  const updateEnrollmentField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const submitEnrollmentForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.parentName && formData.childName && formData.email && formData.phone) {
      setIsSubmitted(true)
    }
  }

  return (
    <dialog
      open
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs transition-opacity duration-300 border-0 w-full h-full max-w-none max-h-none"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-brand-card-dark border border-brand-border-light dark:border-brand-border-dark p-6 sm:p-8 shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto"
      >

        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 rounded-lg p-2 text-stone-500 hover:bg-stone-100 dark:hover:bg-brand-border-dark dark:text-stone-400 transition-colors focus-visible:ring-2 focus-visible:ring-brand-terracotta"
          aria-label="Cerrar ventana emergente"
        >
          <X className="size-5.5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="inline-flex size-14 items-center justify-center rounded-full bg-green-150 text-green-600 dark:bg-green-950/30 dark:text-green-400 mb-2">
              <CheckCircle2 className="size-9" />
            </div>
            <h2 id="modal-title" className="text-2xl font-semibold text-brand-charcoal dark:text-white font-outfit">
              ¡Pre-inscripción Recibida!
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-md mx-auto">
              Hemos registrado la solicitud para <strong>{formData.childName}</strong> correctamente. En breve nos pondremos en contacto contigo en el correo <strong>{formData.email}</strong> para concertar la entrevista pedagógica.
            </p>
            <button
              onClick={onClose}
              type="button"
              className="mt-6 inline-flex justify-center rounded-xl bg-brand-terracotta px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-brand-terracotta-dark focus-visible:ring-2 focus-visible:ring-brand-terracotta transition-colors"
            >
              Cerrar ventana
            </button>
          </div>
        ) : (
          <form onSubmit={submitEnrollmentForm} className="space-y-5">
            <div className="space-y-1 pr-6">
              <h2 id="modal-title" className="text-2xl font-semibold text-brand-charcoal dark:text-white font-outfit">
                Inscribir Alumno
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Inicia el proceso rellenando los datos del menor y tutor.
              </p>
            </div>

            <div className="space-y-3.5">

              {/* Parent Name */}
              <div className="space-y-1">
                <label htmlFor="parentName" className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Nombre del Tutor
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={updateEnrollmentField}
                  placeholder="Ej. Juan Pérez"
                  aria-label="Nombre del Tutor"
                  className="w-full rounded-xl border border-stone-250 bg-stone-50/50 px-3.5 py-2.5 text-xs text-brand-charcoal dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                />
              </div>

              {/* Child Name */}
              <div className="space-y-1">
                <label htmlFor="childName" className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Nombre completo del Alumno
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  required
                  value={formData.childName}
                  onChange={updateEnrollmentField}
                  placeholder="Ej. Mateo Pérez"
                  aria-label="Nombre completo del Alumno"
                  className="w-full rounded-xl border border-stone-250 bg-stone-50/50 px-3.5 py-2.5 text-xs text-brand-charcoal dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                />
              </div>

              {/* Contact Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                <div className="space-y-1">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={updateEnrollmentField}
                    placeholder="juan@correo.com"
                    aria-label="Correo electrónico"
                    className="w-full rounded-xl border border-stone-250 bg-stone-50/50 px-3.5 py-2.5 text-xs text-brand-charcoal dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={updateEnrollmentField}
                    placeholder="+34 600 123 456"
                    aria-label="Teléfono"
                    className="w-full rounded-xl border border-stone-250 bg-stone-50/50 px-3.5 py-2.5 text-xs text-brand-charcoal dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                  />
                </div>

              </div>

              {/* Select Program */}
              <div className="space-y-1">
                <label htmlFor="program" className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Programa Académico
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={updateEnrollmentField}
                  aria-label="Programa Académico"
                  className="w-full rounded-xl border border-stone-250 bg-stone-50/50 px-3.5 py-2.5 text-xs text-brand-charcoal dark:border-stone-800 dark:bg-stone-900/50 dark:text-white focus:bg-white focus:outline-hidden dark:focus:bg-stone-900 focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                >
                  <option value="comunidad-infantil">Comunidad Infantil (1 - 3 años)</option>
                  <option value="casa-de-ninos">Casa de Niños (3 - 6 años)</option>
                  <option value="taller-1">Taller I - Primaria (6 - 9 años)</option>
                  <option value="taller-2">Taller II - Primaria (9 - 12 años)</option>
                </select>
              </div>

            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-terracotta py-3 text-sm font-bold text-white shadow-md hover:bg-brand-terracotta-dark focus-visible:ring-2 focus-visible:ring-brand-terracotta transition-colors"
            >
              Enviar Pre-inscripción
              <Send className="size-4" />
            </button>
          </form>
        )}
      </div>
    </dialog>
  )
}
