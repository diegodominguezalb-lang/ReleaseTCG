import type { DeckExport } from "@/types/decks";
import { checksum } from "./checksum";

/**
 * Serializes a deck into a string.
 * The output is later wrapped with a checksum.
 */
export function encodeDeck(
  deck: DeckExport
): string {
  return JSON.stringify(deck);
}

export function encodeDeckCode(
  deck: DeckExport
): string {
  const payload = encodeDeck(deck);

  return `${payload}.${checksum(payload)}`;
}