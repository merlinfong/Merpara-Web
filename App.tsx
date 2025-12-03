import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Workflow from './components/Workflow';
import Journeys from './components/Journeys';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Journeys />
        <Workflow />
        <Services />
        <Team />
      </main>
      <Contact />
    </div>
  );
};

export default App;