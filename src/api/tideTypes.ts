export type TideApiRecord = {
  "Dato og tid": string;
  "Water level observations": number;
  "Predicted tide": number;
  Forecast: number;
};

export type TidePoint = {
  time: Date;
  observed: number | null;
  predicted: number | null;
  forecast: number | null;
};

export type TideSummary = {
  latestObserved: number | null;
  highest: number;
  lowest: number;
  dataPoints: number;

  latestPredicted?: number | null;
  latestForecast?: number | null;
};
