import { useFolkeregisterData } from "../hooks/useFolkeregisterData";
import { LoadingSpinner } from "../utils/LoadingSpinner";

function Mini({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <p className="text-slate-500 text-xs">{label}</p>
      <p className="font-semibold">{value.toLocaleString()}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
      <p className="text-slate-500 text-xs">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

export default function FolkeregisterPage() {
  const { data, loading, error } = useFolkeregisterData();

  if (loading) return <LoadingSpinner />;

  if (error) return <div className="text-red-400 p-6">{error}</div>;

  if (!data) return <div className="text-white p-6">No data available</div>;

  const dominant =
    data.singel > data.marriedOrPartner
      ? "Single residents"
      : "Married / partners";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* HERO */}
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">👥 Stavanger Population</h1>

          <p className="text-slate-400 max-w-2xl">
            Civil status distribution in Stavanger based on daily updated
            official registry data.
          </p>

          <p className="text-sm text-slate-500">
            📊 Dominant group: <b>{dominant}</b>
          </p>
        </header>

        {/* MAIN HERO CARD */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-slate-400 text-sm">Total population</p>
              <p className="text-4xl font-bold mt-1">
                {data.total.toLocaleString()}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <Mini label="Single" value={data.singel} />
              <Mini label="Couples" value={data.marriedOrPartner} />
              <Mini label="Under 18" value={data.under18} />
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat label="Single" value={data.singel.toLocaleString()} />
          <Stat
            label="Married / Partner"
            value={data.marriedOrPartner.toLocaleString()}
          />
          <Stat label="Under 18" value={data.under18.toLocaleString()} />
          <Stat label="Unknown" value={data.unknown.toLocaleString()} />
        </div>

        {/* EXPLANATION */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h2 className="font-semibold mb-3">📘 What this means</h2>

          <div className="space-y-2 text-sm text-slate-300">
            <p>👤 Single — residents not married or partnered</p>
            <p>💍 Married / Partner — legally registered couples</p>
            <p>👶 Under 18 — children and minors in population</p>
            <p>❓ Unknown — missing classification in registry</p>
          </div>
        </section>

        {/* FOOTER (CLICKABLE LIKE TIDE) */}
        <footer className="text-xs text-slate-500 border-t border-slate-800 pt-4 space-y-1">
          <p>
            Source: Opencom.no — Norwegian Licence for Open Government Data
            (NLOD)
          </p>

          <p>Dataset: Stavanger Civil Status (Folkeregister)</p>

          <p>
            URL:
            https://opencom.no/dataset/f94ca85b-827e-4228-be94-cb95b968dfe6/resource/f5df43d1-f1a4-4514-80c6-8fdbb6d803e2/download/json-dagligfolkeregisterdatasivilstand.json
          </p>
        </footer>
      </div>
    </div>
  );
}
