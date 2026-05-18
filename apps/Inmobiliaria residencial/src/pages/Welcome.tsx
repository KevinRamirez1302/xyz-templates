import { useState } from 'react';
import '../index.css';
import { NavbarTipo } from '../components/NavbarTipo';
import { HeroCarousel } from '../components/HeroCarousel';
import { PropertyGrid } from '../components/PropertyGrid';

// Datos de ejemplo - Reemplaza con tus propias imágenes
const heroImages = [
  "./src/assets/img/img1.jpg",
  "./src/assets/img/img2.jpg",
  "./src/assets/img/img3.jpg"
];

const sampleProperties = [
  {
    id: 1,
    title: 'Villa Lujo Moderna',
    location: 'Madrid, España',
    price: '€850,000',
    type: 'comprar' as const,// se utiliza "comprar" para indicar a TypeScript que el valor "comprar"  es una categoria y puede cambiar 
    subtype: 'lujo' as const,// Se ulitilza  "lujo" para indicar a TypeScript que el valor "lujo" es una subcategoria y puede cambiar 
    images: [
      "./src/assets/img/img4a.webp",
      "./src/assets/img/img4b.webp",
      "./src/assets/img/img4c.webp",
      "./src/assets/img/img4d.webp",
      "./src/assets/img/img4e.webp",
      "./src/assets/img/img4f.webp"
    ],
    rooms: 4,
    bathrooms: 3,
    area: '280',
  },
  {
    id: 2,
    title: 'Apartamento Costa Hermoso',
    location: 'Málaga, España',
    price: '€1,200,000',
    type: 'comprar' as const,
    subtype: 'costa' as const,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    rooms: 3,
    bathrooms: 2,
    area: '150',
  },
  {
    id: 3,
    title: 'Loft Urbano Centro',
    location: 'Barcelona, España',
    price: '€2,500/mes',
    type: 'alquilar' as const,
    subtype: 'urbano' as const,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1e525037eb?auto=format&fit=crop&w=800&q=80',
    rooms: 2,
    bathrooms: 1,
    area: '95',
  },
  {
    id: 4,
    title: 'Casa Rústica Campos',
    location: 'Andalucía, España',
    price: '€450,000',
    type: 'comprar' as const,
    subtype: 'rustico' as const,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    rooms: 2,
    bathrooms: 1,
    area: '120',
  },
  {
    id: 8,
    title: 'Finca Rústica Toledo',
    location: 'Toledo, España',
    price: '€550,000',
    type: 'comprar' as const,
    subtype: 'rustico' as const,
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?auto=format&fit=crop&w=800&q=80',
    rooms: 6,
    bathrooms: 3,
    area: '450',
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
      <HeroCarousel
        images={heroImages}
        title='InmoRes'
        subtitle='Tu portal inmobiliario de confianza'
      />

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