# EcoVida - Plantilla Web de ONG para Conservación Ambiental

EcoVida es una plantilla web interactiva, moderna y accesible de primer nivel diseñada para ONGs y asociaciones de conservación ambiental, biodiversidad y sostenibilidad. Construida con tecnologías de última generación y enfocada en maximizar el impacto visual y la conversión de donantes.

## 🚀 Características Clave

- **Estética Premium**: Interfaz moderna con efectos de glassmorphism, gradientes suaves de color verde/azul y tipografías curadas (`Outfit` y `Plus Jakarta Sans`).
- **Interactividad Avanzada**:
  - **Simulador de Impacto por Año**: Panel interactivo en el Inicio para visualizar el avance histórico de árboles plantados, agua descontaminada y voluntarios activos.
  - **Campañas Urgentes**: Tarjetas de proyectos con barras de progreso animadas que muestran el porcentaje de financiación restante.
  - **Filtros Dinámicos de Proyectos**: Barra de navegación por categorías para segmentar los proyectos de conservación en tiempo real.
  - **Calculadora de Donación Inteligente**: Simulador interactivo que muestra un mensaje descriptivo y cuantitativo del impacto ambiental en función del monto seleccionado.
  - **Formulario de Registro de Voluntarios**: Formulario inteligente que despliega campos extra para la recolección de disponibilidad e interés del voluntario.
  - **Mapa Interactivo Simulado**: Panel interactivo con tabs para cambiar la ubicación geográfica (GPS) y horario de las distintas sedes de la ONG.
- **Optimización de SEO**: Títulos y metadatos dinámicos mediante un componente reutilizable `<SEO />`, garantizando indexabilidad óptima en buscadores.
- **Accesibilidad (A11y)**: Navegación lógica mediante teclado, uso de elementos semánticos de HTML5, soporte para lectores de pantalla mediante roles de ARIA e IDs exclusivos en cada control interactivo.

## 🛠️ Stack Tecnológico

- **React 19**
- **Vite 8**
- **TypeScript**
- **Tailwind CSS v4** (Integración mediante `@tailwindcss/vite`)
- **React Router 7** (Enrutado SPA completo y Scroll-to-Top automático)
- **Lucide React** (Paquete de iconos consistente y optimizado)

## 📂 Estructura del Código

```bash
src/
├── assets/             # Logotipos y recursos gráficos
├── components/
│   ├── Header.tsx      # Barra de navegación adaptable, menú móvil y selector de tema
│   ├── Footer.tsx      # Enlaces de interés, redes de contacto y suscripción al boletín
│   └── SEO.tsx         # Inyector dinámico de títulos y metas SEO
├── pages/
│   ├── Home.tsx        # Sección Hero, contadores históricos y campañas destacadas
│   ├── About.tsx       # Misión, visión, timeline de hitos y equipo técnico
│   ├── Projects.tsx    # Listado interactivo y filtrable de iniciativas
│   ├── Donate.tsx      # Simulador de donaciones con formulario de pasarela seguro
│   └── Contact.tsx     # Formulario de contacto y voluntariado con mapa simulado
├── App.css             # Estilos locales generales
├── index.css           # Punto de entrada de Tailwind v4 y variables de diseño
├── main.tsx            # Punto de renderizado principal de React
└── vite.config.ts      # Configuración de Vite con plugins
```

## ⚙️ Instrucciones de Desarrollo

Para iniciar el servidor de desarrollo local:

```bash
pnpm install
pnpm dev
```

Para validar y construir la versión de producción optimizada:

```bash
pnpm build
```
