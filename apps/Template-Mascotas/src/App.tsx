import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="navbar glass">
        <div className="logo">
          <h1>PetCare</h1>
          <span>Clínica Veterinaria</span>
        </div>
        <nav className="nav-links">
          <a href="#hero">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#contact">Contacto</a>
        </nav>
        <button className="nav-cta">Agendar Cita</button>
      </header>

      <main>
        <section className="hero" id="hero" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1920&q=80")' }}>
          <div className="hero-overlay"></div>
          
          <div className="hero-grid">
            <div className="hero-content glass-card">
              <div className="pill">
                <span role="img" aria-label="sparkles">✨</span> Cuidado Premium para Mascotas
              </div>
              <h2>Tu mascota merece <span>lo mejor</span></h2>
              <p>Clínica veterinaria con servicios completos: consultas médicas, peluquería, tienda de accesorios y cuidados especializados por expertos que aman a los animales tanto como tú.</p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Pide tu cita</button>
                <button className="btn btn-secondary">Conoce más</button>
              </div>
            </div>

            <div className="hero-image-container">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80" 
                alt="Perros felices" 
                className="hero-img-main"
              />
              <div className="floating-card glass-card card-1">
                <div className="icon-wrapper">👩‍⚕️</div>
                <div className="card-text">
                  <h4>Atención 24/7</h4>
                  <p>Urgencias veterinarias</p>
                </div>
              </div>
              <div className="floating-card glass-card card-2">
                <div className="icon-wrapper">⭐</div>
                <div className="card-text">
                  <h4>250+ Clientes</h4>
                  <p>Mascotas felices</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bottom-sections-bg">
          <section className="section services" id="services">
          <div className="section-header">
            <h2>Servicios Destacados</h2>
            <p>Ofrecemos atención integral para tus mascotas con profesionales altamente certificados y apasionados por su bienestar.</p>
          </div>
          <div className="services-grid">
            <div className="service-card glass-card">
              <div className="service-img-container">
                <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80" alt="Consulta médica" className="service-img" />
              </div>
              <div className="service-content">
                <h3>Consulta Médica</h3>
                <p>Diagnóstico preciso, planes de vacunación, chequeos preventivos y tratamientos personalizados para perros, gatos y exóticos.</p>
                <a href="#contact" className="service-link">Saber más <span>→</span></a>
              </div>
            </div>
            <div className="service-card glass-card">
              <div className="service-img-container">
                <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80" alt="Peluquería Spa" className="service-img" />
              </div>
              <div className="service-content">
                <h3>Peluquería Spa</h3>
                <p>Baños relajantes, cortes de raza, limpieza dental y cuidados de higiene adaptados para mantener a tu mascota hermosa y saludable.</p>
                <a href="#contact" className="service-link">Agendar <span>→</span></a>
              </div>
            </div>
            <div className="service-card glass-card">
              <div className="service-img-container">
                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" alt="Boutique y nutrición" className="service-img" />
              </div>
              <div className="service-content">
                <h3>Boutique & Nutrición</h3>
                <p>Alimentos premium prescritos, snacks saludables, juguetes interactivos y accesorios de la más alta calidad y diseño.</p>
                <a href="#contact" className="service-link">Visitar tienda <span>→</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section testimonials" id="testimonials">
          <div className="section-header">
            <h2>Historias de Éxito</h2>
            <p>Descubre por qué cientos de familias nos confían la salud de sus seres más queridos.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card glass-card">
              <div className="quote-icon">"</div>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"La atención que recibió Max fue excepcional. El equipo médico fue muy empático y nos explicaron todo con gran claridad. Instalaciones de primer nivel."</p>
              <div className="author">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" alt="María López" className="author-img" />
                <div className="author-info">
                  <strong>María López</strong>
                  <span>Dueña de Max (Golden Retriever)</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card glass-card">
              <div className="quote-icon">"</div>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"Traje a mi gata para una cirugía menor y el cuidado post-operatorio fue increíble. Siempre me mantuvieron informada. La mejor clínica de la ciudad."</p>
              <div className="author">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" alt="Juan Pérez" className="author-img" />
                <div className="author-info">
                  <strong>Juan Pérez</strong>
                  <span>Dueño de Luna (Gata Persa)</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card glass-card">
              <div className="quote-icon">"</div>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"Un servicio de peluquería increíble. Rocky salió feliz, relajado y oliendo delicioso. Me encantó la paciencia que le tuvieron durante todo el proceso."</p>
              <div className="author">
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80" alt="Carlos Gómez" className="author-img" />
                <div className="author-info">
                  <strong>Carlos Gómez</strong>
                  <span>Dueño de Rocky (Beagle)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Estamos aquí para tu mascota</h2>
              <p>¿Tienes dudas o necesitas programar una visita? Contáctanos y nuestro equipo te responderá a la brevedad posible.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-item-icon">📍</div>
                  <div className="info-item-content">
                    <strong>Nuestra Clínica</strong>
                    <p>Av. Las Mascotas 1234, Distrito Verde</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-icon">📞</div>
                  <div className="info-item-content">
                    <strong>Llámanos</strong>
                    <p>+34 600 123 456 (Urgencias 24h)</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-icon">🕒</div>
                  <div className="info-item-content">
                    <strong>Horario</strong>
                    <p>Lun-Vie: 8:00 - 20:00 | Sáb: 9:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form glass-card">
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input type="text" id="name" className="form-control" placeholder="Ej. Ana García" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" className="form-control" placeholder="tu@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">¿En qué podemos ayudarte?</label>
                <textarea id="message" className="form-control" rows={4} placeholder="Escribe tu mensaje aquí..."></textarea>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Enviar Mensaje</button>
            </div>
          </div>
        </section>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Pet<span>Care</span></h2>
            <p>Innovando en el cuidado y bienestar animal con tecnología avanzada y mucho amor.</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <nav className="footer-links">
              <a href="#hero">Inicio</a>
              <a href="#services">Nuestros Servicios</a>
              <a href="#testimonials">Casos de Éxito</a>
              <a href="#contact">Reservar Cita</a>
            </nav>
          </div>
          <div className="footer-section">
            <h4>Conecta con nosotros</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Twitter">TW</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 PetCare Clínica Veterinaria. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
