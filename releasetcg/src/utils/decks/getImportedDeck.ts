import type { PlayableCard } from "@/types/cards";

import { importDeck } from "./importDeck";
import { validateDeck } from "./validateDeck";

import { GetImportedDeckResult } from "@/types/decks"

export function getImportedDeck(
  code: string,
  cards: PlayableCard[]
): GetImportedDeckResult {
  try {
    const imported = importDeck(code);

    const validation = validateDeck(
      imported,
      cards
    );

    return {
      deck: validation.valid
        ? imported
        : null,
      validation,
    };
  } catch (error) {
    return {
      deck: null,
      validation: {
        valid: false,
        errors: [
          error instanceof Error
            ? error.message
            : "Invalid deck code.",
        ],
      },
    };
  }
}