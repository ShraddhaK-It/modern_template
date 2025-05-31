import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, FileText, Smartphone, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in slide-in-from-left duration-700">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to Your Modern <span className="text-blue-600">Business Application</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A professional business application with enhanced UI and animations
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/dashboard">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="animate-in slide-in-from-right duration-700 delay-300">
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your business efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Modern Dashboard",
                description: "Interactive analytics and business insights at a glance",
                delay: "delay-100",
              },
              {
                icon: FileText,
                title: "Intuitive Forms",
                description: "Streamlined data entry with validation and auto-suggestions",
                delay: "delay-200",
              },
              {
                icon: Users,
                title: "Advanced Reports",
                description: "Comprehensive reporting with filtering and export options",
                delay: "delay-300",
              },
              {
                icon: Smartphone,
                title: "Mobile Responsive",
                description: "Optimized experience across all devices and screen sizes",
                delay: "delay-400",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-all duration-300 animate-in slide-in-from-bottom ${feature.delay}`}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "98", symbol: "%", label: "User Satisfaction" },
              { number: "50", symbol: "+", label: "Business Processes" },
              { number: "24", symbol: "/7", label: "Support & Availability" },
            ].map((stat, index) => (
              <div key={index} className={`animate-in slide-in-from-bottom delay-${(index + 1) * 100}`}>
                <div className="text-5xl lg:text-6xl font-bold mb-2">
                  <span className="counter" data-count={stat.number}>
                    0
                  </span>
                  <span className="text-4xl">{stat.symbol}</span>
                </div>
                <p className="text-xl opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Ready to transform your business?</h2>
            <p className="text-xl text-gray-600">Get started with our modern business application template today.</p>
            <Button size="lg" className="text-lg px-8 py-6 animate-pulse" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
