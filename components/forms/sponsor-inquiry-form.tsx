"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export function SponsorInquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newErrors: Record<string, string> = {}

    if (!formData.get("organization")) newErrors.organization = "Organization name is required"
    if (!formData.get("contactName")) newErrors.contactName = "Contact name is required"
    if (!formData.get("email") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email") as string)) {
      newErrors.email = "Valid email is required"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6 rounded-xl bg-[#1FB6A6]/10 border border-[#1FB6A6]/20">
        <CheckCircle2 className="w-16 h-16 text-[#1FB6A6] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#0B3C5D] mb-2">Inquiry Submitted!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for your interest in sponsoring YMRF. Our partnerships team will contact you within 3-5 business
          days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl bg-card border border-border shadow-sm">
      <div className="space-y-2">
        <Label htmlFor="organization">
          Organization Name <span className="text-red-500">*</span>
        </Label>
        <Input id="organization" name="organization" placeholder="Your company or organization" />
        {errors.organization && <p className="text-xs text-red-500">{errors.organization}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="contactName">
            Contact Name <span className="text-red-500">*</span>
          </Label>
          <Input id="contactName" name="contactName" placeholder="Your full name" />
          {errors.contactName && <p className="text-xs text-red-500">{errors.contactName}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input id="email" name="email" type="email" placeholder="contact@company.com" />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tier">Interested Sponsorship Level</Label>
        <Select name="tier">
          <SelectTrigger id="tier">
            <SelectValue placeholder="Select a tier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bronze">Bronze ($1,000)</SelectItem>
            <SelectItem value="silver">Silver ($2,500)</SelectItem>
            <SelectItem value="gold">Gold ($5,000)</SelectItem>
            <SelectItem value="platinum">Platinum ($10,000)</SelectItem>
            <SelectItem value="custom">Custom Package</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your organization's goals and how you'd like to partner with YMRF..."
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full bg-[#1FB6A6] hover:bg-[#1a9e90] text-white">
        Submit Inquiry
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        All sponsorship contributions are tax-deductible to the extent permitted by law.
      </p>
    </form>
  )
}
