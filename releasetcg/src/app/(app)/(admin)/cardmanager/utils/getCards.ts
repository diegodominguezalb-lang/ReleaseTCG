import { createClient } from "@/utils/supabase/server";
import { Card } from "@/types/cardSummary";

export async function getCards(): Promise<Card[]> {
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

    status: card.pool,
  }));
}