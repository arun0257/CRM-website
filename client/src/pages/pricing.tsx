import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PricingSection } from "@/components/pricing-section";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Pricing</h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
        <PricingSection />
      </div>
      <Footer />
    </div>
  );
}