import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface SpecialtyCardProps {
  name: string
  icon: string
  count: number
}

export default function SpecialtyCard({ name, icon, count }: SpecialtyCardProps) {
  return (
    <Link href={`/specialties/${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="text-4xl mb-3">{icon}</div>
          <h3 className="font-medium mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{count} doctors</p>
        </CardContent>
      </Card>
    </Link>
  )
}

