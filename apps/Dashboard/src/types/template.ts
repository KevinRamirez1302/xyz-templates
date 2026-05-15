export type Category =
  | 'Dashboard'
  | 'Salud'
  | 'Energía'
  | 'Hotelería'
  | 'Inmobiliaria'
  | 'Logística'
  | 'Restauración'
  | 'E-commerce'

export interface Template {
  id: string
  name: string
  slug: string
  description: string
  category: Category
  image: string
  tags: string[]
}

export const categories: Category[] = [
  'Dashboard',
  'Salud',
  'Energía',
  'Hotelería',
  'Inmobiliaria',
  'Logística',
  'Restauración',
  'E-commerce',
]

export const templates: Template[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    slug: 'dashboard',
    description: 'Panel de control analítico con métricas en tiempo real, gráficos interactivos y gestión de datos empresariales.',
    category: 'Dashboard',
    image: '',
    tags: ['analytics', 'métricas', 'dashboard'],
  },
  {
    id: 'clinica-dental',
    name: 'Clínica Dental',
    slug: 'clinica-dental',
    description: 'Sitio web profesional para clínicas dentales con sistema de citas, servicios y perfiles de especialistas.',
    category: 'Salud',
    image: '',
    tags: ['salud', 'citas', 'clínica'],
  },
  {
    id: 'energia-renovables',
    name: 'Energía Renovable',
    slug: 'energia-renovables',
    description: 'Plataforma informativa para empresas de energía limpia con calculadoras de ahorro y catálogo de soluciones.',
    category: 'Energía',
    image: '',
    tags: ['energía', 'sostenibilidad', 'solar'],
  },
  {
    id: 'hotel',
    name: 'Hotel',
    slug: 'hotel',
    description: 'Sistema de reservas hoteleras con galería de habitaciones, servicios y gestión de disponibilidad.',
    category: 'Hotelería',
    image: '',
    tags: ['reservas', 'turismo', 'alojamiento'],
  },
  {
    id: 'inmobiliaria-comercial',
    name: 'Inmobiliaria Comercial',
    slug: 'inmobiliaria-comercial',
    description: 'Portal inmobiliario para propiedades comerciales con filtros avanzados y mapas interactivos.',
    category: 'Inmobiliaria',
    image: '',
    tags: ['comercial', 'oficinas', 'locales'],
  },
  {
    id: 'inmobiliaria-residencial',
    name: 'Inmobiliaria Residencial',
    slug: 'inmobiliaria-residencial',
    description: 'Plataforma de búsqueda de viviendas con tours virtuales, comparador de propiedades y calculadora hipotecaria.',
    category: 'Inmobiliaria',
    image: '',
    tags: ['viviendas', 'casas', 'apartamentos'],
  },
  {
    id: 'logistica-transporte',
    name: 'Logística y Transporte',
    slug: 'logistica-transporte',
    description: 'Sistema de gestión logística con tracking en tiempo real, rutas optimizadas y panel de flotas.',
    category: 'Logística',
    image: '',
    tags: ['envíos', 'flotas', 'tracking'],
  },
  {
    id: 'restaurante',
    name: 'Restaurante',
    slug: 'restaurante',
    description: 'Web para restaurantes con menú digital, reservas online, sistema de pedidos y galería gastronómica.',
    category: 'Restauración',
    image: '',
    tags: ['menú', 'reservas', 'gastronomía'],
  },
  {
    id: 'tienda-online',
    name: 'Tienda Online',
    slug: 'tienda-online',
    description: 'E-commerce completo con carrito de compras, pasarela de pagos, gestión de inventario y panel de ventas.',
    category: 'E-commerce',
    image: '',
    tags: ['tienda', 'ventas', 'productos'],
  },
]
