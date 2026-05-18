import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Destinations from '../components/Destinations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  // SEO implementation
  useEffect(() => {
    // SEO genérico para plantilla: reemplaza con tu marca y descripción
    document.title = "Travel Landing Template | Agencia de Viajes";
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Plantilla de landing page para agencias de viajes. Personaliza textos, imágenes y colores para crear tu propio sitio web.";
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />

        {/* Fondo imagen: foto aérea de destino turístico */}
        <div
          className="relative flex-grow bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/fondo_cielo.png')",
          }}
        >
          {/* Overlay blanco suave para mantener texto legible */}
          <div className="absolute inset-0 bg-white/70" />

          <div className="relative z-10">
            <About />
            <Destinations />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
