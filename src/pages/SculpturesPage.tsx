import { useState } from "react";
import { useSculptures } from "../hooks/useSculptures";
import SculptureMap from "../api/SculptureMap";
import { LoadingSpinner } from "../utils/LoadingSpinner";

export default function SculpturesPage() {
  const { data, loading, error } = useSculptures();

  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(12);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Failed to load sculpture data.
      </div>
    );
  }

  // 🔎 FILTER DATA
  const filtered = data.filter((s) => {
    const q = search.toLowerCase();

    return (
      s.navn?.toLowerCase().includes(q) ||
      s.kunstner?.toLowerCase().includes(q) ||
      s.plassering?.toLowerCase().includes(q)
    );
  });

  const visible = filtered.slice(0, limit);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        {/* HERO */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">
            🎨 Public Art & Sculptures in Stavanger
          </h1>

          <p className="text-slate-300 max-w-2xl leading-relaxed">
            Explore outdoor sculptures across Stavanger — from historic
            monuments to modern public art installations placed in everyday city
            spaces.
          </p>
        </header>

        {/* MAP */}
        <section className="rounded-2xl overflow-hidden border border-slate-800">
          <SculptureMap data={filtered} />
        </section>
        {/* SEARCH BAR */}
        <section>
          <label htmlFor="search" className="block text-sm text-slate-400 mb-2">
            Search
          </label>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setLimit(12);
            }}
            id="search"
            placeholder="Search by name, artist or location..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-slate-600"
          />

          <p className="text-xs text-slate-500 mt-2">
            Showing {visible.length} of {filtered.length} sculptures
          </p>
        </section>

        {/* LIST */}
        <section className="grid md:grid-cols-2 gap-4">
          {visible.map((s, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-600 transition"
            >
              <h3 className="font-semibold text-white">{s.navn}</h3>

              <p className="text-slate-400 text-sm mt-1">
                {s.kunstner} • {s.årstall}
              </p>

              <p className="text-slate-500 text-xs mt-2">📍 {s.plassering}</p>
            </div>
          ))}
        </section>

        {/* LOAD MORE */}
        {visible.length < filtered.length && (
          <div className="text-center">
            <button
              onClick={() => setLimit((prev) => prev + 12)}
              className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-xl text-sm hover:bg-slate-800 transition"
            >
              Load more
            </button>
          </div>
        )}

        {/* FOOTER (FIXED - your previous one was wrong data) */}
        <footer className="text-xs text-slate-500 border-t border-slate-800 pt-4 space-y-1">
          <p>Source: Stavanger Municipality Open Data Platform</p>
          <p>Dataset: Public Art & Sculpture Registry</p>
          <p className="break-all">
            https://opencom.no/dataset/afae0c45-1c59-44b5-a433-a6c61da2cb2e
          </p>
        </footer>
      </div>
    </div>
  );
}
// // pages/SculpturesPage.tsx

// import { useSculptures } from "../hooks/useSculptures";
// import SculptureMap from "../api/SculptureMap";

// export default function SculpturesPage() {
//   const { data, loading, error } = useSculptures();

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
//         Loading public art in Stavanger...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
//         Failed to load sculpture data.
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-950 text-white">
//       <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
//         {/* HERO */}
//         <header className="space-y-4">
//           <h1 className="text-4xl font-bold">
//             🎨 Public Art & Sculptures in Stavanger
//           </h1>

//           <p className="text-slate-300 max-w-2xl leading-relaxed">
//             Explore outdoor sculptures across Stavanger — from historic
//             monuments to modern public art installations. Each point on the map
//             represents real cultural heritage placed in everyday urban spaces.
//           </p>
//         </header>

//         {/* MAP */}
//         <section className="rounded-2xl overflow-hidden border border-slate-800">
//           <SculptureMap data={data} />
//         </section>

//         {/* LIST VIEW (backup for UX) */}
//         <section className="grid md:grid-cols-2 gap-4">
//           {data.map((s, i) => (
//             <div
//               key={i}
//               className="bg-slate-900 border border-slate-800 rounded-xl p-4"
//             >
//               <h3 className="font-semibold">{s.navn}</h3>

//               <p className="text-slate-400 text-sm mt-1">
//                 {s.kunstner} • {s.årstall}
//               </p>

//               <p className="text-slate-500 text-xs mt-2">📍 {s.plassering}</p>
//             </div>
//           ))}
//         </section>

//         {/* CONTEXT */}
//         <footer className="text-xs text-slate-500 border-t border-slate-800 pt-4 space-y-1">
//           <p>Source: Stavanger Municipality Open Data Platform</p>

//           <p>Dataset: Real-time Parking Availability (IoT Sensors)</p>

//           <p className="break-all">
//             URL: https://opencom.no/dataset/parking-stavanger
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// }
