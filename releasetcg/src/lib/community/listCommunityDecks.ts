import type { SupabaseClient } from "@supabase/supabase-js";

import type { CommunityDeckSummary } from "@/types/community";

export async function listCommunityDecks(
  supabase: SupabaseClient
): Promise<CommunityDeckSummary[]> {
  const { data, error } = await supabase
    .from("community_decks")
    .select(`
      id,
      title,
      description,
      created_at,

      owner:owner_id (
        username
      ),

      leader:leader_id (
        id,
        name,
        image_url
      )
    `)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return (data ?? []).map((post: any) => ({
    id: post.id,

    title: post.title,
    description: post.description,

    author: post.owner?.username ?? "Unknown",

    leaderId: post.leader?.id ?? null,
    leaderName: post.leader?.name ?? null,
    leaderImage: post.leader?.image_url ?? null,

    likes: 0,
    comments: 0,

    createdAt: post.created_at,
  }));
}