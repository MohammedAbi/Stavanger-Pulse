// api/sculpturesApi.ts

import type { SculptureType } from "../api/sculptureTypes";

const SCULPTURES_URL =
  "api/dataset/afae0c45-1c59-44b5-a433-a6c61da2cb2e/resource/d5fc6de8-7e27-434b-9927-0bf531352b17/download/skulpturer-i-stavanger.json";

export async function fetchSculptures(): Promise<SculptureType[]> {
  const res = await fetch(SCULPTURES_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch sculptures data");
  }

  return res.json();
}
