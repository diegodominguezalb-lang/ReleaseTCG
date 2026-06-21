import { createClient } from "@/utils/supabase/server";
import { AdminCardSummary } from "@/types/cards";

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
      pool
    `);

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((card) => ({
    id: card.id,
    name: card.name,
    power: card.power,
    bulk: card.bulk,

    palette: [
      card.color1,
      card.color2,
      card.color3,
      card.color4,
    ].filter(Boolean),

    trait: card.trait,
    effect1: card.effect1,
    effect2: card.effect2,

    pool: card.pool,
  }));
}