import type { Deck } from "@/types/decks";

export async function saveDeck(
  deck: Deck
): Promise<Deck> {
  const response = await fetch("/api/decks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deck),
  });

  if (!response.ok) {
    throw new Error("Failed to save deck.");
  }

  return response.json();
}