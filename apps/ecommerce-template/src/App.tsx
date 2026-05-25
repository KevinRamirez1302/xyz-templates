import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import type { Product } from './components/ProductCard'
import ProductDrawer from './components/ProductDrawer'
import QuickConfigurator from './components/QuickConfigurator'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

// Fictional Premium PC database matching Gaming, Workstations, Laptops
const PRODUCTS_DATA: Product[] = [
  {
    id: 'nxs-wraith',
    name: 'Nexus Wraith',
    category: 'gaming',
    price: 1899,
    basePrice: 1899,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80',
    description: 'Ordenador gaming optimizado para resoluciones 1440p y altas tasas de refresco. Configurado con refrigeración líquida sellada de bajo ruido y gestión de flujo de aire asistida.',
    specs: {
      cpu: 'Intel Core i7-14700K (20 Cores)',
      gpu: 'NVIDIA RTX 4070 Ti Super 16GB',
      ram: '32GB DDR5 6000MHz CL30',
      ssd: '2TB NVMe M.2 SSD Gen4'
    },
    features: ['Refrigeración Líquida 240mm', 'Placa ASUS ROG Strix B760', 'Fuente 850W 80+ Gold']
  },
  {
    id: 'nxs-overlord',
    name: 'Nexus Overlord',
    category: 'gaming',
    price: 3499,
    basePrice: 3499,
    image: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=600&q=80',
    description: 'La joya de la corona del rendimiento gaming. Diseñado para jugar en resolución 4K Ultra, simulación física y computación paralela masiva.',
    specs: {
      cpu: 'AMD Ryzen 9 7950X3D (16 Cores)',
      gpu: 'NVIDIA RTX 4090 24GB VRAM',
      ram: '64GB DDR5 6000MHz CL32',
      ssd: '4TB NVMe M.2 Gen4 SSD'
    },
    features: ['Refrigeración Líquida Corsair 360mm', 'Placa X670E WiFi', 'Fuente ATX 3.0 PCIe 5.0 1000W']
  },
  {
    id: 'nxs-spectre',
    name: 'Nexus Spectre',
    category: 'gaming',
    price: 1199,
    basePrice: 1199,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    description: 'Equilibrio perfecto de precio y rendimiento. La puerta de entrada ideal a los juegos modernos a 1080p y 1440p en configuraciones optimizadas.',
    specs: {
      cpu: 'Intel Core i5-14600K (14 Cores)',
      gpu: 'NVIDIA RTX 4060 Ti 8GB VRAM',
      ram: '16GB DDR5 5600MHz CL36',
      ssd: '1TB NVMe M.2 SSD Gen4'
    },
    features: ['Disipador de Aire Thermalright Premium', 'Placa B760-Plus WiFi', 'Fuente 650W 80+ Bronze']
  },
  {
    id: 'nxs-studio',
    name: 'Nexus Studio',
    category: 'workstation',
    price: 4999,
    basePrice: 4999,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80',
    description: 'Estación de trabajo optimizada para modelado 3D, animación avanzada, postproducción y simulación en tiempo real con driver corporativo verificado.',
    specs: {
      cpu: 'Intel Xeon W5-3425 (12 Cores)',
      gpu: 'NVIDIA RTX A6000 48GB ECC',
      ram: '128GB DDR5 ECC Reg (4x32GB)',
      ssd: '4TB NVMe Enterprise Class'
    },
    features: ['Memoria RAM con corrección de errores ECC', 'Garantía Corporativa 3 Años In Situ', 'Drivers ISV Certificados']
  },
  {
    id: 'nxs-compute',
    name: 'Nexus Compute',
    category: 'workstation',
    price: 4199,
    basePrice: 4199,
    image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?auto=format&fit=crop&w=600&q=80',
    description: 'Motor de cálculo numérico, entrenamiento de inteligencia artificial y compilación masiva de código con soporte térmico e ingeniería de flujo directo.',
    specs: {
      cpu: 'AMD Threadripper 7960X (24 Cores)',
      gpu: 'NVIDIA RTX 4090 24GB VRAM',
      ram: '128GB DDR5 High-Speed',
      ssd: '2TB NVMe Gen4 SSD RAID'
    },
    features: ['Threadripper TRX50 Series', 'Doble Puerto LAN 10Gbps', 'Chasis Lian Li Server Grade']
  },
  {
    id: 'nxs-rogue',
    name: 'Nexus Rogue 16',
    category: 'laptop',
    price: 1999,
    basePrice: 1999,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80',
    description: 'Portabilidad extrema sin pérdidas de rendimiento. Pantalla calibrada de fábrica con espacio de color verificado para creadores digitales.',
    specs: {
      cpu: 'Intel Core i7-13900H (14 Cores)',
      gpu: 'NVIDIA RTX 4070 Laptop 8GB',
      ram: '32GB DDR5 5200MHz',
      ssd: '1TB NVMe Gen4 SSD'
    },
    features: ['Pantalla 16" QHD+ 240Hz IPS', 'Chasis de Aleación Ligera', 'Batería de larga duración 90Whr']
  },
  {
    id: 'nxs-apex',
    name: 'Nexus Apex 16 OLED',
    category: 'laptop',
    price: 2799,
    basePrice: 2799,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
    description: 'La máxima expresión de tecnología en movilidad. Pantalla OLED infinita de alta resolución y el silicio gráfico más veloz en portátiles.',
    specs: {
      cpu: 'Intel Core Ultra 9 185H (16 Cores)',
      gpu: 'NVIDIA RTX 4080 Laptop 12GB',
      ram: '32GB LPDDR5X Dual-Channel',
      ssd: '2TB NVMe Gen4 SSD'
    },
    features: ['Pantalla 16" 3.2K 120Hz OLED 100% DCI-P3', 'Cargador Compacto GaN 140W USB-C', 'Audio Espacial Certificado']
  }
]

