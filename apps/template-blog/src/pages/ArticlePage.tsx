import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect, useState, type ReactNode } from 'react'
import { Clock, Tag, X, Share, Link2, ChevronLeft } from 'lucide-react'
import { POSTS } from '../data/posts'
import PostCard from '../components/PostCard'
import type { Post } from '../types'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

function ArticleContent({ content }: { content: string }) {
  const lines = content.trim().split('\n')
  const elements: ReactNode[] = []
  let i = 0
  let isFirstParagraph = true

  while (i < lines.length) {
    const line = lines[i].trim()
    if (!line) { i++; continue }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-serif text-xl sm:text-2xl font-black text-black mt-8 mb-3 pb-1 border-b border-[--color-brand-accent] break-inside-avoid">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="text-black leading-relaxed mb-4 font-bold">
          {line.slice(2, -2)}
        </p>
      )
    } else if (line.startsWith('- ')) {
      const items: string[] = [line.slice(2)]
      while (i + 1 < lines.length && lines[i + 1].trim().startsWith('- ')) {
        i++
        items.push(lines[i].trim().slice(2))
      }
      elements.push(
        <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-neutral-800 break-inside-avoid">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
        </ul>
      )
    } else {
      let pClass = "text-neutral-900 leading-relaxed mb-4 text-justify font-serif text-base"
      if (isFirstParagraph) {
        pClass += " first-letter:text-6xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[--color-brand-accent] first-letter:leading-none"
        isFirstParagraph = false
      }
      elements.push(
        <p key={i} className={pClass}
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
        />
      )
    }
    i++
  }

  return <div>{elements}</div>
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const post = POSTS.find(p => p.slug === slug)
  const [progress, setProgress] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const bar = document.getElementById('reading-progress')
    const handler = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setProgress(pct)
      if (bar) bar.style.width = `${pct}%`
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [slug])

  if (!post) return <Navigate to="/" replace />

  const related: Post[] = POSTS
    .filter(p => p.id !== post.id && p.category.id === post.category.id && p.blogName === undefined)
    .slice(0, 3)

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Reading progress bar — brand color */}
      <div
        id="reading-progress"
        style={{ width: `${progress}%` }}
        className="fixed top-0 left-0 h-0.5 bg-[--color-brand-accent] z-[9999] transition-[width] duration-100"
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-serif">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-500 font-black uppercase tracking-wider hover:text-[--color-brand-accent] mb-8 transition-colors"
        >
          <ChevronLeft size={14} /> Volver al inicio
        </Link>

        <article className="w-full">

          {/* Category */}
          <div className="text-center mb-3">
            <Link
              to={`/categoria/${post.category.slug}`}
              className="text-[10px] font-black uppercase tracking-widest text-[--color-brand-accent] hover:underline"
            >
              {post.category.name}
            </Link>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight text-center tracking-tight mb-6 max-w-3xl mx-auto">
            {post.title}
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-lg sm:text-xl text-neutral-600 text-center leading-relaxed max-w-2xl mx-auto mb-6 italic">
            {post.excerpt}
          </p>

          {/* Meta bar */}
          <div className="w-full border-y border-black py-3 mb-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-black tracking-wider uppercase text-neutral-600 font-sans gap-2">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-6 h-6 rounded-full object-cover filter grayscale"
              />
              <span className="text-black">Por {post.author.name}</span>
            </div>
            <div>{formatDate(post.publishedAt)}</div>
            <div className="flex items-center gap-1 text-[--color-brand-accent]">
              <Clock size={12} /> {post.readingTime} min de lectura
            </div>
          </div>

          {/* Cover image */}
          <div className="border border-neutral-300 p-2 bg-white mb-8">
            <div className="overflow-hidden bg-neutral-100 aspect-video">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[10px] text-neutral-500 font-sans mt-2 text-center italic">
              Fotografía principal del artículo — Edición digital de Crónica.
            </p>
          </div>

          {/* Body — 2-column newspaper layout */}
          <div className="columns-1 md:columns-2 gap-8 text-neutral-900 text-justify pb-8 border-b border-neutral-300">
            <ArticleContent content={post.content} />
          </div>

          {/* Tags */}
          <div className="mt-6 pt-4 flex flex-wrap items-center gap-2 font-sans">
            <Tag size={14} className="text-[--color-brand-accent]" />
            <span className="text-[10px] font-black uppercase text-neutral-500 mr-1">Temas:</span>
            {post.tags.map(tag => (
              <Link
                key={tag}
                to={`/etiqueta/${tag.toLowerCase()}`}
                className="px-2.5 py-1 bg-neutral-100 border border-neutral-300 text-neutral-700 text-xs hover:bg-[--color-brand-accent] hover:text-white hover:border-[--color-brand-accent] transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Share */}
          <div className="mt-6 pt-5 border-t border-neutral-200 flex flex-wrap items-center gap-3 font-sans">
            <span className="text-[10px] font-black uppercase tracking-wider text-neutral-600">Compartir:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank" rel="noopener noreferrer"
              aria-label="Compartir en X"
              className="p-1.5 border border-neutral-400 text-neutral-600 hover:bg-[--color-brand-accent] hover:text-white hover:border-[--color-brand-accent] transition-colors"
            >
              <X size={14} />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank" rel="noopener noreferrer"
              aria-label="Compartir en LinkedIn"
              className="p-1.5 border border-neutral-400 text-neutral-600 hover:bg-[--color-brand-accent] hover:text-white hover:border-[--color-brand-accent] transition-colors"
            >
              <Share size={14} />
            </a>
            <button
              onClick={handleCopy}
              aria-label="Copiar enlace"
              className="p-1.5 border border-neutral-400 text-neutral-600 hover:bg-[--color-brand-accent] hover:text-white hover:border-[--color-brand-accent] transition-colors cursor-pointer"
            >
              <Link2 size={14} />
            </button>
            {copied && <span className="text-xs text-[--color-brand-accent] font-black uppercase">¡Copiado!</span>}
          </div>

          {/* Author card */}
          <div className="mt-10 p-6 border-l-4 border-[--color-brand-accent] bg-neutral-50 font-sans">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover filter grayscale border border-neutral-300"
              />
              <div>
                <p className="text-[10px] text-[--color-brand-accent] font-black uppercase tracking-wider mb-1">Sobre el autor</p>
                <h3 className="font-bold text-black text-base">{post.author.name}</h3>
                <p className="text-xs text-neutral-500 mb-2 italic">{post.author.role}</p>
                <p className="text-xs text-neutral-700 leading-relaxed">{post.author.bio}</p>
              </div>
            </div>
          </div>

        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-16 pt-8 border-t-2 border-black font-sans">
            <h3 className="font-serif text-xl sm:text-2xl font-black text-black mb-1 uppercase">
              Más en esta sección
            </h3>
            <div className="w-16 h-0.5 bg-[--color-brand-accent] mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map(r => (
                <PostCard key={r.id} post={r} />
              ))}
            </div>
          </section>
        )}

      </main>
    </>
  )
}
