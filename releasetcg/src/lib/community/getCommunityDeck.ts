import type { SupabaseClient } from "@supabase/supabase-js";

import type { CommunityDeck } from "@/types/community";
import type { DeckEntry } from "@/types/decks";

export async function getCommunityDeck(
  supabase: SupabaseClient,
  id: string
): Promise<CommunityDeck> {
  const { data, error } = await supabase
    .from("community_decks")
    .select(`
      id,
      title,
      description,
      deck,
      owner_id,
      created_at,
      updated_at,

      owner:owner_id (
        username
      ),

      leader:leader_id (
        id,
        name,
        image_url
      )
    `)
    .eq("id", id)
    .single();

  if (error || !data) {
    throw new Error("Community deck not found.");
  }

  const post = data as any;

  const storedDeck = post.deck as {
    name: string;
    leader: string | null;
    mainDeck: DeckEntry[];
    extraDeck: DeckEntry[];
  };

  return {
    id: post.id,

    title: post.title,
    description: post.description,

    deck: {
      name: storedDeck.name,
      leader: storedDeck.leader,
      mainDeck: storedDeck.mainDeck,
      extraDeck: storedDeck.extraDeck,
    },

    author: post.owner?.username ?? "Unknown",
    ownerId: post.owner_id,

    leaderId: post.leader?.id ?? null,
    leaderName: post.leader?.name ?? null,
    leaderImage: post.leader?.image_url ?? null,

    likes: 0,
    comments: 0,

    createdAt: post.created_at,
    updatedAt: post.updated_at,
  };
}