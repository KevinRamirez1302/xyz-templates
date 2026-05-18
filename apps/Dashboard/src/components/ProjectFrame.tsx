import { useParams, Link } from 'react-router-dom'
import { templates } from '../types/template'

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

export function ProjectFrame() {
  const { slug } = useParams<{ slug: string }>()
  const template = templates.find((t) => t.slug === slug)

  if (!template) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-bold text-zinc-700">Proyecto no encontrado</p>
          <Link
            to="/"
            className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
          >
            Volver al Dashboard
          </Link>
        </div>
      </div>
    )
  }

  const gradient = gradients[template.category] ?? 'from-zinc-400 to-zinc-600'

  if (template.port > 0) {
    return (
      <div className="min-h-screen bg-surface flex flex-col">
        <header className="flex items-center gap-4 px-8 py-4 bg-white/90 backdrop-blur-sm border-b border-zinc-200/50">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Volver al Dashboard
          </Link>
          <div className="h-5 w-px bg-zinc-200" />
          <h1 className="text-lg font-bold text-zinc-900">{template.name}</h1>
        </header>
        <iframe
          src={`http://localhost:${template.port}`}
          className="flex-1 w-full border-0"
          title={template.name}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10">
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/80 border-b border-zinc-200/50">
          <div className="mx-auto max-w-6xl px-8 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Volver al Dashboard
            </Link>
            <h1 className="text-lg font-bold tracking-tight">
              <span className="text-primary">xyz</span>
              <span className="text-zinc-900">-templates</span>
            </h1>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-8 pt-32 pb-24">
          <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg relative">
            {template.image ? (
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <span className="text-8xl font-bold text-white/80">
                  {template.name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex rounded-full bg-white/90 backdrop-blur px-4 py-1.5 text-sm font-bold shadow-sm text-zinc-700 border border-zinc-200/50">
              {template.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
            {template.name}
          </h1>

          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            {template.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {template.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="rounded-3xl border border-zinc-200/50 bg-white/60 backdrop-blur-lg p-8 text-center">
            <p className="text-lg font-semibold text-zinc-800 mb-2">
              Este proyecto estará disponible pronto
            </p>
            <p className="text-sm text-zinc-500">
              Estamos trabajando en esta plantilla. Mientras tanto, explora otras opciones disponibles.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white bg-zinc-900 px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              Explorar más plantillas
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
