"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { GraduationCap, Users, Building2 } from "lucide-react"
import Link from "next/link"

interface GetInvolvedModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const options = [
  {
    icon: GraduationCap,
    title: "Student",
    description: "Apply for research programs, boot camps, and hackathons",
    href: "/programs",
    color: "bg-[#1FB6A6]",
  },
  {
    icon: Users,
    title: "Mentor",
    description: "Guide the next generation of researchers",
    href: "/mentors",
    color: "bg-[#0B3C5D]",
  },
  {
    icon: Building2,
    title: "Sponsor",
    description: "Support STEM education and student research",
    href: "/sponsors",
    color: "bg-[#F4C430]",
  },
]

export function GetInvolvedModal({ open, onOpenChange }: GetInvolvedModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-[#0B3C5D]">Get Involved with YMRF</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {options.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              onClick={() => onOpenChange(false)}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-[#1FB6A6] hover:bg-muted/50 transition-all group"
            >
              <div className={`${option.color} p-3 rounded-lg text-white group-hover:scale-105 transition-transform`}>
                <option.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{option.title}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Questions?{" "}
            <Link href="/contact" onClick={() => onOpenChange(false)} className="text-[#1FB6A6] hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
