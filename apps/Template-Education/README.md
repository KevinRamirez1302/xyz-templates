# Aura Academy — Plantilla Web de Educación (Colegio Bilingüe Montessori)

Esta es una plantilla web (template) profesional y moderna diseñada para el sector educativo, concretamente para un **Colegio Bilingüe Montessori / Escuela de Educación Activa**. Fomenta una identidad visual cálida, confiable y de alta calidad estética para captar el interés de nuevas familias.

## 📋 Información General

* **Nombre de la Plantilla:** Aura Academy
* **Tipo de Negocio:** Educación / Colegio / Escuela Infantil
* **Tecnologías Clave:** React 19, TypeScript, Vite 8, Tailwind CSS v4, React Router (HashRouter), Lucide React.
* **Idioma principal:** Español (con indicadores de localización bilingüe en la interfaz).

---

## 🎨 Estructura del Sitio (Mini-Web Completa)

La plantilla consta de cuatro secciones/páginas principales navegables a través de una barra de navegación fluida con soporte para dispositivos móviles:

1. **Inicio (Home):**
   * Banner de captación de alumnos ("Matrícula Abierta").
   * Propuesta de valor clara basada en el método Montessori y el bilingüismo.
   * Indicador visual de estadísticas clave (ratio alumnos, guías titulados).
   * Tarjetas informativas de pilares pedagógicos con animaciones en hover.
   * Sección de testimonios reales de familias.
   * Llamada a la acción (CTA) para admisiones.

2. **Sobre Nosotros (About Us):**
   * Profundización en los valores del centro (Autonomía, Ritmo individual, Ecología).
   * Desglose explicativo de las 5 áreas Montessori clásicas de aprendizaje.
   * Grid del equipo docente con tarjetas detallando credenciales AMI (Asociación Montessori Internacional), biografías y retratos de alta calidad.

3. **Programas (Programs):**
   * Fichas de las cuatro etapas del desarrollo (Comunidad Infantil, Casa de Niños, Taller I y Taller II) con detalles de ratios y horarios.
   * Línea de tiempo interactiva (timeline) de la jornada diaria escolar.
   * Acordeón interactivo del proceso de admisión paso a paso.

4. **Contacto y FAQ (Contact):**
   * Tarjetas con dirección, teléfono, correo y horarios de atención al cliente.
   * Mapa de simulación interactiva con enlace externo.
   * Formulario de contacto interactivo con campos validados y banner de confirmación exitosa con React.
   * Acordeón expandible con las Preguntas Frecuentes (FAQ) más habituales.

---

## 🛠️ Instrucciones de Ejecución

Para iniciar el proyecto de forma local, asegúrate de tener instalado **Node.js 22+** y **pnpm**.

### 1. Instalar dependencias
```bash
pnpm install
```

### 2. Levantar el servidor de desarrollo
```bash
pnpm dev
```

### 3. Compilar para producción (Producción bundle)
```bash
pnpm build
```

---

## ✅ Checklist de Calidad Cumplido

### 💻 Técnico
* **Build de Producción:** Libre de errores de compilación TypeScript o Vite.
* **Tipado Estricto:** Cero usos del tipo `any` en TypeScript.
* **Biome / ESLint:** Código limpio, formateado y libre de warnings.

### 📱 Responsividad
* **Dispositivos móviles (360px):** Menú hamburguesa desplegable adaptativo, fuentes auto-ajustables y visualización en una sola columna limpia.
* **Tabletas (768px):** Ajuste de rejillas (grids) a dos columnas, espaciados cómodos.
* **Escritorios (1280px y 1920px):** Contenedores maximizados con límites legibles (`max-w-7xl`), espaciados fluidos de sección y elementos side-by-side.

### ♿ Accesibilidad (a11y)
* **Teclado (Tab):** Todo elemento interactivo (enlaces, botones de navegación, campos de formulario, botones de acordeón y selector de modo oscuro) se puede navegar secuencialmente usando `Tab`.
* **Outlines de Foco:** Estilos de foco visible mejorados (`focus-visible:ring-2`) en tono terracota/oro para facilitar la orientación visual.
* **Etiquetas Alt:** Todas las imágenes poseen descripciones claras en su atributo `alt`.

### 🔍 SEO
* **HTML semántico:** Uso exhaustivo de `<header>`, `<nav>`, `<main>`, `<section>` y `<footer>`.
* **Metadatos:** Títulos descriptivos únicos y etiquetas meta `<meta name="description">` en `index.html`.
* **Encabezados:** Jerarquía limpia con una sola etiqueta `<h1>` por página y distribución correcta de `<h2>` y `<h3>`.

### 🔒 Seguridad
* Sin claves API ni secretos expuestos en el código fuente.

### 🖼️ Recursos Gráficos Usados (Atribución)
* Imágenes libres de regalías con fines educativos obtenidas de Unsplash:
  * Imagen Hero Principal: [Photo by Unsplash Classroom](https://images.unsplash.com/photo-1503676260728-1c00da094a0b)
  * Imagen de Pedagogía Cooperativa: [Photo by Unsplash Classroom Activity](https://images.unsplash.com/photo-1577896851231-70ef18881754)
  * Imágenes de Programas / Aulas: Unsplash Toddler & Primary images.
  * Retratos de Equipo / Testimonios: Unsplash Portraits.
