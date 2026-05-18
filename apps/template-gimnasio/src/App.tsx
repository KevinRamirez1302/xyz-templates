import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Hero />
      
      {/* Secciones con fondo */}
      <div
        className="relative"
        style={{
          backgroundImage: 'url(/fondo-gym.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-70 pointer-events-none" />

        {/* Top fade para una transición más suave desde el Hero */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/90 to-transparent pointer-events-none" />

        {/* Contenido */}
        <div className="relative z-10 pt-10">
          <About />
          <Services />
          <Plans />
          <Contact />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
