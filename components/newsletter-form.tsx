"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }
    setError("")
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-2 text-[#1FB6A6]">
        <CheckCircle2 className="w-5 h-5" />
        <span className="text-sm font-medium">Thanks for subscribing!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <div className="flex-1">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
        {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
      </div>
      <Button type="submit" className="bg-[#1FB6A6] hover:bg-[#1a9e90] text-white">
        Subscribe
      </Button>
    </form>
  )
}
