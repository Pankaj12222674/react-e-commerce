import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="bg-slate-50 px-4 py-16 dark:bg-slate-950 sm:px-6">
      <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">404</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Page not found</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">The page you’re looking for doesn’t exist or has moved.</p>
        <Link to="/" className="mt-7 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">Return to store</Link>
      </div>
    </main>
  )
}

export default NotFound
