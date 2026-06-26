"use client";

import { useEffect } from "react";

import { useCards } from "./hooks/useCards";
import { useDeckBuilder } from "./hooks/useDeckBuilder";
import { useCardFilters } from "./hooks/useCardFilters";
import { useDeckOperations } from "./hooks/useDeckOperations";

import CardBrowser from "./components/CardBrowser";
import DeckControls from "./components/DeckControls";
import DeckPanel from "./components/DeckPanel";
import PreviewPanel from "./components/PreviewPanel";
import DeckToolbar from "./components/DeckToolbar";

import { getDeck } from "@/utils/decks";

type Props = {
  deckId?: string;
};

export default function DeckBuilder({
  deckId,
}: Props) {
  const { cards, loading } = useCards();

  const {
    deck,
    activeZone,
    setActiveZone,

    filteredCards,
    hoveredCard,
    leaderCard,

    cardCounts,
    counts,
    mainDeckCards,
    extraDeckCards,

    handleDeckNameChange,
    handleCardClick,
    handleIncrementCard,
    handleDecrementCard,

    setHoveredCardId,
    loadDeck,
  } = useDeckBuilder(cards);

  const {
    filters,
    setFilters,
    filteredCards: browserCards,
  } = useCardFilters(filteredCards);

  const {
    handleSave,
    handleExport,
    handleImport,
    handleClear,
  } = useDeckOperations({
    deck,
    cards,
    loadDeck,
    deckId,
  });

  // Load an existing deck when editing
  useEffect(() => {
    if (!deckId) return;

    const id = deckId;

    let cancelled = false;

    async function loadExistingDeck() {
      try {
        const loadedDeck = await getDeck(id);

        if (!cancelled) {
          loadDeck(loadedDeck);
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadExistingDeck();

    return () => {
      cancelled = true;
    };
  }, [deckId, loadDeck]);

  if (loading) {
    return (
      <div className="p-4 text-sm text-muted-foreground">
        Loading cards...
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col gap-3 p-4 overflow-hidden">
      <DeckControls
        deck={deck}
        activeZone={activeZone}
        setActiveZone={setActiveZone}
        leaderCard={leaderCard}
      />

      <div className="grid min-h-0 flex-1 grid-cols-[2fr_320px_1fr] gap-4">
        <div className="flex min-h-0 flex-col gap-3">
          <DeckToolbar
            filters={filters}
            setFilters={setFilters}
          />

          <div className="min-h-0 flex-1">
            <CardBrowser
              cards={browserCards}
              cardCounts={cardCounts}
              onHover={setHoveredCardId}
              onClickCard={handleCardClick}
            />
          </div>
        </div>

        <PreviewPanel card={hoveredCard} />

        <DeckPanel
          deck={deck}
          onDeckNameChange={handleDeckNameChange}
          leaderCard={leaderCard}
          mainDeckCards={mainDeckCards}
          extraDeckCards={extraDeckCards}
          counts={counts}
          onIncrementCard={handleIncrementCard}
          onDecrementCard={handleDecrementCard}
          onSave={handleSave}
          onExport={handleExport}
          onImport={handleImport}
          onClear={handleClear}
        />
      </div>
    </div>
  );
}