export default function App() {
  // Specs drawer state
  const [activeDrawerProduct, setActiveDrawerProduct] = useState<Product | null>(null)
  
  // Custom configurator selected product
  const [activeConfiguratorProduct, setActiveConfiguratorProduct] = useState<Product | null>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Handle open config from hero or navbar
  const handleOpenGeneralConfigurator = () => {
    // Default to the first product if none is selected
    if (!activeConfiguratorProduct) {
      setActiveConfiguratorProduct(PRODUCTS_DATA[0])
    }
    scrollToSection('configurator')
  }

  // Handle configure from product cards or drawer
  const handleConfigureProduct = (product: Product) => {
    setActiveDrawerProduct(null) // Close drawer if open
    setActiveConfiguratorProduct(product)
    setTimeout(() => {
      scrollToSection('configurator')
    }, 100)
  }

  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 antialiased relative">
      {/* Animated gradient light circles */}
      <div className="gradient-bg" />

      {/* Navigation */}
      <Navbar onOpenConfigurator={handleOpenGeneralConfigurator} />

      {/* Hero */}
      <Hero
        onExploreCatalog={() => scrollToSection('catalog')}
        onOpenConfigurator={handleOpenGeneralConfigurator}
      />

      {/* Product Catalog */}
      <ProductGrid
        products={PRODUCTS_DATA}
        onSelectProduct={(product) => setActiveDrawerProduct(product)}
        onConfigureProduct={handleConfigureProduct}
      />

      {/* Custom Live PC Configurator */}
      <QuickConfigurator
        products={PRODUCTS_DATA}
        selectedProduct={activeConfiguratorProduct}
      />

      {/* Quality Engineering standards */}
      <Features />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Institutional Footer */}
      <Footer />

      {/* Side drawer for specs */}
      <ProductDrawer
        product={activeDrawerProduct}
        onClose={() => setActiveDrawerProduct(null)}
        onConfigure={handleConfigureProduct}
      />
    </div>
  )
}
