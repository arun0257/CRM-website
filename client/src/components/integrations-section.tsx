import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Database, 
  Users, 
  Video,
  Smartphone,
  Chrome
} from "lucide-react";
import { motion } from "framer-motion";

const integrations = [
  { name: "WhatsApp", icon: MessageSquare, color: "text-green-400" },
  { name: "Gmail", icon: Mail, color: "text-red-400" },
  { name: "Truecaller", icon: Phone, color: "text-blue-400" },
  { name: "Facebook", icon: Users, color: "text-blue-500" },
  { name: "Instagram", icon: Smartphone, color: "text-pink-400" },
  { name: "Zoom", icon: Video, color: "text-blue-600" },
  { name: "Razorpay", icon: Database, color: "text-purple-400" },
  { name: "Paytm", icon: Smartphone, color: "text-blue-400" }
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect Everything
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrate with popular Indian business tools and platforms you already use
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-white hover:shadow-lg transition-all duration-300 border border-gray-200">
                <CardContent className="p-6 text-center">
                  <integration.icon className={`h-12 w-12 ${integration.color} mx-auto mb-4`} />
                  <p className="text-sm font-medium text-gray-700">{integration.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="brand-gradient text-white brand-shadow hover:shadow-lg transition-all duration-300 px-8 py-3"
          >
            View All Integrations
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
