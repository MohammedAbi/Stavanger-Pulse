import { useSolvbergetData } from "../hooks/useSolvbergetData";

function Mini({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <p className="text-slate-500 text-xs">{label}</p>
      <p className="font-semibold">{value.toLocaleString()}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
      <p className="text-slate-500 text-xs">{label}</p>
      <p className="text-2xl font-bold mt-1">{value.toLocaleString()}</p>
    </div>
  );
}

export default function SolvbergetPage() {
  const { stats, peak, loading, error } = useSolvbergetData();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="animate-pulse">Loading Sølvberget insights...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Error: {error}
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        No data available
      </div>
    );
  }

  const dominant =
    stats.main >= stats.back &&
    stats.main >= stats.side &&
    stats.main >= stats.stairs
      ? "Main entrance"
      : "Other entrances";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* HERO */}
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">📚 Sølvberget Activity</h1>

          <p className="text-slate-400 max-w-2xl">
            Live visitor movement inside Sølvberget cultural center based on
            entrance flow data from the last 24 hours.
          </p>

          <p className="text-sm text-slate-500">
            📊 Dominant flow: <b>{dominant}</b>
          </p>
        </header>

        {/* HERO CARD */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-slate-400 text-sm">Total visitors (24h)</p>
              <p className="text-4xl font-bold mt-1">
                {stats.total.toLocaleString()}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 text-sm">
              <Mini label="Main" value={stats.main} />
              <Mini label="Back" value={stats.back} />
              <Mini label="Side" value={stats.side} />
              <Mini label="Stairs" value={stats.stairs} />
            </div>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat label="Main entrance" value={stats.main} />
          <Stat label="Back entrance" value={stats.back} />
          <Stat label="Side entrance" value={stats.side} />
          <Stat label="Stairway" value={stats.stairs} />
        </div>

        {/* PEAK */}
        {peak && (
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h2 className="font-semibold mb-3">⏰ Peak activity</h2>

            <div className="space-y-2 text-sm text-slate-300">
              <p>Main entrance: {peak.main}</p>
              <p>Back entrance: {peak.back}</p>
              <p>Side entrance: {peak.side}</p>
              <p>Stairway: {peak.stairs}</p>
            </div>
          </section>
        )}

        {/* EXPLANATION */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h2 className="font-semibold mb-3">📘 What this shows</h2>

          <div className="space-y-2 text-sm text-slate-300">
            <p>🚪 Main entrance — primary visitor flow</p>
            <p>🚪 Back entrance — secondary access point</p>
            <p>🚪 Side entrance — side traffic movement</p>
            <p>🪜 Stairway — internal movement between floors</p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-xs text-slate-500 border-t border-slate-800 pt-4 space-y-1">
          <p>Source: Stavanger Municipality Open Data</p>

          <p>Dataset: Sølvberget Visitor Flow (24h Activity Tracking)</p>

          <p>Location: Sølvberggata 2, Stavanger, Norway</p>
        </footer>
      </div>
    </div>
  );
}
