import type { Metadata } from "next"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, Heart, Award, FileText, Users } from "lucide-react"
import { MentorApplicationForm } from "@/components/forms/mentor-application-form"

export const metadata: Metadata = {
  title: "Become a Mentor | Young Minds Research Foundation",
  description:
    "Guide the next generation of researchers. Join YMRF as a mentor and help high school students explore STEM research.",
}

const expectations = [
  {
    icon: Clock,
    title: "Time Commitment",
    description: "1-2 hours per week for 8-12 weeks, with flexible scheduling to fit your calendar.",
  },
  {
    icon: Users,
    title: "One-on-One Guidance",
    description: "Work directly with a motivated student on their research project and professional development.",
  },
  {
    icon: FileText,
    title: "Structured Support",
    description: "Access mentor training, curriculum guides, and ongoing support from YMRF staff.",
  },
]

const benefits = [
  "Develop leadership and mentoring skills",
  "Give back to the STEM community",
  "Network with other researchers and professionals",
  "Receive a certificate of recognition",
  "Potential letter of recommendation for graduate programs",
  "Be part of shaping the next generation of scientists",
]

export default function MentorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B3C5D] to-[#0d4670] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Become a Mentor</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Share your expertise and guide the next generation of researchers. Your knowledge can transform a student's
            academic journey.
          </p>
        </div>
      </section>

      {/* Why Mentor */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[#1FB6A6]/10 text-[#1FB6A6] rounded-full mb-4">
                Make an Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-6">Why Become a YMRF Mentor?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As a YMRF mentor, you will guide a motivated high school student through their first real research
                experience. You will help them develop critical thinking skills, navigate the research process, and
                build confidence in their abilities.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Many of our mentors are graduate students, postdocs, and industry professionals who remember how
                impactful early research exposure was in their own journeys. Now, they pay it forward.
              </p>

              <div className="flex items-center gap-4">
                <Heart className="w-12 h-12 text-[#1FB6A6]" />
                <div>
                  <p className="text-2xl font-bold text-[#0B3C5D]">95%</p>
                  <p className="text-sm text-muted-foreground">of mentors say the experience was rewarding</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/mentor-helping-student-with-research-project.jpg"
                  alt="Mentor working with student"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="What to Expect" title="Mentor Role & Responsibilities" />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {expectations.map((item) => (
              <Card key={item.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 rounded-full bg-[#0B3C5D] flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0B3C5D] mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader badge="Benefits" title="What You'll Gain" centered={false} />

              <div className="space-y-3 mt-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1FB6A6] mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  variant="outline"
                  className="border-[#0B3C5D] text-[#0B3C5D] hover:bg-[#0B3C5D] hover:text-white bg-transparent"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download Mentor Handbook
                </Button>
              </div>
            </div>

            <div className="bg-[#0B3C5D] rounded-2xl p-8 text-white">
              <Award className="w-12 h-12 text-[#F4C430] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Recognition Program</h3>
              <p className="text-white/80 mb-6">
                Outstanding mentors are recognized annually at our Spring Research Conference. Top mentors receive
                awards and opportunities to speak at events.
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <p>• Certificate of Mentor Excellence</p>
                <p>• Featured profile on our website</p>
                <p>• Speaking opportunities at conferences</p>
                <p>• Letters of recommendation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Apply Now"
            title="Join Our Mentor Network"
            description="Complete the form below to express your interest in becoming a YMRF mentor. We review applications on a rolling basis."
          />

          <div className="max-w-2xl mx-auto mt-12">
            <MentorApplicationForm />
          </div>
        </div>
      </section>
    </>
  )
}
