"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export function MentorApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newErrors: Record<string, string> = {}

    if (!formData.get("name")) newErrors.name = "Name is required"
    if (!formData.get("email") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email") as string)) {
      newErrors.email = "Valid email is required"
    }
    if (!formData.get("background")) newErrors.background = "Background information is required"

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
        <h3 className="text-2xl font-bold text-[#0B3C5D] mb-2">Application Received!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for your interest in becoming a YMRF mentor. Our team will review your application and reach out
          within 7-10 business days.
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
          <Label htmlFor="affiliation">Current Affiliation</Label>
          <Input id="affiliation" name="affiliation" placeholder="University, company, or organization" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Current Role</Label>
          <Select name="role">
            <SelectTrigger id="role">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="graduate">Graduate Student</SelectItem>
              <SelectItem value="postdoc">Postdoctoral Researcher</SelectItem>
              <SelectItem value="professor">Professor / Faculty</SelectItem>
              <SelectItem value="industry">Industry Professional</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="expertise">Areas of Expertise</Label>
        <Input
          id="expertise"
          name="expertise"
          placeholder="e.g., Machine Learning, Neuroscience, Data Science, Engineering"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="background">
          Background & Motivation <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="background"
          name="background"
          placeholder="Tell us about your research background and why you're interested in mentoring high school students..."
          rows={4}
        />
        {errors.background && <p className="text-xs text-red-500">{errors.background}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="commitment">Time Commitment</Label>
        <Select name="commitment">
          <SelectTrigger id="commitment">
            <SelectValue placeholder="Select availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-2">1-2 hours per week</SelectItem>
            <SelectItem value="2-3">2-3 hours per week</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-[#1FB6A6] hover:bg-[#1a9e90] text-white">
        Submit Application
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        All mentors undergo a brief screening process. We will contact you to schedule an orientation call.
      </p>
    </form>
  )
}
