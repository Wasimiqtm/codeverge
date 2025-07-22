import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FaqSection() {
  const [open, setOpen] = useState<string | null>(null);
  const faqs = [
    {
      value: "q1",
      question: "What makes your fintech solutions secure?",
      answer:
        "We use bank-grade encryption, regular security audits, and strict compliance with industry standards to ensure your data is always protected.",
    },
    {
      value: "q2",
      question: "Can you integrate with legacy banking systems?",
      answer:
        "Yes, our team has deep experience in integrating modern fintech platforms with legacy systems, ensuring seamless data flow and minimal disruption.",
    },
    {
      value: "q3",
      question: "How do you ensure compliance with regulations?",
      answer:
        "We stay updated with the latest financial regulations and build compliance into every stage of our development process, including KYC, AML, and GDPR.",
    },
    {
      value: "q4",
      question: "What technologies do you use for app development?",
      answer:
        "We use a modern tech stack including React, Node.js, TypeScript, cloud platforms, and AI/ML tools to deliver robust, scalable solutions.",
    },
    {
      value: "q5",
      question: "How quickly can you launch a fintech MVP?",
      answer:
        "Depending on requirements, we can deliver a minimum viable product in as little as 4-8 weeks, with full support for scaling and enhancements.",
    },
  ];

  return (
    <section id="faq" className="relative py-20 bg-gradient-to-b from-[#232B36] via-[#18222C] to-[#10151A] overflow-hidden">
      {/* Blurred abstract background shapes */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-[#2EB1CB]/30 to-[#5682C2]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#9FA2AB]/30 to-[#2EB1CB]/10 rounded-full blur-2xl z-0" />
      {/* Simple divider */}
      <div className="w-24 h-1 mx-auto mb-10 rounded-full bg-[#2EB1CB]/60 opacity-80" />
      <motion.div
        className="container mx-auto px-6 max-w-3xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
          style={{
            background: 'linear-gradient(90deg, #2EB1CB, #5682C2, #9FA2AB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
          }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-[#B0C4D8] mb-10 text-center">
          Answers to the most common questions about our services, process, and expertise.
        </p>
        {/* Simple glass card with rounded border and shadow */}
        <div className="bg-[#10151A]/80 backdrop-blur-lg rounded-3xl border border-[#232B36]/80 p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className={`rounded-2xl overflow-hidden border border-[#232B36] bg-[#18222C]/80 shadow-md transition-all duration-300 ${open === faq.value ? 'border-[#2EB1CB]/60' : ''} hover:bg-[#232B36]/60`}
                onClick={() => setOpen(open === faq.value ? null : faq.value)}
              >
                <AccordionTrigger className="text-lg font-semibold px-6 py-4 text-white group focus:outline-none">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#9FA2AB] px-6 pb-4 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </section>
  );
} 