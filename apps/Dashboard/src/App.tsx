import { useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { templates, type Category } from './types/template'
import { SearchBar } from './components/SearchBar'
import { CategoryFilter } from './components/CategoryFilter'
import { TemplateGrid } from './components/TemplateGrid'
import { ProjectFrame } from './components/ProjectFrame'

function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category | 'Todas'>('Todas')

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      const matchCategory = category === 'Todas' || t.category === category
      const query = search.toLowerCase()
      const matchSearch =
        !query ||
        t.name.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.tags.some((tag) => tag.toLowerCase().includes(query))
      return matchCategory && matchSearch
    })
  }, [search, category])

  return (
    <div className="min-h-screen bg-surface font-sans">
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
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                <span className="text-primary">xyz</span>
                <span className="text-zinc-900">-templates</span>
              </h1>
            </div>
            <a
              href="#"
              className="text-sm font-semibold text-zinc-900 bg-zinc-900 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              Contacto
            </a>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-8 pt-32 pb-24">
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Catálogo de plantillas
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">
              Encuentra tu plantilla{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                perfecta
              </span>
            </h2>
            <p className="text-base text-zinc-600 max-w-xl mx-auto">
              Explora nuestras plantillas profesionales y lanza tu proyecto en minutos
            </p>
          </div>

          <div className="mb-12 space-y-6 animate-fade-up" style={{ animationDelay: '150ms' }}>
            <SearchBar value={search} onChange={setSearch} />
            <CategoryFilter value={category} onChange={setCategory} />
          </div>

          <TemplateGrid templates={filtered} />
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/templates/:slug" element={<ProjectFrame />} />
    </Routes>
  )
}

export default App
