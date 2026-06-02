import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Trees, Droplet, Users, Calendar } from 'lucide-react';
import SEO from '../components/SEO';

interface ImpactStat {
  trees: string;
  water: string;
  volunteers: string;
  desc: string;
}

export default function Home() {
  const [selectedYear, setSelectedYear] = useState<'2024' | '2025' | '2026'>('2026');

  const impactData: Record<'2024' | '2025' | '2026', ImpactStat> = {
    2024: {
      trees: '45,200',
      water: '15,000 m³',
      volunteers: '1,200',
      desc: 'Nuestros primeros pasos restaurando el bosque local y limpiando ríos urbanos.',
    },
    2025: {
      trees: '98,600',
      water: '42,000 m³',
      volunteers: '3,400',
      desc: 'Expandimos operaciones a cuencas marinas e iniciamos brigadas de reforestación masiva.',
    },
    2026: {
      trees: '152,000+',
      water: '85,000 m³',
      volunteers: '5,800+',
      desc: 'Impacto proyectado para este año gracias a alianzas comunitarias y donaciones activas.',
    },
  };

  const featuredCampaigns = [
    {
      id: 'reforestation-amazon',
      title: 'Reforestación del Bosque Autóctono',
      desc: 'Plantación masiva de especies nativas para recuperar la fauna local y combatir la desertificación.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
      tag: 'Reforestación',
      progress: 78,
      goal: '$25,000',
      raised: '$19,500',
    },
    {
      id: 'ocean-cleanup',
      title: 'Limpieza y Conservación Marina',
      desc: 'Retirada de plásticos de playas y fondos marinos costeros, protegiendo las reservas de coral.',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=600&q=80',
      tag: 'Océanos',
      progress: 52,
      goal: '$40,000',
      raised: '$20,800',
    },
    {
      id: 'green-education',
      title: 'Aulas Ecológicas y Educación',
      desc: 'Capacitación a escuelas sobre reciclaje, huertos urbanos y preservación del entorno.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
      tag: 'Educación',
      progress: 90,
      goal: '$15,000',
      raised: '$13,500',
    },
  ];

  return (
    <>
      <SEO 
        title="Inicio" 
        description="Bienvenidos a EcoVida, una ONG comprometida con la reforestación, limpieza de océanos y educación ambiental. Únete a nuestro voluntariado y proyectos hoy mismo." 
      />

      {/* Hero Section */}
      <section 
        id="hero-section" 
        className="relative min-h-[90svh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            id="hero-bg-img"
            src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80"
            alt="Bosque verde denso iluminado por rayos de sol"
            className="w-full h-full object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-100 space-y-8">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-xs font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30 tracking-wider uppercase">
            🌱 Juntos por el cambio global
          </span>
          <h1 id="hero-heading" className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-slate-100">
            Protegiendo la naturaleza, asegurando nuestro <span className="text-gradient">futuro</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Trabajamos activamente en la reforestación de zonas áridas, la descontaminación de aguas y la educación ecológica. Cada pequeña acción siembra un mañana mejor.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              id="hero-donate-cta"
              to="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-brand-500/20 transform hover:-translate-y-0.5 transition-all text-base focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <Heart className="h-5 w-5 fill-white" />
              <span>Donar Ahora</span>
            </Link>
            <Link
              id="hero-projects-cta"
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold px-8 py-4 rounded-full border border-slate-600 hover:border-slate-500 shadow-sm transform hover:-translate-y-0.5 transition-all text-base focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              <span>Ver Proyectos</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats Panel */}
      <section id="impact-section" className="py-20 bg-slate-800/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="impact-heading" className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              Nuestra huella de impacto ecológico
            </h2>
            <p className="mt-4 text-slate-400">
              Registramos de forma transparente las metas alcanzadas gracias a nuestra comunidad. Selecciona el año para ver el histórico de impacto.
            </p>

            {/* Year Selector Tabs */}
            <div className="inline-flex p-1.5 bg-slate-700 rounded-full mt-8" role="tablist" aria-label="Seleccionar año de impacto">
              {(['2024', '2025', '2026'] as const).map((year) => (
                <button
                  key={year}
                  id={`year-tab-${year}`}
                  type="button"
                  role="tab"
                  aria-selected={selectedYear === year}
                  aria-controls={`panel-impact-${year}`}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    selectedYear === year
                      ? 'bg-brand-500 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Display Panel */}
          <div
            id={`panel-impact-${selectedYear}`}
            role="tabpanel"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto animate-fade-in"
          >
            {/* Stat 1: Trees */}
            <div className="glass-card p-8 rounded-3xl flex flex-col items-center space-y-4 transform transition-all hover:scale-[1.02]">
              <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
                <Trees className="h-8 w-8" />
              </div>
              <span className="text-4xl font-extrabold text-slate-100 font-display">
                {impactData[selectedYear].trees}
              </span>
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Árboles Plantados
              </span>
            </div>

            {/* Stat 2: Water */}
            <div className="glass-card p-8 rounded-3xl flex flex-col items-center space-y-4 transform transition-all hover:scale-[1.02]">
              <div className="p-4 bg-sky-50 text-sky-600 rounded-2xl">
                <Droplet className="h-8 w-8" />
              </div>
              <span className="text-4xl font-extrabold text-slate-100 font-display">
                {impactData[selectedYear].water}
              </span>
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Agua Limpiada / Conservada
              </span>
            </div>

            {/* Stat 3: Volunteers */}
            <div className="glass-card p-8 rounded-3xl flex flex-col items-center space-y-4 transform transition-all hover:scale-[1.02]">
              <div className="p-4 bg-brand-50 text-brand-500 rounded-2xl">
                <Users className="h-8 w-8" />
              </div>
              <span className="text-4xl font-extrabold text-slate-100 font-display">
                {impactData[selectedYear].volunteers}
              </span>
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Voluntarios Involucrados
              </span>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-slate-400 max-w-lg mx-auto text-sm italic">
              * {impactData[selectedYear].desc}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section id="campaigns-section" className="py-20 bg-slate-900 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 id="campaigns-heading" className="text-3xl font-bold tracking-tight text-slate-100 dark:text-white sm:text-4xl">
                Campañas Urgentes
              </h2>
              <p className="mt-4 text-slate-400 dark:text-slate-400 max-w-xl">
                Apoya de manera directa nuestros proyectos prioritarios en desarrollo. Elige un proyecto y ayuda a completarlo hoy mismo.
              </p>
            </div>
            <Link
              id="view-all-projects-btn"
              to="/projects"
              className="mt-4 md:mt-0 inline-flex items-center space-x-1 text-brand-500 hover:text-brand-600 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 rounded p-1"
            >
              <span>Ver todos los proyectos</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCampaigns.map((project) => (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className="group flex flex-col bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/90 dark:bg-slate-950/90 text-slate-100 dark:text-white text-xs font-bold px-3 py-1.5 rounded-full shadow backdrop-blur">
                    {project.tag}
                  </span>
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-100 dark:text-white font-display">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 dark:text-slate-400 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-700 dark:border-slate-800 space-y-4">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-400 dark:text-slate-400 mb-1.5">
                        <span>Recaudado: {project.raised}</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-700 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-brand-500 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${project.progress}%` }}
                          aria-label={`Progreso del ${project.progress}%`}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                        <span>Meta: {project.goal}</span>
                      </div>
                    </div>

                    <Link
                      id={`project-donate-btn-${project.id}`}
                      to="/donate"
                      className="w-full justify-center inline-flex items-center space-x-2 bg-slate-700 dark:bg-slate-800 hover:bg-brand-500 dark:hover:bg-brand-500 text-slate-100 dark:text-slate-100 hover:text-white dark:hover:text-white font-bold py-2.5 px-4 rounded-xl border border-slate-600 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500 shadow-sm transition-colors text-sm"
                    >
                      <Heart className="h-4 w-4" />
                      <span>Apoyar Campaña</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Call to Action */}
      <section id="volunteer-cta-section" className="py-20 bg-brand-900 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-brand-600),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <h2 id="volunteer-cta-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl font-display">
            ¿Quieres ser parte activa de la solución?
          </h2>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto leading-relaxed">
            Tu tiempo y dedicación son el motor de nuestro cambio. Únete a nuestras brigadas ecológicas voluntarias de fin de semana en reforestación y conservación local.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              id="cta-join-volunteer-btn"
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-brand-100 text-brand-900 font-bold px-8 py-3.5 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Users className="h-5 w-5" />
              <span>Unirse como Voluntario</span>
            </Link>
            <Link
              id="cta-view-events-btn"
              to="/about"
              className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full border border-white/30 hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Calendar className="h-5 w-5" />
              <span>Conocer Nuestra Historia</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
