import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function SystemStatus() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">System Status</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time status of Leadspoint services and infrastructure
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <span className="font-medium">CRM Platform</span>
              </div>
              <span className="text-green-600 font-medium">Operational</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <span className="font-medium">WhatsApp API</span>
              </div>
              <span className="text-green-600 font-medium">Operational</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <span className="font-medium">Email Services</span>
              </div>
              <span className="text-green-600 font-medium">Operational</span>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">Current uptime: 99.9% | Last updated: Just now</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}