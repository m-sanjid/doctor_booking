"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedDoctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      reviews: 124,
      location: "New York, NY",
      experience: "15 years",
      fee: 150,
      image: "/placeholder.svg?height=300&width=300",
      available: true,
      videoConsult: true,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      rating: 4.8,
      reviews: 98,
      location: "San Francisco, CA",
      experience: "10 years",
      fee: 120,
      image: "/placeholder.svg?height=300&width=300",
      available: true,
      videoConsult: true,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      rating: 4.9,
      reviews: 156,
      location: "Chicago, IL",
      experience: "12 years",
      fee: 130,
      image: "/placeholder.svg?height=300&width=300",
      available: false,
      videoConsult: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {doctors.map((doctor) => (
        <Card key={doctor.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col">
              <div className="p-6 flex items-start space-x-4">
                <Image
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{doctor.name}</h3>
                  <p className="text-muted-foreground">{doctor.specialty}</p>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                    </div>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{doctor.reviews} reviews</span>
                  </div>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {doctor.location}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-2 flex flex-wrap gap-2">
                <Badge variant="secondary">{doctor.experience} exp</Badge>
                {doctor.videoConsult && (
                  <Badge variant="outline" className="flex items-center">
                    <Video className="h-3 w-3 mr-1" />
                    Video Consult
                  </Badge>
                )}
              </div>

              <div className="border-t px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Consultation Fee</p>
                  <p className="font-semibold">${doctor.fee}</p>
                </div>
                <Button asChild>
                  <Link href={`/doctors/${doctor.id}`}>{doctor.available ? "Book Now" : "View Profile"}</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

