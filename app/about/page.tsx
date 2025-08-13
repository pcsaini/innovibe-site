import HeaderWithSlider from "@/components/header-with-slider";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import HowItWorksSection from "@/components/how-it-works-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderWithSlider />
      <AboutSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}
