import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Code, Database, Shield } from "lucide-react";

export default function API() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">API Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate Leadspoint with your existing systems using our powerful REST API
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">RESTful API</h3>
              <p className="text-gray-600">Simple, intuitive REST API with comprehensive documentation and examples</p>
            </div>
            <div className="text-center">
              <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Real-time Data</h3>
              <p className="text-gray-600">Access and sync your CRM data in real-time with webhooks and live updates</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Secure Access</h3>
              <p className="text-gray-600">OAuth 2.0 authentication and rate limiting for secure API access</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-600 mb-4">Contact our technical team to get your API keys and access documentation.</p>
            <p className="text-gray-600">Email: api@leadspoint.in</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}