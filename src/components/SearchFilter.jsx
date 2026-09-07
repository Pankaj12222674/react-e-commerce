import { Search } from 'lucide-react'

function SearchFilter({ value, onChange, inputRef }) {
  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="group relative flex h-12 w-full items-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-center pl-4 pr-3 text-slate-400 transition-colors duration-300 group-focus-within:text-indigo-400">
          <Search size={20} strokeWidth={2.5} />
        </div>

        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search products..."
          aria-label="Search products"
          className="h-full w-full bg-transparent pr-20 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400 sm:text-base dark:text-slate-200 dark:placeholder:text-slate-500"
        />

        <div className="pointer-events-none absolute right-3 hidden items-center gap-1 transition-opacity duration-200 group-focus-within:opacity-0 sm:flex">
          <kbd className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-800">
            Ctrl
          </kbd>
          <kbd className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-800">
            K
          </kbd>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter
