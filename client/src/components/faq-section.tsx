import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FaqSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#232B36] via-[#18222C] to-[#10151A]">
      <motion.div
        className="container mx-auto px-6 max-w-3xl"
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
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="q1">
            <AccordionTrigger className="text-lg font-semibold text-white">What makes your fintech solutions secure?</AccordionTrigger>
            <AccordionContent className="text-[#9FA2AB]">
              We use bank-grade encryption, regular security audits, and strict compliance with industry standards to ensure your data is always protected.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger className="text-lg font-semibold text-white">Can you integrate with legacy banking systems?</AccordionTrigger>
            <AccordionContent className="text-[#9FA2AB]">
              Yes, our team has deep experience in integrating modern fintech platforms with legacy systems, ensuring seamless data flow and minimal disruption.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger className="text-lg font-semibold text-white">How do you ensure compliance with regulations?</AccordionTrigger>
            <AccordionContent className="text-[#9FA2AB]">
              We stay updated with the latest financial regulations and build compliance into every stage of our development process, including KYC, AML, and GDPR.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger className="text-lg font-semibold text-white">What technologies do you use for app development?</AccordionTrigger>
            <AccordionContent className="text-[#9FA2AB]">
              We use a modern tech stack including React, Node.js, TypeScript, cloud platforms, and AI/ML tools to deliver robust, scalable solutions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q5">
            <AccordionTrigger className="text-lg font-semibold text-white">How quickly can you launch a fintech MVP?</AccordionTrigger>
            <AccordionContent className="text-[#9FA2AB]">
              Depending on requirements, we can deliver a minimum viable product in as little as 4-8 weeks, with full support for scaling and enhancements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </section>
  );
} 