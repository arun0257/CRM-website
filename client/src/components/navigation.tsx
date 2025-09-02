import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Box, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/logo";

export function Navigation({ onStartTrial }: { onStartTrial?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    try {
      if (window.location.pathname !== '/') {
        window.location.href = `/#${sectionId}`;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } catch (error) {
      console.error('Failed to scroll to section:', error);
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo variant="color" size="md" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-black transition-colors font-medium focus-brand"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("integrations")}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Integrations
            </button>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-black"
              onClick={() => window.open('https://app.leadspoint.in', '_blank', 'noopener,noreferrer')}
            >
              Sign In
            </Button>
            <Button 
              className="btn-primary"
              onClick={onStartTrial}
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border border-gray-200 rounded-lg mt-2 p-4 shadow-lg"
            >
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-gray-700 hover:text-black transition-colors font-medium"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-left text-gray-700 hover:text-black transition-colors font-medium"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left text-gray-700 hover:text-black transition-colors font-medium"
                >
                  Reviews
                </button>
                <button
                  onClick={() => scrollToSection("integrations")}
                  className="text-left text-gray-700 hover:text-black transition-colors font-medium"
                >
                  Integrations
                </button>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Button 
                    variant="ghost" 
                    className="justify-start text-gray-700 hover:text-black"
                    onClick={() => window.open('https://app.leadspoint.in', '_blank', 'noopener,noreferrer')}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="brand-gradient text-white brand-shadow hover:shadow-lg transition-all duration-300"
                    onClick={onStartTrial}
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  );
}
