import { CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    'Equipos de pesas y máquinas de última generación',
    'Área de cardio completa con tecnología avanzada',
    'Clases grupales: CrossFit, Yoga, Pilates',
    'Entrenadores personales certificados',
    'Nutricionista especializado',
    'Sauna y jacuzzi',
    'Áreas de descanso y lounge',
    'Estacionamiento gratuito',
  ];

  return (
    <section id="about" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="bg-gradient-to-br from-primary to-orange-600 h-96 rounded-lg shadow-2xl flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-lg font-semibold">
                Imagen del Gimnasio
              </p>
              <p className="text-gray-200 text-sm mt-2">
                (Reemplaza con imagen real)
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Sobre FitZone</h2>
              <p className="text-gray-400 text-lg mb-4">
                Desde 2015, FitZone ha sido el lugar donde los apasionados por el fitness vienen a
                transformar sus vidas. Nuestro equipo está comprometido a proporcionarte la mejor
                experiencia de entrenamiento con instalaciones modernas y entrenadores expertos.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Nuestras Instalaciones</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
