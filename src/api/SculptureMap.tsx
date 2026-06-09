import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { SculptureType } from "./sculptureTypes";

export default function SculptureMap({ data }: { data: SculptureType[] }) {
  return (
    <MapContainer
      center={[58.97, 5.73]}
      zoom={12}
      className="h-[500px] w-full relative z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap"
      />

      {data.map((s, i) => (
        <Marker key={i} position={[s.latitude, s.longitude]}>
          <Popup>
            <div className="text-sm">
              <strong>{s.navn}</strong>
              <br />
              {s.kunstner}
              <br />
              {s.årstall}
              <br />
              📍 {s.plassering}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
