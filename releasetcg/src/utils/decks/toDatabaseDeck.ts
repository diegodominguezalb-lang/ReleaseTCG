import type { Deck } from "@/types/decks";

export function toDatabaseDeck(deck: Deck) {
  return {
    name: deck.name,
    leader: deck.leader,
    main_deck: deck.mainDeck,
    extra_deck: deck.extraDeck,
  };
}