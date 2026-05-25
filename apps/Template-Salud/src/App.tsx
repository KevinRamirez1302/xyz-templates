import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Contact from './views/Contact'
import BookModal from './components/BookModal'

function AppContent() {
  const location = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (location.hash === '#pedir-cita') {
      setIsModalOpen(true)
    } else {
      setIsModalOpen(false)
    }
  }, [location])

  const closeModal = () => {
    window.location.hash = ''
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-300 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-[15vh] -left-[15vw] size-[45vw] rounded-full bg-teal-600/5 dark:bg-teal-500/8 filter blur-[80px] pointer-events-none animate-float-slow -z-10" />
      <div className="absolute top-[60vh] -right-[15vw] size-[45vw] rounded-full bg-emerald-600/5 dark:bg-emerald-500/8 filter blur-[80px] pointer-events-none animate-float-reverse -z-10" />
      
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Page Content Routes */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Pop-up modal for appointment booking */}
      {isModalOpen && <BookModal onClose={closeModal} />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
