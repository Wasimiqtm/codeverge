import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            <div className="w-24 h-12 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/attached_assets/codeverge.png" 
                alt="CodeVerge Logo" 
                className="w-18 h-10 object-contain"
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
          
          <div className="hidden md:flex space-x-5">
            {[
              { label: "Home", id: "home" },
              { label: "Stats", id: "about" },
              { label: "Case Studies", id: "case-studies" },
              { label: "How We Work", id: "how-we-work" },
              { label: "Fintech", id: "fintech" },
              { label: "Services", id: "services" },
              { label: "FAQ", id: "faq" },
              { label: "Clients", id: "clients" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="transition-colors duration-300 font-bold text-lg px-2"
                style={{
                  background: 'linear-gradient(90deg, #9FA2AB, #fff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 2px 8px #232B36',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={e => (e.currentTarget.style as any).webkitTextFillColor = '#60a5fa'}
                onMouseLeave={e => (e.currentTarget.style as any).webkitTextFillColor = 'transparent'}
              >
                {item.label}
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
              { label: "Stats", id: "about" },
              { label: "Fintech", id: "fintech" },
              { label: "Services", id: "services" },
              { label: "FAQ", id: "faq" },
              { label: "Clients", id: "clients" },
              { label: "Contact", id: "contact" }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="transition-colors duration-300 font-bold text-lg text-left px-2"
                style={{
                  background: 'linear-gradient(90deg, #9FA2AB, #fff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 2px 8px #232B36',
                }}
                whileHover={{ x: 10 }}
                onMouseEnter={e => (e.currentTarget.style as any).webkitTextFillColor = '#60a5fa'}
                onMouseLeave={e => (e.currentTarget.style as any).webkitTextFillColor = 'transparent'}
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
