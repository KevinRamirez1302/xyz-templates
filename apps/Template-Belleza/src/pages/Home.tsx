import { Link } from 'react-router-dom'
import { ArrowRight, Star, Scissors, Sparkles, Heart } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Corte & Peinado',
    description: 'Diseños personalizados que resaltan tus rasgos únicos. Técnicas modernas adaptadas a tu estilo.',
    price: 'Desde 35€',
    id: 'service-corte',
  },
  {
    icon: Sparkles,
    title: 'Coloración & Mechas',
    description: 'Balayage, highlights y técnicas de color que iluminan tu mirada. Productos sin amoniaco.',
    price: 'Desde 80€',
    id: 'service-color',
  },
  {
    icon: Heart,
    title: 'Tratamientos Spa',
    description: 'Rituales de bienestar que cuidan tu cuerpo y mente. Masajes, faciales y aromaterapia.',
    price: 'Desde 60€',
    id: 'service-spa',
  },
]

const testimonials = [
  { name: 'Marta G.', text: 'El mejor salón de Madrid. Me tratan como una reina y los resultados son increíbles.', stars: 5 },
  { name: 'Laura S.', text: 'Llevo 3 años viniendo y nunca me han decepcionado. Los tratamientos capilares son maravillosos.', stars: 5 },
  { name: 'Ana R.', text: 'Un ambiente relajante y un equipo profesional. Mis uñas nunca habían quedado tan perfectas.', stars: 5 },
]

const stats = [
  { value: '12+', label: 'Años de experiencia' },
  { value: '2.400+', label: 'Clientas satisfechas' },
  { value: '98%', label: 'Recomendarían Lumière' },
  { value: '15', label: 'Especialistas certificadas' },
]

