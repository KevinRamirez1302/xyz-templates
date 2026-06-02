# Trattoria Italia - Plantilla Web de Restaurante

Una plantilla web moderna y responsiva para un restaurante italiano de alta cocina, construida con React, TypeScript, Tailwind CSS y Vite.

## 📋 Descripción

Trattoria Italia es una plantilla web profesional diseñada para restaurantes, especialmente aquellos que desean mostrar su propuesta culinaria auténtica. Incluye secciones para menú, reservas, información sobre el restaurante y servicios.

## 🎯 Características

- ✅ **Diseño Responsivo** - Se ve perfectamente en móvil (360px), tablet (768px) y escritorio (1280px, 1920px)
- ✅ **Accesibilidad** - Navegación por teclado (Tab), contraste de texto adecuado, etiquetas alt en imágenes
- ✅ **SEO Optimizado** - Meta descripción, title único, estructura semántica HTML5
- ✅ **Sin Errores de TypeScript** - Código tipado completamente sin uso de `any`
- ✅ **Seguro** - Sin claves API ni credenciales expuestas
- ✅ **Imágenes Libres** - Todas las imágenes provienen de Unsplash con atribución

## 🛠️ Stack Tecnológico

- **React 19** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Bundler rápido
- **Tailwind CSS** - Utility-first CSS framework
- **lucide-react** - Iconografía de alta calidad
- **React Router** - Enrutamiento (preparado para futuras expansiones)

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Previsualizar build
pnpm preview

# Linting
pnpm lint
```

## 📄 Secciones de la Plantilla

### 1. **Header/Navegación**
- Logo del restaurante
- Menú de navegación responsivo
- Menú móvil colapsable (hamburguesa)
- Enlaces suaves a secciones (scroll)

### 2. **Hero (Portada)**
- Encabezado principal atractivo
- Subtítulo descriptivo
- Botones de llamada a la acción (CTA)
- Fondo con gradiente y elementos decorativos

### 3. **Sobre Nosotros**
- Imagen del restaurante
- Historia y descripción
- Lista de características principales
- Botón de exploración

### 4. **Menú**
- Tres categorías: Antipasti, Pastas y Platos Principales
- Descripción de cada plato
- Precios
- Grid responsivo

### 5. **Servicios**
- 4 servicios principales: Reservas, Comer aquí, Entrega, Eventos
- Horario de atención
- Información de contacto (teléfono, email, dirección)

### 6. **Formulario de Reserva**
- Campo para nombre, email, teléfono
- Selector de fecha y hora
- Selector de número de personas
- Mensaje personalizado (opcional)
- Confirmación visual después de envío

### 7. **Footer**
- Información de la empresa
- Enlaces rápidos
- Enlaces a redes sociales
- Copyright y enlaces legales

## ♿ Accesibilidad

- ✅ Navegación por teclado completamente funcional
- ✅ Contraste de colores WCAG AA
- ✅ Atributos `aria-label` en botones y enlaces
- ✅ Etiquetas `alt` descriptivas en imágenes
- ✅ Estructura semántica correcta (nav, main, section, footer)

## 📱 Responsividad

Puntos de quiebre Tailwind CSS:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

Testeado en:
- Móvil: 360px (iPhone SE)
- Tablet: 768px (iPad)
- Escritorio: 1280px y 1920px

## 🎨 Paleta de Colores

- **Primary (Marrón cálido)**: #c48362
- **Primary-600**: #b86a43
- **Primary-900**: #882e19
- **Blanco**: #ffffff
- **Gris**: #f3f4f6 a #111827

## 🔐 Seguridad

- ✅ Sin claves API públicas
- ✅ Sin datos sensibles en el código
- ✅ Formulario de reserva con validación básica
- ✅ Imágenes de fuentes confiables (Unsplash)

## 📸 Capturas de Pantalla

[Incluir capturas del sitio en diferentes resoluciones]

## 📝 Checklist de Calidad

- [x] `pnpm build` sin errores
- [x] Sin `any` en TypeScript
- [x] Responsivo en 360px, 768px, 1280px, 1920px
- [x] Navegación por teclado funcional
- [x] Contraste de texto suficiente
- [x] Etiquetas alt en imágenes
- [x] Title y meta description
- [x] Sin claves API expuestas
- [x] Imágenes de fuentes libres
- [x] README con descripción

## 🚀 Próximas Mejoras

- Integración con formularios reales (backend)
- Galería de fotos del restaurante
- Sistema de comentarios/reseñas
- Blog de recetas
- Mapa interactivo
- Integración con redes sociales

## 📄 Licencia

Esta plantilla es parte del proyecto XYZ Plantillas y está disponible para uso educativo y comercial.

## 👨‍💻 Autor

Plantilla desarrollada siguiendo las guías de XYZ Digital para prácticas de alumnos en desarrollo web.

---

**Última actualización**: Junio 2026
**Versión**: 1.0.0
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
