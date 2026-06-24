"use client";

import Image from "next/image";

import type { DeckCard } from "../types";
import type { PlayableCard } from "@/types/cards";
import type { Deck } from "@/types/decks";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";
import { PaletteChips } from "@/app/(app)/components/cards/PaletteChips";
import { StatChips } from "@/app/(app)/components/cards/StatChips";

type Props = {
  deck: Deck;

  leaderCard: PlayableCard | null;

  mainDeckCards: DeckCard[];
  extraDeckCards: DeckCard[];

  counts: {
    main: number;
    extra: number;
  };

  onIncrementCard: (cardId: string, zone: "main" | "extra") => void;
  onDecrementCard: (cardId: string, zone: "main" | "extra") => void;

  onSave: () => void;
  onExport: () => void;
};

export default function DeckPanel({
  deck,
  leaderCard,
  mainDeckCards,
  extraDeckCards,
  counts,
  onIncrementCard,
  onDecrementCard,
  onSave,
  onExport,
}: Props) {
  return (
    <div className="flex h-full min-h-0 flex-col rounded-lg border overflow-hidden">

      {/* HEADER (fixed) */}
      <div className="shrink-0 border-b p-4">
        <h2 className="text-xl font-bold">Deck</h2>

        <p className="text-sm text-muted-foreground">
          {counts.main + counts.extra + (deck.leader ? 1 : 0)} cards
        </p>
      </div>

      {/* SCROLLABLE BODY */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-8">

        {/* LEADER */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold">Leader</h3>
            <span className="text-sm text-muted-foreground">
              {deck.leader ? "1 / 1" : "0 / 1"}
            </span>
          </div>

          {leaderCard ? (
            <div className="flex items-center gap-3 rounded-lg border p-2">
              <div className="relative h-16 w-12 overflow-hidden rounded">
                <Image
                  fill
                  src={getCardImageUrl(leaderCard.image_url)}
                  alt={leaderCard.name}
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1 space-y-1">
                <div className="truncate font-medium">
                  {leaderCard.name}
                </div>

                <PaletteChips
                    palette={leaderCard.colors}
                    size="sm"
                />

                <StatChips
                    power={leaderCard.power}
                    bulk={leaderCard.bulk}
                    size="sm"
                />
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed p-4 text-center text-sm text-muted-foreground">
              Select a leader.
            </div>
          )}
        </section>

        {/* MAIN DECK */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold">Main Deck</h3>
            <span className="text-sm text-muted-foreground">
              {counts.main}/20
            </span>
          </div>

          <div className="space-y-2">
            {mainDeckCards.length === 0 ? (
              <p className="text-sm text-muted-foreground">Empty</p>
            ) : (
              mainDeckCards.map(({ card, count }) => (
                <div
                  key={card.id}
                  className="flex items-center gap-3 rounded-lg border p-2"
                >
                  <div className="relative h-14 w-10 overflow-hidden rounded">
                    <Image
                      fill
                      src={getCardImageUrl(card.image_url)}
                      alt={card.name}
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="truncate text-sm font-medium">
                        {card.name}
                    </div>

                    <PaletteChips
                        palette={card.colors}
                        size="sm"
                    />

                     <StatChips
                        power={card.power}
                        bulk={card.bulk}
                        size="sm"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <button
                        className="
                        flex h-7 w-7 items-center justify-center
                        rounded border
                        hover:bg-muted
                        "
                        onClick={() => onIncrementCard(card.id, "main")}
                    >
                        +
                    </button>

                    <span className="text-sm font-semibold">
                        {count}
                    </span>

                    <button
                        className="
                        flex h-7 w-7 items-center justify-center
                        rounded border
                        hover:bg-muted
                        "
                        onClick={() => onDecrementCard(card.id, "main")}
                    >
                        −
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* EXTRA DECK */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold">Extra Deck</h3>
            <span className="text-sm text-muted-foreground">
              {counts.extra}/5
            </span>
          </div>

          <div className="space-y-2">
            {extraDeckCards.length === 0 ? (
              <p className="text-sm text-muted-foreground">Empty</p>
            ) : (
              extraDeckCards.map(({ card, count }) => (
                <div
                  key={card.id}
                  className="flex items-center gap-3 rounded-lg border p-2"
                >
                  <div className="relative h-14 w-10 overflow-hidden rounded">
                    <Image
                      fill
                      src={getCardImageUrl(card.image_url)}
                      alt={card.name}
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="truncate text-sm font-medium">
                        {card.name}
                    </div>

                    <PaletteChips
                        palette={card.colors}
                        size="sm"
                    />

                    <StatChips
                        power={card.power}
                        bulk={card.bulk}
                        size="sm"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <button
                        className="
                        flex h-7 w-7 items-center justify-center
                        rounded border
                        hover:bg-muted
                        "
                        onClick={() => onIncrementCard(card.id, "main")}
                    >
                        +
                    </button>

                    <span className="text-sm font-semibold">
                        {count}
                    </span>

                    <button
                        className="
                        flex h-7 w-7 items-center justify-center
                        rounded border
                        hover:bg-muted
                        "
                        onClick={() => onDecrementCard(card.id, "main")}
                    >
                        −
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>

      {/* FOOTER (fixed) */}
      <div className="shrink-0 border-t p-4 space-y-2">
        <button
            onClick={onSave}
            disabled={!deck.leader || counts.main !== 20}
            className="
                w-full rounded border p-2
                disabled:opacity-50
            "
            >
            Save Deck
        </button>

        <button onClick={onExport} className="w-full rounded border p-2">
          Export Deck
        </button>
      </div>
    </div>
  );
}