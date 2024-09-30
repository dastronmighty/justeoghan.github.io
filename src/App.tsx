import React from 'react';

import HeroSection from './components/Hero';
import AboutMe from './components/aboutme/Aboutme';
import Timeline from './components/timeline';
import Contact from './components/contact';
import Footer from './components/footer';
import Projects from './components/projects';
import Achievements from './components/achievements';

const App: React.FC = () => {
  return (
    <div className="App" style={{
      backgroundImage: "radial-gradient(#000 1px, transparent 1px), radial-gradient(#000 1px, rgb(243 244 246) 1px)",
      backgroundSize: "100px 100px",
      backgroundPosition: "0 0, 50px 50px",
    }}>
      <HeroSection />

      <AboutMe />

      <Achievements />

      <Timeline />

      <Contact />

      <Projects />

      <Footer />
    </div>
  );
};


export default App;
