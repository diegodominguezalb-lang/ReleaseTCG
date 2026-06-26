"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import type { Deck } from "@/types/decks";
import type { PlayableCard } from "@/types/cards";

import {
  saveDeck,
  updateDeck,
  exportDeck,
  getImportedDeck,
  validateDeck,
  toDeckExport,
} from "@/utils/decks";

type Props = {
  deck: Deck;
  cards: PlayableCard[];
  loadDeck: (deck: Deck) => void;
  deckId?: string;
};

export function useDeckOperations({
  deck,
  cards,
  loadDeck,
  deckId,
}: Props) {
  const router = useRouter();
  /**
   * Save
   */
  const handleSave = useCallback(async () => {
    const validation = validateDeck(toDeckExport(deck), cards);

    if (!validation.valid) {
      alert(validation.errors.join("\n"));
      return;
    }

    try {
      const savedDeck = deckId
        ? await updateDeck(deckId, deck)
        : await saveDeck(deck);

      loadDeck(savedDeck);

      if (!deckId && savedDeck.id) {
          router.replace(`/deckbuilder/${savedDeck.id}`);
      }

      alert("Deck saved!");
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Unable to save deck."
      );
    }
  }, [deck, cards, deckId, loadDeck, router]);

  /**
   * Export
   */
  const handleExport = useCallback(async () => {
    const validation = validateDeck(toDeckExport(deck), cards);

    if (!validation.valid) {
      alert(validation.errors.join("\n"));
      return;
    }

    const code = exportDeck(
      toDeckExport(deck)
    );

    try {
      await navigator.clipboard.writeText(code);

      alert("Deck code copied to clipboard!");
    } catch {
      alert(code);
    }
  }, [deck, cards]);

  /**
   * Import
   */
  const handleImport = useCallback(() => {
    const code = prompt("Paste a deck code");

    if (!code) {
      return;
    }

    const {
      deck: importedDeck,
      validation,
    } = getImportedDeck(code, cards);

    if (!validation.valid || !importedDeck) {
      alert(validation.errors.join("\n"));
      return;
    }

    loadDeck(importedDeck);
  }, [cards, loadDeck]);

  /**
   * Clear
   */
  const handleClear = useCallback(() => {
    if (!confirm("Clear current deck?")) {
      return;
    }

    loadDeck({
      name: "",
      leader: null,
      mainDeck: [],
      extraDeck: [],
    });
  }, [loadDeck]);

  return {
    handleSave,
    handleExport,
    handleImport,
    handleClear,
  };
}