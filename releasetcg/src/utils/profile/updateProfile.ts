import { createClient } from "@/utils/supabase/client";

export async function updateProfile(
  userId: string,
  username: string,
  bio: string
) {
  const supabase = createClient();

  return await supabase
    .from("users")
    .update({
      username,
      bio,
    })
    .eq("id", userId);
}