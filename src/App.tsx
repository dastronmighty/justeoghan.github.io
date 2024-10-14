import React from 'react';

import HeroSection from './components/Hero';
import AboutMe from './components/aboutme/Aboutme';
import Timeline from './components/timeline';
import Contact from './components/contact';
import Footer from './components/footer';
import Projects from './components/projects_certs';
import Achievements from './components/achievements';

import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App" style={{
      backgroundColor: "rgb(243 244 246)"
    }}>
      <HeroSection />
      <div className="container mx-auto px-4 text-center py-8">
        <Link to="/blog" className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
          Visit the Blog
        </Link>
      </div>
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
