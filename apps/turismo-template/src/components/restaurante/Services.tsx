import { Calendar, Utensils, Truck, Users } from 'lucide-react'

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const SERVICES: Service[] = [
  {
    id: 'reservations',
    title: 'Reservas',
    description: 'Reserva tu mesa en línea y garantiza tu lugar en nuestro restaurante',
    icon: <Calendar size={40} />,
  },
  {
    id: 'dine-in',
    title: 'Para Comer Aquí',
    description: 'Disfruta de una experiencia culinaria completa en nuestro elegante comedor',
    icon: <Utensils size={40} />,
  },
  {
    id: 'delivery',
    title: 'Entrega a Domicilio',
    description: 'Entregamos tu comida favorita caliente hasta tu puerta',
    icon: <Truck size={40} />,
  },
  {
    id: 'events',
    title: 'Eventos Privados',
    description: 'Organiza tu evento especial en un ambiente exclusivo con nosotros',
    icon: <Users size={40} />,
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Nuestros Servicios</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-primary-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-primary-600 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-primary-100 p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Horario de Atención</h3>
            <ul className="space-y-2 text-gray-800">
              <li className="flex justify-between"><span>Lunes a Jueves:</span><span className="font-semibold">12:00 - 23:00</span></li>
              <li className="flex justify-between"><span>Viernes y Sábado:</span><span className="font-semibold">12:00 - 00:00</span></li>
              <li className="flex justify-between"><span>Domingo:</span><span className="font-semibold">12:00 - 22:00</span></li>
            </ul>
            <p className="text-sm text-gray-700 mt-6 italic">Cerrado los lunes festivos</p>
          </div>

          <div className="bg-primary-100 p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Información de Contacto</h3>
            <ul className="space-y-4 text-gray-800">
              <li>
                <p className="text-sm text-gray-600">Teléfono</p>
                <a href="tel:+34123456789" className="text-primary-600 font-semibold hover:text-primary-700">+34 123 456 789</a>
              </li>
              <li>
                <p className="text-sm text-gray-600">Email</p>
                <a href="mailto:info@trattoria-italia.com" className="text-primary-600 font-semibold hover:text-primary-700">info@trattoria-italia.com</a>
              </li>
              <li>
                <p className="text-sm text-gray-600">Dirección</p>
                <p className="font-semibold">Calle de la Gastronomía, 42</p>
                <p className="text-sm">28001, Madrid, España</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
