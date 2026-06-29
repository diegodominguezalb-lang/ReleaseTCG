import { Deck } from "./decks";

export type CommunityDeckSummary = {
  id: string;

  title: string;
  description: string;

  author: string;

  leaderId: string | null;
  leaderName: string | null;
  leaderImage: string | null;

  likes: number;
  comments: number;

  createdAt: string;
};

export type CommunityDeck = {
  id: string;

  title: string;
  description: string;

  deck: Deck;

  author: string;
  ownerId: string;

  leaderId: string | null;
  leaderName: string | null;
  leaderImage: string | null;

  likes: number;
  comments: number;

  createdAt: string;
  updatedAt: string;
};