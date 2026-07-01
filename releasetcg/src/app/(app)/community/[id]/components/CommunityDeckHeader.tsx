"use client";

import type { PlayableCard } from "@/types/cards";

import CommunityCardChip from "./CommunityCardChip";

type Props = {
  leader: PlayableCard | null;
  deckName: string;
  author: string;

  setHoveredCardId: (id: string | null) => void;
  setHoverAnchor: (anchor: DOMRect | null) => void;
};

export default function CommunityDeckHeader({
  leader,
  deckName,
  author,
  setHoveredCardId,
  setHoverAnchor,
}: Props) {
  return (
    <section className="grid grid-cols-2 gap-2">

      {leader && (
        <CommunityCardChip
          card={leader}
          count={1}
          setHoveredCardId={setHoveredCardId}
          setHoverAnchor={setHoverAnchor}
        />
      )}

      <div className="absolute bottom-5 items-center min-w-0 flex-1 flex-col pt-1"
        style={{
            left: 1/2,
            top: 5,
            transform: "translate(100%, 100%)",
        }}
      >
        <h1 className="text-2xl font-bold leading-tight">
          {deckName}
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          by {author}
        </p>
      </div>

    </section>
  );
}