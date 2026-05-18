import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  })
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        style={{
          position: 'absolute', top: '-100%', left: 0, zIndex: 9999,
          background: 'var(--color-charcoal)', color: '#fff',
          padding: '12px 24px', borderRadius: '0 0 8px 0',
          textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500,
          transition: 'top 0.2s',
        }}
        onFocus={e  => (e.currentTarget as HTMLAnchorElement).style.top = '0'}
        onBlur={e   => (e.currentTarget as HTMLAnchorElement).style.top = '-100%'}
      >
        Saltar al contenido principal
      </a>

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/nosotras"  element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto"  element={<Contact />} />
        <Route path="*"          element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
