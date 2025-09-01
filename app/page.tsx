import { WaitlistForm } from "@/components/waitlist-form"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Heart, Zap } from "lucide-react"
import Image from "next/image"
import { PrivacyModal } from "@/components/privacy-modal"

export default function WaitlistPage() {
  return (
        <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 overflow-x-hidden">
      {/* Header */}
      <header className="container mx-auto px-4 py-2" style={{paddingTop: 'max(0.5rem, env(safe-area-inset-top))'}}>
        <div className="flex flex-col items-center text-center">
          <Image 
            src="/Dockly_final_unvectorized logo.png" 
            alt="Dockly Logo" 
            width={256} 
            height={256}
            className="w-64 h-64 object-cover drop-shadow-2xl"
          />
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-2">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Dockly!
              </span>
            </h1>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-12">
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur">
              <CardContent className="p-8">
                <div className="mb-6">
                  <p className="text-black font-bold text-xl leading-tight font-serif">
                    Be the first to know when we launch!
                  </p>
                </div>
                <WaitlistForm />
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto font-serif drop-shadow-md">
              We're building a private, student-powered social platform for Brown students. Drop your .edu email to join the interest list for early access, sneak peeks, and help shape the future of campus connection. No spam. No public access. Meet your new best friend or future spouse, join today!
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Location-Based</h3>
                <p className="text-gray-600 text-sm font-serif">Find people right on your campus or in your area</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Interest Matching</h3>
                <p className="text-gray-600 text-sm font-serif">Connect based on hobbies, classes, and shared passions</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Connect</h3>
                <p className="text-gray-600 text-sm font-serif">Quick and easy way to form study groups and friend circles</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8" style={{paddingBottom: 'max(2.5rem, calc(env(safe-area-inset-bottom) + 1rem))'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white space-y-4">
            <p className="text-sm">&copy; 2024 Dockly. Building connections, one crew at a time.</p>
            <div className="text-sm text-white/95 px-4">
              <p className="font-serif leading-relaxed break-words">
                We improve our products and advertising by using Microsoft Clarity to see how you use our website. By using our site, you agree that we and Microsoft can collect and use this data. Our <PrivacyModal /> has more details.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
