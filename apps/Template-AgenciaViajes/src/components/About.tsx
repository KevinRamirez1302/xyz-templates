import { useEffect, useState, useRef } from 'react';

function CountUp({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOut expo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        } else {
          // Reset when out of view so it animates again when scrolling up/down
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Playa tropical" 
                className="w-full h-64 object-cover rounded-2xl shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Montañas y lago" 
                className="w-full h-48 object-cover rounded-2xl shadow-md"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Ciudad de Dubai" 
                className="w-full h-48 object-cover rounded-2xl shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Turista explorando" 
                className="w-full h-64 object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Nuestra Filosofía
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-6 leading-tight">
              Diseñamos experiencias, no solo itinerarios
            </h2>
            {/* Texto del párrafo en color oscuro para mejor lectura */}
            <p className="text-slate-900 mb-10 font-light leading-relaxed text-lg">
              Creamos viajes a medida con expertos locales. Olvídate de los paquetes estándar y vive aventuras auténticas donde cada destino se sienta como tu hogar.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-24 border-t border-slate-300 pt-10 text-center sm:text-left">
              <div className="bg-white/60 backdrop-blur-sm sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none">
                <p className="text-5xl sm:text-6xl font-serif text-primary mb-2 sm:mb-3 font-medium">
                  <CountUp end={15000} suffix="+" duration={2500} />
                </p>
                <p className="text-xs sm:text-sm text-slate-700 uppercase tracking-widest font-semibold">Viajeros Felices</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none">
                <p className="text-5xl sm:text-6xl font-serif text-primary mb-2 sm:mb-3 font-medium">
                  <CountUp end={50} suffix="+" duration={2500} />
                </p>
                <p className="text-xs sm:text-sm text-slate-700 uppercase tracking-widest font-semibold">Destinos Exclusivos</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
