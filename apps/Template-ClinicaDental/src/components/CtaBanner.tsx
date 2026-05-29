import { CalendarDays, Phone } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section
      className="cta-section"
      aria-label="Llamada a la acción — Pide tu cita"
    >
      <div className="container">
        <div className="cta-inner">
          <h2 className="cta-title">
            ¿Listo para transformar<br />tu sonrisa?
          </h2>
          <p className="cta-desc">
            La primera consulta es gratuita y sin compromiso. Nuestros especialistas
            evaluarán tu caso y diseñarán el plan de tratamiento ideal para ti.
          </p>
          <div className="cta-actions">
            <a
              href="#contacto"
              id="cta-banner-primary"
              className="btn btn-white btn-lg"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
              }}
              aria-label="Pedir cita gratuita"
            >
              <CalendarDays size={18} aria-hidden="true" />
              Pedir Cita Gratis
            </a>
            <a
              href="tel:+34912345678"
              id="cta-banner-phone"
              className="btn btn-outline-white btn-lg"
              aria-label="Llamar a la clínica"
            >
              <Phone size={18} aria-hidden="true" />
              +34 91 234 56 78
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
