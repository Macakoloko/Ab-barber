import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { id: 1, name: 'Corte Cabelo', price: '13€', description: 'Inclui oferta de lavagem.' },
  { id: 2, name: 'Cabelo + Barba', price: '15€', description: 'Combo completo com oferta de lavagem.' },
  { id: 3, name: 'Barba', price: '5€', description: 'Modelagem e acabamento profissional.' },
  { id: 4, name: 'Madeixas', price: '30€', description: 'Iluminação e estilo para o teu visual.' },
  { id: 5, name: 'Descoloração', price: '40€', description: 'Para quem procura uma mudança radical.' },
  { id: 6, name: 'Descol. + Coloração', price: '60€', description: 'A transformação total do teu look.' },
];

const Services: React.FC = () => {
  return (
    <section id="serviços" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-16 uppercase text-center md:text-left">
            Tabela de <span className="text-gray-600">Preços</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100} direction="left" className="group">
              <div className="border-b border-white/10 pb-6 hover:border-white transition-colors duration-500 cursor-default">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="font-display text-2xl text-white font-medium uppercase tracking-wide group-hover:pl-2 transition-all duration-300">
                    {service.name}
                  </h3>
                  <span className="font-bold text-xl text-white">{service.price}</span>
                </div>
                <p className="text-gray-500 text-sm font-light group-hover:text-gray-300 transition-colors pl-0 group-hover:pl-2">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;