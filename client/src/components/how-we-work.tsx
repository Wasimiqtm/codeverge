import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Search, ClipboardList, Code, ShieldCheck, Send } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    description: 'We understand your business goals, challenges, and vision to craft a tailored solution.',
    icon: <Search className="w-6 h-6 text-[#2EB1CB]" />,
    color: '#2EB1CB',
  },
  {
    title: 'Planning',
    description: 'Our experts design a strategic roadmap, wireframes, and project milestones for success.',
    icon: <ClipboardList className="w-6 h-6 text-[#5682C2]" />,
    color: '#5682C2',
  },
  {
    title: 'Development',
    description: 'We build robust, scalable solutions using the latest technologies and best practices.',
    icon: <Code className="w-6 h-6 text-[#9FA2AB]" />,
    color: '#9FA2AB',
  },
  {
    title: 'Testing',
    description: 'Comprehensive QA and security testing ensure your product is reliable and secure.',
    icon: <ShieldCheck className="w-6 h-6 text-[#2EB1CB]" />,
    color: '#2EB1CB',
  },
  {
    title: 'Delivery',
    description: 'We launch your solution and provide ongoing support for continuous growth.',
    icon: <Send className="w-6 h-6 text-[#5682C2]" />,
    color: '#5682C2',
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-16 bg-gradient-to-b from-[#232B36] via-[#18222C] to-[#10151A] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
        <h2 className="text-heading-1 gradient-text-primary mb-6 leading-snug">
  How We Work
</h2>
        </div>
        <VerticalTimeline lineColor="#232B36">
          {steps.map((step, idx) => (
            <VerticalTimelineElement
              key={idx}
              contentStyle={{ background: 'rgba(16,21,26,0.85)', color: '#B0C4D8', boxShadow: '0 8px 32px 0 rgba(46,177,203,0.10)', borderRadius: '1rem', border: `1.5px solid ${step.color}` }}
              contentArrowStyle={{ borderRight: `7px solid ${step.color}` }}
              iconStyle={{ background: '#10151A', color: step.color, boxShadow: `0 0 0 4px ${step.color}33` }}
              icon={step.icon}
            >
              <h3 className="text-2xl font-bold mb-2" style={{ color: step.color }}>{step.title}</h3>
              <p className="text-base text-[#B0C4D8]">{step.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
} 