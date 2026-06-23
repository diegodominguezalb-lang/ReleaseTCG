"use client";

import type { PlayableCard } from "@/types/cards";

import type { CardCounts } from "../types";

import BrowserCard from "./cards/BrowserCard";

type Props = {
  cards: PlayableCard[];

  cardCounts: CardCounts;

  onHover: (cardId: string) => void;

  onClickCard: (
    card: PlayableCard
  ) => void;
};

export default function CardBrowser({
  cards,
  cardCounts,
  onHover,
  onClickCard,
}: Props) {
  return (
    <div className="flex h-full min-h-0 flex-col rounded-lg border">

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        <div
            className="
            grid
            gap-3
            grid-cols-[repeat(auto-fill,minmax(140px,1fr))]
            "
        >
            {cards.map((card) => (
            <BrowserCard
                key={card.id}
                card={card}
                counts={cardCounts[card.id]}
                onHover={onHover}
                onClick={onClickCard}
            />
            ))}
        </div>
      </div>

    </div>
  );
}