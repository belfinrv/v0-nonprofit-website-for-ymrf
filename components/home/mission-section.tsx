import { SectionHeader } from "@/components/section-header"
import { Microscope, Users, Trophy } from "lucide-react"

const pillars = [
  {
    icon: Microscope,
    title: "Research Skills",
    description: "Develop practical research methodology, data analysis, and scientific writing skills.",
  },
  {
    icon: Users,
    title: "Mentorship & Guidance",
    description: "Connect with experienced researchers and industry professionals for personalized guidance.",
  },
  {
    icon: Trophy,
    title: "Conferences & Challenges",
    description: "Present your work, compete in hackathons, and network with peers and professionals.",
  },
]

export function MissionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Our Mission"
          title="Transforming Ideas into Real-World Impact"
          description="Young Minds Research Foundation (YMRF) equips high school students to pursue research-driven careers in STEM by transforming ideas into real-world impact through mentorship, education, and hands-on discovery."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-[#1FB6A6]/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#1FB6A6]/10 flex items-center justify-center mb-6 group-hover:bg-[#1FB6A6]/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-[#1FB6A6]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B3C5D] mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
