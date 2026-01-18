import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, Calendar } from "lucide-react"

const stats = [
  { icon: Users, value: "250+", label: "Students Supported" },
  { icon: Award, value: "40+", label: "Mentors & Advisors" },
  { icon: Calendar, value: "15+", label: "Events Hosted" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B3C5D] via-[#0d4670] to-[#0B3C5D]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#1FB6A6" />
              <circle cx="0" cy="0" r="1" fill="#1FB6A6" />
              <circle cx="100" cy="0" r="1" fill="#1FB6A6" />
              <circle cx="0" cy="100" r="1" fill="#1FB6A6" />
              <circle cx="100" cy="100" r="1" fill="#1FB6A6" />
              <line x1="50" y1="50" x2="0" y2="0" stroke="#1FB6A6" strokeWidth="0.5" opacity="0.3" />
              <line x1="50" y1="50" x2="100" y2="0" stroke="#1FB6A6" strokeWidth="0.5" opacity="0.3" />
              <line x1="50" y1="50" x2="0" y2="100" stroke="#1FB6A6" strokeWidth="0.5" opacity="0.3" />
              <line x1="50" y1="50" x2="100" y2="100" stroke="#1FB6A6" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Logo */}
          <div className="mb-8">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-40 h-40 md:w-52 md:h-52 mx-auto object-contain"
            >
              <source src="/motion-graphic.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#1FB6A6] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1FB6A6] animate-pulse" />
            Applications Open for 2026 Cohort
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Where Young Ideas <span className="text-[#1FB6A6]">Become Research.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            YMRF empowers high school students to explore STEM research through mentorship, hands-on projects, and real
            scientific events.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="bg-[#1FB6A6] hover:bg-[#1a9e90] text-white px-8">
              <Link href="/programs">Apply as a Student</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white bg-white/10 hover:bg-white/20 px-8"
            >
              <Link href="/mentors">Become a Mentor</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <stat.icon className="w-6 h-6 text-[#F4C430] mb-2" />
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-white/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
