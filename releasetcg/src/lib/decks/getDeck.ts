import type { SupabaseClient } from "@supabase/supabase-js";

import type {
  Deck,
  DeckEntry,
} from "@/types/decks";

export async function getDeck(
  supabase: SupabaseClient,
  ownerId: string,
  deckId: string
): Promise<Deck> {
  // Load deck metadata
  const { data: deckRow, error: deckError } = await supabase
    .from("decks")
    .select("id, name, leader_id")
    .eq("id", deckId)
    .eq("owner_id", ownerId)
    .single();

  if (deckError || !deckRow) {
    throw new Error("Deck not found.");
  }

  // Load deck contents
  const { data: cardRows, error: cardsError } = await supabase
    .from("deck_cards")
    .select("card_id, count, zone")
    .eq("deck_id", deckId);

  if (cardsError) {
    throw cardsError;
  }

  const mainDeck: DeckEntry[] = [];
  const extraDeck: DeckEntry[] = [];

  for (const row of cardRows ?? []) {
    const entry: DeckEntry = {
      cardId: row.card_id,
      count: row.count,
    };

    if (row.zone === "main") {
      mainDeck.push(entry);
    } else {
      extraDeck.push(entry);
    }
  }

  return {
    id: deckRow.id,
    name: deckRow.name,
    leader: deckRow.leader_id,
    mainDeck,
    extraDeck,
  };
}