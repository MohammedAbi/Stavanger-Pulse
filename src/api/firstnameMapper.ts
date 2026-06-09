import type { FirstNameRaw, FirstNameRecord } from "./firstnameTypes";

export function mapFirstNames(data: FirstNameRaw[]): FirstNameRecord[] {
  return data.map((item) => ({
    name: formatFirstName(item.KategoriVerdi),
    count: item.StatistikkVerdi,
  }));
}

function formatFirstName(name: string): string {
  const normalized = name.trim().toLowerCase();

  if (normalized === "andre navn") {
    return "Other names";
  }

  return name;
}
