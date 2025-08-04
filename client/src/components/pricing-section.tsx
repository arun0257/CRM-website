import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: 299,
    originalPrice: 599,
    description: "Perfect for small teams & startups",
    features: [
      "Unlimited leads management",
      "WhatsApp Business API",
      "Social media integration",
      "Basic telecom features",
      "Email automation",
      "Standard support"
    ],
    popular: false,
    savings: "Save ₹300/user/month"
  },
  {
    name: "Professional",
    price: 499,
    originalPrice: 999,
    description: "Most popular for growing businesses",
    features: [
      "Advanced lead scoring & routing",
      "Multi-channel WhatsApp campaigns",
      "Full social media management",
      "Advanced telecom integration",
      "AI-powered automation",
      "Priority support + Training"
    ],
    popular: true,
    savings: "Save ₹500/user/month"
  },
  {
    name: "Enterprise",
    price: 799,
    originalPrice: 1599,
    description: "For large teams & enterprises",
    features: [
      "Enterprise lead management",
      "Custom WhatsApp solutions",
      "Advanced social media analytics",
      "Full telecom suite",
      "Custom integrations & API",
      "Dedicated success manager"
    ],
    popular: false,
    savings: "Save ₹800/user/month"
  }
];

const PlanCard = ({ plan, index }: { plan: typeof plans[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative"
  >
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 brand-gradient text-white px-4 py-2 rounded-full text-sm font-medium z-10 brand-shadow">
        Most Popular
      </div>
    )}
    
    <div className={`bg-white rounded-lg shadow-lg p-8 h-full border-2 transition-all duration-300 hover:shadow-xl ${
      plan.popular ? 'border-blue-400 scale-105 brand-shadow' : 'border-gray-200'
    }`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4" itemProp="name">{plan.name}</h3>
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-lg text-gray-500 line-through">₹{plan.originalPrice}</span>
            <span className="text-4xl font-bold text-gray-900" itemProp="price">₹{plan.price}</span>
          </div>
          <span className="text-gray-600">/user/month</span>
          <meta itemProp="priceCurrency" content="INR" />
          <div className="text-sm text-green-600 font-medium mt-1">{plan.savings}</div>
        </div>
        <p className="text-gray-600 mb-8">{plan.description}</p>
      </div>

      <div className="space-y-4 mb-8">
        {plan.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        className={`w-full py-3 transition-all duration-300 ${
          plan.popular
            ? 'brand-gradient text-white brand-shadow hover:shadow-lg'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300'
        }`}
      >
        {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
      </Button>
    </div>
  </motion.div>
);

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white" itemScope itemType="https://schema.org/Product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
