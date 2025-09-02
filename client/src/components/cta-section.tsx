import { Button } from "@/components/ui/button";
import { Rocket, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection({ onStartTrial }: { onStartTrial?: () => void }) {

  return (
    <section className="py-20 brand-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <span className="text-white/90 text-sm font-medium">🚀 Transform Your Business Today</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to <span className="text-gray-200">Scale</span>
            <br />
            Your <span className="text-gray-200">Sales?</span>
          </h2>

          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 10,000+ Indian businesses already using Leadspoint CRM to manage leads, close more deals, and grow faster. Start your transformation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-50 px-10 py-4 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-xl focus-brand animate-pulse-brand"
              onClick={onStartTrial}
            >
              <Rocket className="mr-3 h-6 w-6" />
              Start Your Free Trial
            </Button>
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 text-xl font-bold transition-all duration-300 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 focus-brand"
              onClick={() => window.open('https://calendly.com/arun-asdindiaservices/30min', '_blank', 'noopener,noreferrer')}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Schedule Demo
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center items-center space-x-8 text-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium">14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium">Setup in 5 minutes</span>
              </div>
            </div>
            
            <div className="flex justify-center items-center space-x-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center text-black font-bold text-sm">A</div>
                <div className="w-10 h-10 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center text-black font-bold text-sm">R</div>
                <div className="w-10 h-10 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center text-black font-bold text-sm">S</div>
                <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-gray-300 flex items-center justify-center text-black font-bold text-xs">+10K</div>
              </div>
              <span className="text-gray-100 font-medium">Trusted by 10,000+ businesses</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
