import type { PlayableCard } from "@/types/cards";

export type Zone = "leader" | "main" | "extra";

export type DeckEntry = {
  cardId: string;
  count: number;
};

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