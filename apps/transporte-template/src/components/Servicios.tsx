import React from 'react';
import { Plane, Anchor, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

export const Servicios: React.FC = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8 text-[#ff4c00]" />,
      title: 'Casillero Internacional Aéreo',
      description: 'Tu dirección física gratuita en Miami y Madrid para recibir todas tus compras online de Amazon, eBay, Shein y más, con vuelos semanales continuos.',
      badge: 'Más Popular',
    },
    {
      icon: <Anchor className="w-8 h-8 text-blue-500" />,
      title: 'Envíos Marítimos Consolidados',
      description: 'Ideal para carga pesada, repuestos automotrices o compras de gran volumen. Salidas regulares con las tarifas por pie cúbico más competitivas.',
      badge: 'Gran Volumen',
    },
    {
      icon: <Truck className="w-8 h-8 text-emerald-500" />,
      title: 'Entregas Puerta a Puerta',
      description: 'Olvídate de trámites aduanales complicados. Nos encargamos de todo el proceso de nacionalización y llevamos tus paquetes hasta la puerta de tu casa o negocio.',
      badge: 'Todo Incluido',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
      title: 'Carga Comercial & Aduanas',
      description: 'Soluciones integrales B2B para importadores y empresas. Asesoría arancelaria, manejo de mercancía peligrosa (HAZMAT) y almacenamiento seguro.',
      badge: 'Empresarial',
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f2042]/10 border border-[#0f2042]/20 text-[#0f2042] text-sm font-bold tracking-wide uppercase">
            Nuestra Propuesta de Valor
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2042] tracking-tight">
            Servicios Logísticos Diseñados a tu Medida
          </h2>
          <p className="text-slate-600 text-lg">
            Combinamos velocidad, tecnología y la red de distribución más robusta para conectar tus compras con tu destino final.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                    {srv.icon}
                  </div>
                  <span className="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-full text-xs font-bold shadow-sm">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0f2042] group-hover:text-[#ff4c00] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  {srv.description}
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => {
                    const el = document.getElementById('cotizador');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#0f2042] group-hover:text-[#ff4c00] transition-colors"
                >
                  Cotizar este servicio
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
