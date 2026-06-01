"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { LayoutBottomIcon, AudioWave01Icon, CommandIcon, ComputerTerminalIcon, RoboticIcon, BookOpen02Icon, Settings05Icon, CropIcon, PieChartIcon, MapsIcon } from "@hugeicons/core-free-icons"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Release TCG",
      logo: (
        <HugeiconsIcon icon={LayoutBottomIcon} strokeWidth={2} />
      ),
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Play",
      url: "#",
      icon: (
        <HugeiconsIcon icon={ComputerTerminalIcon} strokeWidth={2} />
      ),
      isActive: true,
      items: [
        {
          title: "Create Lobby",
          url: "#",
        },
        {
          title: "Join Lobby",
          url: "#",
        },
      ],
    },
    {
      title: "Deck Builder",
      url: "#",
      icon: (
        <HugeiconsIcon icon={RoboticIcon} strokeWidth={2} />
      ),
      items: [
        {
          title: "New Deck",
          url: "#",
        },
        {
          title: "Community Decks",
          url: "#",
        },
      ],
    },
    {
      title: "Gallery",
      url: "#",
      icon: (
        <HugeiconsIcon icon={BookOpen02Icon} strokeWidth={2} />
      ),
      items: [
        {
          title: "All Cards",
          url: "#",
        },
        {
          title: "Set 1",
          url: "#",
        },
        {
          title: "Cosmetics",
          url: "#",
        },
      ],
    },
    {
      title: "Learn",
      url: "#",
      icon: (
        <HugeiconsIcon icon={Settings05Icon} strokeWidth={2} />
      ),
      items: [
        {
          title: "Knowing the Board",
          url: "#",
        },
        {
          title: "Understanding a Card",
          url: "#",
        },
        {
          title: "Game Phases",
          url: "#",
        },
        {
          title: "Playing Cards and Attacks",
          url: "#",
        },
        {
          title: "Building a Deck",
          url: "#",
        },
        {
          title: "Setting up a Game",
          url: "#",
        },
        {
          title: "Additional Rules",
          url: "#",
        },
        {
          title: "FAQ",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    /*
    {
      name: "Design Engineering",
      url: "#",
      icon: (
        <HugeiconsIcon icon={CropIcon} strokeWidth={2} />
      ),
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: (
        <HugeiconsIcon icon={PieChartIcon} strokeWidth={2} />
      ),
    },
    {
      name: "Travel",
      url: "#",
      icon: (
        <HugeiconsIcon icon={MapsIcon} strokeWidth={2} />
      ),
    },
    */
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
