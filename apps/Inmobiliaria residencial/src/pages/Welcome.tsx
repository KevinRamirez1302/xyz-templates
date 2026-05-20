
import { useState } from 'react';
import '../index.css';
import { NavbarTipo } from '../components/NavbarTipo';
import { HeroCarousel } from '../components/HeroCarousel';
import { PropertyGrid } from '../components/PropertyGrid';
import { heroImages, propertyImages } from '../components/config/ImageConfig';


// Datos de ejemplo - Reemplaza con tus propias imágenes
const sampleProperties = [
  {
    id: 1,
    title: 'Apartamento Moderno de Playa',
    location: 'Madrid, España',
    price: '€850,000',
    type: 'comprar' as const,
    subtype: 'lujo' as const,
    images: propertyImages.venta_vacacional,
    rooms: 4,
    bathrooms: 3,
    area: '280',
  },
  {
    id: 2,
    title: 'Casa Costa Hermosa con Piscina',
    location: 'Málaga, España',
    price: '€1,200,000',
    type: 'alquilar' as const,
    subtype: 'lujo' as const,
    images: propertyImages.alquiler_vacacional,
    rooms: 3,
    bathrooms: 2,
    area: '150',
  },
  {
    id: 3,
    title: 'Apartamento Urbano Centro',
    location: 'Barcelona, España',
    price: '€2,500/mes',
    type: 'alquilar' as const,
    subtype: 'urbano' as const,
    images: propertyImages.alquiler_urbano,
    rooms: 2,
    bathrooms: 1,
    area: '95',
  },
  {
    id: 4,
    title: 'Apartamento Urbano Nuevo ',
    location: 'Andalucía, España',
    price: '€450,000',
    type: 'comprar' as const,
    subtype: 'urbano' as const,
    images: propertyImages.venta_urbano,
    rooms: 5,
    bathrooms: 2,
    area: '350',
  },
  {
    id: 5,
    title: 'Penthouse Lujo Vista Mar',
    location: 'Barcelona, España',
    price: '€3,200,000',
    type: 'comprar' as const,
    subtype: 'lujo' as const,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'
        , alt: 'imagen de apartamento lujo InmoRES'
      }
    ],
    rooms: 4,
    bathrooms: 4,
    area: '320',
  },
  {
    id: 6,
    title: 'Chalet Costa Dorada',
    location: 'Tarragona, España',
    price: '€2,000/mes',
    type: 'alquilar' as const,
    subtype: 'costa' as const,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        alt: 'imagen de chalet costa InmoRES'
      }
    ],
    rooms: 3,
    bathrooms: 2,
    area: '180',
  },
  {
    id: 7,
    title: 'Piso Urbano Moderno',
    location: 'Madrid, España',
    price: '€1,800/mes',
    type: 'alquilar' as const,
    subtype: 'urbano' as const,
    images: [
      {
        src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
        alt: 'imagen de piso urbano InmoRES'
      }
    ],
    rooms: 2,
    bathrooms: 1,
    area: '120',
  },
  {
    id: 8,
    title: 'Piso Urbano Moderno',
    location: 'Madrid, España',
    price: '€1,800/mes',
    type: 'comprar' as const,
    subtype: 'rustico' as const,
    images: propertyImages.venta_rustico,
    rooms: 2,
    bathrooms: 1,
    area: '120',
  },
];

function Welcome() {
  const [activeCategory, setActiveCategory] = useState<'comprar' | 'alquilar' | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const handleCategoryChange = (category: 'comprar' | 'alquilar' | null) => {
    setActiveCategory(category);
    setActiveSubcategory(null);
  };

  const handleSubcategoryChange = (subcategory: string | null) => {
    setActiveSubcategory(subcategory);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <NavbarTipo
        onCategoryChange={handleCategoryChange}
        onSubcategoryChange={handleSubcategoryChange}
      />

      {/* Hero Carousel */}
      {/* ✅ Pasamos directamente el array de imágenes importadas */}
      <HeroCarousel images={heroImages} title='InmoRes' subtitle='Tu portal inmobiliario de confianza' />

      {/* Property Grid */}
      <PropertyGrid
        properties={sampleProperties}
        activeCategory={activeCategory}
        activeSubcategory={activeSubcategory}
      />
    </div>
  );
}

export default Welcome;