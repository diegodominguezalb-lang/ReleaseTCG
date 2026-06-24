"use client";

import { useCallback } from "react";

import type { Deck } from "@/types/decks";
import type { PlayableCard } from "@/types/cards";

import {
  exportDeck,
  getImportedDeck,
  getValidatedDeck,
} from "@/utils/decks";

type Props = {
  deck: Deck;
  cards: PlayableCard[];
  loadDeck: (deck: Deck) => void;
};

export function useDeckOperations({
  deck,
  cards,
  loadDeck,
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

    if (!validation.valid || !exportedDeck) {
      alert(validation.errors.join("\n"));
      return null;
    }

    return exportedDeck;
  }, [deck, cards]);

  /**
   * Returns an imported Deck or null.
   * Displays validation errors to the user.
   */
  const getImportableDeck = useCallback(
    (code: string) => {
      const {
        deck: importedDeck,
        validation,
      } = getImportedDeck(code, cards);

      if (!validation.valid || !importedDeck) {
        alert(validation.errors.join("\n"));
        return null;
      }

      return importedDeck;
    },
    [cards]
  );

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
   *
   * Loads a deck from a deck code.
   */
  const handleImport = useCallback(async () => {
    const code = prompt("Paste a deck code");

    if (!code) {
      return;
    }

    const importedDeck = getImportableDeck(code);

    if (!importedDeck) {
      return;
    }

    loadDeck(importedDeck);

    alert("Deck imported!");
  }, [getImportableDeck, loadDeck]);

  /**
   * Clear
   */
  const handleClear = useCallback(() => {
    const confirmed = confirm("Clear current deck?");

    if (!confirmed) return;

    loadDeck({
        leader: null,
        mainDeck: [],
        extraDeck: [],
    });

    alert("Deck cleared.");
  }, [loadDeck]);

  return {
    handleSave,
    handleExport,
    handleImport,
    handleClear,
  };
}