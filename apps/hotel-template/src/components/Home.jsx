import React, { useState } from 'react';
import Navbar from './Navbar';
import BookingBar from './BookingBar';
import RoomCard from './RoomCard';
import FeaturedServices from './FeaturedServices';
import Testimonials from './Testimonials';
import Footer from './Footer';
import { ArrowRight, Sparkles, MapPin, Phone } from 'lucide-react';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const roomsData = [
    {
      id: 1,
      title: 'Habitación Doble Superior',
      category: 'Habitaciones',
      description: 'Espacio elegante de diseño contemporáneo, dotado de grandes ventanales con iluminación natural y vistas a la ciudad o al patio interior ajardinado.',
      price: 135,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop',
      size: 28,
      maxGuests: 2,
      bedType: 'King Size / Dos Individuales',
      features: [
        { icon: 'wifi', text: 'WiFi Alta Velocidad' },
        { icon: 'tv', text: 'Smart TV 55"' },
        { icon: 'coffee', text: 'Cafetera Nespresso' },
      ],
    },
    {
      id: 2,
      title: 'Habitación Executive con Terraza',
      category: 'Habitaciones',
      description: 'Ubicada en las plantas superiores, ofrece una magnífica terraza privada amueblada ideal para relajarse disfrutando del excelente clima de Santa Cruz.',
      price: 175,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
      size: 34,
      maxGuests: 2,
      bedType: 'King Size Premium',
      features: [
        { icon: 'wifi', text: 'WiFi Alta Velocidad' },
        { icon: 'tv', text: 'Smart TV 65"' },
        { icon: 'coffee', text: 'Nespresso & Minibar' },
      ],
    },
    {
      id: 3,
      title: 'Suite Parque García Sanabria',
      category: 'Suites',
      description: 'Nuestra joya arquitectónica. Un salón independiente, vestidor, amplio baño con bañera de hidromasaje y vistas frontales panorámicas al parque.',
      price: 260,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
      size: 52,
      maxGuests: 3,
      bedType: 'King Size Imperial',
      features: [
        { icon: 'wifi', text: 'WiFi Premium' },
        { icon: 'tv', text: '2x Smart TV 65"' },
        { icon: 'coffee', text: 'Servicio VIP & Bar' },
      ],
    },
    {
      id: 4,
      title: 'Suite Hotel Lounge',
      category: 'Suites',
      description: 'Máximo confort y exclusividad. Incluye acceso privado al solárium superior, atenciones de bienvenida diarias y carta de almohadas personalizada.',
      price: 310,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop',
      size: 65,
      maxGuests: 4,
      bedType: 'King Size Imperial + Sofá Cama',
      features: [
        { icon: 'wifi', text: 'WiFi Premium' },
        { icon: 'tv', text: 'Cine en Casa' },
        { icon: 'coffee', text: 'Mayordomía & Spa' },
      ],
    },
  ];

  const filteredRooms = activeCategory === 'Todas' 
    ? roomsData 
    : roomsData.filter(room => room.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#c5a880] selection:text-white flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hotel" className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 pb-32 sm:pb-40">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop"
            alt="Hotel Fachada y Piscina"
            className="w-full h-full object-cover object-center opacity-50 scale-105 animate-pulse-slow transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-10 sm:mt-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 border border-white/20 mb-6 sm:mb-8 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-[#c5a880]" />
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-white">Hotel **** Superior</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 leading-tight drop-shadow-lg animate-slideUp">
            El Arte de la <span className="text-[#c5a880] italic">Hospitalidad Urbana</span> en Tenerife
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-200 font-light leading-relaxed mb-10 sm:mb-12 animate-slideUp tracking-wide">
            Descubra un oasis de elegancia contemporánea, gastronomía exquisita y confort absoluto frente al emblemático Parque García Sanabria en Santa Cruz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp">
            <a
              href="#booking"
              className="w-full sm:w-auto bg-[#c5a880] hover:bg-[#b0926a] text-white px-8 py-4 font-semibold text-xs tracking-[0.2em] uppercase shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 duration-300 rounded-none flex items-center justify-center space-x-2"
            >
              <span>Reservar su Estancia</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#rooms"
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white px-8 py-4 font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-none flex items-center justify-center"
            >
              Explorar Habitaciones
            </a>
          </div>
        </div>

        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* Booking Bar (Overlaps Hero bottom) */}
      <BookingBar />

      {/* Welcome / Philosophy Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image Collage */}
            <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
                <div className="overflow-hidden shadow-2xl bg-gray-100 aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
                    alt="Piscina ático del Hotel"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=800&auto=format&fit=crop"
                    alt="Detalle habitación de lujo"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
                    alt="Restaurante Cayena"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden shadow-2xl bg-gray-100 aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1551882532-0955243367c4?q=80&w=800&auto=format&fit=crop"
                    alt="Recepción y Lounge"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Decorative Gold Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111827] text-white p-6 sm:p-8 text-center shadow-2xl border-2 border-[#c5a880] w-48 sm:w-56 z-20">
                <span className="font-serif text-3xl sm:text-4xl font-bold block text-[#c5a880] mb-1">1966</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light block">Tradición & Vanguardia</span>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:pl-8">
              <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#c5a880] block mb-3">
                Un Icono en Santa Cruz
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Donde la Elegancia se Encuentra con la Ciudad
              </h2>
              <div className="w-16 h-0.5 bg-[#c5a880] mb-8"></div>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 font-light">
                Con una ubicación privilegiada frente al exuberante Parque García Sanabria, el <strong className="font-medium text-gray-900">Hotel</strong> se ha consolidado como el punto de referencia para viajeros que exigen la máxima calidad, confort y un trato personalizado.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 font-light">
                Nuestros interiores de diseño combinan materiales nobles, iluminación cálida y obras de arte contemporáneo, creando una atmósfera exclusiva que invita al descanso y a la celebración de los sentidos.
              </p>

              {/* USP List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 pt-6 border-t border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#c5a880] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-base mb-1">Piscina de Cristal en Ático</h4>
                    <p className="text-gray-500 text-xs font-light leading-normal">Vistas inigualables al mar y a la montaña.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#c5a880] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-base mb-1">Restaurante Cayena</h4>
                    <p className="text-gray-500 text-xs font-light leading-normal">Alta gastronomía con productos de proximidad.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#c5a880] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-base mb-1">Salones Premium</h4>
                    <p className="text-gray-500 text-xs font-light leading-normal">Espacios versátiles para eventos de alto nivel.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#c5a880] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-base mb-1">Ubicación Céntrica</h4>
                    <p className="text-gray-500 text-xs font-light leading-normal">Frente al parque más emblemático de la capital.</p>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-[#c5a880] text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 rounded-none shadow-md"
              >
                <span>Descubra Nuestro Legado</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* Rooms & Suites Section */}
      <section id="rooms" className="py-24 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
            <div className="max-w-xl">
              <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#c5a880] block mb-3">
                Confort & Sofisticación
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Habitaciones & Suites
              </h2>
              <div className="w-16 h-0.5 bg-[#c5a880] mb-6 md:mb-0"></div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-white p-1.5 border border-gray-200 shadow-sm">
              {['Todas', 'Habitaciones', 'Suites'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all rounded-none ${
                    activeCategory === cat
                      ? 'bg-[#c5a880] text-white shadow'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

        </div>
      </section>

      {/* Featured Services */}
      <FeaturedServices />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
