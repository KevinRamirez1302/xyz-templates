# 🏨 Hotel de Lujo - Aplicación Web React & Tailwind CSS

![Hotel Preview](https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop)

Una aplicación web de una sola página (SPA) desarrollada en **React** con **Tailwind CSS**, diseñada específicamente para el sector hotelero de lujo y hospitalidad urbana. La interfaz está orientada a ofrecer una experiencia visual sofisticada, fluida y altamente enfocada en la conversión (reservas directas), inspirada en los estándares de los mejores hoteles boutique y urbanos de 4 y 5 estrellas.

---

## 📋 Tabla de Contenidos

1. [Características Principales](#-características-principales)
2. [Arquitectura de Componentes](#-arquitectura-de-componentes)
3. [Stack Tecnológico](#-stack-tecnológico)
4. [Instalación y Uso Local](#-instalación-y-uso-local)
5. [Créditos y Origen de las Imágenes (Unsplash)](#-créditos-y-origen-de-las-imágenes-unsplash)
6. [Estructura del Proyecto](#-estructura-del-proyecto)
7. [Licencia](#-licencia)

---

## ✨ Características Principales

* **Diseño Mobile-First 100% Responsivo**: Adaptación perfecta desde pantallas móviles hasta monitores UltraWide, asegurando que los controles táctiles del motor de reservas sean amplios y cómodos.
* **Estética Premium & Glassmorphism**: Uso de transparencias con desenfoque (`backdrop-blur`), paleta de colores equilibrada en tonos neutros (carbón, blanco puro, gris perla) y acentos en oro urbano/champán (`#c5a880`).
* **Motor de Reservas Integrado (Booking Engine)**: Barra flotante intuitiva con selectores nativos de fechas, contador de huéspedes interactivo y campo para códigos promocionales.
* **Tipografía Elegante**: Encabezados en **Playfair Display** (transmitiendo clasicismo y exclusividad) combinados con **Montserrat** para una legibilidad contemporánea impecable.
* **Optimización de Rendimiento**: Construido sobre Vite para tiempos de carga instantáneos y renderizado optimizado de componentes funcionales.

---

## 🏗️ Arquitectura de Componentes

La aplicación sigue una arquitectura modular limpia y escalable ubicada en `src/components/`:

```
src/
├── components/
│   ├── Navbar.jsx           # Barra de navegación fija con cambio de estado al hacer scroll y menú móvil.
│   ├── BookingBar.jsx       # Motor de búsqueda y reservas flotante superpuesto en el Hero.
│   ├── RoomCard.jsx         # Tarjeta reutilizable para el catálogo de Habitaciones y Suites.
│   ├── FeaturedServices.jsx # Retícula asimétrica de servicios premium e instalaciones.
│   ├── Testimonials.jsx     # Módulo interactivo de reseñas y experiencias de huéspedes.
│   ├── Footer.jsx           # Pie de página completo con suscripción a newsletter e información legal.
│   └── Home.jsx             # Componente orquestador principal que ensambla todas las secciones.
├── App.tsx                  # Punto de entrada raíz de la UI.
└── index.css                # Configuración de Tailwind CSS v4, tipografías Google Fonts y utilidades.
```

### Detalle de Responsabilidades:

* **`Navbar.jsx`**: Gestiona la navegación del usuario, el selector de idiomas (`ES`, `EN`, `DE`), el contacto telefónico directo y la apertura del cajón móvil (Drawer) en dispositivos pequeños.
* **`BookingBar.jsx`**: Simula el flujo de consulta de disponibilidad. Implementa validaciones visuales y retroalimentación inmediata de éxito al enviar el formulario.
* **`RoomCard.jsx`**: Recibe por `props` la información estructurada de cada habitación (precio, dimensiones en $m^2$, capacidad máxima, tipo de cama y listado de amenidades con iconos dinámicos).
* **`FeaturedServices.jsx`**: Muestra las propuestas de valor clave del hotel (Piscina en ático, Restaurante Cayena, Gimnasio, Salones de Eventos y Ubicación) mediante un diseño de retícula tipo revista de estilo de vida.
* **`Testimonials.jsx`**: Carrusel de citas verificadas con puntuación de estrellas para reforzar la confianza del cliente potencial.
* **`Footer.jsx`**: Contiene un formulario funcional de suscripción a la newsletter con validación y un mapa completo de enlaces del sitio.

---

## 💻 Stack Tecnológico

* **Core**: [React 19](https://react.dev/) / [TypeScript](https://www.typescriptlang.org/)
* **Estilos & Diseño**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Iconografía**: [Lucide React](https://lucide.dev/) (Iconos limpios y profesionales para UIs modernas)
* **Empaquetador & Entorno**: [Vite](https://vite.dev/)
* **Fuentes Web**: Google Fonts ([Playfair Display](https://fonts.google.com/specimen/Playfair+Display) & [Montserrat](https://fonts.google.com/specimen/Montserrat))

---

## 🚀 Instalación y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu entorno de desarrollo local:

### 1. Clonar o abrir el proyecto
Asegúrate de estar en el directorio raíz del proyecto `hotel-template`.

### 2. Instalar las dependencias
Ejecuta el siguiente comando para instalar React, Tailwind CSS y Lucide React:
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
El servidor se iniciará instantáneamente (por lo general en `http://localhost:5173`).

### 4. Construcción para Producción (Opcional)
Para generar los archivos estáticos optimizados para su despliegue:
```bash
npm run build
```

---

## 📸 Créditos y Origen de las Imágenes (Unsplash)

Todas las fotografías utilizadas en esta maqueta son de uso libre y alta calidad, extraídas de la plataforma [Unsplash](https://unsplash.com/). A continuación se presenta la atribución detallada de cada imagen y la sección exacta donde se emplea en la aplicación:

| Sección en la Web | Fotografía / Descripción | Autor en Unsplash | Enlace Directo (URL original) |
| :--- | :--- | :--- | :--- |
| **Hero Section (Fondo)** | Fachada arquitectónica e iluminación nocturna | *Marten Bjork* | [Ver Imagen Unsplash](https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop) |
| **Servicios / Collage** | Piscina de cristal en la azotea y solárium | *Sasha Kaunas* | [Ver Imagen Unsplash](https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop) |
| **Servicios / Collage** | Alta gastronomía / Restaurante Cayena | *Jason Leung* | [Ver Imagen Unsplash](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop) |
| **Servicios Destacados** | Gimnasio moderno & Bienestar | *Danielle Cerullo* | [Ver Imagen Unsplash](https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop) |
| **Servicios Destacados** | Salones de Eventos y Reuniones corporativas | *Hutomo Abrianto* | [Ver Imagen Unsplash](https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop) |
| **Servicios Destacados** | Ubicación céntrica y vista urbana | *Deva Darshan* | [Ver Imagen Unsplash](https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop) |
| **Catálogo Habitaciones** | Habitación Doble Superior (Cama y ventanal) | *Steven Ungermann* | [Ver Imagen Unsplash](https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop) |
| **Catálogo Habitaciones** | Habitación Executive con Terraza privada | *Rhema Kallianpur* | [Ver Imagen Unsplash](https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop) |
| **Catálogo Habitaciones** | Suite Parque García Sanabria (Bañera e interior) | *Visualsofdana* | [Ver Imagen Unsplash](https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop) |
| **Catálogo Habitaciones** | Suite Hotel Lounge (Cama King y atenciones) | *Edvin Johansson* | [Ver Imagen Unsplash](https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop) |
| **Collage Home (Intro)** | Detalle de habitación de lujo y sábanas blancas | *Mink Mingle* | [Ver Imagen Unsplash](https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=800&auto=format&fit=crop) |
| **Collage Home (Intro)** | Recepción, lobby y zona lounge elegante | *Austin Distel* | [Ver Imagen Unsplash](https://images.unsplash.com/photo-1551882532-0955243367c4?q=80&w=800&auto=format&fit=crop) |

> **Nota de Licencia Unsplash**: Todas las fotos publicadas en Unsplash se pueden usar de forma gratuita para fines comerciales y no comerciales de acuerdo con los términos de la licencia de Unsplash. No se requiere permiso adicional.

---

## 📁 Estructura del Proyecto

El proyecto está configurado bajo el estándar de Vite con soporte para React, TypeScript y JSX:

* `package.json`: Contiene las definiciones de scripts (`dev`, `build`, `lint`) y las dependencias clave (`lucide-react`, `tailwindcss`, `@tailwindcss/vite`).
* `vite.config.ts`: Configuración del empaquetador con los plugins de React y Tailwind CSS v4 habilitados.
* `tsconfig.app.json`: Configuración de TypeScript con la directiva `"allowJs": true` para asegurar la total compatibilidad con los componentes `.jsx`.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Eres libre de utilizar, modificar y adaptar esta plantilla para tus propios desarrollos comerciales o personales en el sector hotelero.
