import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Normaliza o ID para coincidir com os IDs das seções (ex: "Marcação" -> "marcacao")
    const normalizedId = id.toLowerCase().replace('ç', 'c').replace('ã', 'a').split(' ')[0];
    const element = document.getElementById(normalizedId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <Scissors className="text-white w-6 h-6 rotate-90" />
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            AB <span className="text-gray-400">BARBER</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {['Serviços', 'Marcação', 'Galeria', 'Localização'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium text-gray-300 hover:text-white uppercase tracking-widest transition-colors"
            >
              {item}
            </button>
          ))}
          <button onClick={() => scrollToSection('localização')} className="bg-white text-black px-5 py-2 font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors">
            Marcar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-black border-b border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {['Serviços', 'Marcação', 'Galeria', 'Localização'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-left text-lg font-display uppercase tracking-widest text-gray-300 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;