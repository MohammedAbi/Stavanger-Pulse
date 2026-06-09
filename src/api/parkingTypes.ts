export type ParkingApiItem = {
  Dato: string;
  Klokkeslett: string;
  Sted: string;
  Latitude: string;
  Longitude: string;
  Antall_ledige_plasser: string;
};

export type ParkingApiResponse = ParkingApiItem[];
