import React from 'react';
import { Waves, UtensilsCrossed, Dumbbell, Briefcase, MapPin } from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: 'Piscina en la Azotea & Solárium',
      description: 'Disfrute de vistas panorámicas incomparables al Parque García Sanabria y al océano Atlántico desde nuestra exclusiva piscina de cristal en el ático.',
      icon: <Waves className="w-8 h-8 text-[#c5a880]" />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Gastronomía de Autor',
      description: 'Saboree creaciones exquisitas en nuestro Restaurante Cayena y relájese con coctelería premium en el sofisticado ambiente del Hotel Lounge Bar.',
      icon: <UtensilsCrossed className="w-8 h-8 text-[#c5a880]" />,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Gimnasio & Bienestar',
      description: 'Mantenga su rutina de ejercicios en nuestro moderno centro de fitness equipado con tecnología de última generación y área de relajación.',
      icon: <Dumbbell className="w-8 h-8 text-[#c5a880]" />,
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Eventos & Salas de Reuniones',
      description: 'Salones versátiles y elegantes con equipamiento audiovisual completo, ideales para conferencias de negocios y celebraciones memorables.',
      icon: <Briefcase className="w-8 h-8 text-[#c5a880]" />,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Ubicación Privilegiada',
      description: 'Situado en el corazón cultural y comercial de Santa Cruz de Tenerife, frente al pulmón verde de la ciudad y a un paso de los principales atractivos.',
      icon: <MapPin className="w-8 h-8 text-[#c5a880]" />,
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#c5a880] block mb-3">
            Exclusividad & Confort
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Servicios e Instalaciones Destacadas
          </h2>
          <div className="w-16 h-0.5 bg-[#c5a880] mx-auto mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
            Cada rincón del Hotel ha sido meticulosamente diseñado para ofrecer a nuestros huéspedes una experiencia de hospitalidad urbana sin igual.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden flex flex-col ${
                index === 0 ? 'md:col-span-2 lg:col-span-2 flex-col md:flex-row' : ''
              }`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden bg-gray-100 ${index === 0 ? 'md:w-1/2 aspect-[16/10] md:aspect-auto' : 'aspect-[16/10]'}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 shadow-md border-l-2 border-[#c5a880]">
                  {service.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className={`p-8 flex-1 flex flex-col justify-between ${index === 0 ? 'md:w-1/2 justify-center' : ''}`}>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#c5a880] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c5a880] hover:text-gray-900 transition-colors"
                  >
                    <span>Más Información</span>
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedServices;
