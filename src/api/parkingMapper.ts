import type { ParkingApiItem } from "./parkingTypes";

export type ParkingLot = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  available: number;
  isFull: boolean;
  updatedDate: string;
  updatedTime: string;
};

function parseAvailable(value: string) {
  const cleaned = value.trim().toLowerCase();

  if (cleaned === "fullt") {
    return { available: 0, isFull: true };
  }

  return {
    available: Number(value),
    isFull: false,
  };
}

export function mapParkingData(data: ParkingApiItem[]): ParkingLot[] {
  return data.map((item) => {
    const { available, isFull } = parseAvailable(item.Antall_ledige_plasser);

    return {
      id: item.Sted,
      name: item.Sted,
      lat: Number(item.Latitude),
      lng: Number(item.Longitude),
      available,
      isFull,
      updatedDate: item.Dato,
      updatedTime: item.Klokkeslett,
    };
  });
}
