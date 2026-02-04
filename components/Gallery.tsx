import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Zap, Clock, Star, MousePointer2 } from 'lucide-react';

interface StyleFighter {
  id: number;
  name: string;
  image: string;
  description: string;
  stats: {
    fade: number; // 0-100
    maintenance: number;
    attractiveness: number;
  };
  specialty: string;
}

const fighters: StyleFighter[] = [
  {
    id: 1,
    name: 'The Fade Master',
    image: 'https://picsum.photos/600/800?random=10&grayscale',
    description: 'Degradê agressivo nas laterais com topo texturizado. Ideal para quem quer marcar presença.',
    stats: { fade: 98, maintenance: 60, attractiveness: 90 },
    specialty: 'Navalha Afiada'
  },
  {
    id: 2,
    name: 'Classic Gentleman',
    image: 'https://picsum.photos/600/800?random=20&grayscale',
    description: 'Corte tesoura clássico, lateral comportada. Elegância intemporal para o dia-a-dia.',
    stats: { fade: 40, maintenance: 30, attractiveness: 85 },
    specialty: 'Tesoura Precision'
  },
  {
    id: 3,
    name: 'Urban Mullet',
    image: 'https://picsum.photos/600/800?random=30&grayscale',
    description: 'O regresso dos anos 80 com uma pegada moderna. Curto à frente, festa atrás.',
    stats: { fade: 75, maintenance: 80, attractiveness: 95 },
    specialty: 'Estilo Radical'
  },
  {
    id: 4,
    name: 'Buzz Cut Pro',
    image: 'https://picsum.photos/600/800?random=40&grayscale',
    description: 'Militar, prático e limpo. Para quem não quer perder tempo no espelho.',
    stats: { fade: 85, maintenance: 10, attractiveness: 70 },
    specialty: 'Velocidade Máxima'
  },
];

const StatBar: React.FC<{ label: string; value: number; icon: React.ReactNode }> = ({ label, value, icon }) => (
  <div className="mb-3">
    <div className="flex justify-between text-xs uppercase tracking-wider mb-1 text-gray-400">
      <div className="flex items-center gap-1">{icon} {label}</div>
      <span>{value}%</span>
    </div>
    <div className="h-2 w-full bg-gray-800 rounded-sm overflow-hidden border border-white/10">
      <div 
        className="h-full bg-white transition-all duration-500 ease-out"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const Gallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(1);
  const selectedFighter = fighters.find(f => f.id === selectedId) || fighters[0];

  return (
    <section id="galeria" className="py-12 md:py-24 bg-brand-black overflow-hidden relative">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-3xl md:text-6xl font-bold text-white uppercase tracking-tighter glitch-effect">
              Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Fighter</span>
            </h2>
            <p className="text-gray-400 mt-2 uppercase tracking-[0.3em] text-[10px] md:text-sm animate-pulse">
              Escolhe o teu estilo para o combate diário
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Desktop Character List (Thumbnails) - Hidden on Mobile */}
          <div className="hidden lg:block lg:w-1/3 lg:order-1">
            <ScrollReveal direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {fighters.map((fighter) => (
                  <button
                    key={fighter.id}
                    onClick={() => setSelectedId(fighter.id)}
                    className={`relative aspect-square group overflow-hidden border-2 transition-all duration-200 ${
                      selectedId === fighter.id 
                        ? 'border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105 z-10' 
                        : 'border-white/20 hover:border-white/60 grayscale hover:grayscale-0'
                    }`}
                  >
                    <img 
                      src={fighter.image} 
                      alt={fighter.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-1 text-center">
                      <span className={`text-[10px] font-display uppercase tracking-widest ${selectedId === fighter.id ? 'text-white' : 'text-gray-400'}`}>
                        {fighter.name}
                      </span>
                    </div>
                    {selectedId === fighter.id && (
                       <div className="absolute inset-0 border-4 border-white/10 animate-pulse pointer-events-none"></div>
                    )}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-sm hidden lg:block">
                <h4 className="text-white font-display uppercase tracking-widest mb-4 flex items-center gap-2">
                  <MousePointer2 className="w-4 h-4" /> Controls
                </h4>
                <div className="flex gap-4 text-xs text-gray-400 uppercase">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 border border-white/20 flex items-center justify-center rounded bg-black">Click</span>
                    <span>Select</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-16 h-6 border border-white/20 flex items-center justify-center rounded bg-black">Scroll</span>
                    <span>Navigate</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Selected Character Display */}
          <div className="w-full lg:w-2/3 order-1 lg:order-2 flex flex-col md:flex-row bg-brand-dark border border-white/10 relative overflow-hidden group">
            {/* Background color splash based on selection */}
             <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
            
            {/* Big Image */}
            <div className="w-full md:w-1/2 h-[280px] sm:h-[400px] md:h-auto relative z-0">
               <img 
                 key={selectedFighter.id} // Force re-render for animation
                 src={selectedFighter.image} 
                 alt={selectedFighter.name}
                 className="w-full h-full object-cover animate-in fade-in zoom-in duration-500"
               />
            </div>

            {/* Mobile Selector Strip - Visible only on mobile */}
            <div className="lg:hidden flex gap-3 overflow-x-auto p-4 border-b border-white/10 scrollbar-hide bg-black/40 backdrop-blur-md z-20">
              {fighters.map((fighter) => (
                <button
                  key={fighter.id}
                  onClick={() => setSelectedId(fighter.id)}
                  className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 border-2 transition-all duration-200 overflow-hidden ${
                    selectedId === fighter.id 
                      ? 'border-white scale-105 opacity-100' 
                      : 'border-white/20 opacity-60'
                  }`}
                >
                  <img src={fighter.image} alt={fighter.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Info / Stats Panel */}
            <div className="w-full md:w-1/2 p-6 md:p-8 relative z-20 flex flex-col justify-between bg-black/50 backdrop-blur-sm md:bg-transparent">
              <div>
                <div className="mb-2 inline-block bg-white text-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest transform -skew-x-12">
                  {selectedFighter.specialty}
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-white font-bold uppercase leading-none mb-3 md:mb-4 italic">
                  {selectedFighter.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6 md:mb-8 leading-relaxed border-l-2 border-white/20 pl-4 h-auto md:min-h-[3rem]">
                  {selectedFighter.description}
                </p>

                <div className="space-y-3 md:space-y-4">
                  <StatBar 
                    label="Nível do Fade" 
                    value={selectedFighter.stats.fade} 
                    icon={<Zap className="w-3 h-3" />} 
                  />
                  <StatBar 
                    label="Manutenção" 
                    value={selectedFighter.stats.maintenance} 
                    icon={<Clock className="w-3 h-3" />} 
                  />
                  <StatBar 
                    label="Estilo" 
                    value={selectedFighter.stats.attractiveness} 
                    icon={<Star className="w-3 h-3" />} 
                  />
                </div>
              </div>

              <div className="mt-6 md:mt-8 pt-6 border-t border-white/10">
                <button 
                  onClick={() => document.getElementById('marcacao')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-white text-black font-bold uppercase py-3 md:py-4 tracking-[0.2em] text-xs md:text-sm hover:bg-gray-200 transition-all active:scale-95 flex items-center justify-center gap-2 group-hover:animate-pulse"
                >
                  <span className="blink-text">Select This Style</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .blink-text {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Gallery;