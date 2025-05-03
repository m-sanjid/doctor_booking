"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Star, ThumbsUp } from "lucide-react"

interface DoctorReviewsProps {
  doctorId: string
}

export default function DoctorReviews({ doctorId }: DoctorReviewsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  // Mock reviews data
  const reviews = [
    {
      id: "1",
      patientName: "John Smith",
      rating: 5,
      date: "2023-10-15",
      comment:
        "Dr. Johnson is an excellent cardiologist. She took the time to explain my condition thoroughly and answered all my questions. The treatment plan she recommended has been very effective.",
      helpful: 12,
    },
    {
      id: "2",
      patientName: "Maria Garcia",
      rating: 4,
      date: "2023-09-22",
      comment:
        "Very professional and knowledgeable doctor. The wait time was a bit long, but the quality of care was worth it.",
      helpful: 8,
    },
    {
      id: "3",
      patientName: "Robert Chen",
      rating: 5,
      date: "2023-08-30",
      comment:
        "I had a video consultation with Dr. Johnson and it was very convenient. She was attentive and provided clear instructions for my medication.",
      helpful: 15,
    },
    {
      id: "4",
      patientName: "Emily Wilson",
      rating: 3,
      date: "2023-07-18",
      comment: "Good doctor but the clinic was very busy. Had to wait for almost an hour past my appointment time.",
      helpful: 5,
    },
  ]

  // Calculate rating statistics
  const totalReviews = reviews.length
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews

  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => {
    const count = reviews.filter((review) => review.rating === rating).length
    const percentage = (count / totalReviews) * 100
    return { rating, count, percentage }
  })

  const filteredReviews =
    activeFilter === "all" ? reviews : reviews.filter((review) => review.rating === Number.parseInt(activeFilter))

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold">{averageRating.toFixed(1)}</h3>
              <div className="flex items-center my-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
              </div>
              <p className="text-sm text-muted-foreground">{totalReviews} reviews</p>
            </div>

            <div className="md:col-span-2 space-y-2">
              {ratingCounts.map(({ rating, count, percentage }) => (
                <div key={rating} className="flex items-center gap-2">
                  <div className="flex items-center w-16">
                    <span className="text-sm font-medium">{rating}</span>
                    <Star className="h-4 w-4 ml-1 fill-yellow-400 text-yellow-400" />
                  </div>
                  <Progress value={percentage} className="h-2" />
                  <span className="text-sm text-muted-foreground w-10">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeFilter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter("all")}
        >
          All
        </Button>
        {[5, 4, 3, 2, 1].map((rating) => (
          <Button
            key={rating}
            variant={activeFilter === rating.toString() ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(rating.toString())}
            className="flex items-center"
          >
            {rating} <Star className="h-3 w-3 ml-1" />
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{review.patientName}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">
                      {new Date(review.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{review.helpful}</span>
                </Button>
              </div>
              <p className="mt-3 text-muted-foreground">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

