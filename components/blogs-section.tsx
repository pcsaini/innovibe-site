"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    slug: "future-of-electric-vehicles-in-india",
    title: "The Future of Electric Vehicles in India: Trends and Opportunities",
    excerpt:
      "Explore the rapidly evolving EV landscape in India, government initiatives, and emerging opportunities for businesses and consumers.",
    content: `The electric vehicle revolution in India is gaining unprecedented momentum. With government support, technological advancements, and changing consumer preferences, the EV market is poised for exponential growth.

## Government Initiatives

The Indian government has launched several initiatives to promote electric mobility:

- **FAME II Scheme**: Providing subsidies for EV purchases
- **PLI Scheme**: Supporting domestic manufacturing
- **State Policies**: Various states offering additional incentives

## Market Trends

The EV market in India is experiencing several key trends:

1. **Increasing Adoption**: Two-wheeler EVs leading the charge
2. **Infrastructure Development**: Rapid expansion of charging networks
3. **Technology Innovation**: Improved battery technology and range

## Opportunities Ahead

The future holds immense opportunities:

- **Manufacturing Hub**: India becoming a global EV manufacturing center
- **Job Creation**: New employment opportunities in the EV ecosystem
- **Environmental Impact**: Significant reduction in carbon emissions

The transition to electric mobility is not just a trend but a necessity for sustainable transportation in India.`,
    image: "placeholder.svg",
    author: "Sri Hari Kolusu",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Industry Insights",
    tags: ["Electric Vehicles", "India", "Future", "Government Policy"],
    featured: true,
  },
  {
    id: 2,
    slug: "ev-charging-infrastructure-guide",
    title: "Complete Guide to EV Charging Infrastructure in India",
    excerpt:
      "Everything you need to know about EV charging stations, types of chargers, and the growing charging network across India.",
    content: `Understanding EV charging infrastructure is crucial for both current and prospective EV owners. This comprehensive guide covers everything you need to know about charging your electric vehicle in India.

## Types of EV Chargers

### Level 1 Charging (AC Slow)
- **Power**: 3.3 kW
- **Charging Time**: 6-8 hours for full charge
- **Best For**: Home charging, overnight charging

### Level 2 Charging (AC Fast)
- **Power**: 7.4 kW - 22 kW
- **Charging Time**: 2-4 hours for full charge
- **Best For**: Public charging, workplace charging

### Level 3 Charging (DC Fast)
- **Power**: 50 kW - 150 kW
- **Charging Time**: 30-60 minutes for 80% charge
- **Best For**: Highway charging, quick top-ups

## Charging Network in India

The charging infrastructure in India is expanding rapidly:

- **Public Charging Stations**: Over 5,000 stations across major cities
- **Highway Corridors**: Charging stations every 25-30 km on major highways
- **Home Charging**: Growing adoption of residential charging solutions

## Charging Costs

Understanding the economics of EV charging:

- **Home Charging**: ₹3-6 per kWh
- **Public AC Charging**: ₹8-12 per kWh
- **Public DC Fast Charging**: ₹12-18 per kWh

## Future Developments

The charging infrastructure is set to grow exponentially with government support and private investments.`,
    image: "placeholder.svg",
    author: "Technical Team",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    category: "Technical Guide",
    tags: ["Charging", "Infrastructure", "Guide", "Technology"],
    featured: false,
  },
  {
    id: 3,
    slug: "electric-two-wheeler-maintenance-tips",
    title: "Essential Maintenance Tips for Electric Two-Wheelers",
    excerpt:
      "Keep your electric scooter or bike in perfect condition with these expert maintenance tips and best practices.",
    content: `Proper maintenance is key to ensuring your electric two-wheeler performs optimally and lasts longer. Here are essential maintenance tips every EV owner should know.

## Battery Care

The battery is the heart of your electric vehicle:

### Daily Care
- Avoid complete discharge
- Charge regularly, even for short trips
- Store in moderate temperatures

### Long-term Care
- Monthly deep discharge and full charge cycle
- Keep battery terminals clean
- Monitor battery health regularly

## Motor Maintenance

Electric motors require minimal maintenance:

- Keep motor housing clean and dry
- Check for unusual noises or vibrations
- Ensure proper ventilation around motor

## Brake System

Even with regenerative braking, regular brake maintenance is important:

- Check brake pads every 3,000 km
- Inspect brake fluid levels
- Test brake performance regularly

## Tire Care

Proper tire maintenance improves efficiency:

- Maintain recommended tire pressure
- Check for wear patterns
- Rotate tires as recommended

## Regular Inspections

Schedule regular professional inspections:

- Every 3 months or 1,500 km
- Check all electrical connections
- Inspect chassis and suspension

## Seasonal Maintenance

Adjust maintenance routine based on seasons:

### Monsoon Care
- Protect electrical components from water
- Check drainage systems
- Inspect seals and gaskets

### Summer Care
- Monitor battery temperature
- Check cooling systems
- Protect from direct sunlight

Following these maintenance tips will ensure your electric two-wheeler serves you reliably for years to come.`,
    image: "placeholder.svg",
    author: "Service Team",
    publishedAt: "2024-01-05",
    readTime: "5 min read",
    category: "Maintenance",
    tags: ["Maintenance", "Two-Wheeler", "Tips", "Battery Care"],
    featured: false,
  },
  {
    id: 4,
    slug: "ev-conversion-complete-guide",
    title: "Converting Your Petrol Vehicle to Electric: A Complete Guide",
    excerpt:
      "Discover the process, benefits, and considerations of converting your conventional vehicle to electric power.",
    content: `Converting a petrol vehicle to electric is an exciting way to embrace sustainable transportation while keeping your beloved vehicle. Here's everything you need to know about EV conversion.

## What is EV Conversion?

EV conversion involves replacing the internal combustion engine and related components with an electric motor, battery pack, and control systems.

## Benefits of EV Conversion

### Environmental Benefits
- Zero direct emissions
- Reduced carbon footprint
- Cleaner air quality

### Economic Benefits
- Lower operating costs
- Reduced maintenance
- Government incentives

### Performance Benefits
- Instant torque delivery
- Quieter operation
- Smoother acceleration

## Conversion Process

### Step 1: Vehicle Assessment
- Evaluate vehicle condition
- Check structural integrity
- Assess conversion feasibility

### Step 2: Component Selection
- Choose appropriate motor
- Select battery pack
- Pick control systems

### Step 3: Removal of ICE Components
- Remove engine and transmission
- Take out fuel system
- Clear exhaust system

### Step 4: Electric Component Installation
- Install electric motor
- Mount battery pack
- Connect control systems

### Step 5: Testing and Certification
- Performance testing
- Safety checks
- Legal compliance verification

## Cost Considerations

Conversion costs vary based on:

- Vehicle type and size
- Component quality
- Labor charges
- Certification requirements

Typical costs range from ₹2-8 lakhs depending on specifications.

## Legal Requirements

Ensure compliance with:

- RTO regulations
- Safety standards
- Insurance requirements
- Emission norms

## Choosing a Conversion Partner

Select experienced professionals who offer:

- Quality components
- Proper certification
- Warranty support
- After-sales service

EV conversion is a great way to contribute to sustainable transportation while enjoying the benefits of electric mobility.`,
    image: "placeholder.svg",
    author: "Conversion Team",
    publishedAt: "2023-12-28",
    readTime: "10 min read",
    category: "Conversion",
    tags: ["Conversion", "Electric", "Guide", "Retrofit"],
    featured: true,
  },
  {
    id: 5,
    slug: "government-ev-subsidies-2024",
    title: "Government EV Subsidies and Incentives in 2024",
    excerpt:
      "Complete overview of central and state government subsidies, incentives, and policies supporting electric vehicle adoption.",
    content: `The Indian government continues to support electric vehicle adoption through various subsidies and incentives. Here's a comprehensive guide to available benefits in 2024.

## Central Government Schemes

### FAME II (Faster Adoption and Manufacturing of Electric Vehicles)
- **Two-wheelers**: Up to ₹15,000 subsidy
- **Three-wheelers**: Up to ₹50,000 subsidy
- **Four-wheelers**: Up to ₹1.5 lakh subsidy
- **Buses**: Up to ₹20 lakh subsidy

### PLI Scheme (Production Linked Incentive)
- Support for domestic manufacturing
- Incentives for battery production
- Boost to component manufacturing

## State Government Incentives

### Delhi
- 100% road tax exemption
- Registration fee waiver
- Additional purchase incentive

### Maharashtra
- Road tax exemption for 3 years
- Registration fee waiver
- SGST exemption

### Gujarat
- Road tax exemption
- Registration fee waiver
- Electricity duty exemption

### Karnataka
- Road tax exemption for 2 years
- Registration fee waiver
- Additional purchase incentive

### Tamil Nadu
- Road tax exemption
- Registration fee waiver
- Electricity tariff concession

## How to Claim Subsidies

### FAME II Subsidy
1. Purchase from authorized dealer
2. Subsidy applied at point of sale
3. No separate application required

### State Subsidies
1. Apply online through state portal
2. Submit required documents
3. Receive subsidy after verification

## Required Documents

- Vehicle purchase invoice
- Registration certificate
- Aadhaar card
- Bank account details
- Address proof

## Tips for Maximum Benefits

- Research all available incentives
- Buy from authorized dealers
- Keep all documentation ready
- Apply for state subsidies promptly

## Future Outlook

Government support for EVs is expected to continue with:

- Extended FAME scheme
- New state policies
- Infrastructure development support
- Manufacturing incentives

Take advantage of these incentives to make your switch to electric mobility more affordable.`,
    image: "placeholder.svg",
    author: "Policy Team",
    publishedAt: "2023-12-20",
    readTime: "7 min read",
    category: "Policy",
    tags: ["Subsidies", "Government", "Incentives", "Policy"],
    featured: false,
  },
  {
    id: 6,
    slug: "best-electric-scooters-2024",
    title: "Best Electric Scooters in India 2024: Complete Buyer's Guide",
    excerpt:
      "Comprehensive review of the top electric scooters available in India, comparing features, price, and performance.",
    content: `Choosing the right electric scooter can be overwhelming with so many options available. This comprehensive buyer's guide will help you make an informed decision.

## Top Electric Scooters in 2024

### Premium Segment (₹1.5L - 2.5L)

#### Ather 450X
- **Range**: 146 km
- **Top Speed**: 90 kmph
- **Charging Time**: 5.4 hours
- **Key Features**: Smart dashboard, OTA updates, fast charging

#### TVS iQube Electric
- **Range**: 140 km
- **Top Speed**: 78 kmph
- **Charging Time**: 4.5 hours
- **Key Features**: Connected features, good build quality

### Mid-Range Segment (₹80K - 1.5L)

#### Bajaj Chetak
- **Range**: 108 km
- **Top Speed**: 70 kmph
- **Charging Time**: 5 hours
- **Key Features**: Classic design, reliable performance

#### Hero Electric Optima
- **Range**: 82 km
- **Top Speed**: 42 kmph
- **Charging Time**: 4-5 hours
- **Key Features**: Affordable, good service network

### Budget Segment (₹40K - 80K)

#### Okinawa Praise Pro
- **Range**: 88 km
- **Top Speed**: 58 kmph
- **Charging Time**: 2-3 hours
- **Key Features**: Detachable battery, good value

#### Ampere Magnus Pro
- **Range**: 100 km
- **Top Speed**: 55 kmph
- **Charging Time**: 4-5 hours
- **Key Features**: Long range, affordable price

## Key Factors to Consider

### Range and Performance
- Daily commute distance
- Top speed requirements
- Hill climbing ability
- Load carrying capacity

### Charging Infrastructure
- Home charging options
- Public charging availability
- Charging time requirements
- Battery swapping options

### Build Quality and Features
- Build materials and finish
- Digital instrument cluster
- Connectivity features
- Storage space

### After-Sales Support
- Service network coverage
- Spare parts availability
- Warranty terms
- Customer support quality

## Buying Tips

1. **Test Ride**: Always test ride before buying
2. **Check Incentives**: Research available subsidies
3. **Compare TCO**: Consider total cost of ownership
4. **Service Network**: Ensure good service support
5. **Resale Value**: Consider brand reputation

## Maintenance Costs

Electric scooters have lower maintenance costs:

- **Annual Maintenance**: ₹2,000 - 5,000
- **Battery Replacement**: ₹25,000 - 40,000 (after 3-5 years)
- **Insurance**: ₹3,000 - 8,000 annually

## Conclusion

Choose based on your specific needs, budget, and local infrastructure. Consider long-term costs and benefits for the best decision.`,
    image: "placeholder.svg",
    author: "Product Team",
    publishedAt: "2023-12-15",
    readTime: "12 min read",
    category: "Product Review",
    tags: ["Electric Scooters", "Buyer Guide", "Review", "Comparison"],
    featured: true,
  },
];

