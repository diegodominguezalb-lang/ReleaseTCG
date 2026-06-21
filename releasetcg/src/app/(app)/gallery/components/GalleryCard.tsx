import { PublicCard } from "../types";

import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  card: PublicCard;
};

export function GalleryCard({
  card,
}: Props) {

  return (

    <div className="cursor-pointer rounded-xl border bg-card shadow transition hover:-translate-y-1 hover:shadow-lg">

      <img
        src={getCardImageUrl(card.image_url)}
        alt={card.name}
        className="aspect-[5/7] w-full object-cover"
      />

    </div>

  );
}