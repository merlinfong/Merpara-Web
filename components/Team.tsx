import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';
import { motion } from 'framer-motion';

const TeamGroup: React.FC<{ title: string; subtitle?: string; members: TeamMember[] }> = ({ title, subtitle, members }) => (
  <div className="mb-20 last:mb-0">
    <div className="text-center mb-10">
      <h3 className="text-xl font-bold text-merpara-blue uppercase tracking-widest mb-2">{title}</h3>
      {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
    </div>
    
    <div className={`grid grid-cols-1 ${members.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2 max-w-4xl mx-auto'} gap-8`}>
      {members.map((member, index) => (
        <motion.div 
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-[24px] glass-panel transition-all hover:border-merpara-blue/30"
        >
          {/* Image Container with Placeholder Fallback */}
          <div className="aspect-[3/4] overflow-hidden bg-[#1a1a1a] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
            
            {/* Fallback pattern if image is missing */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                 <circle cx="12" cy="7" r="4"></circle>
               </svg>
            </div>

            <img 
              src={member.image} 
              alt={member.name} 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              onError={(e) => {
                // Hide broken image icon if not uploaded yet
                e.currentTarget.style.display = 'none';
              }}
            />
            
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex justify-between items-end mb-2">
                <h4 className="text-2xl font-serif font-bold text-white leading-none">{member.name}</h4>
                <span className="text-2xl" title="Location">{member.flag}</span>
              </div>
              <p className="text-xs font-bold text-merpara-blue uppercase tracking-wider mb-3">{member.role}</p>
            </div>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-sm h-full">
            <p className="text-gray-300 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Team: React.FC = () => {
  const strategyTeam = TEAM_MEMBERS.filter(m => m.group === 'Strategy');
  const brandTeam = TEAM_MEMBERS.filter(m => m.group === 'Brand');
  const studioTeam = TEAM_MEMBERS.filter(m => m.group === 'Studio');

  return (
    <section id="team" className="py-32 bg-[#030303] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">Leadership</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white mt-8 mb-6">The Minds Behind <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-merpara-blue to-merpara-purple">Merpara</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A global team uniting Silicon Valley strategy with world-class Chinese manufacturing.
          </p>
        </div>

        <TeamGroup 
          title="Strategy & Operations" 
          subtitle="Leadership & Vision"
          members={strategyTeam} 
        />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

        <TeamGroup 
          title="Brand & Growth" 
          subtitle="Marketing Strategy & Social Media Creative"
          members={brandTeam} 
        />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

        <TeamGroup 
          title="Fashion Studio" 
          subtitle="Design & Merchandising"
          members={studioTeam} 
        />
      </div>
    </section>
  );
};

export default Team;