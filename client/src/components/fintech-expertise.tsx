import { Shield, CreditCard, BarChart3, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fintechImages = [
  "/attached_assets/1.jpg",
  "/attached_assets/2.jpg",
  "/attached_assets/3.jpg",
  "/attached_assets/4.jpg",
];

export default function FintechExpertise() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % fintechImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#10151A] via-[#18222C] to-[#232B36]">
      <motion.div
        className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Image/Slider */}
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
          <div className="w-full max-w-xl h-[340px] rounded-2xl overflow-hidden border border-[#232B36] shadow-2xl flex-1 flex">
            <AnimatePresence mode="wait">
              <motion.img
                key={fintechImages[current]}
                src={fintechImages[current]}
                alt="Fintech Visual"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, filter: "blur(16px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(16px)" }}
                transition={{ duration: 0.8 }}
                style={{ minHeight: 340, minWidth: '100%' }}
              />
            </AnimatePresence>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{
              background: 'linear-gradient(90deg, #2EB1CB, #5682C2, #9FA2AB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            Fintech Expertise
          </h2>
          <p className="text-xl text-[#B0C4D8] mb-6 max-w-xl">
            Empowering financial innovation with secure, scalable, and intelligent solutions. We blend technology and compliance to deliver seamless digital finance experiences.
          </p>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <Shield className="w-7 h-7 text-[#2EB1CB] flex-shrink-0" />
              <div>
                <span className="text-lg font-semibold text-white">Bank-Grade Security</span>
                <p className="text-[#9FA2AB] text-sm">Robust encryption, compliance, and fraud prevention for peace of mind.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CreditCard className="w-7 h-7 text-[#5682C2] flex-shrink-0" />
              <div>
                <span className="text-lg font-semibold text-white">Payments & Digital Wallets</span>
                <p className="text-[#9FA2AB] text-sm">Seamless integration for cards, wallets, and instant payments.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <BarChart3 className="w-7 h-7 text-[#2EB1CB] flex-shrink-0" />
              <div>
                <span className="text-lg font-semibold text-white">Analytics & Insights</span>
                <p className="text-[#9FA2AB] text-sm">Real-time dashboards and reporting for smarter decisions.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <TrendingUp className="w-7 h-7 text-[#9FA2AB] flex-shrink-0" />
              <div>
                <span className="text-lg font-semibold text-white">Growth & Innovation</span>
                <p className="text-[#9FA2AB] text-sm">AI-driven automation and scalable platforms for the future of finance.</p>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
} 