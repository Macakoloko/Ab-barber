import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const images = [
  {
    url: 'https://s13.gifyu.com/images/bvOoE.gif',
    title: 'MOICANO',
    description: 'Arrojado e rebelde. Uma afirmação de individualidade.',
    stats: { precisão: 90, estilo: 98, velocidade: 85 },
    size: 'col-span-2 row-span-2',
  },
  {
    url: 'https://s13.gifyu.com/images/bvOo9.gif',
    title: 'TAPER FADE',
    description: 'Arestas limpas com um degradê suave.',
    stats: { precisão: 95, estilo: 90, velocidade: 80 },
    size: 'col-span-2 row-span-1',
  },
  {
    url: 'https://s13.gifyu.com/images/bvOo3.gif',
    title: 'MID FADE',
    description: 'O equilíbrio perfeito entre o clássico e o moderno.',
    stats: { precisão: 92, estilo: 92, velocidade: 85 },
    size: 'col-span-1 row-span-1',
  },
  {
    url: 'https://s13.gifyu.com/images/bvOow.gif',
    title: 'LOW FADE',
    description: 'Subtil e sofisticado.',
    stats: { precisão: 94, estilo: 88, velocidade: 75 },
    size: 'col-span-1 row-span-1',
  },
  {
    url: 'https://s13.gifyu.com/images/bvOoh.gif',
    title: 'MID TAPER',
    description: 'Patilhas e nuca bem definidas.',
    stats: { precisão: 96, estilo: 85, velocidade: 90 },
    size: 'col-span-2 row-span-1',
  },
  {
    url: 'https://s13.gifyu.com/images/bvOof.gif',
    title: 'HIGH TAPER',
    description: 'Alto contraste para o máximo impacto.',
    stats: { precisão: 88, estilo: 95, velocidade: 85 },
    size: 'col-span-2 row-span-1',
  },
];

const BentoGallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<typeof images[0] | null>(null);

  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImg]);

  return (
    <section id="bento-gallery" className="relative py-24 bg-brand-black overflow-hidden">
      {/* Scanline Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none z-40 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-display text-4xl md:text-6xl text-white uppercase leading-none">
                Seleção de <span className="text-gray-500">Plantel</span>
              </h2>
              <p className="text-gray-400 mt-4 font-mono text-sm tracking-widest">
                [ SELECIONA O TEU ESTILO_ ]
              </p>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-xs font-mono text-gray-600 uppercase tracking-tighter">
                Estado do Sistema: Online<br />
                Localização: Caminha_PT
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden border border-white/5 rounded-lg cursor-pointer ${img.size}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 0.98 }}
              onClick={() => setSelectedImg(img)}
            >
              {/* Image */}
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                referrerPolicy="no-referrer"
              />

              {/* Overlay - Game Style */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="space-y-2"
                >
                  <h3 className="font-display text-2xl text-white italic tracking-tighter">
                    {img.title}
                  </h3>
                  
                  {/* Stats Bars */}
                  <div className="space-y-1">
                    {Object.entries(img.stats).map(([stat, value]) => (
                      <div key={stat} className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-gray-400 uppercase w-12">{stat}</span>
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${value}%` }}
                            className="h-full bg-white"
                          />
                        </div>
                        <span className="text-[10px] font-mono text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Mobile Indicator */}
              <div className="absolute bottom-2 right-2 md:hidden">
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Game Footer Info */}
        <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-600 uppercase font-mono">Dificuldade</span>
              <span className="text-xs text-white font-mono">LENDÁRIO</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-600 uppercase font-mono">Época</span>
              <span className="text-xs text-white font-mono">2024/25</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Servidor: Caminha_Main_01</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Selection Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="min-h-full w-full flex items-center justify-center p-4 md:p-12 relative">
              <button 
                onClick={() => setSelectedImg(null)}
                className="fixed top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-[110]"
              >
                <X size={32} />
              </button>

              <div className="container max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center pt-12 md:pt-0">
                {/* Left Side: Image with Glitch/Game Effect */}
                <motion.div 
                  initial={{ x: -100, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ type: "spring", damping: 20 }}
                  className="relative aspect-[3/4] md:aspect-square group"
                >
                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl overflow-hidden">
                  <img 
                    src={selectedImg.url} 
                    alt={selectedImg.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Scanline on modal image */}
                  <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-white" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-white" />
              </motion.div>

              {/* Right Side: Stats & Info */}
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 20, delay: 0.1 }}
                className="space-y-8"
              >
                <div>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-500 font-mono text-sm tracking-[0.5em] uppercase block mb-2"
                  >
                    Estilo Selecionado_
                  </motion.span>
                  <h2 className="font-display text-6xl md:text-8xl text-white uppercase italic leading-none tracking-tighter">
                    {selectedImg.title}
                  </h2>
                </div>

                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                  {selectedImg.description}
                </p>

                <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Métricas de Desempenho</h4>
                  {Object.entries(selectedImg.stats).map(([stat, value], idx) => (
                    <div key={stat} className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-mono text-white uppercase">{stat}</span>
                        <span className="text-2xl font-display text-white italic">{value}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ delay: 0.3 + (idx * 0.1), duration: 0.8, ease: "circOut" }}
                          className="h-full bg-gradient-to-r from-gray-600 to-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedImg(null);
                    document.getElementById('marcacao')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-white text-black py-6 font-display text-2xl uppercase italic flex items-center justify-center gap-4 group"
                >
                  Confirmar Seleção
                  <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BentoGallery;
