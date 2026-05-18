import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Category = 'todos' | 'cabello' | 'estetica' | 'spa' | 'unas'

interface Service {
  id: string
  category: Category
  name: string
  desc: string
  price: string
  duration: string
  tag?: string
}

const services: Service[] = [
  { id: 'svc-corte-mujer', category: 'cabello', name: 'Corte de mujer', desc: 'Consulta personalizada, lavado, corte y secado profesional adaptado a tu tipo de cabello y rostro.', price: '35–55€', duration: '60 min' },
  { id: 'svc-corte-hombre', category: 'cabello', name: 'Corte de hombre', desc: 'Corte clásico o moderno con perfilado de barba y acabado impecable.', price: '22–30€', duration: '30 min' },
  { id: 'svc-balayage', category: 'cabello', name: 'Balayage & Ombré', desc: 'Técnica de iluminación degradada para un look natural y luminoso. Incluye mascarilla hidratante.', price: '120–180€', duration: '3 h', tag: 'Más popular' },
  { id: 'svc-color-full', category: 'cabello', name: 'Coloración completa', desc: 'Cambio de color total con productos premium sin amoniaco. Cobertura perfecta de canas.', price: '70–100€', duration: '2 h' },
  { id: 'svc-keratina', category: 'cabello', name: 'Keratina & Alisado', desc: 'Tratamiento profesional que elimina el frizz y aporta brillo intenso durante meses.', price: '120–200€', duration: '3.5 h' },
  { id: 'svc-hidratacion', category: 'cabello', name: 'Tratamiento de hidratación', desc: 'Mascarilla reparadora intensiva con proteínas y aceites esenciales. Cabello revitalizado.', price: '40–60€', duration: '45 min' },
  { id: 'svc-facial-basico', category: 'estetica', name: 'Facial básico', desc: 'Limpieza profunda, exfoliación y mascarilla hidratante adaptada a tu tipo de piel.', price: '45€', duration: '50 min' },
  { id: 'svc-facial-anti-age', category: 'estetica', name: 'Facial anti-edad premium', desc: 'Protocolo completo con sérum vitamina C, lifting facial y masaje linfático.', price: '90€', duration: '80 min', tag: 'Exclusivo' },
  { id: 'svc-depilacion', category: 'estetica', name: 'Depilación con hilo', desc: 'Técnica oriental de depilación facial de cejas y contorno de labios. Resultados precisos.', price: '18–25€', duration: '20 min' },
  { id: 'svc-maquillaje', category: 'estetica', name: 'Maquillaje profesional', desc: 'Maquillaje de día, noche o evento especial. Larga duración garantizada.', price: '55–80€', duration: '60 min' },
  { id: 'svc-masaje-relajante', category: 'spa', name: 'Masaje relajante', desc: 'Masaje de cuerpo completo con aceites esenciales de lavanda y bergamota. Libera tensiones.', price: '65€', duration: '60 min' },
  { id: 'svc-masaje-piedras', category: 'spa', name: 'Masaje con piedras calientes', desc: 'Termoterapia profunda con piedras volcánicas. Mejora la circulación y reduce el estrés.', price: '85€', duration: '75 min', tag: 'Bestseller' },
  { id: 'svc-ritual-luminiscente', category: 'spa', name: 'Ritual Lumière completo', desc: 'Experiencia sensorial de 2 h: exfoliación corporal, envoltura, masaje y facial.', price: '150€', duration: '120 min', tag: 'Exclusivo' },
  { id: 'svc-manicura-clasica', category: 'unas', name: 'Manicura clásica', desc: 'Lima, cutículas, masaje de manos y esmaltado en los colores de la temporada.', price: '22€', duration: '40 min' },
  { id: 'svc-manicura-gel', category: 'unas', name: 'Manicura semipermanente', desc: 'Aplicación de gel o shellac para un acabado brillante y duradero (3–4 semanas).', price: '35€', duration: '50 min' },
  { id: 'svc-pedicura-spa', category: 'unas', name: 'Pedicura spa', desc: 'Baño de pies, exfoliación, masaje, tratamiento de durezas y esmaltado a elegir.', price: '45€', duration: '60 min' },
]

