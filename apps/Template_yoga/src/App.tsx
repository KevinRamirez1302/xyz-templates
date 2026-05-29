import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './components/About'
import Classes from './components/Classes'
import Schedule from './components/Schedule'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll behavior helper */}
      <ScrollToTop />
      
      <div className="min-h-screen flex flex-col bg-sand-50 dark:bg-zinc-950 transition-colors duration-300">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Multi-page Routing */}
        <main className="flex-grow">
          <Routes>
            {/* Home / Inicio (Portales y resúmenes) */}
            <Route path="/" element={<Home />} />

            {/* Secciones detalladas como páginas independientes */}
            <Route path="/nosotros" element={<About />} />
            <Route path="/clases" element={<Classes />} />
            <Route path="/horarios" element={<Schedule />} />
            <Route path="/precios" element={<Pricing />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
        
      </div>
    </BrowserRouter>
  )
}
