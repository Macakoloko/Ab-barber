import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIStyleConsultant from './components/AIStyleConsultant';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AIStyleConsultant />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;