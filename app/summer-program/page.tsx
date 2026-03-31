import type { Metadata } from "next"
import { SummerProgramForm } from "@/components/forms/summer-program-form"
import { MapPin, Calendar, Clock, Users, Star, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "STEM Summer Program 2026 | Young Minds Research Foundation",
  description:
    "Register for YMRF's STEM Summer Program at Mary Scroggs Elementary in Chapel Hill. Hands-on STEM learning for elementary students.",
}

const highlights = [
  {
    icon: BookOpen,
    title: "Hands-On STEM",
    description: "Interactive experiments, coding, robotics, and science projects designed for young learners.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Low student-to-instructor ratio ensuring personalized attention for every child.",
  },
  {
    icon: Star,
    title: "Expert Instructors",
    description: "Led by experienced educators and university researchers passionate about STEM education.",
  },
]

export default function SummerProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B3C5D] to-[#0d4670] py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4C430]/20 text-[#F4C430] text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Summer 2026 — Registration Open
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            STEM Summer Program
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            An exciting hands-on STEM experience for elementary school students at Mary Scroggs Elementary in Chapel Hill, NC.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#1FB6A6]" />
              Mary Scroggs Elementary, Chapel Hill, NC
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#1FB6A6]" />
              June 15 – August 7, 2026
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#1FB6A6]" />
              Full Day (9AM–4PM) or Half Day
            </div>
          </div>

          {/* Register Below CTA */}
          <a href="#register" className="inline-flex flex-col items-center mt-10 text-white/80 hover:text-white transition-colors animate-bounce">
            <span className="text-2xl md:text-3xl font-bold tracking-wide">Register Below</span>
            <svg className="w-8 h-8 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-[#1FB6A6]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#1FB6A6]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0B3C5D] mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sessions & Registration */}
      <section id="register" className="py-16 bg-muted/50 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[#1FB6A6]/10 text-[#1FB6A6] rounded-full mb-4">
              Register Now
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-4">
              Choose Your Session
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Select a week, pick full or half day, and complete registration. Multiple sessions can be registered separately.
            </p>
          </div>

          <SummerProgramForm />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0B3C5D] mb-6 text-center">Program Details</h2>
          <div className="space-y-6 text-muted-foreground">
            <div className="p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-[#0B3C5D] mb-2">Location</h3>
              <p>Mary Scroggs Elementary School, Chapel Hill, North Carolina</p>
            </div>
            <div className="p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-[#0B3C5D] mb-2">Schedule Options</h3>
              <ul className="space-y-1">
                <li><strong>Full Day:</strong> 9:00 AM – 4:00 PM</li>
                <li><strong>Half Day:</strong> 9:00 AM – 12:00 PM</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-[#0B3C5D] mb-2">Who Can Attend?</h3>
              <p>Elementary school students (rising 1st through 5th grade). No prior STEM experience needed!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
