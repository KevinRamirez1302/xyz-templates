import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { POSTS, CATEGORIES } from '../data/posts'
import PostCard from '../components/PostCard'

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const category = CATEGORIES.find(c => c.slug === slug)
  
  // Filter posts for this category. Exclude blogs from general category lists unless it's the opinion category
  const posts = POSTS.filter(p => {
    if (slug === 'opinion') {
      return p.blogName !== undefined
    } else {
      return p.category.slug === slug && p.blogName === undefined
    }
  })

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!category) return <Navigate to="/" replace />

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      
      {/* Header */}
      <header className="mb-10 text-center">
        <nav aria-label="Breadcrumb" className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-4">
          <Link to="/" className="hover:text-black transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-800">{category.name}</span>
        </nav>
        
        {/* Double-bordered Category Title */}
        <div className="border-y-2 border-black py-4 mb-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-black uppercase tracking-tight">
            {category.name}
          </h1>
        </div>

        <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest">
          {posts.length} {posts.length === 1 ? 'publicación' : 'publicaciones'} en esta sección
        </p>
      </header>

      {/* Posts grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="border-b border-neutral-200 pb-4 last:border-0 sm:border-b-0 sm:pb-0">
              <PostCard post={post} variant={slug === 'opinion' ? 'blog' : 'default'} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-neutral-500 border border-neutral-300 bg-neutral-50">
          <p className="text-sm font-bold uppercase tracking-wider">Aún no hay artículos publicados en esta sección.</p>
          <Link to="/" className="mt-4 inline-block px-4 py-2 border border-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors">
            Volver al inicio
          </Link>
        </div>
      )}
    </main>
  )
}
