import fondoHero from '../assets/fondo-hero.jpg'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${fondoHero}')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"></div>
      <div className="container-custom relative z-10 text-center py-20">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-white">
          Bienvenido a Trattoria Italia
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-white opacity-90 max-w-2xl mx-auto">
          Experimenta la auténtica gastronomía italiana en el corazón de la ciudad
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
          >
            Ver Menú
          </a>
          <a href="#contact" className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-10">
            Hacer Reserva
          </a>
        </div>
      </div>
    </section>
  )
}
