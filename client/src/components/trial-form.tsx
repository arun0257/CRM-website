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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
      alert('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
      alert('Failed to verify OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
        setStep(3); // Show success step
      } else {
        const error = await response.json();
        alert(error.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Failed to complete registration:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
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
          className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 w-full max-w-lg rounded-xl shadow-2xl relative animate-fadeIn"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-2xl text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              &times;
            </button>
            
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {step === 1 ? 'Verify Your Email' : step === 2 ? 'Complete Registration' : 'Registration Submitted!'}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {step === 1 ? 'Join 10,000+ businesses growing with Leadspoint' : 
                   step === 2 ? 'Tell us about your organization' : 
                   'Your trial request is being reviewed'}
                </p>
              </div>
              
              <div className="space-y-4">
                {step === 3 ? (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Registration Submitted Successfully!</h3>
                      <p className="text-gray-600 mb-4">
                        Thank you for choosing Leadspoint CRM. Your trial request has been submitted and is now under review.
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
                        <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Our team will review your application within 24 hours</li>
                          <li>• You'll receive an email with your login credentials once approved</li>
                          <li>• Your 14-day free trial will begin immediately after approval</li>
                          <li>• No credit card required during the trial period</li>
                        </ul>
                      </div>
                      <p className="text-sm text-gray-500 mt-4">
                        Questions? Contact us at <a href="mailto:support@leadspoint.in" className="text-blue-600 hover:underline">support@leadspoint.in</a>
                      </p>
                    </div>
                    <Button
                      onClick={onClose}
                      className="w-full bg-gradient-to-r from-black to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white h-12 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      Close
                    </Button>
                  </div>
                ) : step === 1 ? (
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
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-black to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white h-12 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                      >
                        {loading ? (
                          <div className="flex items-center justify-center space-x-2">
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          'Send Verification Code'
                        )}
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
                          disabled={loading}
                          className="flex-1 bg-gradient-to-r from-black to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white h-12 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                        >
                          {loading ? (
                            <div className="flex items-center justify-center space-x-2">
                              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              <span>Verifying...</span>
                            </div>
                          ) : (
                            'Verify Email'
                          )}
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
                        <SelectTrigger className="h-12 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-black focus:border-black rounded-lg">
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
                        <SelectTrigger className="h-12 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-black focus:border-black rounded-lg">
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
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-black to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white h-12 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        <>
                          <Rocket className="mr-2 h-5 w-5" />
                          Complete Registration
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}