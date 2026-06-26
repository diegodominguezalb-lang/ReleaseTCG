import type {
  DeckExport,
  DeckValidationResult,
} from "@/types/decks";

import type { PlayableCard } from "@/types/cards";

function getCardMap(cards: PlayableCard[]) {
  return new Map(cards.map((card) => [card.id, card]));
}

function getDeckEntries(deck: DeckExport) {
  return [...deck.mainDeck, ...deck.extraDeck];
}

function validateLeader(
  deck: DeckExport,
  cardMap: Map<string, PlayableCard>
): {
  leader: PlayableCard | null;
  errors: string[];
} {
  const errors: string[] = [];

  if (!deck.leader) {
    errors.push("A leader is required.");

    return {
      leader: null,
      errors,
    };
  }

  const leader = cardMap.get(deck.leader);

  if (!leader) {
    errors.push("Leader does not exist.");

    return {
      leader: null,
      errors,
    };
  }

  return {
    leader,
    errors,
  };
}

function validateDeckSizes(
  deck: DeckExport
): string[] {
  const errors: string[] = [];

  const mainCount = deck.mainDeck.reduce(
    (sum, entry) => sum + entry.count,
    0
  );

  if (mainCount !== 20) {
    errors.push(
      `Main Deck must contain exactly 20 cards (currently ${mainCount}).`
    );
  }

  const extraCount = deck.extraDeck.reduce(
    (sum, entry) => sum + entry.count,
    0
  );

  if (extraCount !== 5) {
    errors.push(
      `Extra Deck must contain exactly 5 cards (currently ${extraCount}).`
    );
  }

  return errors;
}

function validateCardExistence(
  deck: DeckExport,
  cardMap: Map<string, PlayableCard>
): string[] {
  const errors: string[] = [];

  for (const entry of getDeckEntries(deck)) {
    if (!cardMap.has(entry.cardId)) {
      errors.push(`Unknown card: ${entry.cardId}`);
    }
  }

  return errors;
}

function validateCopyLimits(
  deck: DeckExport,
  cardMap: Map<string, PlayableCard>
): string[] {
  const errors: string[] = [];

  const totals = new Map<string, number>();

  totals.set(deck.leader, 1);

  for (const entry of getDeckEntries(deck)) {
    totals.set(
      entry.cardId,
      (totals.get(entry.cardId) ?? 0) +
        entry.count
    );
  }

  for (const [cardId, total] of totals) {
    const card = cardMap.get(cardId);

    if (!card) {
      continue;
    }

    const maxCopies =
      card.colors.length === 1 ||
      card.colors.length === 4
        ? 1
        : 2;

    if (total > maxCopies) {
      errors.push(
        `${card.name} exceeds its copy limit (${maxCopies}).`
      );
    }
  }

  return errors;
}

function validateColorIdentity(
  deck: DeckExport,
  leader: PlayableCard,
  cardMap: Map<string, PlayableCard>
): string[] {
  const errors: string[] = [];

  const leaderColors = leader.colors;

  for (const entry of getDeckEntries(deck)) {
    const card = cardMap.get(entry.cardId);

    if (!card) {
      continue;
    }

    const legal = card.colors.some((color) =>
      leaderColors.includes(color)
    );

    if (!legal) {
      errors.push(
        `${card.name} is outside the leader's color identity.`
      );
    }
  }

  return errors;
}

export function validateDeck(
  deck: DeckExport,
  cards: PlayableCard[]
): DeckValidationResult {
  const cardMap = getCardMap(cards);

  const {
    leader,
    errors: leaderErrors,
  } = validateLeader(deck, cardMap);

  const errors = [
    ...leaderErrors,
    ...validateDeckSizes(deck),
    ...validateCardExistence(
      deck,
      cardMap
    ),
    ...validateCopyLimits(
      deck,
      cardMap
    ),
  ];

  if (leader) {
    errors.push(
      ...validateColorIdentity(
        deck,
        leader,
        cardMap
      )
    );
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}