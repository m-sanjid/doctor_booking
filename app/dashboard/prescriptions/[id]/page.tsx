import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Printer, Share } from "lucide-react"
import Image from "next/image"

export default function PrescriptionDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the prescription data based on the ID
  const prescription = {
    id: params.id,
    doctorId: "1",
    patientId: "1",
    doctor: {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      qualification: "MD, FACC",
      registrationNumber: "MED12345",
      address: "New York Medical Center, 123 Health St, New York, NY",
      contact: "+1 (555) 123-4567",
    },
    patient: {
      name: "John Doe",
      age: 45,
      gender: "Male",
      address: "456 Patient St, New York, NY",
    },
    date: new Date(2023, 10, 15).toISOString(),
    medications: [
      {
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        duration: "30 days",
        instructions: "Take in the morning with food",
        quantity: "30 tablets",
      },
      {
        name: "Aspirin",
        dosage: "81mg",
        frequency: "Once daily",
        duration: "30 days",
        instructions: "Take with food",
        quantity: "30 tablets",
      },
    ],
    diagnosis: "Essential Hypertension (I10)",
    notes: "Follow up in 4 weeks. Continue regular exercise and low-sodium diet.",
    fileUrl: "/sample-prescription.pdf",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Prescription Details</h1>

        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between border-b pb-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Hospital Logo"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">New York Medical Center</h2>
                <p className="text-muted-foreground">123 Health St, New York, NY</p>
                <p className="text-muted-foreground">Phone: +1 (555) 987-6543</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-sm text-muted-foreground">Prescription ID: {prescription.id}</p>
              <p className="text-sm text-muted-foreground">Date: {new Date(prescription.date).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Doctor Information</h3>
              <div className="space-y-1">
                <p>{prescription.doctor.name}</p>
                <p className="text-sm text-muted-foreground">{prescription.doctor.specialty}</p>
                <p className="text-sm text-muted-foreground">{prescription.doctor.qualification}</p>
                <p className="text-sm text-muted-foreground">Reg. No: {prescription.doctor.registrationNumber}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Patient Information</h3>
              <div className="space-y-1">
                <p>{prescription.patient.name}</p>
                <p className="text-sm text-muted-foreground">
                  {prescription.patient.age} years, {prescription.patient.gender}
                </p>
                <p className="text-sm text-muted-foreground">{prescription.patient.address}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Diagnosis</h3>
            <p>{prescription.diagnosis}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-4">Medications</h3>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-2 text-left">Medication</th>
                    <th className="px-4 py-2 text-left">Dosage</th>
                    <th className="px-4 py-2 text-left">Frequency</th>
                    <th className="px-4 py-2 text-left">Duration</th>
                    <th className="px-4 py-2 text-left">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {prescription.medications.map((medication, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-3">{medication.name}</td>
                      <td className="px-4 py-3">{medication.dosage}</td>
                      <td className="px-4 py-3">{medication.frequency}</td>
                      <td className="px-4 py-3">{medication.duration}</td>
                      <td className="px-4 py-3">{medication.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Instructions</h3>
            <ul className="list-disc pl-5 space-y-1">
              {prescription.medications.map((medication, index) => (
                <li key={index}>
                  <span className="font-medium">{medication.name}:</span> {medication.instructions}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Additional Notes</h3>
            <p>{prescription.notes}</p>
          </div>

          <div className="flex justify-end mt-8">
            <div className="text-center">
              <div className="border-b border-dashed border-black pb-2 mb-2">
                <Image src="/placeholder.svg?height=60&width=120" alt="Doctor's Signature" width={120} height={60} />
              </div>
              <p className="font-medium">{prescription.doctor.name}</p>
              <p className="text-sm text-muted-foreground">{prescription.doctor.specialty}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

