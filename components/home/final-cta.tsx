import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1FB6A6] to-[#0B3C5D]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
          Join the Next Cohort of Young Researchers
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Whether you are a student ready to explore research, a professional who wants to mentor, or an organization
          looking to make an impact—there is a place for you at YMRF.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-[#0B3C5D] hover:bg-white/90 px-8">
            <Link href="/programs">Student Application</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white bg-white/10 hover:bg-white/20 px-8"
          >
            <Link href="/mentors">Mentor Signup</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white bg-white/10 hover:bg-white/20 px-8"
          >
            <Link href="/sponsors">Sponsor YMRF</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
