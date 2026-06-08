import type { ReactNode } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

import { AppSidebar } from "@/components/app-sidebar";
import { getUserProfile } from "@/utils/supabase/getUserProfile";

export default async function AppLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { profile } = await getUserProfile();

  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar profile={profile} />

        <SidebarInset>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}