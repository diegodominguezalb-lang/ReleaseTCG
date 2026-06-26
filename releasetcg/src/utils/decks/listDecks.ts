import type { DeckSummary } from "@/types/decks";

export async function listDecks(): Promise<DeckSummary[]> {
  const response = await fetch("/api/decks");

  if (!response.ok) {
    throw new Error("Failed to load decks.");
  }

  return response.json();
}