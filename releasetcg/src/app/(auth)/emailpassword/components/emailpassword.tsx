"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import AuthForm from "./AuthForm";
import SessionPanel from "./SessionPanel";
import { AuthPage } from "./authpage";

export default function EmailPassword({ user }: { user: User | null }) {
  const supabase = createClient();
  const [currentUser, setCurrentUser] = useState<User | null>(user);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setCurrentUser(session?.user ?? null);
      }
    );

    return () => listener?.subscription.unsubscribe();
  }, [supabase]);

  return (
    <AuthPage title="Continue with Email">
      {!currentUser && (
        <AuthForm supabase={supabase} onAuth={() => setCurrentUser(null)} />
      )}

      <SessionPanel
        user={currentUser}
        onSignOut={async () => {
          await supabase.auth.signOut();
          setCurrentUser(null);
        }}
      />
    </AuthPage>
  );
}
