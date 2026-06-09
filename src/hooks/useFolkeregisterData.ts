import { useEffect, useState } from "react";
import { fetchFolkeregisterData } from "../services/folkeregisterApi";
import { mapFolkeregisterData } from "../api/mapFolkeregister";
import type { FolkeregisterSummary } from "../api/folkeregisterTypes";

export function useFolkeregisterData() {
  const [data, setData] = useState<FolkeregisterSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const raw = await fetchFolkeregisterData();
        const mapped = mapFolkeregisterData(raw);

        setData(mapped);
      } catch {
        setError("Failed to load folkeregister data");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { data, loading, error };
}
