
import { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Mail, Lock, Eye, Users, FileText } from 'lucide-react';
import '../../index.css';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

export default function PoliticasdePrivacidad() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['section-1']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const sections: Section[] = [
    {
      id: 'section-1',
      title: 'Introducción',
      icon: <FileText className="w-6 h-6" />,
      content: [
        'En InmoRes, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, compartimos y protegemos la información que nos proporcionas.',
        'Esta política se aplica a todos los servicios oferecidos a través de nuestro sitio web y plataforma de aplicaciones móviles. Si tienes preguntas sobre nuestras prácticas de privacidad, no dudes en contactarnos.'
      ]
    },
    {
      id: 'section-2',
      title: 'Información que Recopilamos',
      icon: <Users className="w-6 h-6" />,
      content: [
        'Recopilamos información de varias maneras:',
        '• Información de Registro: Cuando creas una cuenta, recopilamos tu nombre, correo electrónico, número de teléfono y contraseña.',
        '• Información de Perfil: Datos adicionales que proporcionas voluntariamente como foto de perfil, biografía y preferencias.',
        '• Información de Propiedades: Detalles sobre las propiedades que consultas, creas anuncios o expresas interés.',
        '• Información de Transacción: Detalles sobre tus compras, alquileres y otras transacciones realizadas en nuestra plataforma.',
        '• Información de Dispositivo: Información técnica sobre el dispositivo que utilizas, incluyendo dirección IP, tipo de navegador y sistema operativo.'
      ]
    },
    {
      id: 'section-3',
      title: 'Cómo Utilizamos tu Información',
      icon: <Eye className="w-6 h-6" />,
      content: [
        'Utilizamos la información recopilada para:',
        '• Proporcionar, mejorar y mantener nuestros servicios',
        '• Procesar transacciones y enviar confirmaciones relacionadas',
        '• Enviar comunicaciones marketing y actualizaciones (que puedes optar por no recibir)',
        '• Personalizar tu experiencia y mostrar contenido relevante',
        '• Detectar, prevenir y abordar fraude técnico o de seguridad',
        '• Cumplir con obligaciones legales y reglamentarias',
        '• Realizar análisis estadísticos para mejorar nuestros servicios'
      ]
    },
    {
      id: 'section-4',
      title: 'Uso compartido de Datos',
      icon: <Users className="w-6 h-6" />,
      content: [
        'No vendemos tus datos personales a terceros. Sin embargo, compartimos información en los siguientes casos:',
        '• Con Proveedores de Servicios: Empresas que nos ayudan a operar nuestro sitio web y proporcionar servicios (procesamiento de pagos, análisis, alojamiento).',
        '• Por Requisito Legal: Cuando sea requerido por ley, orden judicial o autoridad gubernamental.',
        '• Protección de Derechos: Cuando sea necesario para proteger nuestros derechos, privacidad, seguridad o propiedad.',
        '• Transferencias de Negocio: En caso de fusión, adquisición o venta de activos, tu información puede ser transferida como parte de ese proceso.'
      ]
    },
    {
      id: 'section-5',
      title: 'Seguridad de Datos',
      icon: <Lock className="w-6 h-6" />,
      content: [
        'Implementamos medidas técnicas, administrativas y físicas robustas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.',
        'Estas medidas incluyen:',
        '• Encriptación SSL de datos en tránsito',
        '• Contraseñas encriptadas en nuestras bases de datos',
        '• Acceso restringido a información sensible',
        '• Auditorías de seguridad regulares',
        '• Capacitación de empleados sobre protección de datos',
        'Sin embargo, no podemos garantizar una seguridad absoluta. Cualquier transmisión de datos es bajo tu propio riesgo.'
      ]
    },
    {
      id: 'section-6',
      title: 'Tus Derechos y Opciones',
      icon: <Shield className="w-6 h-6" />,
      content: [
        'Tienes los siguientes derechos respecto a tu información personal:',
        '• Derecho de Acceso: Puedes solicitar acceso a los datos personales que almacenamos sobre ti.',
        '• Derecho de Rectificación: Puedes actualizar o corregir información inexacta.',
        '• Derecho de Eliminación: Puedes solicitar la eliminación de tu cuenta y datos asociados.',
        '• Derecho de Portabilidad: Puedes solicitar una copia de tus datos en formato estructurado.',
        '• Derecho de Oposición: Puedes optar por no recibir comunicaciones de marketing.',
        'Para ejercer estos derechos, contáctanos en privacy@inmores.com'
      ]
    },
    {
      id: 'section-7',
      title: 'Cookies y Tecnologías de Rastreo',
      icon: <Eye className="w-6 h-6" />,
      content: [
        'Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación:',
        '• Cookies Esenciales: Necesarias para el funcionamiento de nuestro sitio web.',
        '• Cookies de Análisis: Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio.',
        '• Cookies de Marketing: Utilizadas para mostrar publicidad relevante.',
        'Puedes controlar las cookies a través de la configuración de tu navegador. Tenga en cuenta que desactivar cookies puede afectar la funcionalidad del sitio.'
      ]
    },
    {
      id: 'section-8',
      title: 'Retención de Datos',
      icon: <FileText className="w-6 h-6" />,
      content: [
        'Retenemos tus datos personales durante el tiempo necesario para proporcionar nuestros servicios o cumplir con obligaciones legales.',
        'Específicamente:',
        '• Datos de cuenta: Hasta que cierres tu cuenta',
        '• Datos transaccionales: Durante 7 años según requisitos fiscales',
        '• Datos de marketing: Hasta que optes por no recibir comunicaciones',
        '• Registros de seguridad: Hasta 1 año',
        'Después de este período, los datos se eliminan de forma segura o se anoniman.'
      ]
    },
    {
      id: 'section-9',
      title: 'Enlaces a Terceros',
      icon: <Users className="w-6 h-6" />,
      content: [
        'Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad de estos sitios. Te recomendamos revisar sus políticas de privacidad antes de proporcionar información personal.'
      ]
    },
    {
      id: 'section-10',
      title: 'Privacidad de Menores',
      icon: <Shield className="w-6 h-6" />,
      content: [
        'Nuestros servicios no están dirigidos a menores de 18 años y no recopilamos información de menores de forma consciente. Si descobrimos que hemos recopilado información de un menor, la eliminaremos inmediatamente. Si crees que hemos recopilado información de un menor, contáctanos en privacy@inmores.com'
      ]
    },
    {
      id: 'section-11',
      title: 'Cambios en esta Política',
      icon: <FileText className="w-6 h-6" />,
      content: [
        'Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios significativos se comunicarán por correo electrónico o mediante un aviso prominente en nuestro sitio web. Tu uso continuado de nuestros servicios después de cambios constituye tu aceptación de la política actualizada.'
      ]
    },
    /*DATOS A CAMBIAR POR EL USUARIO FINAL DE LA PAGINA*/
    {
      id: 'section-12',
      title: 'Contacto',
      icon: <Mail className="w-6 h-6" />,
      content: [
        'Si tienes preguntas, inquietudes o solicitudes sobre esta Política de Privacidad, puedes contactarnos:',
        'Email: ejemplo@inmores.com',
        'Teléfono: +34 (XXX) XXX-XXXX',
        'Dirección: InmoRes ejemplo, Santa Cruz de Tenerife',
        'Responderemos a tus consultas en un plazo de 30 días hábiles.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-[#FFEDD4] to-white">
      {/* Hero Section */}
      <section className="bg-[#FFBF78] text-center py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FF7D29] mb-4">Políticas de Privacidad</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Tu privacidad es importante para nosotros. Conoce cómo protegemos tus datos personales.
          </p>
        </div>
      </section>

      {/* Contenido*/}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Contenido Actualizado */}
        <div className="mb-8 p-4 bg-[#FFEDD4] rounded-lg border-l-4 border-[#FF7D29]">
          <p className="text-gray-700">
            <span className="font-semibold text-[#FF7D29]">Última actualización:</span> 14 de Mayo de 2026
          </p>
        </div>

        {/* Secciones */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Encabezado de la Sección */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-linear-to-r from-[#FFEDD4] to-[#FFBF78] hover:from-[#FFBF78] hover:to-[#FF7D29] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="text-[#FF7D29]">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-left">
                    {section.title}
                  </h3>
                </div>
                {expandedSections.has(section.id) ? (
                  <ChevronUp className="w-6 h-6 text-gray-700 shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-700 shrink-0" />
                )}
              </button>

              {/* Contenido de la Sección */}
              {expandedSections.has(section.id) && (
                <div className="px-6 py-6 bg-white">
                  <div className="space-y-4">
                    {section.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-700 leading-relaxed text-justify"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sección de Contacto */}
        <div className="mt-12 p-8 bg-linear-to-r from-[#FF7D29] to-[#FFBF78] rounded-lg text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Mail className="w-6 h-6" />
            ¿Preguntas sobre tu privacidad?
          </h3>
          <p className="mb-6 text-lg">
            Si tienes alguna pregunta o inquietud sobre nuestras prácticas de privacidad, no dudes en contactarnos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="mailto:ejemplo@inmores.com"
              className="bg-white text-[#FF7D29] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFEDD4] transition-colors text-center"
            >
              Enviar Email
            </a>
            <a
              href="/Contacto"
              className="bg-white bg-opacity-20 text-black px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all text-center border-2 border-white"
            >
              Ver Contacto
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
