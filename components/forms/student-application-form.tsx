"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export function StudentApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newErrors: Record<string, string> = {}

    // Simple validation
    if (!formData.get("name")) newErrors.name = "Name is required"
    if (!formData.get("email") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email") as string)) {
      newErrors.email = "Valid email is required"
    }
    if (!formData.get("grade")) newErrors.grade = "Grade is required"
    if (!formData.get("school")) newErrors.school = "School is required"
    if (!formData.get("parentEmail") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("parentEmail") as string)) {
      newErrors.parentEmail = "Valid parent/guardian email is required"
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
        <h3 className="text-2xl font-bold text-[#0B3C5D] mb-2">Application Submitted!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for your interest in YMRF. We will review your application and get back to you within 5-7 business
          days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl bg-card border border-border shadow-sm">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input id="name" name="name" placeholder="Enter your full name" />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input id="email" name="email" type="email" placeholder="your.email@example.com" />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="grade">
            Grade Level <span className="text-red-500">*</span>
          </Label>
          <Select name="grade">
            <SelectTrigger id="grade">
              <SelectValue placeholder="Select grade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9">9th Grade</SelectItem>
              <SelectItem value="10">10th Grade</SelectItem>
              <SelectItem value="11">11th Grade</SelectItem>
              <SelectItem value="12">12th Grade</SelectItem>
            </SelectContent>
          </Select>
          {errors.grade && <p className="text-xs text-red-500">{errors.grade}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="school">
            School Name <span className="text-red-500">*</span>
          </Label>
          <Input id="school" name="school" placeholder="Your high school" />
          {errors.school && <p className="text-xs text-red-500">{errors.school}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">City, State</Label>
        <Input id="location" name="location" placeholder="e.g., San Francisco, CA" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interests">Research Interests</Label>
        <Textarea
          id="interests"
          name="interests"
          placeholder="Tell us about your STEM interests and what research areas excite you..."
          rows={4}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="availability">Availability</Label>
          <Select name="availability">
            <SelectTrigger id="availability">
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekdays">Weekday afternoons</SelectItem>
              <SelectItem value="weekends">Weekends</SelectItem>
              <SelectItem value="both">Both weekdays and weekends</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="parentEmail">
            Parent/Guardian Email <span className="text-red-500">*</span>
          </Label>
          <Input id="parentEmail" name="parentEmail" type="email" placeholder="parent.email@example.com" />
          {errors.parentEmail && <p className="text-xs text-red-500">{errors.parentEmail}</p>}
        </div>
      </div>

      <Button type="submit" className="w-full bg-[#1FB6A6] hover:bg-[#1a9e90] text-white">
        Submit Application
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        By submitting, you agree to our privacy policy. A parent or guardian will be contacted to confirm your
        enrollment.
      </p>
    </form>
  )
}
