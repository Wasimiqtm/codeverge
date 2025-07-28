import { useRef, useState } from "react";
import { Brain, Code, Users, BarChart3, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  // 1. Web & App Development
  {
    icon: Code,
    title: "Web & App Development",
    description: "Full-stack development solutions including responsive websites, web applications, and mobile apps built with cutting-edge technologies for performance, security, and scalability.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600&q=70",
  },
  // 2. Generative AI
  {
    icon: Brain,
    title: "Generative AI",
    description: "Harness the power of artificial intelligence to automate processes, generate content, and create intelligent solutions that adapt to your business needs.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=70",
  },
  // 3. Staff Augmentation
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Scale your team with our expert developers. Get the right talent, at the right time, with the flexibility to adapt to your project needs.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=70",
  },
  // 4. Dynamics 365
  {
    icon: BarChart3,
    title: "Dynamics 365",
    description: "Streamline your business processes with Microsoft Dynamics 365. Custom implementations, integrations, and optimization for maximum ROI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=70",
  },
];

export default function ServicesGrid() {
  const ref = useRef(null);

  return (
    <section id="services" className="py-16" style={{ background: 'linear-gradient(135deg, #10151A 60%, #232B36 80%, #9FA2AB 100%)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" ref={ref}>
          <h2 className="text-heading-1 gradient-text-primary mb-6">
            Our Core Services
          </h2>
          <p className="text-body-large text-secondary max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to drive your business forward in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group bg-white/10 backdrop-blur-lg border-2 border-[#2EB1CB]/30 shadow-xl rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#2EB1CB]/40 hover:border-[#2EB1CB]/70 hover:scale-105"
              style={{ boxShadow: '0 8px 32px 0 rgba(46,177,203,0.10)' }}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <div
                className="w-full h-40 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <motion.div 
                    className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 8,
                      backgroundColor: "rgba(46, 177, 203, 0.3)",
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <service.icon className="text-blue-400 w-6 h-6" />
                  </motion.div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <motion.h3 
                  className="text-heading-4 gradient-text-primary mb-3 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-body-small text-secondary text-center leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
