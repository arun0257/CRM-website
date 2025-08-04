import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FeaturesSection } from "@/components/features-section";

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Features</h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Discover all the powerful features that make Leadspoint the perfect CRM for your business
          </p>
        </div>
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
}