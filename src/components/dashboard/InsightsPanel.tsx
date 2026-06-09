import type { ParkingLot } from "../../api/parkingMapper";

type Props = {
  lots: ParkingLot[];
};

export default function InsightsPanel({ lots }: Props) {
  const mostAvailable = [...lots].sort((a, b) => b.available - a.available)[0];

  const fullLots = lots.filter((lot) => lot.isFull);

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-white">
      <h2 className="font-semibold text-lg mb-4">Insights</h2>

      <div className="space-y-3 text-slate-300">
        <p>
          🏆 Most available spots:
          <strong className="text-white"> {mostAvailable?.name}</strong>
        </p>

        <p>
          🚫 Full parking garages:
          <strong className="text-white"> {fullLots.length}</strong>
        </p>
      </div>
    </div>
  );
}
