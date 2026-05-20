import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Mendoza',
      role: 'Viajero de Negocios',
      location: 'Madrid, España',
      quote: 'El equilibrio perfecto entre elegancia y funcionalidad. La sala de reuniones impecable y terminar el día en la piscina de la azotea con vistas al parque es un auténtico lujo. Excelente atención.',
      rating: 5,
      date: 'Mayo 2026',
    },
    {
      id: 2,
      name: 'Eleanor & Richard Sterling',
      role: 'Aniversario de Bodas',
      location: 'Londres, Reino Unido',
      quote: 'Nuestra estancia en la Suite del Hotel fue de ensueño. El desayuno buffet es espectacular y la ubicación frente al parque nos permitió explorar Santa Cruz caminando. Volveremos sin duda.',
      rating: 5,
      date: 'Abril 2026',
    },
    {
      id: 3,
      name: 'Dr. Michael Weber',
      role: 'Turismo Cultural',
      location: 'Múnich, Alemania',
      quote: 'Un hotel con un diseño interior muy cuidado y un personal altamente profesional. El restaurante Cayena ofrece una gastronomía de nivel superior. Altamente recomendado.',
      rating: 5,
      date: 'Marzo 2026',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="experiences" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#c5a880]/5 -z-10 transform skew-x-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#c5a880] block mb-3">
            Voces de nuestros Huéspedes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Experiencias en el Hotel
          </h2>
          <div className="w-16 h-0.5 bg-[#c5a880] mx-auto mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
            La satisfacción de quienes nos visitan es nuestro mayor orgullo y el reflejo de nuestra dedicación al detalle.
          </p>
        </div>

        {/* Testimonial Slider / Showcase */}
        <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-100 shadow-xl p-8 sm:p-14 relative rounded-none">
          
          <Quote className="absolute top-6 left-6 sm:top-10 sm:left-10 w-16 h-16 text-[#c5a880]/20 -z-0" />

          <div className="relative z-10 min-h-[220px] flex flex-col justify-between">
            {/* Rating Stars */}
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#c5a880] text-[#c5a880]" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="font-serif text-lg sm:text-2xl text-gray-800 leading-relaxed italic mb-8 font-light">
              "{testimonials[activeIndex].quote}"
            </p>

            {/* Author Details & Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-200">
              <div>
                <h4 className="font-serif text-xl font-bold text-gray-900">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold mt-1">
                  {testimonials[activeIndex].role} • <span className="text-gray-500 font-normal">{testimonials[activeIndex].location}</span>
                </p>
                <span className="text-xs text-gray-400 block mt-1">{testimonials[activeIndex].date}</span>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="w-11 h-11 bg-white border border-gray-200 hover:border-[#c5a880] hover:bg-[#c5a880] hover:text-white text-gray-700 transition-all flex items-center justify-center shadow-sm"
                  aria-label="Anterior testimonio"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="w-11 h-11 bg-white border border-gray-200 hover:border-[#c5a880] hover:bg-[#c5a880] hover:text-white text-gray-700 transition-all flex items-center justify-center shadow-sm"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center space-x-2 mt-8 pt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 transition-all ${
                  activeIndex === idx ? 'bg-[#c5a880] w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
