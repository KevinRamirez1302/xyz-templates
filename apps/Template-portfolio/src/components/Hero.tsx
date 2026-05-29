import { useState, useEffect, useRef } from 'react';
import { Download, ArrowRight, Mail } from 'lucide-react';

const ROLES = [
  'Desarrollador Frontend',
  'Diseñador UI/UX',
  'Creador de Sitios Web',
  'Dev Freelance',
];

// Custom inline SVG icons for brands (Github & Linkedin) since Lucide deprecated them
function GithubIcon({ size = 20 }: { size?: number }) {
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

function LinkedinIcon({ size = 20 }: { size?: number }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [downloadProgress, setDownloadProgress] = useState(0);
  
  // Parallax Tilt Effect
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Typing Effect
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
    } else if (isDeleting && currentText === '') {
      // Async state update with small delay to avoid cascading renders warning
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 300);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? currentRole.substring(0, currentText.length - 1)
            : currentRole.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // CV Download Simulation
  const handleDownloadCV = () => {
    if (downloadState !== 'idle') return;
    setDownloadState('loading');
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadState('success');
          // Reset to idle after a while
          setTimeout(() => {
            setDownloadState('idle');
            setDownloadProgress(0);
          }, 3000);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  // Mouse Move Tilt Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate within the element
    const y = e.clientY - rect.top;  // y coordinate within the element
    
    // Normalize coordinates (-0.5 to 0.5)
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    // Tilt degrees (max 20 degrees)
    setTilt({
      x: normalizedX * 20,
      y: -normalizedY * 20,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = contactSec.getBoundingClientRect().top;
      window.scrollTo({
        top: elemRect - bodyRect - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <span className="hero-badge">Disponible para nuevos proyectos</span>
          <h1 className="hero-title">
            Hola, soy <span className="highlight">Alex Vance</span>
          </h1>
          <h2 className="hero-subtitle" aria-live="polite">
            Especializado en <span className="typing-cursor">{currentText}</span>
          </h2>
          <p className="hero-description">
            Diseño y desarrollo interfaces web interactivas, funcionales y optimizadas. 
            Transformo ideas en código limpio para crear productos digitales que destacan y generan impacto.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" onClick={scrollToContact}>
              Contrátame <ArrowRight size={18} />
            </a>
            <button
              type="button"
              className={`btn btn-secondary btn-cv ${downloadState}`}
              onClick={handleDownloadCV}
              disabled={downloadState === 'loading'}
            >
              {downloadState === 'idle' && (
                <>
                  <Download size={18} /> Descargar CV
                </>
              )}
              {downloadState === 'loading' && (
                <>
                  <div className="cv-progress-bar" style={{ width: `${downloadProgress}%` }} />
                  <span className="cv-progress-text">Descargando {downloadProgress}%</span>
                </>
              )}
              {downloadState === 'success' && <span>¡CV Descargado con éxito!</span>}
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub de Alex Vance">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn de Alex Vance">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:alex@ejemplo.com" aria-label="Enviar correo a Alex Vance">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div 
            className="interactive-card-wrapper"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s ease' : 'none'
            }}
          >
            <div className="interactive-card-mesh"></div>
            <div className="interactive-card-content">
              <div className="card-header">
                <div className="card-dot red"></div>
                <div className="card-dot yellow"></div>
                <div className="card-dot green"></div>
                <div className="card-tab">developer.tsx</div>
              </div>
              <div className="card-code">
                <pre>
                  <code>
                    <span className="code-keyword">const</span> developer = &#123;<br />
                    &nbsp;&nbsp;name: <span className="code-string">'Alex Vance'</span>,<br />
                    &nbsp;&nbsp;skills: [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'React'</span>, <span className="code-string">'TypeScript'</span>, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Vite'</span>, <span className="code-string">'Tailwind'</span><br />
                    &nbsp;&nbsp;],<br />
                    &nbsp;&nbsp;codeQuality: <span className="code-string">'Premium'</span>,<br />
                    &nbsp;&nbsp;passions: [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Accesibilidad'</span>, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Animaciones UX'</span><br />
                    &nbsp;&nbsp;]<br />
                    &#125;;
                  </code>
                </pre>
              </div>
              <div className="card-footer">
                <div className="card-pulse"></div>
                <span>Ideal para XYZ Digital</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
