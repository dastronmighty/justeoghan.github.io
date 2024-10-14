import React from 'react';

import HeroSection from './components/Hero';
import AboutMe from './components/aboutme/Aboutme';
import Timeline from './components/timeline';
import Contact from './components/contact';
import Footer from './components/footer';
import Projects from './components/projects_certs';
import Achievements from './components/achievements';

const App: React.FC = () => {
  return (
    <div className="App" style={{
      backgroundColor: "rgb(243 244 246)"
    }}>
      <HeroSection />

      <AboutMe />

      <Achievements />

      <Timeline />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
};


export default App;
