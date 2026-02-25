import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';

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

  const projects = [
    {
      title: 'Posicionamento e Branding',
      client: 'Chá das Cinco',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070',
      category: 'Estratégia de Marca',
    },
    {
      title: 'Estruturação de Equipes',
      client: 'Franquias BK',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2070',
      category: 'Consultoria Especializada',
    },
    {
      title: 'Crescimento de 300% em Vendas',
      client: 'Pizza Hut Marketing',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2070',
      category: 'Marketing Digital 360º',
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

      {/* Detailed Case Studies */}

      {/* Case 1: Chá das Cinco */}
      <Section dark id="cha-das-cinco" className="border-t border-white/5 py-48 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-10 animate-fade-in-up">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Case 01 — Branding & Estratégia</span>
              <Heading level={2} className="!text-5xl md:!text-6xl !font-serif !mb-6 italic">
                Chá das <span className="text-gold">Cinco</span>
              </Heading>
              <div className="w-24 h-0.5 bg-gold/50"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-darker p-10 border-l-4 border-gold shadow-2xl">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">O Desafio</h4>
                <p className="text-gray-400 font-light leading-relaxed text-lg italic">
                  "O principal obstáculo era a desconexão entre a qualidade artesanal do produto e a forma como a marca era percebida no PDV e no digital."
                </p>
                <p className="text-gray-400 font-light leading-relaxed mt-4">
                  A marca sofria com uma identidade visual que remetia ao amadorismo, impedindo a entrada em empórios de luxo e a prática de preços que refletissem a margem necessária para sustentabilidade do negócio.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Nossa Solução</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  Implementamos um plano de rebranding 360º, focando na ancestralidade e na pureza dos ingredientes. Criamos uma nova linguagem fotográfica e transformamos as embalagens em itens de desejo.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Redesign de Logotipo e Identidade',
                    'Estratégia de Storytelling de Marca',
                    'Packaging Design de Alta Performance',
                    'Planejamento de Lançamento Digital',
                    'Curadoria de Experiência do Cliente'
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
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Impacto Estratégico</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  Além do aumento direto em vendas, a marca conseguiu fechar contratos com 12 novos pontos de venda premium em apenas 4 meses, elevando o ticket médio em 85% sem perder a base de clientes fiel.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">150%</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Aumento em Engajamento</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">2X</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Vendas Linha Premium</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div className="relative group">
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-gold/5 rounded-full blur-[100px] group-hover:bg-gold/10 transition-colors"></div>
              <div className="relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
                  alt="Chá das Cinco Case Branding"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
              </div>
              <div className="absolute bottom-6 -left-6 bg-gold p-6 max-w-[200px] hidden md:block group-hover:translate-x-4 transition-transform duration-500 shadow-2xl z-10">
                <p className="text-dark font-serif italic text-sm font-bold">"Evolução visual que se traduziu em lucratividade real."</p>
              </div>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=2000"
                  alt="Chá das Cinco Case Packaging"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case 2: Franquias BK */}
      <Section darker id="franquias-bk" className="py-48 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col gap-8">
            <div className="relative group">
              <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-gold/5 rounded-full blur-[100px] group-hover:bg-gold/10 transition-colors"></div>
              <div className="relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2070"
                  alt="Franquias BK Case Management"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
              </div>
              <div className="absolute top-6 -right-6 bg-gold p-6 max-w-[200px] hidden md:block group-hover:-translate-x-4 transition-transform duration-500 shadow-2xl z-10">
                <p className="text-dark font-serif italic text-sm font-bold">"A padronização foi o divisor de águas para nossa expansão."</p>
              </div>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000"
                  alt="Franquias BK Case Training"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
              </div>
            </div>
          </div>

          <div className="space-y-10 animate-fade-in-up">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Case 02 — Gestão Comercial & Processos</span>
              <Heading level={2} className="!text-5xl md:!text-6xl !font-serif !mb-6 italic">
                Franquias <span className="text-gold">BK</span>
              </Heading>
              <div className="w-24 h-0.5 bg-gold/50"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-dark p-10 border-l-4 border-gold shadow-2xl">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">O Desafio</h4>
                <p className="text-gray-400 font-light leading-relaxed text-lg">
                  Unificar a cultura de vendas e a qualidade de entrega em 8 diferentes unidades, eliminando a variação de resultados que dependia exclusivamente do talento individual de gerentes específicos.
                </p>
                <p className="text-gray-400 font-light leading-relaxed mt-4">
                  O gargalo comercial impedia a franqueadora de prever lucros e manter um padrão de atendimento que respeitasse as diretrizes da marca global enquanto otimizava as vendas locais.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Nossa Solução</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  Criamos o "Manual LS de Performance Comercial", um guia passo a passo adaptado à realidade do Fast Food. Implementamos treinamentos imersivos e ferramentas de acompanhamento em tempo real.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Manual de Processos Comerciais',
                    'Academia de Liderança de Vendas',
                    'Sistemas de Gamificação Interna',
                    'Painéis de Gestão à Vista (BI)',
                    'Recrutamento Perfil de Alta Performance',
                    'Scripts de Upselling de Impacto'
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
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Impacto Estratégico</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  Com processos claros, a rotatividade de equipe (turnover) comercial reduziu em 40% nos primeiros 6 meses. O aumento médio de ticket (upselling) subiu de 12% para 28% em todas as unidades.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">Escalável</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Fator de Expansão</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">100%</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Padronização de Equipes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case 3: Pizza Hut Marketing */}
      <Section dark id="pizza-hut" className="py-48 pb-64 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-10 animate-fade-in-up">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Case 03 — Marketing Digital 360º</span>
              <Heading level={2} className="!text-5xl md:!text-6xl !font-serif !mb-6 italic">
                Pizza Hut <span className="text-gold">Marketing</span>
              </Heading>
              <div className="w-24 h-0.5 bg-gold/50"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-darker p-10 border-l-4 border-gold shadow-2xl">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">O Desafio</h4>
                <p className="text-gray-400 font-light leading-relaxed text-lg">
                  Romper a barreira das taxas de 27% a 30% cobradas por aplicativos de terceiros, direcionando o tráfego para os canais próprios da marca sem perder volume de pedidos.
                </p>
                <p className="text-gray-400 font-light leading-relaxed mt-4">
                  A marca precisava de um funil de conversão proprietário que fosse tão eficiente quanto os grandes players de mercado, mantendo a rentabilidade da operação de delivery.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Nossa Solução</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  Desenvolvemos uma estratégia de aquisição hiper-segmentada, utilizando dados de geolocalização e comportamento de consumo para impactar o cliente no momento exato do desejo.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Tráfego Pago (Meta & Google Ads)',
                    'CRM e Automação de WhatsApp',
                    'Programas de Fidelidade e Retenção',
                    'Otimização de LPs de Venda Própria',
                    'Growth Hacking para Delivery',
                    'Atribuição de Dados Avançada'
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
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Impacto Estratégico</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  migramos 35% do volume total de pedidos para o canal direto em 90 dias. O custo por aquisição de cliente (CAC) foi 60% menor que o projetado inicialmente, gerando margem de lucro imediata.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">300%</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">ROI em Tráfego Pago</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">+50k</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Base Clientes Ativos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div className="relative group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[100px] group-hover:bg-gold/10 transition-colors"></div>
              <div className="relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2070"
                  alt="Pizza Hut Case Marketing"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
              </div>
              <div className="absolute bottom-6 -right-6 bg-gold p-6 max-w-[200px] hidden md:block group-hover:-translate-x-4 transition-transform duration-500 shadow-2xl z-10">
                <p className="text-dark font-serif italic text-sm font-bold">"Eficiência digital que liberta a marca dos agregadores."</p>
              </div>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000"
                  alt="Pizza Hut Case Delivery"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Projects;
