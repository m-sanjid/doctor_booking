import type React from "react"
import type { Metadata } from "next"
import DashboardSidebar from "@/components/dashboard/sidebar"
import DashboardHeader from "@/components/dashboard/header"

export const metadata: Metadata = {
  title: "Dashboard | MediBook",
  description: "Manage your appointments and medical records",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-4 md:p-6 max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  )
}

