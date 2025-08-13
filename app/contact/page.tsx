import HeaderWithSlider from "@/components/header-with-slider";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderWithSlider />
      <ContactSection />
      <Footer />
    </div>
  );
}
