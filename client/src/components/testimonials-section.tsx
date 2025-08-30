import { Star } from "lucide-react";
import { motion } from "framer-motion";

const StarRating = () => (
  <div className="flex mb-6">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ))}
  </div>
);

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "CEO, TechSolutions India",
    content: "Leadspoint transformed our sales process completely. The WhatsApp integration alone increased our conversion rates by 40%. Best CRM investment we've made.",
    avatar: "RK",
    company: "TechSolutions"
  },
  {
    name: "Priya Sharma",
    title: "Founder, DigitalGrow",
    content: "The automation features saved us 15 hours per week. Our team can now focus on closing deals instead of manual data entry. Highly recommended!",
    avatar: "PS",
    company: "DigitalGrow"
  },
  {
    name: "Amit Patel",
    title: "Sales Director, SalesForce Pro",
    content: "Outstanding support and powerful features. The analytics dashboard gives us insights we never had before. ROI was visible within the first month.",
    avatar: "AP",
    company: "SalesForce Pro"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by 10,000+ businesses across India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about their experience with Leadspoint
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <StarRating />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-700 font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
