import { WaitlistForm } from "@/components/waitlist-form"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Heart, Zap } from "lucide-react"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
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
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're building a private, student-powered social platform for Brown students. Drop your .edu email to join the interest list for early access, sneak peeks, and help shape the future of campus connection. No spam. No public access. Just students and campus vibes!
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

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Interest List</h2>
                  <p className="text-gray-600">Be the first to know when we launch for Brown students</p>
                </div>
                <WaitlistForm />
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
          {/* Privacy Notice */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-sm text-gray-600">
            <h3 className="font-semibold text-gray-800 mb-3">Privacy & Participation Notice:</h3>
            <p className="mb-3">
              By submitting your email, you consent to receive occasional updates related to the development of our upcoming platform. We collect your email to gauge interest and notify you about launch-related news. Participation is entirely voluntary. By signing up, you acknowledge that this is a pre-launch interest survey, not a live service, and that no guarantees are made regarding future access, features, or availability.
            </p>
            <p className="mb-3">
              No personal data beyond your email will be collected. No financial transactions are involved. No liability is assumed for technical errors, delays, or third-party service interruptions.
            </p>
            <p className="mb-3">
              We do not share, sell, or rent your information to third parties. Your data is stored securely and used only for internal planning and communication. You may unsubscribe at any time via the link in our emails.
            </p>
            <p className="mb-3">
              If you are under 18, please obtain parental permission before signing up.
            </p>
            <p>
              For questions or data removal requests, contact: <a href="mailto:dockly.help@gmail.com" className="text-blue-600 hover:text-blue-800">dockly.help@gmail.com</a>
            </p>
          </div>
          
          <div className="text-center text-gray-500">
            <p>&copy; 2024 Dockly. Building connections, one crew at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
