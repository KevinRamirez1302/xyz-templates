import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button } from '../components/Button';

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

export const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<FormInputs>();

  // Datos de contacto - Personaliza aquí datos de robootics de ejemplo
  const whatsappNumber = '34611057440'; // Formato: código país + número sin espacios numero de robotics de ejemplo 
  const socialLinks = {
    instagram: 'https://www.instagram.com/robootics/',
    twitter: 'https://x.com/robootics_',
    linkedin: 'https://es.linkedin.com/company/robootics-education',
    facebook: 'https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FRobootics%2F%3Flocale%3Des_ES'
  };

  //ejemplo de correo electronico de robotics, esto debe ser modifica
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      // Opción 1: Mailto (abre cliente de correo del usuario)
      const mailtoLink = `mailto:ejemplo@inmores.com?subject=Contacto desde web - ${data.name}&body=${encodeURIComponent(
        `Nombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`
      )}`;
      // ejecutable de correo electronico, no tocar
      window.location.href = mailtoLink;

      // Opción 2: Si tienes backend/API, descomenta esto:
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) throw new Error('Error al enviar');
      */

      // Espera 2 segundos antes de resetear (da tiempo a que se abra el mailto)
      setTimeout(() => {
        reset();
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // mensaje de ejemplo que se envia
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola, me gustaría recibir más información');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Contacto
        </h1>
        <p className="text-xl text-slate-600">
          Estamos aquí para ayudarte. Escríbenos y te responderemos pronto.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Formulario */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Envíanos un mensaje
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', {
                    required: 'El nombre es obligatorio',
                    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition ${errors.name ? 'border-red-500' : 'border-slate-300'
                    }`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'El email es obligatorio',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition ${errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', {
                    required: 'El mensaje es obligatorio',
                    minLength: { value: 10, message: 'Mínimo 10 caracteres' }
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition resize-none ${errors.message ? 'border-red-500' : 'border-slate-300'
                    }`}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                name='subir'
                type="submit"
                isloading={isSubmitting}
                className="w-full bg-slate-900 hover:bg-slate-800 focus:ring-slate-900"
              >
                Enviar mensaje
              </Button>

              {isSubmitSuccessful && (
                <p className="text-green-600 text-sm">✓ Mensaje enviado correctamente</p>
              )}
            </form>
          </div>

          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Otras formas de contacto
            </h2>

            {/* WhatsApp */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 mb-3">
                WhatsApp
              </h3>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 text-white hover:bg-green-700 border-0"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chatea con nosotros
              </Button>
            </div>

            {/* Email directo */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                Email
              </h3>
              <a
                href="mailto:ejemplo@inmores.com"
                className="text-slate-600 hover:text-slate-900 transition"
              >
                ejemplo@inmores.com
              </a>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">
                Síguenos
              </h3>
              <div className="flex gap-4">

                {/* Instagram */}
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};