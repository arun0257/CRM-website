import { useState } from "react";
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
import { TrialForm } from "@/components/trial-form";

export default function Home() {
  const [isTrialFormOpen, setIsTrialFormOpen] = useState(false);

  const handleStartTrial = () => {
    setIsTrialFormOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation onStartTrial={handleStartTrial} />
      <HeroSection onStartTrial={handleStartTrial} />
      <FeaturesSection />
      <IndustrySection />
      <TrustSection />
      <IndiaFeatures />
      <DashboardShowcase />
      <TestimonialsSection />
      <PricingSection onStartTrial={handleStartTrial} />
      <IntegrationsSection />
      <CTASection onStartTrial={handleStartTrial} />
      <Footer />
      <TrialForm 
        isOpen={isTrialFormOpen} 
        onClose={() => setIsTrialFormOpen(false)} 
      />
    </div>
  );
}
