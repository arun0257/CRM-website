import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MessageSquare, Users, Zap } from "lucide-react";

export default function WhatsAppCRM() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">WhatsApp CRM</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your WhatsApp into a powerful business tool with our integrated CRM solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">WhatsApp Business API</h3>
              <p className="text-gray-600">Send automated messages, manage conversations, and track customer interactions</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Contact Management</h3>
              <p className="text-gray-600">Organize all your WhatsApp contacts and conversation history in one place</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Automation</h3>
              <p className="text-gray-600">Set up automated responses, follow-ups, and lead nurturing sequences</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}