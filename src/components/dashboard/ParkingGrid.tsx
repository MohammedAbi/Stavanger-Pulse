import type { ParkingLot } from "../../api/parkingMapper";
import ParkingCard from "./ParkingCard";

type Props = {
  lots: ParkingLot[];
};

export default function ParkingGrid({ lots }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {lots.map((lot) => (
        <ParkingCard key={lot.id} lot={lot} />
      ))}
    </div>
  );
}
