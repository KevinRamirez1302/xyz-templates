import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import TrailStatusBadge from '../ui/TrailStatusBadge';
import WeatherWidget from './WeatherWidget';
import { ChevronRight, AlertCircle } from 'lucide-react';
import type { TrailStatus } from '../../types';

const difficultyColor: Record<string, string> = {
  'Baja': 'var(--green-open)',
  'Media': '#4EA8DE',
  'Alta': 'var(--yellow-alert)',
  'Muy Alta': 'var(--red-alert)',
};

const TrailsSection: React.FC = () => {
  const { data } = useData();
  const [filter, setFilter] = useState<TrailStatus | 'all'>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filteredTrails = filter === 'all'
    ? data.trails
    : data.trails.filter(t => t.status === filter);

  const generateAndDownloadPDF = () => {
    const escapePDF = (str: string) => {
      return str
        .replace(/[^\x20-\x7E]/g, '') // Solo ASCII imprimible
        .replace(/\\/g, '\\\\')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)');
    };

    const pageContents: string[] = [
      'BT',
      '/F1 24 Tf',
      '50 720 Td',
      '(GUIA DE SENDEROS - LA PALMA) Tj',
      '/F2 12 Tf',
      '0 -25 Td',
      '(Consejos de Seguridad para Senderistas:) Tj',
      '/F1 10 Tf',
      '0 -18 Td',
      '(1. Consulta siempre el estado del tiempo antes de salir.) Tj',
      '0 -15 Td',
      '(2. Lleva agua suficiente y calzado adecuado para trekking.) Tj',
      '0 -15 Td',
      '(3. No te salgas de los senderos senalizados.) Tj',
      '0 -15 Td',
      '(4. Avisa a alguien de tu ruta prevista y horario estimado.) Tj',
      '/F2 14 Tf',
      '0 -30 Td',
      '(RED DE SENDEROS PRINCIPALES) Tj',
    ];

    data.trails.forEach((trail) => {
      const cleanName = escapePDF(trail.name);
      const cleanDiff = escapePDF(trail.difficulty);
      const cleanNote = escapePDF(trail.statusNote);
      const cleanDist = escapePDF(trail.distance);
      const cleanDur = escapePDF(trail.duration);
      const statusText = trail.status === 'open' ? 'ABIERTO' : trail.status === 'caution' ? 'PRECAUCION' : 'CERRADO';

      pageContents.push(
        '/F2 12 Tf',
        '0 -25 Td',
        `(${cleanName} [${statusText}]) Tj`,
        '/F1 10 Tf',
        '0 -15 Td',
        `(Distancia: ${cleanDist} | Dificultad: ${cleanDiff} | Tiempo: ${cleanDur}) Tj`,
        '0 -15 Td',
        `(Estado: ${cleanNote}) Tj`
      );
    });

    pageContents.push(
      '/F2 10 Tf',
      '0 -40 Td',
      '(Telefono de Emergencias: 112 | La Palma Turismo) Tj',
      'ET'
    );

    const streamData = pageContents.join('\n');
    const streamLength = streamData.length;

    const objects: string[] = [
      '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj',
      '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj',
      '3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources 4 0 R /MediaBox [0 0 612 792] /Contents 5 0 R >>\nendobj',
      '4 0 obj\n<< /Font << /F1 6 0 R /F2 7 0 R >> >>\nendobj',
      `5 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamData}\nendstream\nendobj`,
      '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj',
      '7 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj'
    ];

    const header = '%PDF-1.4\n';
    let currentOffset = header.length;
    const xrefOffsets: number[] = [0];

    objects.forEach(obj => {
      xrefOffsets.push(currentOffset);
      currentOffset += obj.length + 1;
    });

    let xref = 'xref\n0 8\n0000000000 65535 f \n';
    for (let i = 1; i < xrefOffsets.length; i++) {
      const offsetStr = xrefOffsets[i].toString().padStart(10, '0');
      xref += `${offsetStr} 00000 n \n`;
    }

    const trailer = `trailer\n<< /Size 8 /Root 1 0 R >>\nstartxref\n${currentOffset}\n%%EOF`;

    const pdfContent = header + objects.join('\n') + '\n' + xref + trailer;

    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Guia_Senderos_La_Palma.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="senderos" className="section">
      <div className="container">
        <div className="section-label">Red de Senderos</div>
        <h2 className="section-title">Explora la naturaleza</h2>

        <div className="trails-layout">
          {/* List Section */}
          <div className="trails-list-container">
            <div className="trails-filter-bar">
              {['all', 'open', 'caution', 'closed'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`filter-tab ${filter === f ? 'active' : ''}`}
                >
                  {f === 'all' ? 'Todos' : f === 'open' ? 'Abiertos' : f === 'caution' ? 'Precaución' : 'Cerrados'}
                  <span className="filter-count">
                    {f === 'all' ? data.trails.length : data.trails.filter(t => t.status === f).length}
                  </span>
                </button>
              ))}
            </div>

            <div className="trails-grid">
              {filteredTrails.map(trail => (
                <div
                  key={trail.id}
                  className={`trail-card glass ${expanded === trail.id ? 'expanded' : ''}`}
                >
                  <div
                    className="trail-card-header"
                    onClick={() => setExpanded(expanded === trail.id ? null : trail.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setExpanded(expanded === trail.id ? null : trail.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={expanded === trail.id}
                  >
                    <div className="trail-info">
                      <div className="trail-type">Trekking</div>
                      <h3 className="trail-name">{trail.name}</h3>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <TrailStatusBadge status={trail.status} />
                      <ChevronRight size={20} className={`chevron ${expanded === trail.id ? 'rotated' : ''}`} />
                    </div>
                  </div>

                  {expanded === trail.id && (
                    <div className="trail-details animate-fade-in">
                      <p className="trail-desc">{trail.description}</p>
                      <div className="trail-stats">
                        <div className="trail-stat">
                          <span className="trail-stat-label">Dificultad</span>
                          <span className="trail-stat-value" style={{ color: difficultyColor[trail.difficulty] }}>{trail.difficulty}</span>
                        </div>
                        <div className="trail-stat">
                          <span className="trail-stat-label">Distancia</span>
                          <span className="trail-stat-value">{trail.distance}</span>
                        </div>
                        <div className="trail-stat">
                          <span className="trail-stat-label">Tiempo</span>
                          <span className="trail-stat-value">{trail.duration}</span>
                        </div>
                      </div>
                      <div className="trail-note">
                        <AlertCircle size={14} />
                        <strong>Estado:</strong> {trail.statusNote}
                      </div>
                    </div>
                  )}

                  <div className="trail-card-footer">
                    <span>{trail.distance} · {trail.difficulty} · {trail.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Info */}
          <div className="trails-side">
            <WeatherWidget />

            <div className="safety-card glass">
              <h3 className="safety-title">Consejos de Seguridad</h3>
              <ul className="safety-list">
                <li>Consulta siempre el estado del tiempo.</li>
                <li>Lleva agua suficiente y calzado adecuado.</li>
                <li>No te salgas de los senderos señalizados.</li>
                <li>Avisa a alguien de tu ruta prevista.</li>
              </ul>
              <button
                onClick={generateAndDownloadPDF}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', marginTop: 12 }}
              >
                Descargar Guía PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .trails-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 32px;
          align-items: start;
        }
        .trails-filter-bar {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          overflow-x: auto;
          padding-bottom: 8px;
        }
        .filter-tab {
          padding: 8px 16px;
          background: var(--surface);
          border-radius: 100px;
          font-size: 0.9rem;
          color: var(--gray-400);
          white-space: nowrap;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .filter-tab.active {
          background: var(--green-700);
          color: white;
        }
        .filter-count {
          font-size: 0.75rem;
          opacity: 0.6;
          background: rgba(0,0,0,0.2);
          padding: 1px 6px;
          border-radius: 10px;
        }
        .trails-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .trail-card {
          padding: 20px;
          border-radius: var(--radius-md);
          transition: var(--transition);
        }
        .trail-card.expanded {
          border-color: var(--green-500);
          box-shadow: var(--shadow-glow-green);
        }
        .trail-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .trail-type {
          font-size: 0.75rem;
          color: var(--green-500);
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .trail-name {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--white);
        }
        .trail-details {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }
        .trail-desc {
          color: var(--gray-400);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .trail-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }
        .trail-stat-label {
          display: block;
          font-size: 0.75rem;
          color: var(--gray-600);
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .trail-stat-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--white);
        }
        .trail-note {
          padding: 12px;
          background: rgba(255,255,255,0.03);
          border-radius: 8px;
          font-size: 0.85rem;
          color: var(--gray-400);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .trail-card-footer {
          margin-top: 16px;
          font-size: 0.85rem;
          color: var(--gray-600);
        }
        .chevron { transition: transform 0.3s ease; color: var(--gray-600); }
        .chevron.rotated { transform: rotate(90deg); }
        
        .safety-card {
          padding: 24px;
          border-radius: var(--radius-lg);
        }
        .safety-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: var(--white);
        }
        .safety-list {
          padding-left: 18px;
          color: var(--gray-400);
          font-size: 0.9rem;
        }
        .safety-list li { margin-bottom: 8px; }

        @media (max-width: 992px) {
          .trails-layout { grid-template-columns: 1fr; }
          .trails-side { margin-top: 32px; }
        }
      `}</style>
    </section>
  );
};

export default TrailsSection;
