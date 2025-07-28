import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12" style={{ background: 'linear-gradient(135deg, #161F28 0%, #000000 100%)' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          <div className="col-span-1">
            <motion.div 
              className="flex items-center space-x-3 mb-4 md:mb-4 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <a href="#home" className="cursor-pointer">
                <div className="w-24 h-12 rounded-lg flex items-center justify-center overflow-hidden bg-white">
                  <img
                    src="/attached_assets/codeverges.jpeg"
                    alt="CodeVerge Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              {/* <span
                className="text-2xl font-bold"
                style={{
                  background: 'linear-gradient(90deg, #2EB1CB, #5682C2, #9FA2AB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block',
                }}
              >
                CodeVerge
              </span> */}
            </motion.div>
            <p className="text-body-small text-muted max-w-md">
              Transforming businesses through innovative software solutions, AI-powered technologies, and expert development services.
            </p>
          </div>
          
          {/* Address Section */}
          <div className="col-span-1">
            <h4 className="text-heading-4 mb-4 relative group">
              <span className="gradient-text-cyan">Address</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-2 text-muted break-words">
              <li>123 Tech Street</li>
              <li>Silicon Valley, CA 94000</li>
              <li>Email: <a href="mailto:contact@codeverge.com" className="hover:text-cyan-400 transition-all duration-300 relative group">
                contact@codeverge.com
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li>Phone: <a href="tel:+15551234567" className="hover:text-cyan-400 transition-all duration-300 relative group">
                +1 (555) 123-4567
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-heading-4 mb-4 relative group">
              <span className="gradient-text-cyan">Company</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-2 break-words">
              {[
                "About Us",
                "Careers",
                "Contact",
                "Privacy Policy"
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href="#" className="text-muted hover:text-cyan-400 transition-all duration-300 relative group">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-heading-4 mb-4 relative group">
              <span className="gradient-text-cyan">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-2 break-words">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "How We Work", href: "#how-we-work" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <motion.li key={item.label} whileHover={{ x: 5 }}>
                  <a href={item.href} className="text-muted hover:text-cyan-400 transition-all duration-300 relative group">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-body-small text-muted">
            © {currentYear} CodeVerge. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
