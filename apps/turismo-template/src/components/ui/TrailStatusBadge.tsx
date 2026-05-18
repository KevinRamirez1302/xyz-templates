import React from 'react';
import type { TrailStatus } from '../../types';

interface TrailStatusBadgeProps {
  status: TrailStatus;
  size?: 'sm' | 'md';
}

const statusConfig: Record<TrailStatus, { label: string; color: string; bg: string; border: string }> = {
  open: { label: 'Abierto', color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0' },
  caution: { label: 'Precaución', color: '#ca8a04', bg: '#fefce8', border: '#fef08a' },
  closed: { label: 'Cerrado', color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
};

const TrailStatusBadge: React.FC<TrailStatusBadgeProps> = ({ status, size = 'md' }) => {
  const { label, color, bg, border } = statusConfig[status];

  return (
    <div 
      className={`trail-badge-${size}`}
      style={{
        backgroundColor: bg,
        color: color,
        borderColor: border,
      }}
    >
      <span className="badge-dot" style={{ backgroundColor: color }}></span>
      {label}
      <style>{`
        .trail-badge-md, .trail-badge-sm {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 100px;
          border: 1px solid;
          white-space: nowrap;
        }
        .trail-badge-md {
          padding: 4px 12px;
          font-size: 0.75rem;
        }
        .trail-badge-sm {
          padding: 2px 8px;
          font-size: 0.75rem;
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default TrailStatusBadge;
