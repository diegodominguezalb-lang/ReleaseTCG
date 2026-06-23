import type {
  DeckExport,
  DeckValidationResult,
} from "@/types/decks";

import type { PlayableCard } from "@/types/cards";

export function validateDeck(
  deck: DeckExport,
  cards: PlayableCard[]
): DeckValidationResult {
  const errors: string[] = [];

  const cardMap = new Map(
    cards.map((card) => [card.id, card])
  );

  /**
   * Leader
   */
  if (!deck.leader) {
    errors.push("A leader is required.");
  }

  const leader = cardMap.get(deck.leader);

  if (!leader) {
    errors.push("Leader does not exist.");
  }

  /**
   * Deck sizes
   */
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

  /**
   * Card existence
   */
  for (const entry of [
    ...deck.mainDeck,
    ...deck.extraDeck,
  ]) {
    if (!cardMap.has(entry.cardId)) {
      errors.push(
        `Unknown card: ${entry.cardId}`
      );
    }
  }

  /**
   * Copy limits
   */
  const totals = new Map<string, number>();

  totals.set(deck.leader, 1);

  for (const entry of deck.mainDeck) {
    totals.set(
      entry.cardId,
      (totals.get(entry.cardId) ?? 0) +
        entry.count
    );
  }

  for (const entry of deck.extraDeck) {
    totals.set(
      entry.cardId,
      (totals.get(entry.cardId) ?? 0) +
        entry.count
    );
  }

  for (const [cardId, total] of totals) {
    const card = cardMap.get(cardId);

    if (!card) continue;

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

  /**
   * Leader color legality
   */
  if (leader) {
    const leaderColors = leader.colors;

    for (const entry of [
      ...deck.mainDeck,
      ...deck.extraDeck,
    ]) {
      const card = cardMap.get(entry.cardId);

      if (!card) continue;

      const legal = card.colors.some((color) =>
        leaderColors.includes(color)
      );

      if (!legal) {
        errors.push(
          `${card.name} is outside the leader's color identity.`
        );
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}