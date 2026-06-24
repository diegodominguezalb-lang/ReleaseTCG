import type { Deck } from "@/types/decks";
import { toDeckExport } from "./toDeckExport";
import { encodeDeckCode } from "./encodeDeck";

export function exportDeck(deck: Deck): string {
  const normalized = toDeckExport(deck);
  return encodeDeckCode(normalized);
}