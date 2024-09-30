import React from 'react';

import HeroSection from './components/Hero';
import AboutMe from './components/aboutme/Aboutme';
import AngledLine from './components/angledLine';
import Timeline from './components/timeline';
import Contact from './components/contact';
import Footer from './components/footer';
import Projects from './components/projects';

const App: React.FC = () => {
  return (
    <div className="App" style={{
      backgroundImage: "radial-gradient(#5a8aff 1.75px, transparent 1.75px), radial-gradient(#5a8aff 1.75px, rgb(243 244 246) 1.75px)",
      backgroundSize: "100px 100px",
      backgroundPosition: "0 0, 50px 50px",
    }}>
      <HeroSection />

      {/* AboutMe Section */}
      <AboutMe />

      {/* Angled line between AboutMe and Timeline sections */}
      <AngledLine />

      {/* Timeline Section */}
      <Timeline />

      {/* Projects Section */}
      <Projects />

      {/* Angled line between AboutMe and Timeline sections */}
      <AngledLine />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
};


export default App;
