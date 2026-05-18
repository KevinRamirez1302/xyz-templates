import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';

const images = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90',
  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=90',
  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&q=90',
];

const HeroSection: React.FC = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {/* Background Slides */}
      {images.map((img) => (
        <div
          key={img}
          className={`hero-slide ${images.indexOf(img) === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
          aria-hidden={images.indexOf(img) !== index}
        />
      ))}

      {/* Content Overlay */}
      <div className="hero-overlay">
        <div className="container hero-content">
          <div className="hero-text-box animate-fade-in">
            <div className="hero-badge">Destino Seguro</div>
            <h1 className="hero-title">
              Descubre el <br />
              <span className="text-gradient">Corazón de Canarias</span>
            </h1>
            <p className="hero-subtitle">
              Siente la fuerza de los volcanes, camina sobre las nubes y sumérgete en un océano de estrellas. La Palma te espera.
            </p>
            
            <div className="hero-actions">
              <button className="btn btn-primary btn-lg">Explorar Rutas</button>
              <button className="btn btn-secondary btn-lg glass">Guía de Viaje</button>
            </div>
          </div>

          {/* Real-time Stats Widget */}
          <div className="hero-stats animate-fade-up">
            <div className="stats-card glass">
              <div className="stats-header">
                <div className="live-indicator">
                  <span className="dot"></span> LIVE
                </div>
                <span className="stats-title">Estado de la Isla</span>
              </div>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">{data.stats.visitorsThisMonth.toLocaleString()}</div>
                  <div className="stat-label">Visitantes / mes</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-value">{data.stats.activeTrails} / {data.trails.length}</div>
                  <div className="stat-label">Senderos Abiertos</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-value">{data.stats.avgOccupancy}%</div>
                  <div className="stat-label">Ocupación Media</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          height: 90vh;
          min-height: 700px;
          background: var(--dark-bg);
          overflow: hidden;
          margin-top: 0;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
          transform: scale(1.1);
        }
        .hero-slide.active {
          opacity: 0.4;
          transform: scale(1);
        }
        .hero-overlay {
          position: relative;
          z-index: var(--z-base);
          height: 100%;
          display: flex;
          align-items: center;
          background: linear-gradient(to right, rgba(13,27,42,0.9) 0%, rgba(13,27,42,0.4) 50%, transparent 100%);
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(82, 183, 136, 0.15);
          border: 1px solid rgba(82, 183, 136, 0.3);
          color: var(--green-300);
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 600;
          line-height: 1.1;
          color: var(--white);
          margin-bottom: 24px;
        }
        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--gray-400);
          line-height: 1.6;
          max-width: 500px;
          margin-bottom: 40px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
        }
        .hero-stats {
          display: flex;
          justify-content: flex-end;
        }
        .stats-card {
          width: 100%;
          max-width: 500px;
          padding: 32px;
          border-radius: var(--radius-lg);
        }
        .stats-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .live-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--red-alert);
          background: rgba(230, 57, 70, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .live-indicator .dot {
          width: 6px;
          height: 6px;
          background: var(--red-alert);
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }
        .stats-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .stats-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .stat-item {
          text-align: center;
        }
        .stat-value {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 0.75rem;
          color: var(--gray-600);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border);
        }
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
        @media (max-width: 992px) {
          .hero-content { grid-template-columns: 1fr; }
          .hero-stats { justify-content: flex-start; }
          .hero-overlay { background: rgba(13,27,42,0.8); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
