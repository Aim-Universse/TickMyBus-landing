import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Goals from '../src/pages/Goals';
import Advantages from '../src/pages/Advantages'
import MissionVision from './pages/MissionVision';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="advantages">
        <Advantages />
      </div>
      <div id="goals">
        <Goals />
      </div>
      
      <div id="mission">
        <MissionVision />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;