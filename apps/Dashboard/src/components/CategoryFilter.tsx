import { categories, type Category } from '../types/template'

interface CategoryFilterProps {
  value: Category | 'Todas'
  onChange: (value: Category | 'Todas') => void
}

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  const options: (Category | 'Todas')[] = ['Todas', ...categories]

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`rounded-lg px-4 py-2 text-sm font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${
            value === option
              ? 'bg-zinc-900 text-white shadow-sm'
              : 'border border-zinc-200/80 bg-white/60 text-zinc-600 hover:border-primary/50 hover:text-primary hover:bg-white'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
