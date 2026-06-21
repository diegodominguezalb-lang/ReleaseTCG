export type DatabaseCard = {
  id: number;
  name: string;

  power: number;
  bulk: number;

  color1: string | null;
  color2: string | null;
  color3: string | null;
  color4: string | null;

  pool: string;

  trait: string | null;
  effect1: string | null;
  effect2: string | null;

  image_url: string | null;

  created_at: string;
  updated_at: string;

  created_by: string | null;
  updated_by: string | null;

  version: number;

  flavor_text: string | null;
  description: string | null;

  artist: string | null;

  expansion: string | null;

  slug: string;
};