export default function Home() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section id="hero" aria-label="Portada principal" style={{
        minHeight: '100vh',
        background: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=85") center/cover no-repeat',
        display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* Soft overlay for text readability over the background image */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(250,247,244,0.95) 0%, rgba(250,247,244,0.7) 100%)', zIndex: 0 }} />

        <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,110,0.12) 0%, transparent 70%)', zIndex: 0 }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,144,138,0.15) 0%, transparent 70%)', zIndex: 0 }} />

        <div className="hero-grid" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '120px 24px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', width: '100%' }}>
          <div className="animate-fade-in-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(201,168,110,0.12)', border: '1px solid rgba(201,168,110,0.3)', borderRadius: '50px', padding: '6px 16px', marginBottom: '28px' }}>
              <Sparkles size={14} style={{ color: 'var(--color-gold)' }} aria-hidden="true" />
              <span style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>Beauty Studio Premium</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', fontWeight: 300, color: 'var(--color-charcoal)', lineHeight: 1.1, marginBottom: '24px' }}>
              Tu belleza,<br /><em style={{ color: 'var(--color-rose-dark)', fontStyle: 'italic' }}>nuestra pasión</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.8, maxWidth: '440px', marginBottom: '40px' }}>
              En Lumière creamos experiencias únicas que van más allá de la belleza. Un espacio donde cada visita es un ritual de cuidado y bienestar.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contacto" id="hero-cta-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-charcoal)', color: '#fff', padding: '14px 28px', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.3s' }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-rose-dark)'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-charcoal)'} aria-label="Reservar cita">
                Reservar cita <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/servicios" id="hero-cta-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--color-charcoal)', padding: '14px 28px', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid var(--color-charcoal)', transition: 'all 0.3s' }} onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--color-charcoal)'; el.style.color = '#fff' }} onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'transparent'; el.style.color = 'var(--color-charcoal)' }}>
                Ver servicios
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '48px' }}>
              <div style={{ display: 'flex' }} aria-label="5 estrellas en Google">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="var(--color-gold)" style={{ color: 'var(--color-gold)', marginRight: '-2px' }} aria-hidden="true" />)}
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginLeft: '8px' }}>
                <strong style={{ color: 'var(--color-charcoal)' }}>4.9/5</strong> — Más de 500 reseñas en Google
              </span>
            </div>
          </div>

          <div className="animate-fade-in delay-300" style={{ position: 'relative' }}>
            <div className="animate-float" style={{ borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%', overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 32px 80px rgba(44,36,32,0.18)' }}>
              {/* Nueva imagen de Unsplash para el Hero */}
              <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80" alt="Estilista profesional trabajando en un salón de belleza elegante" width={600} height={750} loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="glass-card animate-fade-in delay-500" style={{ position: 'absolute', bottom: '-24px', left: '-24px', padding: '20px 24px', boxShadow: '0 16px 40px rgba(44,36,32,0.12)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '6px' }}>Próxima disponibilidad</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-charcoal)' }}>Hoy · 16:30</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-rose-dark)', marginTop: '4px' }}>✦ 2 plazas libres</div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-grid{grid-template-columns:1fr!important;}.hero-grid>div:last-child{display:none!important;}}`}</style>
      </section>

      {/* Stats */}
      <section id="stats" aria-label="Nuestros números" style={{ background: 'var(--color-charcoal)', padding: '56px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--color-gold)', fontWeight: 300 }}>{value}</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', marginTop: '6px', letterSpacing: '0.04em' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section id="servicios-preview" className="section-pad" aria-label="Nuestros servicios" style={{ background: 'var(--color-cream)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '12px' }}>Lo que ofrecemos</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-charcoal)', marginBottom: '20px' }}>Servicios diseñados para ti</h2>
            <div className="divider-gold" aria-hidden="true" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {services.map(({ icon: Icon, title, description, price, id }) => (
              <article key={id} id={id} className="hover-lift" style={{ background: '#fff', borderRadius: '20px', padding: '40px 32px', boxShadow: '0 4px 24px rgba(44,36,32,0.06)', border: '1px solid var(--color-blush)', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-blush), var(--color-gold-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <Icon size={24} style={{ color: 'var(--color-rose-dark)' }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-charcoal)', marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '20px' }}>{description}</p>
                <span style={{ display: 'inline-block', background: 'var(--color-blush)', color: 'var(--color-rose-dark)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 600 }}>{price}</span>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/servicios" id="home-all-services-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-rose-dark)', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid var(--color-rose-dark)', paddingBottom: '2px', transition: 'opacity 0.2s' }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}>
              Ver todos los servicios <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="section-pad" aria-label="Opiniones de clientas" style={{ background: 'var(--color-blush)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '12px' }}>Opiniones reales</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-charcoal)', marginBottom: '20px' }}>Lo que dicen nuestras clientas</h2>
            <div className="divider-gold" aria-hidden="true" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {testimonials.map(({ name, text, stars }) => (
              <blockquote key={name} className="hover-lift" style={{ background: '#fff', borderRadius: '20px', padding: '36px 28px', boxShadow: '0 4px 20px rgba(44,36,32,0.06)', border: 'none', margin: 0 }}>
                <div style={{ display: 'flex', marginBottom: '16px' }} aria-label={`${stars} de 5 estrellas`}>
                  {Array.from({ length: stars }).map((_, i) => <Star key={i} size={16} fill="var(--color-gold)" style={{ color: 'var(--color-gold)' }} aria-hidden="true" />)}
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--color-charcoal)', lineHeight: 1.7, marginBottom: '20px' }}>"{text}"</p>
                <footer style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>— {name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="cta-banner" style={{ background: 'linear-gradient(135deg, var(--color-charcoal) 0%, #3d2e28 100%)', padding: '80px 24px', textAlign: 'center' }} aria-label="Oferta de bienvenida">
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <Sparkles size={32} style={{ color: 'var(--color-gold)', marginBottom: '20px' }} aria-hidden="true" />
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#fff', marginBottom: '16px' }}>Regálate un momento de lujo</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '36px' }}>
            Reserva tu cita hoy y disfruta de un 15% de descuento en tu primera visita con el código <strong style={{ color: 'var(--color-gold)' }}>LUMIERE15</strong>.
          </p>
          <Link to="/contacto" id="cta-banner-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-gold)', color: 'var(--color-charcoal)', padding: '16px 36px', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.3s' }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'} aria-label="Reservar cita con descuento">
            Reservar ahora <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
