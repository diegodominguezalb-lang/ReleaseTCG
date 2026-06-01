"use client"

import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/client"

export function EditProfileButton() {
  const supabase = createClient()

  return (
    <Button onClick={() => supabase.auth.signOut()}>
      Edit Profile
    </Button>
  )
}
