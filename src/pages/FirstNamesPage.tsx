import { useState, useMemo } from "react";
import { useFirstNames } from "../hooks/useFirstNames";
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
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}

export default function FirstNamesPage() {
  const { data, loading, error } = useFirstNames();
  const [search, setSearch] = useState("");

  const processed = useMemo(() => {
    if (!data) return null;

    const sorted = [...data].sort((a, b) => b.count - a.count);

    const filtered = sorted.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );

    const displayed = search ? filtered : sorted.slice(0, 100);

    const mostCommon = sorted[0];

    const total = data.reduce((sum, item) => sum + item.count, 0);

    return {
      sorted,
      filtered,
      displayed,
      mostCommon,
      total,
    };
  }, [data, search]);

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Error: {error}
      </div>
    );

  if (!data || !processed)
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        No data available
      </div>
    );

  const { displayed, mostCommon, total } = processed;

  const dominant =
    mostCommon?.name && mostCommon.name !== "ANDRE NAVN"
      ? mostCommon.name
      : "Other names category";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* HERO */}
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">📛 First Names in Stavanger</h1>

          <p className="text-slate-400 max-w-2xl">
            Distribution of registered first names in Stavanger based on
            official population registry data.
          </p>

          <p className="text-sm text-slate-500">
            📊 Most common name: <b>{dominant}</b>
          </p>
        </header>

        {/* HERO CARD */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-slate-400 text-sm">Total registrations</p>
              <p className="text-4xl font-bold mt-1">
                {total.toLocaleString()}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <Mini label="Top name" value={mostCommon?.count ?? 0} />
              <Mini label="Unique names" value={data.length} />
              <Mini label="Top 100 view" value={Math.min(100, data.length)} />
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Stat
            label="Most common name"
            value={
              mostCommon?.name === "ANDRE NAVN"
                ? "Other names"
                : mostCommon?.name ?? "-"
            }
          />

          <Stat
            label="People with top name"
            value={(mostCommon?.count ?? 0).toLocaleString()}
          />

          <Stat label="Total registrations" value={total.toLocaleString()} />
        </div>

        {/* SEARCH TOOL */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h2 className="font-semibold mb-3">🔎 Search names</h2>

          <label htmlFor="firstNameSearch" className="sr-only">
            Search by first name
          </label>
          <input
            type="text"
            id="firstNameSearch"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search first name..."
            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 outline-none focus:border-sky-500"
          />

          <p className="text-sm text-slate-500 mt-3">
            {search
              ? `${displayed.length} results found`
              : "Showing top 100 most common names"}
          </p>
        </section>

        {/* LIST */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h2 className="font-semibold mb-3">
            {search ? "Search results" : "Top 100 names"}
          </h2>

          <div className="divide-y divide-slate-800 text-sm">
            {displayed.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex justify-between py-2 text-slate-300"
              >
                <div className="flex gap-3">
                  {!search && (
                    <span className="text-slate-500 w-8">#{index + 1}</span>
                  )}

                  <span>
                    {item.name === "ANDRE NAVN" ? "Other names" : item.name}
                  </span>
                </div>

                <span className="font-semibold">
                  {item.count.toLocaleString()}
                </span>
              </div>
            ))}

            {displayed.length === 0 && (
              <p className="text-slate-500 py-4">No names found</p>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-xs text-slate-500 border-t border-slate-800 pt-4 space-y-1">
          <p>
            Source: Opencom.no — Norwegian Licence for Open Government Data
            (NLOD)
          </p>

          <p>Dataset: Stavanger First Names Registry</p>

          <p className="break-all">
            URL:
            https://opencom.no/dataset/85ee1fa5-4ba9-4ffa-b218-e7e19c5f3f4f/resource/b16044f7-30fa-465c-97c4-b34b8446693d/download/json-dagligfolkeregisterdatafornavn.json
          </p>
        </footer>
      </div>
    </div>
  );
}
