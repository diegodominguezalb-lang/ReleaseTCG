import type { SupabaseClient } from "@supabase/supabase-js";

export async function deleteDeck(
  supabase: SupabaseClient,
  ownerId: string,
  deckId: string
): Promise<void> {
  // 1. Verify ownership + delete deck in one step
  const { error } = await supabase
    .from("decks")
    .delete()
    .eq("id", deckId)
    .eq("owner_id", ownerId);

  if (error) {
    throw error;
  }
}