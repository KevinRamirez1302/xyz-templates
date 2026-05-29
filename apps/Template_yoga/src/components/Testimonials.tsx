import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal'

interface Testimonial {
  name: string;
  plan: string;
  text: string;
  rating: number;
  timeActive: string;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      name: 'Laura Ortiz',
      plan: 'Bono Mensual',
      text: 'Prana ha cambiado por completo mi relación con el estrés. Llevo 6 meses practicando aquí y la calidad de las clases, sumada a la calidez del espacio, es insuperable. Las clases de Vinyasa son mi momento favorito de la semana.',
      rating: 5,
      timeActive: 'Hace 6 meses',
    },
    {
      name: 'David Rivas',
      plan: 'Clase Única',
      text: 'Las instalaciones son preciosas y cuentan con todo el material necesario. Fui a una clase de Hatha Restore con Carlos y salí sintiéndome flotar. La atención al alumno es de primer nivel y la paz que se respira es increíble.',
      rating: 5,
      timeActive: 'Hace 1 mes',
    },
    {
      name: 'Elena Gómez',
      plan: 'Pase Ilimitado',
      text: 'La flexibilidad horaria es excelente y el acceso a la plataforma online me permite no perder mi práctica diaria cuando viajo por trabajo. Un espacio súper inclusivo y profesional para avanzar de forma segura.',
      rating: 5,
      timeActive: 'Hace 1 año',
    },
  ]

  return (
    <section 
      className="py-20 lg:py-24 bg-sand-100/50 dark:bg-zinc-900/40 border-t border-brand-100/10 dark:border-zinc-800/40 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <h2 className="text-base font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
              Comunidad
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-sand-50 font-heading">
              La experiencia en Prana Studio
            </p>
            <div className="h-1 w-12 bg-terracotta-500 rounded-full mx-auto my-2"></div>
          </div>
        </Reveal>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((rev, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up" className="h-full">
              <div 
                className="flex flex-col justify-between p-8 bg-white dark:bg-zinc-950 border border-brand-100/10 dark:border-zinc-800/30 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 relative text-left h-full"
              >
                {/* Quote Icon Background */}
                <div className="absolute top-6 right-6 text-brand-100 dark:text-zinc-900/80">
                  <Quote className="h-8 w-8 rotate-180" />
                </div>

                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                {/* User Meta */}
                <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-850 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-sand-100">{rev.name}</h4>
                    <span className="text-[10px] font-semibold text-terracotta-500 uppercase tracking-wide">
                      {rev.plan}
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-light">
                    {rev.timeActive}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
