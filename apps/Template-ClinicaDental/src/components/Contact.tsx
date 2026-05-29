import { useState, useRef, useEffect, type FormEvent } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Shield,
  CalendarDays,
} from 'lucide-react'

const SERVICES = [
  'Selecciona un servicio',
  'Implantes Dentales',
  'Ortodoncia',
  'Blanqueamiento Dental',
  'Estética & Carillas',
  'Endodoncia',
  'Revisión & Limpieza',
  'Urgencia Dental',
  'Otro',
]

const HOURS = [
  { day: 'Lunes – Viernes', time: '9:00 – 20:00' },
  { day: 'Sábado', time: '10:00 – 14:00' },
  { day: 'Domingo', time: 'Cerrado' },
]

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Template: replace with real form submission logic
    setSubmitted(true)
  }

  return (
    <section
      id="contacto"
      className="section section-alt"
      ref={sectionRef}
      aria-label="Contacto y cita previa"
    >
      <div className="container">
        <div className="contact-inner">
          {/* Info Column */}
          <div className="contact-info reveal">
            <div className="section-badge" aria-hidden="true">
              <CalendarDays size={12} />
              Contacto
            </div>
            <h2 className="section-title">
              Pide tu cita{' '}
              <span className="gradient-text">hoy mismo</span>
            </h2>
            <p className="section-desc">
              Estamos aquí para resolver todas tus dudas. Contáctanos y
              te atenderemos lo antes posible.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-detail-label">Dirección</div>
                  <div className="contact-detail-value">
                    Calle Gran Vía, 45, 1ª Planta<br />28013 Madrid, España
                  </div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-detail-label">Teléfono</div>
                  <div className="contact-detail-value">
                    <a
                      href="tel:+34912345678"
                      style={{ color: 'inherit' }}
                      aria-label="Llamar al +34 91 234 56 78"
                    >
                      +34 91 234 56 78
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <div className="contact-detail-value">
                    <a
                      href="mailto:info@dentalpro.es"
                      style={{ color: 'inherit' }}
                    >
                      info@dentalpro.es
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-hours-card">
              <div className="contact-hours-title">
                <Clock size={16} aria-hidden="true" />
                Horario de atención
                <span className="status-dot" aria-label="Abierto ahora" />
              </div>
              <ul aria-label="Horarios de la clínica">
                {HOURS.map((h) => (
                  <li key={h.day} className="contact-hours-row">
                    <span className="hours-day">{h.day}</span>
                    <span className="hours-time">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-card reveal reveal-delay-2">
            {submitted ? (
              <div
                style={{ textAlign: 'center', padding: '40px 0' }}
                role="alert"
                aria-live="polite"
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: '#d1fae5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: '#059669',
                  }}
                  aria-hidden="true"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '10px', color: '#111827' }}>
                  ¡Solicitud enviada!
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '24px' }}>
                  Nos pondremos en contacto contigo en menos de 24 horas para
                  confirmar tu cita.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Solicitar Cita</h3>
                <p className="contact-form-sub">
                  Primera consulta gratuita · Sin compromiso
                </p>

                <form onSubmit={handleSubmit} noValidate aria-label="Formulario de solicitud de cita">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">
                        Nombre completo *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="Ej: María García"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        aria-required="true"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">
                        Teléfono *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="Ej: 612 345 678"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="Ej: maria@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      aria-required="true"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-service">
                      Servicio de interés
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      className="form-select"
                      value={form.service}
                      onChange={handleChange}
                      aria-label="Seleccionar servicio de interés"
                    >
                      {SERVICES.map((s) => (
                        <option key={s} value={s === 'Selecciona un servicio' ? '' : s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-textarea"
                      placeholder="Cuéntanos brevemente tu caso o consulta…"
                      value={form.message}
                      onChange={handleChange}
                      aria-label="Mensaje o consulta"
                    />
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    className="form-submit"
                    aria-label="Enviar solicitud de cita"
                  >
                    <Send size={16} aria-hidden="true" />
                    Solicitar Cita Gratuita
                  </button>

                  <p className="form-privacy" aria-label="Política de privacidad">
                    <Shield size={12} aria-hidden="true" />
                    Tus datos están protegidos según el RGPD. No compartimos información con terceros.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Embedded map placeholder */}
        <div
          style={{
            marginTop: '60px',
            borderRadius: '20px',
            overflow: 'hidden',
            height: '300px',
            background: '#e5e7eb',
            position: 'relative',
          }}
          aria-label="Mapa de ubicación de DentalPro Clínica"
        >
          <iframe
            title="Ubicación DentalPro Clínica — Gran Vía 45, Madrid"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5530556174644!2d-3.7030048843776064!3d40.42006147935814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228917de1bc7b%3A0x8c14a1e5a1d1be5!2sGran%20V%C3%ADa%2C%2045%2C%2028013%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
