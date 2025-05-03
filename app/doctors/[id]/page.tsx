import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Video, Phone, Mail, Globe, ThumbsUp, Award, Stethoscope } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AppointmentBooking from "@/components/appointment-booking"
import DoctorReviews from "@/components/doctor-reviews"

export default function DoctorProfile({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the doctor data based on the ID
  const doctor = {
    id: params.id,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    subSpecialty: "Interventional Cardiology",
    rating: 4.9,
    reviews: 124,
    location: "New York Medical Center, 123 Health St, New York, NY",
    experience: "15 years",
    fee: 150,
    image: "/placeholder.svg?height=400&width=400",
    available: true,
    videoConsult: true,
    about:
      "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating various heart conditions. She specializes in interventional cardiology and has performed over 1000 successful procedures. Dr. Johnson is known for her patient-centered approach and dedication to preventive care.",
    education: [
      { degree: "MD", institution: "Harvard Medical School", year: "2005" },
      { degree: "Residency in Internal Medicine", institution: "Massachusetts General Hospital", year: "2008" },
      { degree: "Fellowship in Cardiology", institution: "Johns Hopkins Hospital", year: "2011" },
    ],
    specializations: [
      "Coronary Artery Disease",
      "Heart Failure",
      "Cardiac Catheterization",
      "Preventive Cardiology",
      "Echocardiography",
    ],
    awards: ["American Heart Association Recognition Award, 2018", "Top Cardiologist, New York Medical Society, 2020"],
    languages: ["English", "Spanish"],
    contact: {
      phone: "+1 (555) 123-4567",
      email: "dr.johnson@nycardiology.com",
      website: "www.nycardiology.com",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Doctor Profile */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Image
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h1 className="text-2xl font-bold">{doctor.name}</h1>
                  <p className="text-muted-foreground">
                    {doctor.specialty} • {doctor.subSpecialty}
                  </p>

                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 font-medium">{doctor.rating}</span>
                    </div>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{doctor.reviews} reviews</span>
                  </div>

                  <div className="flex items-start mt-4">
                    <MapPin className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                    <span className="text-muted-foreground">{doctor.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">{doctor.experience} experience</Badge>
                    {doctor.videoConsult && (
                      <Badge variant="outline" className="flex items-center">
                        <Video className="h-3 w-3 mr-1" />
                        Video Consultation
                      </Badge>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href="#book-appointment">Book Appointment</Link>
                    </Button>
                    {doctor.videoConsult && (
                      <Button variant="outline" className="flex items-center gap-2" asChild>
                        <Link href={`/doctors/${doctor.id}/teleconsult`}>
                          <Video className="h-4 w-4" />
                          Video Consult
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="about" className="mt-8">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">About {doctor.name}</h2>
                  <p className="text-muted-foreground">{doctor.about}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Specializations</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {doctor.specializations.map((specialization) => (
                      <li key={specialization} className="flex items-center">
                        <Stethoscope className="h-4 w-4 mr-2 text-primary" />
                        {specialization}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                      <span>{doctor.contact.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                      <span>{doctor.contact.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 mr-3 text-muted-foreground" />
                      <span>{doctor.contact.website}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Education</h2>
                  <div className="space-y-4">
                    {doctor.education.map((edu, index) => (
                      <div key={index} className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground">{edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Awards & Recognitions</h2>
                  <ul className="space-y-2">
                    {doctor.awards.map((award, index) => (
                      <li key={index} className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-2 text-primary" />
                        {award}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <DoctorReviews doctorId={doctor.id} />
            </TabsContent>

            <TabsContent value="faqs">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">What conditions does Dr. Johnson treat?</h3>
                      <p className="text-muted-foreground mt-1">
                        Dr. Johnson specializes in treating various heart conditions including coronary artery disease,
                        heart failure, arrhythmias, and valve disorders.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">What insurance plans does Dr. Johnson accept?</h3>
                      <p className="text-muted-foreground mt-1">
                        Dr. Johnson accepts most major insurance plans including Medicare, Blue Cross Blue Shield,
                        Aetna, and UnitedHealthcare.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">How long is the typical appointment with Dr. Johnson?</h3>
                      <p className="text-muted-foreground mt-1">
                        Initial consultations typically last 30-45 minutes, while follow-up appointments are usually
                        15-20 minutes.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Does Dr. Johnson perform cardiac procedures?</h3>
                      <p className="text-muted-foreground mt-1">
                        Yes, as an interventional cardiologist, Dr. Johnson performs various cardiac procedures
                        including cardiac catheterization, angioplasty, and stent placement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Appointment Booking */}
        <div id="book-appointment">
          <div className="sticky top-20">
            <AppointmentBooking doctorId={doctor.id} fee={doctor.fee} />
          </div>
        </div>
      </div>
    </div>
  )
}

