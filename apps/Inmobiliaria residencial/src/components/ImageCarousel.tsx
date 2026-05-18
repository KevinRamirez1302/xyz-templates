import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
    images: string[];
    title: string;
}

export const ImageCarousel = ({ images, title }: ImageCarouselProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    // Si no hay imágenes, mostrar placeholder
    if (images.length === 0) {
        return (
            <div className='relative h-48 bg-gradient-to-br from-[#FEFFD2] to-[#FFBF78] flex items-center justify-center rounded-lg overflow-hidden'>
                <p className='text-gray-500 text-center'>Sin imágenes disponibles</p>
            </div>
        );
    }

    return (
        <div className='relative group'>
            {/* Imagen principal */}
            <div className='relative h-48 overflow-hidden bg-gradient-to-br from-[#FEFFD2] to-[#FFBF78] rounded-lg'>
                <img
                    src={images[currentImageIndex]}
                    alt={`${title} - Imagen ${currentImageIndex + 1}`}
                    className='w-full h-full object-cover transition-opacity duration-300'
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Imagen+no+disponible';
                    }}
                />
            </div>

            {/* Botones de navegación lateral (solo visible en hover en desktop) */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'
                        aria-label='Imagen anterior'
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={goToNext}
                        className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'
                        aria-label='Imagen siguiente'
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}

            {/* Indicadores de puntos (dots) */}
            {images.length > 1 && (
                <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                    ? 'bg-white w-6'
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                            aria-label={`Ir a imagen ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Contador de imágenes */}
            {images.length > 1 && (
                <div className='absolute top-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                    {currentImageIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
};