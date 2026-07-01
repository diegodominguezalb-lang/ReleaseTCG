import type { Deck } from "@/types/decks";
import type { PlayableCard } from "@/types/cards";

import {
  exportDeck,
  toDeckExport,
  validateDeck,
} from "@/utils/decks";

export async function exportDeckCode(
  deck: Deck,
  cards: PlayableCard[]
) {
  const validation = validateDeck(
    toDeckExport(deck),
    cards
  );

  if (!validation.valid) {
    throw new Error(validation.errors.join("\n"));
  }

  const code = exportDeck(
    toDeckExport(deck)
  );

  try {
    await navigator.clipboard.writeText(code);
  } catch {
    alert(code);
  }
}