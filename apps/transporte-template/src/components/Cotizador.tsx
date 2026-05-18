import React, { useState } from 'react';
import { Calculator, ArrowRight, Scale, Box, DollarSign, Info, MapPin, Truck, Check } from 'lucide-react';

interface QuoteResult {
  actualWeight: number;
  volumetricWeight: number;
  billableWeight: number;
  unit: string;
  baseRate: number;
  subtotal: number;
  estimatedTotal: number;
  originName: string;
  destinationName: string;
}

export const Cotizador: React.FC = () => {
  const [origin, setOrigin] = useState('USA');
  const [destination, setDestination] = useState('VEN');
  const [unitSystem, setUnitSystem] = useState<'kg' | 'lb'>('kg');
  const [weight, setWeight] = useState<string>('3');
  const [length, setLength] = useState<string>('25');
  const [width, setWidth] = useState<string>('20');
  const [height, setHeight] = useState<string>('15');
  const [result, setResult] = useState<QuoteResult | null>(null);

  const origins = [
    { code: 'USA', name: 'Miami, USA', ratePerKg: 7.50, ratePerLb: 3.40 },
    { code: 'ESP', name: 'Madrid, España', ratePerKg: 11.80, ratePerLb: 5.35 },
    { code: 'CHN', name: 'Guangzhou, China', ratePerKg: 14.50, ratePerLb: 6.58 },
  ];

  const destinations = [
    { code: 'VEN', name: 'Venezuela (Caracas y todo el país)' },
    { code: 'COL', name: 'Colombia (Bogotá, Medellín, Cali)' },
    { code: 'CRI', name: 'Costa Rica (San José)' },
    { code: 'DOM', name: 'Rep. Dominicana (Santo Domingo)' },
    { code: 'CHL', name: 'Chile (Santiago)' },
    { code: 'PER', name: 'Perú (Lima)' },
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    const numWeight = parseFloat(weight) || 0;
    const numLength = parseFloat(length) || 0;
    const numWidth = parseFloat(width) || 0;
    const numHeight = parseFloat(height) || 0;

    const selectedOrigin = origins.find(o => o.code === origin) || origins[0];
    const selectedDest = destinations.find(d => d.code === destination) || destinations[0];

    let volWeight = 0;
    let rate = 0;

    if (unitSystem === 'kg') {
      // Formula: (L x W x H in cm) / 5000 = Volumetric Weight in kg
      volWeight = (numLength * numWidth * numHeight) / 5000;
      rate = selectedOrigin.ratePerKg;
    } else {
      // Formula: (L x W x H in inches) / 139 = Volumetric Weight in lbs
      volWeight = (numLength * numWidth * numHeight) / 139;
      rate = selectedOrigin.ratePerLb;
    }

    const billableWeight = Math.max(numWeight, volWeight);
    const subtotal = billableWeight * rate;
    // Add a standard administrative/customs processing fee estimate
    const adminFee = unitSystem === 'kg' ? 4.50 : 4.50;
    const estimatedTotal = subtotal + adminFee;

    setResult({
      actualWeight: parseFloat(numWeight.toFixed(2)),
      volumetricWeight: parseFloat(volWeight.toFixed(2)),
      billableWeight: parseFloat(billableWeight.toFixed(2)),
      unit: unitSystem.toUpperCase(),
      baseRate: rate,
      subtotal: parseFloat(subtotal.toFixed(2)),
      estimatedTotal: parseFloat(estimatedTotal.toFixed(2)),
      originName: selectedOrigin.name,
      destinationName: selectedDest.name,
    });
  };

  const handleUnitToggle = (sys: 'kg' | 'lb') => {
    if (sys === unitSystem) return;
    setUnitSystem(sys);
    if (sys === 'lb') {
      // Convert current values roughly to lb/inches
      setWeight((parseFloat(weight) * 2.20462).toFixed(1));
      setLength((parseFloat(length) / 2.54).toFixed(1));
      setWidth((parseFloat(width) / 2.54).toFixed(1));
      setHeight((parseFloat(height) / 2.54).toFixed(1));
    } else {
      // Convert current values roughly to kg/cm
      setWeight((parseFloat(weight) / 2.20462).toFixed(1));
      setLength((parseFloat(length) * 2.54).toFixed(1));
      setWidth((parseFloat(width) * 2.54).toFixed(1));
      setHeight((parseFloat(height) * 2.54).toFixed(1));
    }
    setResult(null);
  };

  return (
    <section id="cotizador" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-bold tracking-wide uppercase">
            <Calculator className="w-4 h-4" />
            Cotizador Inteligente
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2042] tracking-tight">
            Calcula el Costo Estimado de tu Envío
          </h2>
          <p className="text-slate-600 text-lg font-normal">
            Obtén un presupuesto al instante basándote en el peso físico y las dimensiones de tu paquete. Sin costos ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Form Column */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl">
            <form onSubmit={handleCalculate} className="space-y-8">

              {/* Unit Toggle */}
              <div className="flex items-center justify-between p-1.5 bg-slate-200/70 rounded-2xl max-w-xs mx-auto sm:mx-0">
                <button
                  type="button"
                  onClick={() => handleUnitToggle('kg')}
                  className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all ${unitSystem === 'kg'
                    ? 'bg-[#0f2042] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  Kilos (kg) / cm
                </button>
                <button
                  type="button"
                  onClick={() => handleUnitToggle('lb')}
                  className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all ${unitSystem === 'lb'
                    ? 'bg-[#0f2042] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  Libras (lb) / pulg
                </button>
              </div>

              {/* Origin & Destination Selects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#ff4c00]" />
                    País de Origen
                  </label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full p-4 bg-white border-2 border-slate-200 rounded-2xl font-semibold text-slate-800 focus:border-[#ff4c00] focus:outline-none transition-all shadow-sm"
                  >
                    {origins.map(o => (
                      <option key={o.code} value={o.code}>{o.name}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#ff4c00]" />
                    País de Destino
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full p-4 bg-white border-2 border-slate-200 rounded-2xl font-semibold text-slate-800 focus:border-[#ff4c00] focus:outline-none transition-all shadow-sm"
                  >
                    {destinations.map(d => (
                      <option key={d.code} value={d.code}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Weight Input */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#ff4c00]" />
                  Peso Físico ({unitSystem.toUpperCase()})
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder={`Ej. 5.5`}
                    required
                    className="w-full p-4 bg-white border-2 border-slate-200 rounded-2xl font-bold text-slate-800 text-lg focus:border-[#ff4c00] focus:outline-none transition-all shadow-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none font-bold text-slate-400">
                    {unitSystem.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Dimensions Inputs */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Box className="w-4 h-4 text-[#ff4c00]" />
                  Dimensiones del Paquete ({unitSystem === 'kg' ? 'Centímetros - cm' : 'Pulgadas - in'})
                </label>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-500 block">Largo</span>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      placeholder="Largo"
                      required
                      className="w-full p-3 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-800 focus:border-[#ff4c00] focus:outline-none transition-all text-center shadow-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-500 block">Ancho</span>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="Ancho"
                      required
                      className="w-full p-3 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-800 focus:border-[#ff4c00] focus:outline-none transition-all text-center shadow-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-500 block">Alto</span>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Alto"
                      required
                      className="w-full p-3 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-800 focus:border-[#ff4c00] focus:outline-none transition-all text-center shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#ff4c00] hover:bg-[#e04300] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#ff4c00]/30 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 transition-all"
              >
                <Calculator className="w-6 h-6" />
                Calcular Tarifa Estimada
              </button>

            </form>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 space-y-6">

            {result ? (
              <div className="bg-[#0f2042] text-white p-8 rounded-3xl shadow-2xl border border-slate-700 relative overflow-hidden animate-fadeIn space-y-8">
                <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#ff4c00]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="border-b border-slate-700/80 pb-6">
                  <span className="text-xs font-bold text-[#ff4c00] uppercase tracking-widest block mb-1">Resumen de Cotización</span>
                  <h3 className="text-2xl font-black text-white tracking-tight">Cálculo de Envío Internacional</h3>
                  <p className="text-xs text-slate-300 mt-1.5">Desde {result.originName} hacia {result.destinationName}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                    <span className="text-slate-300 font-medium">Peso Físico Real:</span>
                    <span className="font-bold text-white">{result.actualWeight} {result.unit}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                    <span className="text-slate-300 font-medium">Peso Volumétrico:</span>
                    <span className="font-bold text-white">{result.volumetricWeight} {result.unit}</span>
                  </div>

                  <div className="flex justify-between items-center text-base border-b border-slate-800 pb-3">
                    <span className="text-slate-200 font-bold flex items-center gap-1.5">
                      Peso Facturable:
                      <Info className="w-4 h-4 text-[#ff4c00] cursor-help" title="Se toma el mayor entre el peso físico y el volumétrico según estándares internacionales." />
                    </span>
                    <span className="font-black text-[#ff4c00] text-lg">{result.billableWeight} {result.unit}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                    <span className="text-slate-300 font-medium">Tarifa Base ({result.unit}):</span>
                    <span className="font-bold text-white">${result.baseRate.toFixed(2)} USD</span>
                  </div>

                  <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                    <span className="text-slate-300 font-medium">Subtotal Flete:</span>
                    <span className="font-bold text-white">${result.subtotal.toFixed(2)} USD</span>
                  </div>

                  <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                    <span className="text-slate-300 font-medium">Gestión Aduanal / Admin (Aprox):</span>
                    <span className="font-bold text-white">$4.50 USD</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-[#ff4c00] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Total Estimado</span>
                    <span className="text-[10px] text-slate-400 block">No incluye impuestos locales</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl sm:text-4xl font-black text-[#ff4c00]">${result.estimatedTotal.toFixed(2)}</span>
                    <span className="text-xs font-bold text-white ml-1">USD</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      const el = document.getElementById('registro');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-4 bg-white hover:bg-slate-100 text-[#0f2042] font-black text-base rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    Abre tu Casillero para Enviar
                    <ArrowRight className="w-5 h-5 text-[#ff4c00]" />
                  </button>
                </div>

              </div>
            ) : (
              <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-3xl p-10 text-center space-y-6 flex flex-col items-center justify-center min-h-[450px]">
                <div className="p-5 bg-blue-50 text-blue-600 rounded-full">
                  <Calculator className="w-10 h-10" />
                </div>
                <div className="space-y-2 max-w-sm">
                  <h4 className="text-xl font-bold text-slate-800">¿Listo para cotizar?</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Ingresa los datos de tu paquete en el formulario de la izquierda y presiona "Calcular Tarifa Estimada" para ver el desglose completo.
                  </p>
                </div>
              </div>
            )}

            {/* Informational Card about Volumetric Weight */}
            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6 text-slate-700 space-y-3 shadow-sm">
              <h5 className="font-bold text-blue-900 text-base flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                ¿Qué es el Peso Volumétrico?
              </h5>
              <p className="text-xs leading-relaxed text-slate-600">
                Las aerolíneas internacionales consideran tanto el peso físico como el espacio que ocupa un paquete en el avión. Por convención mundial, el costo del flete se calcula basándose en el número mayor entre el peso real y el peso volumétrico.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
