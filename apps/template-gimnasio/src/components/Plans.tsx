import { Check } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      name: 'Básico',
      price: '$29',
      period: '/mes',
      description: 'Perfecto para empezar tu viaje fitness',
      features: [
        'Acceso a equipos de entrenamiento',
        'Horario 6am - 11pm',
        'Estacionamiento gratuito',
        'App de seguimiento básica',
      ],
      cta: 'Comenzar',
    },
    {
      name: 'Premium',
      price: '$59',
      period: '/mes',
      description: 'Acceso completo a todas nuestras instalaciones',
      features: [
        'Acceso 24/7',
        'Todas las clases grupales sin límite',
        'Entrenamiento personalizado (2 sesiones/mes)',
        'Acceso a sauna y jacuzzi',
        'Nutricionista consulta',
        'App premium con seguimiento avanzado',
      ],
      cta: 'Seleccionar Plan',
      highlighted: true,
    },
    {
      name: 'Élite',
      price: '$99',
      period: '/mes',
      description: 'Experiencia premium completa',
      features: [
        'Acceso 24/7 prioritario',
        'Clases VIP exclusivas',
        'Entrenador personal dedicado',
        'Planes de nutrición personalizados',
        'Masaje y terapia semanal',
        'Vestiario privado',
      ],
      cta: 'Contactar Ahora',
    },
  ];

  return (
    <section id="plans" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Planes de Membresía</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Elige el plan perfecto para tu presupuesto y objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 transition-transform duration-300 hover:scale-105 ${
                plan.highlighted
                  ? 'bg-primary text-dark border-2 border-primary relative'
                  : 'bg-gray-800 border-2 border-gray-700'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-dark px-4 py-1 rounded-full text-sm font-bold">
                  Más Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p
                className={`mb-4 text-sm ${
                  plan.highlighted ? 'text-dark opacity-90' : 'text-gray-400'
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={plan.highlighted ? 'text-dark opacity-75' : 'text-gray-400'}
                >
                  {plan.period}
                </span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-colors duration-300 ${
                  plan.highlighted
                    ? 'bg-dark text-primary hover:bg-gray-900'
                    : 'bg-primary text-white hover:bg-orange-600'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={
                        plan.highlighted ? 'text-dark flex-shrink-0' : 'text-primary flex-shrink-0'
                      }
                    />
                    <span className={plan.highlighted ? 'text-dark' : 'text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
