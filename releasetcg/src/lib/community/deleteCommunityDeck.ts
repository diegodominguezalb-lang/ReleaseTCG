import { createClient } from "@/utils/supabase/client";

export async function deleteCommunityDeck(
  id: string
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("community_decks")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
}