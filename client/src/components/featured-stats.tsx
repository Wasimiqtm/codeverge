import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StatProps {
  target: number;
  label: string;
  description: string;
  delay: number;
}

function AnimatedStat({ target, label, description, delay }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        let current = 0;
        const increment = target / 100;
        const counter = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, 20);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [inView, target, delay]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay / 1000 }}
    >
      <motion.div
        className="gradient-bg-dark rounded-xl p-8 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05, y: -5 }}
      >
        <div className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          {count}+
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{label}</h3>
        <p className="text-gray-400">{description}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose</span> CodeVerge
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver exceptional results through innovation, expertise, and unwavering commitment to our clients' success.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <AnimatedStat
            target={150}
            label="Projects Completed"
            description="Successfully delivered across various industries"
            delay={200}
          />
          <AnimatedStat
            target={50}
            label="Happy Clients"
            description="Satisfied customers worldwide"
            delay={400}
          />
          <AnimatedStat
            target={25}
            label="Expert Developers"
            description="Skilled professionals ready to serve"
            delay={600}
          />
          <AnimatedStat
            target={5}
            label="Years Experience"
            description="Proven track record of excellence"
            delay={800}
          />
        </div>
      </div>
    </section>
  );
}
