import { CheckCircle2, PackageCheck } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { formatCurrency } from '../utils/formatCurrency'

function OrderConfirmation() {
  const { state } = useLocation()
  const order = state?.order

  if (!order) {
    return (
      <main className="bg-slate-50 px-4 py-16 dark:bg-slate-950 sm:px-6">
        <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">No recent order</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Your confirmation will appear here after checkout.</p>
          <Link to="/" className="mt-7 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">Browse products</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-slate-50 px-4 py-14 dark:bg-slate-950 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-12">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
          <CheckCircle2 size={34} />
        </span>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">Order confirmed</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Thanks, {order.customerName}!</h1>
        <p className="mx-auto mt-4 max-w-md leading-7 text-slate-600 dark:text-slate-400">
          We’ve received your order and will send a delivery update to your email shortly.
        </p>

        <div className="mt-8 grid gap-4 rounded-2xl bg-slate-50 p-5 text-left dark:bg-slate-800/60 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Order number</p>
            <p className="mt-1 font-bold text-slate-900 dark:text-white">{order.number}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Order total</p>
            <p className="mt-1 font-bold text-slate-900 dark:text-white">{formatCurrency(order.total)}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Delivery address</p>
            <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">{order.deliveryAddress}</p>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <PackageCheck size={18} className="text-indigo-600 dark:text-indigo-400" />
          {order.itemCount} {order.itemCount === 1 ? 'item' : 'items'} will ship in 2–4 business days.
        </div>

        <Link to="/" className="mt-8 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700">
          Continue shopping
        </Link>
      </div>
    </main>
  )
}

export default OrderConfirmation
