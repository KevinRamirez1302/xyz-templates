import { AUTHORS } from '../data/posts'
import { X, Share } from 'lucide-react'

const ICON_MAP = { twitter: X, instagram: Share, linkedin: Share }

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">

      {/* Hero */}
      <section className="text-center py-14 border-b-2 border-black mb-12">
        <p className="text-[10px] font-black uppercase tracking-widest text-[--color-brand-accent] mb-4">Quiénes somos</p>
        <h1 className="font-serif text-4xl md:text-5xl font-black text-black mb-6 leading-tight uppercase tracking-tight">
          Periodismo digital<br />con criterio propio
        </h1>
        <div className="w-16 h-0.5 bg-[--color-brand-accent] mx-auto mb-6" />
        <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-serif">
          Somos un medio digital independiente que cubre tecnología, cultura, viajes y diseño.
          Creemos en el periodismo que explica, que contextualiza y que tiene una voz clara.
        </p>
      </section>

      {/* Values */}
      <section className="py-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black">
          {[
            {
              emoji: '✍️',
              title: 'Escritura con criterio',
              desc: 'Cada artículo pasa por un proceso editorial riguroso. No publicamos por publicar; publicamos cuando tenemos algo real que aportar.',
            },
            {
              emoji: '🔍',
              title: 'Contexto antes que clics',
              desc: 'Evitamos los titulares clickbait. Preferimos que el lector entienda el por qué de una noticia a que solo conozca el qué.',
            },
            {
              emoji: '🤝',
              title: 'Independencia editorial',
              desc: 'Sin accionistas externos ni intereses corporativos. Nuestra única lealtad es con los lectores.',
            },
          ].map(v => (
            <div key={v.title} className="bg-[#fafaf7] p-8 flex flex-col">
              <div className="text-3xl mb-4">{v.emoji}</div>
              <h2 className="font-serif text-lg font-black text-[--color-brand-accent] uppercase tracking-tight mb-3">{v.title}</h2>
              <p className="text-neutral-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="py-8 mb-12 border-t border-black pt-12">
        <p className="text-[10px] font-black uppercase tracking-widest text-[--color-brand-accent] mb-2">La redacción</p>
        <h2 className="font-serif text-3xl font-black text-black uppercase tracking-tight mb-1">El equipo</h2>
        <div className="w-16 h-0.5 bg-[--color-brand-accent] mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {AUTHORS.map(author => (
            <div
              key={author.id}
              className="border border-neutral-200 hover:border-[--color-brand-accent] transition-colors p-6 bg-white text-center flex flex-col"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-neutral-200 filter grayscale hover:grayscale-0 transition-all"
              />
              <h3 className="font-serif text-lg font-black text-black mb-0.5">{author.name}</h3>
              <p className="text-[10px] text-[--color-brand-accent] font-black uppercase tracking-wider mb-3">{author.role}</p>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4 flex-1">{author.bio}</p>
              <div className="flex justify-center gap-3 pt-3 border-t border-neutral-100">
                {(Object.entries(author.social) as [keyof typeof ICON_MAP, string][]).map(([key, url]) => {
                  const Icon = ICON_MAP[key]
                  return Icon ? (
                    <a
                      key={key}
                      href={url}
                      aria-label={`${author.name} en ${key}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 border border-neutral-300 text-neutral-500 hover:border-[--color-brand-accent] hover:text-[--color-brand-accent] transition-colors"
                    >
                      <Icon size={12} />
                    </a>
                  ) : null
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact strip */}
      <section className="border-y-2 border-black py-14 text-center my-12 bg-[--color-brand-accent]">
        <h2 className="font-serif text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">¿Quieres colaborar?</h2>
        <div className="w-12 h-0.5 bg-white/50 mx-auto mb-6" />
        <p className="mb-8 text-white/80 max-w-2xl mx-auto text-sm font-serif">
          Aceptamos artículos de opinión, reportajes y ensayos de colaboradores externos.
          Si tienes una historia que contar, escríbenos a nuestro correo de redacción.
        </p>
        <a
          href="mailto:colabora@cronicadigital.es"
          className="inline-flex items-center px-8 py-3 border-2 border-white bg-white text-[--color-brand-accent] text-xs font-black uppercase tracking-wider hover:bg-transparent hover:text-white transition-colors"
        >
          colabora@cronicadigital.es
        </a>
      </section>
    </main>
  )
}
