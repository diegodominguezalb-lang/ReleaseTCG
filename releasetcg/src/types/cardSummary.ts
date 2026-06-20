export type CardSummary = {
  id: string;
  name: string;
  power: number;
  bulk: number;
  palette: string[];
  trait: string;
  effect1: string;
  effect2: string;
  pool: "draft" | "private" | "beta" | "public";
};