import type { Metadata } from "next"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { ContactForm } from "@/components/forms/contact-form"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact | Young Minds Research Foundation",
  description: "Get in touch with YMRF. Questions about programs, sponsorship, or volunteering? We're here to help.",
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "contact@ymrf.org",
    link: "mailto:contact@ymrf.org",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (336) 264-0909",
    link: "tel:+13362640909",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Chapel Hill, North Carolina",
    link: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "We typically respond within 48 hours",
    link: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B3C5D] to-[#0d4670] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have questions about our programs, sponsorship opportunities, or how to get involved? We'd love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeader badge="Send a Message" title="Get in Touch" centered={false} />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <SectionHeader badge="Contact Information" title="Other Ways to Reach Us" centered={false} />

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {contactInfo.map((item) => (
                  <Card key={item.title} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#1FB6A6]/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-[#1FB6A6]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#0B3C5D]">{item.title}</p>
                          {item.link ? (
                            <Link href={item.link} className="text-sm text-muted-foreground hover:text-[#1FB6A6]">
                              {item.content}
                            </Link>
                          ) : (
                            <p className="text-sm text-muted-foreground">{item.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links - Coming Soon */}
              <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-semibold text-[#0B3C5D] mb-2">Social Media</p>
                <p className="text-sm text-muted-foreground">Follow us soon! Our social media channels are being set up and will be live shortly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0B3C5D] mb-4">Looking for answers?</h2>
          <p className="text-muted-foreground mb-6">
            Check our Programs page for frequently asked questions about applications, costs, and more.
          </p>
          <Link href="/programs#faq" className="inline-flex items-center text-[#1FB6A6] font-medium hover:underline">
            View FAQs →
          </Link>
        </div>
      </section>
    </>
  )
}
