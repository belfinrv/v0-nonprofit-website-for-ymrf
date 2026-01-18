"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { GetInvolvedModal } from "./get-involved-modal"

const navItems = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Mentors", href: "/mentors" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/ymrf-logo.png"
                alt="Young Minds Research Foundation"
                width={140}
                height={56}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-navy transition-colors rounded-md hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:flex bg-teal hover:bg-teal/90 text-white"
              >
                Get Involved
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                  <div className="flex flex-col gap-4 mt-8">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                      <Image
                        src="/ymrf-logo.png"
                        alt="Young Minds Research Foundation"
                        width={120}
                        height={48}
                        className="h-12 w-auto"
                      />
                    </Link>
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-3 py-2 text-base font-medium text-foreground/80 hover:text-navy transition-colors rounded-md hover:bg-muted"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Button
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setIsModalOpen(true)
                      }}
                      className="mt-4 bg-teal hover:bg-teal/90 text-white"
                    >
                      Get Involved
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <GetInvolvedModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
