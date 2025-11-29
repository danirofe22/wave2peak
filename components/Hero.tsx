import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-white">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-wave-dark/80 to-peak-dark/80 z-10"></div>
        <img 
          src="https://picsum.photos/id/1036/1920/1080" 
          alt="Snow and Sea" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center items-center space-x-4 animate-fade-in-down">
          <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase border border-white/30">
            Granada • Sierra Nevada • Costa Tropical
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
          <span className="text-wave-light">WAVE</span> TO <span className="text-gray-200">PEAK</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto drop-shadow-md">
          Wild & Safe. La agencia definitiva de multi-aventura que integra experiencias de Mar y Montaña durante todo el año.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#planner" className="px-8 py-4 bg-wave hover:bg-wave-dark text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg border-2 border-transparent">
            Planifica tu Aventura
          </a>
          <a href="#activities" className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-lg transition-all border-2 border-white backdrop-blur-sm">
            Explora Actividades
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};