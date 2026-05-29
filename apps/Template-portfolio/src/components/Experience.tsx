import { useState, useEffect, useRef } from 'react';
import { Calendar, Briefcase, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineItem {
  id: number;
  role: string;
  organization: string;
  period: string;
  summary: string;
  details: string[];
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'work' | 'edu'>('work');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Self-contained section reveal state
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

  // Re-observe cards when the tab changes so they reveal properly
  useEffect(() => {
    const revealCards = document.querySelectorAll('#experience .timeline-card-wrapper.reveal-card');
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
  }, [activeTab, isSectionVisible]);

  const workExperience: TimelineItem[] = [
    {
      id: 1,
      role: 'Desarrollador Frontend Freelance',
      organization: 'XYZ Digital & Clientes Independientes',
      period: '2023 - Presente',
      summary: 'Desarrollo a medida de sitios web interactivos, dashboards y landing pages para impulsar conversiones.',
      details: [
        'Desarrollo de 15+ sitios web listos para producción utilizando React, TypeScript y empaquetadores modernos.',
        'Migración de código legacy a componentes modernos y limpios, reduciendo los tiempos de carga en un 40% de media.',
        'Implementación de procesos de accesibilidad WCAG 2.1 AA para clientes públicos y startups internacionales.',
        'Colaboración directa con diseñadores UI/UX para implementar prototipos complejos manteniendo fidelidad de píxeles.'
      ]
    },
    {
      id: 2,
      role: 'Desarrollador Web Junior',
      organization: 'Agencia Creativa Delta',
      period: '2022 - 2023',
      summary: 'Construcción y mantenimiento de sitios de comercio electrónico y aplicaciones corporativas.',
      details: [
        'Desarrollo de módulos e-commerce responsivos, mejorando la usabilidad móvil y aumentando ventas en un 12%.',
        'Integración y consumo de APIs de terceros para pasarelas de pago, sistemas de mensajería y ERPs de clientes.',
        'Soporte diario y resolución ágil de bugs en entornos de producción bajo metodologías Scrum y Jira.'
      ]
    },
    {
      id: 3,
      role: 'Maquetador Web (Prácticas)',
      organization: 'Pixel Studio',
      period: '2021 - 2022',
      summary: 'Maquetación de interfaces responsivas y control de calidad visual a partir de archivos Figma.',
      details: [
        'Conversión fiel de diseños UI en HTML5 y CSS3 semántico con especial atención a layouts adaptables.',
        'Optimización inicial de imágenes para la web, estructuración de metadatos SEO locales y pruebas cross-browser.',
        'Ayuda en la migración de páginas corporativas de WordPress clásico a headless utilizando React/Vite.'
      ]
    }
  ];

  const educationList: TimelineItem[] = [
    {
      id: 101,
      role: 'Grado Superior en Desarrollo de Aplicaciones Web',
      organization: 'IES Tecnológico de Madrid',
      period: '2020 - 2022',
      summary: 'Formación oficial en el diseño, desarrollo, pruebas e implantación de aplicaciones web.',
      details: [
        'Proyectos destacados: Desarrollo de un sistema de reservas escolar utilizando Node.js y MySQL.',
        'Especialización: Programación frontend, diseño de interfaces accesibles e ingeniería de software.',
        'Proyecto de fin de grado calificado con Sobresaliente (10/10).'
      ]
    },
    {
      id: 102,
      role: 'Curso Profesional de Especialización en UX/UI',
      organization: 'Academia Diseño UX',
      period: '2023',
      summary: 'Curso teórico-práctico enfocado en metodologías de investigación, diseño visual y prototipado.',
      details: [
        'Estudios de caso completos sobre rediseño de flujos complejos de registro e interfaces checkout.',
        'Uso avanzado de Figma: auto-layouts, variantes de componentes interactivos y variables de diseño (design tokens).',
        'Pruebas de usabilidad reales, creación de perfiles persona y wireframing rápido interactivo.'
      ]
    },
    {
      id: 103,
      role: 'Certificación Profesional de Accesibilidad Web (WCAG)',
      organization: 'Asociación W3Dev / W3C',
      period: '2024',
      summary: 'Certificación intensiva sobre diseño y desarrollo web inclusivo según las pautas de accesibilidad.',
      details: [
        'Auditoría práctica de accesibilidad web en portales corporativos usando herramientas automáticas y lectores de pantalla.',
        'Implementación de navegación nativa por teclado, enfoque visual enfático y marcado ARIA avanzado.',
        'Optimización de contraste cromático y accesibilidad de elementos multimedia.'
      ]
    }
  ];

  const currentItems = activeTab === 'work' ? workExperience : educationList;

  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`experience-section reveal ${isSectionVisible ? 'active' : ''}`}
    >
      <div className="section-header">
        <h2 className="section-title">Trayectoria Profesional</h2>
        <p className="section-subtitle">Mi historia, estudios y experiencia en el sector tecnológico</p>
      </div>

      {/* Tabs Conmutador */}
      <div className="timeline-toggle-container">
        <div className="timeline-toggle" role="tablist" aria-label="Cambiar entre trayectoria laboral y académica">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'work'}
            className={`timeline-tab-btn ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('work');
              setExpandedId(null);
            }}
          >
            <Briefcase size={16} /> Experiencia Laboral
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'edu'}
            className={`timeline-tab-btn ${activeTab === 'edu' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('edu');
              setExpandedId(null);
            }}
          >
            <GraduationCap size={16} /> Educación
          </button>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="timeline-container">
        <div className="timeline-line" aria-hidden="true" />
        
        <div className="timeline-list">
          {currentItems.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <article 
                key={item.id} 
                data-id={item.id}
                className={`timeline-card-wrapper reveal-card ${revealedIds[item.id] ? 'active' : ''} ${isExpanded ? 'expanded' : ''}`}
              >
                {/* Timeline node icon */}
                <div className="timeline-node" aria-hidden="true">
                  {activeTab === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                </div>

                <div 
                  className="timeline-card"
                  onClick={() => toggleExpand(item.id)}
                  aria-expanded={isExpanded}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(item.id);
                    }
                  }}
                  aria-label={`${item.role} en ${item.organization}. Click para ver logros.`}
                >
                  <div className="timeline-card-header">
                    <span className="timeline-period">
                      <Calendar size={14} /> {item.period}
                    </span>
                    <h3 className="timeline-role">{item.role}</h3>
                    <h4 className="timeline-org">{item.organization}</h4>
                  </div>
                  
                  <p className="timeline-summary">{item.summary}</p>
                  
                  {isExpanded && (
                    <div className="timeline-details-wrapper">
                      <hr className="timeline-divider" />
                      <ul className="timeline-details-list">
                        {item.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="timeline-expand-indicator" aria-hidden="true">
                    <span>{isExpanded ? 'Ocultar detalles' : 'Ver logros y detalles'}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <p className="timeline-bottom-hint">💡 Consejo: Haz click en cualquier tarjeta de la línea de tiempo para desplegar logros específicos.</p>
    </section>
  );
}
