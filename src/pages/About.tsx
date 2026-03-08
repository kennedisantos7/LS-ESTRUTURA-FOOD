import React from 'react';
import { Award, Users, Target, Check, Globe, TrendingUp, ShieldCheck, Database } from 'lucide-react';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';
import AnimatedSection from '../components/common/AnimatedSection';

const About = () => {
  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-darker overflow-hidden">
        <div className="absolute inset-0 z-0 text-center opacity-5 pointer-events-none select-none">
          <div className="text-[30rem] font-serif font-bold whitespace-nowrap -rotate-12 translate-y-20">ESTRUTURA</div>
        </div>
        <AnimatedSection animation="zoom-in" className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Sobre a LS Estrutura Food</span>
          <Heading level={1} className="mb-4 !text-4xl md:!text-6xl max-w-4xl mx-auto">
            Estrutura estratégica aplicada ao crescimento de <span className="text-gold">operações alimentícias</span>
          </Heading>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </AnimatedSection>
      </section>

      {/* Story & Experience */}
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimatedSection animation="enter-left" className="space-y-8">
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
          </AnimatedSection>

          <AnimatedSection animation="enter-right" className="bg-[#0a1a29] p-8 md:p-12 border border-white/5 relative group">
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
          </AnimatedSection>
        </div>
      </Section>

      {/* Principles */}
      <section className="relative py-20 md:py-28 lg:py-36 bg-darker overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03] overflow-hidden">
          <span className="text-[16rem] font-serif font-bold text-white whitespace-nowrap -rotate-6">BASE</span>
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="zoom-in" className="text-center mb-16 lg:mb-24">
            <span className="inline-flex items-center gap-3 text-terracotta text-[10px] font-black uppercase tracking-[0.4em] mb-5">
              <span className="w-8 h-px bg-terracotta/60" />
              Fundamentos
              <span className="w-8 h-px bg-terracotta/60" />
            </span>
            <Heading level={2} className="!text-white !text-4xl md:!text-6xl !mb-0">
              Princípios que guiam nosso <span className="text-terracotta italic font-serif">Trabalho</span>
            </Heading>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <ShieldCheck size={36} />,
                number: '01',
                title: 'Resultado com Estrutura',
                desc: 'Crescimento sustentável exige processo, indicadores e controle de margem.',
                accent: 'gold',
                iconBg: 'bg-gold/10 text-gold',
                iconHover: 'group-hover:bg-gold group-hover:text-dark',
                glow: 'bg-gold/10',
                numColor: 'text-gold/10',
              },
              {
                icon: <Users size={36} />,
                number: '02',
                title: 'Parceria Estratégica',
                desc: 'Não atuamos como fornecedor. Atuamos como extensão estratégica da operação.',
                accent: 'terracotta',
                iconBg: 'bg-terracotta/10 text-terracotta',
                iconHover: 'group-hover:bg-terracotta group-hover:text-white',
                glow: 'bg-terracotta/10',
                numColor: 'text-terracotta/10',
              },
              {
                icon: <Database size={36} />,
                number: '03',
                title: 'Decisão Baseada em Dados',
                desc: 'Toda estrutura é construída com base em indicadores reais, não suposições.',
                accent: 'blue',
                iconBg: 'bg-blue-500/10 text-blue-400',
                iconHover: 'group-hover:bg-blue-500 group-hover:text-white',
                glow: 'bg-blue-500/10',
                numColor: 'text-blue-400/10',
              },
            ].map((item, idx) => (
              <AnimatedSection
                key={idx}
                animation="zoom-in"
                delay={idx * 200}
                className="group relative bg-[#071622] p-10 rounded-3xl border border-white/5 hover:border-gold/30 transition-all duration-700 overflow-hidden hover:-translate-y-3 shadow-2xl h-full"
              >
                <div className={`absolute -top-4 -right-2 text-[8rem] font-serif font-black ${item.numColor} leading-none select-none transition-all duration-700 group-hover:scale-110 group-hover:opacity-60`}>
                  {item.number}
                </div>
                <div className={`absolute -bottom-10 -left-10 w-40 h-40 ${item.glow} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl ${item.iconBg} ${item.iconHover} flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 shadow-2xl`}>
                    {item.icon}
                  </div>
                  <Heading level={3} className="!text-white !text-xl md:!text-2xl !font-bold !mb-4">
                    {item.title}
                  </Heading>
                  <p className="text-gray-400 leading-relaxed text-sm font-light">
                    {item.desc}
                  </p>
                  <div className={`mt-10 h-0.5 bg-gradient-to-r from-transparent ${item.accent === 'gold' ? 'via-gold/50' : item.accent === 'terracotta' ? 'via-terracotta/50' : 'via-blue-500/50'} to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000`} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <Section dark>
        <AnimatedSection animation="zoom-in" className="text-center mb-12 lg:mb-20">
          <Heading level={2}>
            Nosso Time de <span className="text-gold">Especialistas</span>
          </Heading>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mt-4">
            Conheça quem coordena o time LS Estrutura Food.
          </p>
        </AnimatedSection>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 lg:gap-10 pb-12 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar snap-x snap-mandatory">
          {[
            {
              name: 'Lucas Silveira',
              role: 'CEO & Estrategista Empresarial',
              image: 'https://i.imgur.com/sCSzDNm.png',
              bio: 'Especialista em gestão de alta performance e expansão de unidades. Responsável pela arquitetura comercial e pela estrutura estratégica que transforma gargalos operacionais em lucro real.'
            },
            {
              name: 'Kennidi Anderson',
              role: 'Co-fundador & Head de Tráfego e Tecnologia',
              image: 'https://i.imgur.com/eJwamKp.png',
              bio: 'Arquiteto de stack tecnológica e aquisição direta. Estrutura funis, automações e engenharia de tráfego orientados à escala e previsibilidade.'
            },
            {
              name: 'Sarah Frutuoso',
              role: 'Head de Marketing Digital & Posicionamento',
              image: 'https://i.imgur.com/hGH2OLp.jpeg',
              bio: 'Estrategista de marca especializada em posicionamento e copy estratégica. Constrói autoridade digital e diferencia operações food em mercados competitivos.'
            },
          ].map((member, index) => (
            <AnimatedSection
              key={index}
              animation="zoom-in"
              delay={index * 200}
              className="group flex flex-col bg-[#071622] p-6 lg:p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-700 min-w-[260px] sm:min-w-[320px] lg:min-w-0 snap-center shadow-2xl hover:-translate-y-2 h-full"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl aspect-square sm:aspect-[4/5] bg-darker border border-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071622] via-transparent to-transparent opacity-40"></div>
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
                <p className="text-gold/80 text-[10px] uppercase tracking-[0.2em] font-black mb-4">{member.role}</p>

                <div className="h-0.5 w-8 bg-gold/30 mb-5 group-hover:w-16 transition-all duration-500"></div>

                <p className="text-gray-400 text-xs leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
                  {member.bio}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-[9px] font-black text-gold uppercase tracking-widest">Especialista LS</span>
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Check size={14} />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </AnimatedSection>
          ))}
        </div>

        <div className="flex lg:hidden justify-center items-center gap-2 mt-2">
          <div className="w-6 h-1 bg-gold/40 rounded-full"></div>
          <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Arraste para o lado</span>
          <div className="w-6 h-1 bg-white/10 rounded-full"></div>
        </div>
      </Section>
    </div>
  );
};

export default About;
