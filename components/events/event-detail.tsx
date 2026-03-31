import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export function EventDetail() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[#1FB6A6]/10 text-[#1FB6A6] rounded-full mb-4">
            Featured Event
          </span>
          <h2 className="text-3xl font-bold text-[#0B3C5D] mb-4">YMRF Student Research Conference 2026</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our flagship annual event brings together student researchers from across the country. Present your work,
            learn from keynote speakers, and connect with peers who share your passion for scientific discovery.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-[#0B3C5D]">Event Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#1FB6A6]" />
                  <span>Coming Summer 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#1FB6A6]" />
                  <span>North Carolina (Hybrid)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#1FB6A6]" />
                  <span>200 attendees (in-person + virtual)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-[#0B3C5D]">What to Expect</h3>
              <div className="space-y-2">
                {[
                  "Poster presentation sessions",
                  "Student lightning talks (5-minute presentations)",
                  "Keynote speakers from leading research institutions",
                  "Networking lunch and social events",
                  "Awards ceremony for outstanding research",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#1FB6A6] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#1FB6A6] hover:bg-[#1a9e90] text-white">
              Register Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#0B3C5D] text-[#0B3C5D] hover:bg-[#0B3C5D] hover:text-white bg-transparent"
            >
              <Link href="/programs">Submit Your Research</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
