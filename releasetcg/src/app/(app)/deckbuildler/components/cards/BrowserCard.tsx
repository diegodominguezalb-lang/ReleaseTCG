"use client";

import Image from "next/image";

import type { PlayableCard } from "@/types/cards";
import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  card: PlayableCard;

  counts?: {
    main: number;
    extra: number;
  };

  onHover: (cardId: string) => void;
  onClick: (card: PlayableCard) => void;
};

export default function BrowserCard({
  card,
  counts,
  onHover,
  onClick,
}: Props) {
  return (
    <div
      className="
        group
        cursor-pointer
        rounded-md
        border
        overflow-hidden
        transition
        hover:shadow-md
        hover:border-muted-foreground/40
      "
      onMouseEnter={() => onHover(card.id)}
      onClick={() => onClick(card)}
    >

      {/* IMAGE (smaller, tighter aspect) */}
      <div className="relative aspect-[1/.5] bg-black/5">

        <Image
          src={getCardImageUrl(card.image_url)}
          alt={card.name}
          fill
          className="object-cover"
        />

        {/* COUNT BADGES */}
        {(counts?.main || counts?.extra) && (
          <div className="absolute top-1 right-1 flex flex-col gap-1">
            {counts.main > 0 && (
              <div className="rounded bg-blue-600/90 px-1.5 py-0.5 text-[10px] text-white">
                M {counts.main}
              </div>
            )}

            {counts.extra > 0 && (
              <div className="rounded bg-purple-600/90 px-1.5 py-0.5 text-[10px] text-white">
                E {counts.extra}
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
}