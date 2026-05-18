import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, ChevronLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-bg" style={{ backgroundImage: 'url(/C:/Users/Robootics/.gemini/antigravity/brain/44d91bc3-9956-4097-9335-ab336036fea3/lapalma_404_landscape_1778766430738.png)' }}></div>
      <div className="not-found-overlay"></div>
      
      <div className="not-found-content animate-fade-in">
        <div className="error-code-container">
          <span className="error-code">404</span>
          <div className="compass-container">
            <Compass size={120} className="compass-icon" />
          </div>
        </div>
        
        <h1 className="error-title">Parece que te has perdido...</h1>
        <p className="error-desc">
          La página que buscas no existe o ha sido movida a otro rincón de La Palma. 
          No te preocupes, incluso los mejores exploradores pierden el rumbo a veces.
        </p>

        <div className="error-actions">
          <Link to="/" className="btn btn-primary btn-lg">
            <Home size={20} /> Volver al Inicio
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-secondary btn-lg glass"
          >
            <ChevronLeft size={20} /> Regresar
          </button>
        </div>
      </div>

      <div className="background-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>

      <style>{`
        .not-found-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--dark-bg);
          color: var(--white);
          text-align: center;
          padding: 24px;
          overflow: hidden;
          position: relative;
        }
        .not-found-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.4;
          transform: scale(1.1);
          animation: slowZoom 20s infinite alternate;
        }
        .not-found-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, var(--dark-bg) 100%);
          z-index: 1;
        }
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .not-found-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
        }
        .error-code-container {
          position: relative;
          display: inline-block;
          margin-bottom: 40px;
        }
        .error-code {
          font-size: 10rem;
          font-weight: 900;
          line-height: 1;
          opacity: 0.1;
          font-family: var(--font-heading);
          background: linear-gradient(to bottom, var(--white), transparent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .compass-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .compass-icon {
          color: var(--green-500);
          animation: rotateCompass 10s linear infinite;
          filter: drop-shadow(0 0 15px rgba(82, 183, 136, 0.4));
        }
        @keyframes rotateCompass {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          50% { transform: rotate(-10deg); }
          75% { transform: rotate(20deg); }
          100% { transform: rotate(0deg); }
        }
        .error-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--white);
        }
        .error-desc {
          font-size: 1.1rem;
          color: var(--gray-400);
          line-height: 1.6;
          margin-bottom: 40px;
        }
        .error-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
        }
        .background-decoration {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }
        .circle-1 {
          width: 400px;
          height: 400px;
          background: var(--green-700);
          top: -100px;
          left: -100px;
        }
        .circle-2 {
          width: 300px;
          height: 300px;
          background: var(--blue-700);
          bottom: -50px;
          right: -50px;
        }
        @media (max-width: 600px) {
          .error-code { font-size: 7rem; }
          .error-title { font-size: 1.8rem; }
          .error-actions { flex-direction: column; }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
