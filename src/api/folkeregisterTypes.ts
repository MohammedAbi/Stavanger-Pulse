export type RawFolkeregisterRecord = {
  LokasjonsType: string;
  LokasjonsNummer: string;
  Kategori: string;
  KategoriVerdi: string;
  StatistikkType: string;
  StatistikkVerdi: number;
};

export type FolkeregisterSummary = {
  total: number;
  singel: number;
  marriedOrPartner: number;
  under18: number;
  unknown: number;
};
