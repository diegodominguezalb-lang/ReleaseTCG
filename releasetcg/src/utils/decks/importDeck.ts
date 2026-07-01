import type { DeckExport } from "@/types/decks";

import { decodeDeckCode } from "./decodeDeckCode";

/**
 * Imports a deck code into a DeckExport.
 */
export function importDeck(
  code: string
): DeckExport {
  return decodeDeckCode(code);
}