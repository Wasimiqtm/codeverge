import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function validateEmail(val: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#232B36] via-[#18222C] to-[#10151A]">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl border border-[#2EB1CB]/30 shadow-2xl p-8 md:p-12 max-w-xl w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Mail className="w-10 h-10 text-[#2EB1CB] mb-4" />
          <h3
            className="text-2xl md:text-3xl font-bold mb-2 text-center"
            style={{
              background: 'linear-gradient(90deg, #2EB1CB, #5682C2, #9FA2AB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            Subscribe to Our Newsletter
          </h3>
          <p className="text-[#B0C4D8] text-center mb-6">Get the latest updates, insights, and exclusive offers straight to your inbox.</p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:border-blue-400 outline-none transition-all duration-200"
            />
            <motion.button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#2EB1CB] to-[#5682C2] text-white font-bold shadow-lg hover:from-[#5682C2] hover:to-[#2EB1CB] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2EB1CB]/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              disabled={submitted}
            >
              {submitted ? "Subscribed!" : "Subscribe"}
            </motion.button>
          </form>
          {error && <span className="text-red-400 text-xs mt-2">{error}</span>}
          {submitted && (
            <motion.p
              className="text-green-400 mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Thank you for subscribing!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
} 