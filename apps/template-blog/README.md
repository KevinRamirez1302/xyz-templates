# Crónica Digital — Plantilla Blog

**Tipo de negocio:** Blog / Podcast  
**Categoría XYZ:** Blog / Podcast (Tecnología, viajes, newsletter, streamer)  
**Perfil:** Becario B — Personas

---

## Descripción

Plantilla de blog editorial completa llamada **Crónica Digital**, orientada a medios digitales independientes que cubren tecnología, cultura, viajes y diseño. El diseño es editorial, moderno y premium con paleta neutra (cream/ink) y acento ámbar.

## Stack

| Herramienta | Versión |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Tailwind CSS | 4 |
| React Router | 7 |
| lucide-react | 1.17 |

## Características

- ✅ **Home**: hero featured posts (2 en grid), category strip, article grid, sidebar trending + newsletter + tag cloud
- ✅ **Artículo**: barra de lectura, índice de secciones, share buttons, author card, related posts
- ✅ **Categoría**: listing filtrado por categoría con breadcrumb
- ✅ **Nosotros**: valores editoriales, team cards, CTA de colaboración
- ✅ **Buscar**: búsqueda client-side por título, categoría, tags, autor
- ✅ **Header**: sticky con blur, nav activo, menú móvil
- ✅ **Footer**: newsletter inline, links de categoría/empresa/legal, redes sociales

## SEO

- `<title>` y `<meta name="description">` configurados
- Open Graph tags
- `lang="es"` en el HTML
- `alt` en todas las imágenes
- Navegación por teclado (`:focus-visible`)
- Contraste WCAG AA

## Responsividad

| Breakpoint | Estado |
|---|---|
| 360px (móvil) | ✅ |
| 768px (tablet) | ✅ |
| 1280px (escritorio) | ✅ |
| 1920px (pantalla grande) | ✅ |

## Imágenes

Todas las imágenes provienen de **Unsplash** mediante URL directa (CDN). No se descarga ni almacena ninguna imagen localmente. Los parámetros `w=` y `h=` optimizan el tamaño solicitado.

## Cómo arrancar

```bash
pnpm install
pnpm dev
```

## Build de producción

```bash
pnpm build
```
