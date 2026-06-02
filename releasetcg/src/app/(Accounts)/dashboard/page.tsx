import { createClient } from "@/utils/supabase/server";
import { Box } from "./components/box";
import { EditProfileButton } from "./components/editProfileButton";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/emailpassword");
  }
  else {
    const { data: profile } = await supabase
      .from("users")
      .select("*")
      .eq("id", user.id)
      .single();

    return (
      <>
        <Box>
          <p>Dashboard for {profile?.username ?? user.email}</p>
          <p>Winrate: {profile?.winrate ?? 0}%</p>
          <EditProfileButton />
        </Box>
      </>
    );
  }

  
}
