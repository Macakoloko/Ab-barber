import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Barbershop Atmosphere" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-brand-black/60 to-brand-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <ScrollReveal direction="up" delay={100}>
          <p className="text-gray-400 font-medium tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">
            Caminha, Portugal
          </p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={300}>
          <h1 className="font-display font-bold text-5xl md:text-8xl text-white uppercase leading-none mb-6">
            Estilo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Underground</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={500}>
          <p className="text-gray-300 text-lg md:text-xl max-w-md md:mx-0 mx-auto mb-10 leading-relaxed font-light">
            Não é só um corte. É a tua identidade. <br/>
            Especialistas em fades, cortes clássicos e design de barba.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={700}>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => document.getElementById('serviços')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              Ver Serviços
            </button>
            <button 
              onClick={() => document.getElementById('marcacao')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/30 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Agendar Agora
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;