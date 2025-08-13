import { Check, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AboutSection() {
  const companyValues = [
    {
      title: "Mission",
      icon: Target,
      content: [
        "To deliver sustainable and innovative electric vehicle solutions.",
        "We enhance mobility through exceptional service and eco-friendly technology.",
      ],
    },
    {
      title: "Vision",
      icon: Eye,
      content: [
        "To be India's leading provider of electric vehicle technology.",
        "We strive to foster a greener, sustainable future through innovative mobility solutions.",
      ],
    },
    {
      title: "Values",
      icon: Heart,
      content: [
        "Customer Focus: Prioritising customer needs with tailored EV solutions.",
        "Innovation & Sustainability: Driving cutting-edge technology for a greener tomorrow.",
        "Integrity & Excellence: Upholding honesty and excellence in all we do.",
      ],
    },
  ];

  const whyChooseUs = [
    {
      title: "Innovative Solutions",
      description:
        "We offer the latest technologies to enhance your EV experience.",
    },
    {
      title: "24/7 Support",
      description:
        "Our team is here to assist you with any EV-related needs anytime.",
    },
    {
      title: "Wide Selection",
      description:
        "Choose from a range of electric vehicles to suit your lifestyle.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="relative animate-fade-in-left">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/about.jpeg"
                alt="Innovibe Mobility team examining electric vehicles"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full opacity-20"></div>
          </div>

          <div className="space-y-6 animate-fade-in-right">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Innovibe Mobility</span>
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p>
                <strong>Innovibe Mobility</strong>, headquartered in
                Visakhapatnam, Andhra Pradesh, is a pioneering force in India's
                electric vehicle industry. Founded by Sri Hari Kolusu, we
                deliver cutting-edge EV solutions, from sales and services to
                charging infrastructure and fleet management.
              </p>
              <p>
                Our commitment to sustainability drives us to promote greener
                mobility nationwide. With plans for regional branches in every
                state capital and 100 franchises per state within three years,
                we aim to revolutionize transportation.
              </p>
              <p>
                Trust Innovibe Mobility to lead the charge toward a sustainable
                future with innovative, customer-focused solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-blue-600 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {value.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {value.content.map((text, textIndex) => (
                      <p
                        key={textIndex}
                        className="text-gray-600 leading-relaxed"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 animate-fade-in-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Why Choose Innovibe Mobility?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Benefit from our extensive expertise, comprehensive services, and
              commitment to sustainability in the EV sector.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "10+ years of combined industry experience",
                "Nationwide service network across India",
                "Certified technicians and quality assurance",
                "Eco-friendly solutions for sustainable future",
                "Competitive pricing with flexible payment options",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-right">
            {whyChooseUs.map((benefit, index) => (
              <Card
                key={index}
                className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 animate-fade-in-up">
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Our Impact in Numbers</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Leading India's electric vehicle revolution with measurable
                results and sustainable solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10K+", label: "Happy Customers" },
                { number: "50+", label: "Service Centers" },
                { number: "100+", label: "EV Models" },
                { number: "99%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
