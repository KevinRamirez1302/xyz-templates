# Prana Studio - Plantilla Web de Yoga y Bienestar

Esta es una plantilla web premium y moderna diseñada para estudios de yoga, meditación, pilates y centros de bienestar integral. Creada como parte del catálogo de plantillas de **XYZ Digital**.

---

## 🧘‍♂️ Sobre el Negocio

* **Nombre del Estudio**: Prana Studio
* **Tipo de Negocio**: Centro de Yoga, Meditación y Bienestar Integral.
* **Esencia de Diseño**: Estilo visual "Zen" con una paleta de colores orgánica (tonos salvia, terracota suave y arenas neutros) y una atmósfera limpia, minimalista y cálida que invita a la desconexión y relajación mental.

---

## 🎨 Capturas de Pantalla

### Diseño del Estudio (Hero Principal)
![Prana Studio Interior](/public/yoga_hero.png)

### Nuestros Instructores
| Sofía Méndez (Fundadora / Vinyasa) | Carlos Vega (Hatha / Meditación) |
| :---: | :---: |
| ![Sofía Méndez](/public/avatar_sofia.png) | ![Carlos Vega](/public/avatar_carlos.png) |

---

## 🚀 Características Principales

1. **Navegación Fluida (Sticky Navbar)**: Menú de navegación flotante con efecto de cristal esmerilado (`glass-nav`), soporte interactivo de tema claro/oscuro y menú móvil responsivo.
2. **Sistema Activo de Scroll**: Resalta de manera dinámica el enlace del menú correspondiente a la sección que el usuario está leyendo mediante un `IntersectionObserver`.
3. **Catálogo de Clases Filtrable**: Visualización de disciplinas de yoga con etiquetas de nivel y duración, con filtros interactivos de dificultad (Principiante, Intermedio, Avanzado).
4. **Planificador Horario Interactivo**: Calendario semanal por días (Lunes a Sábado) y selector de instructor para facilitar la búsqueda de sesiones al alumno.
5. **Membresías Clarificadas**: Tabla de tarifas con el plan mensual destacado y lista de prestaciones.
6. **Formulario de Reserva**: Con validación de campos en tiempo real y mensaje interactivo de confirmación de reserva de clase gratuita.
7. **Boletín / Newsletter**: Suscripción integrada en el pie de página con estado de confirmación.

---

## 🖼️ Recursos de Media (Imágenes y Videos)

Todos los recursos multimedia incluidos en la carpeta `public/` (como `yoga_hero.png`, `hero_yoga_fondo.jpg`, `avatar_sofia.png`, `avatar_carlos.png` y el video `fondo_clases.mp4`) son completamente gratuitos y de libre uso.

---

## 🛠️ Stack Tecnológico

La plantilla está desarrollada utilizando las versiones más recientes indicadas en la guía:

* **React 19**
* **TypeScript**
* **Vite 8**
* **Tailwind CSS v4** (Integrado mediante el compilador nativo `@tailwindcss/vite`)
* **React Router v7**
* **Lucide React** (Iconografía limpia y vectorial)

---

## 💻 Instrucciones para Desarrollo y Despliegue

### Requisitos Previos
* Node.js (versión 22 LTS)
* pnpm (gestor de paquetes)

### 1. Instalar Dependencias
```bash
pnpm install
```

### 2. Levantar Servidor de Desarrollo
```bash
pnpm dev
```
Abre tu navegador en `http://localhost:5173`.

### 3. Verificar Linter y Formato
```bash
pnpm lint
```

### 4. Compilar para Producción
```bash
pnpm build
```
Los archivos optimizados y empaquetados se generarán en la carpeta `dist/`.

---

## 📋 Checklist de Calidad Cumplido

* [x] **Técnico**: Cero errores en `pnpm build`, tipos estrictos en TypeScript (sin uso de `any`) y linter impecable.
* [x] **Responsividad**: Perfecta adaptación visual en dispositivos móviles (360px), tabletas (768px) y escritorios (1280px y 1920px).
* [x] **Accesibilidad**: Navegación amigable con teclado (`Tab` en botones, enlaces y campos de formulario), contraste adecuado y etiquetas descriptivas `aria` y `alt` en imágenes.
* [x] **SEO**: Título descriptivo y metadatos SEO agregados en `index.html`.
* [x] **Seguridad**: Código libre de claves API y credenciales de prueba.
