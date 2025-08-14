import AboutSection from "@/components/about-section";
import HowItWorksSection from "@/components/how-it-works-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutSection />
      <HowItWorksSection />
    </div>
  );
}
