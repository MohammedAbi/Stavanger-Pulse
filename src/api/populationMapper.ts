import type { PopulationApiItem } from "./populationTypes";

export type PopulationRecord = {
  district: string;
  population: number;
  date: string;
};

export function mapPopulationData(
  data: PopulationApiItem[],
): PopulationRecord[] {
  return data.map((item) => ({
    district: item.Kommunedel,
    population: item.Innbyggere,
    date: item.dato,
  }));
}
