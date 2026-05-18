import React, { useState } from 'react';
import { Search, Package, CheckCircle2, Clock, Truck, MapPin, AlertCircle, RefreshCw } from 'lucide-react';

interface TrackingEvent {
  status: string;
  location: string;
  timestamp: string;
  completed: boolean;
  current: boolean;
  description: string;
}

interface PackageData {
  trackingNumber: string;
  origin: string;
  destination: string;
  weight: string;
  service: string;
  estimatedDelivery: string;
  status: 'delivered' | 'in_transit' | 'customs' | 'processing';
  events: TrackingEvent[];
}

export const Tracking: React.FC = () => {
  const [trackingInput, setTrackingInput] = useState('');
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activePackage, setActivePackage] = useState<PackageData | null>(null);

  // Sample database of tracking numbers for simulation
  const samplePackages: Record<string, PackageData> = {
    'TRN-123456': {
      trackingNumber: 'TRN-123456',
      origin: 'Miami, USA (Almacén Central)',
      destination: 'Caracas, Venezuela (Sucursal Las Mercedes)',
      weight: '4.5 kg / 9.9 lbs',
      service: 'Envío Aéreo Express',
      estimatedDelivery: 'Mañana, 19 de Mayo',
      status: 'in_transit',
      events: [
        { status: 'Recibido en Almacén', location: 'Miami, FL', timestamp: '15 May 2026, 10:30 AM', completed: true, current: false, description: 'Paquete procesado, pesado y facturado.' },
        { status: 'En Tránsito Internacional', location: 'Vuelo MIA-CCS', timestamp: '16 May 2026, 08:15 AM', completed: true, current: false, description: 'Despachado en vuelo de carga internacional.' },
        { status: 'Proceso de Aduana', location: 'Maiquetía, Venezuela', timestamp: '17 May 2026, 02:45 PM', completed: true, current: false, description: 'Inspección aduanal completada y aranceles liberados.' },
        { status: 'En Tránsito a Sucursal', location: 'Caracas, Venezuela', timestamp: '18 May 2026, 09:20 AM', completed: false, current: true, description: 'En camino a la sucursal de destino para entrega final.' },
        { status: 'Disponible para Entrega', location: 'Sucursal Las Mercedes', timestamp: 'Pendiente', completed: false, current: false, description: 'Listo para ser retirado por el cliente.' },
      ]
    },
    'TRN-987654': {
      trackingNumber: 'TRN-987654',
      origin: 'Madrid, España',
      destination: 'Bogotá, Colombia',
      weight: '2.1 kg / 4.6 lbs',
      service: 'Envío Aéreo Estándar',
      estimatedDelivery: '22 de Mayo 2026',
      status: 'customs',
      events: [
        { status: 'Recibido en Almacén', location: 'Madrid, España', timestamp: '14 May 2026, 11:00 AM', completed: true, current: false, description: 'Paquete recibido en hub europeo.' },
        { status: 'En Tránsito Internacional', location: 'Vuelo MAD-BOG', timestamp: '16 May 2026, 09:30 PM', completed: true, current: false, description: 'Llegada a aeropuerto el Dorado.' },
        { status: 'Proceso de Aduana', location: 'Bogotá, Colombia', timestamp: '17 May 2026, 11:15 AM', completed: false, current: true, description: 'En verificación de aduana y pago de tributos.' },
        { status: 'Disponible para Entrega', location: 'Sucursal Chicó', timestamp: 'Pendiente', completed: false, current: false, description: 'Pendiente de liberación.' },
      ]
    },
    'TRN-555555': {
      trackingNumber: 'TRN-555555',
      origin: 'Guangzhou, China',
      destination: 'Santo Domingo, República Dominicana',
      weight: '12.0 kg / 26.4 lbs',
      service: 'Envío Marítimo Consolidado',
      estimatedDelivery: 'Entregado el 10 de Mayo',
      status: 'delivered',
      events: [
        { status: 'Recibido en Almacén', location: 'Guangzhou, China', timestamp: '01 Apr 2026, 04:00 PM', completed: true, current: false, description: 'Carga en contenedor marítimo.' },
        { status: 'Tránsito Marítimo', location: 'Puerto Caucedo', timestamp: '25 Apr 2026, 08:00 AM', completed: true, current: false, description: 'Desembarque completado.' },
        { status: 'Aduana Nacional', location: 'Santo Domingo', timestamp: '02 May 2026, 10:00 AM', completed: true, current: false, description: 'Aduana y gestión portuaria finalizada.' },
        { status: 'Entregado al Cliente', location: 'Sucursal Piantini', timestamp: '10 May 2026, 03:30 PM', completed: true, current: true, description: 'Retirado satisfactoriamente por el titular.' },
      ]
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingInput.trim()) {
      setError('Por favor ingresa un número de guía válido.');
      return;
    }

    setLoading(true);
    setError('');
    setSearched(false);

    // Simulate API delay
    setTimeout(() => {
      const cleanInput = trackingInput.trim().toUpperCase();
      
      // Look up in sample database or generate a simulated one if it matches TRN- pattern
      if (samplePackages[cleanInput]) {
        setActivePackage(samplePackages[cleanInput]);
      } else if (cleanInput.startsWith('TRN-')) {
        // Generate simulated dynamic package
        setActivePackage({
          trackingNumber: cleanInput,
          origin: 'Miami, USA (Almacén Central)',
          destination: 'Destino Internacional',
          weight: '3.2 kg / 7.0 lbs',
          service: 'Envío Aéreo Express',
          estimatedDelivery: 'En 3 días hábiles',
          status: 'in_transit',
          events: [
            { status: 'Recibido en Almacén', location: 'Miami, FL', timestamp: 'Ayer, 04:15 PM', completed: true, current: false, description: 'Paquete procesado e ingresado al sistema.' },
            { status: 'En Tránsito Internacional', location: 'Centro de Despacho', timestamp: 'Hoy, 08:30 AM', completed: false, current: true, description: 'Preparando embarque en próximo vuelo.' },
            { status: 'Proceso de Aduana', location: 'Aduana de Destino', timestamp: 'Pendiente', completed: false, current: false, description: 'Trámites de importación.' },
            { status: 'Disponible para Entrega', location: 'Sucursal Principal', timestamp: 'Pendiente', completed: false, current: false, description: 'Entrega final al cliente.' },
          ]
        });
      } else {
        setError('No se encontró el número de guía. Asegúrate de usar el formato TRN-XXXXXX (Ej. TRN-123456).');
        setActivePackage(null);
      }
      setLoading(false);
      setSearched(true);
    }, 1200);
  };

  const handleDemoClick = (num: string) => {
    setTrackingInput(num);
    // Auto trigger search
  };

  return (
    <section id="rastreo" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff4c00]/10 border border-[#ff4c00]/20 text-[#ff4c00] text-sm font-bold tracking-wide uppercase">
            <Search className="w-4 h-4" />
            Rastreo en Tiempo Real
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2042] tracking-tight">
            Sigue tu Paquete Paso a Paso
          </h2>
          <p className="text-slate-600 text-lg">
            Ingresa tu número de guía o tracking asignado por Transporte Express para conocer la ubicación exacta y el estatus logístico de tu envío.
          </p>
        </div>

        {/* Search Module Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-10 max-w-4xl mx-auto mb-12 transition-all">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400">
                  <Package className="w-6 h-6" />
                </div>
                <input
                  type="text"
                  value={trackingInput}
                  onChange={(e) => setTrackingInput(e.target.value)}
                  placeholder="Ingresa tu número de guía (Ej. TRN-123456, TRN-987654)"
                  className="w-full pl-14 pr-4 py-4 bg-slate-50 border-2 border-slate-200 focus:border-[#ff4c00] focus:bg-white rounded-2xl text-slate-800 text-lg font-medium placeholder:text-slate-400 focus:outline-none transition-all shadow-inner"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-10 py-4 bg-[#0f2042] hover:bg-[#1b365d] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#0f2042]/20 flex items-center justify-center gap-3 transition-all disabled:opacity-50 shrink-0"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-6 h-6 animate-spin text-[#ff4c00]" />
                    Buscando...
                  </>
                ) : (
                  <>
                    <Search className="w-6 h-6 text-[#ff4c00]" />
                    Rastrear
                  </>
                )}
              </button>
            </div>

            {/* Demo Helpers */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-500">Guías de prueba sugeridas:</span>
              <button
                type="button"
                onClick={() => handleDemoClick('TRN-123456')}
                className="px-3 py-1 bg-slate-100 hover:bg-[#ff4c00]/10 hover:text-[#ff4c00] text-slate-700 text-xs font-bold rounded-lg border border-slate-200 transition-colors"
              >
                TRN-123456 (En Tránsito)
              </button>
              <button
                type="button"
                onClick={() => handleDemoClick('TRN-987654')}
                className="px-3 py-1 bg-slate-100 hover:bg-[#ff4c00]/10 hover:text-[#ff4c00] text-slate-700 text-xs font-bold rounded-lg border border-slate-200 transition-colors"
              >
                TRN-987654 (Aduana)
              </button>
              <button
                type="button"
                onClick={() => handleDemoClick('TRN-555555')}
                className="px-3 py-1 bg-slate-100 hover:bg-[#ff4c00]/10 hover:text-[#ff4c00] text-slate-700 text-xs font-bold rounded-lg border border-slate-200 transition-colors"
              >
                TRN-555555 (Entregado)
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div className="mt-8 p-4 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center gap-3 text-red-700 animate-fadeIn">
              <AlertCircle className="w-6 h-6 shrink-0" />
              <p className="font-semibold text-sm sm:text-base">{error}</p>
            </div>
          )}

          {/* Search Results / Timeline */}
          {searched && activePackage && (
            <div className="mt-12 pt-8 border-t-2 border-slate-100 animate-fadeIn space-y-8">
              
              {/* Package Summary Header */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Número de Guía</span>
                  <p className="text-xl font-black text-[#0f2042]">{activePackage.trackingNumber}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Servicio</span>
                  <p className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#ff4c00]" />
                    {activePackage.service}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Peso / Volumen</span>
                  <p className="text-sm font-bold text-slate-700">{activePackage.weight}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Entrega Estimada</span>
                  <p className="text-sm font-bold text-emerald-600 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {activePackage.estimatedDelivery}
                  </p>
                </div>
              </div>

              {/* Origin & Destination Banner */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#0f2042] text-white rounded-2xl shadow-md">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="p-2.5 bg-slate-800 rounded-xl text-blue-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Origen</span>
                    <p className="text-sm font-bold text-slate-100">{activePackage.origin}</p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-[#ff4c00] font-black">
                  <span>――――――――――&gt;</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="p-2.5 bg-slate-800 rounded-xl text-[#ff4c00]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Destino</span>
                    <p className="text-sm font-bold text-slate-100">{activePackage.destination}</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-bold text-[#0f2042] flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#ff4c00]" />
                  Historial de Movimientos
                </h3>

                <div className="relative pl-6 sm:pl-8 space-y-8 border-l-2 border-slate-200 ml-4">
                  {activePackage.events.map((evt, idx) => (
                    <div key={idx} className="relative group">
                      
                      {/* Timeline Icon / Dot */}
                      <div className={`absolute -left-[31px] sm:-left-[35px] top-0.5 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110 ${
                        evt.completed
                          ? 'bg-emerald-500 text-white'
                          : evt.current
                          ? 'bg-[#ff4c00] text-white animate-pulse'
                          : 'bg-slate-200 text-slate-400'
                      }`}>
                        {evt.completed ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : evt.current ? (
                          <Truck className="w-4 h-4" />
                        ) : (
                          <Clock className="w-4 h-4" />
                        )}
                      </div>

                      {/* Content Box */}
                      <div className={`p-5 rounded-2xl border transition-all ${
                        evt.current 
                          ? 'bg-[#ff4c00]/5 border-[#ff4c00]/30 shadow-md shadow-[#ff4c00]/5' 
                          : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
                      }`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <h4 className={`font-extrabold text-base sm:text-lg ${evt.current ? 'text-[#ff4c00]' : 'text-slate-800'}`}>
                              {evt.status}
                            </h4>
                            {evt.current && (
                              <span className="px-2.5 py-0.5 bg-[#ff4c00] text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                                Actual
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-bold text-slate-400 flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-lg w-fit">
                            <Clock className="w-3.5 h-3.5" />
                            {evt.timestamp}
                          </span>
                        </div>

                        <p className="text-slate-600 text-sm mb-3 font-normal leading-relaxed">
                          {evt.description}
                        </p>

                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          Ubicación: <span className="text-slate-700">{evt.location}</span>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
