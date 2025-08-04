import { motion } from "framer-motion";
import { Shield, Award, Clock, Users, MapPin, Headphones } from "lucide-react";

const trustFactors = [
  {
    icon: Shield,
    title: "ISO 27001 Certified",
    description: "Bank-grade security with end-to-end encryption",
    badge: "🔒 Certified"
  },
  {
    icon: Award,
    title: "GDPR Compliant",
    description: "Full data protection and privacy compliance",
    badge: "🛡️ Compliant"
  },
  {
    icon: Clock,
    title: "99.9% Uptime SLA",
    description: "Guaranteed availability with 24/7 monitoring",
    badge: "⚡ Reliable"
  },
  {
    icon: Users,
    title: "10,000+ Happy Customers",
    description: "Trusted by businesses across India",
    badge: "⭐ Trusted"
  },
  {
    icon: MapPin,
    title: "Made in India",
    description: "Built for Indian businesses by Indian developers",
    badge: "🇮🇳 Local"
  },
  {
    icon: Headphones,
    title: "24/7 Indian Support",
    description: "Hindi & English support from Mumbai office",
    badge: "📞 Support"
  }
];



export function TrustSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why 10,000+ Businesses Trust Leadspoint
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade security, reliability, and support you can count on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trustFactors.map((factor, index) => {
            const IconComponent = factor.icon;
            return (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{factor.title}</h3>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {factor.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{factor.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}