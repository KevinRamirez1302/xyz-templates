import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

interface FormState { nombre: string; email: string; telefono: string; servicio: string; mensaje: string }
const initialForm: FormState = { nombre: '', email: '', telefono: '', servicio: '', mensaje: '' }

const horarios = [
  { dia: 'Lunes – Viernes', hora: '9:00 – 20:00' },
  { dia: 'Sábados', hora: '9:00 – 18:00' },
  { dia: 'Domingos', hora: 'Cerrado' },
]

export default function Contact() {
  const [form, setForm]     = useState<FormState>(initialForm)
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = (): boolean => {
    const e: Partial<FormState> = {}
    if (!form.nombre.trim())  e.nombre  = 'El nombre es obligatorio'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email no válido'
    if (!form.servicio)       e.servicio = 'Selecciona un servicio'
    if (!form.mensaje.trim()) e.mensaje  = 'Escribe tu mensaje'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1400)
  }

  const fieldStyle = (hasError: boolean) => ({
    width: '100%',
    padding: '13px 16px',
    borderRadius: '10px',
    border: `1px solid ${hasError ? '#c9908a' : 'var(--color-blush)'}`,
    background: '#fff',
    fontSize: '0.9rem',
    color: 'var(--color-charcoal)',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'border-color 0.25s',
    boxSizing: 'border-box' as const,
  })

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-charcoal)',
    marginBottom: '6px',
  }

  return (
    <main id="main-content">
      {/* Hero */}
      <section id="contact-hero" style={{ background: 'linear-gradient(135deg, var(--color-blush) 0%, var(--color-cream) 100%)', padding: '160px 24px 80px', textAlign: 'center' }} aria-label="Encabezado contacto">
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '16px' }}>Estamos aquí</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: 300, color: 'var(--color-charcoal)', lineHeight: 1.15, marginBottom: '24px' }}>
            Reserva tu cita y<br /><em style={{ color: 'var(--color-rose-dark)', fontStyle: 'italic' }}>empieza a brillar</em>
          </h1>
          <div className="divider-gold" aria-hidden="true" style={{ margin: '24px auto' }} />
        </div>
      </section>

      {/* Content */}
      <section id="contact-body" className="section-pad" style={{ background: 'var(--color-cream)' }} aria-label="Formulario y datos de contacto">
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '64px', alignItems: 'start' }} className="contact-grid">

          {/* Info */}
          <aside aria-label="Información de contacto">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-charcoal)', marginBottom: '32px' }}>Encuéntranos</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              <a href="tel:+34912345678" id="contact-phone" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--color-blush), var(--color-gold-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={18} style={{ color: 'var(--color-rose-dark)' }} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-muted)', marginBottom: '4px' }}>Teléfono</div>
                  <div style={{ fontSize: '1rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>+34 912 345 678</div>
                </div>
              </a>

              <a href="mailto:hola@lumiere-beauty.es" id="contact-email" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--color-blush), var(--color-gold-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={18} style={{ color: 'var(--color-rose-dark)' }} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-muted)', marginBottom: '4px' }}>Email</div>
                  <div style={{ fontSize: '1rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>hola@lumiere-beauty.es</div>
                </div>
              </a>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--color-blush), var(--color-gold-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={18} style={{ color: 'var(--color-rose-dark)' }} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-muted)', marginBottom: '4px' }}>Dirección</div>
                  <address style={{ fontStyle: 'normal', fontSize: '1rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>Calle Serrano 42<br />28001 Madrid</address>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid var(--color-blush)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Clock size={16} style={{ color: 'var(--color-gold)' }} aria-hidden="true" />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>Horario</span>
              </div>
              {horarios.map(({ dia, hora }) => (
                <div key={dia} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--color-blush)', fontSize: '0.875rem' }}>
                  <span style={{ color: 'var(--color-muted)' }}>{dia}</span>
                  <span style={{ color: 'var(--color-charcoal)', fontWeight: 500 }}>{hora}</span>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginTop: '24px', height: '200px', background: 'var(--color-blush)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <iframe
                title="Mapa de Lumière Beauty Studio en Madrid"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.046!2d-3.6868!3d40.4244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzI3LjkiTiAzwrA0MSc3Mi4zIlc!5e0!3m2!1ses!2ses!4v1"
                width="100%" height="200" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          {/* Form */}
          <div>
            {sent ? (
              <div id="contact-success" style={{ background: '#fff', borderRadius: '20px', padding: '56px 40px', textAlign: 'center', boxShadow: '0 8px 32px rgba(44,36,32,0.08)', border: '1px solid var(--color-blush)' }} role="alert" aria-live="polite">
                <CheckCircle size={56} style={{ color: 'var(--color-gold)', marginBottom: '20px' }} aria-hidden="true" />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-charcoal)', marginBottom: '16px' }}>¡Mensaje enviado!</h2>
                <p style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}>Gracias por contactarnos. Te responderemos en menos de 24 horas para confirmar tu cita.</p>
                <button onClick={() => { setSent(false); setForm(initialForm) }} id="contact-reset-btn" style={{ marginTop: '28px', background: 'var(--color-charcoal)', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', letterSpacing: '0.04em' }}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} noValidate style={{ background: '#fff', borderRadius: '20px', padding: '48px 40px', boxShadow: '0 8px 32px rgba(44,36,32,0.08)', border: '1px solid var(--color-blush)' }} aria-label="Formulario de reserva de cita">
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-charcoal)', marginBottom: '32px' }}>Solicitar cita</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-row">
                  <div>
                    <label htmlFor="contact-nombre" style={labelStyle}>Nombre *</label>
                    <input id="contact-nombre" type="text" autoComplete="name" value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} style={fieldStyle(!!errors.nombre)} onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--color-rose)'} onBlur={e => (e.target as HTMLInputElement).style.borderColor = errors.nombre ? '#c9908a' : 'var(--color-blush)'} aria-describedby={errors.nombre ? 'error-nombre' : undefined} aria-invalid={!!errors.nombre} />
                    {errors.nombre && <span id="error-nombre" role="alert" style={{ color: 'var(--color-rose-dark)', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.nombre}</span>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>Email *</label>
                    <input id="contact-email" type="email" autoComplete="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={fieldStyle(!!errors.email)} onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--color-rose)'} onBlur={e => (e.target as HTMLInputElement).style.borderColor = errors.email ? '#c9908a' : 'var(--color-blush)'} aria-describedby={errors.email ? 'error-email' : undefined} aria-invalid={!!errors.email} />
                    {errors.email && <span id="error-email" role="alert" style={{ color: 'var(--color-rose-dark)', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-row">
                  <div>
                    <label htmlFor="contact-telefono" style={labelStyle}>Teléfono</label>
                    <input id="contact-telefono" type="tel" autoComplete="tel" value={form.telefono} onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))} style={fieldStyle(false)} onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--color-rose)'} onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'var(--color-blush)'} />
                  </div>
                  <div>
                    <label htmlFor="contact-servicio" style={labelStyle}>Servicio *</label>
                    <select id="contact-servicio" value={form.servicio} onChange={e => setForm(f => ({ ...f, servicio: e.target.value }))} style={{ ...fieldStyle(!!errors.servicio), appearance: 'none' as const }} aria-describedby={errors.servicio ? 'error-servicio' : undefined} aria-invalid={!!errors.servicio}>
                      <option value="">Selecciona un servicio</option>
                      <optgroup label="Cabello">
                        <option>Corte & Peinado</option>
                        <option>Coloración & Mechas</option>
                        <option>Tratamiento capilar</option>
                      </optgroup>
                      <optgroup label="Estética">
                        <option>Facial</option>
                        <option>Depilación</option>
                        <option>Maquillaje</option>
                      </optgroup>
                      <optgroup label="Spa">
                        <option>Masaje relajante</option>
                        <option>Ritual Lumière completo</option>
                      </optgroup>
                      <optgroup label="Uñas">
                        <option>Manicura</option>
                        <option>Pedicura spa</option>
                      </optgroup>
                    </select>
                    {errors.servicio && <span id="error-servicio" role="alert" style={{ color: 'var(--color-rose-dark)', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.servicio}</span>}
                  </div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label htmlFor="contact-mensaje" style={labelStyle}>Mensaje *</label>
                  <textarea id="contact-mensaje" rows={4} value={form.mensaje} onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))} placeholder="Indícanos el día y hora que prefieres, o cualquier detalle adicional..." style={{ ...fieldStyle(!!errors.mensaje), resize: 'vertical', minHeight: '110px' }} onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--color-rose)'} onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = errors.mensaje ? '#c9908a' : 'var(--color-blush)'} aria-describedby={errors.mensaje ? 'error-mensaje' : undefined} aria-invalid={!!errors.mensaje} />
                  {errors.mensaje && <span id="error-mensaje" role="alert" style={{ color: 'var(--color-rose-dark)', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.mensaje}</span>}
                </div>

                <button type="submit" id="contact-submit-btn" disabled={loading} style={{ width: '100%', background: loading ? 'var(--color-muted)' : 'var(--color-charcoal)', color: '#fff', border: 'none', padding: '15px 32px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.06em', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.3s' }} onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-rose-dark)' }} onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-charcoal)' }} aria-busy={loading}>
                  {loading ? 'Enviando...' : 'Enviar solicitud'}
                </button>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', textAlign: 'center', marginTop: '16px' }}>Te confirmaremos la cita por email o teléfono en menos de 24 h.</p>
              </form>
            )}
          </div>
        </div>
        <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}.form-row{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </main>
  )
}
