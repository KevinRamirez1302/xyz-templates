import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

interface PricePlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
}

export default function Pricing() {
  const plans: PricePlan[] = [
    {
      name: 'Clase Única',
      price: '15€',
      period: 'por clase',
      description: 'Ideal para probar una clase o practicar de forma esporádica en nuestro centro.',
      features: [
        'Acceso a 1 clase presencial',
        'Reserva online fácil',
        'Material incluido (esterilla y bloques)',
        'Válido por 30 días desde la compra',
      ],
      buttonText: 'Comprar Clase',
      isPopular: false,
    },
    {
      name: 'Bono Mensual',
      price: '49€',
      period: 'al mes',
      description: 'Nuestra opción recomendada para mantener una práctica regular de 2 clases por semana.',
      features: [
        'Hasta 8 clases al mes',
        'Acceso a todos los estilos de yoga',
        'Reservas prioritarias online',
        'Acceso a biblioteca de clases grabadas',
        'Cancelación flexible sin cargos',
      ],
      buttonText: 'Empezar Bono',
      isPopular: true,
    },
    {
      name: 'Pase Ilimitado',
      price: '79€',
      period: 'al mes',
      description: 'Diseñado para yoguis comprometidos que desean practicar diariamente y profundizar su camino.',
      features: [
        'Clases presenciales ilimitadas',
        'Todos los estilos e instructores',
        '20% de descuento en talleres de fin de semana',
        '1 sesión mensual individual de alineación',
        '1 pase de invitado gratis al mes',
      ],
      buttonText: 'Hacerse Ilimitado',
      isPopular: false,
    },
  ]

  return (
    <section 
      id="precios" 
      className="py-20 lg:py-24 bg-sand-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <h2 className="text-base font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
              Planes y Tarifas
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-sand-50 font-heading">
              Elige tu plan de bienestar
            </p>
            <div className="h-1 w-12 bg-terracotta-500 rounded-full mx-auto my-2"></div>
            <p className="text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
              Matrícula gratuita en todos nuestros planes. Sin permanencia. Cancela o cambia de plan en cualquier momento desde tu área de usuario.
            </p>
          </div>
        </Reveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up" className="h-full">
              <div 
                className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 h-full ${
                  plan.isPopular
                    ? 'bg-white dark:bg-zinc-900 border-2 border-brand-500 shadow-xl scale-[1.02] z-10'
                    : 'bg-white/60 dark:bg-zinc-900/40 border border-brand-100/10 dark:border-zinc-800/40 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-[10px] font-bold tracking-widest uppercase py-1 px-3.5 rounded-full shadow-sm z-20">
                    Recomendado
                  </span>
                )}

                <div>
                  {/* Name & Desc */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-sand-50 mb-2 font-heading">{plan.name}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mb-6 leading-relaxed min-h-[40px]">{plan.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-8">
                    <span className="text-4xl font-extrabold text-brand-950 dark:text-sand-50">{plan.price}</span>
                    <span className="text-sm font-semibold text-zinc-400 dark:text-zinc-500">/ {plan.period}</span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                        <div className="p-0.5 bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-400 rounded-md mt-0.5 shrink-0">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Link
                  to="/contacto"
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold text-center transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] focus-visible:ring-2 ${
                    plan.isPopular
                      ? 'bg-brand-500 hover:bg-brand-600 text-white shadow-md hover:shadow-brand-500/20 focus-visible:ring-brand-500'
                      : 'bg-sand-100 dark:bg-zinc-800 hover:bg-brand-50 dark:hover:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 border border-brand-100/10 dark:border-zinc-800 focus-visible:ring-zinc-400'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
