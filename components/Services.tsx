import React, { useState } from 'react';
import { SERVICE_PACKAGES } from '../constants';
import { Check, ArrowRight, X, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (planName: string) => {
    setSelectedPlan(planName);
    setShowModal(true);
  };

  return (
    <section id="services" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Choose Your Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you're launching a capsule or scaling a global brand, we have the infrastructure to support you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {SERVICE_PACKAGES.map((pkg) => (
            <motion.div 
              key={pkg.id}
              whileHover={{ y: -8 }}
              className="glass-card p-8 rounded-[32px] h-full flex flex-col relative overflow-hidden group"
            >
               {/* Highlight effect */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-merpara-blue/10 blur-[80px] rounded-full -mr-32 -mt-32 pointer-events-none group-hover:bg-merpara-blue/20 transition-colors" />

              <div className="mb-8 relative z-10">
                <span className="text-xs font-bold tracking-widest text-merpara-blue uppercase mb-3 block">
                  {pkg.recommendedFor}
                </span>
                <h3 className="text-3xl font-serif text-white mb-3">{pkg.name}</h3>
                <p className="text-2xl brand-gradient-text font-light">{pkg.price}</p>
              </div>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed min-h-[60px] relative z-10">
                {pkg.description}
              </p>

              <div className="space-y-4 mb-10 flex-grow relative z-10">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-merpara-blue/20 border border-merpara-blue/50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-merpara-blue" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleSelect(pkg.name)}
                className="w-full py-4 rounded-full bg-merpara-blue text-white font-semibold hover:bg-blue-400 transition-all shadow-[0_0_20px_rgba(47,168,225,0.15)] hover:shadow-[0_0_30px_rgba(47,168,225,0.3)] flex items-center justify-center gap-2 group relative z-10"
              >
                Start Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass-panel w-full max-w-lg rounded-3xl p-8 relative z-10 overflow-hidden"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-8">
                <span className="text-xs font-bold text-merpara-blue uppercase tracking-widest">Selected Plan</span>
                <h3 className="text-3xl font-serif text-white mt-1">{selectedPlan}</h3>
                <p className="text-gray-400 text-sm mt-2">Complete your profile to initiate your brand journey.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-400 ml-1">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl glass-input text-sm" placeholder="Jane" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-400 ml-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl glass-input text-sm" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl glass-input text-sm" placeholder="jane@example.com" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-400 ml-1">Social Handle (Instagram/TikTok)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl glass-input text-sm" placeholder="@username" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-400 ml-1">Brand Vision</label>
                  <textarea className="w-full px-4 py-3 rounded-xl glass-input text-sm h-24 resize-none" placeholder="Tell us about the brand you want to build..."></textarea>
                </div>

                <div className="pt-4">
                  <button className="w-full py-4 rounded-full bg-merpara-blue text-white font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(47,168,225,0.39)]">
                    <Lock className="w-3 h-3" />
                    Secure Your Spot
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-3">
                    No payment required today. Our team will contact you within 24 hours.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;