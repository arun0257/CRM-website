import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { TrendingUp, Users, Target } from "lucide-react";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses across India are growing with Leadspoint CRM
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">TechSolutions India</h3>
                  <p className="text-gray-600 mb-6">How a Mumbai-based IT company increased their sales conversion by 40% using Leadspoint's WhatsApp integration.</p>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">40%</div>
                      <div className="text-sm text-gray-500">Conversion Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">₹2.5M</div>
                      <div className="text-sm text-gray-500">Additional Revenue</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-24 h-24 text-blue-600 mx-auto" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">DigitalGrow Agency</h3>
                  <p className="text-gray-600 mb-6">A Delhi marketing agency streamlined their client management and reduced response time by 60%.</p>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">60%</div>
                      <div className="text-sm text-gray-500">Faster Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">15hrs</div>
                      <div className="text-sm text-gray-500">Time Saved/Week</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Users className="w-24 h-24 text-purple-600 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}