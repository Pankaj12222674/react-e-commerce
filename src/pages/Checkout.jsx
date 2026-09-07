import { CreditCard, LockKeyhole } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'

const DELIVERY_FEE = 499
const FREE_DELIVERY_THRESHOLD = 50000

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  postalCode: '',
}

function Checkout() {
  const navigate = useNavigate()
  const { cartItems, cartSubtotal, clearCart } = useCart()
  const [form, setForm] = useState(initialForm)
  const deliveryFee = cartSubtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE
  const total = cartSubtotal + deliveryFee

  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />
  }

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  const placeOrder = (event) => {
    event.preventDefault()

    const order = {
      number: `WDM-${Date.now().toString().slice(-6)}`,
      customerName: form.fullName.trim(),
      itemCount: cartItems.reduce((count, item) => count + item.quantity, 0),
      total,
      deliveryAddress: `${form.address}, ${form.city}, ${form.state} ${form.postalCode}`,
    }

    clearCart()
    navigate('/order-confirmation', { state: { order }, replace: true })
  }

  return (
    <main className="bg-slate-50 px-4 py-10 dark:bg-slate-950 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">Secure checkout</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Complete your order</h1>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <form onSubmit={placeOrder} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"><LockKeyhole size={18} /></span>
              <div>
                <h2 className="font-bold text-slate-900 dark:text-white">Delivery details</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">We only use these details to fulfil your order.</p>
              </div>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Full name</span>
                <input required name="fullName" value={form.fullName} onChange={updateField} autoComplete="name" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </label>
              <label>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email</span>
                <input required type="email" name="email" value={form.email} onChange={updateField} autoComplete="email" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </label>
              <label>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Phone number</span>
                <input required type="tel" name="phone" value={form.phone} onChange={updateField} autoComplete="tel" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </label>
              <label className="sm:col-span-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Address</span>
                <textarea required name="address" value={form.address} onChange={updateField} autoComplete="street-address" rows="3" className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </label>
              <label>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">City</span>
                <input required name="city" value={form.city} onChange={updateField} autoComplete="address-level2" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </label>
              <label>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">State</span>
                <input required name="state" value={form.state} onChange={updateField} autoComplete="address-level1" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </label>
              <label>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">PIN code</span>
                <input required name="postalCode" value={form.postalCode} onChange={updateField} autoComplete="postal-code" inputMode="numeric" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
              </label>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-7 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-indigo-600 dark:text-indigo-400" />
                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white">Payment</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Demo checkout — no payment will be collected.</p>
                </div>
              </div>
            </div>

            <button type="submit" className="mt-8 w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900">
              Place order · {formatCurrency(total)}
            </button>
          </form>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Order summary</h2>
            <ul className="mt-5 space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center gap-3 text-sm">
                  <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-lg bg-white ring-1 ring-slate-200 dark:ring-slate-800"><img src={item.image} alt="" className="h-full w-full object-contain" /></span>
                  <span className="min-w-0 flex-1"><span className="line-clamp-1 font-semibold text-slate-800 dark:text-slate-100">{item.name}</span><span className="text-slate-500 dark:text-slate-400">Qty {item.quantity}</span></span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{formatCurrency(item.price * item.quantity)}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm dark:border-slate-800">
              <div className="flex justify-between text-slate-600 dark:text-slate-400"><dt>Subtotal</dt><dd>{formatCurrency(cartSubtotal)}</dd></div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400"><dt>Delivery</dt><dd>{deliveryFee === 0 ? 'Free' : formatCurrency(deliveryFee)}</dd></div>
              <div className="flex justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900 dark:border-slate-800 dark:text-white"><dt>Total</dt><dd>{formatCurrency(total)}</dd></div>
            </dl>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Checkout
