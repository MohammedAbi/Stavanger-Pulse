import { useTideData } from "../hooks/useTideData";
import { LoadingSpinner } from "../utils/LoadingSpinner";

export default function TidePage() {
  const { points, summary, loading, error } = useTideData();

  if (loading) return <LoadingSpinner />;

  if (error) return <div className="text-red-400 p-6">{error}</div>;

  if (!summary)
    return <div className="text-white p-6">No tide data available</div>;

  const latest = points.at(-1);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* HERO */}
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">🌊 Stavanger Tide</h1>
          <p className="text-slate-400 max-w-2xl">
            Real-time water levels, predicted astronomical tide, and short-term
            navigation forecasts for Stavanger harbor.
          </p>
        </header>

        {/* MAIN STATUS (HERO CARD) */}
        {latest && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-slate-400 text-sm">Latest reading</p>
                <p className="text-4xl font-bold mt-1">
                  🌊 {latest.observed ?? 0} cm
                </p>
                <p className="text-slate-500 text-sm mt-1">
                  {latest.time.toLocaleString()}
                </p>
              </div>

              {/* mini breakdown */}
              <div className="grid grid-cols-3 gap-4 text-sm">
                <Mini label="Water" value={latest.observed} />
                <Mini label="Tide" value={latest.predicted} />
                <Mini label="Forecast" value={latest.forecast} />
              </div>
            </div>
          </div>
        )}

        {/* SUMMARY STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat label="Highest" value={`${summary.highest} cm`} />
          <Stat label="Lowest" value={`${summary.lowest} cm`} />
          <Stat
            label="Latest observed"
            value={`${summary.latestObserved ?? 0} cm`}
          />
          <Stat label="Data points" value={`${summary.dataPoints}`} />
        </div>

        {/* EXPLANATION */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h2 className="font-semibold mb-3">📘 What this data means</h2>

          <div className="space-y-3 text-sm text-slate-300">
            <p>
              🌊 <b>Water level</b> — actual measured sea height at the station
            </p>
            <p>
              🌙 <b>Predicted tide</b> — astronomical tide model based on moon &
              gravity
            </p>
            <p>
              🔮 <b>Forecast</b> — short-term estimate combining model + recent
              observations
            </p>
          </div>
        </section>

        {/* RECENT DATA (TABLE STYLE = MUCH CLEANER) */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h2 className="font-semibold mb-3">🕒 Recent changes</h2>

          <div className="divide-y divide-slate-800 text-sm">
            {points
              .slice(-12)
              .reverse()
              .map((p, i) => (
                <div
                  key={i}
                  className="flex justify-between py-2 text-slate-300"
                >
                  <span className="text-slate-400">
                    {p.time.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>

                  <span className="flex gap-3 text-xs">
                    <span>🌊 {p.observed ?? 0}</span>
                    <span>🌙 {p.predicted ?? 0}</span>
                    <span>🔮 {p.forecast ?? 0}</span>
                  </span>
                </div>
              ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-xs text-slate-500 border-t border-slate-800 pt-4 space-y-1">
          <p>
            Source: Opencom.no — Norwegian Licence for Open Government Data
            (NLOD)
          </p>

          <p>Dataset: Vannstand og tidevann Stavanger — Kartverket</p>

          <p>
            URL:
            https://opencom.no/dataset/946cba08-41b6-4d12-8a13-b4ab6bcfd916/resource/adabf909-e8a8-43d5-94c5-fb42abe38d8a/download/stavanger-vannstand-kartverket.json
          </p>
        </footer>
      </div>
    </div>
  );
}

/* HERO MINI BLOCK */
function Mini({ label, value }: { label: string; value: number | null }) {
  return (
    <div className="text-center">
      <p className="text-slate-500 text-xs">{label}</p>
      <p className="font-semibold">{value ?? 0} cm</p>
    </div>
  );
}

/* STAT CARD */
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
      <p className="text-slate-500 text-xs">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}
