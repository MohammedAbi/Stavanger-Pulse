export type PopulationRaw = {
  Innbyggere: number;
  Kommunedel: string;
  dato: string;
};

export async function fetchPopulationData(): Promise<PopulationRaw[]> {
  const res = await fetch(
    "https://opencom.no/dataset/2250160e-0a40-4585-9c0f-545886f77bd1/resource/550c319f-3805-493b-9f34-823c32605775/download/historiskinnbyggereperbydelperbydel.json",
  );

  if (!res.ok) {
    throw new Error(`Population API error: ${res.status}`);
  }

  return res.json();
}
