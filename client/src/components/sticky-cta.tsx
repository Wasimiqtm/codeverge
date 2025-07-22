import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function StickyCTA() {
  const handleClick = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2EB1CB] to-[#5682C2] text-white font-bold text-lg shadow-2xl hover:from-[#5682C2] hover:to-[#2EB1CB] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#2EB1CB]/40"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Let's Talk"
      style={{ boxShadow: '0 8px 32px 0 rgba(46,177,203,0.18)' }}
    >
      <MessageCircle className="w-6 h-6" />
      Let’s Talk
    </motion.button>
  );
} 