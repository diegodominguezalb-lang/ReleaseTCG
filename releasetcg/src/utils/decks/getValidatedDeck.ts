import type {
  Deck,
  DeckExport,
  DeckValidationResult,
} from "@/types/decks";

import type { PlayableCard } from "@/types/cards";

import { toDeckExport } from "@/utils/decks/toDeckExport";
import { validateDeck } from "@/utils/decks/validateDeck";

type GetValidatedDeckResult = {
  deck: DeckExport | null;
  validation: DeckValidationResult;
};

export function getValidatedDeck(
  deck: Deck,
  cards: PlayableCard[]
): GetValidatedDeckResult {
  if (!deck.leader) {
    return {
      deck: null,
      validation: {
        valid: false,
        errors: ["A leader is required."],
      },
    };
  }

  const exported = toDeckExport(deck);
  const validation = validateDeck(exported, cards);

  return {
    deck: validation.valid ? exported : null,
    validation,
  };
}