const categories: { value: Category; label: string }[] = [
  { value: 'todos', label: 'Todos los servicios' },
  { value: 'cabello', label: 'Cabello' },
  { value: 'estetica', label: 'Estética' },
  { value: 'spa', label: 'Spa & Bienestar' },
  { value: 'unas', label: 'Uñas' },
]

export default function Services() {
  const [active, setActive] = useState<Category>('todos')

  const filtered = active === 'todos' ? services : services.filter(s => s.category === active)

  return (
    <main id="main-content">
      {/* Hero */}
      <section id="services-hero" style={{
        position: 'relative',
        background: 'url("https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=85") center/cover no-repeat',
        padding: '200px 24px 140px',
        textAlign: 'center',
        overflow: 'hidden'
      }} aria-label="Encabezado de servicios">
        {/* Soft overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(250,247,244,0.85) 0%, rgba(250,247,244,0.98) 100%)', zIndex: 0 }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '16px' }}>Carta de servicios</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: 300, color: 'var(--color-charcoal)', lineHeight: 1.15, marginBottom: '24px' }}>
            Cada tratamiento,<br /><em style={{ color: 'var(--color-rose-dark)', fontStyle: 'italic' }}>una experiencia única</em>
          </h1>
          <div className="divider-gold" aria-hidden="true" style={{ margin: '24px auto' }} />
          <p style={{ fontSize: '1.05rem', color: 'var(--color-charcoal)', lineHeight: 1.8, fontWeight: 400 }}>Descubre nuestra carta completa de servicios. Todos nuestros tratamientos incluyen consulta personalizada y productos de primera calidad.</p>
        </div>
      </section>

      {/* Filter tabs */}
      <section id="services-filter" style={{ background: '#fff', padding: '0 24px', boxShadow: '0 2px 16px rgba(44,36,32,0.06)', position: 'sticky', top: '72px', zIndex: 50 }} aria-label="Filtro de categorías">
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '0', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {categories.map(({ value, label }) => (
            <button
              key={value}
              id={`filter-${value}`}
              onClick={() => setActive(value)}
              aria-pressed={active === value}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '20px 24px',
                fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                color: active === value ? 'var(--color-rose-dark)' : 'var(--color-muted)',
                borderBottom: active === value ? '2px solid var(--color-rose-dark)' : '2px solid transparent',
                transition: 'color 0.25s, border-color 0.25s',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section id="services-grid" className="section-pad" aria-label={`Servicios: ${categories.find(c => c.value === active)?.label}`} style={{ background: 'var(--color-cream)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {filtered.map(({ id, name, desc, price, duration, tag }) => (
              <article key={id} id={id} className="hover-lift" style={{ background: '#fff', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 20px rgba(44,36,32,0.06)', border: '1px solid var(--color-blush)', position: 'relative', overflow: 'hidden' }}>
                {tag && (
                  <span style={{ position: 'absolute', top: '16px', right: '16px', background: 'var(--color-gold)', color: '#fff', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', padding: '3px 10px', borderRadius: '50px', textTransform: 'uppercase' }}>{tag}</span>
                )}
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '10px', paddingRight: tag ? '80px' : '0' }}>{name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '20px' }}>{desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-blush)', paddingTop: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-rose-dark)', fontWeight: 500 }}>{price}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                    <ChevronDown size={14} aria-hidden="true" /> {duration}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section id="services-note" style={{ background: 'var(--color-blush)', padding: '48px 24px', textAlign: 'center' }} aria-label="Nota sobre precios">
        <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
          * Los precios son orientativos y pueden variar según la longitud del cabello y las características del tratamiento. Consulta sin compromiso por teléfono o en el formulario de contacto.
        </p>
      </section>
    </main>
  )
}
