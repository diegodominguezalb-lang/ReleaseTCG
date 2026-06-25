"use client";

import { useCards } from "./hooks/useCards";
import { useDeckBuilder } from "./hooks/useDeckBuilder";
import { useCardFilters } from "./hooks/useCardFilters";
import { useDeckOperations } from "./hooks/useDeckOperations";

import CardBrowser from "./components/CardBrowser";
import DeckControls from "./components/DeckControls";
import DeckPanel from "./components/DeckPanel";
import PreviewPanel from "./components/PreviewPanel";
import DeckToolbar from "./components/DeckToolbar";

export default function Page() {
  const { cards, loading } = useCards();

  const {
    // state
    deck,
    activeZone,
    setActiveZone,

    // derived
    filteredCards,
    hoveredCard,
    leaderCard,

    cardCounts,
    counts,
    mainDeckCards,
    extraDeckCards,

    // actions
    handleDeckNameChange,
    handleCardClick,
    handleIncrementCard,
    handleDecrementCard,
    setHoveredCardId,

    // important: controlled deck replacement
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
  });

  if (loading) {
    return (
      <div className="p-4 text-sm text-muted-foreground">
        Loading cards...
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col gap-3 p-4 overflow-hidden">

      {/* Deck mode selector */}
      <DeckControls
        deck={deck}
        activeZone={activeZone}
        setActiveZone={setActiveZone}
        leaderCard={leaderCard}
      />

      {/* Main content */}
      <div className="grid min-h-0 flex-1 grid-cols-[2fr_320px_1fr] gap-4">

        {/* Left side */}
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

        {/* Preview */}
        <PreviewPanel card={hoveredCard} />

        {/* Deck panel */}
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