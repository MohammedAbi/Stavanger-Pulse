import { useEffect, useState } from "react";
import { fetchParkingData } from "../services/parkingApi";
import { mapParkingData, type ParkingLot } from "../api/parkingMapper";

export function useParkingData() {
  const [lots, setLots] = useState<ParkingLot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setError(null);

      const raw = await fetchParkingData();
      const mapped = mapParkingData(raw);

      setLots(mapped);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await load();
    };

    void fetchData();

    const interval = setInterval(() => {
      void load();
    }, 120_000);

    return () => clearInterval(interval);
  }, []);

  return { lots, loading, error, refresh: load };
}
