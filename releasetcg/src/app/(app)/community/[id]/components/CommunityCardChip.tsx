"use client";

import Image from "next/image";

import type { PlayableCard } from "@/types/cards";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  card: PlayableCard;
  count: number;

  setHoveredCardId: (
    id: string | null
  ) => void;

  setHoverAnchor: (
    anchor: DOMRect | null
  ) => void;
};

export default function CommunityCardChip({
  card,
  count,
  setHoveredCardId,
  setHoverAnchor,
}: Props) {
  return (
    <div
      className="relative inline-flex cursor-pointer"
      onMouseEnter={(e) => {
        setHoveredCardId(card.id);
        setHoverAnchor(
          e.currentTarget.getBoundingClientRect()
        );
      }}
      onMouseLeave={() => {
        setHoveredCardId(null);
        setHoverAnchor(null);
      }}
    >
      <Image
        src={getCardImageUrl(card.image_url)}
        alt={card.name}
        width={80}
        height={112}
        className="block rounded-lg border transition-transform hover:scale-105"
      />

      {count > 1 && (
        <div
          className="absolute z-10 flex h-6 min-w-6 items-center justify-center rounded-full bg-black/80 px-2 text-xs font-semibold text-white"
        style={{
          right: 4,
          bottom: 4,
        }}
        >
          ×{count}
        </div>
      )}
    </div>
  );
}