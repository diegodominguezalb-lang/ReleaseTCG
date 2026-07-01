import { DeckExport } from "@/types/decks"
import { checksum } from "./checksum";
import { encodeDeck } from "./encodeDeck"

export function encodeDeckCode(
  deck: DeckExport
): string {
  const payload = encodeDeck(deck);

  return `${payload}.${checksum(payload)}`;
}