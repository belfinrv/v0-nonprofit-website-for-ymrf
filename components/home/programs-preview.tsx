import Link from "next/link"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FlaskConical, Laptop, Zap } from "lucide-react"

const programs = [
  {
    icon: FlaskConical,
    title: "Research Mentorship Program",
    description: "8-12 week program pairing students with research mentors for hands-on project experience.",
    duration: "8-12 weeks",
    href: "/programs#mentorship",
  },
  {
    icon: Laptop,
    title: "STEM Boot Camps",
    description: "Intensive 1-2 week training in Python, AI, scientific writing, and data visualization.",
    duration: "1-2 weeks",
    href: "/programs#bootcamps",
  },
  {
    icon: Zap,
    title: "Hackathons & Challenges",
    description: "Team-based competitions solving real-world problems with judging and awards.",
    duration: "Weekend events",
    href: "/programs#hackathons",
  },
]

export function ProgramsPreview() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Programs"
          title="Pathways to Research Excellence"
          description="Choose from our range of programs designed to develop your research skills and scientific thinking."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {programs.map((program) => (
            <Card key={program.title} className="group hover:shadow-lg transition-all hover:border-[#1FB6A6]/30">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#0B3C5D] flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-[#0B3C5D]">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#1FB6A6] font-medium">{program.duration}</span>
                  <Link
                    href={program.href}
                    className="flex items-center gap-1 text-sm font-medium text-[#0B3C5D] hover:text-[#1FB6A6] transition-colors group"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
