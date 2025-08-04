import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { IntegrationsSection } from "@/components/integrations-section";

export default function Integrations() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Integrations</h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Connect with all your favorite business tools and platforms
          </p>
        </div>
        <IntegrationsSection />
      </div>
      <Footer />
    </div>
  );
}