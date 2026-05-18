import React from 'react';
import { useData } from '../../context/DataContext';
import { Calendar, MapPin, Ticket } from 'lucide-react';

const categoryColors: Record<string, string> = {
  'Música': '#B16CEA',
  'Mercado': 'var(--gold-500)',
  'Ciencia': '#4EA8DE',
  'Gastronomía': '#E9724C',
  'Cultura': 'var(--green-500)',
};

const EventsSection: React.FC = () => {
  const { data } = useData();

  const activeEvents = data.events.filter(e => e.active);
  if (activeEvents.length === 0) return null;

  const featuredEvent = activeEvents[0];
  const otherEvents = activeEvents.slice(1);

  return (
    <section id="eventos" className="section" style={{ background: 'var(--dark-surface)' }}>
      <div className="container">
        <div className="section-label">Agenda Cultural</div>
        <h2 className="section-title">Qué hacer en la isla</h2>

        <div className="events-grid">
          {/* Featured Event Card */}
          <div className="event-featured glass animate-fade-in">
            <div className="event-featured-image-container">
              <img src={featuredEvent.image} alt={featuredEvent.title} className="event-featured-image" />
              <div className="event-tag" style={{ backgroundColor: categoryColors[featuredEvent.category] || 'var(--gray-600)' }}>
                {featuredEvent.category}
              </div>
            </div>
            <div className="event-featured-content">
              <div className="event-meta">
                <span className="event-meta-item"><Calendar size={16} /> {new Date(featuredEvent.date).toLocaleDateString()}</span>
                <span className="event-meta-item"><MapPin size={16} /> {featuredEvent.location}</span>
              </div>
              <h3 className="event-featured-title">{featuredEvent.title}</h3>
              <p className="event-description">{featuredEvent.description}</p>
              <button className="btn btn-primary">
                <Ticket size={18} /> Reservar Entradas
              </button>
            </div>
          </div>

          {/* Secondary Events List */}
          <div className="events-list">
            {otherEvents.map(event => (
              <div key={event.id} className="event-small-card glass">
                <img src={event.image} alt={event.title} className="event-small-image" />
                <div className="event-small-content">
                  <div className="event-small-category" style={{ color: categoryColors[event.category] }}>{event.category}</div>
                  <h4 className="event-small-title">{event.title}</h4>
                  <div className="event-small-date">{new Date(event.date).toLocaleDateString()}</div>
                </div>
              </div>
            ))}
            <button className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>
              Ver agenda completa
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .events-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 32px;
        }
        .event-featured {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .event-featured-image-container {
          position: relative;
          height: 340px;
        }
        .event-featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .event-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          color: white;
        }
        .event-featured-content {
          padding: 32px;
        }
        .event-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 16px;
        }
        .event-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--gray-400);
        }
        .event-featured-title {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--white);
        }
        .event-description {
          color: var(--gray-400);
          line-height: 1.6;
          margin-bottom: 24px;
          font-size: 1rem;
        }
        .events-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .event-small-card {
          display: flex;
          gap: 16px;
          padding: 12px;
          border-radius: var(--radius-md);
          transition: var(--transition);
        }
        .event-small-card:hover {
          transform: translateX(8px);
          border-color: var(--green-500);
        }
        .event-small-image {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }
        .event-small-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .event-small-category {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .event-small-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 4px;
          color: var(--white);
        }
        .event-small-date {
          font-size: 0.85rem;
          color: var(--gray-400);
        }
        @media (max-width: 992px) {
          .events-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default EventsSection;
