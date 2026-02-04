import React from 'react';
import { Calendar, Phone, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AIStyleConsultant: React.FC = () => {
  return (
    <section id="marcacao" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gray/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <ScrollReveal direction="right">
          <div>
            <div className="flex items-center gap-3 mb-4 text-white/80">
              <Calendar className="w-5 h-5" />
              <span className="uppercase tracking-widest text-sm font-bold">Booking System</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight">
              Marcação <br />
              <span className="text-gray-500">Simplificada</span>
            </h2>
            <p className="text-gray-400 mb-8 font-light text-lg">
              Sem complicações. Escolhe o teu barbeiro, o horário e o corte em segundos.
            </p>
            
            <div className="hidden md:block">
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  Agenda 24/7 Disponível
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  Cancelamento Gratuito (até 2h antes)
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  Lembrete por SMS
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={200}>
          <div className="bg-brand-black border border-white/10 p-6 md:p-10 relative group transition-all hover:border-white/20">
            {/* Status Badge */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-500 text-[10px] font-bold uppercase tracking-widest">Online</span>
            </div>

            <h3 className="font-display text-2xl text-white uppercase mb-8">
              Próxima Vaga: <span className="text-gray-500">Hoje 14:30</span>
            </h3>

            <div className="space-y-4">
              <button 
                onClick={() => window.open('https://buk.pt/marca-aqui', '_blank')}
                className="w-full bg-white text-black font-display font-bold text-xl md:text-2xl uppercase py-5 md:py-6 tracking-wider hover:bg-gray-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3 group/btn"
              >
                Agendar Online
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                 <button className="border border-white/10 text-white py-4 uppercase text-[10px] md:text-xs font-bold tracking-widest hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                 </button>
                 <a href="tel:+351915983446" className="border border-white/10 text-white py-4 uppercase text-[10px] md:text-xs font-bold tracking-widest hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> Ligar
                 </a>
              </div>
            </div>

            <p className="mt-8 text-center text-gray-500 text-xs uppercase tracking-widest font-mono">
              AB Barber • Caminha
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default AIStyleConsultant;