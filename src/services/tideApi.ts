import type { TideApiRecord } from "../api/tideTypes";

const API_URL =
  "https://opencom.no/dataset/946cba08-41b6-4d12-8a13-b4ab6bcfd916/resource/adabf909-e8a8-43d5-94c5-fb42abe38d8a/download/stavanger-vannstand-kartverket.json";

export async function fetchTideData(): Promise<TideApiRecord[]> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error(`Tide API error: ${res.status}`);
  }

  return res.json();
}
