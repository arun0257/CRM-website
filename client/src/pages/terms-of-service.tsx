import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 2024</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">By accessing and using Leadspoint CRM services, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use License</h2>
            <p className="text-gray-700 mb-4">Permission is granted to temporarily use Leadspoint CRM for personal, non-commercial transitory viewing only.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Availability</h2>
            <p className="text-gray-700 mb-4">We strive to maintain 99.9% uptime but do not guarantee uninterrupted service availability.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700">For questions regarding these terms, contact us at support@leadspoint.in</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}