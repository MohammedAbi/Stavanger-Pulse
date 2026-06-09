import type { RawFolkeregisterRecord } from "../api/folkeregisterTypes";

const API_URL =
  "https://opencom.no/dataset/f94ca85b-827e-4228-be94-cb95b968dfe6/resource/f5df43d1-f1a4-4514-80c6-8fdbb6d803e2/download/json-dagligfolkeregisterdatasivilstand.json";

export async function fetchFolkeregisterData(): Promise<
  RawFolkeregisterRecord[]
> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error(`Folkeregister API error: ${res.status}`);
  }

  return res.json();
}
