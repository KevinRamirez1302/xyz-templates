# Vitalis — Plantilla Web de Salud (Clínica de Salud Integral)

Esta es una plantilla web (template) profesional, moderna y optimizada diseñada para el sector sanitario, específicamente para una **Clínica de Salud Integral / Centro de Especialidades Médicas (Medicina General, Fisioterapia, Nutrición y Pediatría)**. Fomenta una identidad visual limpia, confiable, higiénica y de alta calidad estética para transmitir tranquilidad y captar el interés de nuevos pacientes.

## 📋 Información General

* **Nombre de la Plantilla:** Vitalis
* **Tipo de Negocio:** Salud / Clínica Médica / Centro de Bienestar
* **Tecnologías Clave:** React 19, TypeScript, Vite 8, Tailwind CSS v4, React Router (HashRouter), Lucide React.
* **Idioma principal:** Español (con indicadores de localización bilingüe en la interfaz).

---

## 🎨 Estructura del Sitio (Mini-Web Completa)

La plantilla consta de cuatro secciones/páginas principales navegables a través de una barra de navegación fluida con soporte para dispositivos móviles y dark mode:

1. **Inicio (Home):**
   * Banner de captación de pacientes ("Citas Online Disponibles").
   * Propuesta de valor basada en el rigor clínico y la atención médica humanizada.
   * Indicador visual de estadísticas clave (especialistas, años de experiencia, satisfacción).
   * Tarjetas informativas de valores clínicos (trato personalizado, precisión y prevención) con animaciones hover.
   * Sección de testimonios reales de pacientes.
   * Llamada a la acción (CTA) para agendar cita.

2. **Sobre Nosotros (About Us):**
   * Profundización en la filosofía Vitalis (Prevención, Trato Humano, Innovación).
   * Desglose explicativo de las 5 áreas de salud interconectadas.
   * Tarjetas detalladas del cuadro médico indicando número de colegiado, biografía y foto de alta calidad.

3. **Especialidades (Services/Specialties):**
   * Fichas de las cuatro especialidades principales (Medicina General, Fisioterapia, Nutrición y Pediatría) con especificaciones de horarios y dinámicas de consulta.
   * Línea de tiempo interactiva (timeline) de un circuito de chequeo preventivo completo.
   * Acordeón interactivo del proceso de primera consulta médica paso a paso.

4. **Contacto y FAQ (Contact):**
   * Tarjetas con ubicación, teléfono de secretaría, correo electrónico y horarios extendidos de consulta.
   * Mapa de simulación interactiva local con enlace externo.
   * Formulario de consulta general interactivo con validaciones y banner de confirmación exitosa con React.
   * Acordeón expandible con las Preguntas Frecuentes (FAQ) médicas más comunes (seguros, cancelaciones, aparcamiento).

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

### 3. Compilar para producción (Production bundle)
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
* **Outlines de Foco:** Estilos de foco visible mejorados (`focus-visible:ring-2`) en tono verde azulado/oro para facilitar la orientación visual.
* **Etiquetas Alt:** Todas las imágenes poseen descripciones claras en su atributo `alt`.

### 🔍 SEO
* **HTML semántico:** Uso exhaustivo de `<header>`, `<nav>`, `<main>`, `<section>` y `<footer>`.
* **Metadatos:** Títulos descriptivos únicos y etiquetas meta `<meta name="description">` en `index.html`.
* **Encabezados:** Jerarquía limpia con una sola etiqueta `<h1>` por página y distribución correcta de `<h2>` y `<h3>`.

### 🔒 Seguridad
* Sin claves API ni secretos expuestos en el código fuente.

---

## 🖼️ Recursos Gráficos Usados (Atribución)
* Imágenes libres de regalías con fines médicos obtenidas de Unsplash:
  * Imagen Hero Principal: [Photo by Unsplash Medical Team](https://images.unsplash.com/photo-1629909613654-28e377c37b09)
  * Imagen de Consulta Médica: [Photo by Unsplash Patient Care](https://images.unsplash.com/photo-1576091160399-112ba8d25d1d)
  * Imagen de Fisioterapia: [Photo by Unsplash Rehab session](https://images.unsplash.com/photo-1597764690523-15bea4c581c9)
  * Imagen de Nutrición: [Photo by Unsplash Diet and nutrition](https://images.unsplash.com/photo-1490645935967-10de6ba17061)
  * Retratos de Equipo / Testimonios: Unsplash Portraits.
