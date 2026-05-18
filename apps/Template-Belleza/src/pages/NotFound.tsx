import { Link } from 'react-router-dom'
import { Sparkles, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main id="main-content" style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, var(--color-blush) 0%, var(--color-cream) 100%)',
      padding: '80px 24px'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(201,168,110,0.15)', marginBottom: '32px' }}>
          <Sparkles size={32} style={{ color: 'var(--color-gold)' }} aria-hidden="true" />
        </div>
        
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 300, color: 'var(--color-rose-dark)', lineHeight: 1, marginBottom: '16px' }}>
          404
        </h1>
        
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: 'var(--color-charcoal)', marginBottom: '24px' }}>
          Página no encontrada
        </h2>
        
        <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '40px' }}>
          Lo sentimos, parece que la página que buscas no existe o ha sido movida. Pero no te preocupes, la belleza siempre encuentra su camino.
        </p>
        
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--color-charcoal)', color: '#fff', padding: '16px 36px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.3s' }} onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-rose-dark)'} onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-charcoal)'}>
          <ArrowLeft size={18} aria-hidden="true" /> Volver al inicio
        </Link>
      </div>
    </main>
  )
}
