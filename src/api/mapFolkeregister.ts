import type {
  RawFolkeregisterRecord,
  FolkeregisterSummary,
} from "./folkeregisterTypes";

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/\uFFFD/g, "")
    .replace(/�/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function mapFolkeregisterData(
  raw: RawFolkeregisterRecord[],
): FolkeregisterSummary {
  const result: FolkeregisterSummary = {
    total: 0,
    singel: 0,
    marriedOrPartner: 0,
    under18: 0,
    unknown: 0,
  };

  for (const item of raw) {
    const key = normalize(item.KategoriVerdi);
    const value = item.StatistikkVerdi || 0;

    // total population
    result.total += value;

    if (key.includes("singel")) {
      result.singel = value;
    }

    if (key.includes("gift") || key.includes("partner")) {
      result.marriedOrPartner = value;
    }

    if (key.includes("under 18")) {
      result.under18 = value;
    }

    if (key.includes("ukjent")) {
      result.unknown = value;
    }
  }

  return result;
}
