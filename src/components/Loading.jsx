function Loading({ label = 'Loading…' }) {
  return (
    <div className="grid min-h-64 place-items-center" role="status" aria-live="polite">
      <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600 dark:border-indigo-900 dark:border-t-indigo-400" />
        {label}
      </div>
    </div>
  )
}

export default Loading
