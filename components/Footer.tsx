import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Footer: React.FC = () => {
  return (
    <footer id="localização" className="bg-brand-dark pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          <ScrollReveal direction="up" delay={0}>
            <h3 className="font-display text-2xl text-white uppercase font-bold mb-6">Localização</h3>
            <p className="text-gray-400 font-light mb-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>
                Av. Manuel Xavier 88 BS<br />
                4910-105 Caminha<br />
                Portugal
              </span>
            </p>
            <div className="h-40 w-full bg-gray-800 rounded-lg mt-4 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
               {/* Mock Map */}
               <img src="https://picsum.photos/400/200?blur=2" alt="Mapa" className="w-full h-full object-cover opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-black text-white px-3 py-1 text-xs uppercase tracking-widest">Ver no Maps</span>
               </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h3 className="font-display text-2xl text-white uppercase font-bold mb-6">Horário</h3>
            <ul className="space-y-3 text-gray-400 font-light">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Seg - Sex</span>
                <span className="text-white">10:00 - 20:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sábado</span>
                <span className="text-white">09:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-brand-gray">Fechado</span>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h3 className="font-display text-2xl text-white uppercase font-bold mb-6">Contacto</h3>
            <p className="text-gray-400 font-light mb-6 flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <a href="tel:+351915983446" className="hover:text-white transition-colors">+351 915 983 446</a>
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>&copy; 2024 AB Barber Caminha. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 font-display uppercase tracking-wider">Estilo Underground / Sports</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;