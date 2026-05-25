import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Template } from '../types/template'

const gradients: Record<string, string> = {
  Dashboard: 'from-primary to-primary-light',
  Salud: 'from-secondary to-secondary-light',
  Energía: 'from-primary to-amber-500',
  Hotelería: 'from-secondary to-blue-500',
  Inmobiliaria: 'from-tertiary to-purple-500',
  Logística: 'from-secondary to-indigo-500',
  Restauración: 'from-primary to-red-500',
  'E-commerce': 'from-green-400 to-secondary',
  Belleza: 'from-pink-400 to-rose-500',
}

interface TemplateCardProps {
  template: Template
  index: number
}

export function TemplateCard({ template, index }: TemplateCardProps) {
  const gradient = gradients[template.category] ?? 'from-zinc-400 to-zinc-600'
  const [imgSrc, setImgSrc] = useState<string>(
    template.image || new URL(`../assets/templates/${template.slug}.png`, import.meta.url).href
  )
  const [useFallback, setUseFallback] = useState(false)

  const handleImageError = () => {
    if (imgSrc.endsWith('.png')) {
      setImgSrc(new URL(`../assets/templates/${template.slug}.jpg`, import.meta.url).href)
    } else {
      setUseFallback(true)
    }
  }

  return (
    <Link
      to={`/templates/${template.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/40 backdrop-blur-lg shadow-soft transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/60 hover:shadow-2xl block"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="aspect-video bg-gradient-to-br from-zinc-300 to-zinc-400 relative overflow-hidden">
        {!useFallback ? (
          <img
            src={imgSrc}
            alt={template.name}
            onError={handleImageError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
            <div className="relative flex h-full items-center justify-center">
              <span className="text-5xl font-bold text-white/90 group-hover:scale-110 transition-transform duration-700">
                {template.name.charAt(0)}
              </span>
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold shadow-sm text-zinc-700">
            {template.category}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-bold text-zinc-900 tracking-tight">
          {template.name}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-600">
          {template.description}
        </p>
      </div>
    </Link>
  )
}
