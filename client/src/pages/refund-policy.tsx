import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 2024</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14-Day Money Back Guarantee</h2>
            <p className="text-gray-700 mb-4">We offer a full refund within 14 days of your initial purchase if you're not satisfied with our service.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Refund Process</h2>
            <p className="text-gray-700 mb-4">To request a refund, contact our support team at support@leadspoint.in with your account details.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Processing Time</h2>
            <p className="text-gray-700 mb-4">Refunds are processed within 5-7 business days and will appear in your original payment method.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Support</h2>
            <p className="text-gray-700">For refund requests or questions, email us at support@leadspoint.in or call +91-9972221716</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}