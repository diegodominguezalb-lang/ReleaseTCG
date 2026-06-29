import type { CommunityDeck } from "@/types/community";

export async function getCommunityDeck(
  id: string
): Promise<CommunityDeck> {
  const response = await fetch(
    `/api/community/${id}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load community deck."
    );
  }

  return response.json();
}