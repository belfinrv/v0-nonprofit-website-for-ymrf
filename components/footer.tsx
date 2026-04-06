
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Become a Mentor", href: "/mentors" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B3C5D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 bg-white rounded-lg p-2">
              <Image
                src="/ymrf-logo.png"
                alt="Young Minds Research Foundation"
                width={140}
                height={56}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Empowering high school students to explore STEM research through mentorship, hands-on projects, and real
              scientific events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#F4C430] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-[#1FB6A6] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-[#F4C430] mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-[#1FB6A6]" />
                <span>contact@ymrf.org</span>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-[#1FB6A6]" />
                <a href="tel:+13362640909" className="hover:text-[#1FB6A6] transition-colors">+1 (336) 264-0909</a>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[#1FB6A6]" />
                <span>Chapel Hill, North Carolina</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-[#F4C430] mb-4">Connect With Us</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Have questions or want to get involved? Reach out to us at contact@ymrf.org
            </p>
            <p className="text-white/60 text-xs leading-relaxed">
              Social media channels coming soon!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-xs text-center md:text-left">
              © {currentYear} Young Minds Research Foundation, Inc. All rights reserved.
            </p>
            <p className="text-white/40 text-xs text-center md:text-right max-w-md">
              YMRF is a nonprofit organization. Donations may be tax-deductible as permitted by law.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
