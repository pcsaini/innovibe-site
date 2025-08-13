import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Battery,
  Car,
  Truck,
  ShoppingCart,
  Plug,
  Settings,
  RefreshCw,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function EvEvolutionSection() {
  type ServiceMeta = {
    icon: React.ElementType;
    description: string;
    link?: string;
  };

  const serviceTitles: string[] = [
    "EV Services",
    "EV Conversion",
    "EV Battery",
    "EV Rental",
    "EV Fleet",
    "EV Sales",
    "EV Charging",
    "EV Spares",
    "EV Exchange",
    "EV Insurance & Accidental Claims",
  ];

  const serviceMeta: Record<string, ServiceMeta> = {
    "EV Services": {
      icon: Wrench,
      description:
        "All-around EV maintenance, repair, and home service for two-wheelers and bikes.",
      link: "/ev-services",
    },
    "EV Conversion": {
      icon: RefreshCw,
      description:
        "Transform your petrol vehicle to electric with expert conversion services.",
    },
    "EV Battery": {
      icon: Battery,
      description:
        "Advanced battery solutions: replacement, upgrades, and smart management.",
    },
    "EV Rental": {
      icon: Zap,
      description:
        "Rent electric bikes and scooters for flexible, eco-friendly mobility.",
    },
    "EV Fleet": {
      icon: Car,
      description:
        "Corporate and business fleet management for electric vehicles.",
    },
    "EV Sales": {
      icon: ShoppingCart,
      description:
        "Buy two-, three-, and four-wheel electric vehicles for all needs.",
    },
    "EV Charging": {
      icon: Plug,
      description:
        "Home and public charging stations, plus fast-charging solutions.",
    },
    "EV Spares": {
      icon: Settings,
      description: "Genuine spare parts and accessories for all EV models.",
    },
    "EV Exchange": {
      icon: Truck,
      description:
        "Trade in and upgrade to electric goods and passenger vehicles.",
    },
    "EV Insurance & Accidental Claims": {
      icon: Shield,
      description:
        "Comprehensive insurance and hassle-free claim services for your EV.",
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            InnoVibe: Powering India's Electric Future
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Headquartered in Visakhapatnam, Andhra Pradesh, Innovibe Mobility
            Everywhere is India's fastest-growing electric vehicle service
            network.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-12">
            Complete Electric Vehicle Ecosystem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {serviceTitles.map((title, index) => {
              const { icon: Icon, description, link } = serviceMeta[title];
              return (
                <Link href={link || "#"}>
                  <Card
                    key={index}
                    className="group cursor-pointer border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-bold text-gray-800 mb-3">
                          {title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="text-center bg-blue-600 rounded-2xl p-8 lg:p-12 text-white animate-fade-in-up">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Partner with India's EV Revolution
          </h3>
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Join EV GO as a franchise partner or investor. Be part of India's
            largest electric vehicle service ecosystem with proven business
            models and comprehensive support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
              <span className="text-xl font-medium">
                contact@innovibemobility.com
              </span>
            </div>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
              <span className="text-xl font-medium">
                ceo@innovibemobility.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
