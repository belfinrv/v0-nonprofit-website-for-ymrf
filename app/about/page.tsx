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

const boardMembers = [
  {
    name: "Dr. Belfin Robinson, Ph.D.",
    role: "Executive Director",
    affiliation: "UNC Chapel Hill",
    image: "/Belfin Robinson Vimala.jpg",
    imagePosition: "object-top",
    bio: "Dr. Belfin Robinson is a Postdoctoral Research Associate at the University of North Carolina Chapel Hill, working at the intersection of Artificial Intelligence and clinical neuroscience. With over 13 years of experience spanning academic research, enterprise software engineering, and AI-driven healthcare innovation, he brings a rare combination of technical depth and real-world impact. His research at UNC's Department of Neurology and Biomedical Research Imaging Center focuses on building deep learning and graph-theoretic models to diagnose conditions such as Alzheimer's disease, chronic pain, and epilepsy — published in 18+ peer-reviewed journals. Before his research career, Dr. Robinson spent nearly a decade as a Professor at Karunya University in India, teaching Data Science, Machine Learning, and Graph Analytics. He has also held software engineering roles at Wipro Technologies and Robert Bosch. As a board member, he is committed to championing technology literacy, mentorship, and equitable access to STEM opportunities for young learners.",
  },
  {
    name: "Dr. Florence Martin",
    role: "Director of STEM Education",
    affiliation: "NC State University",
    image: "/florance_martinPhoto.png",
    imagePosition: "object-top",
    bio: "Dr. Florence Martin is a distinguished scholar and leader in educational technology and online learning. She serves as a Professor in the Learning, Design, and Technology program at North Carolina State University, where her work focuses on the design, development, and evaluation of effective digital learning environments. With extensive experience in STEM education, instructional design, and teacher training, Dr. Martin has contributed significantly to advancing innovative teaching practices that enhance student engagement and learning outcomes. At YMRF, she leads the development of STEM curricula and educational programs, ensuring students receive high-quality, research-driven learning experiences. She has published widely in top-tier academic journals and actively collaborates with educators worldwide.",
  },
  {
    name: "Dr. Andrew Jeyabose Sundar",
    role: "Director of Programs & Events",
    affiliation: "UNC Chapel Hill School of Medicine",
    image: "/Andrew_photo.jpeg",
    imagePosition: "object-[center_20%]",
    bio: "Dr. Andrew Jeyabose Sundar is a leading researcher in artificial intelligence and healthcare, currently serving as a Postdoctoral Research Associate at the University of North Carolina at Chapel Hill School of Medicine. His work focuses on developing interpretable deep learning models for neuroimaging, particularly in epilepsy and brain network analysis. With over a decade of academic and research experience, he has authored more than 90 peer-reviewed publications and is recognized among the top 2% of scientists worldwide based on citation impact. His expertise spans multimodal neuroimaging, deep learning, and computational biology. At YMRF, Dr. Sundar leads the design and execution of programs and events, including STEM workshops, research bootcamps, and innovation challenges. He is deeply committed to mentoring students and fostering hands-on learning experiences that bridge the gap between cutting-edge research and real-world applications.",
  },
]

const teamMembers = [
  {
    name: "Sujjay Karthikeyan",
    role: "Student Secretary",
    affiliation: "UNC Charlotte",
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
                  YMRF is building a community of students, mentors, and partners united by a shared vision: to
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

      {/* Board of Directors */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Board of Directors"
            title="Our Leadership"
            description="Dedicated researchers and educators guiding YMRF's mission and strategic direction."
          />

          <div className="space-y-12 mt-12">
            {boardMembers.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition-shadow border-l-4 border-l-[#F4C430] overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover ${member.imagePosition} flex-shrink-0 mx-auto md:mx-0`}
                    />
                    <div>
                      <h3 className="font-semibold text-[#0B3C5D] text-lg">{member.name}</h3>
                      <p className="text-sm text-[#1FB6A6] mb-1">{member.role}</p>
                      {member.affiliation && (
                        <p className="text-xs text-muted-foreground mb-3">{member.affiliation}</p>
                      )}
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Student Secretary */}
          <div className="mt-12">
            <h3 className="text-center text-lg font-semibold text-[#0B3C5D] mb-6">Team</h3>
            <div className="max-w-sm mx-auto">
              {teamMembers.map((member) => (
                <Card key={member.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-20 h-20 rounded-full bg-[#1FB6A6]/20 mx-auto mb-4 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-[#1FB6A6]" />
                    </div>
                    <h3 className="font-semibold text-[#0B3C5D] text-center text-lg">{member.name}</h3>
                    <p className="text-sm text-[#1FB6A6] text-center mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground text-center">{member.affiliation}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-background">
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
      <section className="py-20 bg-muted/50">
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
