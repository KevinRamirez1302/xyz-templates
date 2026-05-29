export type Category =
  | "Salud"
  | "Hotelería"
  | "Inmobiliaria"
  | "Logística"
  | "E-commerce"
  | "Belleza"
  | "Educación"
  | "Psicología"
  | "Mascotas"
  | "Portfolio";

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
  "Salud",
  "Hotelería",
  "Inmobiliaria",
  "Logística",
  "E-commerce",
  "Belleza",
  "Educación",
  "Psicología",
  "Mascotas",
  "Portfolio",
];

export const templates: Template[] = [
  {
    id: "template-clinicadental",
    name: "Clínica Dental",
    slug: "template-clinicadental",
    description:
      "Sitio web profesional para clínicas dentales con sistema de citas, servicios y perfiles de especialistas.",
    category: "Salud",
    image: "",
    tags: ["salud", "citas", "clínica"],
    port: 5181,
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
    port: 5180,
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
    port: 5179,
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
    port: 5186,
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
    id: "template-salud",
    name: "Salud (Vitalis)",
    slug: "template-salud",
    description:
      "Clínica de especialidades médicas con servicios de medicina general, pediatría, nutrición y fisioterapia.",
    category: "Salud",
    image: "",
    tags: ["salud", "clínica", "vitalis", "citas"],
    port: 5182,
  },
  {
    id: "template-education",
    name: "Educación",
    slug: "template-education",
    description:
      "Sitio web institucional para colegios y academias con programas de estudios, admisiones y actividades.",
    category: "Educación",
    image: "",
    tags: ["educación", "colegio", "programas", "clases"],
    port: 5183,
  },
  {
    id: "template-psicologia",
    name: "Psicología",
    slug: "template-psicologia",
    description:
      "Espacio profesional de psicología con perfiles de terapeutas, servicios terapéuticos y reservas online.",
    category: "Psicología",
    image: "",
    tags: ["psicología", "terapia", "salud-mental", "consultas"],
    port: 5184,
  },
  {
    id: "template-mascotas",
    name: "Mascotas (PetCare)",
    slug: "template-mascotas",
    description:
      "Portal para clínica veterinaria y spa de mascotas con servicios médicos, peluquería y urgencias 24h.",
    category: "Mascotas",
    image: "",
    tags: ["mascotas", "veterinaria", "petcare", "citas"],
    port: 5185,
  },
  {
    id: "template-yoga",
    name: "Yoga (Prana)",
    slug: "template-yoga",
    description:
      "Sitio web para centros de yoga y meditación, con horarios de clases, instructores y reserva de sesiones.",
    category: "Salud",
    image: "",
    tags: ["yoga", "meditación", "bienestar", "clases", "salud"],
    port: 5187,
  },
  {
    id: "template-portfolio",
    name: "Portfolio",
    slug: "template-portfolio",
    description:
      "Portafolio personal profesional con showcase de proyectos, habilidades y sección de contacto.",
    category: "Portfolio",
    image: "",
    tags: ["portfolio", "proyectos", "personal", "cv"],
    port: 5188,
  },
];
