import type { Metadata } from "next"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Award, Microscope, Laptop, Users, ArrowRight, RefreshCcw } from "lucide-react"
import { DonationForm } from "@/components/forms/donation-form"

export const metadata: Metadata = {
  title: "Donate | Young Minds Research Foundation",
  description:
    "Support YMRF's mission to empower high school students in STEM research. Your donation funds scholarships, programs, and events.",
}

const donationTiers = [
  {
    amount: "$25",
    title: "Supporter",
    description: "Provides research supplies for one student",
    icon: Microscope,
  },
  {
    amount: "$100",
    title: "Advocate",
    description: "Funds a partial scholarship for a boot camp",
    icon: Laptop,
  },
  {
    amount: "$250",
    title: "Champion",
    description: "Covers a full student scholarship",
    icon: Award,
  },
  {
    amount: "$500",
    title: "Visionary",
    description: "Sponsors an event or workshop session",
    icon: Users,
  },
]

const impactAreas = [
  { label: "Student Scholarships", percentage: 45, color: "bg-[#1FB6A6]" },
  { label: "Program Materials", percentage: 25, color: "bg-[#0B3C5D]" },
  { label: "Events & Conferences", percentage: 20, color: "bg-[#F4C430]" },
  { label: "Operations", percentage: 10, color: "bg-gray-400" },
]

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B3C5D] to-[#0d4670] py-20">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 text-[#F4C430] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Support Young Researchers</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Your generosity directly funds scholarships, programs, and events that transform the lives of young
            scientists.
          </p>
        </div>
      </section>

      {/* Mission Pitch */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[#1FB6A6]/10 text-[#1FB6A6] rounded-full mb-4">
                Make an Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-6">Every Dollar Fuels Discovery</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At YMRF, we believe that financial barriers should never prevent a curious student from pursuing
                research. Your donation ensures that students from all backgrounds can access mentorship, training, and
                opportunities to explore their scientific potential.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                100% of donations go directly to supporting students—from scholarships and program materials to hosting
                conferences where young researchers can share their work with the world.
              </p>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1FB6A6]/10">
                <BookOpen className="w-10 h-10 text-[#1FB6A6]" />
                <div>
                  <p className="font-semibold text-[#0B3C5D]">250+ students supported</p>
                  <p className="text-sm text-muted-foreground">through donor generosity last year</p>
                </div>
              </div>
            </div>

            <div>
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Give at Any Level"
            title="Your Gift Makes a Difference"
            description="Choose an amount that works for you—every contribution helps a student pursue their research dreams."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {donationTiers.map((tier) => (
              <Card
                key={tier.title}
                className="text-center hover:shadow-lg transition-shadow hover:border-[#1FB6A6]/30"
              >
                <CardHeader className="pb-2">
                  <div className="w-14 h-14 rounded-full bg-[#1FB6A6]/10 flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="w-7 h-7 text-[#1FB6A6]" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-[#0B3C5D]">{tier.amount}</CardTitle>
                  <p className="text-sm font-medium text-[#1FB6A6]">{tier.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Where Your Gift Goes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Transparency" title="Where Your Gift Goes" />

          <div className="max-w-2xl mx-auto mt-12">
            <div className="space-y-6">
              {impactAreas.map((area) => (
                <div key={area.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[#0B3C5D]">{area.label}</span>
                    <span className="text-muted-foreground">{area.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${area.color} rounded-full transition-all duration-500`}
                      style={{ width: `${area.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              YMRF maintains low overhead to maximize the impact of every donation. View our annual reports for detailed
              financial information.
            </p>
          </div>
        </div>
      </section>

      {/* Recurring Donation CTA */}
      <section className="py-20 bg-[#0B3C5D]">
        <div className="container mx-auto px-4 text-center">
          <RefreshCcw className="w-12 h-12 text-[#F4C430] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Become a Monthly Supporter</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Monthly donations provide sustainable support that helps us plan long-term programs and reach more students.
            Join our community of recurring donors making lasting change.
          </p>
          <Button className="bg-[#1FB6A6] hover:bg-[#1a9e90] text-white px-8">
            Set Up Monthly Giving
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Tax Info */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Young Minds Research Foundation, Inc. is a registered 501(c)(3) nonprofit organization. Donations are
            tax-deductible to the extent permitted by law. EIN: XX-XXXXXXX. You will receive a tax receipt via email
            after your donation.
          </p>
        </div>
      </section>
    </>
  )
}
