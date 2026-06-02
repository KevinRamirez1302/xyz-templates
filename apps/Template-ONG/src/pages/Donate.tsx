import React, { useState } from 'react';
import { Heart, ShieldCheck, CheckCircle2, DollarSign, Calendar, User, Mail, CreditCard } from 'lucide-react';
import SEO from '../components/SEO';

export default function Donate() {
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  
  // Payment Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  
  // Validation States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const presets = [10, 25, 50, 100];

  const handlePresetClick = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    const parsed = parseFloat(val);
    if (!isNaN(parsed) && parsed > 0) {
      setAmount(parsed);
    } else {
      setAmount(0);
    }
  };

  // Define dynamic impact message based on amount
  const getImpactMessage = (val: number) => {
    if (val <= 0) return 'Por favor, ingresa un monto válido para calcular tu impacto.';
    if (val < 15) {
      return `Con $${val} financias la plantación de 1 árbol nativo y compras herramientas biodegradables para las brigadas.`;
    }
    if (val < 35) {
      return `Con $${val} financias la plantación de 3 árboles nativos y equipas a 1 voluntario local con chaleco y guantes protectores.`;
    }
    if (val < 75) {
      return `Con $${val} financias la plantación de 6 árboles nativos y retiras 15 kg de basura plástica costera.`;
    }
    return `Con $${val} financias la plantación de 12 árboles nativos, retiras 40 kg de plástico del océano y patrocinas 1 aula ecológica en una escuela rural.`;
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (amount <= 0) {
      tempErrors.amount = 'El monto de donación debe ser mayor a 0.';
    }
    if (!name.trim()) {
      tempErrors.name = 'El nombre completo es requerido.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      tempErrors.email = 'Ingresa un correo electrónico válido.';
    }
    const cardRegex = /^\d{16}$/;
    const sanitizedCard = cardNumber.replace(/\s/g, '');
    if (!sanitizedCard || !cardRegex.test(sanitizedCard)) {
      tempErrors.cardNumber = 'El número de tarjeta debe tener 16 dígitos.';
    }
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiry || !expiryRegex.test(expiry)) {
      tempErrors.expiry = 'Usa el formato MM/AA.';
    }
    const cvvRegex = /^\d{3,4}$/;
    if (!cvv || !cvvRegex.test(cvv)) {
      tempErrors.cvv = 'Debe ser de 3 o 4 dígitos.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setCardNumber('');
    setExpiry('');
    setCvv('');
    setAmount(50);
    setCustomAmount('');
    setFrequency('once');
    setErrors({});
  };

  return (
    <>
      <SEO 
        title="Donación Ecológica" 
        description="Contribuye a restaurar el equilibrio ambiental de nuestro planeta. Elige tu donación y visualiza su impacto ecológico directo." 
      />

      <section id="donate-section" className="relative pt-32 pb-20 bg-slate-900/50 dark:bg-slate-900/50 min-h-screen transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-500 border border-brand-500/20">
              ❤️ Tu apoyo hace la diferencia
            </span>
            <h1 id="donate-heading" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-white mt-3 font-display">
              Apoya la Conservación
            </h1>
            <p className="mt-3 text-slate-400 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Nuestras actividades de reforestación y descontaminación se financian de forma transparente gracias a donantes comprometidos como tú.
            </p>
          </div>

          {isSuccess ? (
            /* Success State Modal Content */
            <div
              id="donate-success-card"
              className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-700 dark:border-slate-800 text-center space-y-6 max-w-2xl mx-auto shadow-xl"
            >
              <div className="inline-flex p-4 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-500 rounded-full">
                <CheckCircle2 className="h-16 w-16" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-white font-display">
                  ¡Muchas Gracias por tu Donación!
                </h2>
                <p className="text-slate-400 dark:text-slate-400 max-w-md mx-auto text-sm sm:text-base">
                  Hemos procesado con éxito tu donación de <strong className="text-brand-500">${amount}</strong> ({frequency === 'once' ? 'única' : 'mensual'}).
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
                  Un recibo electrónico detallado y un certificado de deducción fiscal han sido enviados a: <strong className="text-slate-300 dark:text-slate-300">{email}</strong>.
                </p>
              </div>

              {/* Dynamic summary message in success state */}
              <div className="bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/20 p-4 rounded-2xl text-brand-600 dark:text-brand-400 text-sm font-semibold max-w-md mx-auto">
                {getImpactMessage(amount)}
              </div>

              <div className="pt-4">
                <button
                  id="donate-another-btn"
                  type="button"
                  onClick={handleReset}
                  className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  Realizar otra Donación
                </button>
              </div>
            </div>
          ) : (
            /* Donation Calculator and Payment Form */
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              
              {/* Left Column: Calculator (3/5 width on desktop) */}
              <div className="lg:col-span-3 space-y-6">
                
                {/* Selector Card */}
                <div className="glass-card p-6 rounded-3xl border border-slate-700 dark:border-slate-800 space-y-6">
                  <h2 className="text-xl font-bold text-slate-100 dark:text-white font-display flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-brand-500" />
                    Elige el Monto
                  </h2>

                  {/* Frequency Switcher */}
                  <div className="flex bg-slate-700 dark:bg-slate-800 p-1 rounded-xl">
                    <button
                      id="freq-once-btn"
                      type="button"
                      onClick={() => setFrequency('once')}
                      className={`flex-1 text-center py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                        frequency === 'once'
                          ? 'bg-slate-600 dark:bg-slate-700 text-white dark:text-white shadow-sm'
                          : 'text-slate-400 dark:text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-1.5">
                        <Heart className="h-4 w-4" /> Donar una vez
                      </span>
                    </button>
                    <button
                      id="freq-monthly-btn"
                      type="button"
                      onClick={() => setFrequency('monthly')}
                      className={`flex-1 text-center py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                        frequency === 'monthly'
                          ? 'bg-slate-600 dark:bg-slate-700 text-white dark:text-white shadow-sm'
                          : 'text-slate-400 dark:text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-1.5">
                        <Calendar className="h-4 w-4" /> Donar mensual
                      </span>
                    </button>
                  </div>

                  {/* Preset amounts buttons */}
                  <div className="grid grid-cols-4 gap-2.5">
                    {presets.map((val) => (
                      <button
                        key={val}
                        id={`preset-btn-${val}`}
                        type="button"
                        onClick={() => handlePresetClick(val)}
                        className={`py-3.5 rounded-2xl font-bold font-display border transition-all text-sm sm:text-base ${
                          amount === val && !customAmount
                            ? 'bg-brand-500 text-white border-brand-500 shadow-md'
                            : 'bg-slate-800 dark:bg-slate-800 text-slate-300 dark:text-slate-200 border-slate-700 dark:border-slate-700 hover:border-brand-500'
                        }`}
                      >
                        ${val}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount Input */}
                  <div>
                    <label htmlFor="custom-amount-input" className="block text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider mb-2">
                      U otro importe personalizado (USD)
                    </label>
                    <div className="relative rounded-2xl border border-slate-700 dark:border-slate-700 bg-slate-800 dark:bg-slate-800 focus-within:ring-2 focus-within:ring-brand-500 focus-within:border-transparent transition-all">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <span className="text-base font-semibold">$</span>
                      </div>
                      <input
                        id="custom-amount-input"
                        type="number"
                        min="1"
                        placeholder="Monto a donar"
                        value={customAmount}
                        onChange={handleCustomChange}
                        className="block w-full py-4 pl-8 pr-4 bg-transparent text-slate-100 dark:text-white placeholder-slate-400 focus:outline-none text-sm sm:text-base font-semibold"
                      />
                    </div>
                    {errors.amount && (
                      <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.amount}</p>
                    )}
                  </div>
                </div>

                {/* Dynamic Impact Display Card */}
                <div id="impact-estimator-card" className="bg-brand-500/10 border border-brand-500/20 p-6 rounded-3xl space-y-3">
                  <h3 className="text-brand-700 dark:text-brand-400 font-bold font-display text-base flex items-center gap-1.5">
                    💚 Impacto Estimado de tu Aporte
                  </h3>
                  <p className="text-slate-300 dark:text-slate-300 text-sm leading-relaxed">
                    {getImpactMessage(amount)}
                  </p>
                </div>

              </div>

              {/* Right Column: Payment Details Form (2/5 width on desktop) */}
              <form
                id="payment-form"
                onSubmit={handleSubmitPayment}
                className="lg:col-span-2 glass-card p-6 rounded-3xl border border-slate-700 dark:border-slate-800 space-y-5"
                noValidate
              >
                <h2 className="text-xl font-bold text-slate-100 dark:text-white font-display flex items-center gap-2 border-b border-slate-700 dark:border-slate-800 pb-3">
                  <ShieldCheck className="h-5 w-5 text-brand-500" />
                  Pago Seguro
                </h2>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="input-card-name" className="block text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                    Nombre Completo
                  </label>
                  <div className="relative rounded-xl border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-brand-500 transition-all bg-white dark:bg-slate-800">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      id="input-card-name"
                      type="text"
                      placeholder="Juan Pérez"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className="block w-full py-2.5 pl-10 pr-3 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-xs sm:text-sm"
                      required
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="input-card-email" className="block text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                    Correo Electrónico
                  </label>
                  <div className="relative rounded-xl border border-slate-700 dark:border-slate-700 focus-within:ring-2 focus-within:ring-brand-500 transition-all bg-slate-800 dark:bg-slate-800">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      id="input-card-email"
                      type="email"
                      placeholder="juan@ejemplo.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className="block w-full py-2.5 pl-10 pr-3 bg-transparent text-slate-100 dark:text-white placeholder-slate-400 focus:outline-none text-xs sm:text-sm"
                      required
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>

                {/* Card Number */}
                <div className="space-y-1.5">
                  <label htmlFor="input-card-number" className="block text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                    Número de Tarjeta
                  </label>
                  <div className="relative rounded-xl border border-slate-700 dark:border-slate-700 focus-within:ring-2 focus-within:ring-brand-500 transition-all bg-slate-800 dark:bg-slate-800">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      id="input-card-number"
                      type="text"
                      maxLength={19}
                      placeholder="1234567812345678"
                      value={cardNumber}
                      onChange={(e) => {
                        // Keep digits and format spacing
                        const cleaned = e.target.value.replace(/\D/g, '');
                        setCardNumber(cleaned);
                        if (errors.cardNumber) setErrors({ ...errors, cardNumber: '' });
                      }}
                      className="block w-full py-2.5 pl-10 pr-3 bg-transparent text-slate-100 dark:text-white placeholder-slate-400 focus:outline-none text-xs sm:text-sm"
                      required
                    />
                  </div>
                  {errors.cardNumber && <p className="text-red-500 text-xs">{errors.cardNumber}</p>}
                </div>

                {/* Expiry and CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="input-card-expiry" className="block text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                      Vencimiento
                    </label>
                    <input
                      id="input-card-expiry"
                      type="text"
                      maxLength={5}
                      placeholder="MM/AA"
                      value={expiry}
                      onChange={(e) => {
                        let cleaned = e.target.value.replace(/[^\d/]/g, '');
                        if (cleaned.length === 2 && !cleaned.includes('/')) {
                          cleaned += '/';
                        }
                        setExpiry(cleaned);
                        if (errors.expiry) setErrors({ ...errors, expiry: '' });
                      }}
                      className="block w-full py-2.5 px-3 rounded-xl border border-slate-700 dark:border-slate-700 text-slate-100 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-800 dark:bg-slate-800 text-xs sm:text-sm"
                      required
                    />
                    {errors.expiry && <p className="text-red-500 text-xs">{errors.expiry}</p>}
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="input-card-cvv" className="block text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                      CVV
                    </label>
                    <input
                      id="input-card-cvv"
                      type="password"
                      maxLength={4}
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => {
                        const cleaned = e.target.value.replace(/\D/g, '');
                        setCvv(cleaned);
                        if (errors.cvv) setErrors({ ...errors, cvv: '' });
                      }}
                      className="block w-full py-2.5 px-3 rounded-xl border border-slate-700 dark:border-slate-700 text-slate-100 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-800 dark:bg-slate-800 text-xs sm:text-sm"
                      required
                    />
                    {errors.cvv && <p className="text-red-500 text-xs">{errors.cvv}</p>}
                  </div>
                </div>

                {/* Security Message */}
                <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>Cifrado SSL de 256 bits. Pago 100% seguro.</span>
                </div>

                {/* Submit button */}
                <button
                  id="donate-submit-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-brand-500 hover:bg-brand-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-brand-500/10 transform hover:-translate-y-0.5 transition-all text-xs sm:text-sm"
                >
                  <Heart className="h-4 w-4 fill-white" />
                  <span>Donar ${amount > 0 ? amount : ''} ahora</span>
                </button>
              </form>

            </div>
          )}
        </div>
      </section>
    </>
  );
}
