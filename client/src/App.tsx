import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("@/pages/home"));
const WhatsAppCRM = lazy(() => import("@/pages/whatsapp-crm"));
const API = lazy(() => import("@/pages/api"));
const HelpCenter = lazy(() => import("@/pages/help-center"));
const ContactUs = lazy(() => import("@/pages/contact-us"));
const Training = lazy(() => import("@/pages/training"));
const SystemStatus = lazy(() => import("@/pages/system-status"));
const LiveChat = lazy(() => import("@/pages/live-chat"));
const AboutUs = lazy(() => import("@/pages/about-us"));
const Blog = lazy(() => import("@/pages/blog"));
const Careers = lazy(() => import("@/pages/careers"));
const Partners = lazy(() => import("@/pages/partners"));
const CaseStudies = lazy(() => import("@/pages/case-studies"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const GDPR = lazy(() => import("@/pages/gdpr"));
const Security = lazy(() => import("@/pages/security"));
const RefundPolicy = lazy(() => import("@/pages/refund-policy"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/whatsapp-crm" component={WhatsAppCRM} />
        <Route path="/api" component={API} />
        <Route path="/help-center" component={HelpCenter} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/training" component={Training} />
        <Route path="/system-status" component={SystemStatus} />
        <Route path="/live-chat" component={LiveChat} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/blog" component={Blog} />
        <Route path="/careers" component={Careers} />
        <Route path="/partners" component={Partners} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/gdpr" component={GDPR} />
        <Route path="/security" component={Security} />
        <Route path="/refund-policy" component={RefundPolicy} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
