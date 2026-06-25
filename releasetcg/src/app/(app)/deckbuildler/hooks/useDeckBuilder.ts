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
   Types
------------------------- */

export type DeckCard = {
  card: PlayableCard;
  count: number;
};

/* -------------------------
   Hook
------------------------- */

export function useDeckBuilder(cards: PlayableCard[]) {
  /* -------------------------
     STATE
  ------------------------- */

  const [deck, setDeck] = useState<Deck>({
    name: "",
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
    return new Map(cards.map((c) => [c.id, c]));
  }, [cards]);

  /* -------------------------
     DERIVED: CARDS
  ------------------------- */

  const leaderCard = useMemo(() => {
    if (!deck.leader) return null;
    return cardMap.get(deck.leader) ?? null;
  }, [deck.leader, cardMap]);

  const hoveredCard = useMemo(() => {
    if (!hoveredCardId) return null;
    return cardMap.get(hoveredCardId) ?? null;
  }, [hoveredCardId, cardMap]);

  const leaderColors = leaderCard?.colors ?? [];

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
     STATS
------------------------- */

  const counts = useMemo(() => getDeckCounts(deck), [deck]);
  const cardCounts = useMemo(() => getCardCounts(deck), [deck]);

  /* -------------------------
     DECK ARRAYS
  ------------------------- */

  const mainDeckCards = useMemo(() => {
    return deck.mainDeck
      .map((entry) => {
        const card = cardMap.get(entry.cardId);
        if (!card) return null;

        return { card, count: entry.count };
      })
      .filter(Boolean) as DeckCard[];
  }, [deck.mainDeck, cardMap]);

  const extraDeckCards = useMemo(() => {
    return deck.extraDeck
      .map((entry) => {
        const card = cardMap.get(entry.cardId);
        if (!card) return null;

        return { card, count: entry.count };
      })
      .filter(Boolean) as DeckCard[];
  }, [deck.extraDeck, cardMap]);

  /* -------------------------
     ACTIONS
  ------------------------- */

  const setDeckName = useCallback((name: string) => {
    setDeck(prev => ({
        ...prev,
        name,
    }));
  }, []);

  const handleCardClick = useCallback(
    (card: PlayableCard) => {
      setDeck((prev) => applySelection(prev, card, activeZone));

      if (activeZone === "leader") {
        setActiveZone("main");
      }
    },
    [activeZone]
  );

  const handleIncrementCard = useCallback(
    (cardId: string, zone: "main" | "extra") => {
      const card = cardMap.get(cardId);
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

  const handleDeckNameChange = useCallback(
    (name: string) => {
        setDeck((prev) => ({
        ...prev,
        name,
        }));
    },
    []
  );

  const loadDeck = useCallback((nextDeck: Deck) => {
    setDeck(nextDeck);
  }, []);

  /* -------------------------
     RETURN
  ------------------------- */

  return {
    // state
    deck,
    setDeckName,
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

    mainDeckCards,
    extraDeckCards,

    // actions
    handleCardClick,
    handleIncrementCard,
    handleDecrementCard,
    handleDeckNameChange,

    loadDeck,
  };
}