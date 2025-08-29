"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface PrivacyModalProps {
  trigger?: React.ReactNode
  children?: React.ReactNode
}

export function PrivacyModal({ trigger, children }: PrivacyModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">privacy statement</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Privacy & Participation Notice</DialogTitle>
        </DialogHeader>
        <DialogDescription asChild>
          <div className="text-sm text-gray-600 space-y-3">
            <p>
              By submitting your email, you consent to receive occasional updates related to the development of our upcoming platform. We collect your email to gauge interest and notify you about launch-related news. Participation is entirely voluntary. By signing up, you acknowledge that this is a pre-launch interest survey, not a live service, and that no guarantees are made regarding future access, features, or availability.
            </p>
            <p>
              No personal data beyond your email will be collected. No financial transactions are involved. No liability is assumed for technical errors, delays, or third-party service interruptions.
            </p>
            <p>
              We do not share, sell, or rent your information to third parties. Your data is stored securely and used only for internal planning and communication. You may unsubscribe at any time via the link in our emails.
            </p>
            <p>
              If you are under 18, please obtain parental permission before signing up.
            </p>
            <p>
              For questions or data removal requests, contact: <a href="https://mail.google.com/mail/?view=cm&to=dockly.help@gmail.com&su=Dockly%20Support%20Request" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">dockly.help@gmail.com</a>
            </p>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
