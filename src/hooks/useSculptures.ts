import { useEffect, useState } from "react";
import { fetchSculptures } from "../services/sculptures";
import type { SculptureType } from "../api/sculptureTypes";

export function useSculptures() {
  const [data, setData] = useState<SculptureType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await fetchSculptures();
        setData(result);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { data, loading, error };
}
