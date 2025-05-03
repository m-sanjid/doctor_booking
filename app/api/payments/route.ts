import { NextResponse } from "next/server"

// Initialize Stripe with your secret key
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
//   apiVersion: "2023-10-16",
// });

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const { appointmentId, amount, currency = "usd" } = body
    if (!appointmentId || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Create a payment intent with Stripe
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: amount * 100, // Stripe uses cents
    //   currency,
    //   metadata: {
    //     appointmentId,
    //   },
    // });

    // Mock response
    return NextResponse.json({
      clientSecret: "pi_mock_secret_" + Math.random().toString(36).substring(2, 9),
      appointmentId,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  // Mock payment history
  const payments = [
    {
      id: "1",
      appointmentId: "1",
      doctorId: "1",
      patientId: "1",
      doctor: {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
      },
      amount: 150,
      currency: "usd",
      status: "succeeded",
      date: new Date(2023, 10, 15).toISOString(),
      paymentMethod: "card",
      receiptUrl: "/sample-receipt.pdf",
    },
    {
      id: "2",
      appointmentId: "2",
      doctorId: "2",
      patientId: "1",
      doctor: {
        name: "Dr. Michael Chen",
        specialty: "Dermatologist",
      },
      amount: 120,
      currency: "usd",
      status: "succeeded",
      date: new Date(2023, 10, 10).toISOString(),
      paymentMethod: "card",
      receiptUrl: "/sample-receipt.pdf",
    },
    {
      id: "3",
      appointmentId: "3",
      doctorId: "3",
      patientId: "1",
      doctor: {
        name: "Dr. Emily Rodriguez",
        specialty: "Pediatrician",
      },
      amount: 130,
      currency: "usd",
      status: "succeeded",
      date: new Date(2023, 9, 25).toISOString(),
      paymentMethod: "card",
      receiptUrl: "/sample-receipt.pdf",
    },
  ]

  return NextResponse.json(payments)
}

