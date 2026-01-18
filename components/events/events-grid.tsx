"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react"

const events = [
  {
    id: 1,
    title: "YMRF Spring Research Conference",
    date: "March 15-16, 2026",
    location: "UNC Chapel Hill / Virtual",
    type: "Conference",
    format: "Hybrid",
    description:
      "Our flagship annual conference where students present their research through poster sessions and lightning talks. Features keynote speakers from leading research institutions.",
    capacity: "200 attendees",
    registrationDeadline: "March 1, 2026",
  },
  {
    id: 2,
    title: "AI for Good Hackathon",
    date: "April 5-6, 2026",
    location: "Online / Research Triangle Park",
    type: "Hackathon",
    format: "Virtual",
    description:
      "48-hour hackathon focused on building AI solutions for social impact. Form teams, tackle real-world problems, and compete for prizes.",
    capacity: "100 participants",
    registrationDeadline: "March 25, 2026",
  },
  {
    id: 3,
    title: "Python for Research Boot Camp",
    date: "May 1-14, 2026",
    location: "NC State Centennial Campus",
    type: "Boot Camp",
    format: "Hybrid",
    description:
      "Two-week intensive program covering Python fundamentals, data analysis with pandas, and visualization with matplotlib for research applications.",
    capacity: "40 students",
    registrationDeadline: "April 15, 2026",
  },
  {
    id: 4,
    title: "Scientific Writing Workshop",
    date: "June 8, 2026",
    location: "UNC Charlotte @ SmartNet Lab",
    type: "Workshop",
    format: "Virtual",
    description:
      "One-day workshop on writing effective research papers, abstracts, and presentations. Learn from published researchers and get feedback on your work.",
    capacity: "50 students",
    registrationDeadline: "June 1, 2026",
  },
  {
    id: 5,
    title: "Summer Research Symposium",
    date: "July 20, 2026",
    location: "Raleigh Convention Center",
    type: "Conference",
    format: "In-Person",
    description:
      "End-of-summer showcase for Research Mentorship Program participants. Present your research and network with mentors and peers.",
    capacity: "150 attendees",
    registrationDeadline: "July 10, 2026",
  },
  {
    id: 6,
    title: "Data Visualization Challenge",
    date: "August 12-13, 2026",
    location: "Online",
    type: "Hackathon",
    format: "Virtual",
    description:
      "Create compelling data visualizations that tell a story. Work with real datasets and compete for recognition and prizes.",
    capacity: "80 participants",
    registrationDeadline: "August 1, 2026",
  },
]

const filters = {
  format: ["All", "Virtual", "In-Person", "Hybrid"],
  type: ["All", "Conference", "Hackathon", "Boot Camp", "Workshop"],
}

export function EventsGrid() {
  const [formatFilter, setFormatFilter] = useState("All")
  const [typeFilter, setTypeFilter] = useState("All")

  const filteredEvents = events.filter((event) => {
    const matchesFormat = formatFilter === "All" || event.format === formatFilter
    const matchesType = typeFilter === "All" || event.type === typeFilter
    return matchesFormat && matchesType
  })

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap gap-6 mb-10">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Format</p>
            <div className="flex flex-wrap gap-2">
              {filters.format.map((filter) => (
                <Button
                  key={filter}
                  variant={formatFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFormatFilter(filter)}
                  className={
                    formatFilter === filter
                      ? "bg-[#0B3C5D] hover:bg-[#0a3250] text-white"
                      : "border-border hover:border-[#1FB6A6]"
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Program Type</p>
            <div className="flex flex-wrap gap-2">
              {filters.type.map((filter) => (
                <Button
                  key={filter}
                  variant={typeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTypeFilter(filter)}
                  className={
                    typeFilter === filter
                      ? "bg-[#0B3C5D] hover:bg-[#0a3250] text-white"
                      : "border-border hover:border-[#1FB6A6]"
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="group hover:shadow-lg transition-all hover:border-[#1FB6A6]/30">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-[#1FB6A6]/10 text-[#1FB6A6] rounded-md">
                    {event.type}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-[#0B3C5D]/10 text-[#0B3C5D] rounded-md">
                    {event.format}
                  </span>
                </div>
                <CardTitle className="text-lg text-[#0B3C5D] group-hover:text-[#1FB6A6] transition-colors">
                  {event.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#F4C430]" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#F4C430]" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#F4C430]" />
                    {event.capacity}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#F4C430]" />
                    <span className="text-xs">Register by {event.registrationDeadline}</span>
                  </div>
                </div>
                <Button className="w-full bg-[#0B3C5D] hover:bg-[#0a3250] text-white">
                  Register
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No events match your filters. Try adjusting your selection.</p>
          </div>
        )}
      </div>
    </section>
  )
}
