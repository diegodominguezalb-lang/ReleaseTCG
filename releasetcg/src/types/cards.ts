export type CardPool =
  | "draft"
  | "private"
  | "beta"
  | "public";

  export type DatabaseCard = {
  id: number;

  name: string;

  power: number;
  bulk: number;

  color1: string | null;
  color2: string | null;
  color3: string | null;
  color4: string | null;

  trait: string | null;
  effect1: string | null;
  effect2: string | null;

  flavor_text: string | null;
  description: string | null;

  artist: string | null;

  expansion: string | null;

  image_url: string | null;

  pool: CardPool;

  slug: string;

  version: number;

  created_at: string;
  updated_at: string;

  created_by: string | null;
  updated_by: string | null;
};

export type PublicCard = {
  id: string;

  name: string;

  image_url: string;

  power: number;
  bulk: number;

  color1: string;
  color2: string;
  color3: string;
  color4: string;

  trait: string;

  effect1: string;
  effect2: string;

  flavor_text: string;

  description: string;

  artist: string;

  expansion: string;
};

export type AdminCardSummary = {
  id: string;

  name: string;

  power: number;
  bulk: number;

  palette: string[];

  trait: string;

  effect1: string;
  effect2: string;

  pool: CardPool;
};