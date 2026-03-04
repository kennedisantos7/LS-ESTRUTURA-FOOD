import React from 'react';
import { Award, Users, Target, Check, Globe, TrendingUp, ShieldCheck, Database } from 'lucide-react';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';

const About = () => {
  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-darker overflow-hidden">
        <div className="absolute inset-0 z-0 text-center opacity-5 pointer-events-none select-none">
          <div className="text-[30rem] font-serif font-bold whitespace-nowrap -rotate-12 translate-y-20">ESTRUTURA</div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Sobre a LS Estrutura Food</span>
          <Heading level={1} className="mb-4 !text-4xl md:!text-6xl max-w-4xl mx-auto">
            Estrutura estratégica aplicada ao crescimento de <span className="text-gold">operações alimentícias</span>
          </Heading>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </div>
      </section>

      {/* Story & Experience */}
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                A LS Estrutura Food nasce da experiência acumulada na <span className="text-white font-semibold">LS Direção Estratégica</span>, empresa especializada em estruturação comercial e crescimento empresarial em diferentes segmentos.
              </p>
              <p>
                A vertical food surge da aplicação prática dessa base estratégica em operações alimentícias, integrando direção empresarial, Marketing 360 e tecnologia em um modelo único de crescimento.
              </p>
              <p>
                Ao atuar no setor, identificamos um padrão recorrente: empresas com bom produto, demanda ativa e potencial real de expansão, mas sem estrutura comercial, digital e operacional capaz de sustentar escala.
              </p>

              <div className="py-8 border-y border-white/10 flex flex-col gap-3">
                <span className="text-base font-light text-gray-500">Havia capacidade. Havia mercado.</span>
                <span className="text-3xl font-serif italic text-white">"Faltava <span className="text-gold">sistema."</span></span>
              </div>

              <p>
                Foi a partir dessa lacuna que consolidamos nossa <span className="text-white font-semibold">Arquitetura de Crescimento</span>, um modelo integrado que conecta estratégia, aquisição e operação para gerar previsibilidade, controle e margem real.
              </p>
              <p>
                Hoje, estruturamos operações food que desejam crescer com método, dados e visão empresarial.
              </p>

              <p className="text-white font-bold uppercase tracking-widest text-sm pt-4">
                Não somos agência. <span className="text-gold">Somos arquitetura de crescimento aplicada.</span>
              </p>
            </div>
          </div>

          <div className="bg-[#0a1a29] p-8 md:p-12 border border-white/5 relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full translate-x-12 -translate-y-12"></div>

            <Heading level={2} className="!text-2xl mb-8">
              Nossa Base <span className="text-gold">Estratégica</span>
            </Heading>

            <span className="text-gold text-xs font-bold uppercase tracking-widest block">LS Direção Estratégica</span>
            <span className="text-gray-300 text-xs font-medium tracking-wide mb-10 block mt-1">→ base que sustenta a vertical food:</span>

            <ul className="space-y-6 mb-12">
              {[
                'Estruturação comercial e crescimento empresarial',
                'Direção empresarial aplicada a operações alimentícias',
                'Marketing 360 integrado à operação',
                'Tecnologia e automação orientadas à escala',
                'Arquitetura de crescimento com previsibilidade e margem real'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-1 group-hover:bg-gold transition-colors">
                    <Check className="text-gold group-hover:text-dark" size={12} />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm italic text-gray-500">
                Nossa atuação integra visão empresarial e execução digital em um modelo único de crescimento.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section cream>
        <div className="text-center mb-12 lg:mb-20">
          <span className="text-terracotta text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Fundamentos</span>
          <Heading level={2} className="!text-dark">
            Princípios que guiam nosso <span className="text-terracotta">Trabalho</span>
          </Heading>
          <div className="w-20 h-1 bg-terracotta mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck size={40} />,
              title: 'Resultado com Estrutura',
              desc: 'Crescimento sustentável exige processo, indicadores e controle de margem.'
            },
            {
              icon: <Users size={40} />,
              title: 'Parceria Estratégica',
              desc: 'Não atuamos como fornecedor. Atuamos como extensão estratégica da operação.'
            },
            {
              icon: <Database size={40} />,
              title: 'Decisão Baseada em Dados',
              desc: 'Toda estrutura é construída com base em indicadores reais, não suposições.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-12 border border-dark/5 hover:border-terracotta/20 transition-all duration-500 group shadow-sm hover:shadow-xl flex flex-col items-center text-center">
              <div className="text-terracotta mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <Heading level={3} className="!text-xl !text-dark group-hover:text-terracotta transition-colors mb-4">
                {item.title}
              </Heading>
              <p className="text-dark/60 leading-relaxed font-light text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section dark>
        <div className="text-center mb-12 lg:mb-20">
          <Heading level={2}>
            Nosso Time de <span className="text-gold">Especialistas</span>
          </Heading>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mt-4">
            Conheça quem coordena o time LS Estrutura Food.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Lucas Silveira',
              role: 'CEO & Estrategista Empresarial',
              image: 'https://i.imgur.com/z4mSrzy.jpeg',
              bio: 'Especialista em gestão de alta performance e expansão de unidades. Responsável pela arquitetura comercial e pela estrutura estratégica que transforma gargalos operacionais em lucro real.'
            },
            {
              name: 'Kenidi Anderson',
              role: 'Co-fundador & Head de Tráfego e Tecnologia',
              image: 'https://i.imgur.com/oDX7U5b.png',
              bio: 'Arquiteto de stack tecnológica e aquisição direta. Estrutura funis, automações e engenharia de tráfego orientados à escala e previsibilidade.'
            },
            {
              name: 'Sarah Frutuoso',
              role: 'Head de Marketing Digital & Posicionamento',
              image: 'https://i.imgur.com/hGH2OLp.jpeg',
              bio: 'Estrategista de marca especializada em posicionamento e copy estratégica. Constrói autoridade digital e diferencia operações food em mercados competitivos.'
            },
          ].map((member, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 overflow-hidden rounded-sm aspect-[4/5] bg-darker border border-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
              <p className="text-gold/60 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">{member.role}</p>
              <div className="h-0.5 w-8 bg-gold/30 mb-4 group-hover:w-full transition-all duration-500"></div>
              <p className="text-gray-400 text-xs leading-relaxed font-light opacity-80">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
