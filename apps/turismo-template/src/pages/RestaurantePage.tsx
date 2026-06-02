import React from 'react'
import { Header } from '../components/restaurante/Header'
import { Hero } from '../components/restaurante/Hero'
import { About } from '../components/restaurante/About'
import { Menu } from '../components/restaurante/Menu'
import { Services } from '../components/restaurante/Services'
import { Contact } from '../components/restaurante/Contact'
import { Footer } from '../components/restaurante/Footer'

const RestaurantePage: React.FC = () => {
  return (
    <div className="restaurante-page">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default RestaurantePage
