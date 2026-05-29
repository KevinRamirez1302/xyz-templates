import { useState, useEffect, useRef } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'web' | 'mobile' | 'design';
  categoryLabel: string;
  shortDesc: string;
  longDesc: string;
  problem: string;
  solution: string;
  tech: string[];
  images: string[];
  demoUrl: string;
  codeUrl: string;
}

// Custom inline SVG icon for Github since Lucide deprecated it
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'design'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // React-compliant scroll reveal state
  const sectionRef = useRef<HTMLElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});

  // Observe section for fade-in reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Re-observe cards when the category filter changes so they reveal properly
  useEffect(() => {
    const revealCards = document.querySelectorAll('#projects .project-card.reveal-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idAttr = entry.target.getAttribute('data-id');
            if (idAttr) {
              const id = parseInt(idAttr, 10);
              setRevealedIds((prev) => ({ ...prev, [id]: true }));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filter, isSectionVisible]);

  const projectsData: Project[] = [
    {
      id: 1,
      title: 'E-Commerce de Moda Sostenible',
      category: 'web',
      categoryLabel: 'Web App',
      shortDesc: 'Tienda en línea responsiva con pasarela de pagos integrada y gestión de inventario.',
      longDesc: 'Una plataforma completa de comercio electrónico diseñada para una marca de moda sostenible. Cuenta con un carrito de compras interactivo persistente, pasarela de pago simulada con Stripe, búsqueda con autocompletado y un panel de administración para gestionar stock e ingresos en tiempo real.',
      problem: 'La marca necesitaba migrar de una tienda manual de Instagram a una plataforma automatizada capaz de gestionar 200+ pedidos semanales sin saturar sus canales de atención.',
      solution: 'Desarrollamos una Single Page Application (SPA) ultra rápida con carga perezosa de imágenes para mejorar el rendimiento móvil y un checkout optimizado en 3 clics.',
      tech: ['React 19', 'Vite', 'TypeScript', 'CSS Modules', 'Stripe API'],
      images: [
        'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
        'linear-gradient(135deg, #c084fc 0%, #9333ea 100%)',
        'linear-gradient(135deg, #e9d5ff 0%, #a855f7 100%)'
      ],
      demoUrl: 'https://ejemplo.com/sustainable-store',
      codeUrl: 'https://github.com/example/sustainable-store',
    },
    {
      id: 2,
      title: 'Dashboard de Analíticas SaaS',
      category: 'design',
      categoryLabel: 'UI/UX Design',
      shortDesc: 'Diseño de interfaz y sistema de diseño modular para una startup de marketing automation.',
      longDesc: 'Diseño UX/UI integral y prototipo interactivo en alta fidelidad de una herramienta de analítica web para empresas B2B. Incluye una arquitectura de componentes modulares, paleta de colores de alto contraste con soporte dark mode estricto y pruebas de usabilidad con 15 usuarios reales.',
      problem: 'Los usuarios encontraban la plataforma original abrumadora y difícil de leer debido a la mala disposición de los gráficos y la falta de jerarquía visual.',
      solution: 'Reestructuramos el diseño aplicando widgets personalizables que permiten a los usuarios arrastrar y soltar la información que consideren prioritaria, reduciendo la tasa de rebote del sistema en un 35%.',
      tech: ['Figma', 'Design System', 'User Testing', 'Wireframing', 'React Mockup'],
      images: [
        'linear-gradient(135deg, #6ee7b7 0%, #059669 100%)',
        'linear-gradient(135deg, #a7f3d0 0%, #10b981 100%)',
        'linear-gradient(135deg, #d1fae5 0%, #047857 100%)'
      ],
      demoUrl: 'https://ejemplo.com/saas-dashboard',
      codeUrl: 'https://github.com/example/saas-dashboard',
    },
    {
      id: 3,
      title: 'App Móvil de Fitness & Nutrición',
      category: 'mobile',
      categoryLabel: 'Aplicación Móvil',
      shortDesc: 'Aplicación nativa para seguimiento de entrenamientos diarios y control de dieta.',
      longDesc: 'Aplicación móvil multiplataforma que ayuda a los usuarios a registrar sus rutinas de entrenamiento físico y llevar un diario de alimentación inteligente. Utiliza almacenamiento local offline, ofrece recordatorios locales vía notificaciones push y gráficos de progreso personal.',
      problem: 'Los usuarios de aplicaciones similares a menudo abandonan debido a la fricción de tener que introducir alimentos manualmente buscando en bases de datos gigantescas.',
      solution: 'Diseñamos una experiencia fluida con plantillas de comidas predefinidas rápidas y un selector visual de porciones intuitivo que agiliza el registro a menos de 10 segundos.',
      tech: ['React Native', 'Expo', 'Redux Toolkit', 'SQLite', 'Reanimated'],
      images: [
        'linear-gradient(135deg, #f0abfc 0%, #c026d3 100%)',
        'linear-gradient(135deg, #f5d0fe 0%, #d946ef 100%)',
        'linear-gradient(135deg, #fae8ff 0%, #a21caf 100%)'
      ],
      demoUrl: 'https://ejemplo.com/fitness-app',
      codeUrl: 'https://github.com/example/fitness-app',
    },
    {
      id: 4,
      title: 'Plataforma de Coworking & Reservas',
      category: 'web',
      categoryLabel: 'Web App',
      shortDesc: 'Sistema web para la reserva de escritorios y salas de reuniones con calendario interactivo.',
      longDesc: 'Una aplicación web que permite a los miembros de un espacio de coworking reservar escritorios, despachos y salas de reuniones de forma interactiva en tiempo real. Incluye un mapa de planta interactivo en SVG dinámico que muestra la disponibilidad al instante.',
      problem: 'La reserva mediante hojas de cálculo de Google generaba sobre-reservas y disputas constantes entre los coworkers por el uso de las salas premium.',
      solution: 'Implementamos un calendario interactivo conectado a WebSockets que bloquea los recursos instantáneamente en cuanto se inicia el proceso de reserva, eliminando conflictos por completo.',
      tech: ['Next.js', 'WebSockets', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
      images: [
        'linear-gradient(135deg, #fda4af 0%, #e11d48 100%)',
        'linear-gradient(135deg, #fecdd3 0%, #f43f5e 100%)',
        'linear-gradient(135deg, #ffe4e6 0%, #be123c 100%)'
      ],
      demoUrl: 'https://ejemplo.com/coworking-hub',
      codeUrl: 'https://github.com/example/coworking-hub',
    },
    {
      id: 5,
      title: 'Rediseño Web Hotel Rural Boutique',
      category: 'design',
      categoryLabel: 'UI/UX Design',
      shortDesc: 'Diseño estético y minimalista enfocado en aumentar las reservas directas del hotel.',
      longDesc: 'Rediseño de la web de un exclusivo hotel boutique rural. El enfoque principal fue la optimización visual mediante fotografías a gran escala, micro-interacciones fluidas y un proceso de reserva simplificado y adaptado para móviles.',
      problem: 'El hotel dependía en un 90% de Booking.com, perdiendo una comisión del 18% por cada reserva debido a que su web propia era obsoleta y no generaba confianza.',
      solution: 'Creamos una experiencia premium e interactiva que refleja el lujo rústico del hotel. Integramos testimonios geolocalizados y un widget de reservas directo, aumentando las reservas directas en un 40% en 3 meses.',
      tech: ['Figma', 'UX Research', 'CSS Animations', 'SEO Optimization'],
      images: [
        'linear-gradient(135deg, #93c5fd 0%, #2563eb 100%)',
        'linear-gradient(135deg, #bfdbfe 0%, #3b82f6 100%)',
        'linear-gradient(135deg, #dbeafe 0%, #1d4ed8 100%)'
      ],
      demoUrl: 'https://ejemplo.com/hotel-boutique',
      codeUrl: 'https://github.com/example/hotel-boutique',
    },
    {
      id: 6,
      title: 'App de Delivery de Café Especializado',
      category: 'mobile',
      categoryLabel: 'Aplicación Móvil',
      shortDesc: 'App de envíos rápidos con rastreo en vivo y personalización extrema de bebidas.',
      longDesc: 'Aplicación móvil diseñada para una cadena local de cafeterías gourmet. Los clientes pueden pedir café para recoger o para recibir en su oficina, con una interfaz de personalización de ingredientes muy visual y seguimiento del repartidor en el mapa.',
      problem: 'Las plataformas tradicionales de delivery no permitían configurar de manera clara opciones detalladas como tipo de leche, temperatura del café y nivel de molienda.',
      solution: 'Desarrollamos una interfaz táctil sumamente visual e interactiva que imita la preparación del café a medida que el usuario añade ingredientes, incrementando el ticket promedio de compra en un 22%.',
      tech: ['React Native', 'Firebase', 'Google Maps API', 'Tailwind', 'Push Notifications'],
      images: [
        'linear-gradient(135deg, #fcd34d 0%, #d97706 100%)',
        'linear-gradient(135deg, #fde68a 0%, #f59e0b 100%)',
        'linear-gradient(135deg, #fef3c7 0%, #b45309 100%)'
      ],
      demoUrl: 'https://ejemplo.com/coffee-delivery',
      codeUrl: 'https://github.com/example/coffee-delivery',
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`projects-section reveal ${isSectionVisible ? 'active' : ''}`}
    >
      <div className="section-header">
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="section-subtitle">Una selección de trabajos recientes que muestran mis habilidades técnicas</p>
      </div>

      {/* Category Filter Tabs */}
      <div className="projects-filter-container">
        <div className="filter-buttons" role="tablist" aria-label="Filtrar proyectos por categoría">
          {(['all', 'web', 'mobile', 'design'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' && 'Todos'}
              {cat === 'web' && 'Web Apps'}
              {cat === 'mobile' && 'Apps Móviles'}
              {cat === 'design' && 'Diseño UI/UX'}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article 
            key={project.id} 
            data-id={project.id}
            className={`project-card reveal-card ${revealedIds[project.id] ? 'active' : ''}`}
          >
            <div 
              className="project-image-preview" 
              style={{ background: project.images[0] }}
              onClick={() => openProjectModal(project)}
            >
              <div className="project-overlay">
                <span className="project-category-badge">{project.categoryLabel}</span>
                <span className="project-view-more">Ver detalles</span>
              </div>
            </div>
            <div className="project-info">
              <span className="project-label">{project.categoryLabel}</span>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.shortDesc}</p>
              <div className="project-card-tech">
                {project.tech.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="tech-badge">{t}</span>
                ))}
                {project.tech.length > 3 && <span className="tech-badge-more">+{project.tech.length - 3}</span>}
              </div>
              <button 
                type="button" 
                className="btn btn-card-details" 
                onClick={() => openProjectModal(project)}
                aria-label={`Ver detalles del proyecto ${project.title}`}
              >
                Ver detalles
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Detail Project Modal */}
      {selectedProject && (
        <div 
          className="modal-overlay" 
          onClick={closeProjectModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={closeProjectModal}
              aria-label="Cerrar modal de detalles"
            >
              <X size={24} />
            </button>

            <div className="modal-grid">
              {/* Left Column: Carousel Showcase */}
              <div className="modal-carousel-section">
                <div 
                  className="modal-carousel-display"
                  style={{ background: selectedProject.images[activeImageIndex] }}
                >
                  <button 
                    type="button" 
                    className="carousel-btn prev" 
                    onClick={prevImage}
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    type="button" 
                    className="carousel-btn next" 
                    onClick={nextImage}
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div className="carousel-index">
                    Mockup {activeImageIndex + 1} de {selectedProject.images.length}
                  </div>
                </div>

                <div className="carousel-indicators">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`indicator-dot ${activeImageIndex === idx ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`Ir a imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Column: Project Description */}
              <div className="modal-info-section">
                <span className="modal-label">{selectedProject.categoryLabel}</span>
                <h3 id="modal-title" className="modal-title">{selectedProject.title}</h3>
                
                <div className="modal-desc-block">
                  <h4>Resumen del Proyecto</h4>
                  <p>{selectedProject.longDesc}</p>
                </div>

                <div className="modal-problem-solution">
                  <div className="modal-block">
                    <span className="block-title problem">⚠️ El Desafío:</span>
                    <p>{selectedProject.problem}</p>
                  </div>
                  <div className="modal-block">
                    <span className="block-title solution">✅ La Solución:</span>
                    <p>{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="modal-tech-stack">
                  <h4>Tecnologías utilizadas</h4>
                  <div className="modal-tech-tags">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="modal-tech-tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-primary"
                  >
                    Demo en Vivo <ExternalLink size={16} />
                  </a>
                  <a 
                    href={selectedProject.codeUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-secondary"
                  >
                    Ver Código <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
