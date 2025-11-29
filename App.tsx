import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { AiPlanner } from './components/AiPlanner';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Activities />
        <AiPlanner />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;