import PostCard from '../components/PostCard'
import { POSTS } from '../data/posts'
import { Link } from 'react-router-dom'

function formatTime(iso: string) {
  const date = new Date(iso)
  return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
}

export default function HomePage() {
  const regularPosts = POSTS.filter(p => p.blogName === undefined)
  const blogPosts = POSTS.filter(p => p.blogName !== undefined)

  // 1. Hero main post
  const hero = regularPosts.find(p => p.featured) || regularPosts[0]

  // 2. Left side: Latest news feed (3 items)
  const latestFeed = regularPosts.filter(p => p.id !== hero.id).slice(0, 3)

  // 3. Right side: Trends (3 items, different slice)
  const trends = regularPosts.filter(p => p.id !== hero.id && !latestFeed.map(l => l.id).includes(p.id)).slice(0, 3)

  // 4. Specials (Middle section: 3 items)
  const specials = regularPosts.filter(p => p.id !== hero.id && !latestFeed.map(l => l.id).includes(p.id) && !trends.map(t => t.id).includes(p.id)).slice(0, 3)

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans">

      {/* ── Category Header Strip ─────────────────────────────── */}
      <div className="w-full border-y border-black py-2.5 my-4 text-center text-xs font-black uppercase tracking-widest text-[--color-brand-accent]">
        Tecnología · Viajes · Cultura · Diseño · Bienestar · Opinión
      </div>

      {/* ── Top Grid (Asymmetric 3-column Hero Section) ──────── */}
      <section aria-label="Noticias principales de portada" className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-4">
        
        {/* Left Column: Última Hora */}
        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-neutral-200 pb-6 lg:pb-0 lg:pr-6">
          <h3 className="text-xs font-black uppercase tracking-[0.15em] text-[--color-brand-accent] mb-4 border-b border-black pb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[--color-brand-accent] animate-pulse"></span>
            Última Hora
          </h3>
          <div className="space-y-4">
            {latestFeed.map(post => (
              <div key={post.id} className="border-b border-neutral-100 pb-3 last:border-0">
                <span className="text-[9px] font-black uppercase text-[--color-brand-accent] block mb-1">
                  Hoy • {formatTime(post.publishedAt)}
                </span>
                <Link to={`/articulo/${post.slug}`} className="group block">
                  <h4 className="font-serif text-xs font-bold text-neutral-900 leading-snug group-hover:text-[--color-brand-accent] transition-colors">
                    {post.title}
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Center Column: Big Featured story */}
        <div className="lg:col-span-2">
          {hero && <PostCard post={hero} variant="featured" />}
        </div>

        {/* Right Column: Trends */}
        <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-neutral-200 pt-6 lg:pt-0 lg:pl-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.15em] text-neutral-900 mb-4 border-b border-black pb-1.5">
              Lecturas de Hoy
            </h3>
            <div className="flex flex-col gap-1">
              {trends.map(post => (
                <PostCard key={post.id} post={post} variant="compact" />
              ))}
            </div>
          </div>
          
          {/* Internal subscription callout */}
          <div className="mt-6 p-4 border border-[--color-brand-accent] bg-[#fafaf7] text-center">
            <h4 className="font-serif text-xs font-black text-black uppercase tracking-tight mb-1">¿Te gusta nuestro trabajo?</h4>
            <p className="text-[10px] text-neutral-600 leading-normal mb-3">Apoya el periodismo digital libre suscribiéndote.</p>
            <Link to="/nosotros" className="inline-block w-full py-1.5 border border-black bg-black text-white text-[10px] font-black uppercase hover:bg-transparent hover:text-black transition-colors">
              Suscribirse
            </Link>
          </div>
        </div>

      </section>

      {/* ── Section 2: Specials (3 column layout with color tint) ────────────────── */}
      <section aria-label="Especiales del Editor" className="my-10 p-6 bg-[#f5f5f1] border-y-2 border-black">
        <div className="flex items-center justify-between mb-6 border-b border-neutral-300 pb-2">
          <h2 className="font-serif text-xl font-black text-black uppercase tracking-tight">
            Grandes Crónicas & Reportajes
          </h2>
          <span className="text-[10px] font-black text-[--color-brand-accent] uppercase tracking-widest">Recomendado</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specials.map(post => (
            <div key={post.id} className="bg-white p-4 border border-neutral-200 hover:border-[--color-brand-accent] transition-all duration-300 flex flex-col justify-between">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: Blogs y Opinión ───────────────────────── */}
      <section aria-label="Análisis y Opinión" className="pb-12">
        <div className="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
          <h2 className="font-serif text-2xl font-black text-black uppercase tracking-tight">
            Análisis & Opinión
          </h2>
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Las Firmas</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 6).map(post => (
            <PostCard key={post.id} post={post} variant="blog" />
          ))}
        </div>
      </section>

    </main>
  )
}
