"use client";

import { useCallback } from "react";

import type { Deck } from "@/types/decks";
import type { PlayableCard } from "@/types/cards";

import {
  exportDeck,
  getValidatedDeck,
} from "@/utils/decks";

type Props = {
  deck: Deck;
  cards: PlayableCard[];
};

export function useDeckOperations({
  deck,
  cards,
}: Props) {
  /**
   * Returns a validated DeckExport or null.
   * Displays validation errors to the user.
   */
  const getExportableDeck = useCallback(() => {
    const {
      deck: exportedDeck,
      validation,
    } = getValidatedDeck(deck, cards);

    if (!validation.valid) {
      alert(validation.errors.join("\n"));
      return null;
    }

    return exportedDeck;
  }, [deck, cards]);

  /**
   * Save
   *
   * Eventually this will POST to your API route.
   */
  const handleSave = useCallback(async () => {
    const exportedDeck = getExportableDeck();

    if (!exportedDeck) {
      return;
    }

    console.log("Saving deck...", exportedDeck);

    // TODO:
    // await saveDeck(exportedDeck)
  }, [getExportableDeck]);

  /**
   * Export
   *
   * Copies an encoded deck string to the clipboard.
   */
  const handleExport = useCallback(async () => {
    const exportedDeck = getExportableDeck();

    if (!exportedDeck) {
      return;
    }

    const code = exportDeck(exportedDeck);

    try {
      await navigator.clipboard.writeText(code);

      alert("Deck code copied to clipboard!");
    } catch {
      alert(code);
    }
  }, [getExportableDeck]);

  /**
   * Import
   */
  const handleImport = useCallback(async () => {
    console.log("Import deck");
  }, []);

  /**
   * Clear
   */
  const handleClear = useCallback(() => {
    console.log("Clear deck");
  }, []);

  return {
    handleSave,
    handleExport,
    handleImport,
    handleClear,
  };
}