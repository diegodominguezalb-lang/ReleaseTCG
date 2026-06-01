import { createClient } from "@/utils/supabase/server";
import { Box } from "./components/box";
import { EditProfileButton } from "./components/editProfileButton";

export default async function Page() {

  return (
    <>
      <Box>
        <p>Dashboard for </p>
        <EditProfileButton />
      </Box>
    </>
  );
}
