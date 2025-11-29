import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Nosotros', href: '#about' },
    { label: 'Actividades', href: '#activities' },
    { label: 'IA Planner', href: '#planner' },
    { label: 'Precios', href: '#pricing' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
           <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold text-sm ${isScrolled ? 'border-wave text-wave' : 'border-white text-white'}`}>
              W2P
           </div>
           <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
             Wave2Peak
           </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={`font-medium text-sm hover:opacity-80 transition-opacity ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <button className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
            isScrolled 
              ? 'bg-wave text-white hover:bg-wave-dark' 
              : 'bg-white text-wave hover:bg-slate-100'
          }`}>
            Reservar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen 
            ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> 
            : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          }
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-slate-800 font-medium py-2 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};