import HeaderWithSlider from "@/components/header-with-slider";
import EvEvolutionSection from "@/components/ev-evolution-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderWithSlider />
      <EvEvolutionSection />
      <Footer />
    </div>
  );
}
