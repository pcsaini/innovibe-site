import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  const navigationLinks = {
    left: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Blogs", href: "/blogs" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/innovibemobility",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/innovibemobility",
      label: "Facebook",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/innovibemobility",
      label: "YouTube",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/innovibemobility",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/innovibemobility",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 w-fit mb-6">
              <div className="text-2xl font-bold">
                <span className="text-blue-600">Innovibe Mobility</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              India's leading electric vehicle service provider with
              comprehensive EV solutions across the nation.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-12 mb-8">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-black" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Quick Links
                </h4>
                {navigationLinks.left.map((link, index) => (
                  <div key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 block text-sm"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Head Office
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300 leading-relaxed">
                D.No: 47-10-25, Dwaraka Nagar,
                <br />
                Visakhapatnam, Andhra Pradesh - 530016
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">
                    Visakhapatnam, Andhra Pradesh
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">
                    contact@innovibemobility.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">+91 9876543210</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Additional Info */}
        <div className="text-center pt-8 border-t border-gray-800">
          <div className="mb-4">
            <p className="text-gray-300 text-sm mb-2">
              © 2025 Innovibe Mobility Everywhere Mobility India Pvt. Ltd. All
              rights reserved.
            </p>
            <p className="text-gray-400 text-xs">
              Authorized dealer for Hero Electric, Okinawa, Ather, TVS iQube,
              and other leading EV brands
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/refund-policy"
              className="hover:text-white transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
