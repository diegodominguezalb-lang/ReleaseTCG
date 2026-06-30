import { createClient } from "@/utils/supabase/client";

type Props = {
  id: string;
  description: string;
};

export async function updateCommunityDeckDescription({
  id,
  description,
}: Props) {
  const supabase = createClient();

  const { error } = await supabase
    .from("community_decks")
    .update({
      description,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    throw error;
  }
}