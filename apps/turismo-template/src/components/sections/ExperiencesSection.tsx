import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Clock, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const categoryColors: Record<string, string> = {
  'Naturaleza': 'var(--green-500)',
  'Gastronomía': 'var(--gold-500)',
  'Aventura': '#E05C5C',
  'Cultura': '#4EA8DE',
};

const ExperiencesSection: React.FC = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  const next = () => setIndex(prev => (prev + 1) % data.experiences.length);
  const prev = () => setIndex(prev => (prev - 1 + data.experiences.length) % data.experiences.length);

  return (
    <section className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-label">Experiencias</div>
        <h2 className="section-title">Vive la isla al máximo</h2>

        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
          >
            {data.experiences.map((exp) => (
              <div key={exp.id} className="carousel-slide">
                <div className="exp-card glass">
                  <div className="exp-image-container">
                    <img src={exp.image} alt={exp.name} className="exp-image" />
                    <div className="exp-price">Desde {exp.price}€</div>
                  </div>
                  <div className="exp-content">
                    <div className="exp-category" style={{ color: categoryColors[exp.category] }}>{exp.category}</div>
                    <h3 className="exp-title">{exp.name}</h3>
                    <div className="exp-meta">
                      <span className="exp-meta-item"><Clock size={16} /> {exp.duration}</span>
                      <span className="exp-meta-item"><Star size={16} color="var(--gold-500)" /> 4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn prev" onClick={prev} aria-label="Anterior">
            <ChevronLeft size={24} />
          </button>
          <button className="carousel-btn next" onClick={next} aria-label="Siguiente">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style>{`
        .carousel-container {
          position: relative;
          margin-top: 40px;
        }
        .carousel-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .carousel-slide {
          flex: 0 0 calc(100% / 3);
          padding: 0 12px;
        }
        .exp-card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .exp-image-container {
          position: relative;
          height: 240px;
        }
        .exp-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .exp-price {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: var(--dark-bg);
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .exp-content {
          padding: 24px;
          flex: 1;
        }
        .exp-category {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }
        .exp-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--white);
        }
        .exp-meta {
          display: flex;
          gap: 16px;
        }
        .exp-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--gray-400);
        }
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          cursor: pointer;
          z-index: 2;
          transition: var(--transition);
        }
        .carousel-btn:hover {
          background: var(--green-500);
          border-color: var(--green-500);
        }
        .carousel-btn.prev { left: -24px; }
        .carousel-btn.next { right: -24px; }

        @media (max-width: 992px) {
          .carousel-slide { flex: 0 0 50%; }
        }
        @media (max-width: 600px) {
          .carousel-slide { flex: 0 0 100%; }
          .carousel-btn { display: none; }
        }
      `}</style>
    </section>
  );
};

export default ExperiencesSection;
