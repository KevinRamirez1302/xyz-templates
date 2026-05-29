# Plantilla Web XYZ: Portfolio Personal

Esta es una plantilla web de muestra premium para perfiles individuales como desarrolladores independientes, diseñadores UI/UX, fotógrafos o ilustradores. Ha sido diseñada y optimizada para servir como punto de partida rápido para nuevos clientes de **XYZ Digital**.

## Información del Negocio
- **Nombre de Ejemplo**: Alex Vance
- **Tipo de Negocio**: Portfolio Personal (Desarrollador & Diseñador Freelance)
- **Categoría**: Personas
- **Descripción Breve**: Un portfolio web interactivo, responsivo y accesible que muestra habilidades técnicas, proyectos previos, experiencia laboral y educación, con soporte de modo claro/oscuro persistente y formulario de contacto validado.

## Características Principales & Elementos Interactivos
1. **Conmutador de Temas (Claro / Oscuro)**: Botón interactivo en el menú que alterna entre los modos claro y oscuro, con transición animada suave y persistencia local (`localStorage`).
2. **Máquina de Escribir de Roles (Hero)**: Animación interactiva en la cabecera que escribe y borra dinámicamente los distintos roles del profesional.
3. **Tarjeta 3D Interactiva (Hero)**: Visualizador de código simulado en 3D que gira e inclina sus ejes según la posición en tiempo real del ratón (`mousemove`).
4. **Descargador de CV Animado (Hero)**: Botón con barra de carga progresiva simulada y estados interactivos de éxito.
5. **Pestañas Interactivas (About)**: Panel selector de subsecciones para leer la biografía ("Mi Historia", "Filosofía" y "Habilidades Blandas").
6. **Contadores Dinámicos (About)**: Animación fluida de incremento numérico para las estadísticas del profesional cuando se monta el componente, con interactividad al hacer click.
7. **Filtro de Proyectos (Projects)**: Sistema de clasificación de proyectos por categorías ("Todos", "Web Apps", "Apps Móviles", "UI/UX").
8. **Modal Detallado con Galería (Projects)**: Al hacer click en cualquier proyecto, se abre un modal con carrusel de imágenes (soporte de anterior/siguiente) e información sobre el desafío y la solución técnica.
9. **Buscador de Habilidades con Tooltips (Skills)**: Permite filtrar habilidades en tiempo real por texto y ver detalles específicos al hacer hover o click en la tarjeta de habilidad.
10. **Línea de Tiempo Expandible (Experience)**: Permite cambiar entre Trayectoria Laboral y Educación, y expandir cada bloque para revelar logros detallados con soporte de foco de teclado.
11. **Formulario de Contacto Validador (Contact)**: Incluye validación de campos en tiempo real, deshabilitación durante el envío, indicador de carga (`spinner`) y banner de confirmación de éxito.
12. **Click para Copiar**: Copia rápida al portapapeles de la dirección de correo y del teléfono móvil con aviso de retroalimentación inmediata.

## Tecnologías Utilizadas
- **React 19**: Componentización reactiva de vanguardia.
- **TypeScript**: Tipado estricto y seguro sin uso de tipos `any`.
- **Vite**: Servidor de desarrollo y empaquetador ultrarrápido.
- **Vanilla CSS**: Estilos premium con soporte de CSS Custom Properties (variables) y animaciones de alto rendimiento.
- **Lucide React**: Iconografía moderna y escalable.

## Capturas de Pantalla (Vista Previa)
*Nota: Puede ver una vista previa interactiva ejecutando el servidor de desarrollo local.*
- **Diseño General (Escritorio / Oscuro)**:
  ![Vista de Escritorio](https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop) *(Placeholder de banco de imágenes)*
- **Vista de Móvil (Responsiva)**:
  ![Vista Móvil](https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop) *(Placeholder de banco de imágenes)*

## Checklist de Calidad
- [x] **Técnico**: `pnpm build` compila al 100% sin errores y pasa la verificación de `pnpm lint` sin problemas de código. No se utiliza `any` en TypeScript.
- [x] **Responsividad**: Diseñado con un sistema de rejillas adaptables. Probado en móvil (360px), tablet (768px) y pantallas grandes de escritorio (1280px y 1920px).
- [x] **Accesibilidad**: Navegación completa por teclado usando tabulación estándar, estados de enfoque (`focus-visible`) muy nítidos, elementos interactivos con roles ARIA adecuados y textos descriptivos en imágenes.
- [x] **SEO**: Título descriptivo en `index.html` y meta description para posicionamiento optimizado.
- [x] **Seguridad**: Totalmente libre de credenciales, claves de API o datos privados en duro.

---

## Cómo Empezar

### Requisitos Previos
- Node.js (v22 LTS o superior)
- pnpm (instalado de forma global)

### Instalación
1. Descarga las dependencias del proyecto:
   ```bash
   pnpm install
   ```

2. Ejecuta el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

3. Construye el proyecto para producción:
   ```bash
   pnpm build
   ```
