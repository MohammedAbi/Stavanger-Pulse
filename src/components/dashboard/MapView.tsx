import "./leafletIcon";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { ParkingLot } from "../../api/parkingMapper";

type Props = {
  lots: ParkingLot[];
};

export default function MapView({ lots }: Props) {
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden relative z-0">
      <MapContainer
        center={[58.969975, 5.733107]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {lots.map((lot) => (
          <Marker key={lot.id} position={[lot.lat, lot.lng]}>
            <Popup>
              <div className="text-black">
                <strong>{lot.name}</strong>
                <br />
                {lot.isFull ? "FULL" : `${lot.available} available spots`}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
