import { usePopulationData } from "../hooks/usePopulationData";
import type { PopulationRecord } from "../api/populationMapper";
import { LoadingSpinner } from "../utils/LoadingSpinner";

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
      <p className="text-slate-500 text-xs">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}

export default function PopulationPage() {
  const { data, loading, error } = usePopulationData();

  if (loading) return <LoadingSpinner />;

  if (error) return <div className="text-red-400 p-6">Error: {error}</div>;

  const latest = Object.values(
    data.reduce<Record<string, PopulationRecord>>((acc, item) => {
      const ex = acc[item.district];

      if (!ex || ex.date < item.date) {
        acc[item.district] = item;
      }

      return acc;
    }, {}),
  );

  const total = latest.reduce((s, x) => s + x.population, 0);
  const biggest = [...latest].sort((a, b) => b.population - a.population)[0];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* HERO */}
        <header>
          <h1 className="text-3xl font-bold">🏙️ Stavanger Population</h1>
          <p className="text-slate-400 mt-2">
            Population distribution across districts in Stavanger.
          </p>
        </header>

        {/* HERO CARD */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-400 text-sm">Total population</p>
          <p className="text-4xl font-bold mt-1">{total}</p>
          <p className="text-slate-500 text-sm mt-2">
            Largest district: {biggest?.district}
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Stat label="Districts" value={latest.length} />
          <Stat label="Largest" value={biggest?.district} />
          <Stat label="Total" value={total} />
        </div>

        {/* LIST */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h2 className="font-semibold mb-3">By district</h2>

          <div className="space-y-2">
            {latest.map((x) => (
              <div
                key={x.district}
                className="flex justify-between border-b border-slate-800 py-2 text-sm"
              >
                <span>{x.district}</span>
                <span>{x.population}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-xs text-slate-500 border-t border-slate-800 pt-4 space-y-1">
          <p>Source: Opencom.no — NLOD</p>
          <p>Dataset: Stavanger population by district</p>
          <p className="break-all">URL: (dataset link here)</p>
        </footer>
      </div>
    </div>
  );
}
