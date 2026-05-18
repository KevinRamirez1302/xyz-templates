# Travel Landing Template

Plantilla de landing page para agencias de viajes, tours y páginas de experiencias turísticas. Está construida con React, TypeScript, Vite y Tailwind CSS.

## Qué incluye

- Proyecto listo para usar con Vite + React + TypeScript
- Navbar responsive con enlaces de sección
- Hero con imagen de fondo y CTA
- Secciones de contenido para `About`, `Destinations`, `Contact` y `Footer`
- Comentarios en el código para personalizar fácilmente
- Configuración básica de ESLint y Tailwind

## Cómo usar esta plantilla

1. Instala dependencias:

```bash
pnpm install
```

2. Inicia el servidor de desarrollo:

```bash
pnpm dev
```

## Personaliza el contenido

- `src/pages/Home.tsx` — título de la página, meta descripción y la imagen de fondo principal.
- `src/components/Navbar.tsx` — logo, enlaces y texto del botón.
- `src/components/Hero.tsx` — título principal, subtítulo y CTA.
- `src/components/About.tsx` — descripción de la agencia o producto.
- `src/components/Destinations.tsx` — tarjetas de ejemplo para servicios o paquetes.
- `src/components/Contact.tsx` — formulario, datos de contacto y textos de ayuda.
- `src/components/Footer.tsx` — información de marca, enlaces útiles y copyright.

## Personalización rápida

- Cambia los colores globales en `src/index.css`.
- Reemplaza las imágenes de ejemplo por tus propias fotos.
- Ajusta textos y enlaces para tu marca.

## Ejecución y lint

```bash
pnpm dev
pnpm lint
```
# Estructura del proyecto

template-gimnasio/
├── src/
│   ├── App.tsx                  ← componente raíz, ensambla todo
│   ├── App.css
│   ├── main.tsx
│   ├── index.css
│   ├── assets/
│   └── components/
│       ├── Navbar.tsx           ← menú fijo con burger mobile
│       ├── Hero.tsx             ← sección principal con fondo hero.jpg
│       ├── About.tsx            ← info del gimnasio + lista de instalaciones
│       ├── Services.tsx         ← 6 tarjetas de servicios con iconos
│       ├── Plans.tsx            ← 3 planes de precio (Básico/Premium/Élite)
│       ├── Contact.tsx          ← formulario + info de contacto
│       └── Footer.tsx           ← links + redes sociales
├── public/
│   ├── fondo-hero.jpg           ← imagen de fondo del Hero
│   ├── fondo-gym.png            ← imagen de fondo del resto de secciones
│   ├── favicon.svg
│   └── icons.svg
├── dist/                        ← build ya compilado ✅
├── package.json                 ← React 19 + Vite + Tailwind + lucide-react
└── tailwind.config.js
