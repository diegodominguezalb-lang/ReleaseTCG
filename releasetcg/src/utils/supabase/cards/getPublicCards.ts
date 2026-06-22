import { createClient } from "@/utils/supabase/server";

import { CardDetails } from "@/types/cards";

export async function getPublicCards(): Promise<CardDetails[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cards")
    .select(`
      id,
      name,
      image_url,
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
      expansion
    `);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}