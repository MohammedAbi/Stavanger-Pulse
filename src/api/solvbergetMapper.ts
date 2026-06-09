import type {
  SolvbergetRaw,
  SolvbergetRecord,
  SolvbergetPeak,
} from "./solvbergetTypes";

function toNumber(value: unknown): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

export function mapSolvbergetData(raw: SolvbergetRaw[]): {
  stats: SolvbergetRecord | null;
  peak: SolvbergetPeak | null;
} {
  let stats: SolvbergetRecord | null = null;
  let peak: SolvbergetPeak | null = null;

  for (const item of raw) {
    const label = item["Unnamed: 0"];

    // MAIN STATS ROW
    if (label === "All Visit") {
      stats = {
        label,
        main: toNumber(item["101-MainEntrance"]),
        back: toNumber(item["102-BackEntrance"]),
        side: toNumber(item["103-SideEntrance"]),
        stairs: toNumber(item["104-Stairway"]),
        total: toNumber(item["Total"]),
      };
    }

    // PEAK HOURS ROW
    if (label === "Peak hour") {
      peak = {
        main: String(item["101-MainEntrance"]),
        back: String(item["102-BackEntrance"]),
        side: String(item["103-SideEntrance"]),
        stairs: String(item["104-Stairway"]),
      };
    }
  }

  return { stats, peak };
}
