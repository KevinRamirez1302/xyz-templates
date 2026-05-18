import React from 'react';
import { ShieldCheck, Clock, Globe2, ArrowRight, Calculator } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-[#0f2042] text-white py-20 lg:py-32">
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,76,0,0.15),transparent_50%)]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md text-[#ff4c00] text-sm font-semibold tracking-wide uppercase shadow-inner">
              <Globe2 className="w-4 h-4 animate-spin-slow" />
              Tu Casillero Internacional Líder
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Envíos Rápidos y Seguros desde <span className="text-[#ff4c00]">USA y Europa</span> a tu Puerta
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Disfruta de la mejor experiencia logística internacional. Compra en tus tiendas favoritas del mundo y recibe tus paquetes con total seguridad, rastreo en vivo y las tarifas más competitivas del mercado.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('registro')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#ff4c00] hover:bg-[#e04300] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#ff4c00]/30 transform hover:-translate-y-1 transition-all"
              >
                Abre tu Casillero Gratis
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollTo('cotizador')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white font-bold text-lg rounded-2xl border border-slate-700 hover:border-slate-500 backdrop-blur-md shadow-xl transform hover:-translate-y-1 transition-all"
              >
                <Calculator className="w-5 h-5 text-[#ff4c00]" />
                Cotizar Envío
              </button>
            </div>

            {/* Value Proposition Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white text-base">100% Asegurado</h4>
                  <p className="text-xs text-slate-400">Garantía en cada paquete</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl text-[#ff4c00]">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white text-base">Tiempo Récord</h4>
                  <p className="text-xs text-slate-400">Vuelos continuos semanales</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white text-base">Sin Fronteras</h4>
                  <p className="text-xs text-slate-400">USA, España, China y más</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High Impact Visual / Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4c00]/20 to-blue-600/20 rounded-3xl filter blur-2xl transform scale-105" />

              {/* Main Card Graphic representing Logistics */}
              <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-3xl p-8 shadow-2xl backdrop-blur-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4c00] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff4c00]"></span>
                    </span>
                    <span className="text-sm font-bold text-slate-200 uppercase tracking-wider">Estado del Servicio</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-semibold">
                    Operativo
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/50 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                        US
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-sm">Miami, Florida</h5>
                        <p className="text-xs text-slate-400">Almacén Principal</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">Salidas Diarias</span>
                  </div>

                  <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/50 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                        ES
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-sm">Madrid, España</h5>
                        <p className="text-xs text-slate-400">Hub Europeo</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">Vuelos Semanales</span>
                  </div>

                  <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/50 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                        CN
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-sm">Guangzhou, China</h5>
                        <p className="text-xs text-slate-400">Hub Asiático</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">Conexión Directa</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-center">
                  <p className="text-xs text-slate-400">
                    Únete a más de <span className="text-[#ff4c00] font-bold">500,000 clientes</span> satisfechos en toda Latinoamérica.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
