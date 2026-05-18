export type Category =
  | "Dashboard"
  | "Salud"
  | "Energía"
  | "Hotelería"
  | "Inmobiliaria"
  | "Logística"
  | "Restauración"
  | "E-commerce"
  | "Belleza";

export interface Template {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: Category;
  image: string;
  tags: string[];
  port: number;
}

export const categories: Category[] = [
  "Dashboard",
  "Salud",
  "Energía",
  "Hotelería",
  "Inmobiliaria",
  "Logística",
  "Restauración",
  "E-commerce",
  "Belleza",
];

export const templates: Template[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    slug: "dashboard",
    description:
      "Panel de control analítico con métricas en tiempo real, gráficos interactivos y gestión de datos empresariales.",
    category: "Dashboard",
    image: "",
    tags: ["analytics", "métricas", "dashboard"],
    port: 0,
  },
  {
    id: "clinica-dental",
    name: "Clínica Dental",
    slug: "clinica-dental",
    description:
      "Sitio web profesional para clínicas dentales con sistema de citas, servicios y perfiles de especialistas.",
    category: "Salud",
    image: "",
    tags: ["salud", "citas", "clínica"],
    port: 0,
  },
  {
    id: "energia-renovables",
    name: "Energía Renovable",
    slug: "energia-renovables",
    description:
      "Plataforma informativa para empresas de energía limpia con calculadoras de ahorro y catálogo de soluciones.",
    category: "Energía",
    image: "",
    tags: ["energía", "sostenibilidad", "solar"],
    port: 0,
  },
  {
    id: "hotel",
    name: "Hotel",
    slug: "hotel",
    description:
      "Sistema de reservas hoteleras con galería de habitaciones, servicios y gestión de disponibilidad.",
    category: "Hotelería",
    image: "",
    tags: ["reservas", "turismo", "alojamiento"],
    port: 0,
  },
  {
    id: "inmobiliaria-comercial",
    name: "Inmobiliaria Comercial",
    slug: "inmobiliaria-comercial",
    description:
      "Portal inmobiliario para propiedades comerciales con filtros avanzados y mapas interactivos.",
    category: "Inmobiliaria",
    image: "",
    tags: ["comercial", "oficinas", "locales"],
    port: 0,
  },
  {
    id: "inmobiliaria-residencial",
    name: "Inmobiliaria Residencial",
    slug: "inmobiliaria-residencial",
    description:
      "Plataforma de búsqueda de viviendas con tours virtuales, comparador de propiedades y calculadora hipotecaria.",
    category: "Inmobiliaria",
    image: "",
    tags: ["viviendas", "casas", "apartamentos"],
    port: 5174,
  },
  {
    id: "logistica-transporte",
    name: "Logística y Transporte",
    slug: "logistica-transporte",
    description:
      "Sistema de gestión logística con tracking en tiempo real, rutas optimizadas y panel de flotas.",
    category: "Logística",
    image: "",
    tags: ["envíos", "flotas", "tracking"],
    port: 0,
  },
  {
    id: "restaurante",
    name: "Restaurante",
    slug: "restaurante",
    description:
      "Web para restaurantes con menú digital, reservas online, sistema de pedidos y galería gastronómica.",
    category: "Restauración",
    image: "",
    tags: ["menú", "reservas", "gastronomía"],
    port: 0,
  },
  {
    id: "tienda-online",
    name: "Tienda Online",
    slug: "tienda-online",
    description:
      "E-commerce completo con carrito de compras, pasarela de pagos, gestión de inventario y panel de ventas.",
    category: "E-commerce",
    image: "",
    tags: ["tienda", "ventas", "productos"],
    port: 0,
  },
  {
    id: "template-gimnasio",
    name: "Gimnasio",
    slug: "template-gimnasio",
    description:
      "Web para gimnasios con planes de membresía, horarios de clases y sistema de registro de usuarios.",
    category: "Salud",
    image: "",
    tags: ["fitness", "membresías", "clases"],
    port: 5175,
  },
  {
    id: "turismo-template",
    name: "Turismo",
    slug: "turismo-template",
    description:
      "Plataforma de turismo con mapas interactivos, guías de destinos y sistema de reservas de tours.",
    category: "Hotelería",
    image: "",
    tags: ["viajes", "mapas", "tours"],
    port: 5176,
  },
  {
    id: "agencia-viajes",
    name: "Agencia de Viajes",
    slug: "agencia-viajes",
    description:
      "Landing page para agencias de viajes con catálogo de destinos, paquetes turísticos y sistema de cotizaciones.",
    category: "Hotelería",
    image: "",
    tags: ["viajes", "agencias", "turismo"],
    port: 5177,
  },
  {
    id: "template-belleza",
    name: "Belleza",
    slug: "template-belleza",
    description:
      "Sitio web para salones de belleza con galería de servicios, sistema de citas y perfiles de estilistas.",
    category: "Belleza",
    image: "",
    tags: ["belleza", "estética", "salón"],
    port: 5178,
  },
  {
    id: "transporte-template",
    name: "Transporte",
    slug: "transporte-template",
    description:
      "Plataforma para empresas de transporte con seguimiento de envíos, cotizaciones en tiempo real y gestión de flotas.",
    category: "Logística",
    image: "",
    tags: ["transporte", "envíos", "logística"],
    port: 5179,
  },
];
