"use client";

import {
  useCallback,
  useMemo,
  useState,
} from "react";

import type { PlayableCard } from "@/types/cards";
import type { Deck } from "@/types/decks";

import type { Zone } from "../types";

import {
  applySelection,
  decrementCard,
  getCardCounts,
  getDeckCounts,
} from "../deckUtils";

export type DeckCard = {
  card: PlayableCard;
  count: number;
};

export function useDeckBuilder(
  cards: PlayableCard[]
) {
  const [deck, setDeck] =
    useState<Deck>({
      name: "",
      leader: null,
      mainDeck: [],
      extraDeck: [],
    });

  const [activeZone, setActiveZone] =
    useState<Zone>("leader");

  const [hoveredCardId, setHoveredCardId] =
    useState<string | null>(null);

  const [hoverAnchor, setHoverAnchor] =
    useState<DOMRect | null>(null);

  /**
   * Lookup
   */

  const cardMap = useMemo(
    () =>
      new Map(
        cards.map((card) => [
          card.id,
          card,
        ])
      ),
    [cards]
  );

  /**
   * Derived cards
   */

  const leaderCard =
    deck.leader
      ? cardMap.get(deck.leader) ??
        null
      : null;

  const hoveredCard =
    hoveredCardId
      ? cardMap.get(
          hoveredCardId
        ) ?? null
      : null;

  const leaderColors =
    leaderCard?.colors ?? [];

  /**
   * Browser
   */

  const filteredCards = useMemo(() => {
    if (activeZone === "leader") {
      return cards.filter(
        (card) =>
          card.colors.length === 4
      );
    }

    if (!leaderCard) {
      return [];
    }

    return cards.filter((card) =>
      card.colors.some((color) =>
        leaderColors.includes(color)
      )
    );
  }, [
    cards,
    activeZone,
    leaderCard,
    leaderColors,
  ]);

  /**
   * Deck stats
   */

  const counts = useMemo(
    () => getDeckCounts(deck),
    [deck]
  );

  const cardCounts = useMemo(
    () => getCardCounts(deck),
    [deck]
  );

  /**
   * Display helpers
   */

  const mapDeckCards = useCallback(
    (
      entries: {
        cardId: string;
        count: number;
      }[]
    ): DeckCard[] =>
      entries.flatMap((entry) => {
        const card = cardMap.get(
          entry.cardId
        );

        return card
          ? [
              {
                card,
                count: entry.count,
              },
            ]
          : [];
      }),
    [cardMap]
  );

  const mainDeckCards =
    useMemo(
      () =>
        mapDeckCards(
          deck.mainDeck
        ),
      [
        deck.mainDeck,
        mapDeckCards,
      ]
    );

  const extraDeckCards =
    useMemo(
      () =>
        mapDeckCards(
          deck.extraDeck
        ),
      [
        deck.extraDeck,
        mapDeckCards,
      ]
    );

  /**
   * Actions
   */

  const handleDeckNameChange =
    useCallback(
      (name: string) => {
        setDeck((prev) => ({
          ...prev,
          name,
        }));
      },
      []
    );

  const handleCardClick =
    useCallback(
      (card: PlayableCard) => {
        setDeck((prev) =>
          applySelection(
            prev,
            card,
            activeZone
          )
        );

        if (
          activeZone === "leader"
        ) {
          setActiveZone("main");
        }
      },
      [activeZone]
    );

  const handleIncrementCard =
    useCallback(
      (
        cardId: string,
        zone:
          | "main"
          | "extra"
      ) => {
        const card =
          cardMap.get(cardId);

        if (!card) {
          return;
        }

        setDeck((prev) =>
          applySelection(
            prev,
            card,
            zone
          )
        );
      },
      [cardMap]
    );

  const handleDecrementCard =
    useCallback(
      (
        cardId: string,
        zone:
          | "main"
          | "extra"
      ) => {
        setDeck((prev) =>
          decrementCard(
            prev,
            cardId,
            zone
          )
        );
      },
      []
    );

  const loadDeck =
    useCallback(
      (deck: Deck) => {
        setDeck(deck);
      },
      []
    );

  return {
    deck,
    activeZone,

    leaderCard,
    hoveredCard,
    hoverAnchor,

    filteredCards,

    counts,
    cardCounts,

    mainDeckCards,
    extraDeckCards,

    setActiveZone,
    setHoveredCardId,
    setHoverAnchor,

    handleDeckNameChange,
    handleCardClick,
    handleIncrementCard,
    handleDecrementCard,

    loadDeck,
  };
}