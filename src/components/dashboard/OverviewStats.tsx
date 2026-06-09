import type { ParkingLot } from "../../api/parkingMapper";

type Props = {
  lots: ParkingLot[];
};

function StatCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
      <p className="text-sm text-slate-400">{title}</p>

      <p className="text-3xl font-bold mt-2 text-white">{value}</p>
    </div>
  );
}

export default function OverviewStats({ lots }: Props) {
  const totalAvailable = lots.reduce((sum, lot) => sum + lot.available, 0);

  const fullCount = lots.filter((l) => l.isFull).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard title="Available Spots" value={totalAvailable} />
      <StatCard title="Parking Garages" value={lots.length} />
      <StatCard title="Full Garages" value={fullCount} />
    </div>
  );
}
