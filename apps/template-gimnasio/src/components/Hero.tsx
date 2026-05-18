import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center object-cover"
        style={{
          backgroundImage: 'url(/fondo-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay oscuro para mejor legibilidad */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-75" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Transforma Tu Cuerpo,{' '}
            <span className="text-primary">Transforma Tu Vida</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Únete a FitZone y descubre una comunidad de fitness dedicada a ayudarte a alcanzar tus
            objetivos. Con equipos de última generación y entrenadores profesionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#plans"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2 text-lg"
            >
              Ver Planes <ArrowRight size={20} />
            </a>
            <a
              href="#about"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300 text-lg"
            >
              Conocer Más
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-16 max-w-2xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-primary">500+</h3>
              <p className="text-gray-300">Miembros Activos</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">50+</h3>
              <p className="text-gray-300">Equipos Modernos</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">24/7</h3>
              <p className="text-gray-300">Acceso Abierto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
