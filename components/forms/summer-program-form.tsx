"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Calendar, ExternalLink, Rocket, Wrench, Zap, Bot } from "lucide-react"

const themes = [
  {
    id: "theme-1",
    icon: Rocket,
    title: "Adventures in Coding!",
    description: "Boats that sail, snowmobiles that zoom, submarines that dive deep...",
    weeks: ["jun-15-18", "jun-22-26"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: "theme-2",
    icon: Wrench,
    title: "Engineering Wonders!",
    description: "A carousel that actually spins and a Trash Monster Machine that WAKES UP when you walk by...",
    weeks: ["jun-29-jul-02", "jul-06-10"],
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    id: "theme-3",
    icon: Zap,
    title: "Energy & Forces Science!",
    description: "A bowling lane where YOU control the crash and a pinball machine with a real working flipper...",
    weeks: ["jul-13-17", "jul-20-24"],
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    id: "theme-4",
    icon: Bot,
    title: "Computer Science & AI!",
    description: "Train an AI to Strike A Pose and build a robot that reads colour and makes its own decisions...",
    weeks: ["jul-27-31", "aug-03-07"],
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
]

const sessions = [
  { id: "jun-15-18", label: "June 15-18", days: 4, themeId: "theme-1" },
  { id: "jun-22-26", label: "June 22-26", days: 5, themeId: "theme-1" },
  { id: "jun-29-jul-02", label: "June 29 - July 2", days: 4, themeId: "theme-2" },
  { id: "jul-06-10", label: "July 6-10", days: 5, themeId: "theme-2" },
  { id: "jul-13-17", label: "July 13-17", days: 5, themeId: "theme-3" },
  { id: "jul-20-24", label: "July 20-24", days: 5, themeId: "theme-3" },
  { id: "jul-27-31", label: "July 27-31", days: 5, themeId: "theme-4" },
  { id: "aug-03-07", label: "August 3-7", days: 5, themeId: "theme-4" },
]

const STRIPE_LINKS = {
  "4-day-full": "https://buy.stripe.com/7sYeVe9Omg8c72D8SC4ko05",
  "4-day-half": "https://buy.stripe.com/fZu8wQ8KiaNS2Mngl44ko02",
  "5-day-full": "https://buy.stripe.com/fZu3cw2lU1difz9fh04ko07",
  "5-day-half": "https://buy.stripe.com/5kQdRa2lU6xC86H0m64ko04",
}

function getStripeLink(days: number, sessionType: string): string {
  if (days === 4 && sessionType === "full") return STRIPE_LINKS["4-day-full"]
  if (days === 4 && sessionType === "half") return STRIPE_LINKS["4-day-half"]
  if (days === 5 && sessionType === "full") return STRIPE_LINKS["5-day-full"]
  if (days === 5 && sessionType === "half") return STRIPE_LINKS["5-day-half"]
  return "#"
}

export function SummerProgramForm() {
  const [selectedSessions, setSelectedSessions] = useState<string[]>([])
  const [sessionType, setSessionType] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleSession = (id: string) => {
    setSelectedSessions((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const selectedSessionsData = sessions.filter((s) => selectedSessions.includes(s.id))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newErrors: Record<string, string> = {}

    if (!formData.get("childName")) newErrors.childName = "Child's name is required"
    if (!formData.get("childAge")) newErrors.childAge = "Age is required"
    if (!formData.get("grade")) newErrors.grade = "Grade is required"
    if (!formData.get("parentName")) newErrors.parentName = "Parent/guardian name is required"
    if (!formData.get("parentEmail") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("parentEmail") as string)) {
      newErrors.parentEmail = "Valid email is required"
    }
    if (!formData.get("parentPhone")) newErrors.parentPhone = "Phone number is required"
    if (selectedSessions.length === 0) newErrors.session = "Please select at least one session"
    if (!sessionType) newErrors.sessionType = "Please select full day or half day"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="py-12 px-6 rounded-xl bg-[#1FB6A6]/10 border border-[#1FB6A6]/20 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Calendar className="w-16 h-16 text-[#0B3C5D] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#0B3C5D] mb-2">Complete Your Payment</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Your information has been saved. Please click the payment link below for each week to complete registration.
          </p>
        </div>
        <div className="space-y-3">
          {selectedSessionsData.map((session) => {
            const theme = themes.find((t) => t.id === session.themeId)
            const link = getStripeLink(session.days, sessionType)
            return (
              <div key={session.id} className="flex items-center justify-between p-4 rounded-lg bg-white border border-border">
                <div>
                  <p className="font-medium text-[#0B3C5D]">{session.label}</p>
                  <p className="text-xs text-muted-foreground">{theme?.title} — {session.days}-day {sessionType === "full" ? "Full Day" : "Half Day"}</p>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1FB6A6] hover:bg-[#1a9e90] text-white text-sm font-medium transition-colors"
                >
                  Pay Now
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )
          })}
        </div>
        <p className="text-xs text-center text-muted-foreground mt-6">
          Payment is processed securely via Stripe. You will receive a confirmation email after each payment.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Themed Session Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#0B3C5D] mb-2">Select Your Weeks</h3>
        <p className="text-sm text-muted-foreground mb-4">You can select multiple weeks across different themes.</p>

        <div className="space-y-6">
          {themes.map((theme) => {
            const themeWeeks = sessions.filter((s) => s.themeId === theme.id)
            const allSelected = themeWeeks.every((w) => selectedSessions.includes(w.id))
            return (
              <div key={theme.id} className="rounded-xl border border-border overflow-hidden">
                <div className={`px-5 py-4 ${theme.bg} flex items-start gap-3`}>
                  <theme.icon className={`w-6 h-6 mt-0.5 ${theme.color} flex-shrink-0`} />
                  <div className="flex-1">
                    <h4 className={`font-semibold ${theme.color}`}>{theme.title}</h4>
                    <p className="text-sm text-muted-foreground">{theme.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (allSelected) {
                        setSelectedSessions((prev) => prev.filter((id) => !themeWeeks.some((w) => w.id === id)))
                      } else {
                        setSelectedSessions((prev) => [...new Set([...prev, ...themeWeeks.map((w) => w.id)])])
                      }
                    }}
                    className={`text-xs px-3 py-1 rounded-full border font-medium transition-all flex-shrink-0 mt-1 ${
                      allSelected
                        ? "border-[#1FB6A6] bg-[#1FB6A6] text-white"
                        : "border-border text-muted-foreground hover:border-[#1FB6A6]/40"
                    }`}
                  >
                    {allSelected ? "Selected" : "Select Both"}
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 p-4 bg-card">
                  {themeWeeks.map((session) => (
                    <button
                      key={session.id}
                      type="button"
                      onClick={() => toggleSession(session.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedSessions.includes(session.id)
                          ? "border-[#1FB6A6] bg-[#1FB6A6]/10 ring-2 ring-[#1FB6A6]/30"
                          : "border-border bg-background hover:border-[#1FB6A6]/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className={`w-5 h-5 ${selectedSessions.includes(session.id) ? "text-[#1FB6A6]" : "text-muted-foreground"}`} />
                        <div>
                          <p className="font-medium text-[#0B3C5D]">{session.label}</p>
                          <p className="text-xs text-muted-foreground">{session.days}-day session</p>
                        </div>
                        {selectedSessions.includes(session.id) && (
                          <CheckCircle2 className="w-5 h-5 text-[#1FB6A6] ml-auto" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        {errors.session && <p className="text-xs text-red-500 mt-2">{errors.session}</p>}
      </div>

      {/* Session Type */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#0B3C5D] mb-4">Session Type</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setSessionType("full")}
            className={`p-4 rounded-xl border text-left transition-all ${
              sessionType === "full"
                ? "border-[#1FB6A6] bg-[#1FB6A6]/10 ring-2 ring-[#1FB6A6]/30"
                : "border-border bg-card hover:border-[#1FB6A6]/40"
            }`}
          >
            <p className="font-medium text-[#0B3C5D]">Full Day</p>
            <p className="text-xs text-muted-foreground">9:00 AM - 4:00 PM</p>
          </button>
          <button
            type="button"
            onClick={() => setSessionType("half")}
            className={`p-4 rounded-xl border text-left transition-all ${
              sessionType === "half"
                ? "border-[#1FB6A6] bg-[#1FB6A6]/10 ring-2 ring-[#1FB6A6]/30"
                : "border-border bg-card hover:border-[#1FB6A6]/40"
            }`}
          >
            <p className="font-medium text-[#0B3C5D]">Half Day</p>
            <p className="text-xs text-muted-foreground">9:00 AM - 12:00 PM</p>
          </button>
        </div>
        {errors.sessionType && <p className="text-xs text-red-500 mt-2">{errors.sessionType}</p>}
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl bg-card border border-border shadow-sm">
        <h3 className="text-lg font-semibold text-[#0B3C5D]">Child Information</h3>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="childName">
              Child&apos;s Full Name <span className="text-red-500">*</span>
            </Label>
            <Input id="childName" name="childName" placeholder="Enter child's full name" />
            {errors.childName && <p className="text-xs text-red-500">{errors.childName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="childAge">
              Age <span className="text-red-500">*</span>
            </Label>
            <Input id="childAge" name="childAge" type="number" min="4" max="12" placeholder="e.g., 8" />
            {errors.childAge && <p className="text-xs text-red-500">{errors.childAge}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="grade">
              Upcoming Grade <span className="text-red-500">*</span>
            </Label>
            <Select name="grade">
              <SelectTrigger id="grade">
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1st Grade</SelectItem>
                <SelectItem value="2">2nd Grade</SelectItem>
                <SelectItem value="3">3rd Grade</SelectItem>
                <SelectItem value="4">4th Grade</SelectItem>
                <SelectItem value="5">5th Grade</SelectItem>
              </SelectContent>
            </Select>
            {errors.grade && <p className="text-xs text-red-500">{errors.grade}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="school">School Name</Label>
            <Input id="school" name="school" placeholder="Current or upcoming school" />
          </div>
        </div>

        <hr className="border-border" />

        <h3 className="text-lg font-semibold text-[#0B3C5D]">Parent / Guardian Information</h3>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="parentName">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input id="parentName" name="parentName" placeholder="Parent/guardian full name" />
            {errors.parentName && <p className="text-xs text-red-500">{errors.parentName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="parentEmail">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input id="parentEmail" name="parentEmail" type="email" placeholder="parent@email.com" />
            {errors.parentEmail && <p className="text-xs text-red-500">{errors.parentEmail}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="parentPhone">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input id="parentPhone" name="parentPhone" type="tel" placeholder="+1 (555) 123-4567" />
          {errors.parentPhone && <p className="text-xs text-red-500">{errors.parentPhone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="allergies">Allergies / Medical Notes</Label>
          <Textarea
            id="allergies"
            name="allergies"
            placeholder="Please list any allergies, medical conditions, or special needs we should be aware of..."
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Anything else you'd like us to know?"
            rows={2}
          />
        </div>

        {/* Summary */}
        {selectedSessions.length > 0 && sessionType && (
          <Card className="bg-[#0B3C5D]/5 border-[#0B3C5D]/10">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-[#0B3C5D] mb-2">Registration Summary</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>Selected Weeks ({selectedSessions.length}):</strong></p>
                <ul className="list-disc list-inside space-y-0.5 ml-2">
                  {selectedSessionsData.map((s) => {
                    const theme = themes.find((t) => t.id === s.themeId)
                    return (
                      <li key={s.id}>{s.label} ({s.days}-day) — {theme?.title}</li>
                    )
                  })}
                </ul>
                <p className="mt-2"><strong>Type:</strong> {sessionType === "full" ? "Full Day (9AM-4PM)" : "Half Day (9AM-12PM)"}</p>
              </div>
            </CardContent>
          </Card>
        )}

        <Button type="submit" className="w-full bg-[#1FB6A6] hover:bg-[#1a9e90] text-white text-base py-6">
          Register & Proceed to Payment {selectedSessions.length > 1 ? `(${selectedSessions.length} weeks)` : ""}
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          By registering, you agree to our program policies. Payment is processed securely via Stripe.
          {selectedSessions.length > 1 && " A separate payment page will open for each selected week."}
        </p>
      </form>
    </div>
  )
}
