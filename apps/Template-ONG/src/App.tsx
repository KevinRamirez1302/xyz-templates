import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

// ScrollToTop component ensures that navigating to a new route resets the viewport scroll.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div 
        id="app-container" 
        className="min-h-screen flex flex-col bg-slate-950 text-slate-100"
      >
        {/* Navigation Bar */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="flex-grow pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer Area */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
