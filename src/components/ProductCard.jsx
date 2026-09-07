import { ArrowUpRight, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <Link
        to={`/product/${product.id}`}
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white p-4"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {product.category}
        </span>
        <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-900 opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 min-h-14 text-lg font-semibold leading-7 text-slate-900 dark:text-white">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            {formatCurrency(product.price)}
          </span>

          <button
            type="button"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-indigo-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95 dark:focus:ring-offset-slate-900"
          >
            <ShoppingCart size={19} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
