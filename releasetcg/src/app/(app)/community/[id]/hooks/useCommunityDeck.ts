"use client";

import { useMemo } from "react";

import type { CommunityDeck } from "@/types/community";
import type { PlayableCard } from "@/types/cards";

export type DisplayCard = {
  card: PlayableCard;
  count: number;
};

export function useCommunityDeck(
  deck: CommunityDeck | null,
  cards: PlayableCard[]
) {
  const cardMap = useMemo(() => {
    return new Map(cards.map(card => [card.id, card]));
  }, [cards]);

  const leaderCard = useMemo(() => {
    if (!deck?.deck.leader) {
      return null;
    }

    return cardMap.get(deck.deck.leader) ?? null;
  }, [deck, cardMap]);

  const mainDeckCards = useMemo(() => {
    if (!deck) return [];

    return deck.deck.mainDeck
      .map(entry => {
        const card = cardMap.get(entry.cardId);

        return card
          ? {
              card,
              count: entry.count,
            }
          : null;
      })
      .filter(
        (value): value is DisplayCard =>
          value !== null
      );
  }, [deck, cardMap]);

  const extraDeckCards = useMemo(() => {
    if (!deck) return [];

    return deck.deck.extraDeck
      .map(entry => {
        const card = cardMap.get(entry.cardId);

        return card
          ? {
              card,
              count: entry.count,
            }
          : null;
      })
      .filter(
        (value): value is DisplayCard =>
          value !== null
      );
  }, [deck, cardMap]);

  return {
    cardMap,
    leaderCard,
    mainDeckCards,
    extraDeckCards,
  };
}