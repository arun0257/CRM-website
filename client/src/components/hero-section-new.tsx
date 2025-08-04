import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Play, Check } from "lucide-react";
import { TrialForm } from "./trial-form";

export function HeroSection() {
  const [isTrialFormOpen, setIsTrialFormOpen] = useState(false);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                #1 CRM for Growing Businesses
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Grow your business with
              <span className="text-blue-600 block">Leadspoint CRM</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Manage leads, close deals, and build lasting customer relationships with India's most trusted CRM platform.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => setIsTrialFormOpen(true)}
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => window.open('https://www.youtube.com/watch?v=demo-video', '_blank')}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4">✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime</p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">R</div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
                </div>
                <span className="text-gray-600 text-sm">Join 10,000+ businesses growing with Leadspoint</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
              <img 
                src="/Dashboard.png" 
                alt="Leadspoint CRM Dashboard" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">WhatsApp Integration</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">AI-Powered Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TrialForm 
        isOpen={isTrialFormOpen} 
        onClose={() => setIsTrialFormOpen(false)} 
      />
    </section>
  );
}