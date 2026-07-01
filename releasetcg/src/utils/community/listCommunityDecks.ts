import { CommunityFilter } from "@/types/community";
import { CommunityDeckSummary } from "@/types/community";

export async function listCommunityDecks({
  search,
  filter,
}: {
  search: string;
  filter: CommunityFilter;
}): Promise<CommunityDeckSummary[]> {
  const params =
    new URLSearchParams({
      search,
      filter,
    });

  const response = await fetch(
    `/api/community?${params}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load community decks."
    );
  }

  return response.json();
}