import type { SupabaseClient } from "@supabase/supabase-js";

import type { Deck } from "@/types/decks";

export async function createCommunityDeck(
  supabase: SupabaseClient,
  ownerId: string,
  deck: Deck,
  title: string,
  description: string
) {
  const { data, error } = await supabase
    .from("community_decks")
    .insert({
      owner_id: ownerId,

      title,

      description,

      deck,

      leader_id: deck.leader,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}