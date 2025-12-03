import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
          alt="Fashion Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wider text-white mb-6 backdrop-blur-md">
            POWERED BY CHINA'S LEADING SUPPLY CHAIN
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-8">
            Influencer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              Fashion
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
            Transform your influence into a distinctive fashion brand. Merpara partners with influencers to bring their unique style to market—combining boutique design, agile production, and data-backed brand management.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="#services"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 w-full md:w-auto"
            >
              Start Your Journey
            </a>
            <a 
              href="#vision"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-colors w-full md:w-auto backdrop-blur-sm"
            >
              Discover More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements (Decorative) */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <span className="text-white/30 text-sm">Scroll to Explore</span>
      </div>
    </section>
  );
};

export default Hero;