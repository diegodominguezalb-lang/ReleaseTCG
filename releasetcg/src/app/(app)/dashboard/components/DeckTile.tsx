"use client";

import Link from "next/link";
import Image from "next/image";

import type { DeckSummary } from "@/types/decks";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

import DeckTileMenu from "./DeckTileMenu";

type Props = {
  deck: DeckSummary;
};

export default function DeckTile({ deck }: Props) {
  return (
    <div className="relative">
      {/* Actions */}
      <div
        className="absolute right-2 top-2 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <DeckTileMenu deck={deck} />
      </div>

      <Link href={`/deckbuildler/${deck.id}`}>
        <div
          className="group overflow-hidden rounded-xl border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
        >
          {/* Cover */}
          <div className="relative aspect-[16/9] bg-muted">
            {deck.leaderImage ? (
              <Image
                fill
                src={getCardImageUrl(deck.leaderImage)}
                alt={deck.leaderName ?? deck.name}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                No Leader
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-1 p-3">
            <h3 className="truncate font-semibold">
              {deck.name || "Untitled Deck"}
            </h3>

            <p className="truncate text-sm text-muted-foreground">
              {deck.leaderName ?? "No Leader"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}