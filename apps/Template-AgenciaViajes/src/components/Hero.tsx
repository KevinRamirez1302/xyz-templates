import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero genérico: reemplaza la imagen y texto para tu propia marca */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
        <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block animate-fade-in-up bg-white/10 backdrop-blur-md inline-block px-4 py-1 rounded-full">
          Descubre el Mundo
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
          Crea recuerdos que duren toda la vida
        </h1>
        <p className="text-lg sm:text-xl text-slate-100 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
          Especialistas en viajes a medida, aventuras exóticas y escapadas de relax. Tu próximo gran viaje comienza aquí.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#destinations" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-secondary rounded-full hover:bg-secondary/90 transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Explorar Destinos
            <MapPin className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
