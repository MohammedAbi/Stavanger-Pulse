import { useEffect, useState } from "react";
import { fetchPopulationData } from "../services/populationApi";

import {
  mapPopulationData,
  type PopulationRecord,
} from "../api/populationMapper";

export function usePopulationData() {
  const [data, setData] = useState<PopulationRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setError(null);

      const raw = await fetchPopulationData();
      const mapped = mapPopulationData(raw);

      setData(mapped);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await load();
    };

    void fetchData();
  }, []);

  return { data, loading, error, refresh: load };
}
