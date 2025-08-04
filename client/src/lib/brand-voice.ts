// Brand Voice Guidelines for Leadspoint CRM

export const brandVoice = {
  personality: {
    professional: "Expert, knowledgeable, reliable",
    approachable: "Friendly, helpful, understanding", 
    confident: "Assured, capable, trustworthy",
    innovative: "Forward-thinking, modern, tech-savvy"
  },
  
  tone: {
    primary: "Professional yet approachable",
    secondary: "Confident and helpful",
    avoid: "Overly technical, pushy, impersonal"
  },
  
  messaging: {
    taglines: [
      "#1 CRM for Growing Businesses",
      "India's Most Trusted CRM Platform",
      "Grow Your Business with Leadspoint CRM"
    ],
    
    valueProps: [
      "Manage leads, close deals, build relationships",
      "Trusted by 10,000+ Indian businesses", 
      "99.9% uptime, 24/7 support",
      "Setup in 5 minutes, no credit card required"
    ],
    
    cta: [
      "Start Free Trial",
      "Schedule Demo", 
      "Get Started Today",
      "Transform Your Business"
    ]
  },
  
  keywords: [
    "CRM", "leads", "sales", "growth", "Indian businesses",
    "WhatsApp", "automation", "analytics", "trusted", "reliable"
  ]
};

export const getBrandMessage = (type: keyof typeof brandVoice.messaging) => {
  const messages = brandVoice.messaging[type];
  return Array.isArray(messages) ? messages[0] : messages;
};