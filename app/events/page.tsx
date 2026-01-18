import type { Metadata } from "next"
import { EventsGrid } from "@/components/events/events-grid"
import { EventDetail } from "@/components/events/event-detail"

export const metadata: Metadata = {
  title: "Events | Young Minds Research Foundation",
  description: "Browse and register for upcoming YMRF events including conferences, hackathons, boot camps, and more.",
}

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B3C5D] to-[#0d4670] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Events</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join our conferences, hackathons, boot camps, and workshops. Connect with fellow researchers and advance
            your skills.
          </p>
        </div>
      </section>

      <EventsGrid />
      <EventDetail />
    </>
  )
}
