"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle } from "lucide-react"
import { submitToWaitlist } from "@/app/actions"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleFormStart = () => {
    // Track form interactions
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_start', {
        'event_category': 'engagement',
        'event_label': 'email_field_focus'
      });
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    if (!agreed) {
      toast({
        title: "Agreement required",
        description: "Please agree to receive updates before submitting",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Track email submissions
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'email_signup', {
        'event_category': 'conversion',
        'event_label': 'waitlist_signup'
      });
    }

    try {
      const result = await submitToWaitlist(email)

      if (result.success) {
        setIsSubmitted(true)
        setEmail("")
        setAgreed(false)
        toast({
          title: "You're on the list! 🎉",
          description: "We'll notify you as soon as Dockly launches for Brown students.",
        })
      } else {
        toast({
          title: "Signup issue",
          description: "There might be a technical issue, but your email may have been saved. Please check back later.",
          variant: "destructive",
        })
        console.error("Detailed error:", result.error)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Something went wrong",
        description: "There was an issue, but your email might have been saved. Please try again if needed.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Dockly! 🎉</h3>
        <p className="text-gray-600">We'll email you as soon as we launch for Brown students.</p>
        <p className="text-sm text-gray-500 mt-2">Your email has been successfully saved to our interest list.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-left block">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@brown.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={handleFormStart}
          required
          className="w-full"
          disabled={isSubmitting}
        />
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox 
          id="agreement" 
          checked={agreed}
          onCheckedChange={(checked) => setAgreed(checked === true)}
          disabled={isSubmitting}
        />
        <Label htmlFor="agreement" className="text-sm text-gray-600 leading-tight cursor-pointer">
          I agree to receive updates about this student-led initiative and understand the privacy notice.
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        disabled={isSubmitting || !agreed}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Joining...
          </>
        ) : (
          "Join the Interest List"
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">We'll never spam you. Unsubscribe at any time.</p>
    </form>
  )
}
