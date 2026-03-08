import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Globe, TrendingUp, ArrowUpRight, ChefHat, Users, Target, ShieldCheck } from 'lucide-react';
import Button from '../components/common/Button';
import Section from '../components/common/Section';
import Heading from '../components/common/Heading';
import Counter from '../components/common/Counter';
import { useDiagnosticModal } from '../context/DiagnosticModalContext';
import AnimatedSection from '../components/common/AnimatedSection';

const Home = () => {
  const { openModal } = useDiagnosticModal();

  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 md:pt-40 md:pb-24 bg-dark">
        {/* Subtle Background Pattern/Logo */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none select-none hidden lg:block">
          <div className="text-[40rem] font-serif font-bold -rotate-12 translate-x-1/4 -translate-y-1/4">LS</div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-start">

            {/* Left Content */}
            <AnimatedSection animation="enter-left" className="flex flex-col items-center lg:items-start space-y-8 text-center lg:text-left w-full">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gold/30 text-gold text-[10px] md:text-xs font-bold uppercase tracking-widest bg-gold/5">
                Consultoria e Gestão
              </div>

              <div className="space-y-4 w-full">
                <h2 className="text-white text-lg md:text-2xl font-serif font-medium tracking-wide uppercase opacity-90">
                  LS ESTRUTURA E ESTRATÉGIA
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent opacity-50 mx-auto lg:mx-0"></div>
                <Heading level={1} className="!mb-4 !leading-[1.1] !font-sans !tracking-tight text-white normal-case !text-2xl md:!text-3xl lg:!text-4xl">
                  Estrutura comercial e digital para operações food que querem escalar com <span className="italic text-gold font-serif">previsibilidade</span> e <span className="text-white underline decoration-gold/30">margem real</span>
                </Heading>
                <p className="text-sm md:text-lg text-gray-400 max-w-md md:max-w-xl lg:max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
                  Implantamos o motor comercial, organizamos aquisição própria e estruturamos processos para transformar crescimento em lucro consistente.
                </p>
              </div>

              <Button onClick={openModal} variant="primary" className="w-full sm:w-auto !rounded-md !px-6 !py-3 !text-sm md:!px-10 md:!py-4 md:!text-base !lowercase first-letter:uppercase hover:scale-105 transition-transform">
                Solicitar Diagnóstico Estratégico
              </Button>

              {/* Stats/Info Section - Hidden or Stacked on Mobile if it takes too much space, or shown below CTA */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10 w-full">
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <Check className="text-gold" size={16} />
                  </div>
                  <p className="text-xs text-gray-400 leading-snug">
                    <span className="text-white font-bold">Líderes e Gestores</span> de empresas com faturamento em escala.
                  </p>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <ArrowRight className="text-gold" size={16} />
                  </div>
                  <p className="text-xs text-gray-400 leading-snug">
                    Mais de <span className="text-white font-bold">50 empresas</span> e negócios já evoluíram com a LS.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Image Content - Side by Side (Increased Size) */}
            <AnimatedSection animation="enter-right" className="relative w-full mt-12 lg:mt-0 max-w-3xl mx-auto lg:ml-auto lg:max-w-4xl">
              <div className="grid grid-cols-2 gap-4 md:gap-6 items-start">
                {/* Image 1 */}
                <div className="space-y-4">
                  <div className="relative group aspect-[2/3] overflow-hidden rounded-xl lg:rounded-2xl shadow-2xl border border-white/10 transition-all duration-500 hover:border-gold/30">
                    <img
                      src="https://i.imgur.com/oXkAI8l.png"
                      alt="CEO - LS Estrutura Food"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-80"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-white text-base md:text-lg font-serif mb-1">LUCAS</h3>
                    <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-80">CEO</span>
                  </div>
                </div>

                {/* Image 2 */}
                <div className="space-y-4">
                  <div className="relative group aspect-[2/3] overflow-hidden rounded-xl lg:rounded-2xl shadow-2xl border border-white/10 transition-all duration-500 hover:border-gold/30">
                    <img
                      src="https://i.imgur.com/XWxJaFI.png"
                      alt="CO-FUNDADOR - LS Estrutura Food"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-80"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-white text-base md:text-lg font-serif mb-1">KENNIDI</h3>
                    <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-80">CO-FUNDADOR</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements - Desktop Only */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold/10 hidden lg:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-gold/10 hidden lg:block"></div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <Section cream>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimatedSection animation="enter-left" className="relative group">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-terracotta group-hover:border-terracotta/60 transition-colors duration-500"></div>
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://i.imgur.com/va0lZ8H.png"
                alt="Estrutura Food Operacional"
                className="w-full h-auto transition-all duration-700 transform hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-terracotta group-hover:border-terracotta/60 transition-colors duration-500"></div>
          </AnimatedSection>
          <AnimatedSection animation="enter-right" className="space-y-6">
            <h2 className="text-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-4">Arquitetura de Crescimento</h2>
            <Heading level={2}>
              Estrutura Comercial, Aquisição Estratégica e <span className="text-terracotta">Gestão Operacional</span>
            </Heading>
            <div className="space-y-4 text-lg leading-relaxed text-dark/80">
              <p>
                Operações food não escalam por mais posts ou anúncios. Escalam quando comercial, aquisição e operação funcionam como um sistema.
              </p>
              <p>
                A LS Estrutura Food implanta o motor completo de crescimento da sua empresa. Do diagnóstico estratégico à organização de processos, tecnologia e equipe, estruturamos o modelo que sustenta escala com previsibilidade e margem real.
              </p>
              <p className="font-semibold text-dark">
                Não entregamos campanhas isoladas. Implantamos estrutura para transformar demanda em lucro consistente.
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Marketing 360 → Posicionamento e Aquisição',
                'Direção Empresarial → Da Operação à Escala',
                'Tecnologia e Automação'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center font-medium group text-sm uppercase tracking-wider text-dark">
                  <div className="w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center mr-4 group-hover:bg-terracotta transition-colors">
                    <Check className="text-terracotta group-hover:text-white" size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/services" variant="outline" className="!border-terracotta !text-terracotta hover:!bg-terracotta hover:!text-white group">
              Conheça Nosso Método de Estruturação <ArrowRight className="ml-2 inline group-hover:translate-x-2 transition-transform" size={16} />
            </Button>
          </AnimatedSection>
        </div>
      </Section>

      {/* Services Preview */}
      <Section dark className="overflow-hidden">
        <AnimatedSection animation="zoom-in" className="text-center mb-16 md:mb-24">
          <span className="text-gold text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-4 block">Ecossistema de Escala</span>
          <Heading level={2} className="!text-4xl md:!text-6xl !mb-6">
            Nossas <span className="text-gold italic font-serif">Soluções</span>
          </Heading>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Arquitetura de crescimento completa, desenhada para transformar sua operação food em um motor de lucro previsível.
          </p>
        </AnimatedSection>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 lg:gap-8 pb-12 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar snap-x snap-mandatory">
          {[
            {
              title: 'Marketing 360',
              subtitle: 'Posicionamento e Aquisição',
              desc: 'Estruturamos sua presença digital para atrair e converter com previsibilidade.',
              icon: <Globe size={32} />,
              link: 'marketing',
              color: 'gold',
              bgGrad: 'from-gold/20 via-gold/5 to-transparent',
              iconBg: 'bg-gold/10 text-gold group-hover:bg-gold',
              border: 'group-hover:border-gold/50'
            },
            {
              title: 'Direção Empresarial',
              subtitle: 'Da Operação à Escala',
              desc: 'Organizamos o crescimento do modelo operacional ao processo de vendas.',
              icon: <ChefHat size={32} />,
              link: 'direcao',
              color: 'terracotta',
              bgGrad: 'from-terracotta/20 via-terracotta/5 to-transparent',
              iconBg: 'bg-terracotta/10 text-terracotta group-hover:bg-terracotta',
              border: 'group-hover:border-terracotta/50'
            },
            {
              title: 'Tecnologia e Automação',
              subtitle: 'Ativos Digitais Próprios',
              desc: 'Implantamos ativos que aumentam o controle, a margem e a inteligência de dados.',
              icon: <TrendingUp size={32} />,
              link: 'tecnologia',
              color: 'blue',
              bgGrad: 'from-blue-500/20 via-blue-500/5 to-transparent',
              iconBg: 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500',
              border: 'group-hover:border-blue-500/50',
              features: [
                'Catálogo Digital Próprio',
                'Landing Pages de Escala',
                'Automação de CRM',
                'BI e Dashboards Reais'
              ]
            },
          ].map((service, index) => (
            <AnimatedSection
              key={index}
              animation="enter-right"
              delay={index * 200}
              className="flex-1 min-w-[290px] md:min-w-0 snap-center h-full"
            >
              <Link
                to={`/services#${service.link}`}
                className={`group relative bg-[#071622] p-8 md:p-12 border border-white/5 rounded-3xl transition-all duration-700 overflow-hidden flex flex-col h-full ${service.border} hover:-translate-y-4 shadow-2xl`}
              >
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.bgGrad} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:text-dark shadow-2xl`}>
                    {service.icon}
                  </div>

                  <Heading level={3} className="!text-2xl !font-bold !mb-2 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </Heading>
                  <div className={`text-sm font-black mb-6 uppercase tracking-[0.2em] ${service.color === 'gold' ? 'text-gold' : service.color === 'terracotta' ? 'text-terracotta' : 'text-blue-400'}`}>
                    {service.subtitle}
                  </div>

                  <p className="text-gray-400 mb-8 text-base leading-relaxed font-light">
                    {service.desc}
                  </p>

                  {service.features && (
                    <ul className="mb-10 space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-[10px] text-gray-500 uppercase tracking-widest font-black group-hover:text-gray-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-8 border-t border-white/5 group-hover:border-white/10 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.3em] font-black uppercase text-gray-500 group-hover:text-white transition-all">
                      Conhecer Detalhes
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white transition-all duration-500 group-hover:rotate-45 ${service.color === 'gold' ? 'group-hover:bg-gold' : service.color === 'terracotta' ? 'group-hover:bg-terracotta' : 'group-hover:bg-blue-500'} group-hover:text-dark`}>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent ${service.color === 'gold' ? 'via-gold/50' : service.color === 'terracotta' ? 'via-terracotta/50' : 'via-blue-500/50'} to-transparent w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000`}></div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile Nav Indicator */}
        <div className="flex md:hidden justify-center items-center gap-3 mt-4">
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
          </div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">Deslize para ver todas</span>
        </div>
      </Section>

      {/* Aplicação Real */}
      <Section cream className="relative">
        <AnimatedSection animation="enter-left" className="flex flex-col md:flex-row justify-between items-center mb-10 lg:mb-16 gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <span className="text-terracotta text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Experiência Aplicada em Estruturação e Crescimento</span>
            <Heading level={2} className="!mb-0 !text-4xl md:!text-5xl">
              Aplicação <span className="text-terracotta italic font-serif">Real</span>
            </Heading>
          </div>
          <Button to="/services#metodo" variant="outline" className="!border-terracotta !text-terracotta hover:!bg-terracotta hover:!text-white group !rounded-full !px-8 text-xs md:text-sm">
            Conhecer Nossa Metodologia <ArrowRight className="ml-2 inline group-hover:translate-x-2 transition-transform" size={16} />
          </Button>
        </AnimatedSection>

        <div className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-3 gap-6 lg:gap-10 pt-16 pb-12 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar snap-x snap-mandatory items-stretch">
          {[
            {
              title: 'Operação Food com 4 Pontos e Indústria Própria',
              subtitle: 'Arquitetura Comercial + Marketing 360 + Tecnologia',
              category: 'Destaque',
              tagColor: 'bg-gold text-dark',
              image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070',
              results: [
                'Estruturação completa',
                'Organização de funil próprio',
                'Consolidação digital',
                'Crescimento estruturado'
              ],
              btnText: 'Ver aplicação completa',
              anchor: 'operacao-food'
            },
            {
              title: 'Experiência em Expansão e Estrutura Comercial',
              subtitle: 'Atuação em operações com múltiplas unidades',
              category: 'Gestão Estratégica',
              tagColor: 'bg-terracotta text-white',
              image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2070',
              results: [
                'Implantação de componentes',
                'Padronização de processos',
                'Escala com controle real'
              ],
              btnText: 'Conhecer experiência',
              anchor: 'expansao'
            },
            {
              title: 'Crescimento estruturado com Marketing 360',
              subtitle: 'Posicionamento + Aquisição + Conteúdo Estratégico',
              category: 'Marketing 360',
              tagColor: 'bg-[#003d5b] text-white border border-white/20',
              image: '/images/marketing-digital-sites.png',
              results: [
                'Autoridade digital',
                'Aquisição previsível',
                'Ativos próprios'
              ],
              btnText: 'Entender como aplicamos',
              anchor: 'marketing-360'
            }
          ].map((project, index) => (
            <AnimatedSection
              key={index}
              animation="enter-right"
              delay={index * 200}
              className="flex-1 min-w-[300px] sm:min-w-[380px] lg:min-w-0 snap-center h-full"
            >
              <Link
                to={`/projects#${project.anchor}`}
                className="group relative flex flex-col bg-[#071622] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 lg:hover:-translate-y-3 border border-white/5 hover:border-gold/30 h-full"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] lg:group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071622] via-transparent to-transparent opacity-60"></div>

                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-4 py-1.5 ${project.tagColor} text-[10px] font-black uppercase tracking-[0.2em] rounded-lg shadow-2xl`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1 bg-gradient-to-b from-[#071622] to-[#020609] relative z-10 -mt-6 rounded-t-3xl">
                  <span className="text-gold/80 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                    {project.subtitle}
                  </span>

                  <Heading level={3} className="!text-xl md:!text-2xl !mb-6 !leading-[1.3] !text-white group-hover:text-gold transition-colors duration-500 !font-sans !font-bold">
                    {project.title}
                  </Heading>

                  {project.results && project.results.length > 0 && (
                    <div className="mb-8 space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent"></div>
                        <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest whitespace-nowrap">Resultados</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-gold/30 to-transparent"></div>
                      </div>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {project.results.map((res, rIdx) => (
                          <li key={rIdx} className="flex items-center text-[11px] text-gray-400 font-medium group-hover:text-gray-200 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mr-2 flex-shrink-0"></div>
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-white transition-all transform lg:group-hover:translate-x-1 duration-500">
                      {project.btnText}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-dark transition-all duration-700 shadow-2xl lg:group-hover:rotate-45">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 lg:group-hover:opacity-5 transition-opacity pointer-events-none duration-1000 bg-gradient-to-tr from-white via-transparent to-white"></div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile Swipe Navigation Indicator */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-2 group">
          <div className="w-8 h-1 bg-gold/40 rounded-full animate-pulse"></div>
          <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Deslize para ver mais</span>
          <div className="w-8 h-1 bg-gold/40 rounded-full animate-pulse"></div>
        </div>
      </Section>

      {/* Stats/CTA Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-dark overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <div className="text-[25rem] font-serif font-bold whitespace-nowrap -rotate-12 translate-y-32 text-white">
            LS FOOD LS FOOD
          </div>
        </div>

        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { val: 50, suffix: '+', label: 'Empresas Atendidas', icon: <Users size={24} /> },
              { prefix: '+', val: 10, suffix: '', label: 'Experiência de Mercado', icon: <TrendingUp size={24} /> },
              { val: 100, suffix: '%', label: 'Foco em Resultados', icon: <Target size={24} /> },
              { prefix: '', val: 24, suffix: '/7', label: 'Suporte Estratégico', icon: <ShieldCheck size={24} /> }
            ].map((stat, i) => (
              <AnimatedSection
                key={i}
                animation="zoom-in"
                delay={i * 150}
                className={`flex-1 ${i < 2 ? 'hidden lg:block md:block' : ''}`}
              >
                <div className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-sm hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-500 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-dark transition-all duration-500">
                      {stat.icon}
                    </div>
                    <div className="space-y-1">
                      <Counter
                        end={stat.val}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                        className="text-4xl md:text-5xl font-sans font-bold text-white group-hover:text-gold transition-colors"
                      />
                      <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
