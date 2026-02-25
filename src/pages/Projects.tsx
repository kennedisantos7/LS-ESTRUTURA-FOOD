import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';

const Projects = () => {
  const projects = [
    {
      title: 'Aumento de 300% em Vendas',
      client: 'Restaurante Sabor & Arte',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2070',
      category: 'Tráfego Pago',
    },
    {
      title: 'Rebranding e Posicionamento',
      client: 'Café do Ponto',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070',
      category: 'Branding',
    },
    {
      title: 'Estruturação Comercial',
      client: 'Burger King (Franquia)',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2070',
      category: 'Consultoria',
    },
    {
      title: 'Gestão de Redes Sociais',
      client: 'Cervejaria Artesanal',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=2074',
      category: 'Social Media',
    },
    {
      title: 'Lançamento de Delivery',
      client: 'Padaria Central',
      image: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&q=80&w=2070',
      category: 'Estratégia',
    },
    {
      title: 'Otimização de Processos',
      client: 'Rede de Pizzarias',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2070',
      category: 'Gestão',
    },
  ];

  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <section className="relative pt-48 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2070"
            alt="Projects Hero"
            className="w-full h-full object-cover opacity-20 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/70 to-dark"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Heading level={1}>
            Cases de <span className="text-gold">Sucesso</span>
          </Heading>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            Resultados extraordinários construídos através de estratégia, execução e parceria de longo prazo.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm bg-darker border border-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                    {project.category}
                  </span>
                  <Heading level={3} className="text-white group-hover:text-white transition-colors mb-2 leading-tight">
                    {project.title}
                  </Heading>
                  <p className="text-gray-400 text-sm font-light mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.client}
                  </p>
                  <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <button className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-gold transition-colors gap-2">
                      Ver Case Completo <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
