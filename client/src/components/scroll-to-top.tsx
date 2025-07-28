import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-gradient-to-r from-[#161F28] to-[#232B36] text-white p-3 rounded-full shadow-lg transition-all duration-300 group border border-[#2EB1CB]/30 hover:border-[#2EB1CB] hover:bg-gradient-to-r hover:from-[#2EB1CB] hover:to-[#5682C2] hover:shadow-[#2EB1CB]/25"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
} 