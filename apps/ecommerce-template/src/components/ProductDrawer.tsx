import { useEffect } from 'react'
import type { Product } from './ProductCard'

interface ProductDrawerProps {
  product: Product | null;
  onClose: () => void;
  onConfigure: (product: Product) => void;
}

export default function ProductDrawer({ product, onClose, onConfigure }: ProductDrawerProps) {
  // Disable body scroll when drawer is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [product])

  if (!product) return null

  // Generate fictional premium component details for the specifications inspector
  const extraSpecs = {
    motherboard: product.category === 'laptop' ? 'Propietaria Soldada' : 'ASUS ROG STRIX Z790-F Gaming WiFi DDR5',
    ramDetails: product.category === 'laptop' ? 'LPDDR5X Dual-Channel' : 'Kingston FURY Beast DDR5 6000MHz CL36 RGB',
    ssdDetails: 'Samsung 990 PRO PCIe 4.0 NVMe M.2 (R: 7450 MB/s)',
    psu: product.category === 'laptop' ? 'Cargador USB-C Gan 140W' : 'Corsair RM850x 850W 80 Plus Gold Modular',
    chassis: product.category === 'laptop' ? 'Chasis de Aluminio Aeroespacial CNC' : 'Lian Li O11 Dynamic EVO Glass Edition',
    benchmarkGaming: product.category === 'gaming' ? '185 FPS (4K Ultra)' : product.category === 'laptop' ? '120 FPS (1440p High)' : '95 FPS (4K Mid)',
    benchmarkCompute: product.category === 'workstation' ? '2.1 min (V-Ray 3D Render)' : product.category === 'gaming' ? '4.8 min (V-Ray 3D Render)' : '6.5 min (V-Ray 3D Render)',
    warranty: '3 Años de Garantía In Situ Oficial Nexus'
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-2xl bg-dark-card border-l border-white/10 flex flex-col justify-between shadow-2xl animate-slide-in relative">
          
          {/* Header */}
          <div className="px-6 py-6 border-b border-white/5 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-electric-blue font-mono uppercase tracking-widest">Ficha Técnica Completa</span>
              <h3 className="font-display font-bold text-xl text-white mt-1">{product.name}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-white/5 hover:border-white/20 text-gray-400 hover:text-white transition-all cursor-pointer"
              aria-label="Cerrar"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Details Scroll Content */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            
            {/* Short Intro */}
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Performance Indicators (Benchmarks) */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-4 font-mono">Benchmarks Promedio</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-effect p-4 rounded-lg border border-white/5">
                  <span className="text-[10px] text-gray-500 font-mono block">RENDIMIENTO DE RENDER / COMPILACIÓN</span>
                  <span className="text-lg font-bold text-white mt-1 block font-mono">{extraSpecs.benchmarkCompute}</span>
                </div>
                <div className="glass-effect p-4 rounded-lg border border-white/5">
                  <span className="text-[10px] text-gray-500 font-mono block">RENDIMIENTO GAMING (AVERGAGE)</span>
                  <span className="text-lg font-bold text-electric-blue mt-1 block font-mono">{extraSpecs.benchmarkGaming}</span>
                </div>
              </div>
            </div>

            {/* Hardware Breakdown */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-4 font-mono">Componentes Integrados</h4>
              
              <div className="flex flex-col gap-4">
                
                {/* CPU */}
                <div className="flex items-start gap-4 border-b border-white/5 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-electric-blue shrink-0 border border-white/5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase block">Procesador (CPU)</span>
                    <span className="text-sm font-semibold text-white mt-0.5 block">{product.specs.cpu}</span>
                  </div>
                </div>

                {/* GPU */}
                <div className="flex items-start gap-4 border-b border-white/5 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-electric-purple shrink-0 border border-white/5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2zM9 9h6M9 13h6" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase block">Tarjeta Gráfica (GPU)</span>
                    <span className="text-sm font-semibold text-white mt-0.5 block">{product.specs.gpu}</span>
                  </div>
                </div>

                {/* RAM */}
                <div className="flex items-start gap-4 border-b border-white/5 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 shrink-0 border border-white/5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase block">Memoria RAM</span>
                    <span className="text-sm font-semibold text-white mt-0.5 block">{product.specs.ram}</span>
                    <span className="text-[11px] text-gray-500 font-mono mt-0.5 block">{extraSpecs.ramDetails}</span>
                  </div>
                </div>

                {/* SSD */}
                <div className="flex items-start gap-4 border-b border-white/5 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 shrink-0 border border-white/5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase block">Almacenamiento (M.2 NVMe)</span>
                    <span className="text-sm font-semibold text-white mt-0.5 block">{product.specs.ssd}</span>
                    <span className="text-[11px] text-gray-500 font-mono mt-0.5 block">{extraSpecs.ssdDetails}</span>
                  </div>
                </div>

                {/* Motherboard & PSU */}
                {product.category !== 'laptop' && (
                  <>
                    <div className="flex items-start gap-4 border-b border-white/5 pb-4">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 shrink-0 border border-white/5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 font-mono uppercase block">Placa Base</span>
                        <span className="text-sm font-semibold text-white mt-0.5 block">{extraSpecs.motherboard}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 border-b border-white/5 pb-4">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 shrink-0 border border-white/5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 font-mono uppercase block">Fuente de Alimentación</span>
                        <span className="text-sm font-semibold text-white mt-0.5 block">{extraSpecs.psu}</span>
                      </div>
                    </div>
                  </>
                )}

                {/* Chassis / Shell */}
                <div className="flex items-start gap-4 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 shrink-0 border border-white/5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase block">Chasis / Acabado Exterior</span>
                    <span className="text-sm font-semibold text-white mt-0.5 block">{extraSpecs.chassis}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Value Propositions */}
            <div className="glass-effect p-5 rounded-xl border border-white/5 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-white font-mono">Garantía Certificada Nexus</span>
              </div>
              <p className="text-gray-400 text-xs pl-9 leading-relaxed">
                Este equipo incluye {extraSpecs.warranty}. Soporte remoto prioritario e intervención técnica física rápida a domicilio si se detectase fallo de hardware.
              </p>
            </div>

          </div>

          {/* Drawer Footer / Bottom Buy Action */}
          <div className="px-6 py-6 border-t border-white/5 bg-dark-bg/90 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="text-center sm:text-left">
              <span className="text-[10px] text-gray-500 font-mono uppercase block">Precio del Sistema Base</span>
              <span className="text-2xl font-bold font-mono text-white">
                {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(product.price)}
              </span>
            </div>
            
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 border border-white/10 hover:border-white/20 text-xs font-bold uppercase tracking-wider rounded-lg text-gray-400 hover:text-white transition-all cursor-pointer"
              >
                Volver
              </button>
              <button
                onClick={() => onConfigure(product)}
                className="w-full sm:w-auto btn-premium px-6 py-3 bg-gradient-to-r from-electric-blue to-electric-purple text-dark-bg font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-electric-blue/15 hover:shadow-electric-blue/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Configurar Equipo
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
