import { useMemo } from 'react';
import { PropertyCard } from './PropertyCard';

interface PropertyImage {
  src: string;
  alt?: string;
}

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: 'comprar' | 'alquilar';
  subtype: 'lujo' | 'costa' | 'urbano' | 'rustico';
  images?: (string | PropertyImage)[];
  image?: string | PropertyImage;
  rooms: number;
  bathrooms: number;
  area: string;
}

interface PropertyGridProps {
  properties: Property[];
  activeCategory: 'comprar' | 'alquilar' | null;
  activeSubcategory: string | null;
}

export const PropertyGrid = ({
  properties,
  activeCategory,
  activeSubcategory,
}: PropertyGridProps) => {
  const filteredProperties = useMemo(() => {
    let filtered = properties;

    if (activeCategory) {
      filtered = filtered.filter((prop) => prop.type === activeCategory);
    }

    if (activeSubcategory) {
      filtered = filtered.filter((prop) =>
        prop.subtype.toLowerCase() === activeSubcategory.toLowerCase()
      );
    }

    return filtered;
  }, [properties, activeCategory, activeSubcategory]);

  return (
    <section className='w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#FFEDD4]'>
      <div className='max-w-7xl mx-auto'>
        {/* Título */}
        <div className='mb-12 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-[#FF7D29] mb-4'>
            {activeCategory ? `Propiedades para ${activeCategory}` : 'Todas nuestras propiedades'}
          </h2>
          <div className='h-1 w-24 bg-linear-to-r from-[#FFBF78] to-[#FF7D29] mx-auto rounded-full'></div>
        </div>

        {/* Grid */}
        {filteredProperties.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className='text-center py-12'>
            <p className='text-xl text-gray-600'>
              No se encontraron propiedades con esos criterios.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};