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
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden bg-white">
                <img
                  src="/attached_assets/codeverges.jpeg"
                  alt="CodeVerge Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold gradient-text">CodeVerge</span>
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

          {/* Newsletter Section (moved to right) */}
          <div className="col-span-1"><NewsletterFooter /></div>
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

// NewsletterFooter component
function NewsletterFooter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  function validateEmail(val: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(false);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSuccess(true);
    setEmail("");
  }
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">Newsletter</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email address"
          className="bg-[#10151A] border border-[#9FA2AB] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400 placeholder:text-[#9FA2AB] w-full"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-[#2EB1CB] to-[#9FA2AB] text-white font-semibold rounded-lg px-4 py-2 mt-1 hover:from-[#5682C2] hover:to-[#2EB1CB] transition-all w-full"
        >
          Subscribe
        </button>
        {error && <span className="text-red-400 text-xs mt-1">{error}</span>}
        {success && <span className="text-green-400 text-xs mt-1">Thank you for subscribing!</span>}
      </form>
    </div>
  );
}
