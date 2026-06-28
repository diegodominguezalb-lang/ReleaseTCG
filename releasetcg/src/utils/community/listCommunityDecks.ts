import type { CommunityDeckSummary } from "@/types/community";

export async function listCommunityDecks(): Promise<
  CommunityDeckSummary[]
> {
  const response = await fetch("/api/community");

  if (!response.ok) {
    throw new Error(
      "Failed to load community decks."
    );
  }

  return response.json();
}