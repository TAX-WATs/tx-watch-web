export default function ContractsLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-7 w-28 bg-zinc-800 rounded" />
          <div className="h-4 w-24 bg-zinc-800 rounded" />
        </div>
        <div className="h-9 w-32 bg-zinc-800 rounded-lg" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
            <div className="flex justify-between">
              <div className="space-y-1.5">
                <div className="h-4 w-32 bg-zinc-800 rounded" />
                <div className="h-3 w-24 bg-zinc-800 rounded" />
              </div>
              <div className="h-5 w-16 bg-zinc-800 rounded" />
            </div>
            <div className="h-3 w-20 bg-zinc-800 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}
