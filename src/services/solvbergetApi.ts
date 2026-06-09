import type { SolvbergetRaw } from "../api/solvbergetTypes";

const API_URL =
  "/api/dataset/a80639f3-2f64-4f26-9f1b-7da12f04970c/resource/e7419316-b181-44fa-9ab1-6151e80fafdc/download/folkevandring-solvberget.json";

export async function fetchSolvbergetData(): Promise<SolvbergetRaw[]> {
  if (!API_URL) {
    throw new Error("Missing SOLVBERGET API URL");
  }

  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}