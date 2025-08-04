import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogPostProps {
  date: string
  title: string
  description: string
}

const BlogPost = ({ date, title, description }: BlogPostProps) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <div className="flex items-center text-sm text-gray-500 mb-4">
      <Calendar className="w-4 h-4 mr-2" />
      <span>{date}</span>
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex items-center text-blue-600">
      <span className="text-sm">Read more</span>
      <ArrowRight className="w-4 h-4 ml-1" />
    </div>
  </div>
)

const blogPosts = [
  {
    date: "Jan 15, 2024",
    title: "WhatsApp Business API Best Practices",
    description: "Learn how to maximize your WhatsApp marketing ROI"
  },
  {
    date: "Jan 10, 2024",
    title: "CRM Automation for Small Business",
    description: "Save time with smart automation workflows"
  },
  {
    date: "Jan 5, 2024",
    title: "Lead Scoring Strategies",
    description: "Identify your best prospects with AI-powered scoring"
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest insights, tips, and updates from the Leadspoint team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}