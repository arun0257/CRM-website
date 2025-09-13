import { motion } from "framer-motion";

const features = [
  {
    title: "Visual Sales Pipeline",
    description: "Track deals through customizable stages with drag-and-drop interface. Never lose a potential sale again."
  },
  {
    title: "360° Customer Management",
    description: "Complete customer profiles with interaction history, WhatsApp chats, calls, and purchase behavior."
  },
  {
    title: "Gmail & Outlook Integration",
    description: "Sync emails automatically, track opens, and manage campaigns directly from your favorite email platform."
  },
  {
    title: "WhatsApp Business API",
    description: "Send bulk messages, automate responses, and manage customer conversations at scale with official WhatsApp integration."
  },
  {
    title: "AI-Powered Analytics",
    description: "Predictive lead scoring, sales forecasting, and performance insights to boost your revenue by 40%."
  },
  {
    title: "Enterprise Security",
    description: "ISO 27001 certified, GDPR compliant, and bank-grade encryption. Your data is 100% secure."
  },
  {
    title: "Responsive Web Design",
    description: "Mobile-optimized web interface that works perfectly on all devices and screen sizes."
  },
  {
    title: "Indian Market Focus",
    description: "Built specifically for Indian business culture, practices, and customer behavior patterns."
  },
  {
    title: "Custom Fields & Workflows",
    description: "Adapt the CRM to your business needs with unlimited custom fields and automated workflows."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to grow your business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful CRM features designed to help Indian businesses scale efficiently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
