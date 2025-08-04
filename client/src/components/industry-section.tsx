import { motion } from "framer-motion";
import { Building, Heart, GraduationCap, ShoppingCart, Wrench, TrendingUp } from "lucide-react";

const industries = [
  {
    icon: Building,
    title: "Real Estate",
    description: "Property listings, client management, site visit scheduling, and commission tracking.",
    features: ["Property database", "Site visit automation", "Commission calculator"]
  },
  {
    icon: Heart,
    title: "Insurance",
    description: "Policy management, renewal reminders, claim tracking, and agent performance monitoring.",
    features: ["Policy renewals", "Claim tracking", "Agent dashboard"]
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Student enrollment, course management, fee tracking, and parent communication.",
    features: ["Student profiles", "Fee management", "Parent portal"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Order tracking, inventory sync, customer support, and abandoned cart recovery.",
    features: ["Order sync", "Inventory alerts", "Cart recovery"]
  },
  {
    icon: Wrench,
    title: "Service Business",
    description: "Appointment scheduling, service history, technician dispatch, and billing automation.",
    features: ["Appointment booking", "Service tracking", "Technician app"]
  },
  {
    icon: TrendingUp,
    title: "Manufacturing",
    description: "Dealer management, order processing, inventory control, and supply chain tracking.",
    features: ["Dealer portal", "Order processing", "Supply chain"]
  }
];

export function IndustrySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized CRM solutions tailored for different business verticals across India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-white border border-gray-100"
              >
                <div className="w-12 h-12 brand-gradient rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{industry.description}</p>
                <div className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}