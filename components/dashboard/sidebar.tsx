"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Calendar, CreditCard, FileText, Home, MessageSquare, Settings, User, Video } from "lucide-react"

export default function DashboardSidebar() {
  const pathname = usePathname()

  const patientLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Appointments",
      href: "/dashboard/appointments",
      icon: Calendar,
    },
    {
      name: "Medical Records",
      href: "/dashboard/medical-records",
      icon: FileText,
    },
    {
      name: "Prescriptions",
      href: "/dashboard/prescriptions",
      icon: FileText,
    },
    {
      name: "Teleconsultations",
      href: "/dashboard/teleconsultations",
      icon: Video,
    },
    {
      name: "Messages",
      href: "/dashboard/messages",
      icon: MessageSquare,
    },
    {
      name: "Payments",
      href: "/dashboard/payments",
      icon: CreditCard,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="hidden md:flex flex-col w-64 border-r bg-background">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">MediBook</span>
        </Link>
      </div>
      <div className="flex-1 py-4 overflow-auto">
        <nav className="space-y-1 px-2">
          {patientLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <link.icon className="h-5 w-5" />
                {link.name}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

