export type SolvbergetRaw = {
  "Unnamed: 0": string;
  "101-MainEntrance": string;
  "102-BackEntrance": string;
  "103-SideEntrance": string;
  "104-Stairway": string;
  Entrances_and_Stairway: string;
  Entrances_except_Stairway: string;
  Total: number | null;
};

export type SolvbergetRecord = {
  label: string;

  main: number;
  back: number;
  side: number;
  stairs: number;

  total: number;
};

export type SolvbergetPeak = {
  main: string;
  back: string;
  side: string;
  stairs: string;
};
