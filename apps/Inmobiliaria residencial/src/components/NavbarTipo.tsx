import { useState } from 'react';
import { Button } from "./Button.tsx";

interface NavbarTipoProps {
  onCategoryChange?: (category: 'comprar' | 'alquilar' | null) => void;
  onSubcategoryChange?: (subcategory: string | null) => void;
}

export const NavbarTipo = ({ onCategoryChange, onSubcategoryChange }: NavbarTipoProps) => {
  const [activeCategory, setActiveCategory] = useState<'comprar' | 'alquilar' | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const subcategories = ['Lujo', 'Costa', 'Urbano', 'Rústico'];

  const handleCategoryClick = (category: 'comprar' | 'alquilar') => {
    const newCategory = activeCategory === category ? null : category;
    setActiveCategory(newCategory);
    setActiveSubcategory(null);
    onCategoryChange?.(newCategory);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    const newSubcategory = activeSubcategory === subcategory ? null : subcategory;
    setActiveSubcategory(newSubcategory);
    onSubcategoryChange?.(newSubcategory);
  };

  return (
    <>
      {/* Barra de navegación de categorías */}
      <nav className="bg-gradient-to-r from-[#FFBF78] to-[#FF7D29] sticky top-16 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4">
            
            {/* Subcategorías - Visible solo cuando hay categoría activa */}
            <ul className={`flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 transition-all duration-300 ${
              activeCategory ? 'opacity-100 visible' : 'opacity-50'
            }`}>
              {subcategories.map((subcategory) => (
                <li key={subcategory}>
                  <button
                    onClick={() => handleSubcategoryClick(subcategory)}
                    className={`
                      px-4 py-2 rounded-lg font-semibold text-sm md:text-base transition-all duration-300
                      ${
                        activeSubcategory === subcategory
                          ? 'bg-slate-900 text-white shadow-lg scale-105'
                          : 'bg-white text-[#FF7D29] hover:bg-[#FEFFD2] hover:shadow-md'
                      }
                    `}
                  >
                    {subcategory}
                  </button>
                </li>
              ))}
            </ul>

            {/* Botones de Categoría Principal */}
            <div className="flex gap-3 md:gap-4">
              <Button 
                name="Alquilar" 
                color={activeCategory === 'alquilar' ? 'red' : 'yellow'}
                onClick={() => handleCategoryClick('alquilar')}
                className={activeCategory === 'alquilar' ? 'ring-2 ring-white' : ''}
              />
              <Button 
                name="Comprar" 
                color={activeCategory === 'comprar' ? 'black' : 'yellow'}
                onClick={() => handleCategoryClick('comprar')}
                className={activeCategory === 'comprar' ? 'ring-2 ring-white' : ''}
              />
            </div>
          </div>

          {/* Indicador de filtros activos */}
          {(activeCategory || activeSubcategory) && (
            <div className="pb-3 text-center md:text-left">
              <span className="inline-block bg-white text-[#FF7D29] px-4 py-1.5 rounded-full text-sm font-semibold">
                Filtros: 
                <span className="ml-2 font-bold">
                  {activeCategory && `${activeCategory}`}
                  {activeSubcategory && ` - ${activeSubcategory}`}
                </span>
              </span>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};