import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <section id="contact" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ponte en Contacto</h2>
          <p className="text-gray-400 text-lg">Estamos aquí para responder tus preguntas</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-white resize-none"
                placeholder="Tu mensaje..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              Enviar Mensaje
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-bold mb-1">Ubicación</h3>
                <p className="text-gray-400">
                  Calle Principal 123, Centro Deportivo
                  <br />
                  Tu Ciudad, 28001
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-bold mb-1">Teléfono</h3>
                <p className="text-gray-400">+34 91 234 5678</p>
                <p className="text-gray-400">+34 91 234 5679</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-bold mb-1">Email</h3>
                <p className="text-gray-400">info@fitzone.com</p>
                <p className="text-gray-400">soporte@fitzone.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-bold mb-1">Horarios</h3>
                <p className="text-gray-400">Lunes - Viernes: 6:00 AM - 11:00 PM</p>
                <p className="text-gray-400">Sábado - Domingo: 7:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
