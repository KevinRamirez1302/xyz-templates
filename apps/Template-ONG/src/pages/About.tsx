import { useState } from 'react';
import { Target, Eye, ShieldCheck, Calendar, Linkedin, Mail } from 'lucide-react';
import SEO from '../components/SEO';

interface Milestone {
  year: string;
  title: string;
  desc: string;
  badge: string;
}

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones: Milestone[] = [
    {
      year: '2024',
      title: 'Fundación y Primer Proyecto',
      desc: 'EcoVida se constituye legalmente. Iniciamos la reforestación de la Cuenca del Río Seco con 100 voluntarios pioneros, logrando plantar 10,000 robles nativos.',
      badge: 'El Origen',
    },
    {
      year: '2025',
      title: 'Expansión Marina y Alianzas',
      desc: 'Lanzamos el programa "Océanos Limpios" e instalamos barreras ecológicas en tres desembocaduras de ríos principales, recolectando más de 20 toneladas de microplásticos.',
      badge: 'Crecimiento',
    },
    {
      year: '2026',
      title: 'Reconocimiento y Huertos Urbanos',
      desc: 'Iniciamos nuestro programa educativo integral financiado por la UE, implementando 50 huertos ecológicos escolares y capacitando a más de 12,000 niños.',
      badge: 'Consolidación',
    },
  ];

  const team = [
    {
      name: 'Dra. Sofía Ramos',
      role: 'Directora de Conservación',
      bio: 'Doctora en Ecología Forestal y Silvicultura. Lidera el diseño técnico de nuestras plantaciones y proyectos de regeneración biológica.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Carlos Mendoza',
      role: 'Coordinador de Voluntariado',
      bio: 'Especialista en desarrollo comunitario y gestión social. Diseña las brigadas semanales y asegura una experiencia óptima para cada participante.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Elena Torres',
      role: 'Educación y Alianzas',
      bio: 'Pedagoga y activista ambiental. Encargada de los talleres en colegios, convenios corporativos ecológicos y publicaciones científicas.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <>
      <SEO 
        title="Sobre Nosotros" 
        description="Conoce la misión, visión, valores e historia de EcoVida. Descubre a las personas y profesionales de la biodiversidad que hacen posible nuestros proyectos ecológicos." 
      />

      {/* Hero Header */}
      <section id="about-hero" className="relative pt-32 pb-16 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            id="about-hero-img"
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80"
            alt="Personas sosteniendo un pequeño brote de planta en la tierra húmeda"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 id="about-heading" className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Nuestra Misión con el <span className="text-gradient">Planeta</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Un grupo de científicos, educadores y ciudadanos unidos por el firme propósito de revertir la pérdida de biodiversidad y crear comunidades más sostenibles.
          </p>
        </div>
      </section>

      {/* Corporate Identity (Mission, Vision, Values) */}
      <section id="identity-section" className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Mission */}
            <div className="glass-card p-8 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800 transition-all hover:scale-[1.02]">
              <div className="inline-flex p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">Misión</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Restaurar hábitats terrestres y marinos degradados mediante acciones directas con base científica, involucrando a la sociedad civil y sensibilizando a las generaciones futuras.
              </p>
            </div>

            {/* Card 2: Vision */}
            <div className="glass-card p-8 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800 transition-all hover:scale-[1.02]">
              <div className="inline-flex p-3 bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 rounded-2xl">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">Visión</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Visualizamos un mundo donde las comunidades urbanas y rurales coexistan en armonía con sus recursos naturales, logrando una huella ecológica positiva y sostenible.
              </p>
            </div>

            {/* Card 3: Values */}
            <div className="glass-card p-8 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800 transition-all hover:scale-[1.02]">
              <div className="inline-flex p-3 bg-brand-100 dark:bg-brand-950 text-brand-500 dark:text-brand-400 rounded-2xl">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">Valores</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Transparencia total en el uso de recursos, rigor científico en la plantación de especies nativas, empoderamiento comunitario y compromiso con la equidad climática.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="history-section" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="history-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Nuestra Trayectoria
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm">
              Cada año representa un hito en nuestro camino para curar el planeta. Haz clic en un año para ver los avances de esa etapa.
            </p>
          </div>

          {/* Interactive Timeline Controls */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 rounded-full hidden md:block"></div>
            
            <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
              {milestones.map((milestone, idx) => (
                <button
                  key={milestone.year}
                  id={`milestone-btn-${milestone.year}`}
                  type="button"
                  onClick={() => setActiveMilestone(idx)}
                  className="z-10 focus:outline-none group flex flex-col items-center"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all shadow-md ${
                      activeMilestone === idx
                        ? 'bg-brand-500 text-white scale-110 ring-4 ring-brand-500/20'
                        : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-brand-100 dark:group-hover:bg-slate-700'
                    }`}
                  >
                    {milestone.year}
                  </div>
                  <span
                    className={`mt-2.5 text-xs font-semibold uppercase tracking-wider hidden md:block ${
                      activeMilestone === idx ? 'text-brand-500' : 'text-slate-400'
                    }`}
                  >
                    {milestone.badge}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Milestone Details Card */}
          <div
            id="milestone-details-card"
            className="max-w-3xl mx-auto glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6 animate-fade-in"
          >
            <div className="p-4 bg-brand-500/10 text-brand-500 rounded-2xl shrink-0">
              <Calendar className="h-10 w-10" />
            </div>
            <div className="space-y-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 dark:bg-brand-950 text-brand-800 dark:text-brand-400">
                Hito {milestones[activeMilestone].year}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                {milestones[activeMilestone].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {milestones[activeMilestone].desc}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section id="team-section" className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="team-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display sm:text-4xl">
              El Equipo de Conservación
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Contamos con expertos apasionados en ciencias ambientales y voluntariado comunitario para garantizar la eficacia de cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <article
                key={member.name}
                id={`team-member-${member.name.toLowerCase().replace(' ', '-')}`}
                className="flex flex-col bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={`Retrato de ${member.name}, ${member.role}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                      {member.name}
                    </h3>
                    <p className="text-brand-500 font-semibold text-xs uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex space-x-3 text-slate-400">
                    <a
                      href="#"
                      className="hover:text-brand-500 transition-colors p-1"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="hover:text-brand-500 transition-colors p-1"
                      aria-label={`Contacto de email con ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
