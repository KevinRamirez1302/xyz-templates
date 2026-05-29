import { useState, useEffect, useRef } from 'react';
import { Award, Briefcase, Heart, Smile } from 'lucide-react';

type TabKey = 'story' | 'philosophy' | 'softskills';

export default function About() {
  const [activeTab, setActiveTab] = useState<TabKey>('story');
  
  // Dynamic statistics state
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  // Self-contained section reveal
  const sectionRef = useRef<HTMLElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Stats visibility trigger
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

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

  // Observe stats container for counting animation
  useEffect(() => {
    const el = statsContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Animate numbers up to target values ONLY when visible
  useEffect(() => {
    if (!isStatsVisible) return;

    const targets = { experience: 5, projects: 42, clients: 28 };
    
    const experienceTimer = setInterval(() => {
      setExperience(prev => {
        if (prev < targets.experience) return prev + 1;
        clearInterval(experienceTimer);
        return targets.experience;
      });
    }, 150);

    const projectsTimer = setInterval(() => {
      setProjects(prev => {
        if (prev < targets.projects) return prev + 1;
        clearInterval(projectsTimer);
        return targets.projects;
      });
    }, 40);

    const clientsTimer = setInterval(() => {
      setClients(prev => {
        if (prev < targets.clients) return prev + 1;
        clearInterval(clientsTimer);
        return targets.clients;
      });
    }, 60);

    return () => {
      clearInterval(experienceTimer);
      clearInterval(projectsTimer);
      clearInterval(clientsTimer);
    };
  }, [isStatsVisible]);

  const tabContents = {
    story: {
      title: 'Creando Soluciones desde 2021',
      paragraphs: [
        'Comencé mi andadura en el mundo del diseño y desarrollo web impulsado por una profunda curiosidad sobre cómo interactuamos con las pantallas. Desde entonces, he trabajado con agencias, startups y clientes independientes en todo el mundo.',
        'Me apasiona cerrar la brecha entre el diseño elegante y el desarrollo robusto. Creo que un sitio web no solo debe verse espectacular, sino que también debe ofrecer una experiencia de usuario intuitiva, accesible y de alta velocidad en cualquier dispositivo.',
      ],
    },
    philosophy: {
      title: 'Diseño Centrado en el Humano',
      paragraphs: [
        'Mi enfoque principal es la simplicidad y la accesibilidad. Ningún detalle visual sirve si un usuario no puede interactuar con el sitio de manera cómoda. Por ello, sigo estándares WCAG, asegurando navegación por teclado y contraste adecuado.',
        'Considero el código como artesanía. Escribir HTML semántico y estructurar componentes limpios en React permite que las plantillas y proyectos reales de XYZ Digital sean duraderas, fáciles de escalar y optimizados para SEO desde el primer día.',
      ],
    },
    softskills: {
      title: 'Colaboración y Comunicación',
      paragraphs: [
        'Más allá de picar código, me considero un solucionador de problemas empático. Valoro la comunicación constante y directa con los clientes y diseñadores para alinearnos con los objetivos del negocio.',
        'Habilidades clave: Aprendizaje autodidacta ágil, resiliencia frente a desafíos técnicos complejos, organización meticulosa y trabajo en equipo eficaz con metodologías ágiles.',
      ],
    },
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`about-section reveal ${isSectionVisible ? 'active' : ''}`}
    >
      <div className="section-header">
        <h2 className="section-title">Sobre Mí</h2>
        <p className="section-subtitle">Conoce al profesional detrás de la pantalla</p>
      </div>

      <div className="about-grid">
        {/* Left Side: Interactive Stats */}
        <div className="about-stats-container" ref={statsContainerRef}>
          <div className="stats-grid">
            <div className="stat-card" onClick={() => setExperience(prev => prev + 1)} title="¡Haz click para añadir café!">
              <div className="stat-icon-wrapper">
                <Briefcase size={28} className="stat-icon" />
              </div>
              <span className="stat-number">{experience}+</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>

            <div className="stat-card" onClick={() => setProjects(prev => prev + 1)} title="¡Haz click para aumentar proyectos!">
              <div className="stat-icon-wrapper">
                <Award size={28} className="stat-icon" />
              </div>
              <span className="stat-number">{projects}</span>
              <span className="stat-label">Proyectos Completados</span>
            </div>

            <div className="stat-card" onClick={() => setClients(prev => prev + 1)} title="¡Haz click para aumentar clientes felices!">
              <div className="stat-icon-wrapper">
                <Smile size={28} className="stat-icon" />
              </div>
              <span className="stat-number">{clients}+</span>
              <span className="stat-label">Clientes Felices</span>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Heart size={28} className="stat-icon" />
              </div>
              <span className="stat-number">100%</span>
              <span className="stat-label">Pasión por el Código</span>
            </div>
          </div>
          <p className="stats-interactive-tip">💡 Consejo: Haz click en las tarjetas para interactuar con las estadísticas.</p>
        </div>

        {/* Right Side: Tab Switcher */}
        <div className="about-tabs-container">
          <div className="tab-buttons" role="tablist" aria-label="Secciones sobre mí">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'story'}
              aria-controls="panel-story"
              id="tab-story"
              className={`tab-btn ${activeTab === 'story' ? 'active' : ''}`}
              onClick={() => setActiveTab('story')}
            >
              Mi Historia
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'philosophy'}
              aria-controls="panel-philosophy"
              id="tab-philosophy"
              className={`tab-btn ${activeTab === 'philosophy' ? 'active' : ''}`}
              onClick={() => setActiveTab('philosophy')}
            >
              Filosofía
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'softskills'}
              aria-controls="panel-softskills"
              id="tab-softskills"
              className={`tab-btn ${activeTab === 'softskills' ? 'active' : ''}`}
              onClick={() => setActiveTab('softskills')}
            >
              Habilidades Blandas
            </button>
          </div>

          <div
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="tab-content"
          >
            <h3 className="tab-content-title">{tabContents[activeTab].title}</h3>
            {tabContents[activeTab].paragraphs.map((p, index) => (
              <p key={index} className="tab-content-paragraph">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
