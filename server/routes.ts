import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, message } = contactFormSchema.parse(req.body);
      
      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integrate with CRM system
      
      console.log("Contact form submission:", { name, email, company, message });
      
      res.json({ 
        success: true, 
        message: "Thank you for your interest! We'll be in touch soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Demo scheduling endpoint
  app.post("/api/schedule-demo", async (req, res) => {
    try {
      const demoSchema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        company: z.string().min(1, "Company is required"),
        preferredDate: z.string().min(1, "Preferred date is required"),
        timeZone: z.string().min(1, "Time zone is required"),
      });

      const data = demoSchema.parse(req.body);
      
      console.log("Demo scheduling request:", data);
      
      res.json({ 
        success: true, 
        message: "Demo scheduled successfully! You'll receive a confirmation email shortly." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
