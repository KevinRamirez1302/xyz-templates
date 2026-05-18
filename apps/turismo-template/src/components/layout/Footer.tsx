import React from 'react';
import { Mountain, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <div className="footer-logo">
          <Mountain size={24} color="var(--green-500)" />
          <span className="footer-logo-text">La Palma <span className="text-gradient">Turismo</span></span>
        </div>
        <p className="footer-desc">
          La isla más bonita del Atlántico. Volcanes, laurisilva y estrellas. Bienvenido a La Palma.
        </p>
        <div className="footer-social">
          <p className="footer-social-text">Redes sociales oficiales en @visitlapalma</p>
        </div>
      </div>

      <div className="footer-links-column">
        <h4 className="footer-title">Explorar</h4>
        <ul className="footer-links">
          <li><a href="#senderos">Senderos</a></li>
          <li><a href="#alojamiento">Alojamiento</a></li>
          <li><a href="#experiencias">Experiencias</a></li>
          <li><a href="#eventos">Agenda Cultural</a></li>
        </ul>
      </div>

      <div className="footer-links-column">
        <h4 className="footer-title">Información</h4>
        <ul className="footer-links">
          <li><a href="#hero">Cómo llegar</a></li>
          <li><a href="#hero">Transporte</a></li>
          <li><a href="#hero">Oficinas de Turismo</a></li>
          <li><a href="#hero">Seguridad y Salud</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4 className="footer-title">Contacto</h4>
        <ul className="footer-contact-list">
          <li><MapPin size={18} /> Av. Marítima, Santa Cruz</li>
          <li><Mail size={18} /> info@visitlapalma.es</li>
          <li><Phone size={18} /> +34 922 423 100</li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container footer-bottom-content">
        <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Patronato de Turismo de La Palma. Todos los derechos reservados.</p>
        <div className="footer-legal">
          <a href="#hero">Privacidad</a>
          <a href="#hero">Cookies</a>
          <a href="#hero">Legal</a>
        </div>
      </div>
    </div>

    <style>{`
      .footer {
        background: var(--dark-bg);
        border-top: 1px solid var(--border);
        padding-top: 80px;
      }
      .footer-grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
        gap: 48px;
        padding-bottom: 60px;
      }
      .footer-logo {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 24px;
      }
      .footer-logo-text {
        font-family: var(--font-heading);
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--white);
      }
      .footer-desc {
        color: var(--gray-400);
        line-height: 1.6;
        margin-bottom: 24px;
        font-size: 0.95rem;
      }
      .footer-social-text {
        color: var(--gray-600);
        font-size: 0.85rem;
      }
      .footer-title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 24px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
      .footer-links {
        list-style: none;
        padding: 0;
      }
      .footer-links li {
        margin-bottom: 12px;
      }
      .footer-links a {
        color: var(--gray-400);
        text-decoration: none;
        font-size: 0.95rem;
        transition: var(--transition);
      }
      .footer-links a:hover {
        color: var(--green-500);
        padding-left: 4px;
      }
      .footer-contact-list {
        list-style: none;
        padding: 0;
      }
      .footer-contact-list li {
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--gray-400);
        font-size: 0.95rem;
        margin-bottom: 16px;
      }
      .footer-bottom {
        border-top: 1px solid var(--border);
        padding: 32px 0;
        background: rgba(0,0,0,0.2);
      }
      .footer-bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        color: var(--gray-600);
        font-size: 0.85rem;
      }
      .footer-legal {
        display: flex;
        gap: 24px;
      }
      .footer-legal a {
        color: var(--gray-600);
        text-decoration: none;
        transition: var(--transition);
      }
      .footer-legal a:hover {
        color: var(--white);
      }
      @media (max-width: 992px) {
        .footer-grid { grid-template-columns: 1fr 1fr; }
      }
      @media (max-width: 600px) {
        .footer-grid { grid-template-columns: 1fr; gap: 32px; }
        .footer-bottom-content { flex-direction: column; text-align: center; }
      }
    `}</style>
  </footer>
);

export default Footer;
