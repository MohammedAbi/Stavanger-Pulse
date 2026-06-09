import type { ParkingApiResponse } from "../api/parkingTypes";

const API_URL =
  "https://opencom.no/dataset/36ceda99-bbc3-4909-bc52-b05a6d634b3f/resource/d1bdc6eb-9b49-4f24-89c2-ab9f5ce2acce/download/parking.json";

export async function fetchParkingData(): Promise<ParkingApiResponse> {
  if (!API_URL) {
    throw new Error("Mangler VITE_PARKING_API_URL i .env");
  }

  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
