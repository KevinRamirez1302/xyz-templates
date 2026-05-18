import { PackageX, Home, Search } from 'lucide-react';

interface NotFoundProps {
  onGoHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-screen bg-[#0f2042] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ff4c00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full bg-slate-900/80 border border-slate-700/80 rounded-3xl p-8 sm:p-16 shadow-2xl backdrop-blur-xl text-center space-y-8 animate-fadeIn relative z-10">
        
        {/* Animated Icon */}
        <div className="w-28 h-28 bg-[#ff4c00]/10 border-4 border-[#ff4c00]/20 rounded-full flex items-center justify-center mx-auto text-[#ff4c00] shadow-lg animate-pulse">
          <PackageX className="w-16 h-16" />
        </div>

        {/* 404 Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold tracking-widest uppercase">
            Error 404
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            ¡Paquete Extraviado!
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-lg mx-auto font-normal leading-relaxed">
            La página que buscas no se encuentra en nuestra ruta logística. Es posible que el enlace esté roto o la dirección haya cambiado.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGoHome}
            className="w-full sm:w-auto px-8 py-4 bg-[#ff4c00] hover:bg-[#e04300] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#ff4c00]/30 flex items-center justify-center gap-3 transform hover:-translate-y-1 transition-all"
          >
            <Home className="w-5 h-5" />
            Volver al Inicio
          </button>

          <button
            onClick={onGoHome}
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-lg rounded-2xl border border-slate-700 flex items-center justify-center gap-3 transition-all"
          >
            <Search className="w-5 h-5 text-[#ff4c00]" />
            Rastrear un Envío
          </button>
        </div>

        {/* Footer info inside card */}
        <div className="pt-8 border-t border-slate-800 text-slate-500 text-xs font-semibold flex items-center justify-center gap-2">
          <span>Transporte Express Logística Internacional</span>
          <span>•</span>
          <span>Soporte 24/7</span>
        </div>

      </div>
    </div>
  );
};
