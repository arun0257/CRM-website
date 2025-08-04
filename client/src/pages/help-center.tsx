import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Search, Book, MessageCircle } from "lucide-react";

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Help Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions and get help with Leadspoint CRM
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Search Articles</h3>
              <p className="text-gray-600">Browse our knowledge base for quick answers</p>
            </div>
            <div className="text-center p-6">
              <Book className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">User Guides</h3>
              <p className="text-gray-600">Step-by-step tutorials and documentation</p>
            </div>
            <div className="text-center p-6">
              <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
              <p className="text-gray-600">Get personalized help from our team</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}