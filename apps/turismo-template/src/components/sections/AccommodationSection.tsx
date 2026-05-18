import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Star, MapPin, CheckCircle, XCircle } from 'lucide-react';

const typeLabels: Record<string, string> = {
  all: 'Todos',
  hotel: 'Hoteles',
  rural: 'Casas Rurales',
  glamping: 'Glamping',
  apartment: 'Apartamentos',
};

const AccommodationSection: React.FC = () => {
  const { data } = useData();
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' 
    ? data.accommodation 
    : data.accommodation.filter(a => a.type === filter);

  return (
    <section id="alojamiento" className="section">
      <div className="container">
        <div className="accommodation-header">
          <div>
            <div className="section-label">Alojamiento</div>
            <h2 className="section-title">Dónde descansar</h2>
          </div>
          
          <div className="filter-tabs">
            {['all', 'hotel', 'rural', 'glamping', 'apartment'].map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`filter-btn ${filter === type ? 'active' : ''}`}
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>
        </div>

        <div className="accommodation-grid">
          {filtered.map(acc => (
            <div key={acc.id} className="acc-card glass animate-fade-in">
              <div className="acc-image-container">
                <img src={acc.image} alt={acc.name} className="acc-image" />
                <div className={`acc-status-tag ${acc.available ? 'available' : 'full'}`}>
                  {acc.available ? <CheckCircle size={12} /> : <XCircle size={12} />}
                  {acc.available ? 'Disponible' : 'Completo'}
                </div>
              </div>
              <div className="acc-content">
                <div className="acc-header">
                  <h3 className="acc-title">{acc.name}</h3>
                  <div className="acc-rating">
                    <Star size={14} fill="currentColor" /> {acc.stars}
                  </div>
                </div>
                <div className="acc-location">
                  <MapPin size={16} /> {acc.location}
                </div>
                
                <p className="acc-description">{acc.description}</p>

                <div className="acc-footer">
                  <div className="acc-price-info">
                    <span className="acc-price">{acc.priceFrom}€</span>
                    <span className="acc-unit">/ noche</span>
                  </div>
                  <div className="acc-occupancy-info">
                    <div className="acc-occupancy-label">Ocupación</div>
                    <div className="acc-occupancy-bar-container">
                      <div className="acc-occupancy-bar">
                        <div className="acc-occupancy-fill" style={{ width: `${acc.occupancy}%` }} />
                      </div>
                      <span className="acc-occupancy-value">{acc.occupancy}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .accommodation-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
          gap: 20px;
          flex-wrap: wrap;
        }
        .filter-tabs {
          display: flex;
          background: var(--surface);
          padding: 6px;
          border-radius: 12px;
          gap: 4px;
        }
        .filter-btn {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--gray-400);
          transition: var(--transition);
        }
        .filter-btn.active {
          background: var(--green-500);
          color: white;
        }
        .accommodation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }
        .acc-card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: var(--transition);
        }
        .acc-card:hover {
          transform: translateY(-8px);
          border-color: var(--green-500);
        }
        .acc-image-container {
          position: relative;
          height: 200px;
        }
        .acc-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .acc-status-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
          backdrop-filter: blur(10px);
        }
        .acc-status-tag.available { background: rgba(45, 198, 83, 0.9); color: white; }
        .acc-status-tag.full { background: rgba(230, 57, 70, 0.9); color: white; }
        .acc-content { padding: 24px; display: flex; flex-direction: column; flex: 1; }
        .acc-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }
        .acc-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--white);
        }
        .acc-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--gold-500);
          font-weight: 600;
          font-size: 0.9rem;
        }
        .acc-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: var(--gray-400);
          margin-bottom: 12px;
        }
        .acc-description {
          font-size: 0.875rem;
          color: var(--gray-400);
          line-height: 1.6;
          margin-bottom: 24px;
          flex: 1;
        }
        .acc-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }
        .acc-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--white);
        }
        .acc-unit {
          font-size: 0.85rem;
          color: var(--gray-600);
          margin-left: 4px;
        }
        .acc-occupancy-label {
          font-size: 0.8rem;
          color: var(--gray-600);
          margin-bottom: 4px;
          text-align: right;
        }
        .acc-occupancy-bar-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .acc-occupancy-bar {
          width: 80px;
          height: 6px;
          background: var(--surface);
          border-radius: 3px;
          overflow: hidden;
        }
        .acc-occupancy-fill {
          height: 100%;
          background: var(--gold-500);
          border-radius: 3px;
        }
        .acc-occupancy-value {
          font-size: 0.85rem;
          color: var(--gray-400);
        }
      `}</style>
    </section>
  );
};

export default AccommodationSection;
