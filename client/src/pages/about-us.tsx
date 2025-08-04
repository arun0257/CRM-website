import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Target, Users, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to help Indian businesses grow with powerful, easy-to-use CRM solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">Empowering businesses with intelligent CRM solutions</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">10,000+ Customers</h3>
              <p className="text-gray-600">Trusted by businesses across India</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">ISO Certified</h3>
              <p className="text-gray-600">Committed to quality and security</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}