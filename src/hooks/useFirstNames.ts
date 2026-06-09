import { useEffect, useState } from "react";
import { fetchFirstNames } from "../services/firstnameApi";
import { mapFirstNames } from "../api/firstnameMapper";
import type { FirstNameRecord } from "../api/firstnameTypes";

export function useFirstNames() {
  const [data, setData] = useState<FirstNameRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const raw = await fetchFirstNames();

        setData(mapFirstNames(raw));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { data, loading, error };
}
