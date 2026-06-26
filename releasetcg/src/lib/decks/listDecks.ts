import type { SupabaseClient } from "@supabase/supabase-js";

import type { DeckSummary } from "@/types/decks";

export async function listDecks(
  supabase: SupabaseClient,
  ownerId: string
): Promise<DeckSummary[]> {
  const { data, error } = await supabase
    .from("decks")
    .select(`
      id,
      name,
      updated_at,
      leader:leader_id (
        id,
        name,
        image_url
      )
    `)
    .eq("owner_id", ownerId)
    .order("updated_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []).map((deck) => {
    const leader = Array.isArray(deck.leader)
      ? deck.leader[0]
      : deck.leader;

    return {
      id: deck.id,
      name: deck.name,

      leaderId: leader?.id ?? null,
      leaderName: leader?.name ?? null,
      leaderImage: leader?.image_url ?? null,

      updatedAt: deck.updated_at,
    };
  });
}