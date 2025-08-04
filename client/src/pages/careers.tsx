import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Briefcase, MapPin, Clock } from "lucide-react";

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and help build the future of CRM in India
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Full-time</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4 space-x-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Bangalore</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-1" />
                  <span>Engineering</span>
                </div>
              </div>
              <p className="text-gray-600">Build beautiful, responsive interfaces for our CRM platform using React and TypeScript.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">Product Manager</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Full-time</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4 space-x-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Bangalore</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-1" />
                  <span>Product</span>
                </div>
              </div>
              <p className="text-gray-600">Drive product strategy and roadmap for our CRM solutions.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">Don't see a role that fits? Send us your resume at careers@leadspoint.in</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}