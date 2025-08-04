import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Handshake, Globe, Award } from "lucide-react";

export default function Partners() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Partners</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our partner ecosystem and grow your business with Leadspoint
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Handshake className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Reseller Program</h3>
              <p className="text-gray-600">Earn commissions by selling Leadspoint to your clients</p>
            </div>
            <div className="text-center p-6">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Integration Partners</h3>
              <p className="text-gray-600">Build integrations and expand our ecosystem</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Certified Partners</h3>
              <p className="text-gray-600">Get certified and provide implementation services</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">Interested in partnering with us? Contact partnerships@leadspoint.in</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}