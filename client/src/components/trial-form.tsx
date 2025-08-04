import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TrialFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrialForm({ isOpen, onClose }: TrialFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    organization: "",
    users: "",
    business: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Redirect to app.leadspoint.in with form data
      const params = new URLSearchParams(formData);
      window.open(`https://app.leadspoint.in/signup?${params}`, '_blank', 'noopener,noreferrer');
      onClose();
    } catch (error) {
      console.error('Failed to open signup page:', error);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md"
          >
            <Card className="bg-white border-0 shadow-2xl rounded-xl">
              <CardHeader className="relative pb-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
                  onClick={onClose}
                >
                  <X className="h-5 w-5" />
                </Button>
                <div className="text-center">
                  <div className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 brand-shadow">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                    Start Your Free Trial
                  </CardTitle>
                  <p className="text-gray-600">Join 10,000+ businesses growing with Leadspoint</p>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">Mobile Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="9876543210"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                        maxLength={10}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="organization" className="text-sm font-medium text-gray-700 mb-2 block">Organization Name *</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="users" className="text-sm font-medium text-gray-700 mb-2 block">Team Size *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, users: value })} required>
                        <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 rounded-lg">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-5">1-5 users</SelectItem>
                          <SelectItem value="6-20">6-20 users</SelectItem>
                          <SelectItem value="21-50">21-50 users</SelectItem>
                          <SelectItem value="51-100">51-100 users</SelectItem>
                          <SelectItem value="100+">100+ users</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="business" className="text-sm font-medium text-gray-700 mb-2 block">Industry *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, business: value })} required>
                        <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 rounded-lg">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="insurance">Insurance</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full brand-gradient text-white h-12 text-lg font-semibold rounded-lg brand-shadow hover:shadow-xl transition-all duration-200"
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </Button>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-500">
                      ✓ 14-day free trial • ✓ No credit card required • ✓ Setup in 2 minutes
                    </p>
                    <p className="text-xs text-gray-400">
                      By signing up, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}