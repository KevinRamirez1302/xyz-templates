# FitZone - Plantilla de Gimnasio Premium

## Descripción del Proyecto

**FitZone** es una plantilla web moderna y completamente responsive diseñada para gimnasios y centros de fitness. Esta plantilla proporciona una base sólida para que los propietarios de gimnasios puedan presentar sus servicios, planes de membresía y facilidades de forma profesional.

### Tipo de Negocio
- **Categoría**: Deporte y Fitness
- **Subtipo**: Gimnasio Premium
- **Variantes Posibles**: Crossfit, Yoga, Pilates, Club Deportivo, etc.

### Características Principales

✅ **Diseño Moderno y Responsivo**
- Totalmente adaptado a dispositivos móviles (360px, 768px, 1280px, 1920px)
- Interfaz oscura elegante con colores dinámicos
- Transiciones y animaciones suaves

✅ **Secciones Completas**
- **Navbar**: Menú navegable con versión móvil
- **Hero Section**: Portada impactante con call-to-action
- **Sobre Nosotros**: Historia y características del gimnasio
- **Servicios**: 6 servicios principales con iconos
- **Planes de Membresía**: 3 planes diferenciados (Básico, Premium, Élite)
- **Contacto**: Formulario y información de ubicación
- **Footer**: Enlaces, redes sociales y información legal

✅ **Accesibilidad**
- Navegación completa por teclado (Tab)
- Etiquetas ARIA apropiadas
- Contraste de colores suficiente (WCAG AA)
- Semántica HTML correcta

✅ **SEO Optimizado**
- Meta descripción y title optimizados
- Open Graph tags para redes sociales
- Estructura de encabezados (H1, H2, H3)
- URLs semánticas con anchors

✅ **Tecnologías Modernas**
- **React 19**: Framework UI
- **TypeScript**: Tipado seguro
- **Vite**: Bundler rápido
- **Tailwind CSS**: Utilidades de CSS
- **Lucide React**: Iconos profesionales
- **React Router**: Navegación (lista para implementación)

---

## Instalación

### Requisitos Previos
- Node.js 22 LTS
- pnpm (gestor de paquetes)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
```bash
cd template-gimnasio
```

2. **Instalar dependencias**
```bash
pnpm install
```

3. **Iniciar servidor de desarrollo**
```bash
pnpm dev
```

El proyecto estará disponible en `http://localhost:5173`

---

## Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Compila el proyecto para producción
- `pnpm preview` - Vista previa de la compilación
- `pnpm lint` - Ejecuta ESLint para revisar el código

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.tsx          # Barra de navegación
│   ├── Hero.tsx            # Sección principal
│   ├── About.tsx           # Sobre nosotros
│   ├── Services.tsx        # Servicios
│   ├── Plans.tsx           # Planes de membresía
│   ├── Contact.tsx         # Formulario de contacto
│   └── Footer.tsx          # Pie de página
├── App.tsx                 # Componente principal
├── main.tsx                # Punto de entrada
├── App.css                 # Estilos específicos
└── index.css               # Estilos globales (Tailwind)
```

---

## Personalización

### Colores Principales
Los colores pueden modificarse en `tailwind.config.js`:

```javascript
colors: {
  primary: '#f57c00',    // Naranja (puede cambiar)
  dark: '#1a1a1a',       // Fondo oscuro
  light: '#f5f5f5',      // Gris claro
}
```

### Contenido Editable
Todos los textos, imágenes y datos están en los componentes. Para personalizar:

1. **Nombre del Gimnasio**: En `Navbar.tsx` y `Footer.tsx`
2. **Texto y Descripciones**: En cada componente respectivo
3. **Planes de Precios**: En `Plans.tsx`
4. **Servicios**: En `Services.tsx`
5. **Información de Contacto**: En `Contact.tsx`

### Imágenes
Para agregar imágenes reales:
1. Coloca las imágenes en `public/` o `src/assets/`
2. Importa y usa en los componentes

Recomendamos usar imágenes de bancos libres:
- [Unsplash](https://unsplash.com) - Fitness
- [Pexels](https://pexels.com) - Gimnasio
- [Pixabay](https://pixabay.com) - Deportes

---

## Checklist de Calidad

✅ **Técnico**
- [x] Sin errores de compilación
- [x] Sin `any` en TypeScript
- [x] Código limpio y bien estructurado

✅ **Responsividad**
- [x] Móvil (360px)
- [x] Tablet (768px)
- [x] Escritorio (1280px, 1920px)

✅ **Accesibilidad**
- [x] Navegación por teclado
- [x] Contraste de colores WCAG AA
- [x] Etiquetas ARIA

✅ **SEO**
- [x] Title y meta description
- [x] Estructura de encabezados
- [x] Open Graph tags

✅ **Seguridad**
- [x] Sin claves API expuestas
- [x] Sin información sensible

---

## Variantes Posibles

Esta plantilla puede adaptarse a diferentes tipos de negocio fitness:

1. **Crossfit Box**: Énfasis en entrenamientos intensos
2. **Estudio de Yoga**: Diseño más minimalista y zen
3. **Centro de Pilates**: Colores suaves y elegantes
4. **Club Deportivo**: Múltiples disciplinas
5. **Entrenamiento Personal**: Énfasis en servicios 1-a-1

---

## Próximos Pasos

1. **Reemplazar contenido de ejemplo** con información real del gimnasio
2. **Agregar imágenes reales** del gimnasio
3. **Configurar formulario de contacto** con servicio de email (Formspree, EmailJS, etc.)
4. **Agregar más secciones** como:
   - Testimonios de clientes
   - Galería de fotos
   - Blog de fitness
5. **Implementar integraciones**:
   - Sistema de reservas
   - Integración con Google Maps
   - Newsletter
6. **Deploy**: Subir a Netlify, Vercel o tu servidor

---

## Stack Tecnológico

| Herramienta | Versión | Propósito |
|-------------|---------|----------|
| React | 19.2.6 | Framework UI |
| TypeScript | ~6.0.2 | Tipado estático |
| Vite | 8.0.12 | Bundler |
| Tailwind CSS | 3.4.3 | Utilidades CSS |
| Lucide React | 0.408.0 | Iconos |
| React Router | 7.0.0 | Navegación (opcional) |

---

## Soporte y Contribuciones

Para reportar bugs o sugerir mejoras, por favor crea un issue o pull request en el repositorio.

---

## Licencia

Esta plantilla es parte del proyecto XYZ Digital - xyz-plantillas.

---

## Autor

**Becario B - Perfil 'Personas'**
- Plantillas: Turnismo, Dentista, Salud, Educación, Belleza, **Gimnasio**, Yoga, Psicología, Portfolio, Blog, ONG, Mascotas

---

**Última actualización**: Mayo 2026
**Versión**: 1.0.0
