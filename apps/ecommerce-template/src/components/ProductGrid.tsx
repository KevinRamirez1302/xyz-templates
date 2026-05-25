import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import type { Product } from './ProductCard'

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onConfigureProduct: (product: Product) => void;
}

export default function ProductGrid({ products, onSelectProduct, onConfigureProduct }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.cpu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.gpu.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesCategory && matchesSearch
    })
  }, [products, activeCategory, searchQuery])

  const categories = [
    { id: 'all', label: 'Todos los Equipos' },
    { id: 'gaming', label: 'Gaming Edition' },
    { id: 'workstation', label: 'Pro Workstations' },
    { id: 'laptop', label: 'Portátiles Apex' },
  ]

  return (
    <section id="catalog" className="relative py-24 bg-dark-bg border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-electric-blue uppercase mb-3">
            Sistemas Disponibles
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Equipos Pre-Configurados
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-3">
            Explora nuestra línea insignia ensamblada con componentes de la más alta calidad y calibrada para estabilidad extrema.
          </p>
        </div>

        {/* Filter Toolbar (Tabs & Search) */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12 border-b border-white/5 pb-8">
          
          {/* Categories Tab Selector */}
          <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-3 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-dark-bg font-bold shadow-lg shadow-white/10'
                      : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              placeholder="Buscar por modelo, GPU, CPU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass-effect pl-10 pr-4 py-3 rounded-full text-xs text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue/50 transition-colors"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white cursor-pointer"
                aria-label="Clean search"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onConfigure={onConfigureProduct}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-600 mb-4 border border-white/5">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-lg text-white">No se encontraron equipos</h3>
            <p className="text-gray-400 text-xs mt-1 max-w-sm">
              Prueba a cambiar los términos de búsqueda o selecciona otra categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
