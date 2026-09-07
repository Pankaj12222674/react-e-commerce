import { ArrowLeft, Check, ShoppingCart, Truck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'

function ProductDetails() {
  const { id } = useParams()
  const { addToCart, products } = useCart()
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <main className="bg-slate-50 px-4 py-16 dark:bg-slate-950 sm:px-6">
        <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Product not found</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">This product may no longer be available.</p>
          <Link to="/" className="mt-6 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">
            Back to products
          </Link>
        </div>
      </main>
    )
  }

  const features = [
    'Carefully selected and quality checked',
    'Secure checkout with clear pricing',
    'Free delivery on orders above ₹50,000',
  ]

  return (
    <main className="bg-slate-50 px-4 py-8 dark:bg-slate-950 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
        >
          <ArrowLeft size={17} /> Back to products
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:ring-slate-800">
            <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
          </div>

          <section className="py-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
              {product.category}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              {product.description}
            </p>

            <p className="mt-7 text-3xl font-bold text-slate-900 dark:text-white">
              {formatCurrency(product.price)}
            </p>

            <button
              type="button"
              onClick={() => addToCart(product)}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:w-auto dark:focus-visible:ring-offset-slate-950"
            >
              <ShoppingCart size={19} /> Add to cart
            </button>

            <ul className="mt-8 space-y-3 border-t border-slate-200 pt-7 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-indigo-50 p-4 text-sm text-indigo-950 dark:bg-indigo-500/10 dark:text-indigo-100">
              <Truck size={19} className="shrink-0 text-indigo-600 dark:text-indigo-400" />
              Ships in 2–4 business days.
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default ProductDetails
