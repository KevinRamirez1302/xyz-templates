import React, { useState } from 'react';
import { UserPlus, User, Mail, Phone, Globe, CheckCircle2, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

export const Registro: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('VEN');
  const [terms, setTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lockerCode, setLockerCode] = useState('');
  const [loading, setLoading] = useState(false);

  const countries = [
    { code: 'VEN', name: 'Venezuela' },
    { code: 'COL', name: 'Colombia' },
    { code: 'CRI', name: 'Costa Rica' },
    { code: 'DOM', name: 'República Dominicana' },
    { code: 'CHL', name: 'Chile' },
    { code: 'PER', name: 'Perú' },
    { code: 'PAN', name: 'Panamá' },
    { code: 'ESP', name: 'España' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terms) return;

    setLoading(true);

    // Simulate API registration delay
    setTimeout(() => {
      const randomId = Math.floor(100000 + Math.random() * 900000);
      setLockerCode(`TRN-${randomId}`);
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setTerms(false);
    setSubmitted(false);
    setLockerCode('');
  };

  return (
    <section id="registro" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff4c00]/10 border border-[#ff4c00]/20 text-[#ff4c00] text-sm font-bold tracking-wide uppercase">
            <UserPlus className="w-4 h-4" />
            Registro de Casillero
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2042] tracking-tight">
            Abre tu Casillero Internacional Gratis
          </h2>
          <p className="text-slate-600 text-lg">
            Obtén tu dirección personal en Miami, Madrid y Guangzhou al instante. Sin mensualidades ni costos de mantenimiento.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden transition-all">
          
          {!submitted ? (
            <div className="p-8 sm:p-12 space-y-8">
              <div className="border-b border-slate-200 pb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0f2042]">Datos del Titular</h3>
                  <p className="text-sm text-slate-500 mt-1">Ingresa tus datos personales para asignar tu código único de casillero.</p>
                </div>
                <div className="hidden sm:flex p-3 bg-blue-50 text-[#0f2042] rounded-2xl">
                  <ShieldCheck className="w-8 h-8" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Nombre Completo</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Carlos Mendoza"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 focus:border-[#ff4c00] focus:bg-white rounded-2xl font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">Correo Electrónico</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ejemplo@correo.com"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 focus:border-[#ff4c00] focus:bg-white rounded-2xl font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">Teléfono Móvil</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+58 414 1234567"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 focus:border-[#ff4c00] focus:bg-white rounded-2xl font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all shadow-inner"
                      />
                    </div>
                  </div>
                </div>

                {/* Country Selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">País de Residencia / Destino Frecuente</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <Globe className="w-5 h-5" />
                    </div>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 focus:border-[#ff4c00] focus:bg-white rounded-2xl font-semibold text-slate-800 focus:outline-none transition-all shadow-inner"
                    >
                      {countries.map(c => (
                        <option key={c.code} value={c.code}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={terms}
                      onChange={(e) => setTerms(e.target.checked)}
                      required
                      className="mt-1 w-5 h-5 rounded border-2 border-slate-300 text-[#ff4c00] focus:ring-[#ff4c00] transition-colors cursor-pointer"
                    />
                    <span className="text-sm text-slate-600 group-hover:text-slate-800 leading-relaxed">
                      Acepto los <a href="#terminos" className="text-[#ff4c00] font-bold underline">Términos y Condiciones</a> del servicio y autorizo el tratamiento de mis datos personales para la gestión logística de mis envíos.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading || !terms}
                    className="w-full py-4 bg-[#0f2042] hover:bg-[#1b365d] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#0f2042]/20 flex items-center justify-center gap-3 transition-all disabled:opacity-50 transform hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Creando Casillero Seguro...
                      </span>
                    ) : (
                      <>
                        <UserPlus className="w-6 h-6 text-[#ff4c00]" />
                        Crear Mi Casillero Gratis
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-4 text-xs font-semibold text-slate-400 border-t border-slate-100">
                  <Lock className="w-4 h-4 text-emerald-500" />
                  Información cifrada con seguridad SSL de 256 bits.
                </div>

              </form>
            </div>
          ) : (
            /* Success View */
            <div className="p-8 sm:p-16 text-center space-y-8 animate-fadeIn">
              <div className="w-24 h-24 bg-emerald-50 border-4 border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500 shadow-lg animate-bounce">
                <CheckCircle2 className="w-14 h-14" />
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl font-black text-[#0f2042]">¡Felicitaciones, {name}!</h3>
                <p className="text-slate-600 text-lg max-w-lg mx-auto leading-relaxed">
                  Tu casillero internacional ha sido creado exitosamente. Hemos enviado a <span className="font-bold text-slate-800">{email}</span> la guía de bienvenida con tus direcciones físicas en USA, España y China.
                </p>
              </div>

              {/* Locker Code Display */}
              <div className="bg-[#0f2042] p-8 rounded-3xl max-w-md mx-auto shadow-2xl border border-slate-700 relative overflow-hidden space-y-3">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#ff4c00]/20 rounded-full blur-2xl pointer-events-none" />
                <span className="text-xs font-bold text-[#ff4c00] uppercase tracking-widest block">Tu Código de Casillero</span>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-wider py-2">
                  {lockerCode}
                </div>
                <p className="text-xs text-slate-300">
                  Usa este código siempre junto a tu nombre al realizar compras en tiendas online (Ej. Carlos Mendoza {lockerCode}).
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <button
                  onClick={() => {
                    const el = document.getElementById('cotizador');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 bg-[#ff4c00] hover:bg-[#e04300] text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  Cotizar mi Primer Envío
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-base rounded-2xl transition-all"
                >
                  Registrar Otro Casillero
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
