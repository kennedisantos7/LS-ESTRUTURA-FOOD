import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';
import AnimatedSection from '../components/common/AnimatedSection';

const Projects = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 bg-darker overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2070"
            alt="Projects Hero"
            className="w-full h-full object-cover opacity-20 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/70 to-dark"></div>
        </div>
        <AnimatedSection animation="zoom-in" className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Heading level={1}>
            Aplicação <span className="text-gold">Real</span>
          </Heading>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            Resultados extraordinários construídos através de estratégia, execução e parceria de longo prazo.
          </p>
        </AnimatedSection>
      </section>

      {/* ─── Case 1 ─── */}
      <Section dark id="operacao-food" className="border-t border-white/5 pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-24 lg:pb-48 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimatedSection animation="enter-left" className="space-y-8 lg:space-y-10">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Destaque</span>
              <Heading level={2} className="!text-4xl md:!text-5xl lg:!text-6xl !font-serif !mb-6 italic">
                Estrutura Integrada: <span className="text-gold">Indústria + 4 Pontos de Venda</span>
              </Heading>
              <div className="w-24 h-0.5 bg-gold/50"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-darker p-10 border-l-4 border-gold shadow-2xl">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">O Desafio</h4>
                <p className="text-gray-400 font-light leading-relaxed text-lg italic mb-4">
                  Aplicação prática no Chá das Cinco — operação com indústria própria e múltiplas unidades.
                </p>
                <ul className="space-y-3">
                  {[
                    'Havia capacidade produtiva, demanda e qualidade reconhecida.',
                    'Faltava estrutura conectando produção, vendas e aquisição digital.',
                    'O crescimento acontecia por esforço, não por sistema.',
                    'A ausência de arquitetura comercial integrada gerava fragmentação, perda de eficiência e baixa previsibilidade.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 font-light text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0 mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Arquitetura Implementada</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  Implementamos nossa metodologia de Arquitetura Comercial integrada ao Marketing 360 e soluções de Tecnologia, unificando processos, controlando as pontas e consolidando o funil digital.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Estruturação Completa das Unidades',
                    'Desenvolvimento de Funil Próprio',
                    'Consolidação da Presença Digital',
                    'Implementação de Tecnologia e CRM',
                    'Alinhamento entre Indústria e Lojas',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-gold" />
                      </div>
                      <span className="text-sm font-light tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gold/5 p-8 rounded-sm space-y-4">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Transformação Estrutural</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-1">A operação passou a operar com:</p>
                <ul className="space-y-2">
                  {[
                    'Processos unificados entre indústria e lojas',
                    'Funil digital próprio estruturado',
                    'Controle estratégico sobre aquisição',
                    'Ecossistema digital independente',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 font-light text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0 mt-1.5"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">100%</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Processos Integrados</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">Escala</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Crescimento Sistêmico</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="enter-right" className="flex flex-col gap-8">
            <div className="relative group">
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-gold/5 rounded-full blur-[100px] group-hover:bg-gold/10 transition-colors"></div>
              <div className="relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
                  alt="Operação Food Industry"
                  className="w-full h-auto transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute bottom-6 -left-6 bg-gold p-6 max-w-[200px] hidden md:block group-hover:translate-x-4 transition-transform duration-500 shadow-2xl z-10">
                <p className="text-dark font-serif italic text-sm font-bold">"Da fabricação ao cliente final, tudo estruturado."</p>
              </div>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=2000"
                  alt="Chá das Cinco Case Packaging"
                  className="w-full h-auto transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* ─── Case 2 ─── */}
      <Section cream id="expansao" className="py-24 md:py-32 lg:py-48 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimatedSection animation="enter-left" className="order-2 lg:order-1 flex flex-col gap-8">
            <div className="relative group">
              <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-terracotta/5 rounded-full blur-[100px] group-hover:bg-terracotta/10 transition-colors"></div>
              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2070"
                  alt="Franquias BK Case Management"
                  className="w-full h-auto transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute top-6 -right-6 bg-terracotta p-6 max-w-[200px] hidden md:block group-hover:-translate-x-4 transition-transform duration-500 shadow-2xl z-10">
                <p className="text-white font-serif italic text-sm font-bold">"A padronização foi o divisor de águas para a nossa expansão."</p>
              </div>
            </div>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000"
                  alt="Franquias BK Case Training"
                  className="w-full h-auto transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="enter-right" className="order-1 lg:order-2 space-y-8 lg:space-y-10">
            <div>
              <span className="text-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Experiência Estratégica</span>
              <Heading level={2} className="!text-4xl md:!text-5xl lg:!text-6xl !font-serif !mb-6 italic !text-dark">
                Expansão e <span className="text-terracotta">Estrutura Comercial</span>
              </Heading>
              <div className="w-24 h-0.5 bg-terracotta/20"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-10 border-l-4 border-dark shadow-2xl">
                <h4 className="text-dark text-sm font-bold uppercase tracking-widest mb-4">Atuação em Estruturação</h4>
                <p className="text-dark/80 font-light leading-relaxed mb-4">
                  Acumulamos experiência direta em expansão empresarial, implantação de processos comerciais e organização de múltiplas operações em marcas de escala.
                </p>
                <ul className="space-y-2">
                  {[
                    'Estruturação de modelos comerciais',
                    'Implantação de equipes e líderes',
                    'Padronização de processos de venda',
                    'Gestão para múltiplas unidades',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-dark/70 font-light text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60 flex-shrink-0 mt-1.5"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark/5 p-8 rounded-sm space-y-4">
                <h4 className="text-dark text-sm font-bold uppercase tracking-widest">Resultado da Experiência</h4>
                <ul className="space-y-2">
                  {[
                    'Expansão com método',
                    'Gestão orientada a dados',
                    'Estrutura antes da escala',
                    'Auditoria de qualidade centralizada',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-dark/70 font-light text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60 flex-shrink-0 mt-1.5"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-4xl font-bold text-terracotta mb-1">Múltiplas</div>
                    <div className="text-[10px] text-dark/50 uppercase tracking-widest font-bold">Unidades com padrão unificado</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-terracotta mb-1">100%</div>
                    <div className="text-[10px] text-dark/50 uppercase tracking-widest font-bold">Acompanhamento Sistêmico</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* ─── Case 3 ─── */}
      <Section dark id="marketing-360" className="py-24 pb-32 md:py-32 md:pb-40 lg:py-48 lg:pb-64 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimatedSection animation="enter-left" className="space-y-8 lg:space-y-10">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Especialização Técnica</span>
              <Heading level={2} className="!text-4xl md:!text-5xl lg:!text-6xl !font-serif !mb-6 italic">
                Marketing 360 <span className="text-gold">Aplicado ao Food</span>
              </Heading>
              <div className="w-24 h-0.5 bg-gold/50"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-darker p-10 border-l-4 border-gold shadow-2xl">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Contexto Estratégico</h4>
                <p className="text-gray-400 font-light leading-relaxed text-lg italic mb-4">
                  Operações food que dependem exclusivamente de marketplaces vivem sob pressão constante de margem. Criamos independência.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Marketing de Alta Performance</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Estratégia de posicionamento digital',
                    'Gestão estratégica de tráfego (ROI)',
                    'Estruturação de funil próprio',
                    'Growth aplicado ao segmento food',
                    'Estratégias de retenção e LTV',
                    'Maximização de ticket médio',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-gold" />
                      </div>
                      <span className="text-sm font-light tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gold/5 p-8 rounded-sm space-y-4">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Transformação Digital</h4>
                <div className="pt-4 grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">Evolução</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Posicionamento Consolidado</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">Independência</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Canais Proprietários</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="enter-right" className="flex flex-col gap-8">
            <div className="relative group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[100px] group-hover:bg-gold/10 transition-colors"></div>
              <div className="relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=2000"
                  alt="Professional Web Development and Strategy"
                  className="w-full h-auto transition-all duration-1000 scale-105 group-hover:scale-100 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="absolute bottom-6 -right-6 bg-gold p-6 max-w-[200px] hidden md:block group-hover:-translate-x-4 transition-transform duration-500 shadow-2xl z-10">
                <p className="text-dark font-serif italic text-sm font-bold">"Eficiência digital que liberta a marca."</p>
              </div>
            </div>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
                  alt="Digital Marketing Strategy Execution"
                  className="w-full h-auto transition-all duration-1000 scale-105 group-hover:scale-100 opacity-90 group-hover:opacity-100"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </div>
  );
};

export default Projects;
