"use client";

import { useCallback, useMemo, useState } from "react";

import type { PlayableCard } from "@/types/cards";
import type { Deck } from "@/types/decks";

import type { Zone } from "../types";

import {
  applySelection,
  decrementCard,
  getCardCounts,
  getDeckCounts,
} from "../deckUtils";

/* -------------------------
   Helpers
------------------------- */

export type DeckCard = {
  card: PlayableCard;
  count: number;
};

export function useDeckBuilder(cards: PlayableCard[]) {
  /* -------------------------
     STATE
  ------------------------- */

  const [deck, setDeck] = useState<Deck>({
    leader: null,
    mainDeck: [],
    extraDeck: [],
  });

  const [activeZone, setActiveZone] = useState<Zone>("leader");

  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  /* -------------------------
     LOOKUP MAP
  ------------------------- */

  const cardMap = useMemo(() => {
    return Object.fromEntries(
      cards.map((card) => [card.id, card])
    ) as Record<string, PlayableCard>;
  }, [cards]);

  /* -------------------------
     DERIVED CARDS
  ------------------------- */

  const leaderCard = useMemo(() => {
    if (!deck.leader) return null;
    return cardMap[deck.leader] ?? null;
  }, [deck.leader, cardMap]);

  const hoveredCard = useMemo(() => {
    if (!hoveredCardId) return null;
    return cardMap[hoveredCardId] ?? null;
  }, [hoveredCardId, cardMap]);

  const leaderColors = useMemo(() => {
    return leaderCard?.colors ?? [];
  }, [leaderCard]);

  /* -------------------------
     FILTERED POOL
  ------------------------- */

  const filteredCards = useMemo(() => {
    if (activeZone === "leader") {
      return cards.filter((c) => c.colors.length === 4);
    }

    if (!leaderCard) return [];

    return cards.filter((c) =>
      c.colors.some((color) => leaderColors.includes(color))
    );
  }, [cards, activeZone, leaderCard, leaderColors]);

  /* -------------------------
     DERIVED STATS
  ------------------------- */

  const counts = useMemo(() => getDeckCounts(deck), [deck]);

  const cardCounts = useMemo(() => getCardCounts(deck), [deck]);

  /* -------------------------
     DERIVED DECK ARRAYS (IMPORTANT)
  ------------------------- */

  const mainDeckCards: DeckCard[] = useMemo(() => {
    return deck.mainDeck
      .map((entry) => {
        const card = cardMap[entry.cardId];
        if (!card) return null;

        return { card, count: entry.count };
      })
      .filter(Boolean) as DeckCard[];
  }, [deck.mainDeck, cardMap]);

  const extraDeckCards: DeckCard[] = useMemo(() => {
    return deck.extraDeck
      .map((entry) => {
        const card = cardMap[entry.cardId];
        if (!card) return null;

        return { card, count: entry.count };
      })
      .filter(Boolean) as DeckCard[];
  }, [deck.extraDeck, cardMap]);

  /* -------------------------
     ACTIONS
  ------------------------- */

  const handleCardClick = useCallback(
    (card: PlayableCard) => {
      setDeck((prev) => applySelection(prev, card, activeZone));

      // auto switch after leader pick
      if (activeZone === "leader") {
        setActiveZone("main");
      }
    },
    [activeZone]
  );

  const handleIncrementCard = useCallback(
    (cardId: string, zone: "main" | "extra") => {
      const card = cardMap[cardId];
      if (!card) return;

      setDeck((prev) => applySelection(prev, card, zone));
    },
    [cardMap]
  );

  const handleDecrementCard = useCallback(
    (cardId: string, zone: "main" | "extra") => {
      setDeck((prev) => decrementCard(prev, cardId, zone));
    },
    []
  );

  /* -------------------------
     RETURN
  ------------------------- */

  return {
    // state
    deck,
    activeZone,
    hoveredCardId,

    // setters
    setActiveZone,
    setHoveredCardId,

    // derived
    leaderCard,
    hoveredCard,
    leaderColors,
    filteredCards,
    counts,
    cardCounts,
    cardMap,

    mainDeckCards,
    extraDeckCards,

    // actions
    handleCardClick,
    handleIncrementCard,
    handleDecrementCard,
  };
}