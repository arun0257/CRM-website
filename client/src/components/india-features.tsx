import { motion } from "framer-motion";
import { Languages, Receipt, MapPin, Wifi, CreditCard, Phone } from "lucide-react";

const indiaFeatures = [
  {
    icon: Phone,
    title: "WhatsApp Business API",
    description: "Official WhatsApp integration for bulk messaging, automation, and customer support",
    highlight: "WhatsApp Ready"
  },
  {
    icon: MapPin,
    title: "Multi-Location Management",
    description: "Manage multiple branches, territories, and sales teams across different cities",
    highlight: "Pan-India"
  },
  {
    icon: CreditCard,
    title: "Indian Payment Integration",
    description: "Track payments and integrate with popular Indian payment platforms",
    highlight: "Payment Ready"
  },
  {
    icon: Languages,
    title: "English Interface",
    description: "Clean, intuitive English interface designed for Indian business professionals",
    highlight: "User Friendly"
  },
  {
    icon: Receipt,
    title: "Business Reporting",
    description: "Comprehensive sales reports and analytics for Indian business requirements",
    highlight: "Report Ready"
  },
  {
    icon: Wifi,
    title: "Cloud-Based Access",
    description: "Access your CRM from anywhere with reliable cloud infrastructure",
    highlight: "Always Online"
  }
];

export function IndiaFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-3xl">🇮🇳</span>
            <h2 className="text-4xl font-bold text-gray-900">
              Made for Indian Businesses
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CRM platform designed with Indian business needs and market understanding in mind
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indiaFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-medium">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cultural Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Understanding Indian Business Culture
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-2xl mb-2">🤝</div>
                <h4 className="font-semibold text-gray-900 mb-1">Relationship-First</h4>
                <p className="text-gray-600">Built for long-term customer relationships, not just transactions</p>
              </div>
              <div>
                <div className="text-2xl mb-2">💰</div>
                <h4 className="font-semibold text-gray-900 mb-1">Cost-Conscious</h4>
                <p className="text-gray-600">Transparent pricing with maximum value for every rupee spent</p>
              </div>
              <div>
                <div className="text-2xl mb-2">📈</div>
                <h4 className="font-semibold text-gray-900 mb-1">Growth-Oriented</h4>
                <p className="text-gray-600">Scales with your business from startup to enterprise</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}