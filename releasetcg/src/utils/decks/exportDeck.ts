import type { DeckExport } from "@/types/decks";
import { encodeDeckCode } from "./encodeDeckCode";

export function exportDeck(deck: DeckExport): string {
  return encodeDeckCode(deck);
}