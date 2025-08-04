import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Real-time customer data synchronization",
  "Predictive lead scoring and insights",
  "Customizable workflow automation"
];

export function DashboardShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Command Center
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience the future of CRM with our intuitive, AI-powered dashboard. Every metric, insight, and action at your fingertips.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="w-6 h-6 brand-gradient rounded-full mr-4 flex items-center justify-center brand-shadow">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="brand-gradient text-white brand-shadow hover:shadow-lg transition-all duration-300"
            >
              Explore Dashboard
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-200 relative">
              <div className="bg-gray-50 rounded-xl h-96 relative overflow-hidden">
                {/* Mock dashboard elements */}
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-gray-900 font-semibold">Analytics Dashboard</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                      <div className="text-blue-600 text-2xl font-bold">₹2.4M</div>
                      <div className="text-gray-600 text-sm">Revenue</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                      <div className="text-green-600 text-2xl font-bold">1,247</div>
                      <div className="text-gray-600 text-sm">Leads</div>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-lg p-3 shadow-sm border border-gray-200 relative">
                    <div className="text-gray-600 text-sm mb-2">Conversion Rate</div>
                    <div className="h-24 bg-gradient-to-r from-blue-100 to-blue-200 rounded relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-300/50 to-transparent rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating metrics */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">94%</div>
                <div className="text-xs text-gray-600">Accuracy</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: -2 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3.2x</div>
                <div className="text-xs text-gray-600">Growth</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
