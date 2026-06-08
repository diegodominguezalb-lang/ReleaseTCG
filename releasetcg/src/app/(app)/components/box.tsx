"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BoxProps {
  children: ReactNode
  className?: string
}

export function Box({ children, className }: BoxProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card p-4 shadow-sm bg-orange-100",
        className
      )}
    >
      {children}
    </div>
  )
}
