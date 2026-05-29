import type { Author, Category, Post } from '../types'

export const AUTHORS: Author[] = [
  {
    id: 'elena-vidal',
    name: 'Elena Vidal',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face',
    bio: 'Periodista y escritora apasionada por la tecnología, el diseño y los viajes. Lleva más de ocho años explorando la intersección entre cultura digital y vida cotidiana.',
    role: 'Editora jefa',
    social: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'marcos-diaz',
    name: 'Marcos Díaz',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=80&h=80&fit=crop&crop=face',
    bio: 'Desarrollador y divulgador tecnológico. Escribe sobre IA, privacidad y el futuro del trabajo desde una perspectiva humana.',
    role: 'Editor de Tecnología',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'lucia-fernandez',
    name: 'Lucía Fernández',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
    bio: 'Diseñadora gráfica y fotógrafa que convierte sus viajes en historias visuales. Colabora con medios internacionales de moda y estilo de vida.',
    role: 'Editora de Estilo',
    social: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
]

export const CATEGORIES: Category[] = [
  { id: 'tecnologia', name: 'Tecnología', slug: 'tecnologia', color: 'bg-neutral-100 text-neutral-800 border border-neutral-300' },
  { id: 'viajes',     name: 'Viajes',     slug: 'viajes',     color: 'bg-neutral-100 text-neutral-800 border border-neutral-300' },
  { id: 'cultura',    name: 'Cultura',    slug: 'cultura',    color: 'bg-neutral-100 text-neutral-800 border border-neutral-300' },
  { id: 'diseno',     name: 'Diseño',     slug: 'diseno',     color: 'bg-neutral-100 text-neutral-800 border border-neutral-300' },
  { id: 'bienestar',  name: 'Bienestar',  slug: 'bienestar',  color: 'bg-neutral-100 text-neutral-800 border border-neutral-300' },
  { id: 'opinion',    name: 'Opinión',    slug: 'opinion',    color: 'bg-neutral-100 text-neutral-800 border border-neutral-300' },
]

const [tec, via, cul, dis, bie, opi] = CATEGORIES
const [elena, marcos, lucia] = AUTHORS

export const POSTS: Post[] = [
  {
    id: '1',
    slug: 'ia-generativa-cambia-creatividad',
    title: 'Cómo la IA generativa está redefiniendo la creatividad humana',
    excerpt:
      'De las herramientas de generación de imágenes a los asistentes de escritura: exploramos si la IA amplía o sustituye la creatividad, y qué significa eso para los creadores.',
    content: `
La inteligencia artificial generativa ha irrumpido con fuerza en el ecosistema creativo. Herramientas como Midjourney, DALL·E o Stable Diffusion permiten crear imágenes fotorrealistas a partir de simples descripciones de texto. Claude, GPT-4 y Gemini redactan artículos, historias y código con una fluidez sorprendente.

## El debate sobre la autoría

La gran pregunta que surge es: ¿quién es el autor? ¿La persona que escribe el prompt, el modelo entrenado con millones de obras humanas, o ambos? Los tribunales de distintos países están empezando a pronunciarse, pero la cuestión sigue siendo profundamente filosófica.

Algunos creadores ven estas herramientas como una extensión de sus capacidades, del mismo modo que Photoshop amplió las posibilidades de los fotógrafos. Otros temen la devaluación de sus habilidades y la saturación del mercado con contenido genérico.

## Amplificación, no sustitución

La evidencia más reciente sugiere que los profesionales que integran IA en su flujo de trabajo producen más y, a menudo, de mayor calidad. No porque la IA sea superior, sino porque libera tiempo para las decisiones creativas de alto nivel: la dirección conceptual, el criterio editorial, la voz única.

Lo que la IA no puede replicar —al menos hoy— es la experiencia vivida, la emoción auténtica y el punto de vista singular que surge de una vida concreta. Un artículo escrito por alguien que vivió el terremoto de Turquía tiene un peso que ningún modelo puede fabricar.

## El rol del curador

El talento del futuro puede ser el de curador: alguien capaz de distinguir lo brillante de lo mediocre dentro de un océano de contenido generado automáticamente. El gusto, la coherencia y la intención narrativa se vuelven más valiosos, no menos.

En definitiva, la IA generativa es una herramienta poderosa que amplifica lo que el creador aporta. El reto está en usarla con criterio, sin perder la voz propia en el proceso.
    `,
    category: tec,
    tags: ['IA', 'creatividad', 'futuro del trabajo', 'diseño'],
    author: marcos,
    publishedAt: '2026-05-20',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=630&fit=crop',
    featured: true,
  },
  {
    id: '2',
    slug: 'ruta-costa-amalfitana',
    title: 'Costa Amalfitana: la ruta de los colores que no se olvida',
    excerpt:
      'Positano, Ravello, Praiano — siete días recorriendo uno de los litorales más cinematográficos de Europa. Guía práctica y honesta para 2026.',
    content: `
La Costa Amalfitana tiene algo de injusto. Te atrapa con sus postales —terrazas sobre el mar, limones del tamaño de un puño, casas de colores apiladas como fichas de dominó— y cuando llegas te das cuenta de que la realidad supera la fotografía.

## El mejor momento para ir

Evita agosto a toda costa. Las carreteras de cornisa se convierten en atascos infernales y los precios se triplican. Mayo, junio y principios de octubre son el punto dulce: luz dorada, menos turistas y bares abiertos.

## Positano sin las multitudes

La clave es madrugar. A las 7 de la mañana la playa de Fornillo es tuya. A las 11 ya no encontrarás dónde poner la toalla. El casco histórico, con sus callejuelas empinadas y su iglesia de cúpula azul, merece un paseo lento y sin móvil.

## Ravello, el secreto mejor guardado

Pocos turistas suben a Ravello, 350 metros sobre el mar. El jardín de la Villa Rufolo, con sus azulejos árabes y su vista hacia el golfo, es uno de esos lugares que reconcilian con el mundo. Wagner lo amaba. Nosotros también.

## Practicidades

- **Alojamiento**: Reserva con meses de antelación. Los agriturismos en las colinas ofrecen mejor precio y vistas superiores a los hoteles de costa.
- **Transporte**: El ferry entre pueblos es más rápido y agradable que el autobús en carretera.
- **Presupuesto**: Cuenta con 150–200 € diarios para dos personas en temporada media.

La Costa Amalfitana no es barata ni cómoda. Pero hay viajes que se miden por la intensidad de lo que te dejan, no por su comodidad. Este es uno de ellos.
    `,
    category: via,
    tags: ['Italia', 'costa', 'Europa', 'guía de viaje'],
    author: lucia,
    publishedAt: '2026-05-15',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=1200&h=630&fit=crop',
    featured: true,
  },
  {
    id: '3',
    slug: 'minimalismo-digital-2026',
    title: 'Minimalismo digital: cómo recuperar el foco en la era de la sobreinformación',
    excerpt:
      'Notificaciones, newsletters, feeds infinitos... Hablamos con expertos en bienestar digital sobre estrategias prácticas para reconquistar tu atención.',
    content: `
El minimalismo digital no es una moda ni una dieta tecnológica de temporada. Es una respuesta racional a un entorno diseñado para capturar y retener tu atención indefinidamente.

## El costo de la sobreinformación

Estudios de la Universidad de California, Irvine, señalan que recuperarse de una interrupción digital puede llevar hasta 23 minutos. Si revisas el teléfono decenas de veces al día, el trabajo profundo se vuelve prácticamente imposible.

## Principios del minimalismo digital

**1. Intencionalidad radical**: Cada aplicación que instalas debería responder a la pregunta "¿para qué?". Si no tienes una respuesta clara, elimínala.

**2. Bloques de tiempo sin pantallas**: Protege al menos dos horas diarias sin acceso a dispositivos. La primera hora de la mañana y la última antes de dormir son las más valiosas.

**3. Bandeja de entrada como decisión, no como hábito**: Revisar el correo no es una tarea pasiva. Hazlo dos veces al día, con intención, y ciérralo entre medias.

**4. Modo avión como herramienta de productividad**: No solo para volar. Úsalo durante bloques de trabajo profundo.

## Lo que no es minimalismo digital

No se trata de dejar de usar tecnología. Se trata de usarla con criterio. Un creador de contenido puede ser minimalista digital; un desarrollador también. La clave no está en la cantidad de herramientas, sino en la relación consciente con ellas.

El objetivo final es simple: que la tecnología trabaje para ti, y no al revés.
    `,
    category: bie,
    tags: ['productividad', 'bienestar', 'tecnología', 'foco'],
    author: elena,
    publishedAt: '2026-05-10',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=630&fit=crop',
    featured: false,
  },
  {
    id: '4',
    slug: 'tipografia-2026-tendencias',
    title: 'Las fuentes que definen el diseño en 2026',
    excerpt:
      'Variable fonts, serif de alto contraste y letras con carácter: repasamos los estilos tipográficos que están dominando la identidad de marca este año.',
    content: `
La tipografía nunca ha sido solo una cuestión de legibilidad. Es voz, carácter, actitud. En 2026, asistimos a una revolución silenciosa que está redefiniendo cómo las marcas se comunican visualmente.

## El regreso del serif dramático

Después de años de minimalismo sans-serif, el serif de alto contraste ha vuelto con fuerza. Fuentes como Editorial New, Canela o la omnipresente Playfair Display aportan una sensualidad editorial que las grotescas nunca lograron.

## Variable fonts: flexibilidad total

Las fuentes variables permiten ajustar peso, anchura e inclinación en tiempo real, lo que abre posibilidades animadas imposibles antes. Marcas como Apple y Google las han adoptado masivamente.

## Tipografía emocional

La tendencia más interesante es la búsqueda de fuentes con "defectos" intencionales: irregularidades, gestos manuales, trazos asimétricos que evocan la calidez de lo hecho a mano. Es la reacción humana a la perfección algorítmica.

## Recomendaciones para 2026

- **Titulares**: Serif de alto contraste (Editorial New, Freight Display, Cormorant)
- **Cuerpo de texto**: Sans humanista (Inter, Söhne, Neue Haas Grotesk)
- **Acento**: Monoespaciada expresiva para datos y código

La clave, como siempre en diseño, no está en seguir la tendencia sino en entender por qué funciona y aplicarla con criterio propio.
    `,
    category: dis,
    tags: ['tipografía', 'diseño gráfico', 'tendencias', 'branding'],
    author: lucia,
    publishedAt: '2026-05-05',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=630&fit=crop',
    featured: false,
  },
  {
    id: '5',
    slug: 'teatro-independiente-madrid',
    title: 'Teatro independiente en Madrid: la escena que no sale en los carteles',
    excerpt:
      'Más allá de los grandes teatros de la Gran Vía, existe una escena viva, experimental y urgente. Te contamos dónde encontrarla.',
    content: `
Madrid tiene una de las escenas de teatro independiente más activas de Europa, y paradójicamente, una de las menos visibles. No encontrarás sus espectáculos en los grandes portales de entradas. Hay que saber dónde mirar.

## Los espacios que importan

**Sala Cuarta Pared** (Orcasitas): Referencia del teatro de investigación. Su programación apuesta por dramaturgia contemporánea española e internacional con un rigor poco habitual.

**Teatro del Barrio** (Lavapiés): Comprometido y político. Heredero del espíritu de La Corrala, ha acogido primeras lecturas de textos que luego llegaron a los grandes escenarios.

**Naves del Español en Matadero**: El espacio más grande de los tres, pero igual de comprometido con el riesgo creativo. Sus producciones propias son habitualmente lo mejor de la temporada.

## Por qué vale la pena

El teatro independiente no tiene la producción de los musicales de la Gran Vía, pero tiene algo que estos raramente consiguen: urgencia. Los textos son actuales, los actores están presentes de verdad y los directores tienen algo que decir.

Además, los precios son notablemente más accesibles: entre 8 y 18 euros para espectáculos que en otros contextos costarían el triple.

## Cómo mantenerse al día

La mejor guía sigue siendo el boca a boca. Síguelo en redes a los propios teatros, a la crítica de El País Tentaciones y al newsletter semanal de Artez. La comunidad es pequeña y generosa.
    `,
    category: cul,
    tags: ['teatro', 'Madrid', 'cultura', 'artes escénicas'],
    author: elena,
    publishedAt: '2026-04-28',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=1200&h=630&fit=crop',
    featured: false,
  },
  {
    id: '6',
    slug: 'privacidad-era-ia',
    title: 'Tu privacidad en la era de la IA: lo que nadie te explica',
    excerpt:
      'Cada prompt que envías a un chatbot puede ser datos de entrenamiento. Exploramos los riesgos reales y las alternativas para proteger tu información.',
    content: `
Cada vez que usas un asistente de IA, estás participando en un intercambio que pocas personas comprenden del todo. Los términos y condiciones son largos, la tecnología es opaca y las consecuencias son difusas. Pero son reales.

## ¿Qué pasa con tus prompts?

La política varía según el proveedor. OpenAI, por ejemplo, puede usar las conversaciones de usuarios de plan gratuito para mejorar sus modelos, salvo que lo desactives expresamente en ajustes. Google tiene políticas similares con Gemini. La mayoría de los usuarios nunca ha abierto esa pantalla.

## Los datos que no piensas que estás dando

No se trata solo de lo que escribes explícitamente. El análisis de tus prompts puede revelar tu profesión, tu situación personal, tus preocupaciones de salud, tus opiniones políticas. Es un perfil riquísimo que muy poca gente cedería conscientemente.

## Alternativas para usuarios conscientes

**Modelos locales**: Herramientas como Ollama permiten ejecutar modelos open-source directamente en tu ordenador. Sin conexión al servidor, sin datos que salgan de tu máquina.

**Proveedores con mayor privacidad**: Mistral (empresa europea, sujeta al RGPD) o Anthropic (que ofrece opciones de no entrenamiento más claras) son alternativas a considerar.

**Higiene básica**: No incluir nombres reales, información médica ni datos financieros en prompts a servicios de terceros.

## El RGPD como escudo

Los residentes en la UE tienen derechos específicos: solicitar qué datos se tienen sobre ellos, pedir su eliminación y negarse al tratamiento para fines de entrenamiento. Pocas personas los ejercen, pero están ahí.

La privacidad en la era de la IA no es un problema técnico. Es una cuestión de consciencia y de elecciones informadas.
    `,
    category: tec,
    tags: ['privacidad', 'IA', 'ciberseguridad', 'RGPD'],
    author: marcos,
    publishedAt: '2026-04-20',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=630&fit=crop',
    featured: false,
  },
  {
    id: 'b1',
    slug: 'escuelas-en-red',
    title: 'Escuelas en red',
    excerpt: 'Una escuela que se piensa desde la biblioteca',
    content: 'La biblioteca escolar debe ser el corazón del centro educativo, un espacio de encuentro y aprendizaje crítico.',
    category: opi,
    tags: ['educación', 'lectura'],
    author: elena,
    publishedAt: '2026-05-29',
    readingTime: 2,
    coverImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&fit=crop',
    featured: false,
    blogName: 'Escuelas en red',
    coordinador: 'RODRIGO J. GARCÍA',
  },
  {
    id: 'b2',
    slug: '3500-millones-desconexion',
    title: '3.500 Millones',
    excerpt: 'Desconexión y sostenibilidad: el reto de escuchar a todos para lograr una agenda común',
    content: 'La sostenibilidad global requiere la participación activa de las comunidades locales e indígenas.',
    category: opi,
    tags: ['sostenibilidad', 'desarrollo'],
    author: marcos,
    publishedAt: '2026-05-28',
    readingTime: 3,
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&fit=crop',
    featured: false,
    blogName: '3.500 Millones',
    coordinador: 'GONZALO FANJUL Y PATRICIA RÁEZ',
  },
  {
    id: 'b3',
    slug: 'del-tirador-a-la-ciudad',
    title: 'Del tirador a la ciudad',
    excerpt: 'Algas, sal, semillas de girasol y arroz para convertir un almacén de trenes en laboratorio creativo',
    content: 'Materiales biológicos y diseño sostenible aplicados a la arquitectura urbana del mañana.',
    category: opi,
    tags: ['diseño', 'arquitectura'],
    author: lucia,
    publishedAt: '2026-05-27',
    readingTime: 4,
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&fit=crop',
    featured: false,
    blogName: 'Del tirador a la ciudad',
    coordinador: 'ANATXU ZABALBEASCOA',
  },
  {
    id: 'b4',
    slug: 'elemental-crimen',
    title: 'Elemental',
    excerpt: 'Tres clásicos de la ficción criminal reeditados, tres apuestas sorprendentes',
    content: 'Análisis de las mejores novelas negras que vuelven a las librerías con ediciones cuidadas.',
    category: opi,
    tags: ['literatura', 'novela negra'],
    author: elena,
    publishedAt: '2026-05-26',
    readingTime: 3,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&fit=crop',
    featured: false,
    blogName: 'Elemental',
    coordinador: 'JUAN CARLOS GALINDO',
  },
  {
    id: 'b5',
    slug: 'migrados-mujeres',
    title: 'Migrados',
    excerpt: 'Mujeres migrantes, extraordinarias pero anónimas',
    content: 'Relatos de vida de mujeres que cruzaron fronteras y sostienen comunidades enteras en la sombra.',
    category: opi,
    tags: ['migración', 'derechos'],
    author: marcos,
    publishedAt: '2026-05-25',
    readingTime: 3,
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&fit=crop',
    featured: false,
    blogName: 'Migrados',
    coordinador: 'LOLA HIERRO',
  },
  {
    id: 'b6',
    slug: 'alterconsumismo-derechos',
    title: 'Alterconsumismo',
    excerpt: 'Defender los derechos de las mujeres también con tu consumo',
    content: 'Cómo las decisiones de compra diarias impactan en la cadena de suministro de las trabajadoras textiles.',
    category: opi,
    tags: ['consumo', 'feminismo'],
    author: lucia,
    publishedAt: '2026-05-24',
    readingTime: 2,
    coverImage: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?w=600&fit=crop',
    featured: false,
    blogName: 'Alterconsumismo',
    coordinador: 'ANNA ARGEMÍ',
  },
  {
    id: 'b7',
    slug: 'el-toro-por-los-cuernos',
    title: 'El toro, por los cuernos',
    excerpt: 'Las plazas de La Maestranza y Las Ventas, hasta la bandera; ¿por qué va tanta gente a los toros?',
    content: 'Reflexiones sobre la tauromaquia contemporánea, su arraigo popular y sus contradicciones éticas.',
    category: opi,
    tags: ['cultura', 'tradición'],
    author: elena,
    publishedAt: '2026-05-23',
    readingTime: 3,
    coverImage: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=600&fit=crop',
    featured: false,
    blogName: 'El toro, por los cuernos',
    coordinador: 'ANTONIO LORCA',
  },
  {
    id: 'b8',
    slug: 'la-ruta-norteamericana-jazz',
    title: 'La Ruta Norteamericana',
    excerpt: 'Disciplinantes: el trío de jazz hipnótico que se inspira en un cuadro de Goya',
    content: 'Una aproximación a la música experimental del trío norteamericano y su relación con el arte español.',
    category: opi,
    tags: ['música', 'jazz'],
    author: lucia,
    publishedAt: '2026-05-22',
    readingTime: 3,
    coverImage: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&fit=crop',
    featured: false,
    blogName: 'La Ruta Norteamericana',
    coordinador: 'FERNANDO NAVARRO',
  },
  {
    id: 'b9',
    slug: 'cronica-aniversario',
    title: 'Crónica que hacemos',
    excerpt: 'Llevamos la celebración de nuestro aniversario con un espacio interactivo de debate y periodismo libre',
    content: 'El diario participa en el encuentro literario con un espacio interactivo y la presentación del libro.',
    category: opi,
    tags: ['periodismo', 'aniversario'],
    author: elena,
    publishedAt: '2026-05-21',
    readingTime: 2,
    coverImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&fit=crop',
    featured: false,
    blogName: 'EL PAÍS que hacemos',
    coordinador: 'EQUIPO DE COMUNICACIÓN',
  },
  {
    id: 'b10',
    slug: 'planeta-futuro-mineria',
    title: 'Planeta Futuro',
    excerpt: 'El avance de la minería ilegal en la Amazonia venezolana: impacto ambiental y migración',
    content: 'La destrucción de la selva y el desplazamiento forzado de comunidades indígenas por la minería ilegal.',
    category: opi,
    tags: ['ecología', 'amazonía'],
    author: marcos,
    publishedAt: '2026-05-20',
    readingTime: 4,
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&fit=crop',
    featured: false,
    blogName: 'Planeta Futuro',
    coordinador: 'PLANETA FUTURO',
  },
]

export const FEATURED_POSTS = POSTS.filter(p => p.featured)
export const RECENT_POSTS   = [...POSTS].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
)
