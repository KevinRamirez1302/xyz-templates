import { useState, useEffect } from 'react'
import type { Product } from './ProductCard'

interface QuickConfiguratorProps {
  products: Product[];
  selectedProduct: Product | null;
  onClose?: () => void;
}

interface SelectedUpgrades {
  cpuUpgrade: boolean;
  gpuUpgrade: boolean;
  ramSize: 'base' | 'mid' | 'max';
  ssdSize: 'base' | 'mid' | 'max';
  rgbCooling: boolean;
}

export default function QuickConfigurator({ products, selectedProduct }: QuickConfiguratorProps) {
  // Use selectedProduct or default to the first gaming product
  const [activeProduct, setActiveProduct] = useState<Product>(products[0])

  useEffect(() => {
    if (selectedProduct) {
      setActiveProduct(selectedProduct)
    }
  }, [selectedProduct])

  // Upgrades state
  const [upgrades, setUpgrades] = useState<SelectedUpgrades>({
    cpuUpgrade: false,
    gpuUpgrade: false,
    ramSize: 'base',
    ssdSize: 'base',
    rgbCooling: false,
  })

  const [orderPlaced, setOrderPlaced] = useState(false)

  // Reset upgrades when system model changes
  const handleProductChange = (product: Product) => {
    setActiveProduct(product)
    setUpgrades({
      cpuUpgrade: false,
      gpuUpgrade: false,
      ramSize: 'base',
      ssdSize: 'base',
      rgbCooling: false,
    })
  }

  // Cost configurations
  const pricingMatrix = {
    cpuUpgrade: 250,
    gpuUpgrade: 450,
    ram: {
      base: 0,
      mid: 120, // +32GB or next step
      max: 280, // +64GB or next step
    },
    ssd: {
      base: 0,
      mid: 100, // 2TB
      max: 220, // 4TB
    },
    rgbCooling: 85,
  }

  // Calculate final custom price
  const finalPrice = (() => {
    let total = activeProduct.price
    if (upgrades.cpuUpgrade) total += pricingMatrix.cpuUpgrade
    if (upgrades.gpuUpgrade) total += pricingMatrix.gpuUpgrade
    total += pricingMatrix.ram[upgrades.ramSize]
    total += pricingMatrix.ssd[upgrades.ssdSize]
    if (upgrades.rgbCooling && activeProduct.category !== 'laptop') total += pricingMatrix.rgbCooling
    return total
  })()

  // Format pricing
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val)
  }

  const handleOrder = () => {
    setOrderPlaced(true)
    setTimeout(() => {
      setOrderPlaced(false)
      setUpgrades({
        cpuUpgrade: false,
        gpuUpgrade: false,
        ramSize: 'base',
        ssdSize: 'base',
        rgbCooling: false,
      })
    }, 4500)
  }

  return (
    <section id="configurator" className="relative py-24 bg-dark-bg border-t border-white/5">
      {/* Glow */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-electric-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-electric-blue uppercase mb-3">
            Custom Build Studio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Configurador Inteligente en Vivo
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-3">
            Personaliza el hardware base. Nuestro algoritmo valida la compatibilidad térmica y de alimentación instantáneamente.
          </p>
        </div>

        {/* Configurator Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Model select & options */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* System Model Selector */}
            <div className="glass-effect p-6 rounded-xl border border-white/5">
              <h3 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-4 font-mono">
                1. Selecciona el Sistema Base
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {products.map((p) => {
                  const isSelected = activeProduct.id === p.id
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleProductChange(p)}
                      className={`p-4 rounded-lg border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-white/10 border-electric-blue'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs text-gray-400 font-mono uppercase">{p.category}</span>
                      <span className="text-sm font-bold text-white mt-1 block">{p.name}</span>
                      <span className="text-xs font-mono font-bold text-electric-blue mt-4">{formatCurrency(p.price)}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Hardware Customization Toggles */}
            <div className="glass-effect p-6 rounded-xl border border-white/5 flex flex-col gap-6">
              <h3 className="text-xs uppercase tracking-wider text-gray-400 font-bold font-mono">
                2. Configurar Upgrades de Rendimiento
              </h3>

              {/* Processor Upgrade */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
                <div>
                  <span className="text-sm font-bold text-white block">Procesador (CPU)</span>
                  <span className="text-xs text-gray-400 block mt-0.5">
                    Upgrade a modelo superior con mayor número de núcleos y frecuencia.
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono mt-1 block">
                    Base: {activeProduct.specs.cpu}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400 font-mono">+{formatCurrency(pricingMatrix.cpuUpgrade)}</span>
                  <button
                    onClick={() => setUpgrades({ ...upgrades, cpuUpgrade: !upgrades.cpuUpgrade })}
                    className={`px-4 py-2 text-xs font-bold uppercase rounded-lg border transition-all cursor-pointer ${
                      upgrades.cpuUpgrade
                        ? 'bg-electric-blue/10 border-electric-blue text-electric-blue'
                        : 'border-white/5 bg-white/[0.02] text-gray-400 hover:text-white'
                    }`}
                  >
                    {upgrades.cpuUpgrade ? 'Incluido' : 'Añadir'}
                  </button>
                </div>
              </div>

              {/* Graphics Upgrade */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
                <div>
                  <span className="text-sm font-bold text-white block">Tarjeta Gráfica (GPU)</span>
                  <span className="text-xs text-gray-400 block mt-0.5">
                    Aumenta FPS y capacidad de VRAM para edición 3D o gaming 4K.
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono mt-1 block">
                    Base: {activeProduct.specs.gpu}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400 font-mono">+{formatCurrency(pricingMatrix.gpuUpgrade)}</span>
                  <button
                    onClick={() => setUpgrades({ ...upgrades, gpuUpgrade: !upgrades.gpuUpgrade })}
                    className={`px-4 py-2 text-xs font-bold uppercase rounded-lg border transition-all cursor-pointer ${
                      upgrades.gpuUpgrade
                        ? 'bg-electric-blue/10 border-electric-blue text-electric-blue'
                        : 'border-white/5 bg-white/[0.02] text-gray-400 hover:text-white'
                    }`}
                  >
                    {upgrades.gpuUpgrade ? 'Incluido' : 'Añadir'}
                  </button>
                </div>
              </div>

              {/* RAM Size */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
                <div>
                  <span className="text-sm font-bold text-white block">Memoria RAM (DDR5 Dual Channel)</span>
                  <span className="text-xs text-gray-400 block mt-0.5">
                    Escala el ancho de banda multitarea y la estabilidad del sistema.
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono mt-1 block">
                    Base: {activeProduct.specs.ram}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setUpgrades({ ...upgrades, ramSize: 'base' })}
                    className={`px-3 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      upgrades.ramSize === 'base'
                        ? 'bg-white/10 border-white text-white'
                        : 'border-white/5 bg-white/[0.02] text-gray-400 hover:text-white'
                    }`}
                  >
                    Base
                  </button>
                  <button
                    onClick={() => setUpgrades({ ...upgrades, ramSize: 'mid' })}
                    className={`px-3 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      upgrades.ramSize === 'mid'
                        ? 'bg-electric-blue/10 border-electric-blue text-electric-blue'
                        : 'border-white/5 bg-white/[0.02] text-gray-400 hover:text-white'
                    }`}
                  >
                    +16GB (+{formatCurrency(pricingMatrix.ram.mid)})
                  </button>
                  <button
                    onClick={() => setUpgrades({ ...upgrades, ramSize: 'max' })}
                    className={`px-3 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      upgrades.ramSize === 'max'
                        ? 'bg-electric-blue/10 border-electric-blue text-electric-blue'
                        : 'border-white/5 bg-white/[0.02] text-gray-400 hover:text-white'
                    }`}
                  >
                    +32GB (+{formatCurrency(pricingMatrix.ram.max)})
                  </button>
                </div>
              </div>

              {/* SSD Storage */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
                <div>
                  <span className="text-sm font-bold text-white block">Almacenamiento (Samsung M.2 NVMe)</span>
                  <span className="text-xs text-gray-400 block mt-0.5">
                    Mayor capacidad de almacenamiento ultrarrápido a 7400MB/s.
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono mt-1 block">
                    Base: {activeProduct.specs.ssd}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setUpgrades({ ...upgrades, ssdSize: 'base' })}
                    className={`px-3 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      upgrades.ssdSize === 'base'
                        ? 'bg-white/10 border-white text-white'
                        : 'border-white/5 bg-white/[0.02] text-gray-400 hover:text-white'
                    }`}
                  >
                    Base
                  </button>
                  <button
                    onClick={() => setUpgrades({ ...upgrades, ssdSize: 'mid' })}
                    className={`px-3 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      upgrades.ssdSize === 'mid'
                        ? 'bg-electric-blue/10 border-electric-blue text-electric-blue'
                        : 'border-white/5 bg-white/[0.02] text-gray-400 hover:text-white'
                    }`}
                  >
                    2TB (+{formatCurrency(pricingMatrix.ssd.mid)})
                  </button>
                  <button
                    onClick={() => setUpgrades({ ...upgrades, ssdSize: 'max' })}
                    className={`px-3 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      upgrades.ssdSize === 'max'
                        ? 'bg-electric-blue/10 border-electric-blue text-electric-blue'
                        : 'border-white/5 bg-white/[0.02] text-gray-400 hover:text-white'
                    }`}
                  >
                    4TB (+{formatCurrency(pricingMatrix.ssd.max)})
                  </button>
                </div>
              </div>

              {/* Cooling/RGB (Only for non-laptops) */}
              {activeProduct.category !== 'laptop' && (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-sm font-bold text-white block">Refrigeración Líquida RGB Custom</span>
                    <span className="text-xs text-gray-400 block mt-0.5">
                      Sustituye la líquida estándar por un kit premium RGB Corsair iCUE Elite.
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-400 font-mono">+{formatCurrency(pricingMatrix.rgbCooling)}</span>
                    <button
                      onClick={() => setUpgrades({ ...upgrades, rgbCooling: !upgrades.rgbCooling })}
                      className={`px-4 py-2 text-xs font-bold uppercase rounded-lg border transition-all cursor-pointer ${
                        upgrades.rgbCooling
                          ? 'bg-electric-blue/10 border-electric-blue text-electric-blue'
                          : 'border-white/5 bg-white/[0.02] text-gray-400 hover:text-white'
                      }`}
                    >
                      {upgrades.rgbCooling ? 'Incluido' : 'Añadir'}
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right panel: Live Total Calculator / Checkout summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            
            <div className="glass-effect p-6 rounded-xl border border-white/5 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Neon border decoration */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-electric-blue to-electric-purple" />
              
              <div>
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block">Resumen del Sistema</span>
                <h3 className="font-display font-bold text-lg text-white mt-1 mb-6">Detalle de Configuración</h3>

                {/* Selected Spec lines list */}
                <div className="flex flex-col gap-3.5 mb-8 border-b border-white/5 pb-6">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Modelo Base ({activeProduct.name})</span>
                    <span className="text-white font-semibold font-mono">{formatCurrency(activeProduct.price)}</span>
                  </div>
                  
                  {upgrades.cpuUpgrade && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-electric-blue">Upgrade CPU Pro</span>
                      <span className="text-white font-mono">+{formatCurrency(pricingMatrix.cpuUpgrade)}</span>
                    </div>
                  )}

                  {upgrades.gpuUpgrade && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-electric-blue">Upgrade GPU Ultra</span>
                      <span className="text-white font-mono">+{formatCurrency(pricingMatrix.gpuUpgrade)}</span>
                    </div>
                  )}

                  {upgrades.ramSize !== 'base' && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-electric-blue">Upgrade RAM DDR5</span>
                      <span className="text-white font-mono">+{formatCurrency(pricingMatrix.ram[upgrades.ramSize])}</span>
                    </div>
                  )}

                  {upgrades.ssdSize !== 'base' && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-electric-blue">Upgrade Samsung SSD NVMe</span>
                      <span className="text-white font-mono">+{formatCurrency(pricingMatrix.ssd[upgrades.ssdSize])}</span>
                    </div>
                  )}

                  {upgrades.rgbCooling && activeProduct.category !== 'laptop' && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-electric-purple">Refrigeración Corsair RGB</span>
                      <span className="text-white font-mono">+{formatCurrency(pricingMatrix.rgbCooling)}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center text-xs border-t border-white/5 pt-4">
                    <span className="text-gray-400">Plazo de Ensamblado & Test</span>
                    <span className="text-white font-semibold">48/72 Horas</span>
                  </div>
                </div>

                {/* Final calculated total */}
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block">Total Estimado</span>
                    <span className="text-gray-300 text-xs font-mono">IVA Incluido</span>
                  </div>
                  <span className="text-3xl font-extrabold font-mono text-white tracking-tight animate-pulse-slow">
                    {formatCurrency(finalPrice)}
                  </span>
                </div>
              </div>

              {/* Order placing interaction */}
              {orderPlaced ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/25 flex items-center justify-center text-emerald-400 mx-auto mb-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-white block">¡Configuración Enviada!</span>
                  <span className="text-[10px] text-gray-400 block mt-1">
                    Un ingeniero técnico validará los componentes y te contactará en 10 minutos.
                  </span>
                </div>
              ) : (
                <button
                  onClick={handleOrder}
                  className="w-full btn-premium py-4 bg-gradient-to-r from-electric-blue via-electric-blue to-electric-purple text-dark-bg font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-electric-blue/10 hover:shadow-electric-blue/30 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  Encargar Sistema
                </button>
              )}

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 mt-4 font-mono">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                  VALIDADOR DE COMPATIBILIDAD ACTIVO
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
