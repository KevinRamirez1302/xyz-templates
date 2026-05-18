import { Award, Heart, Leaf, Users } from 'lucide-react'

const team = [
  { name: 'Sofía Martín', role: 'Directora & Colorista Senior', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', alt: 'Sofía Martín, directora y colorista senior de Lumière' },
  { name: 'Elena Ruiz', role: 'Especialista en Tratamientos Capilares', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80', alt: 'Elena Ruiz, especialista en tratamientos capilares' },
  { name: 'Carmen López', role: 'Esteticista & Experta en Spa', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', alt: 'Carmen López, esteticista y experta en spa' },
  { name: 'Isabel Torres', role: 'Técnica en Uñas & Manicura', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', alt: 'Isabel Torres, técnica en uñas y manicura' },
]

const values = [
  { icon: Heart, title: 'Pasión por la belleza', desc: 'Cada clienta es única. Escuchamos, asesoramos y creamos resultados que superan expectativas.' },
  { icon: Leaf, title: 'Productos naturales', desc: 'Trabajamos exclusivamente con marcas sostenibles y formulaciones respetuosas con tu salud y el medioambiente.' },
  { icon: Award, title: 'Formación continua', desc: 'Nuestro equipo se forma constantemente en las últimas tendencias y técnicas internacionales.' },
  { icon: Users, title: 'Comunidad Lumière', desc: 'Más que un salón, somos un espacio donde las mujeres se reúnen, conectan y se cuidan.' },
]

export default function About() {
  return (
    <main id="main-content">
      {/* Page Hero */}
      <section id="about-hero" style={{
        position: 'relative',
        background: 'url("https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?w=1920&q=85") center/cover no-repeat',
        padding: '200px 24px 140px',
        textAlign: 'center',
        overflow: 'hidden'
      }} aria-label="Encabezado sobre nosotras">
        {/* Soft overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(250,247,244,0.85) 0%, rgba(250,247,244,0.98) 100%)', zIndex: 0 }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '16px' }}>Nuestra historia</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 300, color: 'var(--color-charcoal)', lineHeight: 1.15, marginBottom: '24px' }}>
            Más de 12 años creando<br /><em style={{ color: 'var(--color-rose-dark)', fontStyle: 'italic' }}>belleza con alma</em>
          </h1>
          <div className="divider-gold" aria-hidden="true" style={{ margin: '24px auto' }} />
          <p style={{ fontSize: '1.05rem', color: 'var(--color-charcoal)', lineHeight: 1.8, fontWeight: 400 }}>
            Lumière nació en 2012 con una misión clara: crear un espacio donde cada mujer se sienta vista, escuchada y completamente cuidada.
          </p>
        </div>
      </section>

      {/* Story */}
      <section id="nuestra-historia" className="section-pad" aria-label="Historia del salón">
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="story-grid">
          <div>
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(44,36,32,0.14)', aspectRatio: '4/3' }}>
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" alt="Interior elegante del salón Lumière Beauty Studio" width={700} height={525} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div>
            <p style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '16px' }}>Quiénes somos</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--color-charcoal)', marginBottom: '24px' }}>Un equipo apasionado por el arte de la belleza</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.85, marginBottom: '20px' }}>
              Todo comenzó con Sofía Martín, nuestra fundadora, quien regresó de París con la visión de traer a España una experiencia de salón verdaderamente lujosa pero cercana. Desde el primer día, Lumière ha sido sinónimo de excelencia artesanal y trato personalísimo.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.85, marginBottom: '32px' }}>
              Hoy somos un equipo de 15 profesionales certificadas, especializadas en colorimetría avanzada, tratamientos tricológicos, estética facial y bienestar integral. Cada una de nosotras aporta una perspectiva única que enriquece la experiencia Lumière.
            </p>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              {[['2012', 'Año de fundación'], ['3', 'Premios nacionales'], ['15', 'Especialistas']].map(([num, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-rose-dark)', fontWeight: 300 }}>{num}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)', letterSpacing: '0.04em' }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.story-grid{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
      </section>

      {/* Values */}
      <section id="valores" className="section-pad" aria-label="Nuestros valores" style={{ background: 'var(--color-blush)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '12px' }}>Lo que nos mueve</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-charcoal)', marginBottom: '20px' }}>Nuestros valores</h2>
            <div className="divider-gold" aria-hidden="true" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '28px' }}>
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="hover-lift" style={{ background: '#fff', borderRadius: '20px', padding: '36px 28px', boxShadow: '0 4px 20px rgba(44,36,32,0.06)' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, var(--color-blush), var(--color-gold-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Icon size={22} style={{ color: 'var(--color-rose-dark)' }} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '10px' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="section-pad" aria-label="Nuestro equipo">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '12px' }}>Las artistas</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-charcoal)', marginBottom: '20px' }}>Conoce a nuestro equipo</h2>
            <div className="divider-gold" aria-hidden="true" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {team.map(({ name, role, img, alt }) => (
              <article key={name} className="hover-lift" style={{ textAlign: 'center' }}>
                <div style={{ borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/4', marginBottom: '20px', boxShadow: '0 8px 32px rgba(44,36,32,0.1)' }}>
                  <img src={img} alt={alt} width={300} height={400} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'} onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-charcoal)', marginBottom: '6px' }}>{name}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', letterSpacing: '0.04em' }}>{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
