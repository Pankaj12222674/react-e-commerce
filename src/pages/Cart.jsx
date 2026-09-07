import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'

const DELIVERY_FEE = 499
const FREE_DELIVERY_THRESHOLD = 50000

function Cart() {
  const { cartCount, cartItems, cartSubtotal } = useCart()
  const deliveryFee = cartSubtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE
  const total = cartSubtotal + deliveryFee

  if (cartItems.length === 0) {
    return (
      <main className="bg-slate-50 px-4 py-16 dark:bg-slate-950 sm:px-6">
        <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
            <ShoppingBag size={27} />
          </span>
          <h1 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">Your cart is empty</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Add something you love and it will appear here.</p>
          <Link to="/" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700">
            Browse products <ArrowRight size={17} />
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-slate-50 px-4 py-10 dark:bg-slate-950 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">Your selection</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Shopping cart</h1>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm divide-y divide-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:divide-slate-800 sm:p-6">
            {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
          </section>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Order summary</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                <dt>Subtotal</dt>
                <dd>{formatCurrency(cartSubtotal)}</dd>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                <dt>Delivery</dt>
                <dd className={deliveryFee === 0 ? 'font-semibold text-emerald-600 dark:text-emerald-400' : ''}>
                  {deliveryFee === 0 ? 'Free' : formatCurrency(deliveryFee)}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900 dark:border-slate-800 dark:text-white">
                <dt>Total</dt>
                <dd>{formatCurrency(total)}</dd>
              </div>
            </dl>

            {deliveryFee > 0 && (
              <p className="mt-5 rounded-xl bg-indigo-50 p-3 text-xs leading-5 text-indigo-950 dark:bg-indigo-500/10 dark:text-indigo-100">
                Add {formatCurrency(FREE_DELIVERY_THRESHOLD - cartSubtotal)} more for free delivery.
              </p>
            )}

            <Link to="/checkout" className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900">
              Continue to checkout <ArrowRight size={18} />
            </Link>
            <Link to="/" className="mt-4 block text-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
              Continue shopping
            </Link>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Cart
