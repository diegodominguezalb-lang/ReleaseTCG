"use client";

import { useMemo, useState } from "react";
// import { addCard, removeCard, getTotalCopies, canAddCard } from "./deckUtils";

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
  const [deck, setDeck] = useState<Deck>({
    leader: null,
    mainDeck: [],
    extraDeck: [],
  });

  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  // Placeholder: replace with Supabase cards query
  const cards = useMemo(() => {
    return [
      { id: "card-1", name: "Fire Dragon", colors: 2 },
      { id: "card-2", name: "Ice Mage", colors: 1 },
      { id: "card-3", name: "Phoenix Lord", colors: 4 },
    ];
  }, []);

  const mainCount = useMemo(() => {
    return deck.mainDeck.reduce((sum, c) => sum + c.count, 0);
  }, [deck.mainDeck]);

  const extraCount = useMemo(() => {
    return deck.extraDeck.reduce((sum, c) => sum + c.count, 0);
  }, [deck.extraDeck]);

  function selectLeader(cardId: string) {
    setDeck((prev) => ({
      ...prev,
      leader: cardId,
    }));
  }

  function addToDeck(cardId: string, zone: "main" | "extra") {
    setDeck((prev) => {
      const target = zone === "main" ? "mainDeck" : "extraDeck";
      const existing = prev[target].find((c) => c.cardId === cardId);

      if (existing) {
        return {
          ...prev,
          [target]: prev[target].map((c) =>
            c.cardId === cardId ? { ...c, count: c.count + 1 } : c
          ),
        };
      }

      return {
        ...prev,
        [target]: [...prev[target], { cardId, count: 1 }],
      };
    });
  }

  function removeFromDeck(cardId: string, zone: "main" | "extra") {
    setDeck((prev) => {
      const target = zone === "main" ? "mainDeck" : "extraDeck";

      return {
        ...prev,
        [target]: prev[target]
          .map((c) =>
            c.cardId === cardId ? { ...c, count: c.count - 1 } : c
          )
          .filter((c) => c.count > 0),
      };
    });
  }

  return (
    <div className="h-screen grid grid-cols-3 gap-4 p-4">
      {/* LEFT: Card Browser */}
      <div className="border rounded-lg p-3 overflow-auto">
        <h2 className="font-bold mb-2">Available Cards</h2>

        {!deck.leader && (
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
                  disabled={!deck.leader}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToDeck(card.id, "main");
                  }}
                >
                  + Main
                </button>

                <button
                  className="text-xs px-2 py-1 border rounded"
                  disabled={!deck.leader}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToDeck(card.id, "extra");
                  }}
                >
                  + Extra
                </button>

                <button
                  className="text-xs px-2 py-1 border rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    selectLeader(card.id);
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
                disabled={!deck.leader}
                onClick={() => addToDeck(selectedCardId, "main")}
              >
                Add to Main
              </button>

              <button
                className="border px-3 py-1 rounded"
                disabled={!deck.leader}
                onClick={() => addToDeck(selectedCardId, "extra")}
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
          <p className="font-semibold">Main Deck ({mainCount}/20)</p>
          {deck.mainDeck.map((c) => (
            <div key={c.cardId} className="flex justify-between text-sm">
              <span>
                {c.cardId} x{c.count}
              </span>
              <button
                onClick={() => removeFromDeck(c.cardId, "main")}
                className="text-xs"
              >
                remove
              </button>
            </div>
          ))}
        </div>

        <div>
          <p className="font-semibold">Extra Deck ({extraCount}/5)</p>
          {deck.extraDeck.map((c) => (
            <div key={c.cardId} className="flex justify-between text-sm">
              <span>
                {c.cardId} x{c.count}
              </span>
              <button
                onClick={() => removeFromDeck(c.cardId, "extra")}
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