import { createClient } from "@/utils/supabase/server";

export async function getCard(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cards")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error || !data) return null;

  return data;
}