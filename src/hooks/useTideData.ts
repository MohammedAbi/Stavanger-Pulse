import { useEffect, useState } from "react";
import { fetchTideData } from "../services/tideApi";
import { mapTideData } from "../api/tideMapper";
import type { TidePoint, TideSummary } from "../api/tideTypes";

export function useTideData() {
  const [points, setPoints] = useState<TidePoint[]>([]);
  const [summary, setSummary] = useState<TideSummary | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);

      const raw = await fetchTideData();
      const mapped = mapTideData(raw);

      setPoints(mapped.points);
      setSummary(mapped.summary);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const raw = await fetchTideData();
        const mapped = mapTideData(raw);

        setPoints(mapped.points);
        setSummary(mapped.summary);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    void loadData();
  }, []);

  return { points, summary, loading, error, refresh: load };
}
