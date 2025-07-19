import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "John Davis",
    position: "CEO, TechStart Inc.",
    initials: "JD",
    rating: 5,
    content: "CodeVerge transformed our business with their innovative AI solutions. The team's expertise and dedication exceeded our expectations. Our productivity increased by 300% within the first quarter."
  },
  {
    name: "Sarah Mitchell",
    position: "CTO, Global Dynamics",
    initials: "SM",
    rating: 5,
    content: "The staff augmentation service provided by CodeVerge helped us scale rapidly. Their developers integrated seamlessly with our team and delivered exceptional results consistently."
  },
  {
    name: "Michael Rodriguez",
    position: "Director, Enterprise Solutions",
    initials: "MR",
    rating: 5,
    content: "CodeVerge's Dynamics 365 implementation revolutionized our operations. The seamless integration and comprehensive training ensured a smooth transition and immediate ROI."
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Happy</span> Clients
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with CodeVerge.
          </p>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="gradient-bg-dark rounded-2xl p-8 mx-4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 gradient-bg-blue rounded-full flex items-center justify-center text-white font-bold text-xl mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonials[currentIndex].initials}
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
                
                <div className="flex text-blue-400 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-lg text-gray-300 italic">
                  "{testimonials[currentIndex].content}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Carousel Controls */}
          <motion.button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500/20 hover:bg-blue-500/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
            onClick={goToPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </motion.button>
          
          <motion.button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500/20 hover:bg-blue-500/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="text-white w-6 h-6" />
          </motion.button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-500" : "bg-white/30"
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
