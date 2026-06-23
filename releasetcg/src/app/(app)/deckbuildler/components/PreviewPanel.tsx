"use client";

import Image from "next/image";

import type { PlayableCard } from "@/types/cards";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";
import { PaletteChips } from "@/app/(app)/components/cards/PaletteChips";

type Props = {
  card: PlayableCard | null;
};

export default function PreviewPanel({
  card,
}: Props) {
  if (!card) {
    return (
      <div className="flex items-center justify-center rounded-lg border">
        <p className="text-sm text-muted-foreground">
          Hover a card to preview it.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-auto rounded-lg border">

      {/* Card */}
      <div className="p-3">

        <div className="relative aspect-[5/7] w-full">

          <Image
            fill
            src={getCardImageUrl(card.image_url)}
            alt={card.name}
            className="rounded object-contain"
          />

        </div>

      </div>

      <div className="border-t p-4 space-y-3">

        <div>

          <h2 className="text-lg font-bold">
            {card.name}
          </h2>

          <PaletteChips
            palette={card.colors}
            size="sm"
          />

        </div>

        <div className="flex justify-between text-sm">

          <span>
            Power {card.power}
          </span>

          <span>
            Bulk {card.bulk}
          </span>

        </div>

        {card.trait && (
          <div>

            <h3 className="font-medium text-sm">
              Trait
            </h3>

            <p className="text-sm">
              {card.trait}
            </p>

          </div>
        )}

        {card.effect1 && (
          <div>

            <h3 className="font-medium text-sm">
              Effect
            </h3>

            <p className="whitespace-pre-wrap text-sm">
              {card.effect1}
            </p>

          </div>
        )}

        {card.effect2 && (
          <p className="whitespace-pre-wrap text-sm">
            {card.effect2}
          </p>
        )}

        {card.flavor_text && (

          <div className="border-t pt-3">

            <p className="italic text-xs text-muted-foreground">
              {card.flavor_text}
            </p>

          </div>

        )}

        <div className="border-t pt-3 text-xs text-muted-foreground space-y-1">

          {card.artist && (
            <div>
              Artist: {card.artist}
            </div>
          )}

          {card.expansion && (
            <div>
              Expansion: {card.expansion}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}