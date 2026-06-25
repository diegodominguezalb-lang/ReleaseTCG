import type { SupabaseClient } from "@supabase/supabase-js";

import type { Deck } from "@/types/decks";

export async function updateDeck(
  supabase: SupabaseClient,
  ownerId: string,
  deckId: string,
  deck: Deck
) {
  // 1. Verify ownership
  // 2. Update deck row
  // 3. Delete existing deck_cards
  // 4. Reinsert deck_cards

  throw new Error("Not implemented.");
}