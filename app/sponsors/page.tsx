import type { Metadata } from "next"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Building2 } from "lucide-react"
import { SponsorInquiryForm } from "@/components/forms/sponsor-inquiry-form"

export const metadata: Metadata = {
  title: "Sponsors & Partners | Young Minds Research Foundation",
  description:
    "Partner with YMRF to support STEM education and high school research programs. Explore sponsorship tiers and benefits.",
}

const sponsorshipTiers = [
  {
    name: "Bronze",
    amount: "$1,000",
    color: "bg-amber-700",
    benefits: ["Logo on YMRF website", "Recognition in event programs", "Social media shoutout"],
  },
  {
    name: "Silver",
    amount: "$2,500",
    color: "bg-gray-400",
    benefits: [
      "All Bronze benefits",
      "Exhibitor booth at conferences",
      "2 student scholarships in your name",
      "Newsletter feature",
    ],
  },
  {
    name: "Gold",
    amount: "$5,000",
    color: "bg-[#F4C430]",
    benefits: [
      "All Silver benefits",
      "Keynote recognition at events",
      "5 student scholarships in your name",
      "Co-branded materials",
      "Quarterly impact reports",
    ],
  },
  {
    name: "Platinum",
    amount: "$10,000",
    color: "bg-[#0B3C5D]",
    benefits: [
      "All Gold benefits",
      "Title sponsor of major event",
      "Dedicated partnership page",
      "10 student scholarships",
      "Board meeting invitation",
      "Custom engagement opportunities",
    ],
  },
]

const partners = [
  "University Partner 1",
  "University Partner 2",
  "Tech Company A",
  "Research Institute",
  "Foundation Partner",
  "Corporate Sponsor 1",
  "Corporate Sponsor 2",
  "Academic Institution",
]

export default function SponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B3C5D] to-[#0d4670] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sponsors & Partners</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join leading organizations in supporting the next generation of researchers. Your partnership makes a
            lasting impact.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[#1FB6A6]/10 text-[#1FB6A6] rounded-full mb-4">
                Partner With Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-6">Why Sponsor YMRF?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your sponsorship directly funds scholarships, program materials, and events that enable high school
                students to pursue research opportunities. Together, we are building a diverse pipeline of future
                scientists, engineers, and innovators.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1FB6A6]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-[#1FB6A6]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B3C5D]">Brand Visibility</p>
                    <p className="text-sm text-muted-foreground">Reach students, families, and educators nationwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1FB6A6]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-[#1FB6A6]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B3C5D]">Talent Pipeline</p>
                    <p className="text-sm text-muted-foreground">Connect with future interns and employees</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1FB6A6]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-[#1FB6A6]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B3C5D]">Community Impact</p>
                    <p className="text-sm text-muted-foreground">Support diversity and inclusion in STEM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1FB6A6]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-[#1FB6A6]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B3C5D]">Tax Benefits</p>
                    <p className="text-sm text-muted-foreground">Donations may be tax-deductible</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="/corporate-sponsor-presenting-award-at-science-event.jpg"
                  alt="Sponsor at YMRF event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Sponsorship Tiers"
            title="Choose Your Level of Impact"
            description="Each tier offers unique benefits and recognition. All sponsors contribute to student scholarships and program development."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {sponsorshipTiers.map((tier) => (
              <Card key={tier.name} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${tier.color} h-2`} />
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-lg text-[#0B3C5D]">{tier.name}</CardTitle>
                  <p className="text-3xl font-bold text-[#1FB6A6]">{tier.amount}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-[#1FB6A6] mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Custom sponsorship packages available.{" "}
            <a href="#inquiry" className="text-[#1FB6A6] hover:underline">
              Contact us
            </a>{" "}
            to discuss your goals.
          </p>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Our Partners" title="Organizations Making a Difference" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center h-20 px-6 rounded-xl bg-muted/50 border border-border text-muted-foreground text-sm font-medium hover:border-[#1FB6A6]/30 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 bg-muted/50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Get Started"
            title="Become a Sponsor"
            description="Fill out the form below and our partnerships team will reach out to discuss how we can work together."
          />

          <div className="max-w-2xl mx-auto mt-12">
            <SponsorInquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
