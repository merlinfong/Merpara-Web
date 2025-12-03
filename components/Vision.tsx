import React from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Users } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Who We Are</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Your trusted global partner in fashion, bridging the gap between Western influencers and world-class manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="w-8 h-8 text-merpara-blue" />,
              title: "Cross-Border Expertise",
              text: "Over 10 years of experience ensuring a smooth collaboration between Western Influencers and Chinese manufacturing.",
              color: "border-merpara-blue/20"
            },
            {
              icon: <Users className="w-8 h-8 text-merpara-orange" />,
              title: "Global Presence",
              text: "Teams across China, the US, and Latin America providing localized support to help you navigate international markets.",
              color: "border-merpara-orange/20"
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-merpara-red" />,
              title: "ROI-Driven Approach",
              text: "Combining strategic planning with operational efficiency to maximize your brand's growth and profitability.",
              color: "border-merpara-red/20"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-white/30 transition-all duration-500`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-white/10 transition-all"></div>
              <div className={`mb-6 p-3 bg-white/5 w-fit rounded-2xl border ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;