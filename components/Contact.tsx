import React from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="max-w-xl mb-10 md:mb-0">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Let's Build.</h2>
            <p className="text-xl text-gray-400 mb-8">
              Your Fashion Brand Together.
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:merlin@merpara.com" className="flex items-center gap-4 text-white hover:text-gray-300 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">merlin@merpara.com</span>
              </a>
              <a href="tel:+8618924681105" className="flex items-center gap-4 text-white hover:text-gray-300 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">+86 18924681105</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 text-sm text-gray-400">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest">Company</h4>
              <ul className="space-y-3">
                <li><a href="#vision" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest">Connect</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Instagram <ArrowUpRight className="w-3 h-3"/></a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3"/></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Merpara. All rights reserved.</p>
          <p>Designed with liquid aesthetics.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;