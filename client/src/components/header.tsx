import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect border-b border-white/10" : "backdrop-blur-md"
      }`}
      style={!isScrolled ? { background: '#071518' } : {}}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="#home" className="cursor-pointer">
              <div className="w-24 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/attached_assets/codeverge.png" 
                  alt="CodeVerge Logo" 
                  className="w-18 h-10 object-contain"
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
          
          <div className="hidden md:flex space-x-6">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Services", id: "services" },
              { label: "Case Studies", id: "case-studies" },
              { label: "How We Work", id: "how-we-work" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-label transition-all duration-300 group ${
                  activeSection === item.id 
                    ? "text-cyan-400" 
                    : "text-gray-300 hover:text-cyan-400"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </motion.button>
            ))}
          </div>
          
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden mt-4 pb-4 border-t border-white/20 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 mt-4">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Services", id: "services" },
              { label: "Case Studies", id: "case-studies" },
              { label: "How We Work", id: "how-we-work" },
              { label: "Contact", id: "contact" }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 text-body-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id 
                    ? "text-cyan-400 bg-white/10" 
                    : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                }`}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