const categories = [
  "All",
  "Industry Insights",
  "Technical Guide",
  "Maintenance",
  "Conversion",
  "Policy",
  "Product Review",
];

export default function BlogsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  // Filter and sort blogs
  const filteredBlogs = blogPosts
    .filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      } else if (sortBy === "oldest") {
        return (
          new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
        );
      } else if (sortBy === "popular") {
        return b.featured ? 1 : -1;
      }
      return 0;
    });

  const featuredBlogs = blogPosts.filter((blog) => blog.featured).slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            EV Insights & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest trends, tips, and insights from
            India's electric vehicle industry.
          </p>
        </div>

        {/* Featured Blogs */}
        <div className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, index) => (
              <Link href={`/blogs/${blog.slug}`}>
                <Card
                  key={blog.id}
                  className="group cursor-pointer border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={
                        blog.image || "/placeholder.svg?height=200&width=400"
                      }
                      alt={blog.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(blog.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {blog.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">
                          {blog.author}
                        </span>
                      </div>
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* All Blogs */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              All Articles ({filteredBlogs.length})
            </h2>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <Link href={`/blogs/${blog.slug}`}>
                  <Card
                    key={blog.id}
                    className="group cursor-pointer border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={
                          blog.image || "/placeholder.svg?height=200&width=400"
                        }
                        alt={blog.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {blog.featured && (
                        <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(blog.publishedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="mb-3">
                        {blog.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-500">
                            {blog.author}
                          </span>
                        </div>
                        <Link
                          href={`/blogs/${blog.slug}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center animate-fade-in-up">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Stay Updated with EV Insights
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter and get the latest electric vehicle
            news, tips, and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-900 border-0"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
