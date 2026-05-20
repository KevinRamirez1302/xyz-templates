import React, { useState } from 'react';
import { Calendar, Users, Tag, Search, Check } from 'lucide-react';

const BookingBar = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate booking search action
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 4000);
  };

  return (
    <div id="booking" className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative -mt-16 sm:-mt-24 z-30">
      <div className="bg-white shadow-2xl rounded-none border border-gray-100 overflow-hidden">
        {/* Top decorative accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#c5a880] via-[#D4AF37] to-[#c5a880]"></div>
        
        <form onSubmit={handleSearch} className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
            
            {/* Check-in Date */}
            <div className="relative group">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Llegada</span>
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-200 p-3 text-sm text-gray-800 font-medium focus:outline-none focus:border-[#c5a880] focus:bg-white transition-all rounded-none"
              />
            </div>

            {/* Check-out Date */}
            <div className="relative group">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Salida</span>
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-200 p-3 text-sm text-gray-800 font-medium focus:outline-none focus:border-[#c5a880] focus:bg-white transition-all rounded-none"
              />
            </div>

            {/* Guests Selector */}
            <div className="relative group">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 flex items-center space-x-1">
                <Users className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Huéspedes</span>
              </label>
              <button
                type="button"
                onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
                className="w-full bg-gray-50 border border-gray-200 p-3 text-sm text-gray-800 font-medium flex items-center justify-between focus:outline-none focus:border-[#c5a880] focus:bg-white transition-all rounded-none"
              >
                <span>{adults} Adultos, {children} Niños</span>
              </button>

              {/* Guest Dropdown */}
              {guestDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-full bg-white shadow-xl border border-gray-100 p-4 z-40 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Adultos</span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-8 h-8 bg-gray-100 hover:bg-[#c5a880] hover:text-white text-gray-700 font-bold transition-colors flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-sm font-semibold w-4 text-center">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 bg-gray-100 hover:bg-[#c5a880] hover:text-white text-gray-700 font-bold transition-colors flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Niños</span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-8 h-8 bg-gray-100 hover:bg-[#c5a880] hover:text-white text-gray-700 font-bold transition-colors flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-sm font-semibold w-4 text-center">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-8 h-8 bg-gray-100 hover:bg-[#c5a880] hover:text-white text-gray-700 font-bold transition-colors flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setGuestDropdownOpen(false)}
                    className="w-full bg-gray-900 text-white py-2 text-xs uppercase tracking-wider font-semibold hover:bg-[#c5a880] transition-colors"
                  >
                    Confirmar
                  </button>
                </div>
              )}
            </div>

            {/* Promo Code Input */}
            <div className="relative group">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 flex items-center space-x-1">
                <Tag className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Código Promocional</span>
              </label>
              <input
                type="text"
                placeholder="Ej. HOTEL2026"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 p-3 text-sm text-gray-800 font-medium placeholder-gray-400 focus:outline-none focus:border-[#c5a880] focus:bg-white transition-all rounded-none uppercase"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-end h-full pt-6 lg:pt-0">
              <button
                type="submit"
                className="w-full h-[46px] bg-[#c5a880] hover:bg-[#b0926a] text-white font-semibold text-sm tracking-widest uppercase shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 duration-300 flex items-center justify-center space-x-2 rounded-none"
              >
                <Search className="w-4 h-4" />
                <span>Buscar Habitaciones</span>
              </button>
            </div>

          </div>
        </form>

        {/* Success Feedback Alert */}
        {bookingSuccess && (
          <div className="bg-green-50 border-t border-green-200 p-4 flex items-center justify-center space-x-2 text-green-800 animate-fadeIn">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">¡Búsqueda iniciada! Verificando la mejor tarifa disponible para sus fechas...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingBar;
