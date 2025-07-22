import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Code, Users, BarChart3 } from 'lucide-react';

const caseStudies = [
  {
    title: 'AI-Powered Automation for Fintech',
    description: 'Implemented a custom AI solution for a leading fintech client, automating KYC and fraud detection, resulting in 40% faster onboarding.',
    icon: <Briefcase className="w-6 h-6 text-[#2EB1CB]" />,
    year: '2023',
    color: '#2EB1CB',
  },
  {
    title: 'Enterprise Web Platform',
    description: 'Developed a scalable web platform for a global enterprise, integrating real-time analytics and secure payment gateways.',
    icon: <Code className="w-6 h-6 text-[#5682C2]" />,
    year: '2022',
    color: '#5682C2',
  },
  {
    title: 'Staff Augmentation for SaaS Startup',
    description: 'Provided expert developers to a SaaS startup, accelerating their product roadmap and reducing time-to-market by 30%.',
    icon: <Users className="w-6 h-6 text-[#9FA2AB]" />,
    year: '2022',
    color: '#9FA2AB',
  },
  {
    title: 'Penetration Testing & Security Audit',
    description: 'Conducted comprehensive PEN testing for a healthcare provider, identifying and mitigating critical vulnerabilities.',
    icon: <BarChart3 className="w-6 h-6 text-[#2EB1CB]" />,
    year: '2021',
    color: '#2EB1CB',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="pt-20 pb-8 bg-gradient-to-b from-[#10151A] via-[#232B36] to-[#232B36] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
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
            Case Studies
          </h2>
        </div>
        <VerticalTimeline lineColor="#232B36">
          {caseStudies.map((cs, idx) => (
            <VerticalTimelineElement
              key={idx}
              contentStyle={{ background: 'rgba(16,21,26,0.85)', color: '#B0C4D8', boxShadow: '0 8px 32px 0 rgba(46,177,203,0.10)', borderRadius: '1rem', border: `1.5px solid ${cs.color}` }}
              contentArrowStyle={{ borderRight: `7px solid ${cs.color}` }}
              date={cs.year}
              iconStyle={{ background: '#10151A', color: cs.color, boxShadow: `0 0 0 4px ${cs.color}33` }}
              icon={cs.icon}
            >
              <h3 className="text-2xl font-bold mb-2" style={{ color: cs.color }}>{cs.title}</h3>
              <p className="text-base text-[#B0C4D8]">{cs.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
} 