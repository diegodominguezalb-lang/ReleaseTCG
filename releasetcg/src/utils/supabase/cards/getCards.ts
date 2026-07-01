import { createClient } from "@/utils/supabase/server";
import type { AdminCardSummary, CardPool } from "@/types/cards";

type SupabaseCardRow = {
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
};

export async function getCards(): Promise<AdminCardSummary[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cards")
    .select(`
      id,
      name,
      power,
      bulk,
      color1,
      color2,
      color3,
      color4,
      trait,
      effect1,
      effect2,
      flavor_text,
      description,
      artist,
      expansion,
      image_url,
      pool
    `);

  if (error || !data) {
    console.error(error);
    return [];
  }

  const rows = data as SupabaseCardRow[];

  return rows.map((card): AdminCardSummary => ({
    id: card.id,
    name: card.name,

    power: card.power,
    bulk: card.bulk,

    trait: card.trait,
    effect1: card.effect1,
    effect2: card.effect2,

    flavor_text: card.flavor_text,
    description: card.description,
    artist: card.artist,
    expansion: card.expansion,
    image_url: card.image_url,

    palette: [
      card.color1,
      card.color2,
      card.color3,
      card.color4,
    ].filter(Boolean) as string[],

    pool: card.pool,
  }));
}