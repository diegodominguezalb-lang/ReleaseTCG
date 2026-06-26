import type { Deck } from "@/types/decks";
import type { DeckExport } from "@/types/decks";

export function toDeckExport(
    deck: Deck
): DeckExport {
  return {
    leader: deck.leader!,
    mainDeck: deck.mainDeck,
    extraDeck: deck.extraDeck,
  };
}