import type {
  DeckExport,
  SavedDeck,
} from "@/types/decks";

type Options = {
  id: string;
  ownerId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

/**
 * Converts an exported deck into a saved deck.
 */
export function toSavedDeck(
  deck: DeckExport,
  options: Options
): SavedDeck {
  return {
    ...options,

    leader: deck.leader,

    mainDeck: deck.mainDeck,
    extraDeck: deck.extraDeck,
  };
}