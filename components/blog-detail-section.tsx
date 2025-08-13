"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
  // Add other blog posts here...
];

interface BlogDetailSectionProps {
  slug: string;
}

export default function BlogDetailSection({ slug }: BlogDetailSectionProps) {
  const [blog, setBlog] = useState<(typeof blogPosts)[0] | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<typeof blogPosts>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Find the blog post by slug
    const foundBlog = blogPosts[0];
    setBlog(foundBlog || null);

    // Get related blogs (same category, excluding current blog)
    if (foundBlog) {
      const related = blogPosts
        .filter(
          (post) =>
            post.id !== foundBlog.id && post.category === foundBlog.category
        )
        .slice(0, 3);
      setRelatedBlogs(related);
    }
  }, [slug]);

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = blog?.title || "";

    switch (platform) {
      case "copy":
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error("Failed to copy URL");
        }
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
    }
  };

  if (!blog) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blogs">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blogs">
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="animate-fade-in-up">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">
              {blog.category}
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-600 font-medium">Share:</span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("facebook")}
                  className="hover:bg-blue-50"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("twitter")}
                  className="hover:bg-blue-50"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("linkedin")}
                  className="hover:bg-blue-50"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("copy")}
                  className="hover:bg-blue-50"
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <Image
              src={"/placeholder.svg?height=400&width=800"}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {blog.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              } else if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-xl lg:text-2xl font-bold text-gray-900 mt-8 mb-4"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              } else if (paragraph.startsWith("- ")) {
                const listItems = paragraph
                  .split("\n")
                  .filter((item) => item.startsWith("- "));
                return (
                  <ul
                    key={index}
                    className="list-disc list-inside space-y-2 mb-6"
                  >
                    {listItems.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace("- ", "")
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                        }}
                      />
                    ))}
                  </ul>
                );
              } else if (paragraph.match(/^\d+\./)) {
                const listItems = paragraph
                  .split("\n")
                  .filter((item) => item.match(/^\d+\./));
                return (
                  <ol
                    key={index}
                    className="list-decimal list-inside space-y-2 mb-6"
                  >
                    {listItems.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace(/^\d+\.\s/, "")
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                        }}
                      />
                    ))}
                  </ol>
                );
              } else {
                return (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed mb-6 text-lg"
                    dangerouslySetInnerHTML={{
                      __html: paragraph.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                );
              }
            })}
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="mb-12" />

          {/* Author Info */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  About {blog.author}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {blog.author === "Sri Hari Kolusu"
                    ? "Founder and CEO of Innovibe Mobility, leading India's electric vehicle revolution with innovative solutions and sustainable transportation initiatives."
                    : "Expert contributor to Innovibe Mobility's knowledge base, sharing insights and expertise in electric vehicle technology and industry trends."}
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog, index) => (
                  <Card
                    key={relatedBlog.id}
                    className="group cursor-pointer border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={
                          relatedBlog.image ||
                          "/placeholder.svg?height=150&width=300"
                        }
                        alt={relatedBlog.title}
                        width={300}
                        height={150}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {relatedBlog.category}
                      </Badge>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                      <Link
                        href={`/blogs/${relatedBlog.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Go Electric?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Explore our comprehensive EV services and join India's electric
              vehicle revolution today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ev-services">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
