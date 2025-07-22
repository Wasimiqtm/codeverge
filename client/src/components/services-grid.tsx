import { useRef } from "react";
import { Brain, Code, Users, BarChart3, CheckCircle } from "lucide-react";

const services = [
  // 1. Generative AI
  {
    icon: Brain,
    title: "Generative AI",
    description: "Harness the power of artificial intelligence to automate processes, generate content, and create intelligent solutions that adapt to your business needs.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    features: [
      "Custom AI Model Development",
      "Natural Language Processing",
      "Computer Vision Solutions"
    ]
  },
  // 2. Web Development
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web apps built for performance, security, and scalability.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=90",
    features: [
      "Responsive Web Design",
      "E-commerce Solutions",
      "API Integrations"
    ]
  },
  // 3. App Development
  {
    icon: Code,
    title: "App Development",
    description: "Build robust, scalable applications using cutting-edge technologies. From web to mobile, we deliver solutions that drive business growth.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    features: [
      "Full-Stack Web Development",
      "Mobile App Development",
      "API Integration & Development"
    ]
  },
  // 4. PEN Testing
  {
    icon: BarChart3,
    title: "PEN Testing",
    description: "Comprehensive penetration testing to secure your digital assets and infrastructure.",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=90",
    features: [
      "Vulnerability Assessment",
      "Network & App Security",
      "Detailed Reporting"
    ]
  },
  // 5. Graphic Designing
  {
    icon: Users,
    title: "Graphic Designing",
    description: "Creative graphic design services for branding, marketing, and digital presence.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=90",
    features: [
      "Brand Identity",
      "Marketing Collateral",
      "Digital Graphics"
    ]
  },
  // 6. UI/UX Designing
  {
    icon: Users,
    title: "UI/UX Designing",
    description: "User-centric UI/UX design for web and mobile apps to maximize engagement.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=90",
    features: [
      "Wireframing & Prototyping",
      "User Research",
      "Interaction Design"
    ]
  },
  // 7. Staff Augmentation
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Scale your team with our expert developers. Get the right talent, at the right time, with the flexibility to adapt to your project needs.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    features: [
      "Expert Developer Placement",
      "Flexible Engagement Models",
      "Quick Team Scaling"
    ]
  },
  // 8. Dynamics 365
  {
    icon: BarChart3,
    title: "Dynamics 365",
    description: "Streamline your business processes with Microsoft Dynamics 365. Custom implementations, integrations, and optimization for maximum ROI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    features: [
      "D365 Implementation & Customization",
      "Data Migration & Integration",
      "Training & Support"
    ]
  },
];

export default function ServicesGrid() {
  const ref = useRef(null);

  return (
    <section id="services" className="py-20" style={{ background: 'linear-gradient(135deg, #10151A 60%, #232B36 80%, #9FA2AB 100%)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{
              background: 'linear-gradient(90deg, #2EB1CB, #5682C2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            Our Core Services
          </h2>
          <p className="text-2xl text-[#B0C4D8] max-w-3xl mx-auto font-medium mb-2">
            Comprehensive technology solutions tailored to drive your business forward in the digital age.<br />
            <span className="text-[#6CA0C8] text-lg block mt-2">From AI-powered automation to scalable app development, we empower your business to thrive in a digital-first world.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 min-w-0">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white/10 backdrop-blur-lg border-2 border-[#2EB1CB]/30 shadow-xl rounded-3xl overflow-hidden min-w-0 flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#2EB1CB]/40 hover:border-[#2EB1CB]/70 cursor-pointer"
              style={{ boxShadow: '0 8px 32px 0 rgba(46,177,203,0.10)' }}
            >
              <div className="p-2 text-white font-bold text-center md:hidden">{service.title}</div>
              <div
                className="w-full h-32 md:h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3">
                    <service.icon className="text-blue-400 w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="p-2 md:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-xl md:text-2xl font-bold mb-4 break-words text-left"
                    style={{
                      background: 'linear-gradient(90deg, #2EB1CB, #5682C2, #9FA2AB)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#B0C4D8] mb-6 font-medium text-left break-words">{service.description}</p>
                  <ul className="text-base space-y-2 mb-6 break-words text-left pl-0">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-[#9FA2AB] font-semibold text-left"
                      >
                        <CheckCircle className="text-[#2EB1CB] w-5 h-5 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-left text-sm" style={{ color: '#9FA2AB' }}>
                    Unlock the next level of digital transformation with our {service.title} expertise.
                  </div>
                </div>
                <button
                  className="mt-6 w-full bg-gradient-to-r from-[#2EB1CB] to-[#9FA2AB] text-white py-3 rounded-lg font-bold shadow-lg hover:from-[#5682C2] hover:to-[#2EB1CB] transition-all duration-300 text-lg tracking-wide focus:outline-none focus:ring-2 focus:ring-[#2EB1CB]/40"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
