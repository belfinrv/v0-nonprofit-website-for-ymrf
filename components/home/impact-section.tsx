"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    quote:
      "YMRF gave me the opportunity to work on real research with an amazing mentor. I presented my findings at a conference and it changed my perspective on what I could achieve.",
    name: "Sarah Chen",
    school: "Lincoln High School",
    program: "Research Mentorship Program",
  },
  {
    quote:
      "The Data Science Boot Camp taught me skills I use every day. The instructors were patient and the projects were challenging but rewarding.",
    name: "Marcus Johnson",
    school: "Westfield Academy",
    program: "STEM Boot Camp",
  },
  {
    quote:
      "Winning the hackathon was incredible, but what I valued most was working with my team and learning how to approach complex problems scientifically.",
    name: "Priya Patel",
    school: "Riverside Prep",
    program: "AI for Good Hackathon",
  },
]

export function ImpactSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-[#0B3C5D]">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Student Stories"
          title="Impact in Their Words"
          description="Hear from students who've transformed their academic journey through YMRF programs."
        />

        <div className="max-w-3xl mx-auto mt-12">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <Quote className="w-12 h-12 text-[#F4C430] mb-6 opacity-50" />

            <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              {`"${testimonials[current].quote}"`}
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">{testimonials[current].name}</p>
                <p className="text-sm text-white/60">{testimonials[current].school}</p>
                <p className="text-sm text-[#1FB6A6]">{testimonials[current].program}</p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prev}
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={next}
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <ChevronRight className="w-5 h-5" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === current ? "bg-[#1FB6A6]" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/about" className="text-[#1FB6A6] hover:underline text-sm font-medium">
              Read more student stories →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
