import { useEffect, useMemo, useRef, useState } from 'react'
import SearchFilter from '../components/SearchFilter'
import CategoryFilter from '../components/CategoryFilter'
import { useCart } from '../hooks/useCart'
import ProductCard from '../components/ProductCard'

function ProductList() {
  const { products } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const searchInputRef = useRef(null)

  useEffect(() => {
    const focusSearch = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        searchInputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', focusSearch)
    return () => window.removeEventListener('keydown', focusSearch)
  }, [])

  const displayedProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return products.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
      const matchesQuery = !query || `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(query)

      return matchesCategory && matchesQuery
    })
  }, [products, searchQuery, selectedCategory])

  return (
    <main className="bg-slate-50 px-4 py-10 dark:bg-slate-950 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Curated tech
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Browse Products
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Find the gear that fits your setup.
          </p>
        </div>

        <div className="mt-8">
          <SearchFilter value={searchQuery} onChange={setSearchQuery} inputRef={searchInputRef} />
        </div>

        <div className="mt-6">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="mt-10 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {selectedCategory === 'All' ? 'Featured Gear' : selectedCategory}
          </h2>

          <span className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {displayedProducts.length} {displayedProducts.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {displayedProducts.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">No products found</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Try a different search or category.</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default ProductList
