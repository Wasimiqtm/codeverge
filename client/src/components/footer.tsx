import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          <div className="col-span-1">
            <motion.div 
              className="flex items-center space-x-3 mb-4 md:mb-4 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-24 h-12 rounded-lg flex items-center justify-center overflow-hidden bg-white">
                <img
                  src="/attached_assets/codeverges.jpeg"
                  alt="CodeVerge Logo"
                  className="w-full h-full object-cover"
                />
              </div>
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
            <p className="text-gray-400 max-w-md">
              Transforming businesses through innovative software solutions, AI-powered technologies, and expert development services.
            </p>
          </div>
          
          {/* Address Section */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Address</h4>
            <ul className="space-y-2 text-gray-400 break-words">
              <li>123 Tech Street</li>
              <li>Silicon Valley, CA 94000</li>
              <li>Email: <a href="mailto:contact@codeverge.com" className="hover:text-blue-400 transition-colors">contact@codeverge.com</a></li>
              <li>Phone: <a href="tel:+15551234567" className="hover:text-blue-400 transition-colors">+1 (555) 123-4567</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 break-words">
              {[
                "About Us",
                "Careers",
                "Contact",
                "Privacy Policy"
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 break-words">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "How We Work", href: "#how-we-work" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <motion.li key={item.label} whileHover={{ x: 5 }}>
                  <a href={item.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    {item.label}
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
          <p className="text-gray-400">
            © {currentYear} CodeVerge. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
