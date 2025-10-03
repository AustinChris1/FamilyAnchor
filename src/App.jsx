import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Founder from './components/Founder';


function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Mission />
      <Gallery />
      <Impact />
      <Programs />
      <Stories />
      <GetInvolved />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <div className="bg-cream-white font-raleway w-full">
            <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/founder" element={<Founder />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}