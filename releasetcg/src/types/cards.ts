export type CardPool =
  | "draft"
  | "private"
  | "beta"
  | "public";

export type CardCore = {
  id: string;
  name: string;

  power: number;
  bulk: number;

  trait: string | null;
  effect1: string | null;
  effect2: string | null;

  flavor_text: string | null;
  description: string | null;

  artist: string | null;
  expansion: string | null;

  image_url: string | null;
};

export type PlayableCard = CardCore & {
  colors: string[];
};

/**
 * Represents the complete row stored in Supabase.
 * Extends Card with metadata only needed by the database/admin tools.
 */
export type DatabaseCard = {
  id: string;
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

/**
 * Lightweight representation for the admin table.
 * Avoids loading every field unnecessarily.
 */
export type AdminCardSummary = CardCore & {
  pool: CardPool;
  palette: string[];
};

export type CardFilterValues = {
  search: string;
  pool?: string;
  power: string;
  bulk: string;
  color: string;
};