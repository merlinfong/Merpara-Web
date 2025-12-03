import React from 'react';
import { WORKFLOW_STEPS } from '../constants';
import { motion } from 'framer-motion';

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-black relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">From Concept to Collection</h2>
          <p className="text-gray-400 text-lg">A transparent, flexible, and supportive workflow designed for creators.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {WORKFLOW_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center md:items-start text-center md:text-left group"
              >
                {/* Step Number Dot */}
                <div className="w-10 h-10 rounded-full bg-black border border-white/30 text-white flex items-center justify-center font-bold text-sm mb-6 z-10 group-hover:bg-white group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  {index + 1}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;