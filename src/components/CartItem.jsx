import { Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart()

  return (
    <article className="flex gap-4 py-5 first:pt-0 sm:gap-6">
      <Link
        to={`/product/${item.id}`}
        className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 ring-1 ring-slate-200 dark:ring-slate-800 sm:h-28 sm:w-28"
      >
        <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
      </Link>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {item.category}
            </p>
            <Link
              to={`/product/${item.id}`}
              className="mt-1 line-clamp-2 text-base font-semibold text-slate-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 sm:text-lg"
            >
              {item.name}
            </Link>
          </div>
          <button
            type="button"
            onClick={() => removeFromCart(item.id)}
            aria-label={`Remove ${item.name} from cart`}
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 dark:hover:bg-rose-500/10"
          >
            <Trash2 size={18} />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 dark:border-slate-700 dark:bg-slate-800">
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              aria-label={`Decrease quantity of ${item.name}`}
              className="grid h-7 w-7 place-items-center rounded-md text-slate-600 hover:bg-white hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              <Minus size={15} />
            </button>
            <span className="min-w-9 text-center text-sm font-bold text-slate-900 dark:text-white">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label={`Increase quantity of ${item.name}`}
              className="grid h-7 w-7 place-items-center rounded-md text-slate-600 hover:bg-white hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              <Plus size={15} />
            </button>
          </div>
          <p className="text-lg font-bold text-slate-900 dark:text-white">
            {formatCurrency(item.price * item.quantity)}
          </p>
        </div>
      </div>
    </article>
  )
}

export default CartItem
