"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Video } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function UpcomingAppointments() {
  const appointments = [
    {
      id: 1,
      doctor: {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        image: "/placeholder.svg?height=300&width=300",
      },
      date: new Date(2023, 10, 25, 10, 0),
      type: "in-person",
      location: "New York Medical Center",
      status: "confirmed",
    },
    {
      id: 2,
      doctor: {
        name: "Dr. Michael Chen",
        specialty: "Dermatologist",
        image: "/placeholder.svg?height=300&width=300",
      },
      date: new Date(2023, 10, 27, 14, 30),
      type: "video",
      status: "confirmed",
    },
    {
      id: 3,
      doctor: {
        name: "Dr. Emily Rodriguez",
        specialty: "Pediatrician",
        image: "/placeholder.svg?height=300&width=300",
      },
      date: new Date(2023, 10, 30, 9, 0),
      type: "in-person",
      location: "Children's Medical Center",
      status: "pending",
    },
  ]

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="flex flex-col md:flex-row gap-4 p-4 rounded-lg border">
          <div className="flex items-center gap-4">
            <Image
              src={appointment.doctor.image || "/placeholder.svg"}
              alt={appointment.doctor.name}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h4 className="font-medium">{appointment.doctor.name}</h4>
              <p className="text-sm text-muted-foreground">{appointment.doctor.specialty}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 md:ml-auto">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
              <span className="text-sm">
                {appointment.date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
              </span>
            </div>

            <div className="flex items-center">
              <Clock className="h-4 w-4 text-muted-foreground mr-2" />
              <span className="text-sm">
                {appointment.date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
              </span>
            </div>

            {appointment.type === "in-person" && (
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-sm">{appointment.location}</span>
              </div>
            )}

            {appointment.type === "video" && (
              <div className="flex items-center">
                <Video className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-sm">Video Consultation</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 md:ml-4">
            <Badge variant={appointment.status === "confirmed" ? "default" : "outline"}>
              {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
            </Badge>

            <div className="flex gap-2">
              {appointment.type === "video" && appointment.status === "confirmed" && (
                <Button size="sm" asChild>
                  <Link href={`/dashboard/teleconsultations/${appointment.id}`}>Join</Link>
                </Button>
              )}

              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/appointments/${appointment.id}`}>Details</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {appointments.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No upcoming appointments</p>
          <Button className="mt-4" asChild>
            <Link href="/doctors">Book an Appointment</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

