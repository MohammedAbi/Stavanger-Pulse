import type { ParkingLot } from "../../api/parkingMapper";

type Props = {
  lot: ParkingLot;
};

export default function ParkingCard({ lot }: Props) {
  return (
    <div className="bg-slate-800 text-white rounded-xl border border-slate-700 p-5">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg">{lot.name}</h3>

        <span
          className={`px-2 py-1 rounded-full text-xs font-medium
            ${
              lot.isFull
                ? "bg-red-500/20 text-red-400"
                : "bg-green-500/20 text-green-400"
            }`}
        >
          {lot.isFull ? "FULL" : "AVAILABLE"}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-slate-400 text-sm">Available spots</p>

        <p className="text-4xl font-bold">{lot.available}</p>
      </div>

      <div className="mt-4 text-sm text-slate-500">
        <div>{/* 📍 {lot.lat.toFixed(4)}, {lot.lng.toFixed(4)} */}</div>
      </div>
    </div>
  );
}
