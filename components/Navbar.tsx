import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Instagram, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const normalizedId = id.toLowerCase().replace('ç', 'c').replace('ã', 'a').split(' ')[0];
    const element = document.getElementById(normalizedId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: 'Serviços', id: 'serviços' },
    { name: 'Marcação', id: 'marcacao' },
    { name: 'Galeria', id: 'galeria' },
    { name: 'Localização', id: 'localização' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
          isScrolled || isMenuOpen ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer z-[70]" onClick={() => scrollToSection('hero')}>
            <Scissors className="text-white w-6 h-6 rotate-90" />
            <span className="font-display font-bold text-2xl tracking-tighter text-white">
              AB <span className="text-gray-400">BARBER</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name)}
                className="text-sm font-medium text-gray-300 hover:text-white uppercase tracking-widest transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('marcação')} 
              className="bg-white text-black px-6 py-2.5 font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95"
            >
              Marcar
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white z-[70] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-brand-black flex flex-col pt-32 pb-12 px-8 md:hidden"
          >
            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-white/[0.02] pointer-events-none uppercase italic select-none">
              Underground
            </div>

            <div className="flex flex-col gap-8 relative z-10">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => scrollToSection(item.name)}
                  className="text-left group"
                >
                  <span className="text-gray-600 font-mono text-xs mb-1 block">0{index + 1}</span>
                  <span className="text-5xl font-display uppercase italic text-white group-hover:text-gray-400 transition-colors">
                    {item.name}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="mt-auto relative z-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col gap-6"
              >
                <button 
                  onClick={() => scrollToSection('marcação')}
                  className="w-full bg-white text-black py-5 font-display text-2xl uppercase italic"
                >
                  Agendar Agora
                </button>
                
                <div className="flex justify-between items-center pt-6 border-t border-white/10">
                  <div className="flex gap-4">
                    <Instagram className="text-gray-400 hover:text-white transition-colors cursor-pointer" size={20} />
                    <a href="tel:+351915983446">
                      <Phone className="text-gray-400 hover:text-white transition-colors" size={20} />
                    </a>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Av.+Manuel+Xavier+88+BS+4910-105+Caminha+Portugal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="text-gray-400 hover:text-white transition-colors" size={20} />
                    </a>
                  </div>
                  <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                    Caminha, Portugal
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
