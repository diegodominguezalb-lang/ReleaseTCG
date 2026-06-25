import type { Deck } from "@/types/decks";

export async function updateDeck(
  id: string,
  deck: Deck
): Promise<Deck> {
  const response = await fetch(`/api/decks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deck),
  });

  if (!response.ok) {
    throw new Error("Failed to update deck.");
  }

  return response.json();
}