"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { CreditCard, CheckCircle2 } from "lucide-react"

const presetAmounts = [25, 50, 100, 250, 500]

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100)
  const [customAmount, setCustomAmount] = useState("")
  const [isRecurring, setIsRecurring] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(null)
    setCustomAmount(e.target.value)
  }

  const finalAmount = selectedAmount || Number(customAmount) || 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (finalAmount > 0) {
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6 rounded-xl bg-[#1FB6A6]/10 border border-[#1FB6A6]/20">
        <CheckCircle2 className="w-16 h-16 text-[#1FB6A6] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#0B3C5D] mb-2">Thank You!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Your generous donation of ${finalAmount}
          {isRecurring ? "/month" : ""} will help support young researchers. You will receive a confirmation email
          shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-card border border-border shadow-sm">
      <h3 className="text-xl font-semibold text-[#0B3C5D] mb-6">Make a Donation</h3>

      {/* Preset Amounts */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {presetAmounts.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => handlePresetClick(amount)}
            className={`py-3 rounded-lg font-medium text-sm transition-colors ${
              selectedAmount === amount
                ? "bg-[#1FB6A6] text-white"
                : "bg-muted text-foreground hover:bg-[#1FB6A6]/10 hover:text-[#1FB6A6]"
            }`}
          >
            ${amount}
          </button>
        ))}
      </div>

      {/* Custom Amount */}
      <div className="space-y-2 mb-6">
        <Label htmlFor="customAmount">Or enter a custom amount</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
          <Input
            id="customAmount"
            type="number"
            min="1"
            value={customAmount}
            onChange={handleCustomChange}
            placeholder="Other amount"
            className="pl-7"
          />
        </div>
      </div>

      {/* Recurring Toggle */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 mb-6">
        <div>
          <p className="font-medium text-[#0B3C5D]">Make this a monthly gift</p>
          <p className="text-sm text-muted-foreground">Provide sustained support for students</p>
        </div>
        <Switch checked={isRecurring} onCheckedChange={setIsRecurring} />
      </div>

      {/* Summary */}
      {finalAmount > 0 && (
        <div className="p-4 rounded-lg bg-[#1FB6A6]/10 mb-6">
          <p className="text-center">
            <span className="text-lg font-semibold text-[#0B3C5D]">${finalAmount}</span>
            <span className="text-muted-foreground">{isRecurring ? " / month" : " one-time"}</span>
          </p>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={finalAmount === 0}
        className="w-full bg-[#1FB6A6] hover:bg-[#1a9e90] text-white disabled:opacity-50"
      >
        <CreditCard className="w-4 h-4 mr-2" />
        Donate Now
      </Button>

      <p className="text-xs text-center text-muted-foreground mt-4">
        Secure payment powered by Stripe. Your information is protected.
      </p>
    </form>
  )
}
