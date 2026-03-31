"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Calendar, ExternalLink } from "lucide-react"

const sessions = [
  { id: "jun-15-18", label: "June 15–18", days: 4 },
  { id: "jun-22-26", label: "June 22–26", days: 5 },
  { id: "jun-29-jul-02", label: "June 29 – July 2", days: 4 },
  { id: "jul-06-10", label: "July 6–10", days: 5 },
  { id: "jul-13-17", label: "July 13–17", days: 5 },
  { id: "jul-20-24", label: "July 20–24", days: 5 },
  { id: "jul-27-31", label: "July 27–31", days: 5 },
  { id: "aug-03-07", label: "August 3–7", days: 5 },
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
  const [selectedSession, setSelectedSession] = useState("")
  const [sessionType, setSessionType] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const selectedSessionData = sessions.find((s) => s.id === selectedSession)

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
    if (!selectedSession) newErrors.session = "Please select a session"
    if (!sessionType) newErrors.sessionType = "Please select full day or half day"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})

    // Redirect to Stripe payment
    const link = getStripeLink(selectedSessionData?.days || 5, sessionType)
    if (link.startsWith("http")) {
      window.open(link, "_blank")
    }
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6 rounded-xl bg-[#1FB6A6]/10 border border-[#1FB6A6]/20 max-w-2xl mx-auto">
        <CheckCircle2 className="w-16 h-16 text-[#1FB6A6] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#0B3C5D] mb-2">Registration Submitted!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for registering! Please complete your payment on the Stripe checkout page. You will receive a confirmation email shortly.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Session Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#0B3C5D] mb-4">Available Sessions</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {sessions.map((session) => (
            <button
              key={session.id}
              type="button"
              onClick={() => setSelectedSession(session.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedSession === session.id
                  ? "border-[#1FB6A6] bg-[#1FB6A6]/10 ring-2 ring-[#1FB6A6]/30"
                  : "border-border bg-card hover:border-[#1FB6A6]/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <Calendar className={`w-5 h-5 ${selectedSession === session.id ? "text-[#1FB6A6]" : "text-muted-foreground"}`} />
                <div>
                  <p className="font-medium text-[#0B3C5D]">{session.label}</p>
                  <p className="text-xs text-muted-foreground">{session.days}-day session</p>
                </div>
              </div>
            </button>
          ))}
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
            <p className="text-xs text-muted-foreground">9:00 AM – 4:00 PM</p>
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
            <p className="text-xs text-muted-foreground">9:00 AM – 12:00 PM</p>
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
                <SelectItem value="K">Kindergarten</SelectItem>
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
        {selectedSession && sessionType && (
          <Card className="bg-[#0B3C5D]/5 border-[#0B3C5D]/10">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-[#0B3C5D] mb-2">Registration Summary</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>Session:</strong> {selectedSessionData?.label} ({selectedSessionData?.days}-day)</p>
                <p><strong>Type:</strong> {sessionType === "full" ? "Full Day (9AM–4PM)" : "Half Day (9AM–12PM)"}</p>
              </div>
            </CardContent>
          </Card>
        )}

        <Button type="submit" className="w-full bg-[#1FB6A6] hover:bg-[#1a9e90] text-white text-base py-6">
          Register & Proceed to Payment
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          By registering, you agree to our program policies. Payment is processed securely via Stripe.
        </p>
      </form>
    </div>
  )
}
