import { Search, Calendar, Star, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      number: "1",
      title: "Choose a Service",
      description: "Select from our range of services.",
      icon: Search,
      details:
        "Browse through our comprehensive EV services including sales, maintenance, conversion, and charging solutions.",
    },
    {
      id: 2,
      number: "2",
      title: "Book an Appointment",
      description: "Schedule your service or consultation at your convenience.",
      icon: Calendar,
      details: "Pick a time slot that works for you. Our flexible scheduling accommodates your busy lifestyle.",
    },
    {
      id: 3,
      number: "3",
      title: "Enjoy the Benefits",
      description: "Experience top-notch EV services and products.",
      icon: Star,
      details: "Sit back and enjoy professional service delivery with guaranteed satisfaction and quality results.",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Accessing our electric vehicle services is easy. Follow these simple steps to get started!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <Card
                className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{step.description}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.details}</p>
                  </div>

                  <div className="mt-6">
                    <step.icon className="w-8 h-8 text-blue-600 mx-auto" />
                  </div>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Our Process Works</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our streamlined approach ensures you get the best EV services with minimal hassle and maximum
                satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quick & Easy",
                  description: "Simple 3-step process that takes just minutes to complete",
                  stat: "< 5 min",
                },
                {
                  title: "Flexible Scheduling",
                  description: "Book appointments that fit your schedule, including weekends",
                  stat: "24/7",
                },
                {
                  title: "Guaranteed Quality",
                  description: "Professional service delivery with 100% satisfaction guarantee",
                  stat: "100%",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{feature.stat}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of satisfied customers who have experienced our seamless EV services. Start your journey
              today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                Choose Your Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 font-semibold bg-transparent"
              >
                Contact Support
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10K+</div>
                <div className="opacity-90">Services Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="opacity-90">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24hrs</div>
                <div className="opacity-90">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="opacity-90">Service Locations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
