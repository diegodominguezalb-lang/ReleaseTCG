import type { PlayableCard } from "@/types/cards";

import CommunityCardChip from "./CommunityCardChip";

export type DisplayCard = {
  card: PlayableCard;
  count: number;
};

type Props = {
  cards: DisplayCard[];

  setHoveredCardId: (
    id: string | null
  ) => void;

  setHoverAnchor: (
    anchor: DOMRect | null
  ) => void;
};

export default function CommunityDeckSection({
  cards,
  setHoveredCardId,
  setHoverAnchor,
}: Props) {
  return (
    <section>
      <div className="flex flex-wrap gap-2">
        {cards.map(({ card, count }) => (
          <CommunityCardChip
            key={card.id}
            card={card}
            count={count}
            setHoveredCardId={setHoveredCardId}
            setHoverAnchor={setHoverAnchor}
          />
        ))}
      </div>
    </section>
  );
}