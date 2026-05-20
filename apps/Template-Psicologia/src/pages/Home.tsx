import { ArrowRight, Heart, Brain, Shield, User, Users, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-12 pt-24 lg:pt-32">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=2500" 
            alt="Fondo de naturaleza y paz" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-transparent to-gray-900/60" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <div className="animate-fade-up inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium text-base md:text-lg mb-10 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              Sesiones presenciales en Madrid y Online
            </div>
            
            <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-white tracking-tight leading-[1.05] mb-8 drop-shadow-xl">
              Encuentra el camino hacia tu <span className="text-purple-300 drop-shadow-md">bienestar</span>
            </h1>
            
            <p className="animate-fade-up delay-200 text-xl md:text-3xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow font-light">
              Un espacio seguro donde detenerte, respirar y reconstruir tu equilibrio emocional. Te acompaño paso a paso en tu proceso.
            </p>
            
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row justify-center gap-6 w-full">
              <Link
                to="/book"
                className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full text-xl font-medium transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transform hover:-translate-y-1 hover:scale-105"
              >
                Reservar primera cita <ArrowRight className="h-6 w-6" />
              </Link>
              <Link
                to="/services"
                className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-full text-xl font-medium transition-all border border-white/20 hover:border-white/40 hover:scale-105 transform"
              >
                Ver especialidades
              </Link>
            </div>
            
            <div className="animate-fade-up delay-400 mt-12 flex flex-wrap items-center justify-center gap-6 text-base md:text-lg font-medium text-white/90">
              <div className="flex items-center gap-3 backdrop-blur-sm bg-black/20 px-6 py-3 rounded-2xl border border-white/10 hover:bg-black/30 transition-colors cursor-default">
                <Shield className="h-6 w-6 text-green-400" />
                Espacio 100% Confidencial
              </div>
              <div className="flex items-center gap-3 backdrop-blur-sm bg-black/20 px-6 py-3 rounded-2xl border border-white/10 hover:bg-black/30 transition-colors cursor-default">
                <Heart className="h-6 w-6 text-red-400" />
                Trato Cercano y Empático
              </div>
            </div>
          </div>
        </div>
        

      </section>

      {/* Resumen de Servicios */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Áreas de Especialidad</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">¿En qué puedo ayudarte?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Abordamos juntos los retos emocionales con terapias adaptadas a tu momento vital.</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: User, title: 'Terapia Individual', desc: 'Ansiedad, depresión, autoestima y desarrollo personal.' },
              { icon: Users, title: 'Terapia de Pareja', desc: 'Mejora de la comunicación y resolución de conflictos.' },
              { icon: BrainCircuit, title: 'Gestión del Estrés', desc: 'Herramientas prácticas para el día a día.' }
            ].map((srv, idx) => (
              <ScrollReveal key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-6 shrink-0">
                  <srv.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{srv.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow">{srv.desc}</p>
                <Link to="/services" className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                  Saber más <ArrowRight className="h-4 w-4" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-medium transition-colors">
              Ver todos los servicios <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us con Imágenes */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <ScrollReveal className="relative z-10 hidden md:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Consulta psicológica" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-gray-50 z-20">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-green-100 rounded-2xl text-green-600">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Entorno Seguro</h4>
                    <p className="text-sm text-gray-500 mt-1">Garantía total de privacidad y confidencialidad.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Tu Bienestar es lo Primero</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">¿Por qué elegir MenteClara?</h2>
              <p className="text-lg text-gray-600 mb-10">
                Ofrezco un espacio seguro y confidencial donde tú eres el protagonista de tu cambio. Mi enfoque se basa en la empatía, el respeto y la evidencia científica.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: Heart,
                    title: 'Trato Empático y Cercano',
                    desc: 'Escucha activa sin juicios para entender tu situación desde la calidez humana y el respeto.'
                  },
                  {
                    icon: Brain,
                    title: 'Terapia Basada en Evidencia',
                    desc: 'Uso de metodologías clínicas probadas que aseguran resultados eficaces a largo plazo.'
                  },
                  {
                    icon: Shield,
                    title: 'Flexibilidad de Sesiones',
                    desc: 'Atención presencial en un entorno acogedor o terapia online desde la comodidad de tu hogar.'
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">El primer paso es el más importante</h2>
          <p className="text-lg text-gray-600 mb-10">No tienes que enfrentarlo a solas. Solicita tu primera sesión de valoración sin compromiso.</p>
          <Link
            to="/book"
            className="inline-flex justify-center items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-xl hover:shadow-2xl"
          >
            Agenda tu sesión hoy
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;
