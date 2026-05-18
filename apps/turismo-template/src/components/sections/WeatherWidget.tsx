import React from 'react';
import { useData } from '../../context/DataContext';
import { Sun, Cloud, CloudRain, Wind, Droplets, Zap, CloudSun } from 'lucide-react';

const conditionIcons = {
  sun: <Sun size={48} color="var(--gold-500)" />,
  cloud: <Cloud size={48} color="var(--gray-400)" />,
  rain: <CloudRain size={48} color="var(--blue-500)" />,
  storm: <Zap size={48} color="var(--yellow-alert)" />,
  fog: <Cloud size={48} color="var(--gray-600)" />,
  'partly-cloudy': <CloudSun size={48} color="var(--gold-500)" />,
};

const WeatherWidget: React.FC = () => {
  const { data } = useData();
  const { weather } = data;

  return (
    <div className="weather-card glass animate-fade-in">
      <div className="weather-main">
        <div className="weather-info">
          <div className="weather-city">Santa Cruz de La Palma</div>
          <div className="weather-temp-container">
            <span className="weather-temp">{weather.temp}°</span>
            <span className="weather-condition">{weather.condition}</span>
          </div>
        </div>
        <div className="weather-icon-large">
          {conditionIcons[weather.icon as keyof typeof conditionIcons] || <CloudSun size={48} color="var(--gold-500)" />}
        </div>
      </div>

      <div className="weather-stats-grid">
        <div className="weather-stat-item">
          <Droplets size={18} color="var(--blue-500)" />
          <div className="weather-stat-content">
            <span className="weather-stat-value">{weather.humidity}%</span>
            <span className="weather-stat-label">Humedad</span>
          </div>
        </div>
        <div className="weather-stat-item">
          <Wind size={18} color="var(--gray-400)" />
          <div className="weather-stat-content">
            <span className="weather-stat-value">{weather.wind} km/h</span>
            <span className="weather-stat-label">Viento</span>
          </div>
        </div>
        <div className="weather-stat-item">
          <Zap size={18} color="var(--yellow-alert)" />
          <div className="weather-stat-content">
            <span className="weather-stat-value">Bajo</span>
            <span className="weather-stat-label">Índice UV</span>
          </div>
        </div>
      </div>

      <style>{`
        .weather-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          margin-bottom: 24px;
        }
        .weather-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
        }
        .weather-city {
          font-size: 0.9rem;
          color: var(--gray-400);
          margin-bottom: 4px;
        }
        .weather-temp {
          font-size: 3rem;
          font-weight: 600;
          color: var(--white);
          line-height: 1;
        }
        .weather-condition {
          display: block;
          font-size: 1rem;
          color: var(--green-300);
          margin-top: 4px;
        }
        .weather-icon-large {
          padding: 12px;
          background: rgba(255,255,255,0.03);
          border-radius: 16px;
        }
        .weather-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }
        .weather-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
        }
        .weather-stat-content {
          display: flex;
          flex-direction: column;
        }
        .weather-stat-value {
          font-size: 1rem;
          font-weight: 600;
          color: var(--white);
        }
        .weather-stat-label {
          font-size: 0.75rem;
          color: var(--gray-600);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
};

export default WeatherWidget;
