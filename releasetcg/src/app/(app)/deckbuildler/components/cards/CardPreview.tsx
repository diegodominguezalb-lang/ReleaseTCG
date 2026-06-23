"use client";

import Image from "next/image";

import type { PlayableCard } from "@/types/cards";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  card: PlayableCard | null;
};

export default function CardPreview({
  card,
}: Props) {
  if (!card) {
    return (
      <div className="rounded-lg border p-4 flex items-center justify-center">

        <p className="text-sm text-muted-foreground">
          Hover a card to preview it.
        </p>

      </div>
    );
  }

  return (
    <div className="rounded-lg border p-4 overflow-auto">

      <div className="relative aspect-[5/7] w-full">

        <Image
          src={getCardImageUrl(card.image_url)}
          alt={card.name}
          fill
          className="object-contain"
        />

      </div>

      <div className="mt-4 space-y-2">

        <h2 className="text-xl font-bold">
          {card.name}
        </h2>

        <div className="text-sm">

          Power: {card.power}

        </div>

        <div className="text-sm">

          Bulk: {card.bulk}

        </div>

        <div className="text-sm">

          Colors: {card.colors.join(", ")}

        </div>

        {card.trait && (
          <div className="text-sm">

            Trait: {card.trait}

          </div>
        )}

        {card.effect1 && (
          <p className="text-sm whitespace-pre-wrap">
            {card.effect1}
          </p>
        )}

        {card.effect2 && (
          <p className="text-sm whitespace-pre-wrap">
            {card.effect2}
          </p>
        )}

      </div>

    </div>
  );
}