import { PublicCard } from "@/types/cards";

import { GalleryCard } from "./GalleryCard";

type Props = {
  cards: PublicCard[];
};

export function GalleryGrid({
  cards,
}: Props) {

  return (

    <div className="flex-1 overflow-y-auto p-6">

      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2">

        {cards.map(card => (

          <GalleryCard
            key={card.id}
            card={card}
          />

        ))}

      </div>

    </div>

  );
}