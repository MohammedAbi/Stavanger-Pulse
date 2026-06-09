export type PopulationApiItem = {
  Innbyggere: number;
  Kommunedel: string;
  dato: string;
};

export type PopulationApiResponse = PopulationApiItem[];
