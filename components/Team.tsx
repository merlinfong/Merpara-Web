import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Leadership</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">The Minds Behind Merpara</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 transition-all hover:border-white/20"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-800">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <span className="text-xl" title="Location">{member.flag}</span>
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;