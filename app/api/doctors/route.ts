import { NextResponse } from "next/server"

// In a real app, you would fetch this data from a database
const doctors = [
  {
    id: "1",
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
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    subSpecialty: "Cosmetic Dermatology",
    rating: 4.8,
    reviews: 98,
    location: "San Francisco Dermatology Clinic, 456 Skin St, San Francisco, CA",
    experience: "10 years",
    fee: 120,
    image: "/placeholder.svg?height=400&width=400",
    available: true,
    videoConsult: true,
    about:
      "Dr. Michael Chen is a board-certified dermatologist specializing in cosmetic dermatology and skin cancer treatment. With 10 years of experience, he has helped thousands of patients achieve healthier skin. Dr. Chen is committed to providing personalized care and staying updated with the latest advancements in dermatology.",
    education: [
      { degree: "MD", institution: "Stanford University School of Medicine", year: "2010" },
      { degree: "Residency in Dermatology", institution: "UCSF Medical Center", year: "2014" },
      { degree: "Fellowship in Cosmetic Dermatology", institution: "NYU Langone Health", year: "2015" },
    ],
    specializations: [
      "Acne Treatment",
      "Skin Cancer Screening",
      "Botox and Fillers",
      "Laser Therapy",
      "Eczema and Psoriasis",
    ],
    awards: ["American Academy of Dermatology Excellence Award, 2019", "Patient's Choice Award, 2021"],
    languages: ["English", "Mandarin"],
    contact: {
      phone: "+1 (555) 987-6543",
      email: "dr.chen@sfdermatology.com",
      website: "www.sfdermatology.com",
    },
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    subSpecialty: "Pediatric Neurology",
    rating: 4.9,
    reviews: 156,
    location: "Chicago Children's Hospital, 789 Kid St, Chicago, IL",
    experience: "12 years",
    fee: 130,
    image: "/placeholder.svg?height=400&width=400",
    available: true,
    videoConsult: true,
    about:
      "Dr. Emily Rodriguez is a compassionate pediatrician with 12 years of experience in caring for children of all ages. She specializes in pediatric neurology and has a particular interest in developmental disorders. Dr. Rodriguez is known for her gentle approach and ability to connect with young patients.",
    education: [
      { degree: "MD", institution: "University of Chicago Pritzker School of Medicine", year: "2008" },
      { degree: "Residency in Pediatrics", institution: "Children's Hospital of Chicago", year: "2011" },
      { degree: "Fellowship in Pediatric Neurology", institution: "Boston Children's Hospital", year: "2013" },
    ],
    specializations: [
      "Well-Child Visits",
      "Developmental Assessments",
      "Childhood Vaccinations",
      "Behavioral Issues",
      "Neurological Disorders",
    ],
    awards: ["American Academy of Pediatrics Recognition, 2017", "Top Pediatrician, Chicago Medical Society, 2020"],
    languages: ["English", "Spanish"],
    contact: {
      phone: "+1 (555) 456-7890",
      email: "dr.rodriguez@chicagopediatrics.com",
      website: "www.chicagopediatrics.com",
    },
  },
]

export async function GET(request: Request) {
  // In a real app, you would implement filtering, pagination, etc.
  const { searchParams } = new URL(request.url)
  const specialty = searchParams.get("specialty")
  const location = searchParams.get("location")

  let filteredDoctors = doctors

  if (specialty) {
    filteredDoctors = filteredDoctors.filter((doctor) =>
      doctor.specialty.toLowerCase().includes(specialty.toLowerCase()),
    )
  }

  if (location) {
    filteredDoctors = filteredDoctors.filter((doctor) => doctor.location.toLowerCase().includes(location.toLowerCase()))
  }

  return NextResponse.json(filteredDoctors)
}

