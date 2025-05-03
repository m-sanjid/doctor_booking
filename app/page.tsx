import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Video, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SpecialtyCard from "@/components/specialty-card"
import FeaturedDoctors from "@/components/featured-doctors"

export default function Home() {
  const specialties = [
    { name: "General Physician", icon: "🩺", count: 240 },
    { name: "Dentist", icon: "🦷", count: 158 },
    { name: "Dermatologist", icon: "👨‍⚕️", count: 85 },
    { name: "Pediatrician", icon: "👶", count: 112 },
    { name: "Orthopedic", icon: "🦴", count: 94 },
    { name: "Cardiologist", icon: "❤️", count: 76 },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Your Health, Our Priority</h1>
              <p className="text-lg text-muted-foreground">
                Book appointments with the best doctors near you. Get instant consultations, prescriptions, and more.
              </p>

              <Card className="w-full max-w-md">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center border rounded-md p-2">
                      <Search className="h-5 w-5 text-muted-foreground mr-2" />
                      <Input
                        className="border-0 focus-visible:ring-0 p-0"
                        placeholder="Search doctors, specialties..."
                      />
                    </div>

                    <div className="flex items-center border rounded-md p-2">
                      <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                      <Input className="border-0 focus-visible:ring-0 p-0" placeholder="Your location" />
                    </div>

                    <Button className="w-full">Find Doctors</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="hidden md:block relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Doctor with patient"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
                <Search className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find a Doctor</h3>
              <p className="text-muted-foreground">Search for specialists based on specialty, location, and reviews.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Appointment</h3>
              <p className="text-muted-foreground">Select a convenient time slot and book instantly.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full mb-4">
                <Video className="h-8 w-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Consultation</h3>
              <p className="text-muted-foreground">
                Visit in-person or get online consultation from the comfort of your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Browse by Specialty</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Find the right specialist for your health needs from our wide range of medical specialties
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialties.map((specialty) => (
              <SpecialtyCard key={specialty.name} name={specialty.name} icon={specialty.icon} count={specialty.count} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/specialties">View All Specialties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Top Rated Doctors</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Book appointments with the highest-rated doctors in your area
          </p>

          <FeaturedDoctors />

          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/doctors">Find More Doctors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <Star key={idx} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>
                  <p className="mb-4">
                    "MediBook made it so easy to find a specialist and book an appointment. The video consultation
                    feature saved me so much time!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to prioritize your health?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join thousands of patients who have simplified their healthcare journey with MediBook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/register">Sign Up as Patient</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent" asChild>
              <Link href="/register?role=doctor">Join as Doctor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

