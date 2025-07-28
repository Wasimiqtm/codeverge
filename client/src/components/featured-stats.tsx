import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Users, Code, BarChart3 } from "lucide-react";

const stats = [
  {
    target: 150,
    label: "Projects Completed",
    description: "Successfully delivered across various industries",
    icon: CheckCircle,
    color: "#2EB1CB",
    delay: 200,
    extra: "We take pride in every project, ensuring quality and innovation."
  },
  {
    target: 50,
    label: "Happy Clients",
    description: "Satisfied customers worldwide",
    icon: Users,
    color: "#5682C2",
    delay: 400,
    extra: "Our clients trust us for reliability and results."
  },
  {
    target: 25,
    label: "Expert Developers",
    description: "Skilled professionals ready to serve",
    icon: Code,
    color: "#2EB1CB",
    delay: 600,
    extra: "A passionate team with deep technical expertise."
  },
  {
    target: 5,
    label: "Years Experience",
    description: "Proven track record of excellence",
    icon: BarChart3,
    color: "#5682C2",
    delay: 800,
    extra: "Consistent growth and learning over the years."
  }
];

function StatCard({ target, label, description, icon: Icon, color, delay, extra }: any) {
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
      className="bg-[#10151A] rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl hover:shadow-[#2EB1CB]/30 transition-all duration-300 border border-[#232B36] cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay / 1000 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full" style={{ background: `linear-gradient(135deg, ${color}33, #232B36)` }}>
        <Icon className="w-10 h-10" style={{ color }} />
      </div>
      <div className="text-heading-1 gradient-text-primary mb-2">
        {count}+
      </div>
      <h3 className="text-heading-4 text-primary mb-1 text-center">{label}</h3>
      <p className="text-body-small text-secondary mb-2 text-center">{description}</p>
      <p className="text-caption text-accent text-center">{extra}</p>
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="text-heading-1 gradient-text-primary mb-6 leading-snug">
  Why Choose CodeVerge
</h2>
          <p className="text-body-large text-muted max-w-3xl mx-auto">
            We deliver exceptional results through innovation, expertise, and unwavering commitment to our clients' success.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
