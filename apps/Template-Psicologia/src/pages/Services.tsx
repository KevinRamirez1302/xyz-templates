import { Link } from 'react-router-dom';
import { ArrowRight, Users, User, BrainCircuit, HeartPulse } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: 'Terapia Individual',
      desc: 'Un espacio personal para abordar ansiedad, depresión, autoestima, duelo o estrés. Trabajaremos juntos para entender tus patrones y desarrollar estrategias de afrontamiento efectivas.',
      price: '60€ / sesión',
      image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&q=80&w=600'
    },
    {
      icon: Users,
      title: 'Terapia de Pareja',
      desc: 'Mejora la comunicación, resuelve conflictos y fortalece el vínculo afectivo. Un entorno neutral para entenderos mejor y tomar decisiones constructivas.',
      price: '80€ / sesión',
      image: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=600'
    },
    {
      icon: BrainCircuit,
      title: 'Gestión del Estrés y Ansiedad',
      desc: 'Técnicas específicas y probadas para reducir los niveles de estrés, controlar los ataques de pánico y aprender a vivir con mayor tranquilidad.',
      price: '60€ / sesión',
      image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=600'
    },
    {
      icon: HeartPulse,
      title: 'Desarrollo Personal',
      desc: 'Si no tienes un problema clínico pero buscas conocerte mejor, mejorar tus habilidades sociales o tomar decisiones importantes en tu vida.',
      price: '60€ / sesión',
      image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Especialidades</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">¿Cómo puedo ayudarte?</h1>
          <p className="text-lg text-gray-600">
            Ofrezco atención psicológica especializada, adaptando las técnicas más eficaces a tu situación particular y a tus objetivos personales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group overflow-hidden flex flex-col">
              <div className="h-64 w-full relative overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-xl">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <span className="text-lg font-semibold text-gray-900">{service.price}</span>
                  <Link to="/book" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    Reservar cita <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Dudas sobre qué terapia necesitas?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Es completamente normal. En nuestra primera sesión de valoración exploraremos tu caso y decidiremos juntos el mejor camino a seguir.
          </p>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-lg"
          >
            Contactar ahora
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Services;
