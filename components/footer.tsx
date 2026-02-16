import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Become a Mentor", href: "/mentors" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
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
                <MapPin className="w-4 h-4 mt-0.5 text-[#1FB6A6]" />
                <span>City, State, USA</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-semibold text-[#F4C430] mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-white/70 hover:bg-[#1FB6A6] hover:text-white transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-white/60 text-xs leading-relaxed">
              Follow us for updates on programs, events, and student achievements.
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
              YMRF is a nonprofit organization dedicated to empowering young researchers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
