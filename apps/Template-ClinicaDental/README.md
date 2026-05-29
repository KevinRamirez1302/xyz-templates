# 🦷 DentalPro Clínica — Plantilla Web

**Tipo de negocio:** Clínica Dental  
**Categoría:** Salud / Becario B (Perfil 'personas')  
**Estilo:** Estética premium, corporativo moderno

---

## 📋 Descripción

Plantilla web completa para una **clínica dental de alta gama**. Diseño oscuro/navy con acentos en cian/teal, tipografía Inter, animaciones suaves y layout responsive. Orientada a transmitir confianza, profesionalidad y modernidad.

---

## 🚀 Cómo usar

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Build de producción
pnpm build

# Vista previa del build
pnpm preview
```

---

## 🏗️ Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.tsx        # Barra de navegación sticky con menú mobile
│   ├── Hero.tsx          # Sección portada con tarjetas flotantes y stats
│   ├── Services.tsx      # Grid de 6 servicios dentales
│   ├── About.tsx         # Sobre nosotros con imágenes y ventajas
│   ├── Stats.tsx         # Sección de estadísticas (dark)
│   ├── Team.tsx          # Equipo de especialistas con overlay social
│   ├── Testimonials.tsx  # Testimonios de pacientes
│   ├── CtaBanner.tsx     # Banner llamada a la acción
│   ├── Contact.tsx       # Formulario de cita + mapa Google
│   └── Footer.tsx        # Pie de página con columnas y redes
├── App.tsx               # Composición principal
├── index.css             # Sistema de diseño completo (tokens + componentes)
└── main.tsx              # Punto de entrada React
index.html                # HTML con SEO y Google Fonts
```

---

## 📑 Secciones incluidas

| Sección | ID | Descripción |
|---|---|---|
| Hero | `#inicio` | Portada full-height con imagen, stats bar y tarjetas flotantes |
| Servicios | `#servicios` | Grid 3×2 con 6 tratamientos (implantes, ortodoncia, blanqueamiento…) |
| Nosotros | `#nosotros` | Split layout imagen + texto con lista de ventajas |
| Estadísticas | — | Banda oscura con 4 cifras clave |
| Equipo | `#equipo` | 4 tarjetas de doctores con overlay y redes sociales |
| Testimonios | `#testimonios` | 3 reseñas de pacientes + valoración Google |
| CTA | — | Banner de conversión con llamada a la acción |
| Contacto | `#contacto` | Formulario reactivo + horarios + mapa embebido |
| Footer | — | 4 columnas, redes sociales, badge urgencias, legal |

---

## 🎨 Stack tecnológico

- **React 19** + **TypeScript**
- **Vite 8**
- **lucide-react** — iconos
- **react-router-dom** — disponible para extensión
- **Vanilla CSS** — sistema de diseño con custom properties

---

## ✅ Checklist de calidad

- [x] `pnpm build` sin errores TypeScript
- [x] Sin `any` en TypeScript
- [x] Responsive: 360px / 768px / 1280px / 1920px
- [x] Navegación por teclado (Tab)
- [x] Etiquetas `alt` en todas las imágenes
- [x] Roles y `aria-label` en elementos interactivos
- [x] `<title>` y `<meta description>` correctos
- [x] Sin claves API ni contraseñas expuestas
- [x] Imágenes y recursos de libre uso (Unsplash y assets locales de dominio público y libre distribución)
- [x] Contraste de texto suficiente
- [x] IDs únicos en todos los elementos interactivos

---

## 🖼️ Capturas de pantalla

> Añadir capturas tras visualizar el proyecto en `http://localhost:5173`

| Vista | Descripción |
|---|---|
| Desktop 1280px | Hero, servicios, sobre nosotros |
| Tablet 768px | Layout adaptado a dos columnas |
| Mobile 360px | Menú hamburguesa, stats en 2 columnas |

---

## 🎨 Paleta de colores

| Token | Valor | Uso |
|---|---|---|
| `--primary` | `#0891b2` | Cian principal (botones, iconos, acentos) |
| `--navy` | `#0a0f1e` | Fondo oscuro (hero, stats, testimonios, footer) |
| `--cyan-400` | `#22d3ee` | Cian claro (textos accent, highlights) |
| `--text-dark` | `#111827` | Textos de encabezados |
| `--text` | `#6b7280` | Textos de párrafo |
| `--bg-alt` | `#f9fafb` | Fondo de secciones alternas |

---

## 🖼️ Imágenes y Licencias

Todas las imágenes utilizadas en este proyecto son de **libre uso y distribución gratuita**:
- Las imágenes remotas cargadas vía URL provienen de **Unsplash** (banco de imágenes gratuito y libre de derechos para uso web).
- La imagen local principal del Hero en `src/assets/hero-dental.jpg` es de **libre uso** y libre distribución.

---

## 🔧 Personalización rápida

1. **Nombre de la clínica** → busca `DentalPro` en todos los archivos
2. **Teléfono** → busca `+34 91 234 56 78`
3. **Dirección** → busca `Gran Vía, 45`
4. **Email** → busca `info@dentalpro.es`
5. **Colores** → edita las variables en `src/index.css` bajo `:root`
6. **Imágenes** → reemplaza las URLs de Unsplash por imágenes propias

---

*Plantilla desarrollada para el repositorio xyz-plantillas — XYZ Digital*
