import { requireUser } from "@/utils/supabase/requireUser";

export default async function Page() {
  const { user, supabase } = await requireUser();

  return <p>Dashboard for {user.email}</p>;
}
