import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Users, BarChart3, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Generative AI",
    description: "Harness the power of artificial intelligence to automate processes, generate content, and create intelligent solutions that adapt to your business needs.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    features: [
      "Custom AI Model Development",
      "Natural Language Processing",
      "Computer Vision Solutions"
    ]
  },
  {
    icon: Code,
    title: "Applications Development",
    description: "Build robust, scalable applications using cutting-edge technologies. From web to mobile, we deliver solutions that drive business growth.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    features: [
      "Full-Stack Web Development",
      "Mobile App Development",
      "API Integration & Development"
    ]
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Scale your team with our expert developers. Get the right talent, at the right time, with the flexibility to adapt to your project needs.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    features: [
      "Expert Developer Placement",
      "Flexible Engagement Models",
      "Quick Team Scaling"
    ]
  },
  {
    icon: BarChart3,
    title: "Dynamics 365",
    description: "Streamline your business processes with Microsoft Dynamics 365. Custom implementations, integrations, and optimization for maximum ROI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    features: [
      "D365 Implementation & Customization",
      "Data Migration & Integration",
      "Training & Support"
    ]
  }
];

export default function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Core Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to drive your business forward in the digital age.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card-hover gradient-bg-dark rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent" />
                <motion.div 
                  className="absolute top-4 left-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3">
                    <service.icon className="text-blue-400 w-6 h-6" />
                  </div>
                </motion.div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <ul className="text-sm text-gray-400 space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <motion.li 
                      key={feature}
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <CheckCircle className="text-blue-400 w-4 h-4 mr-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  className="w-full gradient-bg-blue text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
