import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Security</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 2024</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Encryption</h2>
            <p className="text-gray-700 mb-4">All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">ISO 27001 Certification</h2>
            <p className="text-gray-700 mb-4">Leadspoint is ISO 27001 certified, ensuring the highest standards of information security management.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Access Controls</h2>
            <p className="text-gray-700 mb-4">We implement strict access controls, multi-factor authentication, and regular security audits.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Report Security Issues</h2>
            <p className="text-gray-700">To report security vulnerabilities, contact us at security@leadspoint.in</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}