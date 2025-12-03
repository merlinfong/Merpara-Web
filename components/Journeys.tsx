import React from 'react';
import { BRAND_JOURNEYS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Journeys: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Example <br />Brand Journeys</h2>
            <p className="text-gray-400 max-w-lg">
              Realize your potential with diverse fashion pathways. From athleisure to high-fashion capsules.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white border-b border-white pb-1 hover:text-gray-300 transition-colors">
            View Case Studies <ArrowUpRight className="w-4 h-4"/>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_JOURNEYS.map((journey, index) => (
            <motion.div
              key={journey.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
              <img 
                src={journey.image} 
                alt={journey.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs font-bold tracking-widest text-white/80 uppercase mb-2 block">Journey {journey.id}</span>
                <h3 className="text-2xl font-serif text-white mb-2">{journey.title}</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 delay-100">
                  {journey.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journeys;