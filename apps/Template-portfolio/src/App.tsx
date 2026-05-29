import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import FloatingBackground from './components/FloatingBackground';
import { Mail, Heart } from 'lucide-react';
import './App.css';

// Custom inline SVG icons for brands (Github & Linkedin) since Lucide deprecated them
function GithubIcon({ size = 18 }: { size?: number }) {
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

function LinkedinIcon({ size = 18 }: { size?: number }) {
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

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Manage body scroll lock during loading state
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  // Observer to track active section in Navbar
  useEffect(() => {
    if (isLoading) return;

    const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-55% 0px -45% 0px', // Trigger when section crosses middle third of viewport
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [isLoading]);

  return (
    <>
      {/* Premium Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Floating Code Particles Background */}
      {!isLoading && <FloatingBackground />}

      {/* Header and Navigation */}
      <header>
        <Navbar activeSection={activeSection} />
      </header>

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <div className="ticks" aria-hidden="true" />
        <About />
        <div className="ticks" aria-hidden="true" />
        <Projects />
        <div className="ticks" aria-hidden="true" />
        <Skills />
        <div className="ticks" aria-hidden="true" />
        <Experience />
        <div className="ticks" aria-hidden="true" />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer" aria-label="Información de pie de página">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-logo">
              <span>Alex</span><span className="dot">.</span><span>dev</span>
            </div>
            <p className="footer-tagline">
              Diseñando y desarrollando soluciones digitales interactivas con excelencia técnica.
            </p>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub de Alex Vance">
                <GithubIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn de Alex Vance">
                <LinkedinIcon size={18} />
              </a>
              <a href="mailto:alex@ejemplo.com" aria-label="Enviar correo a Alex Vance">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} Alex Vance. Plantilla creada para <strong className="xyz-digital-mark">XYZ Digital</strong>. Todos los derechos reservados.
            </p>
            <p className="footer-made-with">
              Hecho con <Heart size={14} className="heart-icon" /> y React 19.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
