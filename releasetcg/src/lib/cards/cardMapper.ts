import { DatabaseCard, PlayableCard } from "@/types/cards";

export function toPlayableCard(
  card: DatabaseCard
): PlayableCard {
  return {
    id: card.id,

    name: card.name,

    image_url: card.image_url,

    power: card.power,
    bulk: card.bulk,

    colors: [
      card.color1,
      card.color2,
      card.color3,
      card.color4,
    ].filter((c): c is string => c !== null),

    trait: card.trait,

    effect1: card.effect1,
    effect2: card.effect2,

    flavor_text: card.flavor_text,

    description: card.description,

    artist: card.artist,

    expansion: card.expansion,
  };
}