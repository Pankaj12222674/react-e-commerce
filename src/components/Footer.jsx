import { Heart, ShieldCheck, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="text-lg font-extrabold text-slate-900 dark:text-white">
            WDM <span className="text-indigo-600 dark:text-indigo-400">Store</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">
            A simple, thoughtful place to discover the technology that powers your everyday work and play.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">Shop</h2>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">All products</Link>
            <Link to="/cart" className="text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">Your cart</Link>
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
          <p className="flex items-center gap-2"><Truck size={16} className="text-indigo-600 dark:text-indigo-400" /> Free delivery over ₹50,000</p>
          <p className="flex items-center gap-2"><ShieldCheck size={16} className="text-indigo-600 dark:text-indigo-400" /> Secure checkout</p>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-5 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Made with <Heart size={14} className="mx-1 inline text-rose-500" fill="currentColor" /> for better shopping.
      </div>
    </footer>
  )
}

export default Footer
