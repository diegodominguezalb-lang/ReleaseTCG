"use client";

import { useMemo, useState, useEffect, useCallback } from "react";

import {
  addCard,
  removeCard,
  setLeader,
  getDeckCounts,
} from "./deckUtils";

type DeckEntry = {
  cardId: string;
  count: number;
};

type Deck = {
  leader: string | null;
  mainDeck: DeckEntry[];
  extraDeck: DeckEntry[];
};

export default function DeckBuilderPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [deck, setDeck] = useState<Deck>({
    leader: null,
    mainDeck: [],
    extraDeck: [],
  });

  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  /**
   * Mock cards (replace with Supabase later)
   */
  const cards = useMemo(
    () => [
      { id: "card-1", name: "Fire Dragon", colors: 2 },
      { id: "card-2", name: "Ice Mage", colors: 1 },
      { id: "card-3", name: "Phoenix Lord", colors: 4 },
    ],
    []
  );

  /**
   * 🚨 ALL DECK LOGIC MOVED TO UTILS
   */
  const { main, extra } = useMemo(
    () => getDeckCounts(deck),
    [deck]
  );

  const leaderSelected = deck.leader !== null;

  const handleSetLeader = useCallback((cardId: string) => {
    setDeck((prev) => setLeader(prev, cardId));
  }, []);

  const handleAddCard = useCallback(
    (cardId: string, zone: "main" | "extra") => {
      setDeck((prev) => addCard(prev, cardId, zone));
    },
    []
  );

  const handleRemoveCard = useCallback(
    (cardId: string, zone: "main" | "extra") => {
      setDeck((prev) => removeCard(prev, cardId, zone));
    },
    []
  );

  if (!mounted) {
    return (
      <div className="p-4 text-sm text-muted-foreground">
        Loading deck builder...
      </div>
    );
  }

  return (
    <div className="h-screen grid grid-cols-3 gap-4 p-4">
      {/* LEFT: Card Browser */}
      <div className="border rounded-lg p-3 overflow-auto">
        <h2 className="font-bold mb-2">Available Cards</h2>

        {!leaderSelected && (
          <p className="text-sm text-muted-foreground mb-2">
            Select a leader to unlock deck building
          </p>
        )}

        <div className="space-y-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="border rounded p-2 cursor-pointer hover:bg-muted"
              onClick={() => setSelectedCardId(card.id)}
            >
              <div className="font-medium">{card.name}</div>

              <div className="flex gap-2 mt-2">
                <button
                  className="text-xs px-2 py-1 border rounded"
                  disabled={!leaderSelected}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddCard(card.id, "main");
                  }}
                >
                  + Main
                </button>

                <button
                  className="text-xs px-2 py-1 border rounded"
                  disabled={!leaderSelected}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddCard(card.id, "extra");
                  }}
                >
                  + Extra
                </button>

                <button
                  className="text-xs px-2 py-1 border rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSetLeader(card.id);
                  }}
                >
                  Set Leader
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MIDDLE: Inspector */}
      <div className="border rounded-lg p-3">
        <h2 className="font-bold mb-2">Card Inspector</h2>

        {selectedCardId ? (
          <div>
            <p className="text-lg font-semibold">{selectedCardId}</p>

            <div className="mt-4 flex gap-2">
              <button
                className="border px-3 py-1 rounded"
                disabled={!leaderSelected}
                onClick={() => handleAddCard(selectedCardId, "main")}
              >
                Add to Main
              </button>

              <button
                className="border px-3 py-1 rounded"
                disabled={!leaderSelected}
                onClick={() => handleAddCard(selectedCardId, "extra")}
              >
                Add to Extra
              </button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Select a card to inspect
          </p>
        )}
      </div>

      {/* RIGHT: Deck */}
      <div className="border rounded-lg p-3 overflow-auto">
        <h2 className="font-bold mb-2">Deck</h2>

        <div className="mb-4">
          <p className="font-semibold">Leader</p>
          <p className="text-sm text-muted-foreground">
            {deck.leader ?? "None selected"}
          </p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Main Deck ({main}/20)</p>
          {deck.mainDeck.map((c) => (
            <div key={c.cardId} className="flex justify-between text-sm">
              <span>
                {c.cardId} x{c.count}
              </span>
              <button
                onClick={() => handleRemoveCard(c.cardId, "main")}
                className="text-xs"
              >
                remove
              </button>
            </div>
          ))}
        </div>

        <div>
          <p className="font-semibold">Extra Deck ({extra}/5)</p>
          {deck.extraDeck.map((c) => (
            <div key={c.cardId} className="flex justify-between text-sm">
              <span>
                {c.cardId} x{c.count}
              </span>
              <button
                onClick={() => handleRemoveCard(c.cardId, "extra")}
                className="text-xs"
              >
                remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}