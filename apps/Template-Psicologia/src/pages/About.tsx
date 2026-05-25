import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                alt="Psicóloga profesional" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm font-medium text-gray-600">Años de<br/>Experiencia</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Sobre Mí</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              Hola, soy Laura. Tu compañera en este viaje.
            </h1>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Soy Psicóloga Sanitaria colegiada, especializada en terapia cognitivo-conductual y terapias de tercera generación. Mi objetivo es proporcionarte herramientas prácticas para que puedas gestionar tus emociones y mejorar tu calidad de vida.
              </p>
              <p>
                Entiendo la terapia como un trabajo en equipo donde tú eres el experto en tu vida y yo aporto el conocimiento psicológico para ayudarte a navegar los momentos difíciles.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Mi enfoque y formación</h3>
              <ul className="space-y-4">
                {[
                  'Licenciada en Psicología por la Universidad Complutense',
                  'Máster en Psicología General Sanitaria',
                  'Especialista en Ansiedad, Depresión y Gestión Emocional',
                  'Colegiada M-00000 por el Colegio Oficial de la Psicología'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
