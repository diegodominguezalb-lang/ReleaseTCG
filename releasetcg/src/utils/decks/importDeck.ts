import type {
  Deck,
} from "@/app/(app)/deckbuildler/types";

import type {
  DeckExport,
  SavedDeck,
} from "@/types/decks";

/**
 * Creates an editable Deck from an exported deck.
 */
export function importDeck(
  deck: DeckExport
): Deck {
  return {
    leader: deck.leader,
    mainDeck: deck.mainDeck,
    extraDeck: deck.extraDeck,
  };
}

/**
 * Creates a SavedDeck from an imported deck.
 * Metadata should normally be filled in by the server.
 */
export function importSavedDeck(
  deck: DeckExport,
  options: {
    id: string;
    ownerId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }
): SavedDeck {
  return {
    ...options,

    leader: deck.leader,

    mainDeck: deck.mainDeck,
    extraDeck: deck.extraDeck,
  };
}