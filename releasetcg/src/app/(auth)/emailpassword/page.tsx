<<<<<<< Updated upstream
import { redirect } from "next/dist/client/components/navigation";
=======
import { redirect } from "next/navigation";
>>>>>>> Stashed changes
import EmailPassword from "./components/emailpassword";
import { createClient } from "@/utils/supabase/server";

export default async function EmailPasswordPage() {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return <EmailPassword user={user}/>;
    }
    else {
      redirect("/dashboard");
    }
    
}
