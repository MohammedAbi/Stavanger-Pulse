import type { PopulationRecord } from "../api/populationMapper";

export function getLatestByDistrict(data: PopulationRecord[]) {
  return Object.values(
    data.reduce(
      (acc, item) => {
        const existing = acc[item.district];

        if (!existing || existing.date < item.date) {
          acc[item.district] = item;
        }

        return acc;
      },
      {} as Record<string, PopulationRecord>,
    ),
  );
}
