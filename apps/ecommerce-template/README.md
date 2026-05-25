# Plantilla E-Commerce de Computadoras de Alto Rendimiento

Esta es una plantilla de comercio electrónico premium (landing page y catálogo de productos interactivo) inspirada en la jerarquía visual y la estética minimalista y tecnológica . Ha sido adaptada por completo para una tienda de hardware y ordenadores de rendimiento extremo (Gaming, Workstations y Laptops).

---

## ⚡ Características Principales

1. **Diseño Visual Premium**: 
   - Fondos oscuros profundos con overlays radiales de luz neón (`electric-blue` y `electric-purple`).
   - Contenedores interactivos con bordes finos de cristal translúcido (Glassmorphism) mediante `backdrop-filter`.
   - Tipografía de alta legibilidad técnica (`Outfit` y `Plus Jakarta Sans`).
   - Transiciones fluidas en hover y micro-animaciones (ventiladores giratorios, luces parpadeantes y chasis virtuales por CSS puro).

2. **Catálogo con Filtros en Vivo (`ProductGrid` y `ProductCard`)**:
   - Barra de búsqueda reactiva por palabras clave (CPU, GPU, nombre).
   - Selector de pestañas por categorías (Edición Gaming, Workstations Profesionales y Portátiles Apex) con transiciones suaves.
   - Fichas de producto detalladas con especificaciones de hardware (CPU, GPU, RAM, SSD) y precios.

3. **Configurador de Hardware en Tiempo Real (`QuickConfigurator`)**:
   - Panel interactivo donde el usuario puede seleccionar un modelo base y aplicar actualizaciones (procesador superior, tarjeta gráfica Pro, aumento de memoria RAM DDR5, ampliación de almacenamiento SSD NVMe y kits de refrigeración líquida RGB).
   - Cálculo instantáneo del precio total y plazos estimados.
   - Validador simulado de compatibilidad energética y térmica.

4. **Inspector de Especificaciones Desplegable (`ProductDrawer`)**:
   - Panel lateral que se desliza desde la derecha al hacer clic en un producto.
   - Muestra detalles pormenorizados de los fabricantes (ASUS ROG, Kingston FURY, Samsung PRO) y métricas de rendimiento sintético o benchmarks de FPS.

5. **Optimización SEO y Rendimiento**:
   - Estructura semántica de etiquetas en HTML5.
   - Títulos y meta-descripciones configuradas para posicionamiento.
   - Compilación optimizada a producción bajo Vite 8.

---

## 🛠️ Stack Tecnológico

- **Core**: React 19 + TypeScript + Vite 8
- **Estilos**: Tailwind CSS v4 (con configuración basada en directivas `@theme` nativas en `index.css`)
- **Iconografía**: Diseños SVG integrados directamente para evitar dependencias pesadas y asegurar la consistencia.

---

## 📷 Atribución de Imágenes

Las imágenes del catálogo han sido extraídas de **Unsplash**, seleccionadas por su calidad visual en hardware y entornos de computación:

- **Nexus Wraith (Gaming)**: [Foto de Ryan Putman en Unsplash](https://unsplash.com/es/fotos/un-primer-plano-de-un-ventilador-dentro-de-una-computadora-ZzO95b9d7Qk) (`photo-1587202372775-e229f172b9d7`) - Primer plano de una GPU y ventilador líquido de PC.
- **Nexus Overlord (Gaming Extreme)**: [Foto de Sean Do en Unsplash](https://unsplash.com/es/fotos/computadora-de-escritorio-negra-y-roja-hV1h62b3bd4) (`photo-1616588589676-62b3bd4ff6d2`) - Sistema completo de refrigeración líquida personalizada.
- **Nexus Spectre (Gaming Entry)**: [Foto de Ella Don en Unsplash](https://unsplash.com/es/fotos/monitor-de-computadora-encendido-dentro-de-la-habitacion-osfadc38448) (`photo-1542751371-adc38448a05e`) - Configuración de escritorio gamer con luces de acento.
- **Nexus Studio (Workstation Pro)**: [Foto de XPS en Unsplash](https://unsplash.com/es/fotos/computadora-portatil-gris-encendida-8f785ba67e4) (`photo-1593642632823-8f785ba67e45`) - Entorno de trabajo de diseño limpio y minimalista.
- **Nexus Compute (Workstation Server)**: [Foto de Christian Wiediger en Unsplash](https://unsplash.com/es/fotos/primer-plano-de-la-placa-madre-de-la-computadora-690c92f1d2cc) (`photo-1600861195091-690c92f1d2cc`) - Vista interna detallada de circuitos y zócalos de placa madre.
- **Nexus Rogue 16 (Gaming Laptop)**: [Foto de XPS en Unsplash](https://unsplash.com/es/fotos/computadora-portatil-gris-encendida-en-la-mesa-62b3bd4ff6d) (`photo-1603302576837-37561b2e2302`) - Ordenador portátil de perfil metálico oscuro sobre escritorio.
- **Nexus Apex 16 OLED (Creator Laptop)**: [Foto de XPS en Unsplash](https://unsplash.com/es/fotos/computadora-portatil-gris-encendida-en-la-mesa-8f785ba67e4) (`photo-1588872657578-7efd1f1555ed`) - Portátil ultradelgado con pantalla brillante en estudio.
