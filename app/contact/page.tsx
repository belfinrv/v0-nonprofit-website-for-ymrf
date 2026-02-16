import type { Metadata } from "next"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { ContactForm } from "@/components/forms/contact-form"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

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
    content: "(555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "123 Research Drive, City, State 12345",
    link: null,
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Mon-Fri, 9:00 AM - 5:00 PM EST",
    link: null,
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
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

              {/* Social Links */}
              <div className="mt-8">
                <p className="font-semibold text-[#0B3C5D] mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-[#1FB6A6] hover:text-white transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="aspect-video rounded-xl bg-muted flex items-center justify-center border border-border">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Map placeholder</p>
                    <p className="text-xs text-muted-foreground">123 Research Drive, City, State</p>
                  </div>
                </div>
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
