// this grabs the user's profile info from the database which can be used in the sidebar.
import { createClient } from "@/utils/supabase/server"

export async function getUserProfile() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return { user: null, profile: null }

  const { data: profile } = await supabase
    .from("users") // or "profiles"
    .select("*")
    .eq("id", user.id)
    .single()

  return { user, profile }
}