import type { Metadata } from "next"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  FlaskConical,
  Laptop,
  Zap,
  Presentation,
  Clock,
  Users,
  Calendar,
  CheckCircle2,
  Brain,
  Dna,
  BarChart3,
  Cpu,
  Code,
} from "lucide-react"
import Link from "next/link"
import { StudentApplicationForm } from "@/components/forms/student-application-form"

export const metadata: Metadata = {
  title: "Programs | Young Minds Research Foundation",
  description:
    "Explore YMRF's research mentorship programs, STEM boot camps, hackathons, and student research conferences.",
}

const tracks = [
  { icon: Brain, name: "AI & Machine Learning" },
  { icon: Dna, name: "Neuroscience" },
  { icon: BarChart3, name: "Data Science" },
  { icon: Cpu, name: "Engineering" },
  { icon: Code, name: "Bioinformatics" },
]

const bootcampTopics = [
  { title: "Python for Research", description: "Data manipulation, analysis, and visualization using Python." },
  { title: "Intro to AI", description: "Fundamentals of machine learning and neural networks." },
  { title: "Scientific Writing", description: "Research papers, abstracts, and presentation skills." },
  { title: "Data Visualization", description: "Creating impactful charts and visual narratives." },
]

const faqItems = [
  {
    question: "Who can apply to YMRF programs?",
    answer:
      "Our programs are open to high school students (grades 9-12) with a passion for STEM. No prior research experience is required—just curiosity and commitment. We welcome students from all backgrounds and schools.",
  },
  {
    question: "How much do programs cost?",
    answer:
      "YMRF is committed to accessibility. Many of our programs are free or low-cost. We also offer need-based scholarships for all paid programs. Financial circumstances should never be a barrier to participating.",
  },
  {
    question: "What is the time commitment?",
    answer:
      "Time commitments vary by program. The Research Mentorship Program requires 3-5 hours per week for 8-12 weeks. Boot camps are intensive 1-2 week sessions. Hackathons are typically weekend events. We work with students to accommodate school schedules.",
  },
  {
    question: "Are programs virtual or in-person?",
    answer:
      "We offer both! Most mentorship programs are conducted virtually to maximize accessibility. Boot camps and conferences may be hybrid or in-person depending on location. Check individual program listings for details.",
  },
  {
    question: "Do participants receive certificates or awards?",
    answer:
      "Yes! All program completers receive certificates of completion. Outstanding participants may receive awards, recognition at our conferences, and letters of recommendation from mentors for college applications.",
  },
]

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B3C5D] to-[#0d4670] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Programs</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover pathways to research excellence through mentorship, intensive training, and collaborative
            challenges.
          </p>
        </div>
      </section>

      {/* Research Mentorship Program */}
      <section id="mentorship" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#0B3C5D] flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-[#1FB6A6]/10 text-[#1FB6A6] rounded-full">
                  Flagship Program
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#0B3C5D] mb-4">Research Mentorship Program</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our flagship program pairs motivated high school students with experienced research mentors for an 8-12
                week journey into authentic scientific inquiry. Students develop research skills, work on real projects,
                and present their findings.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-[#1FB6A6]" />
                  <span>8-12 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-[#1FB6A6]" />
                  <span>1:1 Mentorship</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-[#1FB6A6]" />
                  <span>Rolling Admissions</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <h3 className="font-semibold text-[#0B3C5D]">Program Highlights</h3>
                {[
                  "Weekly mentor meetings and check-ins",
                  "Structured research methodology training",
                  "Final poster or presentation at YMRF conference",
                  "Certificate of completion and recommendation letters",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#1FB6A6] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-[#0B3C5D] mb-4">Research Tracks</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tracks.map((track) => (
                  <div
                    key={track.name}
                    className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border hover:border-[#1FB6A6]/30 transition-colors"
                  >
                    <track.icon className="w-5 h-5 text-[#0B3C5D]" />
                    <span className="text-sm font-medium">{track.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEM Boot Camps */}
      <section id="bootcamps" className="py-20 bg-muted/50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#1FB6A6] flex items-center justify-center">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#0B3C5D] mb-4">STEM Boot Camps</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Intensive 1-2 week training programs designed to build specific technical skills. Whether you want to
                learn Python, understand AI fundamentals, or master scientific writing, our boot camps provide focused,
                hands-on learning.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-[#1FB6A6]" />
                  <span>1-2 weeks intensive</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-[#1FB6A6]" />
                  <span>Small group sessions</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {bootcampTopics.map((topic) => (
                <Card key={topic.title} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-[#0B3C5D] mb-2">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons & Challenges */}
      <section id="hackathons" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#F4C430] flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#0B3C5D]" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#0B3C5D] mb-4">Hackathons & Challenges</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Team-based competitions that challenge students to solve real-world problems. Collaborate with peers,
                learn from mentors, and compete for recognition and awards. Our hackathons focus on applying technology
                to meaningful challenges.
              </p>

              <div className="space-y-3">
                {[
                  "Form teams of 2-4 students",
                  "Tackle real-world problems",
                  "Expert judging and feedback",
                  "Prizes and recognition",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#F4C430] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#F4C430]/20 to-[#0B3C5D]/20 flex items-center justify-center">
              <img
                src="/students-collaborating-at-hackathon-event.jpg"
                alt="Students at hackathon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Research Conference */}
      <section id="conference" className="py-20 bg-[#0B3C5D] scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
                <img
                  src="/student-presenting-research-poster-at-science-conf.jpg"
                  alt="Student presenting research"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <Presentation className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Student Research Conference</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Our annual conference brings together student researchers to present their work, attend keynote
                sessions, and network with peers and professionals. It is a celebration of young minds making real
                contributions to science.
              </p>

              <div className="space-y-3">
                {[
                  "Poster sessions",
                  "Lightning talks",
                  "Keynote speakers from industry & academia",
                  "Networking opportunities",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-[#1FB6A6] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="mt-8 bg-[#1FB6A6] hover:bg-[#1a9e90] text-white">
                <Link href="/events">View Conference Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Apply Now"
            title="Start Your Research Journey"
            description="Complete the application below to be considered for our programs. We review applications on a rolling basis."
          />

          <div className="max-w-2xl mx-auto mt-12">
            <StudentApplicationForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="FAQ" title="Frequently Asked Questions" />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-background rounded-lg border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#0B3C5D] hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
