import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, MapPin, Filter, Star } from "lucide-react"
import DoctorsList from "@/components/doctors-list"

export default function DoctorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Doctors</h1>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 flex items-center border rounded-md p-2">
          <Search className="h-5 w-5 text-muted-foreground mr-2" />
          <Input className="border-0 focus-visible:ring-0 p-0" placeholder="Search doctors, specialties..." />
        </div>

        <div className="flex-1 flex items-center border rounded-md p-2">
          <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
          <Input className="border-0 focus-visible:ring-0 p-0" placeholder="Your location" />
        </div>

        <Button>Search</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h2>

              <div className="space-y-6">
                {/* Specialty Filter */}
                <div>
                  <h3 className="font-medium mb-3">Specialty</h3>
                  <div className="space-y-2">
                    {["Cardiologist", "Dermatologist", "Neurologist", "Pediatrician", "Orthopedic"].map((specialty) => (
                      <div key={specialty} className="flex items-center space-x-2">
                        <Checkbox id={`specialty-${specialty}`} />
                        <label htmlFor={`specialty-${specialty}`} className="text-sm">
                          {specialty}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability Filter */}
                <div>
                  <h3 className="font-medium mb-3">Availability</h3>
                  <div className="space-y-2">
                    {["Available Today", "Available Tomorrow", "This Week", "Next Week"].map((time) => (
                      <div key={time} className="flex items-center space-x-2">
                        <Checkbox id={`time-${time}`} />
                        <label htmlFor={`time-${time}`} className="text-sm">
                          {time}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <h3 className="font-medium mb-3">Consultation Type</h3>
                  <div className="space-y-2">
                    {["In-person", "Video Consultation"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`type-${type}`} />
                        <label htmlFor={`type-${type}`} className="text-sm">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <h3 className="font-medium mb-3">Gender</h3>
                  <div className="space-y-2">
                    {["Male", "Female"].map((gender) => (
                      <div key={gender} className="flex items-center space-x-2">
                        <Checkbox id={`gender-${gender}`} />
                        <label htmlFor={`gender-${gender}`} className="text-sm">
                          {gender}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="font-medium mb-3">Experience</h3>
                  <div className="space-y-2">
                    {["0-5 years", "5-10 years", "10-15 years", "15+ years"].map((exp) => (
                      <div key={exp} className="flex items-center space-x-2">
                        <Checkbox id={`exp-${exp}`} />
                        <label htmlFor={`exp-${exp}`} className="text-sm">
                          {exp}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fee Range */}
                <div>
                  <h3 className="font-medium mb-3">Fee Range</h3>
                  <div className="px-2">
                    <Slider defaultValue={[100]} max={500} step={10} />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>$0</span>
                      <span>$500</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <h3 className="font-medium mb-3">Rating</h3>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                          {Array(rating)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          {Array(5 - rating)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gray-300" />
                            ))}
                          <span className="ml-1">& up</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Doctors List */}
        <div className="lg:col-span-3">
          <DoctorsList />
        </div>
      </div>
    </div>
  )
}

