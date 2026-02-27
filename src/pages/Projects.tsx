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

      {/* Case 1: Operação Food com 4 Pontos e Indústria Própria */}
      <Section dark id="operacao-food" className="border-t border-white/5 pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-24 lg:pb-48 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 lg:space-y-10 animate-fade-in-up">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Case 01 — Destaque</span>
              <Heading level={2} className="!text-5xl md:!text-6xl !font-serif !mb-6 italic">
                Operação <span className="text-gold">Food Completa</span>
              </Heading>
              <div className="w-24 h-0.5 bg-gold/50"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-darker p-10 border-l-4 border-gold shadow-2xl">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">O Desafio</h4>
                <p className="text-gray-400 font-light leading-relaxed text-lg italic">
                  "O principal obstáculo era a falta de conexão estruturada entre a capacidade produtiva e as pontas de venda físicas e digitais."
                </p>
                <p className="text-gray-400 font-light leading-relaxed mt-4">
                  A operação possuía 4 pontos de venda e uma indústria própria, mas sofria com processos fragmentados, ausência de arquitetura comercial clara e um marketing que não refletia a qualidade real da operação.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Nossa Solução</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  Implementamos nossa metodologia de Arquitetura Comercial integrada ao Marketing 360 e soluções de Tecnologia, unificando processos, controlando as pontas e consolidando o funil digital.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Estruturação Completa das Unidades',
                    'Desenvolvimento de Funil Próprio',
                    'Consolidação da Presença Digital',
                    'Implementação de Tecnologia e CRM',
                    'Alinhamento entre Indústria e Lojas'
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
                  A operação ganhou previsibilidade e escala, gerando um ecossistema independente e alavancando os resultados consolidados através de processos estruturados e de um ecossistema digital.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">100%</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Processo Unificado</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">Escala</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Crescimento Estruturado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
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
          </div>
        </div>
      </Section>

      {/* Case 2: Experiência Estratégica */}
      <Section cream id="expansao" className="py-24 md:py-32 lg:py-48 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-8">
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
          </div>

          <div className="order-1 lg:order-2 space-y-8 lg:space-y-10 animate-fade-in-up">
            <div>
              <span className="text-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Case 02 — Experiência Estratégica</span>
              <Heading level={2} className="!text-5xl md:!text-6xl !font-serif !mb-6 italic !text-dark">
                Expansão e <span className="text-terracotta">Estruturação Comercial</span>
              </Heading>
              <div className="w-24 h-0.5 bg-terracotta/20"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-10 border-l-4 border-dark shadow-2xl">
                <h4 className="text-dark text-sm font-bold uppercase tracking-widest mb-4">O Desafio</h4>
                <p className="text-dark/80 font-light leading-relaxed text-lg italic">
                  "Lidar com a complexidade de gerenciar a performance em filiais, mantendo o mesmo padrão de atendimento e conversão."
                </p>
                <p className="text-dark/80 font-light leading-relaxed mt-4">
                  O crescimento em múltiplas unidades gerava dependência de gerentes específicos, e os indicadores variavam bruscamente, tornando as metas e os lucros de expansão muito imprevisíveis.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-dark text-sm font-bold uppercase tracking-widest">Nossa Solução</h4>
                <p className="text-dark/80 font-light leading-relaxed">
                  Realizamos a implantação completa de times e processos comerciais padronizados, inserindo KPIs definidos, treinamentos de time e estruturas sólidas para líderes de área.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Padronização de Processos de Vendas',
                    'Treinamentos de Alta Performance',
                    'Implantação de Metas e KPIs',
                    'Auditoria de Qualidade das Filiais',
                    'Formação de Gerentes Comerciais',
                    'Painel de Acompanhamento Centralizado'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-dark/80">
                      <div className="w-6 h-6 rounded-full bg-dark/10 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-dark" />
                      </div>
                      <span className="text-sm font-light tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark/5 p-8 rounded-sm space-y-4">
                <h4 className="text-dark text-sm font-bold uppercase tracking-widest">Impacto Operacional</h4>
                <p className="text-dark/80 font-light text-sm leading-relaxed">
                  Criamos uma base sólida de gestão que permitia replicar o sucesso de uma loja em outra de modo sistemático.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-4xl font-bold text-terracotta mb-1">Múltiplas</div>
                    <div className="text-[10px] text-dark/50 uppercase tracking-widest font-bold">Unidades Padronizadas</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-terracotta mb-1">100%</div>
                    <div className="text-[10px] text-dark/50 uppercase tracking-widest font-bold">Acompanhamento Sistêmico</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case 3: Marketing 360 */}
      <Section dark id="marketing-360" className="py-24 pb-32 md:py-32 md:pb-40 lg:py-48 lg:pb-64 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 lg:space-y-10 animate-fade-in-up">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Case 03 — Marketing 360</span>
              <Heading level={2} className="!text-5xl md:!text-6xl !font-serif !mb-6 italic">
                Crescimento <span className="text-gold">Estruturado</span>
              </Heading>
              <div className="w-24 h-0.5 bg-gold/50"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-darker p-10 border-l-4 border-gold shadow-2xl">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">O Desafio</h4>
                <p className="text-gray-400 font-light leading-relaxed text-lg italic">
                  "Sair da dependência do acaso e criar uma máquina previsível de aquisição de novos clientes e posicionamento forte no meio digital."
                </p>
                <p className="text-gray-400 font-light leading-relaxed mt-4">
                  A operação não possuía uma marca forte e contínua no ambiente online que transmitisse autoridade, dependendo exclusivamente de ações orgânicas pontuais ou de plataformas externas, minando suas margens.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Nossa Solução</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  Desenvolvemos a estratégia completa de Marketing 360: unimos branding e conteúdo premium a metodologias diretas de aquisição e tráfego pago altamente segmentado.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Estratégia de Posicionamento Digital',
                    'Gestão de Tráfego e Aquisição Ativa',
                    'Criação de Conteúdo Estratégico',
                    'Growth Hacking para Food Service',
                    'Retenção de Clientes e Estruturação de Base',
                    'Maximização de Ticket no Digital'
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
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">Impacto Financeiro</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  Construímos uma base fiel de clientes onde o custo de aquisição tornou-se previsível e a percepção de valor da marca foi elevada exponencialmente.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">Evolução</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">De Marca a Ouro</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">LTV</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Fidelidade Comprovada</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="relative group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[100px] group-hover:bg-gold/10 transition-colors"></div>
              <div className="relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070"
                  alt="Pizza Hut Case Marketing"
                  className="w-full h-auto transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute bottom-6 -right-6 bg-gold p-6 max-w-[200px] hidden md:block group-hover:-translate-x-4 transition-transform duration-500 shadow-2xl z-10">
                <p className="text-dark font-serif italic text-sm font-bold">"Eficiência digital que liberta a marca dos agregadores."</p>
              </div>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000"
                  alt="Pizza Hut Case Delivery"
                  className="w-full h-auto transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Projects;
