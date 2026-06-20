import { DatabaseCard, CardForm } from "./types";

export function normalizeCard(card: DatabaseCard): CardForm {
  return {
    id: card.id,

    name: card.name,
    power: card.power,
    bulk: card.bulk,

    color1: card.color1 ?? "",
    color2: card.color2 ?? "",
    color3: card.color3 ?? "",
    color4: card.color4 ?? "",

    trait: card.trait ?? "",

    effect1: card.effect1 ?? "",
    effect2: card.effect2 ?? "",

    flavor_text: card.flavor_text ?? "",
    description: card.description ?? "",

    artist: card.artist ?? "",
    expansion: card.expansion ?? "",

    pool: card.pool ?? "draft",

    image_url: card.image_url ?? "",
  };
}