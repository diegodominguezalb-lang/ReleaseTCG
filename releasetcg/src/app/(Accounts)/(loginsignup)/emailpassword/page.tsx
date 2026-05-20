import EmailPassword from "../components/emailpassword";
import { createClient } from "@/utils/supabase/client";

export default async function EmailPasswordPage() {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    console.log({ user });
    return <EmailPassword user={user} />;
}
