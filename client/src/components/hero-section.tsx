import { Button } from "@/components/ui/button";

export function HeroSection({ onStartTrial }: { onStartTrial?: () => void }) {

  return (
    <section className="bg-white py-20" itemScope itemType="https://schema.org/SoftwareApplication">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="mb-6">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                #1 CRM for Growing Businesses
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight" itemProp="name">
              Grow your business with
              <span className="text-black block">Leadspoint CRM</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg" itemProp="description">
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
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={onStartTrial}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => window.open('https://www.youtube.com/watch?v=demo-video', '_blank', 'noopener,noreferrer')}
              >
                Watch Demo
              </Button>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4">No credit card required • 14-day free trial • Cancel anytime</p>
              <p className="text-gray-600 text-sm">Join 10,000+ businesses growing with Leadspoint</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl border border-gray-200">
              <img 
                src="/Dashboard.png" 
                alt="Leadspoint CRM Dashboard - Lead management interface showing WhatsApp integration and analytics" 
                className="w-full h-auto rounded-lg shadow-lg"
                itemProp="screenshot"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  console.error('Failed to load dashboard image');
                }}
              />
            </div>
            
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-green-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce-subtle"></div>
                <span className="text-sm font-medium text-gray-700">WhatsApp Integration</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-black rounded-full animate-bounce-subtle"></div>
                <span className="text-sm font-medium text-gray-700">AI-Powered Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
