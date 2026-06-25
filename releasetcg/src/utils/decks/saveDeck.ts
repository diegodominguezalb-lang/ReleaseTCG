import type { DeckExport } from "@/types/decks";

export async function saveDeck(
  deck: DeckExport
) {
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