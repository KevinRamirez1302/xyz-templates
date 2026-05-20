// src/pages/AboutUs.tsx
import { PrimerAvatar, SegundoAvatar, TercerAvatar } from '../components/config/ImageConfig';
import '../index.css';

// Interfaz para tipar estrictamente los datos del equipo
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// Datos del equipo
const teamData: TeamMember[] = [
  {
    name: 'Jaime Ensayo',
    role: 'CEO & Fundador',
    image: SegundoAvatar,
  },
  {
    name: 'Luisa Prueba',
    role: 'Directora de Ventas',
    image: PrimerAvatar,
  },
  {
    name: 'Testsia Corado',
    role: 'Directora de Recursos Humanos',
    image: TercerAvatar,
  }
];

export const SobreNosotros = () => {
  return (
    <div className="min-h-screen bg-[#FFEDD4]">

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Quienes Somos
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Somos una empresa dedicada al alquiler y venta de propiedades de todo tipo
        </p>
      </section>

      {/* Misión */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-200">
        <h2 className="text-3xl font-semibold text-slate-900 mb-4">
          Nuestra Misión
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Nuestra misión es trascender en  gestión de inmobiliaria para convertirnos en
          facilitadores de moradas con alma. Buscamos armonizar la solidez del patrimonio con la
          lírica del bienestar, conectando a las personas con espacios donde la vida no solo transcurra,
          sino que florezca. En cada venta y alquiler, nos comprometemos a custodiar el equilibrio entre
          el valor del mercado y la dignidad del habitar, transformando transacciones en legados y estructuras
          en hogares
        </p>
      </section>

      {/* Valores */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-200">
        <h2 className="text-3xl font-semibold text-slate-900 mb-8">
          Nuestros Valores
        </h2>
        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-medium text-slate-900 mb-2">
              Transparencia
            </h3>
            <p className="text-slate-600">
              No nos limitamos a "vender", revelamos la naturaleza tecnica y emocional de cada espacio
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-slate-900 mb-2">
              Calidad
            </h3>
            <p className="text-slate-600">
              Entendemos que el dinero es tiempo de vida transformado en ladrillos. Por ello,
              nuestra gestión técnica es rigurosa y quirúrgica..
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-slate-900 mb-2">
              Impacto
            </h3>
            <p className="text-slate-600">
              Escuchamos los requerimientos de los clientes ,
              sus miedos, sueños y necesidades para encontrar el
              espacio que rime con su proyecto de vida.
            </p>
          </div>

        </div>
      </section>

      {/* Equipo */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-200">
        <h2 className="text-3xl font-semibold text-slate-900 mb-8 text-center md:text-left">
          Nuestro Equipo
        </h2>
        <div className="grid md:grid-cols-3 gap-8">

          {teamData.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-200 overflow-hidden shadow-sm border-2 border-transparent transition-all duration-300 group-hover:border-slate-400 group-hover:shadow-md">
                <img
                  src={member.image}
                  alt={`Fotografía de ${member.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-medium text-slate-900">{member.name}</h3>
              <p className="text-slate-600 text-sm">{member.role}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Estamos siempre abiertos a nuevos proyectos y colaboraciones.
          </p>
          <a
            href="/Contacto"
            className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </section>

    </div>
  );
};