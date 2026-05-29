import { Link } from 'react-router-dom'
import type { Post } from '../types'

interface PostCardProps {
  post: Post
  variant?: 'default' | 'featured' | 'compact' | 'blog'
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function PostCard({ post, variant = 'default' }: PostCardProps) {

  if (variant === 'blog') {
    return (
      <article className="flex gap-4 p-5 bg-[#fafaf7] border border-neutral-200 hover:border-[--color-brand-accent] transition-all duration-300 text-left group relative">
        <div className="flex-shrink-0">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full object-cover border border-neutral-300 filter grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="font-sans text-[10px] font-black uppercase tracking-wider text-[--color-brand-accent] block mb-1">
            {post.blogName || post.category.name}
          </span>
          <Link to={`/articulo/${post.slug}`} className="block">
            <h3 className="font-serif text-sm font-bold text-neutral-900 leading-snug hover:text-[--color-brand-accent] transition-colors mb-1.5">
              {post.title}
            </h3>
          </Link>
          <p className="text-xs text-neutral-600 leading-relaxed mb-2 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">
            {post.coordinador ? `Coordinado por ${post.coordinador}` : `Por ${post.author.name}`}
          </div>
        </div>
      </article>
    )
  }

  if (variant === 'compact') {
    return (
      <article className="flex gap-3 group py-3 border-b border-neutral-200">
        <Link
          to={`/articulo/${post.slug}`}
          aria-label={post.title}
          className="flex-shrink-0 w-16 h-16 bg-neutral-100 overflow-hidden"
        >
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </Link>
        <div className="flex-1 min-w-0">
          <Link to={`/articulo/${post.slug}`}>
            <h4 className="font-serif text-xs font-bold text-neutral-900 leading-snug hover:text-[--color-brand-accent] transition-colors line-clamp-2">
              {post.title}
            </h4>
          </Link>
          <div className="text-[10px] text-neutral-500 mt-1 font-semibold uppercase tracking-wider">
            {formatDate(post.publishedAt)}
          </div>
        </div>
      </article>
    )
  }

  if (variant === 'featured') {
    // Big Editorial Hero Layout: Giant headline, metadata, huge image, and double-column lead
    return (
      <article className="py-6 border-b-2 border-black flex flex-col">
        {/* Category tag & large headline */}
        <div className="mb-4">
          <Link
            to={`/categoria/${post.category.slug}`}
            className="inline-block text-[10px] font-black uppercase tracking-widest text-[--color-brand-accent] mb-2 hover:underline"
          >
            {post.category.name}
          </Link>
          <Link to={`/articulo/${post.slug}`} className="block group">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-none tracking-tight group-hover:text-[--color-brand-accent] transition-colors duration-200 uppercase">
              {post.title}
            </h2>
          </Link>
        </div>

        {/* Byline / info row */}
        <div className="flex items-center gap-4 py-2 border-y border-neutral-200 text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-6">
          <span>Por <span className="text-black font-extrabold">{post.author.name}</span></span>
          <span className="text-neutral-300">|</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span className="text-neutral-300">|</span>
          <span className="text-[--color-brand-accent]">Reportaje Especial</span>
        </div>

        {/* Big image */}
        <div className="w-full mb-6">
          <Link to={`/articulo/${post.slug}`} className="block overflow-hidden bg-neutral-100 aspect-[21/9] w-full">
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                loading="eager"
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
              />
            )}
          </Link>
        </div>

        {/* Lead paragraph / excerpt below image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-serif first-letter:float-left first-letter:text-4xl first-letter:font-black first-letter:mr-2 first-letter:text-[--color-brand-accent]">
              {post.excerpt}
            </p>
          </div>
          <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-neutral-200 pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-[--color-brand-accent] mb-2 block">
              En este reportaje:
            </span>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Análisis exclusivo sobre los cambios clave en el sector, entrevistas con líderes de opinión y datos detallados de nuestra redacción.
            </p>
            <Link
              to={`/articulo/${post.slug}`}
              className="mt-4 inline-flex items-center text-xs font-black uppercase tracking-wider text-black hover:text-[--color-brand-accent] transition-colors"
            >
              Leer artículo completo →
            </Link>
          </div>
        </div>
      </article>
    )
  }

  // default card
  return (
    <article className="flex flex-col group py-2 border-b border-neutral-200 pb-6">
      <Link
        to={`/articulo/${post.slug}`}
        className="block overflow-hidden bg-neutral-100 aspect-video mb-3"
        aria-label={post.title}
      >
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </Link>
      <Link
        to={`/categoria/${post.category.slug}`}
        className="text-[10px] font-black uppercase tracking-widest text-[--color-brand-accent] mb-2 hover:underline"
      >
        {post.category.name}
      </Link>
      <Link to={`/articulo/${post.slug}`}>
        <h3 className="font-serif text-sm lg:text-base font-extrabold text-black leading-snug group-hover:text-[--color-brand-accent] transition-colors mb-2">
          {post.title}
        </h3>
      </Link>
      <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3 mb-3">
        {post.excerpt}
      </p>
      <div className="mt-auto text-[10px] font-bold uppercase tracking-wider text-neutral-500">
        Por {post.author.name}
      </div>
    </article>
  )
}
