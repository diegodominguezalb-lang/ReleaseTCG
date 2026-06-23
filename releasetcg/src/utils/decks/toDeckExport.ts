import type { Deck } from "@/app/(app)/deckbuildler/types";
import type { DeckExport } from "@/types/decks";

export function toDeckExport(deck: Deck): DeckExport {
  if (!deck.leader) {
    throw new Error("Deck has no leader.");
  }

  return {
    leader: deck.leader,
    mainDeck: deck.mainDeck,
    extraDeck: deck.extraDeck,
  };
}