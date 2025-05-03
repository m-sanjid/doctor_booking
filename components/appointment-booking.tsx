"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Clock, Video } from "lucide-react"
import { useRouter } from "next/navigation"

interface AppointmentBookingProps {
  doctorId: string
  fee: number
}

export default function AppointmentBooking({ doctorId, fee }: AppointmentBookingProps) {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [consultationType, setConsultationType] = useState<"in-person" | "video">("in-person")

  // Mock time slots
  const morningSlots = ["09:00 AM", "10:00 AM", "11:00 AM"]
  const afternoonSlots = ["01:00 PM", "02:00 PM", "03:00 PM"]
  const eveningSlots = ["05:00 PM", "06:00 PM", "07:00 PM"]

  const handleBookAppointment = () => {
    if (!date || !selectedSlot) return

    // In a real app, you would make an API call to book the appointment
    router.push(
      `/booking-confirmation?doctorId=${doctorId}&date=${date.toISOString()}&slot=${selectedSlot}&type=${consultationType}`,
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Appointment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Consultation Type */}
        <div>
          <h3 className="font-medium mb-3">Consultation Type</h3>
          <div className="flex gap-2">
            <Button
              variant={consultationType === "in-person" ? "default" : "outline"}
              className="flex-1"
              onClick={() => setConsultationType("in-person")}
            >
              In-person
            </Button>
            <Button
              variant={consultationType === "video" ? "default" : "outline"}
              className="flex-1"
              onClick={() => setConsultationType("video")}
            >
              <Video className="h-4 w-4 mr-2" />
              Video
            </Button>
          </div>
        </div>

        {/* Calendar */}
        <div>
          <h3 className="font-medium mb-3">Select Date</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="border rounded-md p-3"
            disabled={(date) => {
              // Disable past dates and weekends in this example
              const today = new Date()
              today.setHours(0, 0, 0, 0)
              const day = date.getDay()
              return date < today || day === 0
            }}
          />
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="font-medium mb-3">Select Time</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-muted-foreground mb-2">Morning</h4>
              <div className="grid grid-cols-3 gap-2">
                {morningSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedSlot === slot ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSlot(slot)}
                    className="flex items-center justify-center"
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    {slot}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm text-muted-foreground mb-2">Afternoon</h4>
              <div className="grid grid-cols-3 gap-2">
                {afternoonSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedSlot === slot ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSlot(slot)}
                    className="flex items-center justify-center"
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    {slot}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm text-muted-foreground mb-2">Evening</h4>
              <div className="grid grid-cols-3 gap-2">
                {eveningSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedSlot === slot ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSlot(slot)}
                    className="flex items-center justify-center"
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fee */}
        <div className="flex justify-between items-center pt-4 border-t">
          <div>
            <p className="text-sm text-muted-foreground">Consultation Fee</p>
            <p className="font-semibold text-xl">${fee}</p>
          </div>

          <Badge variant="outline">{consultationType === "in-person" ? "In-clinic" : "Video Call"}</Badge>
        </div>

        {/* Book Button */}
        <Button className="w-full" size="lg" disabled={!date || !selectedSlot} onClick={handleBookAppointment}>
          Book Appointment
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          By booking this appointment you agree to our{" "}
          <a href="/terms" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
        </p>
      </CardContent>
    </Card>
  )
}

