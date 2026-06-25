import type { SupabaseClient } from "@supabase/supabase-js";

export async function deleteDeck(
  supabase: SupabaseClient,
  ownerId: string,
  deckId: string
) {
  // Delete from decks.
  // deck_cards disappear via CASCADE.

  throw new Error("Not implemented.");
}