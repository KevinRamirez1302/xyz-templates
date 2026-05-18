import { Calendar, Users, MapPin, Star } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Aventura en Bali',
    location: 'Indonesia',
    price: '€1,299',
    days: 10,
    groupSize: 'Max 12',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tag: 'Más Popular'
  },
  {
    id: 2,
    title: 'Escapada Romántica',
    location: 'Costa Amalfitana, Italia',
    price: '€950',
    days: 5,
    groupSize: 'Parejas',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tag: 'Premium'
  },
  {
    id: 3,
    title: 'Expedición Aurora',
    location: 'Tromsø, Noruega',
    price: '€1,850',
    days: 7,
    groupSize: 'Max 8',
    image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tag: 'Invierno'
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Paquetes Exclusivos
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-4 leading-tight">
              Destinos Inspiradores
            </h2>
            {/* Descripción con texto más oscuro para mayor contraste */}
            <p className="text-slate-900 font-light">
              Desde playas paradisíacas hasta montañas nevadas, descubre los viajes que hemos diseñado cuidadosamente para ti.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#" className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center border-b border-primary hover:border-secondary pb-1">
              Ver Todos los Destinos
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-2xl overflow-hidden group cursor-pointer border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider rounded-full">
                  {dest.tag}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-amber-400">
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-slate-600 text-sm mb-3">
                  <MapPin size={16} className="mr-1 text-secondary" />
                  {dest.location}
                </div>
                <h3 className="text-xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">
                  {dest.title}
                </h3>
                <p className="text-2xl font-bold text-primary mb-6">
                  {dest.price} <span className="text-sm font-normal text-slate-600">/ persona</span>
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-slate-700 text-sm">
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2 text-secondary/70" />
                    {dest.days} días
                  </div>
                  <div className="flex items-center">
                    <Users size={18} className="mr-2 text-secondary/70" />
                    {dest.groupSize}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
