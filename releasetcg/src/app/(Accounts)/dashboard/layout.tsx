import { getUserProfile } from "@/utils/supabase/getUserProfile";
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import type { ReactNode } from "react"

// children type had to be specified because of clientside interacts with backend.
export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const { profile } = await getUserProfile();

  return (
    <SidebarProvider>
      <AppSidebar username={profile.username}/>
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
