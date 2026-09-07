import { Tag } from 'lucide-react'
import { initialProducts } from '../data/product'

const availableCategories = [
  'All',
  ...new Set(initialProducts.map((product) => product.category)),
]

function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
      <div className="mr-1 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <Tag className="h-5 w-5 text-slate-600 dark:text-slate-300" />
      </div>

      {availableCategories.map((category) => {
        const isSelected = selectedCategory === category

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            aria-pressed={isSelected}
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${
              isSelected
                ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700'
                : 'border border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-indigo-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500/50 dark:hover:bg-slate-800'
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
