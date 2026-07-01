import type { Deck } from "@/types/decks";

export async function publishDeck(
  deck: Deck,
  title: string,
  description: string
) {
  const response = await fetch("/api/community", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      deck,
      title,
      description,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to publish deck.");
  }

  return response.json();
}