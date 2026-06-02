import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Heart, CheckCircle2, Trees, Droplets, BookOpen, ShieldAlert } from 'lucide-react';
import SEO from '../components/SEO';

interface Project {
  id: string;
  title: string;
  category: 'Reforestación' | 'Océanos' | 'Educación' | 'Biodiversidad';
  desc: string;
  details: string;
  image: string;
  goal: number;
  raised: number;
  status: 'Activo' | 'Completado';
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Reforestación' | 'Océanos' | 'Educación' | 'Biodiversidad'>('Todos');

  const projects: Project[] = [
    {
      id: 'reforestation-amazon',
      title: 'Reforestación del Bosque Autóctono',
      category: 'Reforestación',
      desc: 'Plantación masiva de especies nativas para recuperar la fauna local y combatir la desertificación.',
      details: 'Estamos sembrando especies de robles y encinas en zonas degradadas por incendios forestales históricos. Este proyecto abarca más de 50 hectáreas de terreno montañoso.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
      goal: 25000,
      raised: 19500,
      status: 'Activo',
    },
    {
      id: 'ocean-cleanup',
      title: 'Limpieza y Conservación Marina',
      category: 'Océanos',
      desc: 'Retirada de plásticos de playas y fondos marinos costeros, protegiendo las reservas de coral.',
      details: 'Colaboramos con pescadores locales para limpiar residuos del fondo marino. Además, organizamos brigadas ciudadanas para retirar microplásticos de la línea costera los fines de semana.',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=600&q=80',
      goal: 40000,
      raised: 20800,
      status: 'Activo',
    },
    {
      id: 'green-education',
      title: 'Aulas Ecológicas y Educación',
      category: 'Educación',
      desc: 'Capacitación a escuelas sobre reciclaje, huertos urbanos y preservación del entorno.',
      details: 'Implementamos kits de compostaje, semillas ecológicas y talleres prácticos dirigidos a alumnos de primaria para concienciar sobre la gestión sustentable de residuos orgánicos.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
      goal: 15000,
      raised: 13500,
      status: 'Activo',
    },
    {
      id: 'lynx-protection',
      title: 'Protección del Lince Ibérico',
      category: 'Biodiversidad',
      desc: 'Adecuación de pasos de fauna y monitoreo de poblaciones silvestres en peligro de extinción.',
      details: 'Buscamos reducir los atropellamientos en carreteras secundarias mediante vallados adaptados y la reintroducción controlada de presas naturales del lince.',
      image: 'https://images.unsplash.com/photo-1574068468668-a05a11f871da?auto=format&fit=crop&w=600&q=80',
      goal: 30000,
      raised: 8200,
      status: 'Activo',
    },
    {
      id: 'metropolitan-green',
      title: 'Corredor Verde Metropolitano',
      category: 'Reforestación',
      desc: 'Creación de pulmones urbanos en terrenos públicos municipales en desuso para mitigar el calor.',
      details: 'Un proyecto piloto exitoso en el que plantamos arbustos autóctonos y creamos jardines para polinizadores para reducir el efecto "isla de calor" urbano.',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
      goal: 35000,
      raised: 35000,
      status: 'Completado',
    },
  ];

  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Reforestación': return <Trees className="h-4 w-4" />;
      case 'Océanos': return <Droplets className="h-4 w-4" />;
      case 'Educación': return <BookOpen className="h-4 w-4" />;
      default: return <ShieldAlert className="h-4 w-4" />;
    }
  };

  return (
    <>
      <SEO 
        title="Proyectos Activos" 
        description="Conoce nuestras iniciativas ambientales activas. Colabora en campañas de reforestación forestal, limpieza de playas de plástico y biodiversidad silvestre." 
      />

      {/* Header Banner */}
      <section id="projects-hero" className="relative pt-32 pb-16 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            id="projects-hero-img"
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80"
            alt="Rayos de sol cruzando un denso y frondoso bosque verde"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 id="projects-heading" className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Nuestros <span className="text-gradient">Proyectos Activos</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Campañas ambientales en desarrollo y finalizadas. Cada contribución acelera la meta y expande el impacto ecológico.
          </p>
        </div>
      </section>

      {/* Projects Grid with Interactive Filtering */}
      <section id="projects-list-section" className="py-16 bg-slate-900/50 dark:bg-slate-900/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filtering buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
            <span className="text-slate-400 dark:text-slate-400 text-sm font-semibold flex items-center gap-1.5 mr-2">
              <Filter className="h-4 w-4" /> Filtrar por:
            </span>
            {(['Todos', 'Reforestación', 'Océanos', 'Educación', 'Biodiversidad'] as const).map((filter) => (
              <button
                key={filter}
                id={`filter-btn-${filter.toLowerCase()}`}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all ${
                  activeFilter === filter
                    ? 'bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/10'
                    : 'bg-slate-800 dark:bg-slate-800 text-slate-300 dark:text-slate-300 border-slate-700 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid display */}
          <div id="projects-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const progressPercentage = Math.min(
                100,
                Math.round((project.raised / project.goal) * 100)
              );

              return (
                <article
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className="glass-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row border border-slate-700 dark:border-slate-800"
                >
                  {/* Left Column: Image */}
                  <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 bg-slate-900/95 dark:bg-slate-950/95 text-slate-100 dark:text-white text-xs font-bold px-3 py-1.5 rounded-full shadow backdrop-blur flex items-center gap-1.5 border border-slate-800/50 dark:border-slate-800/50">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                  </div>

                  {/* Right Column: Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            project.status === 'Completado'
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400'
                              : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400'
                          }`}
                        >
                          {project.status === 'Completado' && <CheckCircle2 className="h-3 w-3" />}
                          {project.status}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-100 dark:text-white font-display">
                        {project.title}
                      </h2>
                      <p className="text-slate-400 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {project.details}
                      </p>
                    </div>

                    {/* Funding progress */}
                    <div className="space-y-3 pt-4 border-t border-slate-800 dark:border-slate-800">
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                          <span>Financiado: ${project.raised.toLocaleString()}</span>
                          <span>{progressPercentage}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${
                              project.status === 'Completado' ? 'bg-emerald-500' : 'bg-brand-500'
                            }`}
                            style={{ width: `${progressPercentage}%` }}
                            aria-label={`Progreso del ${progressPercentage}%`}
                          ></div>
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                          <span>Meta: ${project.goal.toLocaleString()}</span>
                        </div>
                      </div>

                      {project.status === 'Completado' ? (
                        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 py-2.5 px-4 rounded-xl text-center text-xs font-semibold flex items-center justify-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>¡Financiación Completada!</span>
                        </div>
                      ) : (
                        <Link
                          id={`btn-donate-project-${project.id}`}
                          to="/donate"
                          className="w-full justify-center inline-flex items-center space-x-1.5 bg-brand-500 hover:bg-brand-600 text-white font-bold py-2.5 px-4 rounded-xl shadow transition-colors text-xs"
                        >
                          <Heart className="h-3.5 w-3.5 fill-white" />
                          <span>Apoyar este Proyecto</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div id="no-projects-view" className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <ShieldAlert className="mx-auto h-12 w-12 text-slate-400" />
              <p className="mt-4 text-slate-600 dark:text-slate-400 font-semibold">
                No hay proyectos disponibles en esta categoría actualmente.
              </p>
              <button
                type="button"
                onClick={() => setActiveFilter('Todos')}
                className="mt-2 text-brand-500 hover:text-brand-600 font-bold text-sm underline"
              >
                Mostrar todos los proyectos
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
