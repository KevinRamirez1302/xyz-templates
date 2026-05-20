import React from 'react';
import { Wifi, Tv, Coffee, Maximize, Users, BedDouble, ArrowRight } from 'lucide-react';

const RoomCard = ({ room }) => {
  const { title, description, price, image, size, maxGuests, bedType, features } = room;

  // Icon mapping helper
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'wifi':
        return <Wifi className="w-4 h-4 text-[#c5a880]" />;
      case 'tv':
        return <Tv className="w-4 h-4 text-[#c5a880]" />;
      case 'coffee':
        return <Coffee className="w-4 h-4 text-[#c5a880]" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden rounded-none">
      {/* Image Container with Hover Zoom */}
      <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Price Badge */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 border-l-2 border-[#c5a880] shadow-md">
          <span className="text-xs uppercase tracking-widest text-gray-500 block font-light">Desde</span>
          <span className="text-xl font-serif font-bold text-gray-900">{price}€ <span className="text-xs font-sans font-normal text-gray-600">/ noche</span></span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Room Specs Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 mb-4 pb-4 border-b border-gray-100 uppercase tracking-wider">
            <div className="flex items-center space-x-1">
              <Maximize className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{size} m²</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Máx. {maxGuests}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BedDouble className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{bedType}</span>
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#c5a880] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
            {description}
          </p>
        </div>

        <div>
          {/* Amenity Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {features.map((feat, idx) => (
              <span key={idx} className="bg-gray-50 border border-gray-200 text-gray-700 text-xs px-3 py-1.5 flex items-center space-x-1.5 font-medium">
                {renderIcon(feat.icon)}
                <span>{feat.text}</span>
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <a
              href="#booking"
              className="bg-gray-900 hover:bg-[#c5a880] text-white text-center py-3 text-xs uppercase tracking-widest font-semibold transition-colors duration-300 shadow-sm hover:shadow"
            >
              Reservar
            </a>
            <button
              type="button"
              onClick={() => alert(`Cargando detalles de ${title}...`)}
              className="border border-gray-300 hover:border-[#c5a880] text-gray-800 hover:text-[#c5a880] text-center py-3 text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center space-x-1 group/btn"
            >
              <span>Ver Más</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RoomCard;
