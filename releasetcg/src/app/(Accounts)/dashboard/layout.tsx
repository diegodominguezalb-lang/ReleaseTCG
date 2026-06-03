import { getUserProfile } from "@/utils/supabase/getUserProfile";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import type { ReactNode } from "react"

// children type had to be specified because of clientside interacts with backend.
export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const { profile } = await getUserProfile();

  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar profile={profile}/>
        <SidebarInset>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
