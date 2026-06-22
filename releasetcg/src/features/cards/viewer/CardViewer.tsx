import { ReactNode } from "react";

import { CardDetails } from "@/types/cards";

import { CardImage } from "./components/CardImage";
import { CardHeader } from "./components/CardHeader";
import { CardStats } from "./components/CardStats";
import { CardEffects } from "./components/CardEffects";
import { CardFlavorText } from "./components/CardFlavorText";
import { CardMetadata } from "./components/CardMetadata";

type Props = {
  card: CardDetails;
  children?: ReactNode;
};

export function CardViewer({
  card,
  children,
}: Props) {
  const colors = [
    card.color1,
    card.color2,
    card.color3,
    card.color4,
  ].filter(Boolean);

  return (
    <div className="grid h-full md:grid-cols-[360px_minmax(0,1fr)] bg-gray-200">

      {/* LEFT COLUMN */}
      <div className="flex items-center justify-center p-8">
        <CardImage
          name={card.name}
          image_url={card.image_url}
        />
      </div>

      {/* RIGHT COLUMN */}
      <div className="min-w-0 overflow-y-auto items-center p-8 rounded-3xl">

        <div className="space-y-5">

          <CardHeader
            name={card.name}
          />

          <CardStats
            power={card.power}
            bulk={card.bulk}
            colors={colors}
          />

          <CardEffects
            trait={card.trait}
            effect1={card.effect1}
            effect2={card.effect2}
            flavor_text={card.flavor_text}
          />

          <CardFlavorText
            flavor_text={card.flavor_text}
          />

          <CardMetadata
            artist={card.artist}
            expansion={card.expansion}
          />

          {children}

        </div>

      </div>

    </div>
  );
}