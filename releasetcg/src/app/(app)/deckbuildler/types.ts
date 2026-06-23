import type { PlayableCard } from "@/types/cards";
import type { DeckEntry } from "@/types/decks";

export type Zone = "leader" | "main" | "extra";

export type Deck = {
  leader: string | null;
  mainDeck: DeckEntry[];
  extraDeck: DeckEntry[];
};

export type CardCounts = Record<
  string,
  {
    main: number;
    extra: number;
  }
>;

export type DeckCard = {
  card: PlayableCard;
  count: number;
};