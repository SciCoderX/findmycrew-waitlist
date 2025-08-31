import { WaitlistForm } from "@/components/waitlist-form"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Heart, Zap } from "lucide-react"
import Image from "next/image"
import { PrivacyModal } from "@/components/privacy-modal"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <Image 
                src="/Dockly_final_unvectorized logo.png" 
                alt="Dockly Logo" 
                width={32} 
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Dockly</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Dockly!
              </span>
            </h1>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-12">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h2>
                  <p className="text-gray-600">Be the first to know when we launch for Brown students</p>
                </div>
                <WaitlistForm />
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're building a private, student-powered social platform for Brown students. Drop your .edu email to join the interest list for early access, sneak peeks, and help shape the future of campus connection. No spam. No public access. Meet your new best friend or future spouse, join today!
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Location-Based</h3>
                <p className="text-gray-600 text-sm">Find people right on your campus or in your area</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Interest Matching</h3>
                <p className="text-gray-600 text-sm">Connect based on hobbies, classes, and shared passions</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Connect</h3>
                <p className="text-gray-600 text-sm">Quick and easy way to form study groups and friend circles</p>
              </CardContent>
            </Card>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Starting at our university, expanding everywhere</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-sm font-medium">🎓 College Students</div>
              <div className="text-sm font-medium">📍 Location-Based</div>
              <div className="text-sm font-medium">🤝 Interest Matching</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-gray-500 space-y-2">
            <p>&copy; 2024 Dockly. Building connections, one crew at a time.</p>
            <div className="text-xs text-gray-500">
              <p>
                We improve our products and advertising by using Microsoft Clarity to see how you use our website. By using our site, you agree that we and Microsoft can collect and use this data. Our <PrivacyModal /> has more details.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
