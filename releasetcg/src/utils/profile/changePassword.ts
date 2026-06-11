import { createClient } from "@/utils/supabase/client";

export async function sendPasswordVerificationCode() {
  const supabase = createClient();

  return await supabase.auth.reauthenticate();
}

export async function changePassword(
  newPassword: string,
  verificationCode: string
) {
  const supabase = createClient();

  return await supabase.auth.updateUser({
    password: newPassword,
    nonce: verificationCode,
  });
}