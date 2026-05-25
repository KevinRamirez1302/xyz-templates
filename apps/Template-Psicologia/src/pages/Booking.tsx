import { useState } from 'react';
import { MapPin, Phone, Clock, CalendarDays, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(15);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  // Mock calendar data
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const disabledDays = [2, 3, 9, 10, 16, 17, 23, 24, 30, 31]; // Weekends mockup
  const fullyBookedDays = [12, 14, 21];
  
  const timeSlots = ['10:00', '11:00', '12:30', '16:00', '17:30', '19:00'];
  const bookedSlots = ['11:00', '16:00'];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Reserva Online</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Pedir Cita</h1>
          <p className="text-lg text-gray-600">
            Selecciona el día y la hora que mejor se adapten a ti. Te confirmaremos la reserva al instante.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Detalles de la consulta</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Modalidad</h4>
                    <p className="text-gray-600 text-sm mt-1">Presencial (Madrid) u Online por videollamada</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Duración</h4>
                    <p className="text-gray-600 text-sm mt-1">60 minutos por sesión</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dudas urgentes</h4>
                    <p className="text-gray-600 text-sm mt-1">+34 600 000 000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              
              {/* Stepper Header */}
              <div className="flex border-b border-gray-100 bg-gray-50/50">
                <button 
                  onClick={() => setStep(1)}
                  className={`flex-1 py-4 text-sm font-medium transition-colors border-b-2 ${step === 1 ? 'border-primary text-primary bg-white' : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                >
                  1. Fecha y Hora
                </button>
                <button 
                  onClick={() => selectedTime && setStep(2)}
                  className={`flex-1 py-4 text-sm font-medium transition-colors border-b-2 ${step === 2 ? 'border-primary text-primary bg-white' : 'border-transparent text-gray-400'} ${!selectedTime ? 'cursor-not-allowed' : 'hover:text-gray-900 hover:bg-gray-50'}`}
                >
                  2. Tus datos
                </button>
              </div>

              <div className="p-8">
                {step === 1 && (
                  <div className="grid md:grid-cols-2 gap-10">
                    {/* Calendar */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                          <CalendarDays className="h-5 w-5 text-primary" /> Mayo 2026
                        </h3>
                        <div className="flex gap-2">
                          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500"><ChevronLeft className="h-5 w-5" /></button>
                          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-900"><ChevronRight className="h-5 w-5" /></button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-y-4 text-center mb-2">
                        {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(day => (
                          <div key={day} className="text-xs font-semibold text-gray-400">{day}</div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2">
                        {/* Empty offset for layout */}
                        <div className="aspect-square"></div>
                        <div className="aspect-square"></div>
                        <div className="aspect-square"></div>
                        <div className="aspect-square"></div>
                        
                        {daysInMonth.map(day => {
                          const isWeekend = disabledDays.includes(day);
                          const isBooked = fullyBookedDays.includes(day);
                          const isSelected = selectedDate === day;
                          const isDisabled = isWeekend || isBooked;

                          return (
                            <button
                              key={day}
                              disabled={isDisabled}
                              onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                              className={`aspect-square flex items-center justify-center rounded-full text-sm font-medium transition-all
                                ${isSelected ? 'bg-primary text-white shadow-md' : ''}
                                ${!isSelected && !isDisabled ? 'hover:bg-primary/10 hover:text-primary text-gray-700' : ''}
                                ${isBooked ? 'bg-red-50 text-red-300 line-through cursor-not-allowed' : ''}
                                ${isWeekend && !isBooked ? 'text-gray-300 cursor-not-allowed' : ''}
                              `}
                            >
                              {day}
                            </button>
                          )
                        })}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-500 justify-center border-t border-gray-100 pt-6">
                        <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary block"></span> Seleccionado</div>
                        <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-100 block"></span> Ocupado</div>
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div>
                      {selectedDate ? (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                          <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" /> Horarios disponibles
                          </h3>
                          <p className="text-sm text-gray-500 mb-4">Día {selectedDate} de Mayo</p>
                          
                          <div className="space-y-3">
                            {timeSlots.map(time => {
                              const isBooked = bookedSlots.includes(time);
                              const isSelected = selectedTime === time;

                              return (
                                <button
                                  key={time}
                                  disabled={isBooked}
                                  onClick={() => setSelectedTime(time)}
                                  className={`w-full p-4 rounded-xl text-left transition-all border flex justify-between items-center
                                    ${isSelected ? 'border-primary bg-primary/5 ring-1 ring-primary' : ''}
                                    ${!isSelected && !isBooked ? 'border-gray-200 hover:border-primary/50 hover:bg-gray-50 text-gray-700' : ''}
                                    ${isBooked ? 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed opacity-60' : ''}
                                  `}
                                >
                                  <span className="font-medium text-lg">{time}</span>
                                  {isSelected && <CheckCircle2 className="h-5 w-5 text-primary" />}
                                  {isBooked && <span className="text-xs uppercase tracking-wider font-semibold">Reservado</span>}
                                </button>
                              )
                            })}
                          </div>

                          {selectedTime && (
                            <button 
                              onClick={() => setStep(2)}
                              className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 animate-in fade-in zoom-in duration-300"
                            >
                              Continuar <ArrowRight className="h-5 w-5" />
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400 p-8 text-center border-2 border-dashed border-gray-100 rounded-2xl">
                          <CalendarDays className="h-12 w-12 text-gray-200 mb-4" />
                          <p>Selecciona un día en el calendario para ver los horarios disponibles.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mb-8 flex items-center gap-4">
                      <div className="bg-white p-3 rounded-xl">
                        <CalendarDays className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Cita seleccionada</p>
                        <p className="text-lg font-bold text-gray-900">{selectedDate} de Mayo a las {selectedTime}</p>
                      </div>
                      <button onClick={() => setStep(1)} className="ml-auto text-sm text-primary font-medium hover:underline">
                        Cambiar
                      </button>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Reserva completada con éxito (Mockup)"); }}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Nombre completo</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Teléfono</label>
                          <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Motivo de consulta (Opcional)</label>
                        <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white resize-none" />
                      </div>

                      <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2">
                        Confirmar Reserva <CheckCircle2 className="h-5 w-5" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Booking;
