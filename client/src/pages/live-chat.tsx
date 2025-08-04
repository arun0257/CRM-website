import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MessageCircle, Clock, Users } from "lucide-react";

export default function LiveChat() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Live Chat Support</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant help from our support team through live chat
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Instant Support</h3>
              <p className="text-gray-600">Get immediate answers to your questions</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">24/7 Available</h3>
              <p className="text-gray-600">Support available round the clock</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-600">Chat with CRM specialists</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <h2 className="text-2xl font-semibold mb-4">Start Live Chat</h2>
              <p className="text-gray-600 mb-6">Click the chat widget in the bottom right corner to start a conversation with our support team.</p>
              <p className="text-sm text-gray-500">Average response time: Under 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}