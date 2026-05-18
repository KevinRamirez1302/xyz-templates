import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Servicios } from './components/Servicios';
import { Tracking } from './components/Tracking';
import { Cotizador } from './components/Cotizador';
import { Registro } from './components/Registro';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleNavigateHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If path is not root or index.html, show 404 NotFound page
  if (currentPath !== '/' && currentPath !== '/index.html') {
    return <NotFound onGoHome={handleNavigateHome} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Main Navigation */}
      <Navbar />

      {/* Hero Section / Banner Principal */}
      <Hero />

      {/* Servicios Principales */}
      <Servicios />

      {/* Módulo de Tracking / Rastreo */}
      <Tracking />

      {/* Cotizador de Envíos Básico */}
      <Cotizador />

      {/* Registro de Clientes / Apertura de Casillero */}
      <Registro />

      {/* Footer / Pie de Página */}
      <Footer />
    </div>
  );
}

export default App;
