import { Check, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function EvConversionPage() {
  const services = [
    {
      id: 1,
      title: "Hybrid Conversion",
      description: "Make your vehicle hybrid today.",
      image: "/img/conversion-hybrid.jpeg",
      isPopular: true,
      features: [
        "Minimize emissions",
        "Increase performance",
        "Seamless integration",
      ],
    },
    {
      id: 2,
      title: "Full Electric Conversion",
      description: "Convert to 100% electric easily.",
      image: "/img/conversion-full-electric.jpeg",
      isPopular: true,
      features: [
        "Comprehensive solutions",
        "Expert installation",
        "Save money long-term",
      ],
    },
    {
      id: 3,
      title: "EV Battery Installation",
      description: "Get the best battery for your EV.",
      image: "/img/conversion-battery.jpeg",
      isPopular: false,
      features: ["Reliable brands", "Enhance performance", "Durable solutions"],
    },
    {
      id: 4,
      title: "Consultation for Conversion",
      description: "Consult our experts for your EV conversion.",
      image: "/img/conversion-consultation.jpeg",
      isPopular: false,
      features: [
        "Understand your options",
        "Cost-effective solutions",
        "Skilled technicians",
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            EV Conversion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Convert your existing vehicle to electric and enjoy the benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-64 lg:h-72 object-cover"
                />

                {service.isPopular && (
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 text-sm font-semibold">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Popular
                  </Badge>
                )}
              </div>

              <CardContent className="p-6 lg:p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-blue-600" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm lg:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
