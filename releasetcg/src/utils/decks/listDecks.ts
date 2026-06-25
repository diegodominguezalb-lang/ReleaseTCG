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

  return (data ?? []).map((deck) => ({
    id: deck.id,
    name: deck.name,

    leaderId: deck.leader?.id ?? null,
    leaderName: deck.leader?.name ?? null,
    leaderImage: deck.leader?.image_url ?? null,

    updatedAt: deck.updated_at,
  }));
}