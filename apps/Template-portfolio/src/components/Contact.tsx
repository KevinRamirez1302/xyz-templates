import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [copyState, setCopyState] = useState<'idle' | 'email' | 'phone'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Self-contained section reveal state
  const sectionRef = useRef<HTMLElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Observe section for fade-in reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const emailVal = 'alex@ejemplo.com';
  const phoneVal = '+34 600 123 456';

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyState(type);
      setTimeout(() => setCopyState('idle'), 2000);
    });
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
    } else if (form.name.length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'El formato de correo no es válido.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'El mensaje no puede estar vacío.';
    } else if (form.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setForm({ name: '', email: '', message: '' });
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`contact-section reveal ${isSectionVisible ? 'active' : ''}`}
    >
      <div className="section-header">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">¿Tienes un proyecto en mente? ¡Hablemos!</p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Contact Info Cards */}
        <div className="contact-info-container">
          <h3 className="contact-info-title">Información de Contacto</h3>
          <p className="contact-info-desc">
            Si deseas discutir una oportunidad freelance, consultoría o simplemente saludar, 
            siéntete libre de escribirme o llamarme. Respondo en menos de 24 horas.
          </p>

          <div className="contact-cards-list">
            {/* Email Card */}
            <div className="contact-info-card">
              <div className="card-icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="card-details">
                <span className="card-label">Correo Electrónico</span>
                <span className="card-value">{emailVal}</span>
              </div>
              <button
                type="button"
                className={`btn-copy-info ${copyState === 'email' ? 'copied' : ''}`}
                onClick={() => handleCopy(emailVal, 'email')}
                aria-label="Copiar correo electrónico al portapapeles"
              >
                {copyState === 'email' ? <Check size={16} /> : <Copy size={16} />}
                <span>{copyState === 'email' ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-info-card">
              <div className="card-icon-wrapper">
                <Phone size={24} />
              </div>
              <div className="card-details">
                <span className="card-label">Teléfono / WhatsApp</span>
                <span className="card-value">{phoneVal}</span>
              </div>
              <button
                type="button"
                className={`btn-copy-info ${copyState === 'phone' ? 'copied' : ''}`}
                onClick={() => handleCopy(phoneVal, 'phone')}
                aria-label="Copiar teléfono al portapapeles"
              >
                {copyState === 'phone' ? <Check size={16} /> : <Copy size={16} />}
                <span>{copyState === 'phone' ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-info-card">
              <div className="card-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div className="card-details">
                <span className="card-label">Ubicación</span>
                <span className="card-value">Madrid, España (Disponible Remoto)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-container">
          <h3 className="contact-form-title">Envíame un Mensaje</h3>

          {submitSuccess && (
            <div className="form-success-banner" role="alert">
              <Check size={20} className="success-icon" />
              <div>
                <strong>¡Mensaje Enviado!</strong>
                <p>Tu mensaje se ha procesado con éxito. Me pondré en contacto contigo muy pronto.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            {/* Name Input */}
            <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
              <label htmlFor="name" className="form-label">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Juan Pérez"
                disabled={isSubmitting}
                aria-describedby={errors.name ? 'name-error' : undefined}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && (
                <span id="name-error" className="form-error-msg">
                  <AlertCircle size={14} /> {errors.name}
                </span>
              )}
            </div>

            {/* Email Input */}
            <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="juan@ejemplo.com"
                disabled={isSubmitting}
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <span id="email-error" className="form-error-msg">
                  <AlertCircle size={14} /> {errors.email}
                </span>
              )}
            </div>

            {/* Message Input */}
            <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Cuéntame sobre tu proyecto..."
                disabled={isSubmitting}
                aria-describedby={errors.message ? 'message-error' : undefined}
                aria-invalid={errors.message ? 'true' : 'false'}
              />
              {errors.message && (
                <span id="message-error" className="form-error-msg">
                  <AlertCircle size={14} /> {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn btn-primary btn-submit ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner" aria-hidden="true" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <span>Enviar Mensaje</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
