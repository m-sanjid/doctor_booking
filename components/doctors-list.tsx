"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Star, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function DoctorsList() {
  const [sortBy, setSortBy] = useState("relevance")

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
      nextAvailable: "Today",
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
      nextAvailable: "Tomorrow",
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
      nextAvailable: "Friday",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      rating: 4.7,
      reviews: 87,
      location: "Boston, MA",
      experience: "20 years",
      fee: 200,
      image: "/placeholder.svg?height=300&width=300",
      available: true,
      videoConsult: false,
      nextAvailable: "Today",
    },
    {
      id: 5,
      name: "Dr. Lisa Patel",
      specialty: "Neurologist",
      rating: 4.6,
      reviews: 112,
      location: "Seattle, WA",
      experience: "8 years",
      fee: 160,
      image: "/placeholder.svg?height=300&width=300",
      available: true,
      videoConsult: true,
      nextAvailable: "Tomorrow",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">{doctors.length} doctors found</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-sm border rounded-md p-1">
            <option value="relevance">Relevance</option>
            <option value="rating">Rating</option>
            <option value="fee-low">Fee: Low to High</option>
            <option value="fee-high">Fee: High to Low</option>
            <option value="experience">Experience</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 flex flex-col md:flex-row items-start gap-4 flex-1">
                  <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{doctor.name}</h3>
                        <p className="text-muted-foreground">{doctor.specialty}</p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                        </div>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{doctor.reviews} reviews</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-y-2 gap-x-4 mt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {doctor.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {doctor.nextAvailable}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">{doctor.experience} exp</Badge>
                      {doctor.videoConsult && (
                        <Badge variant="outline" className="flex items-center">
                          <Video className="h-3 w-3 mr-1" />
                          Video Consult
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t md:border-t-0 md:border-l p-6 flex flex-col justify-between items-center md:items-start">
                  <div>
                    <p className="text-sm text-muted-foreground">Consultation Fee</p>
                    <p className="font-semibold text-xl">${doctor.fee}</p>
                  </div>

                  <div className="mt-4 w-full">
                    <Button className="w-full" asChild>
                      <Link href={`/doctors/${doctor.id}`}>
                        {doctor.available ? "Book Appointment" : "View Profile"}
                      </Link>
                    </Button>
                    {doctor.videoConsult && (
                      <Button variant="outline" className="w-full mt-2" asChild>
                        <Link href={`/doctors/${doctor.id}/teleconsult`}>Video Consult</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="mx-1">
          Previous
        </Button>
        {[1, 2, 3, 4, 5].map((page) => (
          <Button key={page} variant={page === 1 ? "default" : "outline"} className="mx-1">
            {page}
          </Button>
        ))}
        <Button variant="outline" className="mx-1">
          Next
        </Button>
      </div>
    </div>
  )
}

