"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function EditProfileButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/dashboard/edit")}>
      Edit Profile
    </Button>
  );
}