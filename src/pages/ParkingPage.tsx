import { useParkingData } from "../hooks/useParkingData";
import MapView from "../components/dashboard/MapView";
import ParkingGrid from "../components/dashboard/ParkingGrid";
import InsightsPanel from "../components/dashboard/InsightsPanel";
import { LoadingSpinner } from "../utils/LoadingSpinner";

export default function ParkingPage() {
  const { lots, loading, error } = useParkingData();

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Error: {error}
      </div>
    );
  }

  const totalLots = lots?.length ?? 0;
  const available = lots?.filter((l) => l.available > 0).length ?? 0;
  const full = totalLots - available;

  const occupancyRate =
    totalLots > 0 ? Math.round((full / totalLots) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* HERO */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h1 className="text-3xl font-bold">
            🅿️ Stavanger Parking & Mobility
          </h1>

          <p className="text-slate-300 mt-2 leading-relaxed">
            Live overview of parking availability across Stavanger city. This
            dashboard helps residents and tourists quickly find parking spots
            near downtown, cultural areas, and transport hubs.
          </p>

          <p className="text-slate-400 text-sm mt-3">
            📍 Data source: Stavanger Municipality Open Data — real-time sensor
            feeds
          </p>
        </section>

        {/* QUICK STATS */}
        <section className="grid grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-500 text-xs">Total parking lots</p>
            <p className="text-2xl font-bold">{totalLots}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-500 text-xs">Available</p>
            <p className="text-2xl font-bold text-green-400">{available}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-500 text-xs">Occupancy rate</p>
            <p className="text-2xl font-bold text-orange-300">
              {occupancyRate}%
            </p>
          </div>
        </section>

        {/* MAP (FEATURE HERO LIKE SOLVBERGET STYLE) */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden h-[420px]">
          <MapView lots={lots} />
        </section>

        {/* INSIGHT PANEL */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">📊 Live insight</h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            Parking availability in Stavanger is typically lowest during weekday
            mornings and weekends in the city center. Tourists often experience
            higher demand near attractions such as Old Stavanger, the harbour
            area, and Sølvberget cultural centre.
          </p>

          <p className="text-slate-400 text-xs mt-3">
            This data helps visualize urban mobility patterns and supports
            smarter city planning.
          </p>
        </section>

        {/* GRID SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ParkingGrid lots={lots} />
          </div>

          <div>
            <InsightsPanel lots={lots} />
          </div>
        </section>

        {/* ABOUT THE CITY CONTEXT */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold">🌍 About Stavanger Mobility</h2>

          <p className="text-slate-300 text-sm mt-2 leading-relaxed">
            Stavanger is a compact coastal city where most attractions are
            within walking distance. Parking data is especially useful for
            visitors going to:
          </p>

          <ul className="text-slate-300 text-sm mt-3 space-y-1">
            <li>📚 Sølvberget Library & Cultural Centre</li>
            <li>🏛️ Old Stavanger (Gamle Stavanger)</li>
            <li>🌊 Harbour promenade & museums</li>
            <li>🍽️ City centre restaurants and Fargegaten</li>
          </ul>
        </section>

        {/* FOOTER */}
        <footer className="text-xs text-slate-500 border-t border-slate-800 pt-4 space-y-1">
          <p>Source: Stavanger Municipality Open Data Platform</p>

          <p>Dataset: Real-time Parking Availability (IoT Sensors)</p>

          <p className="break-all">
            URL: https://opencom.no/dataset/parking-stavanger
          </p>
        </footer>
      </div>
    </div>
  );
}
