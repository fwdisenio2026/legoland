import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, MessageCircle, Check } from 'lucide-react';

const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const WEEKDAY_NAMES = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

export const BookingCalendar: React.FC = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [contactName, setContactName] = useState('');
  const [timePreference, setTimePreference] = useState('');

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const prevMonth = () => {
    const isCurrentMonthAndYear =
      currentMonth === today.getMonth() && currentYear === today.getFullYear();
    if (isCurrentMonthAndYear) return;

    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateSelect = (day: number) => {
    const chosen = new Date(currentYear, currentMonth, day);
    chosen.setHours(0, 0, 0, 0);
    if (chosen < today) return;
    setSelectedDate(chosen);
  };

  const formatSelectedDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const formatted = date.toLocaleDateString('es-AR', options);
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  const handleConsultWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) return;

    const formattedDate = formatSelectedDate(selectedDate);
    let message = `¡Hola LEGOLAND! Quisiera consultar disponibilidad para celebrar un festejo el día ${formattedDate}.`;

    if (contactName.trim()) {
      message += ` Mi nombre es ${contactName.trim()}.`;
    }
    if (timePreference.trim()) {
      message += ` Preferencia horaria / consulta: ${timePreference.trim()}.`;
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5493424078054?text=${encoded}`, '_blank');
  };

  const isPrevDisabled =
    currentMonth === today.getMonth() && currentYear === today.getFullYear();

  return (
    <section id="reservas" className="py-20 sm:py-28 bg-[#10B981] text-white relative overflow-hidden">
      {/* Decorative festive bubbles in white/yellow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#10B981] bg-white font-display font-extrabold text-sm sm:text-base tracking-wider uppercase px-5 py-1.5 rounded-full inline-block mb-4 shadow-md">
            Calendario de Festejos
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4 drop-shadow-sm">
            Elegí la Fecha de tu Cumple
          </h2>
          <p className="text-lg sm:text-xl text-emerald-100 font-medium">
            Tocá el día que te gustaría en el calendario y consultanos directamente por WhatsApp.
          </p>
        </div>

        {/* Main Grid: 100% Solid Cards (ZERO TRANSPARENCY) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Calendar Card - 100% Solid White */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-emerald-900/15 text-gray-900">
            {/* Header: Month and Navigation */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center shadow-xs">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900">
                  {MONTH_NAMES[currentMonth]} {currentYear}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevMonth}
                  disabled={isPrevDisabled}
                  className={`p-2.5 rounded-xl border-2 border-gray-200 transition-colors ${
                    isPrevDisabled
                      ? 'opacity-30 cursor-not-allowed text-gray-400 bg-gray-50'
                      : 'hover:bg-gray-100 text-gray-800 cursor-pointer active:scale-95'
                  }`}
                  aria-label="Mes anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="p-2.5 rounded-xl border-2 border-gray-200 hover:bg-gray-100 text-gray-800 transition-colors cursor-pointer active:scale-95"
                  aria-label="Mes siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Weekdays Bar */}
            <div className="grid grid-cols-7 gap-1 text-center mb-3 bg-slate-100 rounded-2xl py-2 px-1">
              {WEEKDAY_NAMES.map((d) => (
                <div key={d} className="text-xs sm:text-sm font-extrabold text-gray-700 uppercase">
                  {d}
                </div>
              ))}
            </div>

            {/* Days Grid - Solid and Sharp */}
            <div className="grid grid-cols-7 gap-2">
              {/* Empty leading slots */}
              {Array.from({ length: firstDayIndex }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}

              {/* Days of current month */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const cellDate = new Date(currentYear, currentMonth, day);
                cellDate.setHours(0, 0, 0, 0);

                const isPast = cellDate < today;
                const isToday = cellDate.getTime() === today.getTime();
                const isSelected = selectedDate && cellDate.getTime() === selectedDate.getTime();

                let cellStyles = 'bg-slate-50 border-2 border-slate-200 text-gray-900 hover:bg-purple-100 hover:border-[#7C3AED] hover:text-[#7C3AED] cursor-pointer';
                if (isPast) {
                  cellStyles = 'bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed opacity-40';
                } else if (isSelected) {
                  cellStyles = 'bg-[#7C3AED] border-2 border-purple-900 text-white font-black shadow-lg scale-105';
                } else if (isToday) {
                  cellStyles = 'bg-amber-100 border-3 border-[#F59E0B] text-gray-900 font-extrabold';
                }

                return (
                  <button
                    key={day}
                    type="button"
                    disabled={isPast}
                    onClick={() => handleDateSelect(day)}
                    className={`aspect-square rounded-2xl flex flex-col items-center justify-center text-base sm:text-lg font-bold transition-all ${cellStyles}`}
                  >
                    <span>{day}</span>
                    {isToday && !isSelected && (
                      <span className="w-2 h-2 bg-[#F59E0B] rounded-full mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-4 border-t-2 border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-600 font-semibold">
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-amber-100 border-2 border-[#F59E0B]" />
                Hoy
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#7C3AED]" />
                Seleccionado
              </span>
              <span className="text-gray-500 font-bold">Santa Fe, AR</span>
            </div>
          </div>

          {/* Form and WhatsApp Action Card - 100% Solid White */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-emerald-900/15 text-gray-900">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 mb-2">
              Confirmar Consulta
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 font-medium">
              Elegí un día en el calendario y consultanos de inmediato por WhatsApp oficial.
            </p>

            <form onSubmit={handleConsultWhatsApp} className="space-y-5">
              {/* Selected date preview */}
              <div className="bg-purple-50 rounded-2xl p-4 sm:p-5 border-2 border-purple-200">
                <label className="block text-xs font-black text-[#7C3AED] uppercase tracking-wider mb-1">
                  Día seleccionado
                </label>
                {selectedDate ? (
                  <div className="flex items-center gap-2 text-gray-900 font-display font-extrabold text-xl sm:text-2xl">
                    <Check className="w-6 h-6 text-[#10B981] shrink-0" />
                    <span>{formatSelectedDate(selectedDate)}</span>
                  </div>
                ) : (
                  <p className="text-gray-500 font-semibold text-base italic">
                    👉 Hacé clic en una fecha del calendario...
                  </p>
                )}
              </div>

              {/* Contact name */}
              <div>
                <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                  Tu Nombre (opcional)
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Ej: Carolina"
                  className="w-full bg-slate-50 border-2 border-gray-300 rounded-xl px-4 py-3.5 text-base text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#7C3AED] font-medium"
                />
              </div>

              {/* Time preference / note */}
              <div>
                <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                  Preferencia o turno (opcional)
                </label>
                <input
                  type="text"
                  value={timePreference}
                  onChange={(e) => setTimePreference(e.target.value)}
                  placeholder="Ej: Turno tarde / Cumple de 6 años"
                  className="w-full bg-slate-50 border-2 border-gray-300 rounded-xl px-4 py-3.5 text-base text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#7C3AED] font-medium"
                />
              </div>

              {/* Submit CTA Button - Only appears / activates once date is selected */}
              {selectedDate ? (
                <div className="pt-2 animate-bounce">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-display font-black text-xl bg-[#22C55E] hover:bg-[#16A34A] text-white shadow-2xl transition-all hover:scale-103 cursor-pointer active:scale-98"
                  >
                    <MessageCircle className="w-6 h-6 fill-white text-[#22C55E]" />
                    <span>Reservar</span>
                  </button>
                  <p className="text-center text-xs text-gray-500 font-semibold mt-2">
                    Te llevará a WhatsApp para confirmar la fecha seleccionada.
                  </p>
                </div>
              ) : (
                <div className="bg-amber-50 border-2 border-dashed border-amber-300 rounded-2xl p-4 text-center">
                  <p className="text-sm font-bold text-amber-800">
                    👈 Seleccioná un día en el calendario para habilitar el botón de Reservar
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
