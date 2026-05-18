import {
  Dumbbell,
  Users,
  Heart,
  Award,
  Zap,
  TrendingUp,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Entrenamiento Personalizado',
      description:
        'Planes de entrenamiento diseñados específicamente para tus objetivos y nivel de fitness.',
    },
    {
      icon: Users,
      title: 'Clases Grupales',
      description:
        'Desde CrossFit hasta Yoga, nuestras clases crean una comunidad motivadora.',
    },
    {
      icon: Heart,
      title: 'Nutrición',
      description:
        'Asesoría nutricional de nuestros especialistas para complementar tu entrenamiento.',
    },
    {
      icon: Award,
      title: 'Asesoría Deportiva',
      description:
        'Entrenadores certificados listos para guiarte hacia el éxito en tu viaje fitness.',
    },
    {
      icon: Zap,
      title: 'Recuperación',
      description:
        'Servicios de recuperación incluyendo sauna, masaje y zonas de descanso.',
    },
    {
      icon: TrendingUp,
      title: 'Seguimiento del Progreso',
      description:
        'Monitorea tu progreso con nuestras herramientas digitales y reportes detallados.',
    },
  ];

  return (
    <section id="services" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Te ofrecemos una variedad completa de servicios para apoyar tu transformación fitness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
              >
                <IconComponent
                  className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
                  size={40}
                />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
