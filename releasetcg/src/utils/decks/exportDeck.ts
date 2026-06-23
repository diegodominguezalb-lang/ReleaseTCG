import type {
  DeckExport,
  SavedDeck,
} from "@/types/decks";

export function exportDeck(
  deck: SavedDeck
): DeckExport {
  return {
    leader: deck.leader,
    mainDeck: deck.mainDeck,
    extraDeck: deck.extraDeck,
  };
}