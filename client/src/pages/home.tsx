import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { IndustrySection } from "@/components/industry-section";
import { TrustSection } from "@/components/trust-section";
import { IndiaFeatures } from "@/components/india-features";
import { DashboardShowcase } from "@/components/dashboard-showcase";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <IndustrySection />
      <TrustSection />
      <IndiaFeatures />
      <DashboardShowcase />
      <TestimonialsSection />
      <PricingSection />
      <IntegrationsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
