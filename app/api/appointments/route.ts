import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // Check authentication in a real app
  // const session = await getServerSession();
  // if (!session) {
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  // }

  // Mock appointments data
  const appointments = [
    {
      id: "1",
      doctorId: "1",
      patientId: "1",
      doctor: {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        image: "/placeholder.svg?height=300&width=300",
      },
      date: new Date(2023, 10, 25, 10, 0).toISOString(),
      type: "in-person",
      location: "New York Medical Center",
      status: "confirmed",
    },
    {
      id: "2",
      doctorId: "2",
      patientId: "1",
      doctor: {
        name: "Dr. Michael Chen",
        specialty: "Dermatologist",
        image: "/placeholder.svg?height=300&width=300",
      },
      date: new Date(2023, 10, 27, 14, 30).toISOString(),
      type: "video",
      status: "confirmed",
    },
    {
      id: "3",
      doctorId: "3",
      patientId: "1",
      doctor: {
        name: "Dr. Emily Rodriguez",
        specialty: "Pediatrician",
        image: "/placeholder.svg?height=300&width=300",
      },
      date: new Date(2023, 10, 30, 9, 0).toISOString(),
      type: "in-person",
      location: "Children's Medical Center",
      status: "pending",
    },
  ]

  return NextResponse.json(appointments)
}

export async function POST(request: Request) {
  // Check authentication in a real app
  // const session = await getServerSession();
  // if (!session) {
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  // }

  try {
    const body = await request.json()

    // Validate required fields
    const { doctorId, date, time, type } = body
    if (!doctorId || !date || !time || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would save the appointment to a database
    // and handle conflicts, availability, etc.

    // Mock response
    return NextResponse.json(
      {
        id: Math.random().toString(36).substring(2, 9),
        doctorId,
        patientId: "1", // In a real app, this would come from the session
        date,
        time,
        type,
        status: "pending",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 })
  }
}

