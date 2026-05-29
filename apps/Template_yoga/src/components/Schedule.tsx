import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, Clock, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'

interface ScheduleItem {
  time: string;
  classTitle: string;
  instructor: string;
  level: string;
  duration: string;
}

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState<'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado'>('Lunes')
  const [instructorFilter, setInstructorFilter] = useState<'Todos' | 'Sofía Méndez' | 'Carlos Vega'>('Todos')

  const scheduleData: Record<'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado', ScheduleItem[]> = {
    Lunes: [
      { time: '08:30 - 09:30', classTitle: 'Vinyasa Flow', instructor: 'Sofía Méndez', level: 'Intermedio', duration: '60 min' },
      { time: '10:00 - 11:15', classTitle: 'Hatha Restore', instructor: 'Carlos Vega', level: 'Principiante', duration: '75 min' },
      { time: '18:30 - 19:30', classTitle: 'Vinyasa Flow', instructor: 'Sofía Méndez', level: 'Intermedio', duration: '60 min' },
      { time: '20:00 - 21:30', classTitle: 'Yin Yoga & Meditación', instructor: 'Carlos Vega', level: 'Todos', duration: '90 min' },
    ],
    Martes: [
      { time: '09:00 - 09:45', classTitle: 'Mindfulness & Zen', instructor: 'Carlos Vega', level: 'Todos', duration: '45 min' },
      { time: '18:30 - 20:00', classTitle: 'Ashtanga Yoga', instructor: 'Sofía Méndez', level: 'Avanzado', duration: '90 min' },
      { time: '20:15 - 21:15', classTitle: 'Yoga Prenatal', instructor: 'Sofía Méndez', level: 'Principiante', duration: '60 min' },
    ],
    Miércoles: [
      { time: '08:30 - 09:30', classTitle: 'Vinyasa Flow', instructor: 'Sofía Méndez', level: 'Intermedio', duration: '60 min' },
      { time: '10:00 - 11:15', classTitle: 'Hatha Restore', instructor: 'Carlos Vega', level: 'Principiante', duration: '75 min' },
      { time: '18:30 - 19:30', classTitle: 'Vinyasa Flow', instructor: 'Sofía Méndez', level: 'Intermedio', duration: '60 min' },
      { time: '20:00 - 21:30', classTitle: 'Yin Yoga & Meditación', instructor: 'Carlos Vega', level: 'Todos', duration: '90 min' },
    ],
    Jueves: [
      { time: '09:00 - 09:45', classTitle: 'Mindfulness & Zen', instructor: 'Carlos Vega', level: 'Todos', duration: '45 min' },
      { time: '18:30 - 20:00', classTitle: 'Ashtanga Yoga', instructor: 'Sofía Méndez', level: 'Avanzado', duration: '90 min' },
      { time: '20:15 - 21:15', classTitle: 'Yoga Prenatal', instructor: 'Sofía Méndez', level: 'Principiante', duration: '60 min' },
    ],
    Viernes: [
      { time: '08:30 - 09:30', classTitle: 'Vinyasa Flow', instructor: 'Sofía Méndez', level: 'Intermedio', duration: '60 min' },
      { time: '10:00 - 11:15', classTitle: 'Hatha Restore', instructor: 'Carlos Vega', level: 'Principiante', duration: '75 min' },
      { time: '18:00 - 19:15', classTitle: 'Yin Yoga & Meditación', instructor: 'Carlos Vega', level: 'Todos', duration: '75 min' },
    ],
    Sábado: [
      { time: '09:30 - 11:00', classTitle: 'Vinyasa Flow & Meditación', instructor: 'Sofía Méndez', level: 'Intermedio', duration: '90 min' },
      { time: '11:30 - 13:00', classTitle: 'Taller Intensivo', instructor: 'Carlos Vega', level: 'Avanzado', duration: '90 min' },
    ],
  }

  const days: ('Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado')[] = [
    'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
  ]

  const dayClasses = scheduleData[selectedDay] || []
  
  const filteredDayClasses = dayClasses.filter((item) => {
    if (instructorFilter === 'Todos') return true
    return item.instructor === instructorFilter
  })

  return (
    <section 
      id="horarios" 
      className="py-20 lg:py-24 bg-sand-100/50 dark:bg-zinc-900/40 border-t border-brand-100/10 dark:border-zinc-800/40 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
            <h2 className="text-base font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
              Planificador
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-sand-50 font-heading">
              Horarios de Práctica
            </p>
            <div className="h-1 w-12 bg-terracotta-500 rounded-full mx-auto my-2"></div>
            <p className="text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
              Elige el día y filtra por profesor para ver las sesiones disponibles. Las clases se imparten en grupos reducidos de máximo 12 alumnos.
            </p>
          </div>
        </Reveal>

        {/* Filters Panel */}
        <Reveal delay={150}>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-8 p-4 bg-white dark:bg-zinc-950 rounded-2xl border border-brand-100/10 dark:border-zinc-800/40 shadow-sm">
            {/* Day Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-center md:justify-start">
              {days.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                    selectedDay === day
                      ? 'bg-brand-500 text-white shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-300 hover:bg-brand-50 dark:hover:bg-zinc-900/50'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Instructor Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end shrink-0 border-t md:border-t-0 border-zinc-100 dark:border-zinc-800 pt-4 md:pt-0">
              <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Instructor:
              </span>
              <select
                value={instructorFilter}
                onChange={(e) => setInstructorFilter(e.target.value as 'Todos' | 'Sofía Méndez' | 'Carlos Vega')}
                className="px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-sand-100/50 dark:bg-zinc-900 border border-brand-100/20 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="Todos">Todos</option>
                <option value="Sofía Méndez">Sofía Méndez</option>
                <option value="Carlos Vega">Carlos Vega</option>
              </select>
            </div>
          </div>
        </Reveal>

        {/* Classes List View (Serene Timeline) */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredDayClasses.length > 0 ? (
            filteredDayClasses.map((item, idx) => (
              <Reveal key={`${idx}-${selectedDay}-${instructorFilter}`} delay={idx * 80} direction="up">
                <div 
                  className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 sm:p-6 bg-white dark:bg-zinc-950 border border-brand-100/10 dark:border-zinc-800/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left"
                >
                  {/* Time info */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="p-3 bg-brand-50 dark:bg-brand-950/20 text-brand-600 dark:text-brand-400 rounded-xl">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-900 dark:text-sand-100">{item.time}</p>
                      <div className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Class details */}
                  <div className="flex-grow sm:px-6">
                    <h4 className="text-lg font-bold text-zinc-950 dark:text-sand-50">{item.classTitle}</h4>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                      item.level === 'Principiante' 
                        ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400'
                        : item.level === 'Intermedio'
                        ? 'bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400'
                        : item.level === 'Avanzado'
                        ? 'bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
                    }`}>
                      {item.level}
                    </span>
                  </div>

                  {/* Teacher / Action */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 border-zinc-100 dark:border-zinc-800/80 pt-3 sm:pt-0">
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                      <User className="h-4 w-4 text-terracotta-500" />
                      <span>{item.instructor}</span>
                    </div>
                    <Link
                      to="/contacto"
                      className="inline-flex h-9 w-9 items-center justify-center bg-brand-50 dark:bg-zinc-900 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 text-brand-600 dark:text-zinc-300 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-500"
                      aria-label={`Reservar clase de ${item.classTitle}`}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>

                </div>
              </Reveal>
            ))
          ) : (
            <Reveal>
              <div className="p-12 text-center bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800/50 rounded-2xl">
                <p className="text-zinc-500 dark:text-zinc-400 font-light">No hay clases programadas para este instructor el {selectedDay}.</p>
              </div>
            </Reveal>
          )}
        </div>

      </div>
    </section>
  )
}
