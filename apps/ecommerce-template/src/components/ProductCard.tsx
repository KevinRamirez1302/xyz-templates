
export interface Product {
  id: string;
  name: string;
  category: 'gaming' | 'workstation' | 'laptop';
  price: number;
  basePrice: number;
  image: string;
  description: string;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    ssd: string;
    cooling?: string;
    screen?: string; // Laptop specific
    weight?: string; // Laptop specific
  };
  features: string[];
}

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onConfigure: (product: Product) => void;
}

export default function ProductCard({ product, onSelect, onConfigure }: ProductCardProps) {
  // Category configuration for color codes
  const categoryConfig = {
    gaming: {
      label: 'Gaming Edition',
      color: 'text-electric-blue border-electric-blue/20 bg-electric-blue/5',
      glow: 'group-hover:border-electric-blue/30 group-hover:shadow-[0_0_20px_-10px_rgba(0,210,255,0.4)]',
    },
    workstation: {
      label: 'Pro Workstation',
      color: 'text-electric-purple border-electric-purple/20 bg-electric-purple/5',
      glow: 'group-hover:border-electric-purple/30 group-hover:shadow-[0_0_20px_-10px_rgba(157,78,221,0.4)]',
    },
    laptop: {
      label: 'High-Perf Laptop',
      color: 'text-amber-400 border-amber-400/20 bg-amber-400/5',
      glow: 'group-hover:border-amber-400/30 group-hover:shadow-[0_0_20px_-10px_rgba(251,191,36,0.4)]',
    },
  }

  const config = categoryConfig[product.category]

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-xl border border-white/5 bg-dark-card p-6 transition-all duration-300 ${config.glow}`}
    >
      <div>
        {/* Badge & Category */}
        <div className="flex justify-between items-center mb-6">
          <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${config.color}`}>
            {config.label}
          </span>
          <span className="text-[10px] text-gray-500 font-mono">ID: {product.id}</span>
        </div>

        {/* Product Image Representation */}
        <div className="w-full h-44 rounded-lg bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.03] flex items-center justify-center relative overflow-hidden mb-6">
          {/* Subtle grid in container */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-10" />
          
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
            />
          ) : (
            /* Abstract PC Vector Render */
            <div className="relative w-36 h-36 flex items-center justify-center">
              {product.category === 'laptop' ? (
                // Laptop CSS design
                <div className="w-28 h-20 border-t-2 border-x-2 border-gray-600 rounded-t-md relative flex flex-col items-center justify-center bg-dark-bg/60 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-12 border border-white/5 rounded bg-dark-bg/80 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border border-dashed border-amber-400/30 animate-spin" style={{ animationDuration: '12s' }} />
                  </div>
                  {/* Keyboard base */}
                  <div className="absolute bottom-[-10px] w-32 h-2.5 bg-gray-500 rounded-b-md border-b border-gray-600 flex justify-center items-center">
                    <div className="w-20 h-0.5 bg-gray-800 rounded" />
                  </div>
                </div>
              ) : (
                // Desktop case CSS design
                <div className="w-20 h-28 border border-white/10 rounded-md bg-dark-bg/60 relative flex flex-col justify-between p-2 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {/* Glass panel visual reflection */}
                  <div className="absolute top-0 right-0 bottom-0 left-1/2 bg-gradient-to-r from-transparent to-white/[0.04] pointer-events-none skew-x-[-15deg]" />
                  
                  {/* Fans */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <span className="w-3 h-0.5 bg-white/10 rounded" />
                      <span className="w-2 h-2 rounded-full border border-white/20 animate-pulse" />
                    </div>
                    <div className="w-full h-8 rounded border border-white/5 bg-white/[0.01] flex items-center justify-center">
                      <div className={`w-6 h-6 rounded-full border border-dashed ${product.category === 'gaming' ? 'border-electric-blue/40' : 'border-electric-purple/40'} animate-spin`} />
                    </div>
                  </div>

                  {/* GPU Card Block representation */}
                  <div className="h-6 rounded border border-white/5 bg-white/[0.02] flex items-center justify-between px-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${product.category === 'gaming' ? 'bg-electric-blue' : 'bg-electric-purple'}`} />
                    <span className="text-[7px] text-gray-500 font-mono">RTX CORE</span>
                    <div className="w-4 h-1 bg-white/20 rounded" />
                  </div>

                  {/* PSU / Shroud */}
                  <div className="h-4 border-t border-white/5 flex items-center justify-between text-[6px] text-gray-500 font-mono">
                    <span>NXS POW</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="font-display font-bold text-lg text-white group-hover:text-electric-blue transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-gray-400 text-xs mt-2 mb-6 line-clamp-2">
          {product.description}
        </p>

        {/* Specs Table */}
        <div className="border-t border-white/5 pt-4 flex flex-col gap-2.5">
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Procesador</span>
            <span className="text-gray-200 font-medium font-mono text-right max-w-[150px] truncate">{product.specs.cpu}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Gráficos</span>
            <span className="text-gray-200 font-medium font-mono text-right max-w-[150px] truncate">{product.specs.gpu}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Memoria RAM</span>
            <span className="text-gray-200 font-medium font-mono text-right">{product.specs.ram}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Almacenamiento</span>
            <span className="text-gray-200 font-medium font-mono text-right">{product.specs.ssd}</span>
          </div>
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="border-t border-white/5 mt-6 pt-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Desde</span>
          <span className="text-xl font-bold font-mono text-white">
            {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(product.price)}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onSelect(product)}
            className="p-2.5 rounded-lg border border-white/5 hover:border-white/20 text-gray-400 hover:text-white transition-all cursor-pointer"
            title="Ver Especificaciones"
            aria-label="Ver Especificaciones"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <button
            onClick={() => onConfigure(product)}
            className="btn-premium px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-electric-blue hover:bg-electric-blue/10 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Configurar
          </button>
        </div>
      </div>
    </div>
  )
}
