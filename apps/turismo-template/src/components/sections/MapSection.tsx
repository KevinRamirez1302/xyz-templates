import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useData } from '../../context/DataContext';
import TrailStatusBadge from '../ui/TrailStatusBadge';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet default icon issue in Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const MapSection: React.FC = () => {
  const { data } = useData();

  return (
    <section id="mapa" className="section" style={{ background: 'var(--dark-bg)' }}>
      <div className="container">
        <div className="section-label">Geolocalización</div>
        <h2 className="section-title">Mapa de la Isla</h2>
        
        <div className="map-container-wrapper glass animate-fade-in">
          <MapContainer 
            center={[28.68, -17.86]} 
            zoom={10} 
            className="leaflet-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            
            {/* Trail Markers */}
            {data.trails.map(trail => (
              <Marker 
                key={trail.id} 
                position={[trail.lat, trail.lng]}
              >
                <Popup className="custom-popup">
                  <div className="popup-content">
                    <TrailStatusBadge status={trail.status} size="sm" />
                    <h4 className="popup-title">{trail.name}</h4>
                    <p className="popup-desc">{trail.distance} · {trail.difficulty}</p>
                  </div>
                </Popup>
              </Marker>
            ))}

            {/* Accommodation Markers */}
            {data.accommodation.map(acc => (
              <Marker 
                key={acc.id} 
                position={[acc.lat, acc.lng]}
              >
                <Popup className="custom-popup">
                  <div className="popup-content">
                    <div className="popup-acc-header">
                      <img src={acc.image} alt={acc.name} className="popup-acc-image" />
                      <div>
                        <h4 className="popup-title">{acc.name}</h4>
                        <div className="popup-price">{acc.priceFrom}€ / noche</div>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      <style>{`
        .map-container-wrapper {
          height: 600px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-top: 32px;
        }
        .leaflet-map {
          height: 100%;
          width: 100%;
        }
        .popup-content {
          padding: 8px;
        }
        .popup-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--white);
          margin: 8px 0 4px;
        }
        .popup-desc {
          font-size: 0.85rem;
          color: var(--gray-400);
        }
        .popup-acc-header {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .popup-acc-image {
          width: 50px;
          height: 50px;
          border-radius: 8px;
          object-fit: cover;
        }
        .popup-price {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--green-500);
        }
        .custom-popup .leaflet-popup-content-wrapper {
          background: var(--dark-surface);
          color: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
        }
        .custom-popup .leaflet-popup-tip {
          background: var(--dark-surface);
        }
      `}</style>
    </section>
  );
};

export default MapSection;
