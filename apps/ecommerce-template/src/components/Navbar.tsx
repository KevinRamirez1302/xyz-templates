import React, { useState, useEffect } from 'react'

interface NavbarProps {
  onOpenConfigurator: () => void;
}

export default function Navbar({ onOpenConfigurator }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect py-4 border-b border-white/5'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-electric-blue to-electric-purple p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-dark-bg rounded-[7px] flex items-center justify-center">
              <span className="text-xs font-black tracking-widest text-electric-blue">N</span>
            </div>
          </div>
          <span className="font-display font-bold text-lg tracking-wider bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent group-hover:to-electric-blue transition-all duration-300">
            E-Commerce
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#catalog"
            onClick={(e) => handleLinkClick(e, 'catalog')}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
          >
            Catálogo
          </a>
          <a
            href="#features"
            onClick={(e) => handleLinkClick(e, 'features')}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
          >
            Características
          </a>
          <a
            href="#configurator"
            onClick={(e) => handleLinkClick(e, 'configurator')}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
          >
            Configurador
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleLinkClick(e, 'testimonials')}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
          >
            Testimonios
          </a>
        </div>

        {/* Right Action Button */}
        <div className="hidden md:block">
          <button
            onClick={onOpenConfigurator}
            className="btn-premium px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border border-electric-blue/40 bg-electric-blue/5 text-electric-blue hover:bg-electric-blue/20 hover:border-electric-blue transition-all duration-300 cursor-pointer"
          >
            Configurar PC
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-400 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-b border-white/10 absolute top-full left-0 right-0 py-6 px-8 flex flex-col gap-5 animate-fade-in">
          <a
            href="#catalog"
            onClick={(e) => handleLinkClick(e, 'catalog')}
            className="text-base font-medium text-gray-300 hover:text-white transition-colors"
          >
            Catálogo
          </a>
          <a
            href="#features"
            onClick={(e) => handleLinkClick(e, 'features')}
            className="text-base font-medium text-gray-300 hover:text-white transition-colors"
          >
            Características
          </a>
          <a
            href="#configurator"
            onClick={(e) => handleLinkClick(e, 'configurator')}
            className="text-base font-medium text-gray-300 hover:text-white transition-colors"
          >
            Configurador
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleLinkClick(e, 'testimonials')}
            className="text-base font-medium text-gray-300 hover:text-white transition-colors"
          >
            Testimonios
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false)
              onOpenConfigurator()
            }}
            className="btn-premium py-3 w-full text-center text-xs font-semibold uppercase tracking-wider rounded-full border border-electric-blue/40 bg-electric-blue/5 text-electric-blue hover:bg-electric-blue/20 transition-all duration-300 cursor-pointer"
          >
            Configurar PC
          </button>
        </div>
      )}
    </nav>
  )
}
