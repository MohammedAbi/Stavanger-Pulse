import type { FirstNameRaw } from "../api/firstnameTypes";

const API_URL =
  "/api/dataset/85ee1fa5-4ba9-4ffa-b218-e7e19c5f3f4f/resource/b16044f7-30fa-465c-97c4-b34b8446693d/download/json-dagligfolkeregisterdatafornavn.json";

export async function fetchFirstNames(): Promise<FirstNameRaw[]> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
