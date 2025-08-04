import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "WhatsApp CRM", "API"],
  Support: ["Help Center", "Contact Us", "Training", "System Status", "Live Chat"],
  Company: ["About Us", "Blog", "Careers", "Partners", "Case Studies"],
  Legal: ["Privacy Policy", "Terms of Service", "GDPR", "Security", "Refund Policy"]
};

const handleLinkClick = (category: string, link: string) => {
  const slug = link.toLowerCase().replace(/\s+/g, '-');
  
  if (category === 'Legal') {
    window.open(`/${slug}`, '_blank', 'noopener,noreferrer');
  } else if (category === 'Product') {
    try {
      if (link === 'Features') {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
      } else if (link === 'Pricing') {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      } else if (link === 'Integrations') {
        document.getElementById('integrations')?.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Failed to scroll to section:', error);
    }
  } else if (category === 'Support') {
    window.open(`/${slug}`, '_blank', 'noopener,noreferrer');
  } else if (category === 'Company') {
    window.open(`/${slug}`, '_blank', 'noopener,noreferrer');
  }
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="mb-6">
              <Logo variant="light" size="lg" />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's leading omnichannel CRM platform trusted by 10,000+ businesses.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">+91 - 9972221716</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">support@leadspoint.in</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                <Facebook className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-110">
                <Linkedin className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-pink-600 transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                <Twitter className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h4 className="font-semibold text-white mb-4 text-lg">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      onClick={() => handleLinkClick(category, link)}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">&copy; 2025 Leadspoint. All rights reserved.</p>
            <div className="flex space-x-4">
              <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full">🇮🇳 Made in India</span>
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">🔒 ISO 27001</span>
              <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">⚡ 99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
