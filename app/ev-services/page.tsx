import HeaderWithSlider from "@/components/header-with-slider";
import EvServicesSection from "@/components/ev-services-section";
import Footer from "@/components/footer";
import HowItWorksSection from "@/components/how-it-works-section";

export default function EvServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderWithSlider />
      <EvServicesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}
