import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, ArrowLeft, ArrowRight as ArrowRightIcon } from "lucide-react";
import Lottie from "lottie-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Professional IT technology workspace with coding setup"
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Modern data center with server racks and blue lighting"
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Futuristic digital technology interface with glowing elements"
  }
];

// Sample Lottie animation (theme-friendly tech/human)
const lottieUrl = "https://assets2.lottiefiles.com/packages/lf20_2glqweqs.json";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lottieData, setLottieData] = useState<any>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch(lottieUrl)
      .then((res) => res.json())
      .then((data) => setLottieData(data));
  }, []);

  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Left Arrow Button */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-[#10151A] border border-[#2EB1CB] text-[#2EB1CB] p-3 rounded-full shadow-md hover:bg-[#18222C] hover:text-white transition-all duration-300"
        aria-label="Previous Slide"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      {/* Right Arrow Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-[#10151A] border border-[#5682C2] text-[#5682C2] p-3 rounded-full shadow-md hover:bg-[#18222C] hover:text-white transition-all duration-300"
        aria-label="Next Slide"
      >
        <ArrowRightIcon className="w-6 h-6" />
      </button>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
      <motion.div
        className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-center min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Lottie Animation (left on desktop, top on mobile) */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 md:mr-8">
          {lottieData && (
            <div className="rounded-full bg-gradient-to-br from-[#2EB1CB]/30 to-[#5682C2]/10 p-2 shadow-2xl" style={{ boxShadow: '0 0 32px 8px #2EB1CB33' }}>
              <Lottie
                autoplay
                loop
                animationData={lottieData}
                style={{ height: '320px', width: '320px', maxWidth: '100%' }}
                className="drop-shadow-xl"
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                aria-label="AI-powered human digital transformation animation"
              />
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="max-w-4xl mx-auto w-full">
            <motion.h1
              className="mt-12 text-display-2 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="gradient-text-primary drop-shadow-lg">
                Innovative Software
              </span>
              <br />
              <span className="text-primary drop-shadow-lg">Solutions for Tomorrow</span>
            </motion.h1>
            <motion.p
              className="text-body-large text-secondary mb-8 max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transforming businesses through cutting-edge technology, AI-powered solutions, and expert development services.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Add CTA buttons here if needed */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
