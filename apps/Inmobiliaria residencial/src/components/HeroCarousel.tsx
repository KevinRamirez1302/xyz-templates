import { useState, useEffect } from 'react';
import { heroImages } from './config/ImageConfig';

interface HeroImage {
  src: string;
  alt?: string;
}

interface HeroCarouselProps {
  images?: (string | HeroImage)[];
  title?: string;
  subtitle?: string;
}

export const HeroCarousel = ({
  images = heroImages,
  title = 'InmoRes',
  subtitle = 'Encuentra tu hogar ideal con nosotros',
}: HeroCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // DEBUG
  console.log('HeroCarousel recibió images:', images);
  console.log('Tipo de primera imagen:', typeof images[0]);
  console.log('Primera imagen:', images[0]);

  // ✅ Validar que hay imágenes antes de hacer el intervalo
  useEffect(() => {
    if (!images || images.length === 0) {
      console.warn('HeroCarousel: No hay imágenes proporcionadas');
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambiar imagen cada 5 segundos

    return () => clearInterval(interval);
  }, [images]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // ✅ Si no hay imágenes, mostrar mensaje
  if (!images || images.length === 0) {
    return (
      <section className='relative w-full h-screen overflow-hidden bg-black flex items-center justify-center'>
        <div className='text-center text-white'>
          <h1 className='text-5xl md:text-7xl font-bold mb-4'>{title}</h1>
          <p className='text-xl md:text-2xl text-[#FEFFD2]'>{subtitle}</p>
          <p className='text-red-500 mt-4'> No se han cargado las imágenes correctamente</p>
        </div>
      </section>
    );
  }

  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {/* Imágenes del Carrusel */}
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              } bg-green-500`}
          >
            <img
              src={typeof image === 'string' ? image : image.src}
              alt={typeof image === 'string' ? `Slide ${index + 1}` : (image.alt || `Slide ${index + 1}`)}
              className='w-full h-full object-cover '
              onError={() => {
                console.error(`Error cargando imagen ${index}:`, image);
              }}
            />

          </div>
        );
      })}

      {/* Contenido Central */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center z-10'>
        <h1 className='text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg'>
          {title}
        </h1>
        <p className='text-xl md:text-2xl text-[#FEFFD2] drop-shadow-lg max-w-2xl px-4'>
          {subtitle}
        </p>
      </div>

      {/* Controles de Navegación */}
      <button
        onClick={goToPrevious}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black rounded-full w-12 h-12 flex items-center justify-center z-20 transition'
      >
        ❮
      </button>

      <button
        onClick={goToNext}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black rounded-full w-12 h-12 flex items-center justify-center z-20 transition'
      >
        ❯
      </button>

      {/* Indicadores de Página */}
      <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition ${index === currentImageIndex
                ? 'bg-[#FF7D29] w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
          />
        ))}
      </div>
    </section>
  );
};