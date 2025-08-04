import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function GDPR() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">GDPR Compliance</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 2024</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights Under GDPR</h2>
            <p className="text-gray-700 mb-4">Under the General Data Protection Regulation, you have the right to access, rectify, port, and erase your data.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Processing</h2>
            <p className="text-gray-700 mb-4">We process your data lawfully, fairly, and transparently, collecting only what is necessary for our CRM services.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-4">We retain your data only as long as necessary to provide our services or as required by law.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Our DPO</h2>
            <p className="text-gray-700">For GDPR-related inquiries, contact our Data Protection Officer at dpo@leadspoint.in</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}