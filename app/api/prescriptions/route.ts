import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // Mock prescriptions data
  const prescriptions = [
    {
      id: "1",
      doctorId: "1",
      patientId: "1",
      doctor: {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
      },
      date: new Date(2023, 10, 15).toISOString(),
      medications: [
        {
          name: "Lisinopril",
          dosage: "10mg",
          frequency: "Once daily",
          duration: "30 days",
          instructions: "Take in the morning with food",
        },
        {
          name: "Aspirin",
          dosage: "81mg",
          frequency: "Once daily",
          duration: "30 days",
          instructions: "Take with food",
        },
      ],
      notes: "Follow up in 4 weeks. Continue regular exercise and low-sodium diet.",
      fileUrl: "/sample-prescription.pdf",
    },
    {
      id: "2",
      doctorId: "2",
      patientId: "1",
      doctor: {
        name: "Dr. Michael Chen",
        specialty: "Dermatologist",
      },
      date: new Date(2023, 10, 5).toISOString(),
      medications: [
        {
          name: "Tretinoin Cream",
          dosage: "0.025%",
          frequency: "Once daily",
          duration: "60 days",
          instructions: "Apply a pea-sized amount to affected areas at night",
        },
        {
          name: "Clindamycin Gel",
          dosage: "1%",
          frequency: "Twice daily",
          duration: "30 days",
          instructions: "Apply to affected areas in the morning and evening",
        },
      ],
      notes: "Avoid sun exposure and use SPF 30+ sunscreen daily. Follow up in 6 weeks.",
      fileUrl: "/sample-prescription.pdf",
    },
    {
      id: "3",
      doctorId: "3",
      patientId: "1",
      doctor: {
        name: "Dr. Emily Rodriguez",
        specialty: "Pediatrician",
      },
      date: new Date(2023, 9, 20).toISOString(),
      medications: [
        {
          name: "Amoxicillin",
          dosage: "250mg/5ml",
          frequency: "Three times daily",
          duration: "10 days",
          instructions: "Take with food. Complete the full course.",
        },
      ],
      notes: "Ensure adequate rest and hydration. Follow up if symptoms persist after 5 days.",
      fileUrl: "/sample-prescription.pdf",
    },
  ]

  return NextResponse.json(prescriptions)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const { patientId, medications, notes } = body
    if (!patientId || !medications || !notes) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would save the prescription to a database

    // Mock response
    return NextResponse.json(
      {
        id: Math.random().toString(36).substring(2, 9),
        doctorId: "1", // In a real app, this would come from the session
        patientId,
        date: new Date().toISOString(),
        medications,
        notes,
        fileUrl: "/sample-prescription.pdf",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Failed to create prescription" }, { status: 500 })
  }
}

