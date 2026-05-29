import { useState, useEffect, useRef } from 'react';
import { Search, Info, CheckCircle2 } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  description: string;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Self-contained section reveal
  const sectionRef = useRef<HTMLElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Intersection Observer for animating skill bars
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const [isBarsVisible, setIsBarsVisible] = useState(false);

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

  // Observe container for progress animation
  useEffect(() => {
    const el = skillsContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBarsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const skillsData: Skill[] = [
    {
      name: 'HTML5 & CSS3',
      level: 95,
      category: 'frontend',
      description: 'Maquetación semántica estructurada, animaciones CSS avanzadas y layouts complejos con Flexbox y CSS Grid.',
    },
    {
      name: 'JavaScript (ES6+)',
      level: 90,
      category: 'frontend',
      description: 'Lógica asíncrona, promesas, manipulación avanzada del DOM, closures y patrones funcionales modernos.',
    },
    {
      name: 'TypeScript',
      level: 85,
      category: 'frontend',
      description: 'Tipado estricto, interfaces, generics avanzados, configuraciones personalizadas y refactorizaciones seguras.',
    },
    {
      name: 'React 19',
      level: 90,
      category: 'frontend',
      description: 'Hooks avanzados (useEffect, useMemo, custom hooks), Server Actions, transiciones concurrentes y optimización.',
    },
    {
      name: 'Next.js',
      level: 80,
      category: 'frontend',
      description: 'Generación estática (SSG), renderizado en servidor (SSR), optimización de imágenes y ruteo basado en App Router.',
    },
    {
      name: 'Node.js & Express',
      level: 75,
      category: 'backend',
      description: 'Creación de APIs RESTful seguras, middlewares de autenticación, integración de bases de datos y gestión de archivos.',
    },
    {
      name: 'PostgreSQL',
      level: 70,
      category: 'backend',
      description: 'Diseño de esquemas relacionales relacionales, optimización de consultas, uniones complejas e indexaciones de campos.',
    },
    {
      name: 'Firebase',
      level: 80,
      category: 'backend',
      description: 'Configuración rápida de bases de datos en tiempo real (Firestore), autenticación social y hosting estático.',
    },
    {
      name: 'Figma (UI/UX)',
      level: 85,
      category: 'tools',
      description: 'Creación de wireframes, prototipos de alta fidelidad con micro-interacciones, componentes interactivos y auto-layout.',
    },
    {
      name: 'Git & GitHub',
      level: 90,
      category: 'tools',
      description: 'Gestión de ramas, flujos de trabajo colaborativos (GitFlow), resolución de conflictos y automatización con GitHub Actions.',
    },
    {
      name: 'Biome & Linters',
      level: 85,
      category: 'tools',
      description: 'Formateo rápido y análisis estático de código para garantizar la coherencia y limpieza bajo estándares XYZ Digital.',
    },
    {
      name: 'SEO & Performance',
      level: 80,
      category: 'tools',
      description: 'Optimización de Core Web Vitals, estructuración semántica de títulos, metadatos y carga optimizada de recursos.',
    }
  ];

  // Filtering logic
  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`skills-section reveal ${isSectionVisible ? 'active' : ''}`}
    >
      <div className="section-header">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <p className="section-subtitle">Las tecnologías y herramientas con las que trabajo a diario</p>
      </div>

      <div className="skills-controls">
        {/* Category Toggles */}
        <div className="skills-categories" role="tablist" aria-label="Filtrar habilidades por categoría">
          {(['all', 'frontend', 'backend', 'tools'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`skills-cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'all' && 'Todas'}
              {cat === 'frontend' && 'Frontend'}
              {cat === 'backend' && 'Backend & DB'}
              {cat === 'tools' && 'Diseño & Herramientas'}
            </button>
          ))}
        </div>

        {/* Live Search Bar */}
        <div className="skills-search-wrapper">
          <Search size={18} className="skills-search-icon" />
          <input
            type="search"
            placeholder="Buscar habilidad (ej. React, Figma...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="skills-search-input"
            aria-label="Buscar habilidades"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid" ref={skillsContainerRef} aria-live="polite">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => setHoveredSkill(hoveredSkill === skill.name ? null : skill.name)}
            >
              <div className="skill-card-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg" aria-hidden="true">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: isBarsVisible ? `${skill.level}%` : '0%' }}
                />
              </div>
              
              <div className="skill-info-hint">
                <Info size={14} /> <span>Ver detalles</span>
              </div>

              {/* Tooltip Overlay */}
              <div 
                className={`skill-tooltip ${hoveredSkill === skill.name ? 'visible' : ''}`}
                aria-live="polite"
              >
                <div className="tooltip-header">
                  <CheckCircle2 size={16} className="tooltip-icon" />
                  <strong>Experiencia en {skill.name}</strong>
                </div>
                <p>{skill.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="skills-empty-state">
            No se encontraron habilidades que coincidan con "{searchQuery}".
          </div>
        )}
      </div>
      <p className="skills-bottom-hint">💡 Consejo: Pasa el cursor o haz click en cualquier tarjeta de habilidad para ver detalles de mi experiencia.</p>
    </section>
  );
}
