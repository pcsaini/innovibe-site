import { Check, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function EvServicesSection() {
  const services = [
    {
      id: 1,
      title: "2 Wheelers (Bicycle, Scooter & Bikes)",
      description: "Choose your ideal 2-wheeler from our collection.",
      image: "/img/service-2-wheelers.jpeg",
      isPopular: true,
      features: [
        "Ideal for city commutes",
        "Various models available",
        "Expert support provided",
      ],
    },
    {
      id: 2,
      title: "Roadside Assistance (RSA)",
      description: "Get help anytime, anywhere on the road.",
      image: "/img/service-road.jpg",
      isPopular: true,
      features: [
        "Instant help on the go",
        "Coverage across regions",
        "Professional technicians ready",
      ],
    },
    {
      id: 3,
      title: "Home Service & Maintenance",
      description: "Professional EV maintenance at your doorstep.",
      image: "/img/service-home.jpeg",
      isPopular: false,
      features: [
        "Doorstep service available",
        "Certified technicians",
        "Genuine parts guaranteed",
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            EV Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover reliable and eco-friendly EV solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
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

                  <Link href="/booking">
                    <Button className="w-full mt-6" size="lg">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
