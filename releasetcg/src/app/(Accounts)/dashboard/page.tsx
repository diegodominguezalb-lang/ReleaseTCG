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
          <div className="relative">
            <EditProfileButton profile={profile} />

            <p className="text-3xl font-bold">{profile?.username ?? user.email}</p>
            <p>{profile?.bio ?? "No bio available."}</p>
            <p>Winrate: {profile?.wins ?? 0 / (profile?.losses ?? 1) * 100}%</p>
          </div>
        </Box>
      </>
    );
  }

  
}
