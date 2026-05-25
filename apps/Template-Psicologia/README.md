# MenteClara - Plantilla Web para Psicología y Terapia

![MenteClara Cover](https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=1200)

Plantilla web premium desarrollada como parte del proyecto de plantillas XYZ Digital. Esta plantilla está diseñada específicamente para profesionales de la psicología, terapeutas y clínicas de bienestar mental, ofreciendo una experiencia de usuario inmersiva, moderna y profesional.

## 🚀 Características Principales

- **Diseño Premium y Responsivo**: Interfaz gráfica cuidada al detalle con transiciones suaves, transparencias adaptativas (Glassmorphism) y un Hero de pantalla completa (`100vh`).
- **Animaciones al hacer Scroll**: Sistema de animaciones personalizado (`ScrollReveal`) que revela suavemente el contenido a medida que el usuario baja por la página, creando una experiencia viva e interactiva.
- **Sistema de Rutas**: Navegación fluida (Single Page Application) usando `react-router-dom`.
- **Flujos Separados de Contacto y Reserva**:
  - `/book`: Interfaz de calendario estilo Calendly para seleccionar días, ver horas disponibles y pedir cita de forma guiada en dos pasos.
  - `/contact`: Página clásica de contacto con información de ubicación, mapa, horarios y formulario de mensajería general.
- **Estética Inmersiva**: Barra de navegación que cambia inteligentemente de transparente a opaca para mantener siempre la legibilidad.

## 🛠️ Stack Tecnológico

- **Framework**: [React 18](https://react.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Herramienta de Construcción**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Enrutamiento**: [React Router v6](https://reactrouter.com/)

## 📂 Estructura del Proyecto

```text
src/
├── components/       # Componentes reutilizables (Navbar, Footer, ScrollReveal)
├── pages/            # Páginas principales de la web
│   ├── Home.tsx      # Portada principal con Hero inmersivo y animado
│   ├── About.tsx     # Página "Sobre Mí" con trayectoria
│   ├── Services.tsx  # Catálogo detallado de servicios y tarifas
│   ├── Booking.tsx   # Sistema interactivo de reservas (Calendario)
│   └── Contact.tsx   # Formulario de contacto general
├── App.tsx           # Configuración principal de rutas
├── index.css         # Estilos globales y animaciones personalizadas
└── main.tsx          # Punto de entrada de la aplicación
```

## ⚙️ Instalación y Uso

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Este proyecto utiliza `pnpm` como gestor de paquetes.

1. **Clonar el repositorio** (si aplica) o descargar los archivos base.
2. **Navegar al directorio del proyecto**:
   ```bash
   cd Template-Psicologia
   ```
3. **Instalar dependencias**:
   ```bash
   pnpm install
   ```
4. **Ejecutar el servidor de desarrollo**:
   ```bash
   pnpm run dev
   ```
   *El servidor se iniciará automáticamente, generalmente en `http://localhost:5173`.*

## 📦 Construcción para Producción

Para generar una versión optimizada y lista para subir al servidor, ejecuta:

```bash
pnpm run build
```

Esto compilará la aplicación (verificando estrictamente los tipos de TypeScript bajo la regla `verbatimModuleSyntax`) y generará los archivos estáticos listos para producción en la carpeta `dist/`.

## 🎨 Notas de Diseño y Personalización

- **Imágenes Libres de Derechos**: Todas las imágenes utilizadas como *placeholder* en esta plantilla provienen de Unsplash bajo su licencia de uso libre. Son **100% gratuitas** y pueden ser utilizadas en proyectos comerciales sin problemas de copyright, aunque siempre se recomienda al cliente final sustituirlas por sus fotografías reales para dar un toque más personal.
- **Animaciones**: Las curvas de animación y los retrasos (`delays`) están configurados en `src/index.css`. Puedes envolver cualquier bloque de contenido en el componente `<ScrollReveal>` para darle vida al hacer scroll.

---
*Desarrollado para el catálogo de plantillas web de XYZ Digital.*
