import { useState, useEffect } from "react";
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
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    organization: "",
    users: "",
    business: ""
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://crm.leadspoint.in/api/accounts/register-organization/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: 'temp', domain: 'temp' })
      });
      
      if (response.ok) {
        const result = await response.json();
        alert('OTP sent to your email. Please check your inbox.');
        setOtpSent(true);
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to send OTP');
      }
    } catch (error) {
      console.error('Failed to send OTP:', error);
    }
  };

  const handleOtpVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://crm.leadspoint.in/api/accounts/verify-otp-only/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
      });
      
      if (response.ok) {
        alert('Email verified successfully!');
        setOtpVerified(true);
        setStep(2);
      } else {
        const error = await response.json();
        alert(error.error || 'Invalid OTP');
      }
    } catch (error) {
      console.error('Failed to verify OTP:', error);
    }
  };

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://crm.leadspoint.in/api/accounts/complete-registration/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: formData.organization,
          admin_name: formData.name,
          admin_phone: formData.phone,
          team_size: formData.users,
          industry: formData.business,
          domain: `${formData.organization.toLowerCase().replace(/\s+/g, '')}.crm.leadspoint.in`
        })
      });
      
      if (response.ok) {
        const result = await response.json();
        alert('Registration successful! You will receive login credentials after admin approval.');
        onClose();
      } else {
        const error = await response.json();
        alert(error.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Failed to complete registration:', error);
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
          className="modal-overlay bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="modal-content w-full max-w-md my-8"
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
                    {step === 1 ? 'Verify Your Email' : 'Complete Registration'}
                  </CardTitle>
                  <p className="text-gray-600">
                    {step === 1 ? 'Join 10,000+ businesses growing with Leadspoint' : 'Tell us about your organization'}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                {step === 1 ? (
                  !otpSent ? (
                    <form onSubmit={handleEmailSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-12 border-gray-200 focus:border-gray-500 focus:ring-gray-500 rounded-lg"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full brand-gradient text-white h-12 text-lg font-semibold rounded-lg brand-shadow hover:shadow-xl transition-all duration-200"
                      >
                        Send Verification Code
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
                  ) : (
                    <form onSubmit={handleOtpVerify} className="space-y-6">
                      <div className="text-center mb-4">
                        <p className="text-sm text-gray-600">We sent a verification code to</p>
                        <p className="font-semibold text-gray-900">{email}</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="otp" className="text-sm font-medium text-gray-700 mb-2 block">Verification Code *</Label>
                        <Input
                          id="otp"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="h-12 border-gray-200 focus:border-gray-500 focus:ring-gray-500 rounded-lg text-center text-2xl tracking-widest"
                          placeholder="000000"
                          maxLength={6}
                          required
                        />
                      </div>

                      <div className="flex gap-3">
                        <Button
                          type="button"
                          onClick={() => setOtpSent(false)}
                          className="flex-1 bg-gray-500 text-white h-12 text-lg font-semibold rounded-lg hover:bg-gray-600 transition-all duration-200"
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 brand-gradient text-white h-12 text-lg font-semibold rounded-lg brand-shadow hover:shadow-xl transition-all duration-200"
                        >
                          Verify Email
                        </Button>
                      </div>
                      
                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => { setOtpSent(false); setOtp(''); }}
                          className="text-sm text-gray-500 hover:text-gray-700 underline"
                        >
                          Didn't receive code? Resend
                        </button>
                      </div>
                    </form>
                  )
                ) : (
                  <form onSubmit={handleDetailsSubmit} className="space-y-6">
                    <div className="text-center mb-4">
                      <p className="text-sm text-green-600">✓ Email verified: {email}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12 border-gray-200 focus:border-gray-500 focus:ring-gray-500 rounded-lg"
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
                          className="h-12 border-gray-200 focus:border-gray-500 focus:ring-gray-500 rounded-lg"
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
                      className="h-12 border-gray-200 focus:border-gray-500 focus:ring-gray-500 rounded-lg"
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="users" className="text-sm font-medium text-gray-700 mb-2 block">Team Size *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, users: value })} required>
                        <SelectTrigger className="h-12 border-gray-200 focus:border-gray-500 rounded-lg">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent className="z-[10001]">
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
                        <SelectTrigger className="h-12 border-gray-200 focus:border-gray-500 rounded-lg">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent className="z-[10001]">
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
                      Complete Registration
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}