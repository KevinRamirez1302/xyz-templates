
import { ImageCarousel } from './ImageCarousel';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: 'comprar' | 'alquilar';
  subtype: 'lujo' | 'costa' | 'urbano' | 'rustico';
  images?: string[];
  image?: string;
  rooms: number;
  bathrooms: number;
  area: string;
}

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  // Normalizar las imágenes: priorizar 'images' sobre 'image'
  const images = property.images && property.images.length > 0
    ? property.images
    : property.image
      ? [property.image]
      : [];

  const getSubtypeColor = (subtype: string) => {
    const colors: Record<string, string> = {
      lujo: 'bg-purple-100 text-purple-800',
      costa: 'bg-blue-100 text-blue-800',
      urbano: 'bg-gray-100 text-gray-800',
      rustico: 'bg-amber-100 text-amber-800',
    };
    return colors[subtype] || 'bg-gray-100 text-gray-800';
  };

  const getTypeColor = (type: string) => {
    return type === 'comprar' ? 'bg-slate-900 text-white' : 'bg-red-600 text-white';
  };

  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105 duration-300'>
      {/* Carrusel de imágenes */}
      <div className='relative p-4 bg-gradient-to-br from-[#FEFFD2] to-[#FFBF78]'>
        <ImageCarousel images={images} title={property.title} />

        {/* Badges de tipo y subtipo */}
        <div className='absolute top-7 right-7 flex space-x-2 z-20'>
          <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${getTypeColor(property.type)}`}>
            {property.type}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${getSubtypeColor(property.subtype)}`}>
            {property.subtype}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className='p-4'>
        <h3 className='text-lg font-bold text-gray-800 mb-2'>{property.title}</h3>
        <p className='text-sm text-gray-600 mb-3 flex items-center'>
          📍 {property.location}
        </p>

        {/* Detalles */}
        <div className='flex justify-between text-sm text-gray-600 mb-4 border-b pb-3'>
          <span>🛏️ {property.rooms} hab.</span>
          <span>🚿 {property.bathrooms} baños</span>
          <span>📐 {property.area} m²</span>
        </div>

        {/* Precio */}
        <div className='mb-4'>
          <p className='text-2xl font-bold text-[#FF7D29]'>{property.price}</p>
        </div>

        {/* Botón */}
        <button className='w-full bg-gradient-to-r from-[#FF7D29] to-[#FFBF78] hover:from-[#FFBF78] hover:to-[#FFEEA9] text-white font-bold py-2 px-4 rounded transition'>
          Ver detalles
        </button>
      </div>
    </div>
  );
};