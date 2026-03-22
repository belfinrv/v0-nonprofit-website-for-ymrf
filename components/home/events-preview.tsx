import Link from "next/link"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const events = [
  {
    title: "YMRF Student Research Conference",
    date: "Coming Summer 2026",
    location: "North Carolina (Hybrid)",
    type: "Conference",
    description: "Present your research, attend keynotes, and network with peers and professionals.",
  },
  {
    title: "AI for Good Hackathon",
    date: "Coming 2026",
    location: "Online",
    type: "Hackathon",
    description: "Team-based hackathon focused on AI solutions for social impact.",
  },
  {
    title: "Python for Research Boot Camp",
    date: "Coming 2026",
    location: "Online",
    type: "Boot Camp",
    description: "Intensive program on Python, data analysis, and scientific visualization.",
  },
]

export function EventsPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Upcoming Events"
          title="Join Our Next Event"
          description="Connect with fellow researchers, learn from experts, and showcase your work."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {events.map((event) => (
            <Card key={event.title} className="group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-[#1FB6A6]/10 text-[#1FB6A6] rounded-md">
                    {event.type}
                  </span>
                </div>
                <CardTitle className="text-lg text-[#0B3C5D]">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
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
                </div>
                <Button asChild size="sm" className="w-full bg-[#0B3C5D] hover:bg-[#0a3250] text-white">
                  <Link href="/events">Register</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-[#0B3C5D] text-[#0B3C5D] hover:bg-[#0B3C5D] hover:text-white bg-transparent"
          >
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
