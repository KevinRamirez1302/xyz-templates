interface MenuItem {
  name: string
  description: string
  price: number
}

const MENU_ITEMS: Record<string, MenuItem[]> = {
  appetizers: [
    {
      name: 'Bruschetta al Pomodoro',
      description: 'Pan tostado con tomate fresco, albahaca y aceite de oliva',
      price: 8.99,
    },
    {
      name: 'Mozzarella di Bufala',
      description: 'Queso fresco con tomate y albahaca',
      price: 12.99,
    },
    {
      name: 'Calamares a la Romana',
      description: 'Calamares fritos crujientes con salsa de limón',
      price: 10.99,
    },
  ],
  pasta: [
    {
      name: 'Pasta a la Carbonara',
      description: 'Receta tradicional romana con panceta y huevo',
      price: 14.99,
    },
    {
      name: 'Lasaña a la Boloñesa',
      description: 'Capas de pasta con carne molida y salsa béchamel',
      price: 15.99,
    },
    {
      name: 'Penne al Vodka',
      description: 'Penne en salsa de vodka y tomate cremosa',
      price: 14.99,
    },
  ],
  main: [
    {
      name: 'Osso Buco',
      description: 'Codillo de ternera brasado con verduras y vino blanco',
      price: 26.99,
    },
    {
      name: 'Saltimbocca a la Romana',
      description: 'Filete de ternera con jamón de Parma y salvia',
      price: 24.99,
    },
    {
      name: 'Dorada a la Sal',
      description: 'Pescado fresco preparado en costra de sal',
      price: 22.99,
    },
  ],
}

export function Menu() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-primary-50">
      <div className="container-custom">
        <h2 className="section-title">Nuestro Menú</h2>

        <div className="space-y-12">
          {/* Appetizers */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-8 text-center">
              Antipasti
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {MENU_ITEMS.appetizers.map((item) => (
                <div
                  key={item.name}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                  <p className="text-primary-600 font-bold text-lg">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pasta */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-8 text-center">
              Pastas
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {MENU_ITEMS.pasta.map((item) => (
                <div
                  key={item.name}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                  <p className="text-primary-600 font-bold text-lg">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Courses */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-8 text-center">
              Platos Principales
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {MENU_ITEMS.main.map((item) => (
                <div
                  key={item.name}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                  <p className="text-primary-600 font-bold text-lg">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
