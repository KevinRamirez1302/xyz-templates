import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
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

export default App
