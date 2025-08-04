import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Video, Users, Award } from "lucide-react";

export default function Training() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Training</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the most out of Leadspoint with our comprehensive training programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Video Tutorials</h3>
              <p className="text-gray-600">Self-paced learning with step-by-step videos</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Live Sessions</h3>
              <p className="text-gray-600">Interactive training with our experts</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Certification</h3>
              <p className="text-gray-600">Become a certified Leadspoint user</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}