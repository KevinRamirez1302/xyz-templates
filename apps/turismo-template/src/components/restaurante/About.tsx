export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Sobre Nosotros</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-96 rounded-lg flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1504674900152-17ba0d2b8635?auto=format&fit=crop&w=600&q=80"
              alt="Interior elegante del restaurante Trattoria Italia con mesas de madera y decoración cálida"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Desde 2010, Trattoria Italia ha sido el destino preferido para los amantes de la cocina
              italiana auténtica. Nuestro chef, formado en Toscana, trae las recetas tradicionales de su
              abuela junto con innovaciones modernas.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Utilizamos ingredientes frescos y de temporada, importados directamente desde Italia.
              Cada plato es preparado con dedicación y pasión para ofrecerte una experiencia gastronómica
              única.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-gray-700">Ingredientes 100% italianos de calidad premium</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-gray-700">Chef especializado en cocina toscana</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-gray-700">Ambiente cálido y acogedor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-gray-700">Servicio atento y profesional</span>
              </li>
            </ul>
            <a href="#menu" className="btn-primary">Explora Nuestro Menú</a>
          </div>
        </div>
      </div>
    </section>
  )
}
