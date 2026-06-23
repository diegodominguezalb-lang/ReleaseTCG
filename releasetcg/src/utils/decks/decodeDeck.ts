import type { DeckExport } from "@/types/decks";
import { checksum } from "./checksum";

export function decodeDeck(
  encoded: string
): DeckExport {
  return JSON.parse(encoded) as DeckExport;
}

export function decodeDeckCode(
  code: string
): DeckExport {
  const split = code.lastIndexOf(".");

  if (split === -1) {
    throw new Error("Invalid deck code.");
  }

  const payload = code.slice(0, split);
  const received = code.slice(split + 1);

  if (checksum(payload) !== received) {
    throw new Error("Deck checksum failed.");
  }

  return decodeDeck(payload);
}