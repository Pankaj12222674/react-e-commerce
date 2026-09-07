import { House, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

function Navbar() {
  const { cartCount } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3 rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <span className="flex rounded-xl bg-indigo-50 p-2 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-md dark:bg-indigo-500/10 dark:text-indigo-400">
            <House size={23} strokeWidth={2.5} />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
            WDM{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Store
            </span>
          </span>
        </Link>

        <nav className="flex items-center" aria-label="Primary navigation">
          <Link
            to="/cart"
            aria-label={`Shopping cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
            className="group relative flex items-center justify-center rounded-full p-2.5 text-slate-600 transition-all hover:bg-slate-100 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
          >
            <ShoppingCart
              size={23}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid min-h-5 min-w-5 place-items-center rounded-full bg-indigo-600 px-1 text-xs font-bold text-white ring-2 ring-white dark:ring-slate-950">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
