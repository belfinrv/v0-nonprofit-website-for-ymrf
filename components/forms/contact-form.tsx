"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Send } from "lucide-react"

export function ContactForm() {
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
    if (!formData.get("message")) newErrors.message = "Message is required"

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
        <h3 className="text-2xl font-bold text-[#0B3C5D] mb-2">Message Sent!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for reaching out. We typically respond within 1-2 business days.
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
          <Input id="name" name="name" placeholder="Your name" />
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

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Select name="subject">
          <SelectTrigger id="subject">
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="programs">Program Information</SelectItem>
            <SelectItem value="application">Application Status</SelectItem>
            <SelectItem value="mentor">Mentor Inquiry</SelectItem>
            <SelectItem value="sponsor">Sponsorship Inquiry</SelectItem>
            <SelectItem value="donation">Donation Question</SelectItem>
            <SelectItem value="media">Media / Press</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea id="message" name="message" placeholder="How can we help you?" rows={5} />
        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" className="w-full bg-[#1FB6A6] hover:bg-[#1a9e90] text-white">
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </Button>
    </form>
  )
}
