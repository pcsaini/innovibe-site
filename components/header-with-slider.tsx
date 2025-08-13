"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function HeaderWithSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "EV Services", href: "/ev-services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const slides = [
    {
      image: "/img/slider-1.jpeg",
      title: "India's Premier Electric Vehicle Service Provider",
      subtitle:
        "Innovibe Mobility Everywhere offers comprehensive electric vehicle solutions including sales, services, conversions, and charging infrastructure across India. Join the electric revolution today!",
    },
    {
      image: "/img/slider-2.jpeg",
      title: "Premium Electric Vehicles & Expert Services",
      subtitle:
        "Discover our wide range of electric two-wheelers, three-wheelers, and four-wheelers with professional maintenance and conversion services.",
    },
    {
      image: "/img/slider-3.jpeg",
      title: "Complete EV Ecosystem Solutions",
      subtitle:
        "From vehicle sales to charging infrastructure, battery management to fleet solutions - we provide end-to-end electric mobility services.",
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle slider auto-play
  useEffect(() => {
    if (pathname === "/") {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slides.length, pathname]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const isHomePage = pathname === "/";

  return (
    <div className="relative">
      {/* Top Banner - Hide on scroll for non-home pages */}
      <div
        className={`bg-blue-900 text-white transition-all duration-300 ${
          isScrolled && !isHomePage
            ? "h-0 overflow-hidden py-0"
            : "py-2 md:py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs md:text-sm">
            <div className="text-center md:text-left mb-1 md:mb-0">
              <span>India's Leading Electric Vehicle Service Network</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
              <div className="flex items-center gap-1 md:gap-2">
                <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Visakhapatnam, AP</span>
                <span className="sm:hidden">Vizag, AP</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                <span>info@innovibemobility.com</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span>+91 9876543210</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky */}
      <header
        className={`bg-white shadow-sm relative z-50 transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 right-0 shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link href="/" className="flex items-center">
              <div className="text-xl md:text-2xl font-bold text-blue-600">
                Innovibe Mobility
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 text-sm xl:text-base ${
                    pathname === item.href
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 xl:px-6 text-sm xl:text-base">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-5 w-5 md:h-6 md:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[300px] p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="text-xl font-bold text-blue-600">
                      Innovibe Mobility
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col p-4 space-y-4 flex-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-base font-medium transition-colors py-2 px-3 rounded-lg ${
                          pathname === item.href
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Menu Footer */}
                  <div className="p-4 border-t bg-gray-50">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Quote
                    </Button>
                    <div className="text-center text-xs text-gray-600 space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-3 h-3" />
                        <span>+91 9876543210</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="w-3 h-3" />
                        <span>info@innovibemobility.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      {isScrolled && <div className="h-14 md:h-16" />}

      {/* Hero Section with Background Slider - Only show on home page */}
      {isHomePage && (
        <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
              <div className="absolute inset-0 bg-blue-900/60" />
            </div>
          ))}

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto px-4">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base lg:text-lg font-semibold"
                  >
                    Explore Services
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base lg:text-lg font-semibold bg-transparent"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
