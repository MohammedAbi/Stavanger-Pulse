import { useEffect, useState } from "react";
import { fetchSolvbergetData } from "../services/solvbergetApi";
import { mapSolvbergetData } from "../api/solvbergetMapper";
import type { SolvbergetRecord, SolvbergetPeak } from "../api/solvbergetTypes";

export function useSolvbergetData() {
  const [stats, setStats] = useState<SolvbergetRecord | null>(null);
  const [peak, setPeak] = useState<SolvbergetPeak | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setError(null);

      const raw = await fetchSolvbergetData();
      const mapped = mapSolvbergetData(raw);

      setStats(mapped.stats);
      setPeak(mapped.peak);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setError(null);

        const raw = await fetchSolvbergetData();
        const mapped = mapSolvbergetData(raw);

        setStats(mapped.stats);
        setPeak(mapped.peak);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    void loadData();

    const interval = setInterval(() => {
      void loadData();
    }, 120_000);

    return () => clearInterval(interval);
  }, []);

  return { stats, peak, loading, error, refresh: load };
}
