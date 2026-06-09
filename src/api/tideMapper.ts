import type { TideApiRecord, TidePoint, TideSummary } from "../api/tideTypes";

function toNumber(value: unknown): number | null {
  if (value === null || value === undefined) return null;

  const num = typeof value === "number" ? value : Number(value);
  if (Number.isNaN(num)) return null;

  return num;
}

export function mapTideData(raw: TideApiRecord[]): {
  points: TidePoint[];
  summary: TideSummary;
} {
  const points: TidePoint[] = raw
    // ⚠️ remove duplicate timestamps if API sends duplicates
    .filter((r, i, arr) => {
      const time = r["Dato og tid"];
      return arr.findIndex((x) => x["Dato og tid"] === time) === i;
    })
    .map((r) => ({
      time: new Date(r["Dato og tid"]),
      observed: toNumber(r["Water level observations"]),
      predicted: toNumber(r["Predicted tide"]),
      forecast: toNumber(r["Forecast"]),
    }));

  const observedVals = points
    .map((p) => p.observed)
    .filter((v): v is number => v !== null);

  const predictedVals = points
    .map((p) => p.predicted)
    .filter((v): v is number => v !== null);

  const forecastVals = points
    .map((p) => p.forecast)
    .filter((v): v is number => v !== null);

  const summary: TideSummary = {
    latestObserved: observedVals.at(-1) ?? null,
    latestPredicted: predictedVals.at(-1) ?? null,
    latestForecast: forecastVals.at(-1) ?? null,

    highest: observedVals.length ? Math.max(...observedVals) : 0,
    lowest: observedVals.length ? Math.min(...observedVals) : 0,

    dataPoints: points.length,
  };

  return { points, summary };
}
