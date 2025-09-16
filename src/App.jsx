import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Impact from './components/Impact';
import Programs from './components/Programs';
import Stories from './components/Stories';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <div className="bg-cream-white font-raleway w-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Gallery/>
        <Impact />
        <Programs />
        <Stories />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}