import React from 'react';
import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      id: '01',
      title: 'Discovery & Analysis',
      icon: 'https://themexriver.com/wp/avista/wp-content/uploads/2025/11/p2-icon-1.svg',
      description: 'Identifying high-value opportunities in Oman through deep market research and strategic analysis.'
    },
    {
      id: '02',
      title: 'Strategic Planning',
      icon: 'https://themexriver.com/wp/avista/wp-content/uploads/2025/11/p2-icon-2.svg',
      description: 'Developing robust investment models and tailored plans to achieve measurable growth and stability.'
    },
    {
      id: '03',
      title: 'Execution & Development',
      icon: 'https://themexriver.com/wp/avista/wp-content/uploads/2025/11/p2-icon-2.svg',
      description: 'Implementing projects with global partners, ensuring operational excellence and strategic alignment.'
    },
    {
      id: '04',
      title: 'Sustainable Growth',
      icon: 'https://themexriver.com/wp/avista/wp-content/uploads/2025/11/p2-icon-4.svg',
      description: 'Ensuring long-term value for Oman and our investors through continuous monitoring and optimization.'
    }
  ];

  return (
    <section className="py-28 bg-dark text-white overflow-hidden">
      <div className="as-container-2">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
          <div className="as-subtitle-2">Investment Process</div>
          <h2 className="as-sec-title-2 max-w-[870px]">
            Our Shomoukh process embodies the power to embrace and respond to global market shifts. We see change as a chance to grow and thrive, transforming challenges into strategic opportunities.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/10 relative">
          {steps.map((step, i) => (
            <div key={step.id} className="p-10 border-l border-white/10 relative group">
              <div className="mb-12 group-hover:scale-110 transition-transform duration-500">
                <img src={step.icon} alt="" className="w-16 h-16 grayscale invert" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-6">{step.title}</h3>
              <p className="text-text-p1 text-sm leading-relaxed">
                {step.description}
              </p>
              
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-dark flex items-center justify-center text-white border border-white/10 z-10">
                <div className="w-14 h-14 rounded-full border border-white/5 absolute" />
                {step.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
