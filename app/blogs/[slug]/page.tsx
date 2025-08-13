import BlogDetailSection from "@/components/blog-detail-section";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  return <BlogDetailSection slug={params.slug} />;
}
