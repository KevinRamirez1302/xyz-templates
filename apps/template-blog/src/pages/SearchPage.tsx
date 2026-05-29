import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { POSTS } from '../data/posts'
import PostCard from '../components/PostCard'

export default function SearchPage() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return POSTS.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.name.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.author.name.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      
      {/* Page Title */}
      <div className="border-y-2 border-black py-4 mb-8 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
          Buscar en el Archivo
        </h1>
      </div>

      {/* Search Input Box */}
      <div className="relative max-w-2xl mx-auto mb-10">
        <label htmlFor="search-input" className="sr-only">Buscar</label>
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
        <input
          id="search-input"
          type="search"
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Término de búsqueda, redactor, categoría..."
          className="w-full pl-11 pr-4 py-3.5 border-2 border-black bg-white text-black placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-[--color-brand-accent] focus:border-[--color-brand-accent] text-sm"
        />
      </div>

      {/* Results Meta info */}
      {query && (
        <div className="border-b border-black pb-2 mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">
            {results.length > 0
              ? `${results.length} resultado${results.length !== 1 ? 's' : ''} para la búsqueda "${query}"`
              : `Sin resultados para "${query}"`}
          </p>
        </div>
      )}

      {/* Results grid */}
      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map(post => (
            <div key={post.id} className="border-b border-neutral-200 pb-4 last:border-0 sm:border-b-0 sm:pb-0">
              <PostCard post={post} variant={post.blogName !== undefined ? 'blog' : 'default'} />
            </div>
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <div className="text-center py-20 border border-neutral-300 bg-neutral-50">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Búsqueda sin coincidencias</p>
          <p className="text-sm text-neutral-500">Prueba con palabras clave más generales o revisa la ortografía.</p>
        </div>
      )}

      {!query && (
        <div className="text-center py-16 text-neutral-500 border border-neutral-200 bg-neutral-50/50">
          <Search size={32} className="mx-auto mb-3 text-neutral-400" />
          <p className="text-xs font-bold uppercase tracking-wider">Ingresa un término de búsqueda para comenzar.</p>
        </div>
      )}
    </main>
  )
}
