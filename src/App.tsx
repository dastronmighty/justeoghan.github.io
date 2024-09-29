import React from 'react';
import HeroSection from './components/Hero/HeroSections';
import AboutMe from './components/aboutme/Aboutme';
import AngledLine from './components/angledLine';
import Timeline from './components/timeline/TimeLine';
import Contact from './components/contact';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeroSection />

      {/* AboutMe Section */}
      <AboutMe />

      {/* Angled line between AboutMe and Timeline sections */}
      <AngledLine />

      {/* Timeline Section */}
      <Timeline />

      {/* Angled line between AboutMe and Timeline sections */}
      <AngledLine />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
};


export default App;
