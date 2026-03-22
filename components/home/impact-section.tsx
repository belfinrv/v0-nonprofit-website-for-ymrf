import { SectionHeader } from "@/components/section-header"
import { Target, Rocket, GraduationCap } from "lucide-react"

const goals = [
  {
    icon: Target,
    title: "Our Vision",
    description:
      "A world where every high school student with curiosity and drive has access to real research experiences that shape their future in STEM.",
  },
  {
    icon: Rocket,
    title: "What We're Building",
    description:
      "Mentorship programs, STEM boot camps, hackathons, and a student research conference — all designed to give young minds hands-on exposure to real science.",
  },
  {
    icon: GraduationCap,
    title: "Why It Matters",
    description:
      "Early research experience builds critical thinking, strengthens college applications, and opens doors to scholarships and careers in STEM fields.",
  },
]

export function ImpactSection() {
  return (
    <section className="py-20 bg-[#0B3C5D]">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Our Purpose"
          title="Building the Future of STEM"
          description="YMRF is a newly launched nonprofit with a bold mission: to make research accessible to high school students everywhere."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {goals.map((goal) => (
            <div
              key={goal.title}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <goal.icon className="w-10 h-10 text-[#F4C430] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{goal.title}</h3>
              <p className="text-white/70 leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
