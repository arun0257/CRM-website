import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for support, sales, or partnership inquiries
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-2">+91 - 9972221716</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM IST</p>
            </div>
            <div className="text-center p-6">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Email Support</h3>
              <p className="text-gray-600 mb-2">support@leadspoint.in</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Office</h3>
              <p className="text-gray-600 mb-2">Bangalore, India</p>
              <p className="text-sm text-gray-500">Visit by appointment</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}