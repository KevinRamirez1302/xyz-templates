import React from 'react';
import { useData } from '../../context/DataContext';
import { AlertTriangle, Info, Zap } from 'lucide-react';
import type { AlertType } from '../../types';

const alertConfig: Record<AlertType, { bg: string; border: string; color: string; Icon: typeof AlertTriangle }> = {
  danger: { bg: 'rgba(230, 57, 70, 0.15)', border: 'rgba(230, 57, 70, 0.3)', color: '#E63946', Icon: Zap },
  warning: { bg: 'rgba(255, 183, 3, 0.15)', border: 'rgba(255, 183, 3, 0.3)', color: '#FFB703', Icon: AlertTriangle },
  info: { bg: 'rgba(78, 168, 222, 0.15)', border: 'rgba(78, 168, 222, 0.3)', color: '#4EA8DE', Icon: Info },
};

const AlertBanner: React.FC = () => {
  const { data } = useData();
  const activeAlerts = data.meta.alerts.filter(a => a.active);

  if (activeAlerts.length === 0) return null;

  return (
    <div className="alert-container">
      {activeAlerts.map(alert => {
        const config = alertConfig[alert.type];
        return (
          <div 
            key={alert.id} 
            className="alert-banner"
            style={{ 
              backgroundColor: config.bg,
              borderColor: config.border,
              color: config.color,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
              <config.Icon size={20} />
              <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                {alert.message}
              </div>
            </div>
            <div style={{ fontSize: '0.8rem', opacity: 0.8 }} suppressHydrationWarning>
              Emitido: {new Date().toLocaleTimeString()}
            </div>
          </div>
        );
      })}
      <style>{`
        .alert-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }
        .alert-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          border: 1px solid;
          border-radius: var(--radius-md);
        }
      `}</style>
    </div>
  );
};

export default AlertBanner;
