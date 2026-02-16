import type { Metadata } from "next"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Target, BookOpen, Rocket, GraduationCap, Lightbulb, Users, Shield, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Young Minds Research Foundation",
  description:
    "Learn about YMRF's mission to empower high school students in STEM research through mentorship, education, and hands-on discovery.",
}

const whatWeDo = [
  {
    icon: BookOpen,
    title: "Education",
    description:
      "We provide structured learning experiences that teach research methodology, scientific writing, and data analysis skills.",
  },
  {
    icon: Lightbulb,
    title: "Research Exposure",
    description: "Students work on real research projects alongside experienced mentors from academia and industry.",
  },
  {
    icon: Rocket,
    title: "Events & Competitions",
    description:
      "We host conferences, hackathons, and boot camps that challenge students and showcase their achievements.",
  },
]

const whyItMatters = [
  {
    title: "Research Readiness",
    description:
      "Students who participate in research programs are better prepared for college-level coursework and graduate school.",
  },
  {
    title: "College Pathways",
    description:
      "Research experience strengthens college applications and opens doors to scholarships and advanced opportunities.",
  },
  {
    title: "Innovation Mindset",
    description: "Early exposure to research cultivates critical thinking, creativity, and problem-solving skills.",
  },
]

const leadership = [
  {
    name: "Sujjay Karthikeyan",
    role: "Student Secretary",
    bio: "Research Assistant at SmartNet Lab, UNC Charlotte. First student member of the YMRF team.",
  },
  {
    name: "Dr. Sarah Mitchell",
    role: "Executive Director",
    bio: "Former research professor with 15+ years in STEM education.",
  },
  {
    name: "James Rodriguez",
    role: "Program Director",
    bio: "Educational leader passionate about student success.",
  },
  {
    name: "Dr. Emily Chen",
    role: "Board Chair",
    bio: "Scientist and advocate for diversity in STEM.",
  },
  {
    name: "Michael Thompson",
    role: "Partnerships Lead",
    bio: "Experienced in building academic-industry collaborations.",
  },
]

const boardMembers = [
  {
    name: "Sujjay Karthikeyan",
    role: "Student Secretary",
    affiliation: "UNC Charlotte",
  },
  {
    name: "Dr. Andrew Jeyabose",
    role: "AI Scientist | Postdoctoral Researcher | Editor at Scientific Reports (Springer Nature)",
    affiliation: "Healthcare AI Researcher & Academician",
  },
  {
    name: "Dr. Belfin Robinson Vimala",
    role: "Computer Scientist / Research Associate",
    affiliation: "UNC Chapel Hill",
  },
  {
    name: "Dr. Florence Martin",
    role: "Professor in Learning, Design and Technology",
    affiliation: "NC State University, College of Education",
  },
]

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in research and education.",
  },
  { icon: Lightbulb, title: "Curiosity", description: "We foster a passion for discovery and lifelong learning." },
  {
    icon: Users,
    title: "Inclusion",
    description: "We create accessible opportunities for students from all backgrounds.",
  },
  { icon: Target, title: "Scientific Rigor", description: "We teach evidence-based thinking and methodical inquiry." },
  {
    icon: Heart,
    title: "Service",
    description: "We are committed to giving back to our communities through education.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B3C5D] to-[#0d4670] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About YMRF</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Empowering the next generation of researchers and innovators through mentorship, education, and hands-on
            scientific discovery.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[#1FB6A6]/10 text-[#1FB6A6] rounded-full mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-6">A Foundation Built on Possibility</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Young Minds Research Foundation (YMRF) is a nonprofit organization dedicated to bridging the gap
                  between high school education and real-world scientific research. We believe that every student with
                  curiosity and drive deserves the opportunity to explore their potential.
                </p>
                <p>
                  Founded by educators and researchers who saw the need for earlier exposure to research methodologies,
                  YMRF has grown into a community of students, mentors, and partners united by a shared vision: to
                  cultivate the next generation of scientists, engineers, and innovators.
                </p>
                <p>
                  Our programs are designed to be accessible, rigorous, and inspiring—giving students the tools they
                  need to transform their ideas into meaningful research contributions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1FB6A6]/20 to-[#0B3C5D]/20 flex items-center justify-center">
                <img
                  src="/high-school-students-doing-science-research-in-lab.jpg"
                  alt="Students engaged in scientific research"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="What We Do" title="Education, Exposure, Excellence" />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {whatWeDo.map((item) => (
              <Card key={item.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-[#0B3C5D] flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0B3C5D] mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Why It Matters"
            title="Building Tomorrow's Leaders"
            description="Early research experience has a lasting impact on students' academic and professional trajectories."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {whyItMatters.map((item, idx) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F4C430] flex items-center justify-center text-[#0B3C5D] font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B3C5D] mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Leadership"
            title="Meet Our Team"
            description="Dedicated professionals guiding YMRF's mission."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {leadership.map((person) => (
              <Card key={person.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-20 h-20 rounded-full bg-[#1FB6A6]/20 mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-[#1FB6A6]" />
                  </div>
                  <h3 className="font-semibold text-[#0B3C5D]">{person.name}</h3>
                  <p className="text-sm text-[#1FB6A6] mb-2">{person.role}</p>
                  <p className="text-xs text-muted-foreground">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Board Members"
            title="Our Advisory Board"
            description="Distinguished researchers and educators shaping YMRF's strategic direction."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {boardMembers.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition-shadow border-t-4 border-t-[#F4C430]">
                <CardContent className="pt-8 pb-6">
                  <div className="w-20 h-20 rounded-full bg-[#0B3C5D]/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-[#0B3C5D]" />
                  </div>
                  <h3 className="font-semibold text-[#0B3C5D] text-center text-lg">{member.name}</h3>
                  <p className="text-sm text-[#1FB6A6] text-center mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground text-center">{member.affiliation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0B3C5D]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white/10 text-[#1FB6A6] rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Principles That Guide Us</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <value.icon className="w-8 h-8 text-[#F4C430] mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
